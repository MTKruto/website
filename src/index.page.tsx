import { Icon } from "../_components/Icon.tsx";

const fonts = Array.from(Deno.readDirSync("src/static/fonts"))
  .map((v) => v.name.replaceAll("src/", "/"));

function cptl(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 
// Data
//

export const layout = "";
export const title = "MTKruto";
const subtitle = "A Telegram client library for JavaScript, that you can depend on"
const logo = "/logo.svg"

const footer = {
  links: [
    { label: "View source on", brand: "GitHub", href: "https://github.com/MTKruto" },
    { label: "Contact us on", brand: "Telegram", href: "https://telegram.me/MTKruto" },
  ],
  // TODO: change
  left: "Released under _",
  right: "Copyright"
};

const walkthrough = [
  { title: "Installation", href: "/installation" },
  { title: "Starting the Client", href: "/starting-the-client" },
  { title: "Calling Methods", href: "/calling-methods" },
  { title: "Handling Updates", href: "/handling-updates" },
  { title: "Catching Errors", href: "/catching-errors" },
  { title: "Working with Messages", href: "/working-with-messages" },
  { title: "Commands", href: "/commands" },
  { title: "Reactions", href: "/reactions" },
];

const guides = [
  { title: "Auth Strings", href: "/auth-strings" },
  { title: "Flood Waits", href: "/flood-waits" },
  { title: "Graceful Shutdown", href: "/graceful-shutdown" },
  { title: "Interacting with Telegram API", href: "/interacting-with-telegram-api" },
  { title: "Log Verbosity", href: "/log-verbosity" },
  { title: "Splitting Code", href: "/splitting-code" },
  { title: "Storage Adapters", href: "/storage-adapters" },
  { title: "Web Workers", href: "/web-workers" },
  { title: "Proxies", href: "/proxies" },
];

const misc = [
  { title: "FAQ", href: "/faq" },
  { title: "Terminology", href: "/terminology" },
  { title: "MTKruto Server", href: "/server" },
  { title: "Acknowledgements", href: "/acknowledgements" },
  { title: "Contributing", href: "/contributing" },
  { title: "Source Map", href: "/source-map" },
];

const features = [
  {
    active: true,
    title: "Cross-runtime",
    subtitle: "supports Node.js, Deno, browsers, and Bun.",
    description: "Write your code once and run it across all major JavaScript runtimes with no compatibility issues.",
    icon: "fluent:box-multiple-20-regular",
  },
  {
    active: false,
    title: "Web Priority",
    subtitle: "prefers Web APIs over runtime-specific APIs.",
    description: "Nothing yet.",
    icon: "fluent:globe-20-regular",
  },
  {
    active: false,
    title: "Type-safe",
    subtitle: "is written in TypeScript with accurate typings.",
    description: "Nothing yet.",
    icon: "fluent:resize-20-regular",
  },
  {
    active: false,
    title: "Extensible",
    subtitle: "includes middleware system to integrate external code.",
    description: "Nothing yet.",
    icon: "fluent:plug-disconnected-20-regular",
  },
  {
    active: false,
    title: "Easy-to-use",
    subtitle: "provides its own high-level API on top of the Telegram’s.",
    description: "Nothing yet.",
    icon: "fluent:checkbox-checked-20-regular",
  },
];

//
// Sections
// 

function Decorations() {
  return (
    <div class="lp-decorations">
      <span class="lp-dot" style="top: 15%; left: 8%" />
      <span class="lp-dot" style="top: 25%; left: 92%" />
      <span class="lp-dot" style="top: 60%; left: 5%" />
      <span class="lp-dot" style="top: 45%; left: 85%" />
      <span class="lp-dot" style="top: 70%; left: 90%" />
      <span class="lp-dot" style="top: 10%; left: 50%" />
      <span class="lp-dot" style="top: 80%; left: 15%" />

      <span class="lp-diamond" style="top: 20%; left: 15%" />
      <span class="lp-diamond" style="top: 35%; left: 88%" />
      <span class="lp-diamond" style="top: 55%; left: 10%" />
      <span class="lp-diamond" style="top: 75%; left: 85%" />
      <span class="lp-diamond" style="top: 8%; left: 70%" />

      <span class="lp-plus" style="top: 30%; left: 5%" />
      <span class="lp-plus" style="top: 15%; left: 82%" />
      <span class="lp-plus" style="top: 65%; left: 92%" />
      <span class="lp-plus" style="top: 50%; left: 3%" />
    </div>
  );
}

function Header() {
  return (
    <header class="lp-header">
      <img src={logo} alt={title} />
      <div>
        <a href="https://telegram.me/MTKruto" rel="noreferrer noopener" target="_blank">
          <Icon name="hugeicons:telegram" size={32} />
        </a>
        <a href="https://github.com/MTKruto" rel="noreferrer noopener" target="_blank">
          <Icon name="hugeicons:github" size={32} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section class="lp-hero">
      <Decorations />
      <div class="lp-inner">
        <h1>{title}</h1>
        <p>
          {subtitle}
        </p>
        <a href="#">
          View Documentation
          <Icon name="fluent:arrow-right-20-regular" size={24} />
        </a>
      </div>
    </section>
  );
}

function FeatureCard({ title: cardTitle, subtitle, description, icon, active }: typeof features[number]) {
  if (active) {
    return (
      <div class="lp-feature-card-active">
        <div>
          <h2>{cardTitle}</h2>
          <p>{title} {subtitle}</p>
          <p>{description}</p>
        </div>
        <div>
          <Icon name={icon} size={196} />
        </div>
      </div>
    );
  }
  return (
    <div class="lp-feature-card">
      <div>
        <Icon name={icon} size={48} />
      </div>
      <div>
        <h3>{cardTitle}</h3>
        <p>{cptl(subtitle)}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section class="lp-features">
      <div class="lp-inner grid-two">
        {features.map((f) => <FeatureCard {...f} />)}
      </div>
    </section>
  );
}

function Learn() {
  return (
    <section class="lp-learn-api">
      <div class="lp-inner">
        <h2>Learn how to use MTKruto</h2>
        <div class="lp-learn-columns">
          <div>
            <h3>Walkthrough</h3>
            <ol>
              {walkthrough.map((item, i) => (
                <li>
                  <span>{i + 1}.</span>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3>Guides</h3>
            <ul>
              {guides.map((item) => (
                <li>
                  <Icon name="fluent:link-20-regular" size={14} />
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Misc</h3>
            <ul>
              {misc.map((item) => (
                <li>
                  <Icon name="fluent:link-20-regular" size={14} />
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="grid-two">
          <a href="/types" class="lp-api-card">
            <div>
              <h3>Types</h3>
              <p>MTKruto's API type definitions</p>
            </div>
            <div>
              <Icon name="fluent:arrow-right-20-regular" size={18} />
            </div>
          </a>

          <a href="/methods" class="lp-api-card">
            <div>
              <h3>Methods</h3>
              <p>Parameters, returns, references</p>
            </div>
            <div>
              <Icon name="fluent:arrow-right-20-regular" size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer class="lp-footer">
      <div>
        <img src={logo} alt={title} />
        <div>
          {footer.links.map((link, i) => (
            <>
              {i > 0 && <span>|</span>}
              <a href={link.href} rel="noreferrer noopener" target="_blank">
                {link.label} <span>{link.brand}</span>
              </a>
            </>
          ))}
        </div>
      </div>
      <div>
        <span>{footer.left}</span>
        <span>{footer.right}</span>
      </div>
    </footer>
  );
}

// Layout

export default () => {
  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          <meta property="og:site_name" content="MTKruto" />
          <link rel="stylesheet" href="/reset.css" />
          <link rel="stylesheet" href="/migrate.css" />
          <link rel="stylesheet" href="/style.css" />

          {fonts.map((v) => (
            <link
              rel="preload"
              href={`/fonts/${v}`}
              as="font"
              type="font/woff2"
              crossOrigin=""
            />
          ))}

          {/* TODO: remove ibm plex */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        </head>

        <body class="landing">
          <Header />
          <Hero />
          <Features />
          <Learn />
          <Footer />
        </body>
      </html>
    </>
  );
};
