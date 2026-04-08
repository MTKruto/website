import { JsxEngine } from "lume/plugins/jsx.ts";
import { Icon } from "../_components/Icon.tsx";

const fonts = Array.from(Deno.readDirSync("src/static/fonts"))
  .map((v) => v.name.replaceAll("src/", "/"));

export const layout = "";
export const title = "MTKruto";
const subtitle = "A Telegram client library for JavaScript, that you can depend on";
const logo = "/logo.svg";

//
// Sections
//

function Nav() {
  return (
    <header class="flex items-center w-full h-15 bg-shade/20 border-b border-b-shade px-4">
      <div class="max-w-7xl mx-auto w-full flex justify-between items-center font-dm-sans text-dimmest">
        <img src={logo} alt="" class="size-6" />

        <div class="flex items-center gap-4">
          <a href="#features">Features</a>
          <a href="#spotlight">Spotlight</a>
          <a href="#directory">Directory</a>
        </div>

        <div class="flex items-center gap-2">
          <Icon name="ph:github-logo-fill" size={24} />
          <Icon name="ph:telegram-logo-fill" size={24} />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section class="flex flex-col justify-center items-center max-w-7xl mx-auto w-full h-[clamp(600px,95dvh,850px)]">
      <img src={logo} alt="" class="size-28" />

      <h1 class="mt-12 font-jakarta text-7xl font-bold max-w-4xl text-center">A Telegram client library you can depend on</h1>
      <p class="mt-8 text-dim text-3xl font-dm-sans max-w-lg text-center">Connect easily, anywhere, anytime, anyhow, to Telegram</p>

      <button type="button" class="mt-12 rounded-full bg-foreground text-background h-15 px-8 font-semibold">
        View Documentation
      </button>
    </section>
  );
}

function Features() {
  const f = [
    {
      eyebrow: "Cross-runtime",
      title: "Run Anywhere",
      description: "MTKruto supports Node.js, Deno, browsers, and Bun. Check our installation guide and extended documentation on runtime compatibility here.",
      image: (
        <>
          <Icon
            name="logos:nodejs-icon-alt"
            size={90}
          />
          {/*  */}
        </>
      ),
    },
  ];

  return (
    <section class="flex flex-col justify-center items-center max-w-7xl mx-auto w-full">
      <h2 class="mt-12 font-jakarta text-7xl font-bold max-w-3xl text-center bg-linear-to-t from-brand to-brand/20 bg-clip-text text-transparent">
        All that you expect from a client
      </h2>

      <div class="flex flex-col max-w-4xl">
        {f.map((el) => <FeaturesMajorCarrd {...el} />)}
      </div>
    </section>
  );
}

function FeaturesMajorCarrd(props: { eyebrow: string; title: string; description: string; image: Element }) {
  return (
    <article class="text-center mt-40">
      <small class="font-dm-sans uppercase text-2xl font-semibold">{props.eyebrow}</small>
      <h3 class="font-dm-sans text-5xl mt-1 font-semibold">{props.title}</h3>
      <p class="font-inter text-2xl text-dim mt-4">{props.description}</p>
      <div class="bg-shade/20 rounded-4xl p-8 flex items-center justify-center mt-12">
        {props.image}
      </div>
    </article>
  );
}

function Spotlight() {
  return "Spotlight";
}

function Docs() {
  return "Docs";
}

function Footer() {
  return (
    <div>
      <h1>
        footer
      </h1>
    </div>
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
              --font-dm-mono: "DM Mono", monospace;
              --font-dm-sans: "DM Sans", sans-serif;
              --font-jakarta: "Plus Jakarta Sans", sans-serif;
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

        <body class="bg-background text-foreground">
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
