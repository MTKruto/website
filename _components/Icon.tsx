import { locate } from "@iconify/json";

interface IconData {
  body: string;
  width?: number;
  height?: number;
}

interface Collection {
  icons: Record<string, IconData>;
  width?: number;
  height?: number;
}

function getCollection(prefix: string): Collection {
  const path = locate(prefix);
  return JSON.parse(Deno.readTextFileSync(path.toString()))
}

export function Icon(
  { name, size, ...rest }: { name: string; size?: number;[key: string]: unknown },
) {
  const [prefix, icon] = name.split(":");
  if (!prefix || !icon) {
    throw new Error(
      `Invalid icon name "${name}". Use "prefix:icon" format (e.g. "mdi:home").`,
    );
  }

  const collection = getCollection(prefix);
  const data = collection.icons[icon];
  if (!data) {
    throw new Error(`Icon "${icon}" not found in collection "${prefix}".`);
  }

  const iconW = data.width ?? collection.width ?? 20;
  const iconH = data.height ?? collection.height ?? 20;
  const w = size ?? iconW;
  const h = size ?? iconH;
  const viewBox = `0 0 ${iconW} ${iconH}`;

  return (
    <svg
      width={w}
      height={h}
      viewBox={viewBox}
      {...rest}
      dangerouslySetInnerHTML={{ __html: data.body }}
    />
  );
}
