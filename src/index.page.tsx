import { Icon } from "../_components/Icon.tsx";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);

const fonts = Array.from(Deno.readDirSync("src/static/fonts"))
  .map((v) => v.name.replaceAll("src/", "/"));

export const layout = "";

export const title = "MTKruto";
const subtitle = "A Telegram client library for JavaScript, that you can depend on";
const logo = "/logo.svg";

const links = {
  github: "https://github.com/mtkruto/mtkruto",
  telegram: "https://t.me/mtkruto",
};

const nav = {
  features: { text: "Features", id: "features" },
  spotlight: { text: "Spotlight", id: "spotlight" },
  directory: { text: "Directory", id: "directory" },
};

const hero = {
  heading: "Cross-runtime JavaScript library for building Telegram clients",
  subheading: "JavaScript Telegram client for Node.js, Bun, Deno, and browsers",
  cta: { text: "View Documentation", href: "#" },
};

const featuresMajors = [
  {
    color: "red",
    eyebrow: "Cross-runtime",
    title: "Run Anywhere",
    description: "MTKruto supports Node.js, Deno, browsers, and Bun. Check our installation guide and extended documentation on runtime compatibility here.",
    type: "icons",
    icons: [
      ["logos:nodejs-icon-alt"],
      ["logos:deno"],
      ["logos:bun"],
      ["logos:safari", "logos:firefox", "logos:chrome"],
    ],
  },
  {
    color: "green",
    eyebrow: "Type-safe",
    title: "Catch Early",
    description: "MTKruto is written in TypeScript with accurate typings. Use the methods, requests, and responses with confidence knowing that you can detect issues without running your app.",
    type: "code",
    code: `/** @unlisted */
export interface GiftComponentRarityEpic {
  /** @discriminator */
  type: "epic";
}

/** @unlisted */
export interface GiftComponentRarityLegendary {
  /** @discriminator */
  type: "legendary";
}

/** The rarity of a gift component. */
export type GiftComponentRarity = GiftComponentRarityPerMille |
  GiftComponentRarityUncommon | GiftComponentRarityRare |
  GiftComponentRarityEpic | GiftComponentRarityLegendary;`,
  },
  {
    color: "sky",
    eyebrow: "Web-first",
    title: "Prioritizes the Web",
    description: "MTKruto prefers standard Web APIs over runtime-specific ones, so the same mental model carries across browsers, workers, servers, and modern JavaScript runtimes.",
    type: "chips",
    chips: [
      "crypto.subtle",
      "WebSocket",
      "ReadableStream",
      "fetch()",
      "SharedWorker",
      "Blob",
    ],
  },
  {
    color: "amber",
    eyebrow: "High-level API",
    title: "Easy to Use",
    description: "MTKruto ships with a high-level API on top of Telegram, letting you reach for expressive methods first and only drop lower when you actually need to.",
    type: "code",
    code: `await client.sendMessage(chat.id, "Hello from MTKruto!", {
  isSilent: true,
});

const me = await client.getMe();
console.debug(me.username);

await client.forwardMessages(fromChatId, chat.id, [messageId]);

await client.pinMessage(chat.id, messageId);

await client.setReactions(chat.id, messageId, [{ type: "emoji", emoji: "👍" }]);`,
  },
  {
    color: "indigo",
    eyebrow: "Middleware",
    title: "Extensible",
    description: "Its middleware system makes it easy to layer in logging, auth, filtering, analytics, and external code without turning your app into a tangle of handlers.",
    type: "code",
    code: `client.use(async (_ctx, next) => {
  const startedAt = performance.now();
  await next();
  console.log("Handled in", Math.round(performance.now() - startedAt), "ms");
});

client.command("start", (ctx) => ctx.reply("Ready."));`,
  },
];

