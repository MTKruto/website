// deno-lint-ignore-file no-explicit-any
import { Telegram } from "../../_components/Telegram.tsx";
import { GitHub } from "../../_components/GitHub.tsx";

export default (
  { title, url, children, prev, next, hide_toc, toc, walkthrough }: Lume.Data,
  { bc, getTitle }: Lume.Helpers,
) => {
  const hasToc = !hide_toc && toc?.length > 0;
  const audience = walkthrough?.track === "user" || walkthrough?.track === "bot" ? walkthrough.track : undefined;

  function Bc() {
    const items = bc(url);

    return (
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map(([path, label]: [string, string]) => (
            <li key={path}>
              <a href={path}>{label}</a>
              <span aria-hidden="true">/</span>
            </li>
          ))}
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
    );
  }

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            {title} | {url.startsWith("/server") ? "MTKruto Server" : "MTKruto"}
          </title>
          <meta property="og:site_name" content="MTKruto" />
          <meta property="tg:site_verification" content="g7j8/rPFXfhyrq5q0QQV7EsYWv4=" />
          <meta property="article:published_time" content="" />
          <meta property="article:author" content="https://t.me/MTKruto" />
          <meta property="telegram:channel" content="@MTKruto" />
          <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#0e0f0f" media="(prefers-color-scheme: dark)" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/logo.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
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
        </head>
        <body>
          <a class="skip-link" href="#main-content">Skip to content</a>
          <main id="main-content" class="site-main">
            <Bc />
            <div class={`article page-layout${hasToc ? " page-layout-with-toc" : ""}`}>
              <article class="article__content content">
                <h1 class="page-title">
                  {title}
                  {audience && (
                    <span
                      class="inline-flex w-fit items-center"
                      style="font-size:12px;white-space:nowrap;word-break:keep-all;"
                    >
                      <span
                        class="w-fit bg-dbt select-none text-fgt"
                        style="padding:2px 8px;border-radius:12px;"
                      >
                        {audience.toUpperCase()}-ONLY
                      </span>
                    </span>
                  )}
                </h1>
                {children}
                {(next || prev) && (
                  <nav class="bottom-nav" aria-label="Documentation pagination">
                    {prev
                      ? (
                        <a class="bottom-nav-prev" href={prev}>
                          <span>Previous</span>
                          {getTitle(prev)}
                        </a>
                      )
                      : <span></span>}
                    {next
                      ? (
                        <a class="bottom-nav-next" href={next}>
                          <span>Next</span>
                          {getTitle(next)}
                        </a>
                      )
                      : <span></span>}
                  </nav>
                )}
              </article>
              {hasToc && (
                <aside class="toc">
                  <nav aria-label="On this page">
                    <div class="toc-list-wrap">
                      <ol class="toc-list">
                        {toc.map((v: any) => (
                          <li class="toc-item">
                            <a
                              href={`#${v.slug}`}
                              data-toc={`#${v.slug}`}
                              class="toc-link"
                            >
                              {v.text}
                            </a>
                            {!!v.children?.length && (
                              <ul class="toc-sublist">
                                {v?.children?.map((v: any) => (
                                  <li class="toc-item">
                                    <a
                                      href={`#${v.slug}`}
                                      data-toc={`#${v.slug}`}
                                      class="toc-link"
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
                      <div class="toc-rail" aria-hidden="true">
                        <div class="toc-rail-background"></div>
                        <div class="toc-rail-thumb"></div>
                      </div>
                    </div>
                  </nav>
                </aside>
              )}
            </div>
          </main>
          <footer class="site-footer">
            <div class="site-footer-inner">
              <div>&copy; 2023-2026 MTKruto</div>
              <nav aria-label="Community links">
                <a
                  href="https://telegram.me/MTKruto"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Telegram />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://github.com/MTKruto"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <GitHub />
                  <span>GitHub</span>
                </a>
              </nav>
            </div>
          </footer>
          <script src="/script.js" />
        </body>
      </html>
    </>
  );
};
