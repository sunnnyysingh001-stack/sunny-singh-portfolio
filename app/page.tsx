"use client";
import { useEffect, useRef, useState } from "react";
const EMAIL = "sunnnyy.singh001@gmail.com";
const GH = "https://github.com/sunnnyysingh001-stack";
const projects = [
  {
    id: "rescue",
    n: "01",
    title: "RESCUE.NET",
    category: "Backend",
    date: "2024 — 2025",
    subtitle: "A backend built around a critical mission.",
    description:
      "A disaster management system connecting incident reporting, rescue teams and emergency resources. My final-year project, with a focus on backend development.",
    tags: ["Java", "Spring Boot", "MongoDB", "React", "JWT"],
    problem:
      "During a disaster, incident reports, rescue coordination and relief resources need to work together. RESCUE.NET brings these workflows into one application.",
    contribution: [
      "Built Spring Boot REST APIs for disaster reporting, rescue team dispatch and resource allocation.",
      "Designed MongoDB collections for incidents, SOS alerts, rescue teams and relief inventory.",
      "Implemented JWT authentication and role-based access for admins, coordinators, field teams and public users.",
      "Integrated backend APIs with the React incident dashboard.",
    ],
    architecture: [
      "React dashboard",
      "Spring Boot REST API",
      "JWT + role-based access",
      "MongoDB collections",
    ],
    note: "Backend contribution · Final-year academic project. Details are based on my résumé; production deployment and performance benchmarks are not claimed.",
  },
  {
    id: "quiz",
    n: "02",
    title: "Quiz Application",
    category: "Android",
    date: "2022 — 2023",
    subtitle: "A focused learning experience on Android.",
    description:
      "A native Android quiz application with categories, difficulty levels, countdown timers and live scoring, built with Java and Material Design.",
    tags: ["Java", "Android SDK", "Android Studio", "Material Design"],
    problem:
      "Make quiz practice structured and engaging through topic selection, difficulty levels and immediate scoring.",
    contribution: [
      "Developed a native Android quiz application in Java.",
      "Added multiple categories and difficulty levels.",
      "Built countdown timer and real-time scoring interactions.",
      "Applied Material Design patterns for a familiar mobile experience.",
    ],
    architecture: [
      "Category selection",
      "Timed quiz flow",
      "Answer evaluation",
      "Score summary",
    ],
    note: "Personal academic Android project. Try the browser adaptation: categories, timed questions, scoring and answer explanations. The web demo is not an Android emulator.",
  },
];
const skills = [
  {
    icon: "{ }",
    title: "Backend engineering",
    text: "Java · Spring Boot · REST APIs · JWT · Java Servlets · JPA · MVC",
  },
  {
    icon: "▤",
    title: "Data & foundations",
    text: "MongoDB · MySQL · OOP · DSA · CRUD · Multithreading",
  },
  {
    icon: "⌘",
    title: "Web & mobile",
    text: "React · JavaScript · HTML · CSS · Material UI · Kotlin · Android SDK",
  },
  {
    icon: "↗",
    title: "Developer workflow",
    text: "Git · GitHub · IntelliJ IDEA · Postman · Android Studio · MySQL Workbench",
  },
];
const focusCards = [
  { title: "JAVA DEVELOPER", detail: "OOP · Collections · Clean code", icon: "{ }", number: "01" },
  { title: "BACKEND ENGINEER", detail: "Spring Boot · REST APIs · Databases", icon: "↗", number: "02" },
  { title: "PROBLEM SOLVER", detail: "Algorithms · Data structures · Curiosity", icon: "✳", number: "03" },
];
function FocusCarousel({ motion }: { motion: boolean }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const start = useRef<number | null>(null);
  const step = (direction: number) => setIndex(i => (i + direction + focusCards.length) % focusCards.length);
  useEffect(() => {
    if (!motion || hovered || focused || paused) return;
    const timer = window.setInterval(() => setIndex(i => (i + 1) % focusCards.length), 4200);
    return () => window.clearInterval(timer);
  }, [motion, hovered, focused, paused]);
  return <section className="focus-carousel" aria-label="My engineering focus" aria-roledescription="carousel"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false); }}>
    <div className="focus-top wrap"><span>THREE WAYS I BUILD</span><span>SWIPE TO EXPLORE ↔</span></div>
    <div className="focus-stage" onPointerDown={e => { if (e.pointerType === "mouse" && e.button !== 0) return; start.current = e.clientX; e.currentTarget.setPointerCapture(e.pointerId); }}
      onPointerUp={e => { const x=start.current; start.current=null; if(x!==null && Math.abs(e.clientX-x)>40) { setPaused(true); step(e.clientX<x ? 1 : -1); } }}
      onPointerCancel={()=>{start.current=null;}}>
      {focusCards.map((card, i) => {
        const slot=(i-index+3)%3; const position=slot===0?"current":slot===1?"next":"previous";
        return <article key={card.number} className={`focus-card ${position}`} aria-roledescription="slide" aria-label={`${i+1} of 3: ${card.title}`} aria-hidden={i!==index}>
          <div className="focus-card-top"><span>{card.number} / EXPERTISE</span><b aria-hidden="true">{card.icon}</b></div>
          <h2>{card.title}</h2><p>{card.detail}</p>
        </article>;
      })}
    </div>
    <div className="focus-controls wrap"><button onClick={()=>{setPaused(true);step(-1);}} aria-label="Previous focus card">←</button>
      <div className="focus-dots">{focusCards.map((card,i)=><button key={card.number} onClick={()=>{setPaused(true);setIndex(i);}} aria-label={`Show ${card.title.toLowerCase()}`} aria-pressed={index===i}><span /></button>)}</div>
      <button onClick={()=>{setPaused(true);step(1);}} aria-label="Next focus card">→</button>
      <button className="focus-play" onClick={()=>setPaused(!paused)} disabled={!motion} aria-label={paused ? "Play card rotation" : "Pause card rotation"}>{!motion ? "Motion off" : paused ? "▶ Play" : "Ⅱ Pause"}</button>
    </div>
  </section>;
}
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const [copied, setCopied] = useState(false);
  const [motion, setMotion] = useState(true);
  const [light, setLight] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sunny-theme");
      setLight(
        saved === "light" ||
          (saved !== "dark" &&
            window.matchMedia("(prefers-color-scheme: light)").matches),
      );
    } catch {
      setLight(window.matchMedia("(prefers-color-scheme: light)").matches);
    }
  }, []);
  useEffect(() => {
    document.documentElement.style.colorScheme = light ? "light" : "dark";
    document.body.style.backgroundColor = light ? "#eeece5" : "#0b0b0d";
  }, [light]);
  function toggleTheme() {
    const next = !light;
    setLight(next);
    try {
      localStorage.setItem("sunny-theme", next ? "light" : "dark");
    } catch {
      /* Theme remains usable when storage is blocked. */
    }
  }
  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  useEffect(() => {
    if (active) dialog.current?.showModal();
    else dialog.current?.close();
  }, [active]);
  useEffect(() => {
    const elements = document.querySelectorAll(".section, .project, .proof, .about-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:" + EMAIL;
    }
  }
  return (
    <div
      className={`portfolio-spatial cinematic ${light ? "light" : ""} ${motion ? "" : "still"}`}
    >
      <button
        className="theme-float"
        onClick={toggleTheme}
        aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
        title={light ? "Switch to dark mode" : "Switch to light mode"}
      >
        <span className="theme-orb" aria-hidden="true">
          {light ? "☾" : "☀"}
        </span>
        <span className="theme-label">
          {light ? "Dark mode" : "Light mode"}
        </span>
        <span className="theme-tip" aria-hidden="true">
          Change appearance
        </span>
      </button>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <a className="brand" href="#" aria-label="Sunny Singh home">
          SUNNY SINGH<small>SOFTWARE DEVELOPER</small>
        </a>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={menu ? "open" : ""}>
          {["Work", "About", "Experience", "Contact"].map((s) => (
            <a
              key={s}
              href={"#" + s.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {s}
            </a>
          ))}
          <a
            className="nav-resume"
            href="/Sunny-Singh-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé ↗
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="cinema-hero" aria-labelledby="hero-title">
          <div className="spotlight" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-topline wrap"><span><i className="status" /> AVAILABLE FOR SDE / BACKEND ROLES</span><span>LUCKNOW, INDIA · 2025 GRADUATE</span></div>
          <div className="cinema-stage wrap">
            <div className="hero-heading"><p className="eyebrow">JAVA / BACKEND / SOFTWARE ENGINEERING</p><h1 id="hero-title">SUNNY<br /><span>SINGH</span><sup>↗</sup></h1><p className="hero-role">Thoughtful code.<br />Purposeful experiences.</p></div>
            <div className="sculpture" onPointerMove={(e) => {
              if (!motion || e.pointerType === "touch") return;
              const r=e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--turn", `${((e.clientX-r.left)/r.width-.5)*16}deg`);
            }} onPointerLeave={(e)=>e.currentTarget.style.setProperty("--turn","0deg")}>
              <div className="orbit-sculpture" aria-hidden="true"><i /><i /><i /><span>SS</span></div>
              <figure className="cinema-portrait"><img src="/portrait.webp" width="1000" height="1250" alt="Sunny Singh in a dark blazer and white shirt" fetchPriority="high" /><figcaption><span>THE DEVELOPER</span><b>01 / SS</b></figcaption></figure>
              <span className="sculpture-note">ENGINEERING IN MOTION</span>
            </div>
          </div>
          <div className="hero-bottom wrap"><p>I build the systems behind the experience.<br /><span>Java, Spring Boot, REST APIs & a curiosity for how things work.</span></p><div className="actions"><a className="button primary" href="#work">Explore my work ↗</a><a className="button secondary" href="/Sunny-Singh-Resume.pdf" target="_blank" rel="noreferrer">Résumé ↓</a></div></div>
          <div className="hero-foot wrap"><a href="#work">SCROLL TO EXPLORE ↓</a><button onClick={()=>setMotion(!motion)} aria-pressed={motion}>{motion ? "Ⅱ Pause motion" : "▶ Enable motion"}</button></div>
        </section>
        <FocusCarousel motion={motion} />
        <div className="proof wrap">
          <div>
            <strong>
              350<span>+</span>
            </strong>
            <p>Expert solutions delivered</p>
          </div>
          <div>
            <strong>
              4.38<span>/5</span>
            </strong>
            <p>Chegg expert rating</p>
          </div>
          <div>
            <strong>
              150<span>+</span>
            </strong>
            <p>Coding problems solved</p>
          </div>
          <div>
            <strong>2025</strong>
            <p>Computer Science graduate</p>
          </div>
        </div>
        <section className="wrap section" id="work">
          <div className="section-top">
            <div>
              <div className="eyebrow">01 / SELECTED WORK</div>
              <h2>SELECTED<br /><em>WORK.</em><sup>(02)</sup></h2>
            </div>
            <p>
              Real projects. Clear responsibilities.
              <br />A closer look at how I build.
            </p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {["All", "Backend", "Android"].map((f) => (
              <button
                key={f}
                className={filter === f ? "selected" : ""}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
                {f === "All" ? " projects" : ""}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects
              .filter((p) => filter === "All" || p.category === filter)
              .map((p) => (
                <article className={"project " + p.id} key={p.id} onPointerMove={(e) => {
                  if (!motion || e.pointerType === "touch") return;
                  const r=e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--tilt", `${((e.clientX-r.left)/r.width-.5)*5}deg`);
                }} onPointerLeave={(e)=>e.currentTarget.style.setProperty("--tilt","0deg")}>
                  <div className="project-art" aria-hidden="true">
                    {p.id === "rescue" ? (
                      <>
                        <div className="grid-lines" />
                        <div className="radar">
                          <i />
                          <i />
                          <i />
                          <b>+</b>
                        </div>
                        <span className="art-tag">
                          RESCUE.NET / SYSTEM OVERVIEW
                        </span>
                        <div className="mini-label label-a">
                          ◎ Incident reports
                        </div>
                        <div className="mini-label label-b">
                          ↗ Rescue dispatch
                        </div>
                        <div className="mini-label label-c">
                          ▤ Resource allocation
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="quiz-orb" />
                        <div className="phone">
                          <span>QUIZ / JAVA</span>
                          <h4>Time to think.</h4>
                          <p>
                            Which principle hides
                            <br />
                            implementation details?
                          </p>
                          <div>Inheritance</div>
                          <div className="answer">
                            Encapsulation <b>✓</b>
                          </div>
                          <div>Polymorphism</div>
                          <small>Illustrative interface</small>
                        </div>
                        <span className="art-tag">
                          ANDROID / LEARN BY DOING
                        </span>
                      </>
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-meta">
                      <span>
                        {p.category.toUpperCase()} / {p.n}
                      </span>
                      <span>{p.date}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {p.id === "quiz" && (<a className="text-link" href="/quiz/">Play the quiz demo ↗</a>)}
                    {p.id === "rescue" && (
                      <a
                        className="text-link"
                        href="https://rescue-net-sunny-demo.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Try the 2026 rebuild ↗
                      </a>
                    )}
                    <button className="text-link" onClick={() => setActive(p)}>
                      Explore case study <span>↗</span>
                    </button>
                  </div>
                </article>
              ))}
          </div>
          <div className="github-strip">
            <span>More of the code, less of the mystery.</span>
            <a href={GH} target="_blank" rel="noreferrer">
              Explore my GitHub ↗
            </a>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="wrap section">
            <div className="about-grid">
              <div>
                <div className="eyebrow">
                  02 / THE DEVELOPER BEHIND THE CODE
                </div>
                <h2>
                  Curious by nature.
                  <br />
                  <em>Engineer by practice.</em>
                </h2>
              </div>
              <div className="about-copy">
                <p>
                  I’m a Computer Science graduate from Babu Banarasi Das
                  Institute of Technology and Management, Lucknow. I enjoy
                  turning complex problems into clear, working software.
                </p>
                <p>
                  My experience spans a Java internship, backend development for
                  a disaster management system, and explaining algorithms and
                  mathematics as a freelance subject matter expert.
                </p>
                <p>
                  Outside the editor, you’ll find me at the gym, on a cricket
                  field, or chasing a faster sprint. The same discipline comes
                  back to my work.
                </p>
                <a
                  className="text-link"
                  href="/Sunny-Singh-Resume.pdf"
                  download
                >
                  Download my résumé ↓
                </a>
              </div>
            </div>
            <div className="skills-heading">
              <h3>My engineering toolkit</h3>
              <span>Tools that turn ideas into working software.</span>
            </div>
            <div className="skill-grid">
              {skills.map((s) => (
                <article key={s.title}>
                  <span className="skill-icon">{s.icon}</span>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
            <p className="extra-skills">
              Also familiar with <b>Python</b> and <b>C</b>.
            </p>
          </div>
        </section>
        <section className="section wrap" id="experience">
          <div className="section-top">
            <div>
              <div className="eyebrow">03 / EXPERIENCE & LEARNING</div>
              <h2>
                Learning. Building.
                <br />
                Moving forward.
              </h2>
            </div>
            <a
              href="/Sunny-Singh-Resume.pdf"
              className="button secondary"
              download
            >
              Full résumé ↓
            </a>
          </div>
          <div className="journey">
            <div className="journey-label">EXPERIENCE</div>
            <div className="timeline">
              <article>
                <div className="time">SEP 2023 — PRESENT · PER RÉSUMÉ</div>
                <h3>Subject Matter Expert</h3>
                <h4>
                  Chegg Inc. <span>Freelance · Remote</span>
                </h4>
                <p>
                  Solved 350+ problems in algorithms, data structures and
                  mathematics, maintaining a 4.38/5 expert rating. Built strong
                  analytical thinking and technical communication through
                  well-explained solutions.
                </p>
              </article>
              <article>
                <div className="time">MAY — JUN 2023</div>
                <h3>Java Developer Intern</h3>
                <h4>
                  InternsElite <span>Remote</span>
                </h4>
                <p>
                  Applied object-oriented programming, data structures and
                  exception handling during a structured two-month Java
                  internship.
                </p>
              </article>
            </div>
          </div>
          <div className="journey">
            <div className="journey-label">EDUCATION</div>
            <div className="timeline">
              <article>
                <div className="time">2021 — 2025</div>
                <h3>B.Tech · Computer Science Engineering</h3>
                <h4>
                  Babu Banarasi Das Institute of Technology and Management
                </h4>
                <p>Lucknow, Uttar Pradesh</p>
              </article>
              <article>
                <div className="time">ST. THOMAS MISSION SCHOOL, LUCKNOW</div>
                <h3>Strong foundations.</h3>
                <p>Class XII: 86% (2021) · Class X: 87% (2019)</p>
              </article>
            </div>
          </div>
          <div className="cert-heading">
            <h3>Credentials, with substance.</h3>
            <p>Focused training. Continuous learning.</p>
          </div>
          <div className="cert-grid">
            <article>
              <div className="cert-icon">✳</div>
              <small>DUCAT / SHAPEMYSKILLS</small>
              <h4>Advanced Java & DSA</h4>
              <p>80-hour program · Jul–Aug 2024</p>
              <span className="muted">Certificate details in résumé</span>
            </article>
            <article>
              <div className="cert-icon">↗</div>
              <small>DUKE UNIVERSITY · COURSERA</small>
              <h4>Java Programming</h4>
              <p>Solving Problems with Software · Feb 2023</p>
              <a
                href="https://coursera.org/verify/H279REU2FMT7"
                target="_blank"
                rel="noreferrer"
              >
                Verify credential ↗
              </a>
            </article>
            <article>
              <div className="cert-icon">⌘</div>
              <small>JOHNS HOPKINS · COURSERA</small>
              <h4>Web Development</h4>
              <p>HTML, CSS & JavaScript · Nov 2022</p>
              <a
                href="https://coursera.org/verify/9FUFJB6FFN5B"
                target="_blank"
                rel="noreferrer"
              >
                Verify credential ↗
              </a>
            </article>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="wrap contact-inner">
            <div className="eyebrow">
              <span className="status" /> LET’S BUILD SOMETHING THAT MATTERS
            </div>
            <h2>
              LET’S BUILD.
              <br />
              <em>LET’S TALK.</em>
            </h2>
            <p>
              Looking for a Java / backend developer or an early-career SDE?
              <br />
              I’d love to hear about the problems your team is solving.
            </p>
            <div className="actions">
              <a
                className="button primary"
                href={
                  "mailto:" +
                  EMAIL +
                  "?subject=Software%20development%20opportunity"
                }
              >
                Start a conversation ↗
              </a>
              <button
                className="button secondary"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? "Email copied ✓" : "Copy email ⧉"}
              </button>
            </div>
            <a className="email" href={"mailto:" + EMAIL}>
              {EMAIL}
            </a>
            <div className="contact-links">
              <a href={GH} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="tel:+918299259508">+91 82992 59508 ↗</a>
              <a href="/Sunny-Singh-Resume.pdf" download>
                Download résumé ↓
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="brand" href="#">
          SUNNY SINGH
        </a>
        <p>Designed with intention. Built with Next.js.</p>
        <div>
          <button onClick={() => setMotion(!motion)} aria-pressed={motion}>
            Motion {motion ? "on" : "off"}
          </button>
          <button onClick={toggleTheme} aria-label="Toggle light theme">
            {light ? "Dark mode ☾" : "Light mode ☼"}
          </button>
          <a href="#" aria-label="Back to top">
            ↑
          </a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        onCancel={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setActive(null);
        }}
      >
        {active && (
          <div className="case">
            <button
              className="close"
              onClick={() => setActive(null)}
              aria-label="Close case study"
            >
              ×
            </button>
            <div className="eyebrow">
              PROJECT {active.n} / {active.category.toUpperCase()}
            </div>
            <h2>{active.title}</h2>
            <p className="case-subtitle">{active.subtitle}</p>
            <div className="tags">
              {active.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {active.id === "rescue" && (
              <p className="case-note">
                2026 rebuild available: a working browser simulation plus a
                downloadable Java/Spring Boot backend with JWT, H2 persistence
                and workflow tests. This is separate from the original academic
                project described below.{" "}
                <a href="https://rescue-net-sunny-demo.vercel.app">
                  Open demo ↗
                </a>{" "}
                ·{" "}
                <a href="https://rescue-net-sunny-demo.vercel.app/source.zip">
                  Download source
                </a>{" "}
                ·{" "}
                <a href="https://rescue-net-sunny-demo.vercel.app/architecture.svg">
                  Architecture
                </a>
              </p>
            )}
            <h3>The problem</h3>
            <p>{active.problem}</p>
            <h3>My contribution</h3>
            <ul>
              {active.contribution.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3>
              {active.id === "rescue"
                ? "Architecture overview"
                : "Application flow"}
            </h3>
            <div className="architecture">
              {active.architecture.map((t, i) => (
                <div key={t}>
                  <small>0{i + 1}</small>
                  {t}
                </div>
              ))}
            </div>
            <p className="case-note">{active.note}</p>
            <a
              className="button primary"
              href={
                "mailto:" +
                EMAIL +
                "?subject=" +
                encodeURIComponent("Tell me more about " + active.title)
              }
            >
              Discuss this project ↗
            </a>
          </div>
        )}
      </dialog>
    </div>
  );
}