const featuresMinors = [
  {
    icon: "mingcute:transfer-horizontal-fill",
    title: "Bot + User Accounts",
    description: "Work with both bot accounts and user accounts through the Telegram API.",
  },
  {
    icon: "mingcute:terminal-box-fill",
    title: "Direct MTProto Access",
    description: "Call raw Telegram API functions with client.invoke() whenever you need lower-level control.",
  },
  {
    icon: "mingcute:filter-fill",
    title: "Update Filters",
    description: "Compose precise handlers with filter queries, commands, and branching middleware.",
  },
  {
    icon: "mingcute:storage-fill",
    title: "Storage Adapters",
    description: "Built for persistent state with storage adapters that match Telegram client realities.",
  },
  {
    icon: "mingcute:warning-fill",
    title: "Clear Error Model",
    description: "Separate Telegram, access, and input errors cleanly so failures are easier to handle.",
  },
];

const featuresHeading = "All that you expect from a client";

const spotlightHeading = "With many using it to build cool things";

const spotlightItems = [
  // { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
];

const docsHeading = "Start using it now";

const docsItems = [
  {
    title: "Walkthrough",
    links: [
      { text: "01 Installation", href: "#" },
      { text: "02 Starting the Client", href: "#" },
      { text: "03 Calling Methods", href: "#" },
      { text: "04 Handling Updates", href: "#" },
      { text: "05 Catching Errors", href: "#" },
      { text: "06 Working with Messages", href: "#" },
      { text: "07 Commands", href: "#" },
      { text: "08 Reactions", href: "#" },
    ],
  },
  {
    title: "References",
    links: [
      { text: "Types", href: "#" },
      { text: "Methods", href: "#" },
    ],
  },
  {
    title: "Guides",
    links: [
      { text: "Auth Strings", href: "#" },
      { text: "Flood Waits", href: "#" },
      { text: "Graceful Shutdown", href: "#" },
      { text: "Interacting with Telegram API", href: "#" },
      { text: "Log Verbosity", href: "#" },
      { text: "Splitting Code", href: "#" },
      { text: "Storage Adapters", href: "#" },
    ],
  },
  {
    title: "Misc",
    links: [
      { text: "FAQ", href: "#" },
      { text: "Terminology", href: "#" },
      { text: "MTKruto Server", href: "#" },
      { text: "Web Workers", href: "#" },
      { text: "Acknowledgement", href: "#" },
      { text: "Contributing", href: "#" },
      { text: "Source Map", href: "#" },
    ],
  },
];

const footer = {
  copyright: "© 2023-2026 MTKruto",
  license: "Licensed under LGPL-3.0.",
};

//
// Sections
//

function Hero() {
  return (
    <section id="hero-section" class="flex flex-col justify-center items-center max-w-7xl mx-auto w-full px-4 h-[clamp(600px,95dvh,850px)] origin-top">
      <img id="hero-logo" src={logo} alt="" class="size-16 md:size-28" />

      <h1 id="hero-heading" class="mt-8 md:mt-12 font-jakarta text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-center tracking-tight text-balance">{hero.heading}</h1>
      <p id="hero-sub" class="mt-4 md:mt-8 text-dim text-lg md:text-2xl lg:text-3xl font-dm-sans max-w-lg text-center text-balance">{hero.subheading}</p>

      <a id="hero-cta" href={hero.cta.href} class="mt-8 md:mt-12 rounded-full bg-foreground text-background h-11 md:h-15 px-5 md:px-8 font-semibold text-xs md:text-base inline-flex items-center transition-[transform,box-shadow] duration-500 hover:shadow-[0_0_96px_#00adfe33]">
        {hero.cta.text}
      </a>
    </section>
  );
}

function Features() {
  return (
    <section id={nav.features.id} class="flex flex-col justify-center items-center max-w-7xl mx-auto w-full px-4 mt-20 md:mt-40 lg:mt-60 scroll-mt-15">
      <h2 id="features-heading" class="mt-12 font-jakarta text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl text-center bg-linear-to-t from-brand to-brand/20 bg-clip-text text-transparent tracking-tight pb-3">
        {featuresHeading}
      </h2>

      <div class="flex flex-col w-full max-w-4xl">
        {featuresMajors.map((el) => <FeaturesMajorCard {...el} />)}
      </div>

      {featuresMinors.length > 0 && (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 md:mt-32">
          {featuresMinors.map((el) => <FeaturersMinorCard {...el} />)}
        </div>
      )}
    </section>
  );
}

