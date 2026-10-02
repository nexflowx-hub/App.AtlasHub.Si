const modules = ["Chat", "Agents", "Projects", "Knowledge", "Automation", "Research", "Developer", "Teams"];

export default function HomePage() {
  return (
    <main className="shell">
      <header>
        <div className="brand"><span className="mark" />AtlasHub <strong>Workspace</strong></div>
        <span className="status">Foundation V1</span>
      </header>
      <section className="hero">
        <p className="eyebrow">APP.ATLASHUB.SI</p>
        <h1>Your intelligent<br />operating workspace.</h1>
        <p>One environment for projects, agents, knowledge, automation and team intelligence.</p>
      </section>
      <section className="modules">
        {modules.map((name, index) => (
          <article key={name}>
            <span>0{index + 1}</span>
            <h2>{name}</h2>
            <p>Reserved product surface for the AtlasHub intelligence platform.</p>
          </article>
        ))}
      </section>
      <footer>© 2026 AtlasHub · Internal product foundation</footer>
    </main>
  );
}
