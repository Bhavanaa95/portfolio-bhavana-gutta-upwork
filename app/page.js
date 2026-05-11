const projects = [
  {
    title: "VisaHire.ai",
    desc: "AI-powered platform that helps international students discover visa-sponsored jobs using smart filters and modern full-stack architecture.",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    icon: "✈️"
  },
  {
    title: "Alzheimer's Disease Detection",
    desc: "Deep learning research project using MRI images, CNN models, Grad-CAM explainability, ROC/AUC, and confusion matrix evaluation.",
    tech: ["Python", "TensorFlow", "CNN", "Grad-CAM"],
    icon: "🧠"
  },
  {
    title: "AI Research Dashboard",
    desc: "Machine learning analytics dashboard for model comparison, ROC curves, confusion matrices, t-SNE/UMAP, and experiment tracking.",
    tech: ["React", "Data Visualization", "ML Metrics", "Analytics"],
    icon: "📊"
  },
  {
    title: "3D Genome Structure Analysis",
    desc: "Bioinformatics workflow using Hi-C datasets to visualize genome interaction matrices and support computational biology research.",
    tech: ["Python", "Hi-C", "Bioinformatics", "Visualization"],
    icon: "🧬"
  }
];

const skills = [
  "Next.js", "React", "TypeScript", "NestJS", "Node.js", "Python",
  "TensorFlow", "PyTorch", "Computer Vision", "Machine Learning",
  "PostgreSQL", "Docker", "Azure Data Factory", "Bioinformatics"
];

