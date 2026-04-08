import { Icon } from "../_components/Icon.tsx";

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
  heading: "A Telegram client library you can depend on",
  subheading: "Connect easily, anywhere, anytime, anyhow, to Telegram",
  cta: "View Documentation",
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
];

const featuresMinors = [
  {
    icon: "ph:star-fill",
    title: "Maintained",
    description: "Updates come out every week. Issues are addressed as soon as possible.",
  },
  {
    icon: "ph:star-fill",
    title: "Maintained",
    description: "Updates come out every week. Issues are addressed as soon as possible.",
  },
  {
    icon: "ph:star-fill",
    title: "Maintained",
    description: "Updates come out every week. Issues are addressed as soon as possible.",
  },
  {
    icon: "ph:star-fill",
    title: "Maintained",
    description: "Updates come out every week. Issues are addressed as soon as possible.",
  },
];

const featuresHeading = "All that you expect from a client";

const spotlightHeading = "With many using it to build cool things";

const spotlightItems = [
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
  { image: "", title: "Corvex", description: "is using it to make a personal diary app, helping thousands keep their moments." },
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
  copyright: "© 2026 MTKruto. All rights reserved.",
  license: "Licensed under GPL-3.0 and LGPL-3.0",
};

//
// Sections
//

function Nav() {
  return (
    <header class="sticky top-0 z-50 flex items-center w-full h-15 bg-shade/20 border-b border-b-shade px-4 backdrop-blur-md">
      <div class="max-w-7xl mx-auto w-full flex justify-between items-center font-dm-sans text-dimmest">
        <img src={logo} alt="" class="size-6" />

        <div class="flex items-center gap-4">
          {Object.values(nav).map((link) => <a key={link.id} href={`#${link.id}`}>{link.text}</a>)}
        </div>

        <div class="flex items-center gap-2">
          <a href={links.github}>
            <Icon name="ph:github-logo-fill" size={24} />
          </a>
          <a href={links.telegram}>
            <Icon name="ph:telegram-logo-fill" size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section class="flex flex-col justify-center items-center max-w-7xl mx-auto w-full h-[clamp(600px,95dvh,850px)]">
      <img src={logo} alt="" class="size-28" />

      <h1 class="mt-12 font-jakarta text-7xl font-bold max-w-4xl text-center tracking-tight">{hero.heading}</h1>
      <p class="mt-8 text-dim text-3xl font-dm-sans max-w-lg text-center">{hero.subheading}</p>

      <button type="button" class="mt-12 rounded-full bg-foreground text-background h-15 px-8 font-semibold">
        {hero.cta}
      </button>
    </section>
  );
}

function Features() {
  return (
    <section id={nav.features.id} class="flex flex-col justify-center items-center max-w-7xl mx-auto w-full mt-60 scroll-mt-15">
      <h2 class="mt-12 font-jakarta text-7xl font-bold max-w-3xl text-center bg-linear-to-t from-brand to-brand/20 bg-clip-text text-transparent tracking-tight pb-3">
        {featuresHeading}
      </h2>

      <div class="flex flex-col max-w-4xl">
        {featuresMajors.map((el) => <FeaturesMajorCard {...el} />)}
      </div>

      {featuresMinors.length > 0 && (
        <div class="grid grid-cols-3 gap-8 mt-32">
          {featuresMinors.map((el) => <FeaturersMinorCard {...el} />)}
        </div>
      )}
    </section>
  );
}

function FeaturesMajorCard(props: { color: string; eyebrow: string; title: string; description: string; type: string; icons?: string[][]; code?: string }) {
  return (
    <article class="text-center mt-40">
      <small class={`font-dm-sans uppercase text-2xl font-semibold tracking-wide text-${props.color}-500`}>{props.eyebrow}</small>
      <h3 class="font-dm-sans text-5xl mt-3 font-semibold">{props.title}</h3>
      <p class="font-inter text-2xl text-dim mt-6">{props.description}</p>
      <div class={`glass rounded-4xl mx-auto p-16 flex items-center justify-center flex-wrap mt-12 gap-4 ` + (props.type === "code" && "pb-0")}>
        {props.type === "icons" && props.icons?.map((group) => (
          <div class="flex items-center">
            {group.map((name, i) => <Icon name={name} class={`h-22.5 w-fit${i > 0 ? " -ml-2.25" : ""}`} />)}
          </div>
        ))}
        {props.type === "code" && <pre class="text-left font-dm-mono text-foreground overflow-x-auto w-full max-h-92.5 overflow-hidden"><code>{props.code}</code></pre>}
      </div>
    </article>
  );
}