function FeaturesMajorCard(
  props: {
    color: string;
    eyebrow: string;
    title: string;
    description: string;
    type: string;
    icons?: string[][];
    code?: string;
    chips?: string[];
  },
) {
  return (
    <article class="features-major-card text-center mt-20 md:mt-40">
      <small class={`font-dm-sans uppercase  md:text-2xl font-semibold tracking-wide text-${props.color}-500`}>{props.eyebrow}</small>
      <h3 class="font-dm-sans text-3xl md:text-5xl mt-3 font-semibold">{props.title}</h3>
      <p class="font-inter text-lg md:text-2xl text-dim mt-4 md:mt-6">{props.description}</p>
      <div class={`glass rounded-3xl md:rounded-4xl mx-auto px-6 pt-6 md:px-16 md:pt-16 flex items-center justify-center flex-wrap mt-8 md:mt-12 gap-4 ` + (props.type === "code" ? "" : "pb-6 md:pb-16")}>
        {props.type === "icons" && props.icons?.map((group) => (
          <div class="flex items-center">
            {group.map((name, i) => <Icon name={name} class={`h-22.5 w-fit${i > 0 ? " -ml-2.25" : ""}`} />)}
          </div>
        ))}
        {props.type === "chips" && (
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl">
            {props.chips?.map((chip) => (
              <div class="rounded-2xl md:rounded-3xl border border-shade/80 bg-background/75 px-4 py-4 md:px-6 md:py-5 font-dm-mono text-sm md:text-xl text-foreground/85 transition-colors duration-200 hover:border-brand/50 hover:bg-brand/5 hover:text-foreground">
                {chip}
              </div>
            ))}
          </div>
        )}
        {props.type === "code" && (
          <div class="w-full overflow-hidden" style="mask-image: linear-gradient(to bottom, black 55%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);">
            <pre class="text-left font-dm-mono text-foreground overflow-hidden w-full"><code dangerouslySetInnerHTML={{ __html: hljs.highlight(props.code ?? "", { language: "typescript" }).value }} /></pre>
          </div>
        )}
      </div>
    </article>
  );
}

function FeaturersMinorCard(props: { icon: string; title: string; description: string }) {
  return (
    <article class="features-minor-card text-center flex flex-col items-center">
      <Icon name={props.icon} size={52} class="size-10 md:size-15" />
      <h3 class="font-dm-sans font-medium text-xl md:text-4xl mt-3">{props.title}</h3>
      <p class="text-sm md:text-2xl text-dim mt-2 md:mt-6">{props.description}</p>
    </article>
  );
}