export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>

      <nav style={styles.nav}>
        <div style={styles.logo}>BG</div>
        <div style={styles.navLinks}>
          <a style={styles.navLink} href="#projects">Projects</a>
          <a style={styles.navLink} href="#skills">Skills</a>
          <a style={styles.navButton} href="mailto:bhavanagutta6@gmail.com">Contact</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.badge}>AI Researcher • Full-Stack Developer</div>
          <h1 style={styles.title}>
            Bhavana <span style={styles.gradientText}>Gutta</span>
          </h1>
          <p style={styles.subtitle}>
            I build intelligent AI systems, scalable full-stack applications, and
            healthcare-focused machine learning solutions with clean, production-ready design.
          </p>

          <div style={styles.heroButtons}>
            <a href="#projects" style={styles.primaryBtn}>View Projects</a>
            <a href="https://github.com/Bhavanaa95" target="_blank" style={styles.secondaryBtn}>GitHub</a>
          </div>

          <div style={styles.stats}>
            <div style={styles.statCard}>
              <strong style={styles.statNumber}>96.7%</strong>
              <span style={styles.statText}>CNN Accuracy</span>
            </div>
            <div style={styles.statCard}>
              <strong style={styles.statNumber}>4+</strong>
              <span style={styles.statText}>Major Projects</span>
            </div>
            <div style={styles.statCard}>
              <strong style={styles.statNumber}>AI</strong>
              <span style={styles.statText}>Healthcare Research</span>
            </div>
          </div>
        </div>

        <div style={styles.profileCard}>
          <div style={styles.profileTop}>
            <div style={styles.avatar}>BG</div>
            <div>
              <h2 style={styles.profileName}>Bhavana Gutta</h2>
              <p style={styles.profileRole}>Computer Science • AI Builder</p>
            </div>
          </div>

          <div style={styles.profileGrid}>
            <div style={styles.profileMini}>
              <span style={styles.miniLabel}>Focus</span>
              <strong>Healthcare AI</strong>
            </div>
            <div style={styles.profileMini}>
              <span style={styles.miniLabel}>Stack</span>
              <strong>Next.js + ML</strong>
            </div>
            <div style={styles.profileMini}>
              <span style={styles.miniLabel}>Research</span>
              <strong>Bioinformatics</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <div style={styles.badge}>Featured Work</div>
            <h2 style={styles.sectionTitle}>Selected Projects</h2>
          </div>
          <p style={styles.sectionText}>
            A focused portfolio combining software engineering, machine learning, medical AI,
            and computational research.
          </p>
        </div>

        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} style={styles.projectCard}>
              <div style={styles.projectImage}>
                <span style={styles.projectIcon}>{project.icon}</span>
              </div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>
              <div style={styles.techWrap}>
                {project.tech.map((t) => (
                  <span key={t} style={styles.tech}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <div style={styles.badge}>Technical Expertise</div>
        <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill} style={styles.skillCard}>{skill}</div>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Open to freelance projects, internships, and AI research work.</h2>
        <p style={styles.ctaText}>I’m focused on building useful AI products, research tools, and full-stack applications.</p>
        <a href="mailto:bhavanagutta6@gmail.com" style={styles.primaryBtn}>Email Me</a>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top left, #2e1065 0%, #050816 35%, #020617 100%)",
    color: "white",
    fontFamily: "Inter, Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "28px"
  },
  glowOne: {
    position: "absolute", width: "420px", height: "420px", borderRadius: "50%",
    background: "#7c3aed", filter: "blur(130px)", opacity: 0.22, top: "-120px", right: "-80px"
  },
  glowTwo: {
    position: "absolute", width: "360px", height: "360px", borderRadius: "50%",
    background: "#2563eb", filter: "blur(130px)", opacity: 0.18, bottom: "20%", left: "-120px"
  },
  nav: {
    maxWidth: "1180px", margin: "0 auto", display: "flex", justifyContent: "space-between",
    alignItems: "center", position: "relative", zIndex: 2, padding: "18px 0"
  },
  logo: {
    width: "46px", height: "46px", borderRadius: "14px",
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900
  },
  navLinks: { display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" },
  navLink: { color: "#cbd5e1", textDecoration: "none", fontWeight: 600 },
  navButton: {
    color: "white", textDecoration: "none", padding: "12px 18px", border: "1px solid #475569",
    borderRadius: "999px", background: "rgba(255,255,255,0.06)", fontWeight: 700
  },
  hero: {
    maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 0.8fr",
    gap: "42px", alignItems: "center", padding: "78px 0 54px", position: "relative", zIndex: 2
  },
  heroText: { minWidth: 0 },
  badge: {
    display: "inline-block", color: "#c4b5fd", textTransform: "uppercase",
    letterSpacing: "3px", fontSize: "13px", fontWeight: 800, marginBottom: "20px"
  },
  title: {
    fontSize: "clamp(58px, 9vw, 112px)", lineHeight: 0.92, margin: "0 0 26px", fontWeight: 950
  },
  gradientText: {
    display: "block",
    background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  subtitle: {
    fontSize: "22px", lineHeight: 1.65, color: "#cbd5e1", maxWidth: "760px", marginBottom: "32px"
  },
  heroButtons: { display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "36px" },
  primaryBtn: {
    display: "inline-block", background: "linear-gradient(135deg, #7c3aed, #2563eb)",
    padding: "16px 24px", color: "white", borderRadius: "16px", textDecoration: "none", fontWeight: 900,
    boxShadow: "0 18px 40px rgba(124, 58, 237, 0.28)"
  },
  secondaryBtn: {
    display: "inline-block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)",
    padding: "16px 24px", color: "white", borderRadius: "16px", textDecoration: "none", fontWeight: 900
  },
  stats: { display: "grid", gridTemplateColumns: "repeat(3, minmax(120px, 1fr))", gap: "14px", maxWidth: "650px" },
  statCard: {
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px", padding: "22px"
  },
  statNumber: { display: "block", fontSize: "30px", marginBottom: "6px" },
  statText: { color: "#94a3b8", fontSize: "14px", fontWeight: 700 },
  profileCard: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
    border: "1px solid rgba(255,255,255,0.14)", borderRadius: "34px", padding: "30px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.45)", backdropFilter: "blur(18px)"
  },
  profileTop: { display: "flex", gap: "18px", alignItems: "center", marginBottom: "26px" },
  avatar: {
    width: "70px", height: "70px", borderRadius: "22px", background: "linear-gradient(135deg, #7c3aed, #2563eb)",
    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 950
  },
  profileName: { margin: 0, fontSize: "28px" },
  profileRole: { margin: "6px 0 0", color: "#94a3b8", fontWeight: 700 },
  profileGrid: { display: "grid", gap: "14px" },
  profileMini: {
    background: "rgba(15,23,42,0.72)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px", padding: "18px"
  },
  miniLabel: { display: "block", color: "#94a3b8", marginBottom: "6px", fontSize: "13px", fontWeight: 800 },
  section: { maxWidth: "1180px", margin: "0 auto", padding: "70px 0", position: "relative", zIndex: 2 },
  sectionHeader: { display: "flex", justifyContent: "space-between", gap: "28px", alignItems: "end", marginBottom: "34px", flexWrap: "wrap" },
  sectionTitle: { fontSize: "clamp(40px, 6vw, 66px)", margin: "0 0 12px", lineHeight: 1, fontWeight: 950 },
  sectionText: { color: "#cbd5e1", fontSize: "18px", lineHeight: 1.6, maxWidth: "520px" },
  projectGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" },
  projectCard: {
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "30px", padding: "24px", minHeight: "360px", boxShadow: "0 24px 70px rgba(0,0,0,0.28)"
  },
  projectImage: {
    height: "150px", borderRadius: "24px", background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(37,99,235,0.18))",
    border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "22px"
  },
  projectIcon: { fontSize: "52px" },
  projectTitle: { fontSize: "25px", margin: "0 0 14px", lineHeight: 1.1 },
  projectDesc: { color: "#cbd5e1", lineHeight: 1.6, fontSize: "16px", minHeight: "102px" },
  techWrap: { display: "flex", flexWrap: "wrap", gap: "10px" },
  tech: {
    background: "rgba(124,58,237,0.18)", color: "#ddd6fe", border: "1px solid rgba(167,139,250,0.25)",
    borderRadius: "999px", padding: "8px 12px", fontSize: "13px", fontWeight: 800
  },
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "16px", marginTop: "28px" },
  skillCard: {
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px", padding: "22px", textAlign: "center", fontWeight: 900
  },
  cta: {
    maxWidth: "1180px", margin: "70px auto 30px", padding: "54px",
    background: "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(37,99,235,0.18))",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: "34px", position: "relative", zIndex: 2
  },
  ctaTitle: { fontSize: "clamp(32px, 5vw, 54px)", margin: "0 0 16px", lineHeight: 1.05 },
  ctaText: { color: "#cbd5e1", fontSize: "18px", marginBottom: "26px" }
};
