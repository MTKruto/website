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
    <section id="hero-section">
      <img id="hero-logo" src={logo} alt="" />

      <h1 id="hero-heading">{hero.heading}</h1>
      <p id="hero-sub">{hero.subheading}</p>

      <a id="hero-cta" href={hero.cta.href}>
        {hero.cta.text}
      </a>
    </section>
  );
}

function Features() {
  return (
    <section id={nav.features.id} class="features-section">
      <h2 id="features-heading">
        {featuresHeading}
      </h2>

      <div class="features-major-list">
        {featuresMajors.map((el) => <FeaturesMajorCard {...el} />)}
      </div>

      {featuresMinors.length > 0 && (
        <div class="features-minor-grid">
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
    <article class="features-major-card">
      <small class="features-major-card__eyebrow" data-color={props.color}>{props.eyebrow}</small>
      <h3 class="features-major-card__title">{props.title}</h3>
      <p class="features-major-card__description">{props.description}</p>
      <div class={`glass features-major-card__visual${props.type !== "code" ? " features-major-card__visual--padded-bottom" : ""}`}>
        {props.type === "icons" && props.icons?.map((group) => (
          <div class="features-major-card__icons-group">
            {group.map((name, i) => <Icon key={name} name={name} class={`features-major-card__icon${i > 0 ? " features-major-card__icon--overlap" : ""}`} />)}
          </div>
        ))}
        {props.type === "chips" && (
          <div class="features-major-card__chips-grid">
            {props.chips?.map((chip) => (
              <div class="features-major-card__chip">
                {chip}
              </div>
            ))}
          </div>
        )}
        {props.type === "code" && (
          <div class="features-major-card__code">
            <pre><code dangerouslySetInnerHTML={{ __html: hljs.highlight(props.code ?? "", { language: "typescript" }).value }} /></pre>
          </div>
        )}
      </div>
    </article>
  );
}

function FeaturersMinorCard(props: { icon: string; title: string; description: string }) {
  return (
    <article class="features-minor-card">
      <Icon name={props.icon} size={52} class="features-minor-card__icon" />
      <h3 class="features-minor-card__title">{props.title}</h3>
      <p class="features-minor-card__description">{props.description}</p>
    </article>
  );
}

function Spotlight() {
  if (spotlightItems.length === 0) return null;

  return (
    <section id={nav.spotlight.id} class="spotlight-section">
      <h2 id="spotlight-heading">
        {spotlightHeading}
      </h2>

      <div id="spotlight-carousel">
        <div id="spotlight-track">
          {spotlightItems.map((el) => <SpotlightCard {...el} />)}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard(props: { image: string; title: string; description: string }) {
  return (
    <article class="spotlight-card">
      <div class="spotlight-card__image-wrap">
        {props.image && <img src={props.image} alt={props.title} class="spotlight-card__image" />}
      </div>
      <p class="spotlight-card__description">
        <span class="spotlight-card__title">{props.title}</span> {props.description}
      </p>
    </article>
  );
}

function Docs() {
  return (
    <section id={nav.directory.id} class="docs-section">
      <div class="docs-section__inner">
        <h2 id="directory-heading">
          {docsHeading}
        </h2>

        <div class="docs-grid">
          {[docsItems.filter((_, i) => i % 2 === 0), docsItems.filter((_, i) => i % 2 === 1)].map((col) => (
            <div class="docs-col">
              {col.map((el) => (
                <div class="docs-item">
                  <h3 class="docs-item__title">{el.title}</h3>
                  <span class="docs-item__links">
                    {el.links.map((link) => <a key={link.text} class="docs-item__link" href={link.href}>{link.text}</a>)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p id="directory-bg-text">MTKruto</p>
    </section>
  );
}

function Footer() {
  return (
    <footer class="site-footer">
      <div class="site-footer__inner">
        <small class="site-footer__copyright">
          {footer.copyright}
        </small>

        <a href={links.github} class="site-footer__link">
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
          <link rel="stylesheet" href="/reset.css" />
          <link rel="stylesheet" href="/index.css" />

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

        <body>
          <main>
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