function FeaturersMinorCard(props: { icon: string; title: string; description: string }) {
  return (
    <article class="text-center flex flex-col items-center justify-center">
      <Icon name={props.icon} size={52} />
      <h3 class="font-dm-sans font-medium text-4xl mt-2">{props.title}</h3>
      <p class="text-2xl text-dim mt-4">{props.description}</p>
    </article>
  );
}

function Spotlight() {
  if (spotlightItems.length === 0) return null;

  return (
    <section id={nav.spotlight.id} class="mt-60 scroll-mt-15">
      <h2 class="mt-12 font-jakarta text-7xl font-bold max-w-3xl mx-auto text-center bg-linear-to-t from-brand to-brand/20 bg-clip-text text-transparent tracking-tight pb-3">
        {spotlightHeading}
      </h2>

      <div class="overflow-x-auto mt-40 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div class="flex gap-10 pl-[30vw] pr-[50vw] w-max">
          {spotlightItems.map((el) => <SpotlightCard {...el} />)}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard(props: { image: string; title: string; description: string }) {
  return (
    <article class="max-w-sm lg:max-w-md snap-center">
      <div class="size-28 rounded-2xl overflow-hidden bg-shade/40 shrink-0">
        {props.image && <img src={props.image} alt={props.title} class="size-full object-cover" />}
      </div>
      <p class="font-dm-sans font-medium text-4xl text-dim mt-6">
        <span class="text-foreground">{props.title}</span> {props.description}
      </p>
    </article>
  );
}

function Docs() {
  return (
    <section id={nav.directory.id} class="w-full bg-shade/20 mt-60 pt-40 relative scroll-mt-15">
      <div class="max-w-7xl mx-auto w-full">
        <h2 class="font-jakarta text-7xl font-bold max-w-3xl mx-auto text-center bg-linear-to-t from-foreground to-foreground/20 bg-clip-text text-transparent tracking-tight pb-3">
          {docsHeading}
        </h2>

        <div class="grid grid-cols-2 mt-24 gap-8">
          {[docsItems.filter((_, i) => i % 2 === 0), docsItems.filter((_, i) => i % 2 === 1)].map((col) => (
            <div class="flex flex-col gap-8">
              {col.map((el) => (
                <div class="bg-background rounded-3xl p-16 flex flex-col gap-6">
                  <h3 class="font-dm-sans font-medium text-4xl">{el.title}</h3>
                  <span class="text-dim text-2xl flex flex-wrap gap-x-4 gap-y-2">
                    {el.links.map((link) => <a class="underline underline-offset-4 decoration-2" href={link.href}>{link.text}</a>)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p class="text-background text-[300px] -mt-36 max-w-7xl font-jakarta leading-tight mx-auto font-bold">MTKruto</p>
    </section>
  );
}

function Footer() {
  return (
    <footer class="flex items-center w-full h-15 bg-shade/20 px-4">
      <div class="max-w-7xl mx-auto w-full flex justify-between items-center font-dm-sans text-dimmest">
        <small class="text-lg font-dm-sans">
          {footer.copyright}
        </small>

        <a href={links.github} class="flex items-center gap-2">
          {footer.license}
          <Icon name="ph:github-logo-fill" size={24} />
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
      <html class="scroll-smooth">
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
              --font-dm-mono: "DM Mono", monospace;
              --font-dm-sans: "DM Sans", sans-serif;
              --font-jakarta: "Plus Jakarta Sans", sans-serif;
            }

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

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        </head>

        <body class="bg-background text-foreground overflow-x-hidden">
          <Nav />
          <Hero />
          <Features />
          <Spotlight />
          <Docs />
          <Footer />
        </body>
      </html>
    </>
  );
};
