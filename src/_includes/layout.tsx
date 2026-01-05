import { Telegram } from "./Telegram.tsx";
import { GitHub } from "./GitHub.tsx";

const fonts = Array.from(Deno.readDirSync("src/static/fonts"))
  .map((v) => v.name.replaceAll("src/", "/"));

export default (
  { title, children, toc, hide_toc, next, prev, url }: Lume.Data,
  filters: Lume.Data,
) => {
  function Bc() {
    const items = filters.bc(url).map((v: [string, string]) => <a href={v[0]}>{v[1]}</a>);

    return (
      <div class="text-xs bc w-full">
        <div class="link-content">
          {items.map((v) =>
            // deno-lint-ignore jsx-key
            <>{v} /{" "}</>
          )}
        </div>
      </div>
    );
  }

  return (
    <html style="scroll-padding-top: 10px">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {title} | {url.startsWith("/server") ? "MTKruto Server" : "MTKruto"}
        </title>
        <meta property="og:site_name" content="MTKruto" />
        <link rel="stylesheet" href="/reset.css" />
        <link rel="stylesheet" href="/migrate.css" />
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="/github.css"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="stylesheet"
          href="/github-dark.css"
          media="(prefers-color-scheme: dark)"
        />
        <script src="/main.js" />
        {fonts.map((v) => (
          <link
            rel="preload"
            href={`/fonts/${v}`}
            as="font"
            type="font/woff2"
            // @ts-ignore
            crossOrigin=""
          />
        ))}
      </head>
      <body class="bg-bg text-fg overflow-x-hidden">
        <Bc />
        <main class="min-h-screen w-full xl:flex px-5 pt-[25px]">
          <div class="max-w-screen-md w-full mx-auto flex gap-2 relative">
            <div class="content w-full grow">
              <h1>
                {title}
              </h1>
              {children}
              {(next || prev) && (
                <nav class="bottom-nav">
                  {prev ? <a href={prev}>← {filters.getTitle(prev)}</a> : <span></span>}
                  {next ? <a href={next}>{filters.getTitle(next)} →</a> : <span></span>}
                </nav>
              )}
            </div>
            {!hide_toc && (
              <div class="toc absolute top-0 left-full h-full">
                <nav class="pt-4 pl-4 sticky top-0 h-auto self-start text-[13px]">
                  <ol>
                    {toc.map((v: any) => (
                      <li>
                        <a
                          href={`#${v.slug}`}
                          data-toc={`#${v.slug}`}
                          class="toc-link truncate block"
                        >
                          {v.text}
                        </a>
                        {!!v.children?.length && (
                          <ul>
                            {v?.children?.map((v: any) => (
                              <li>
                                <a
                                  href={`#${v.slug}`}
                                  data-toc={`#${v.slug}`}
                                  class="toc-link truncate block"
                                >
                                  {v.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            )}
          </div>
        </main>
        <div class="relative">
          <div class="spacer" />
          <footer class="w-full px-5 py-5 sticky bottom-0 bg-bg">
            <div class="max-w-screen-md w-full mx-auto flex gap-5 items-center justify-between text-xs">
              <div class="opacity-50">&copy; 2023-2026 MTKruto</div>
              <div class="flex gap-2 opacity-50">
                <a
                  href="https://telegram.me/MTKruto"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Telegram />
                </a>
                <a
                  href="https://github.com/MTKruto"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <GitHub />
                </a>
              </div>
            </div>
          </footer>
        </div>
        <script src="/script.js" />
      </body>
    </html>
  );
};
