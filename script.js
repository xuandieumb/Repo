:root {
  --bg: #0b1020;
  --bg-soft: #121a2e;
  --panel: rgba(19, 28, 48, 0.8);
  --panel-strong: #18233f;
  --card: #ffffff;
  --text: #eaf1ff;
  --muted: #a9b6d0;
  --border: rgba(255, 255, 255, 0.08);
  --accent: #68e1fd;
  --accent-2: #7c5cff;
  --accent-3: #ffb86c;
  --shadow: 0 24px 60px rgba(16, 22, 38, 0.45);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 92, 255, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(104, 225, 253, 0.16), transparent 30%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
  background: rgba(11, 16, 32, 0.6);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: -0.04em;
}

.brand span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--text);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  margin: 0 auto;
  background: var(--text);
  border-radius: 999px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2rem;
  padding: 90px 0 48px;
}

.eyebrow {
  margin-bottom: 0.75rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  margin-bottom: 0.7rem;
}

.hero-copy h2 {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: #d4dfff;
  margin-bottom: 1rem;
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 620px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
}

.btn.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #08111f;
  box-shadow: 0 12px 28px rgba(104, 225, 253, 0.28);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--text);
}

.mini-stats {
  list-style: none;
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.mini-stats li {
  min-width: 108px;
  padding: 0.9rem 1rem;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.01);
  border-radius: 16px;
}

.mini-stats strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.15rem;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-card {
  background: linear-gradient(180deg, rgba(18, 26, 46, 0.9), rgba(11, 16, 32, 0.9));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: 28px;
  padding: 2rem;
}

.avatar-ring {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.avatar {
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #08111f;
  font-size: 2.3rem;
  font-weight: 800;
  box-shadow: 0 14px 30px rgba(124, 92, 255, 0.45);
}

.profile-info {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.85rem;
  border-radius: 999px;
  background: rgba(104, 225, 253, 0.08);
  color: #dff9ff;
  border: 1px solid rgba(104, 225, 253, 0.18);
  margin-bottom: 1.5rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5ee19f;
  box-shadow: 0 0 14px rgba(94, 225, 159, 0.9);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.card-grid div {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0.9rem 0.8rem;
}

.card-grid small {
  display: block;
  color: var(--muted);
  margin-bottom: 0.2rem;
}

.section {
  padding: 72px 0;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h3 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.05em;
}

.muted-section {
  background: rgba(17, 24, 39, 0.8);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.75rem;
}

.about-text {
  color: var(--muted);
  font-size: 1.02rem;
  display: grid;
  gap: 1rem;
}

.about-panel {
  display: grid;
  gap: 1rem;
}

.about-panel div {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.3rem;
}

.about-panel span {
  display: block;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.2rem 1rem;
  text-align: center;
  font-weight: 600;
  color: #eaf1ff;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.project-card {
  overflow: hidden;
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border);
  border-radius: 22px;
}

.project-thumb {
  height: 180px;
}

.gradient-one {
  background: linear-gradient(135deg, #68e1fd, #7c5cff);
}

.gradient-two {
  background: linear-gradient(135deg, #ffb86c, #ff6c8f);
}

.gradient-three {
  background: linear-gradient(135deg, #7ef2c2, #58a6ff);
}

.project-body {
  padding: 1.2rem 1rem 1.35rem;
}

.project-body h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.project-body p {
  color: var(--muted);
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tags span {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  font-size: 0.8rem;
  color: #d8e5ff;
}

.timeline {
  display: grid;
  gap: 1.25rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 1.2rem;
  align-items: start;
  background: rgba(17, 24, 39, 0.76);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.35rem 1.2rem;
}

.year {
  color: var(--accent);
  font-weight: 700;
}

.timeline-item h4 {
  margin-bottom: 0.35rem;
}

.timeline-item p {
  color: var(--muted);
}

.site-footer {
  padding: 24px 0 48px;
}

.footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.16), rgba(104, 225, 253, 0.08));
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 1.5rem 1.6rem;
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1.2rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

@media (max-width: 900px) {
  .hero,
  .about-grid,
  .project-grid,
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1fr;
    padding-top: 64px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 76px;
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: rgba(11, 16, 32, 0.95);
  }

  .nav-links.open {
    display: flex;
  }

  .card-grid,
  .about-grid,
  .skills-grid,
  .footer-box,
  .bottom-bar,
  .timeline-item {
    grid-template-columns: 1fr;
    display: grid;
  }

  .timeline-item {
    gap: 0.45rem;
  }

  .hero-copy h1 {
    font-size: 3rem;
  }

  .footer-box,
  .bottom-bar {
    display: grid;
    justify-content: stretch;
  }
}
