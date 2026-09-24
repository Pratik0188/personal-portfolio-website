export default function About() {
    return (
      <section className="about-section">
        <div className="about-text">
          <h1>About Me</h1>
          <p>I'm a self-taught data enthusiast currently pursuing a B.Tech in Computer Science at the University of Wolverhampton. My interest in data engineering didn't come from a classroom — it started with curiosity about how raw, messy, real-world data gets transformed into something clean, structured, and genuinely useful. That curiosity turned into a real passion, and I've spent a lot of my time since then learning by building rather than just reading theory.</p>
          <p>Right now, my focus is on going deeper into data engineering — strengthening my understanding of pipelines, data pipelines at scale, and the tools that make data reliable and analysis-ready. I'm always looking for projects that push me to learn something new rather than just repeat what I already know. Outside of tech, I'm big into cricket — whether I'm playing it or just watching a good match. I also genuinely value being around empathetic people; I think good teams and good relationships, in and out of work, come down to that.</p>
        </div>
        <img
          src="/profile.jpg"
          alt="Pratik Pujara"
          className="profile-photo"
        />
      </section>
    );
  }