function Spotlight() {
  if (spotlightItems.length === 0) return null;

  return (
    <section id={nav.spotlight.id} class="mt-20 md:mt-40 lg:mt-60 scroll-mt-15">
      <h2 id="spotlight-heading" class="px-4 font-jakarta text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl mx-auto text-center bg-linear-to-t from-brand to-brand/20 bg-clip-text text-transparent tracking-tight pb-3">
        {spotlightHeading}
      </h2>

      <div id="spotlight-carousel" class="overflow-hidden mt-16 md:mt-40">
        <div id="spotlight-track" class="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-10 pl-[10vw] pr-[10vw] w-max">
          {spotlightItems.map((el) => <SpotlightCard {...el} />)}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard(props: { image: string; title: string; description: string }) {
  return (
    <article class="spotlight-card w-64 md:w-80 lg:w-96 snap-center">
      <div class="size-20 md:size-28 rounded-2xl overflow-hidden bg-shade/40 shrink-0">
        {props.image && <img src={props.image} alt={props.title} class="size-full object-cover" />}
      </div>
      <p class="font-dm-sans font-medium text-xl md:text-2xl lg:text-4xl text-dim mt-4 md:mt-6">
        <span class="text-foreground">{props.title}</span> {props.description}
      </p>
    </article>
  );
}

function Docs() {
  return (
    <section id={nav.directory.id} class="w-full bg-shade/20 mt-20 md:mt-40 lg:mt-60 pt-20 md:pt-40 pb-30 md:pb-45 lg:pb-60 relative overflow-hidden scroll-mt-15">
      <div class="relative z-10 max-w-7xl mx-auto w-full px-4">
        <h2 id="directory-heading" class="font-jakarta text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl mx-auto text-center bg-linear-to-t from-foreground to-foreground/20 bg-clip-text text-transparent tracking-tight pb-3">
          {docsHeading}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-24 gap-6 md:gap-8">
          {[docsItems.filter((_, i) => i % 2 === 0), docsItems.filter((_, i) => i % 2 === 1)].map((col) => (
            <div class="docs-col flex flex-col gap-6 md:gap-8">
              {col.map((el) => (
                <div class="bg-background rounded-2xl md:rounded-3xl p-8 md:p-16 flex flex-col gap-4 md:gap-6">
                  <h3 class="font-dm-sans font-medium text-2xl md:text-4xl">{el.title}</h3>
                  <span class="text-dim text-sm md:text-2xl flex flex-wrap gap-x-3 gap-y-2">
                    {el.links.map((link) => <a key={link.text} class="underline underline-offset-4 decoration-2 transition-colors duration-150 hover:text-brand hover:decoration-brand" href={link.href}>{link.text}</a>)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p id="directory-bg-text" class="absolute bottom-0 left-0 right-0 text-background text-[100px] md:text-[200px] lg:text-[300px] max-w-7xl font-jakarta leading-tight mx-auto font-bold">MTKruto</p>
    </section>
  );
}

function Footer() {
  return (
    <footer class="flex items-center w-full min-h-15 px-4 py-4">
      <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-2 font-dm-sans text-dimmest">
        <small class="text-sm font-dm-sans">
          {footer.copyright}
        </small>

        <a href={links.github} class="flex items-center gap-2 text-sm transition-colors hover:text-foreground">
          {footer.license}
          <Icon name="mingcute:github-fill" size={24} />
        </a>
      </div>
    </footer>
  );
}

//
// Layout
//

export default () => {
  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={subtitle} />
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />
          <style
            {
              // deno-lint-ignore no-explicit-any
              ...{ type: "text/tailwindcss" } as any
            }
            dangerouslySetInnerHTML={{
              __html: `@theme {
              --color-background: #ffffff;
              --color-foreground: #000000;
              --color-brand: #00adfe;
              --color-dim: #8c8c8c;
              --color-dimmest: #a3a3a3;
              --color-shade: #e4e4e4;
              --font-inter: "Inter", sans-serif;
              --font-dm-mono: "DM Mono", monospace;
              --font-dm-sans: "DM Sans", sans-serif;
              --font-jakarta: "Plus Jakarta Sans", sans-serif;
            }

            @media (prefers-color-scheme: dark) {
              :root {
                color-scheme: dark;
                --color-background: #0e0f0f;
                --color-foreground: #ffffff;
                --color-dim: #888888;
                --color-dimmest: #7a7a7a;
                --color-shade: #2e2e2e;
              }
            }

            #hero-logo, #hero-heading, #hero-sub, #hero-cta {
              visibility: hidden;
            }

            .hljs { background: transparent !important; padding: 0 !important; }

            @utility glass {
              background: color-mix(in srgb, var(--color-shade) 20%, transparent);
              backdrop-filter: blur(12px) saturate(180%);
              -webkit-backdrop-filter: blur(12px) saturate(180%);
              box-shadow:
                inset 0 6px 8px -6px color-mix(in srgb, var(--color-shade) 80%, transparent),
                inset 6px 0 8px -6px color-mix(in srgb, var(--color-shade) 80%, transparent);
            }`,
            }}
          />

          {fonts.map((v) => (
            <link
              rel="preload"
              href={`/fonts/${v}`}
              as="font"
              type="font/woff2"
              crossOrigin=""
            />
          ))}

          <link rel="stylesheet" href="/fonts.css" />
          <link rel="stylesheet" href="/github.css" media="not (prefers-color-scheme: dark)" />
          <link rel="stylesheet" href="/github-dark.css" media="(prefers-color-scheme: dark)" />
        </head>

        <body class="font-inter bg-shade/20 text-foreground overflow-x-hidden scroll-smooth">
          <main class="bg-background">
            <Hero />
            <Features />
            <Spotlight />
            <Docs />
          </main>
          <Footer />

          <script src="/gsap.min.js" />
          <script src="/ScrollTrigger.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            gsap.registerPlugin(ScrollTrigger);

            gsap.set(["#hero-logo", "#hero-heading", "#hero-sub", "#hero-cta"], { visibility: "visible" });
            var heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });
            heroTl
              .from("#hero-logo",    { opacity: 0, scale: 0.82, duration: 1.0 })
              .from("#hero-heading", { opacity: 0, y: 32, duration: 0.85 }, "-=0.45")
              .from("#hero-sub",     { opacity: 0, y: 22, duration: 0.75 }, "-=0.5")
              .from("#hero-cta",     { opacity: 0, y: 16, duration: 0.65 }, "-=0.45");

            gsap.to("#hero-section", {
              scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
              scale: 0.92,
              opacity: 0,
              ease: "none",
            });

            gsap.from("#features-heading", {
              scrollTrigger: {
                trigger: "#features-heading",
                start: "top 172%",
                end: "top 38%",
                scrub: 1,
              },
              opacity: 0, y: 70, scale: 0.95, ease: "none",
            });

            gsap.utils.toArray(".features-major-card").forEach(function(card) {
              gsap.from(card, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 28%",
                  scrub: 1.2,
                },
                opacity: 0, y: 110, ease: "none",
              });
            });

            gsap.utils.toArray(".features-minor-card").forEach(function(card) {
              gsap.from(card, {
                scrollTrigger: {
                  trigger: card,
                  start: "top 95%",
                  end: "top 55%",
                  scrub: 1,
                },
                opacity: 0, y: 55, ease: "none",
              });
            });

            gsap.from("#spotlight-heading", {
              scrollTrigger: {
                trigger: "#spotlight-heading",
                start: "top 172%",
                end: "top 38%",
                scrub: 1,
              },
              opacity: 0, y: 70, scale: 0.95, ease: "none",
            });

            (function() {
              var mm = gsap.matchMedia();
              function buildCarousel(start) {
                var track = document.getElementById("spotlight-track");
                if (!track) return;
                var totalWidth = track.scrollWidth - window.innerWidth;
                if (totalWidth <= 0) return;
                gsap.to(track, {
                  scrollTrigger: {
                    trigger: "#spotlight-carousel",
                    start: start,
                    end: "+=" + totalWidth,
                    pin: "#spotlight",
                    scrub: 1,
                    anticipatePin: 1,
                  },
                  x: -totalWidth,
                  ease: "none",
                });
              }
              mm.add("(max-width: 767px)", function() { buildCarousel("center center"); });
              mm.add("(min-width: 768px)", function() { buildCarousel("top center"); });
            })();

            gsap.from("#directory-heading", {
              scrollTrigger: {
                trigger: "#directory-heading",
                start: "top 172%",
                end: "top 38%",
                scrub: 1,
              },
              opacity: 0, y: 70, scale: 0.95, ease: "none",
            });

            gsap.utils.toArray(".docs-col").forEach(function(col, i) {
              gsap.from(col, {
                scrollTrigger: {
                  trigger: col,
                  start: "top 92%",
                  end: "top 48%",
                  scrub: 1,
                },
                opacity: 0, y: 70 + i * 25, ease: "none",
              });
            });

            (function() {
              var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              gsap.fromTo("#directory-bg-text",
                { color: isDark ? "#ffffff" : "#000000" },
                {
                  scrollTrigger: {
                    trigger: "#directory",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1.5,
                  },
                  color: isDark ? "#0e0f0f" : "#ffffff",
                  ease: "none",
                }
              );
            })();
          `,
            }}
          />
        </body>
      </html>
    </>
  );
};
