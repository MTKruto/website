import { Prism } from "../prism.ts";

export function Code({ children }: { children: string }) {
  const lines = children.split("\n");
  let language = lines[0].split(/\s/)[0].replaceAll("`", "");
  language = language == "ts" ? "typescript" : language;
  children = Prism.highlight(
    lines.slice(1).slice(0, -1).join("\n"),
    Prism.languages[language],
    language,
  );
  return (
    <pre>
      <code
dangerouslySetInnerHTML={{
        __html: children,
      }}/>
    </pre>
  );
}
