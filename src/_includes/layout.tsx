// deno-lint-ignore-file no-explicit-any
import { Telegram } from "../../_components/Telegram.tsx";
import { GitHub } from "../../_components/GitHub.tsx";

export default (
  { title, url, children, prev, next, hide_toc, toc, walkthrough, walkthroughProgress }: Lume.Data,
  { bc, getTitle }: Lume.Helpers,
) => {
  const hasToc = !hide_toc && toc?.length > 0;
  const audience = walkthrough?.track === "user" || walkthrough?.track === "bot" ? walkthrough.track : undefined;
  const progress = walkthroughProgress &&
      typeof walkthroughProgress.label === "string" &&
      Number.isInteger(walkthroughProgress.step) &&
      Number.isInteger(walkthroughProgress.total) &&
      walkthroughProgress.step > 0 &&
      walkthroughProgress.step <= walkthroughProgress.total
    ? walkthroughProgress
    : undefined;
  const referenceIndex = url === "/methods/" ? "methods" : url === "/types/" ? "types" : undefined;
  const searchable = !url.startsWith("/gh/") && !url.startsWith("/404") && url !== "/source-map/";
  const searchKind = url.startsWith("/methods/") ? "Methods" : url.startsWith("/types/") ? "Types" : url.startsWith("/server/") ? "Server" : "Guides";

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

  function SearchTrigger() {
    return (
      <button
        type="button"
        class="search-trigger"
        data-search-open
        aria-label="Search documentation"
        aria-haspopup="dialog"
        aria-controls="search-dialog"
        aria-keyshortcuts="Meta+K Control+K"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="8.75" cy="8.75" r="5.25" />
          <path d="m12.6 12.6 3.9 3.9" />
        </svg>
        <span>Search</span>
        <kbd data-search-shortcut aria-hidden="true">⌘ K</kbd>
      </button>
    );
  }

  function Toc() {
    if (!hasToc) return null;

    return (
      <aside class="toc">
        <button
          type="button"
          class="toc-mobile-toggle"
          aria-expanded="false"
          aria-controls="toc-navigation"
        >
          <span>On this page</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 5.5l5 5 5-5" />
          </svg>
        </button>
        <nav id="toc-navigation" aria-label="On this page">
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
                      {v.children.map((v: any) => (
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
            <div class={`page-tools${hasToc ? " page-tools-with-toc" : ""}`} data-pagefind-ignore="all">
              <Bc />
              {hasToc
                ? (
                  <div class="side-rail">
                    <SearchTrigger />
                    <Toc />
                  </div>
                )
                : <SearchTrigger />}
            </div>
            <div class={`article page-layout${hasToc ? " page-layout-with-toc" : ""}`}>
              <article
                class={`article__content content${url === "/" ? " page-home" : ""}`}
                data-pagefind-body={searchable ? "true" : undefined}
              >
                {searchable && (
                  <span
                    class="pagefind-meta"
                    data-pagefind-filter="kind"
                    data-pagefind-meta={`kind:${searchKind}`}
                  >
                    {searchKind}
                  </span>
                )}
                <h1 class="page-title" data-pagefind-meta={searchable ? "title" : undefined}>
                  {title}
                  {audience && (
                    <span
                      class="inline-flex w-fit items-center"
                      style="font-size:12px;white-space:nowrap;word-break:keep-all;"
                      data-pagefind-ignore="all"
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
                {progress && (
                  <div class="walkthrough-progress" data-pagefind-ignore="all">
                    <div class="walkthrough-progress-label">
                      {progress.label} Walkthrough <span aria-hidden="true">·</span> {progress.step} of {progress.total}
                    </div>
                    <div
                      class="walkthrough-progress-track"
                      role="progressbar"
                      aria-label={`${progress.label} walkthrough progress`}
                      aria-valuemin="1"
                      aria-valuemax={progress.total}
                      aria-valuenow={progress.step}
                    >
                      <span style={`width:${(progress.step / progress.total) * 100}%`}></span>
                    </div>
                  </div>
                )}
                {referenceIndex && (
                  <>
                    <div class="reference-filter" role="search" aria-label={`Filter ${referenceIndex}`} data-reference-filter={referenceIndex} data-pagefind-ignore="all">
                      <label class="reference-filter-label" for="reference-filter-input">
                        Filter {referenceIndex}
                      </label>
                      <div class="reference-filter-field">
                        <input
                          id="reference-filter-input"
                          class="reference-filter-input"
                          type="search"
                          placeholder={`Filter ${referenceIndex}...`}
                          autocomplete="off"
                          autocapitalize="none"
                          spellcheck="false"
                        />
                        <button type="button" class="reference-filter-clear" aria-label="Clear filter" hidden>
                          <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path d="m4 4 8 8m0-8-8 8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p class="reference-filter-empty" data-reference-filter-empty hidden data-pagefind-ignore="all"></p>
                  </>
                )}
                {children}
                {(next || prev) && (
                  <nav class="bottom-nav" aria-label="Documentation pagination" data-pagefind-ignore="all">
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
          <dialog id="search-dialog" class="search-dialog" aria-label="Search documentation">
            <div class="search-panel">
              <div class="search-panel-content">
                <div id="pagefind-search"></div>
                <button type="button" class="search-close" data-search-close aria-label="Close search">
                  <span class="search-close-desktop">Esc</span>
                  <span class="search-close-mobile">Close</span>
                </button>
                <noscript>Search requires JavaScript.</noscript>
              </div>
            </div>
          </dialog>
          <script src="/search.js" />
          <script src="/script.js" />
        </body>
      </html>
    </>
  );
};
