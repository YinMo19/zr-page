import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const principles = [
  {
    kicker: "01",
    title: "Only Reading",
    body: "No feed. No social layer. No recommendation engine. Zero Reader opens your books and stays out of the way.",
  },
  {
    kicker: "02",
    title: "Local First",
    body: "Books, progress, bookmarks, annotations, preferences, and reading stats are stored on your device.",
  },
  {
    kicker: "03",
    title: "Quiet by Design",
    body: "A restrained interface, reader themes, horizontal paging, and vertical scrolling are built around long reading sessions.",
  },
];

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Zero Reader">
        <a className="brand" href="/" aria-label="Zero Reader home">
          <img src="/zeroreader-icon.svg" alt="" />
          <span>Zero Reader</span>
        </a>
        <nav aria-label="Site navigation">
          <a href="#privacy">Privacy</a>
          <a href="/support/">Support</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Zero thing beyond reading.</p>
          <h1 id="hero-title">Zero Reader</h1>
          <p className="hero-text">
            A pure text reader for people who want their books, their rhythm,
            and nothing else.
          </p>
        </div>

        <div className="reader-frame" aria-hidden="true">
          <div className="reader-page">
            <div className="reader-topline">
              <span>Chapter 12</span>
              <span>68%</span>
            </div>
            <p>
              The best reading interface is almost absent. It remembers your
              place, keeps the page clear, and lets the book carry the room.
            </p>
            <p>
              No noise, no account, no network layer. Just local text, calm
              controls, and a page that is ready when you are.
            </p>
            <div className="reader-rule" />
          </div>
        </div>
      </section>

      <section className="principles" aria-label="Product principles">
        {principles.map((item) => (
          <article className="principle" key={item.kicker}>
            <span>{item.kicker}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="privacy-strip" id="privacy" aria-labelledby="privacy-title">
        <div>
          <p className="eyebrow">Privacy Policy</p>
          <h2 id="privacy-title">No collection. No tracking. No network.</h2>
        </div>
        <p>
          Zero Reader does not collect personal data, does not use analytics or
          advertising SDKs, and does not send your reading data to any server.
        </p>
        <a className="text-link" href="/privacy/">
          Read the policy
        </a>
      </section>

      <footer>
        <span>Zero Reader</span>
        <span>Made by YinMo19</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
