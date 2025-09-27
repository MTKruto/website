import {
  ClassPropertyDef,
  InterfacePropertyDef,
  LiteralPropertyDef,
} from "@deno/doc";
import { PropertyName } from "./PropertyName.tsx";
import { TsType } from "./TsType.tsx";
import { LinkGetter } from "./TsType.tsx";
import { Description } from "./Description.tsx";

export function Properties(
  { getLink, children: i }: {
    getLink: LinkGetter;
    children:
      | InterfacePropertyDef[]
      | LiteralPropertyDef[]
      | ClassPropertyDef[];
  },
) {
  return (
    <div class="flex flex-col gap-3">
      {i.map((v) => (
        <div>
          <div class="flex gap-2">
            <div class="font-mono p" id={`p_${v.name}`} data-anchor>
              <PropertyName hasType={true}>{v}</PropertyName>{" "}
              {v.tsType ? <TsType getLink={getLink}>{v.tsType}</TsType> : "any"}
            </div>
            {"jsDoc" in v && v.jsDoc?.tags &&
                v.jsDoc.tags.some((v) =>
                  v.kind == "unsupported" && v.value == "@discriminator"
                )
              ? (
                <div class="flex items-center">
                  <div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">
                    DISCRIMINATOR
                  </div>
                </div>
              )
              : null}
          </div>
          {"jsDoc" in v && v.jsDoc?.doc && (
            <div class="pl-3">
              <Description>{v.jsDoc.doc}</Description>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
