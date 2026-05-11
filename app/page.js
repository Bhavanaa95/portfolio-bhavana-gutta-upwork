const projects = [
  {
    title: "VisaHire.ai — AI Job & Visa Platform",
    status: "In Progress",
    desc: "A full-stack AI platform designed to help international students discover visa-sponsored roles, filter companies by work authorization support, and track applications in one clean dashboard.",
    bullets: [
      "Built around Next.js, NestJS, TypeScript, PostgreSQL, and REST APIs.",
      "Designed smart filters for H-1B, OPT, STEM OPT, relocation, and sponsorship-friendly roles.",
      "Planned AI features include resume-job matching, company insights, and application tracking."
    ],
    tags: ["AI Product", "Next.js", "NestJS", "PostgreSQL", "TypeScript"]
  },
  {
    title: "Alzheimer’s Detection using Deep Learning",
    status: "Research Project",
    desc: "A healthcare AI research project focused on early Alzheimer’s disease detection from MRI scans using CNN-based deep learning and explainable AI.",
    bullets: [
      "Developed custom CNN and compared performance with ML/DL architectures.",
      "Used preprocessing, augmentation, normalization, confusion matrix, ROC/AUC, and model evaluation.",
      "Integrated Grad-CAM style explainability to support clinical interpretability."
    ],
    tags: ["Medical AI", "CNN", "Grad-CAM", "MRI", "TensorFlow"]
  },
  {
    title: "AI Research Analytics Dashboard",
    status: "Portfolio Build",
    desc: "A professional dashboard concept for visualizing model performance, experiment history, dataset balance, ROC curves, t-SNE/UMAP clusters, and classification reports.",
    bullets: [
      "Designed for research reporting and model comparison workflows.",
      "Includes metrics such as accuracy, precision, recall, F1-score, ROC AUC, and confusion matrix.",
      "Useful for turning ML notebooks into client-ready and professor-ready visual reports."
    ],
    tags: ["Data Visualization", "ML Metrics", "React", "Dashboard", "Analytics"]
  },
  {
    title: "3D Genome Structure Analysis using Hi-C Data",
    status: "Research Direction",
    desc: "A computational biology workflow using Hi-C genomic interaction data to study 3D genome organization and visualize chromosome contact matrices.",
    bullets: [
      "Worked with .hic to .cool conversion workflows and HiCExplorer tools.",
      "Generated interaction matrix visualizations for genomic structure analysis.",
      "Exploring connections between AI, epigenomics, neurogenomics, and disease research."
    ],
    tags: ["Bioinformatics", "Hi-C", "Python", "Data Analysis", "Genomics"]
  },
  {
    title: "Netflix-Scale Backend Architecture",
    status: "Building",
    desc: "A system design project focused on scalable backend architecture inspired by streaming platforms, recommendation services, caching, and distributed systems.",
    bullets: [
      "Planned microservices for users, videos, recommendations, watch history, and payments.",
      "Architecture includes API gateway, caching, database design, queues, and monitoring.",
      "Built to demonstrate top-tier backend engineering and system design readiness."
    ],
    tags: ["System Design", "Backend", "Microservices", "Scalability", "Cloud"]
  },
  {
    title: "LabMind.ai — AI Research Assistant",
    status: "Concept / MVP",
    desc: "An AI assistant concept for researchers that helps summarize papers, extract methods, compare experiments, and generate structured research notes.",
    bullets: [
      "Designed for students, labs, and early-stage research teams.",
      "Planned features include paper summarization, literature comparison, and experiment tracking.",
      "Positioned as a practical AI productivity tool for academic and applied research."
    ],
    tags: ["GenAI", "Research Tools", "RAG", "LLMs", "Product Design"]
  }
];

const journey = [
  ["2026", "B.S. Computer Science Engineering", "University of North Texas — focused on AI, software engineering, full-stack systems, and applied research."],
  ["2025 – Present", "AI / ML Research", "Developing healthcare AI research focused on Alzheimer’s detection, explainability, and model evaluation."],
  ["2025 – Present", "Full-Stack Product Builder", "Building VisaHire.ai and modern portfolio-ready products using Next.js, NestJS, TypeScript, APIs, and databases."],
  ["2025 – Present", "Bioinformatics Research Direction", "Exploring 3D genome structure, Hi-C workflows, computational biology, and AI-assisted scientific analysis."]
];

const skills = {
  "AI / Machine Learning": ["TensorFlow", "PyTorch", "CNNs", "Computer Vision", "Grad-CAM", "Scikit-learn", "Model Evaluation"],
  "Full-Stack Engineering": ["Next.js", "React", "NestJS", "Node.js", "TypeScript", "REST APIs", "Authentication"],
  "Data & Cloud": ["PostgreSQL", "MongoDB", "Azure Data Factory", "Docker", "ETL Pipelines", "Data Integration"],
  "Research & Bioinformatics": ["MRI Analysis", "Hi-C Data", "Computational Biology", "Data Visualization", "Research Writing", "IEEE Formatting"]
};

export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.bgOrbOne} />
      <div style={styles.bgOrbTwo} />

      <nav style={styles.nav}>
        <a href="#" style={styles.logo}>BG.</a>
        <div style={styles.navLinks}>
          <a style={styles.navLink} href="#about">About</a>
          <a style={styles.navLink} href="#projects">Projects</a>
          <a style={styles.navLink} href="#research">Research</a>
          <a style={styles.navLink} href="#journey">Journey</a>
          <a style={styles.navButton} href="mailto:bhavanagutta6@gmail.com">Connect</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.kicker}>AI Researcher · Full-Stack Engineer · Product Builder</div>
          <h1 style={styles.heroTitle}>
            Building Intelligent Systems for
            <span style={styles.heroGradient}> Healthcare, Research & Global Careers.</span>
          </h1>
          <p style={styles.heroSub}>
            I’m Bhavana Gutta, a Computer Science student and builder focused on machine learning,
            scalable web applications, healthcare AI, bioinformatics, and practical products that solve real problems.
          </p>
          <div style={styles.heroActions}>
            <a href="#projects" style={styles.primary}>View Portfolio</a>
            <a href="https://github.com/Bhavanaa95" target="_blank" style={styles.secondary}>GitHub</a>
            <a href="mailto:bhavanagutta6@gmail.com" style={styles.secondary}>Email Me</a>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.stat}><b>96.7%</b><span>Custom CNN Accuracy</span></div>
            <div style={styles.stat}><b>6+</b><span>Major Portfolio Projects</span></div>
            <div style={styles.stat}><b>AI + Bio</b><span>Healthcare Research Focus</span></div>
          </div>
        </div>

        <aside style={styles.heroCard}>
          <div style={styles.profileHeader}>
            <div style={styles.avatar}>BG</div>
            <div>
              <h2 style={styles.profileName}>Bhavana Gutta</h2>
              <p style={styles.profileLine}>AI Researcher & Full-Stack Developer</p>
            </div>
          </div>
          <div style={styles.profileList}>
            <div style={styles.profileItem}><span>Current Focus</span><b>Healthcare AI + Full-Stack Products</b></div>
            <div style={styles.profileItem}><span>Research Area</span><b>Alzheimer’s Detection & Bioinformatics</b></div>
            <div style={styles.profileItem}><span>Product Track</span><b>VisaHire.ai + LabMind.ai</b></div>
            <div style={styles.profileItem}><span>Goal</span><b>Top-Tier AI / Software Engineering Role</b></div>
          </div>
        </aside>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.twoCol}>
          <div>
            <div style={styles.sectionKicker}>About Me</div>
            <h2 style={styles.sectionTitle}>I don’t just build apps — I build intelligent systems.</h2>
          </div>
          <div style={styles.aboutText}>
            <p>
              My work sits at the intersection of AI research, full-stack software engineering,
              healthcare technology, and bioinformatics. I enjoy taking complex ideas — like medical image
              classification, visa-sponsored job discovery, or genomic data analysis — and turning them into
              clear, usable, and scalable systems.
            </p>
            <p>
              I’m currently strengthening my portfolio with production-style projects in AI platforms,
              dashboards, backend architecture, and research tools while continuing to build my technical depth
              in machine learning, data engineering, and scalable web systems.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <div style={styles.sectionTop}>
          <div>
            <div style={styles.sectionKicker}>Featured Projects</div>
            <h2 style={styles.sectionTitle}>Engineering Portfolio</h2>
          </div>
          <p style={styles.sectionDescription}>
            These projects show where I’m strongest: AI systems, healthcare ML, research tools,
            full-stack platforms, and scalable backend thinking.
          </p>
        </div>

        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <article key={project.title} style={styles.projectCard}>
              <div style={styles.projectTop}>
                <span style={styles.projectNumber}>0{index + 1}</span>
                <span style={styles.status}>{project.status}</span>
              </div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>
              <ul style={styles.bullets}>
                {project.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div style={styles.tags}>
                {project.tags.map((tag) => <span key={tag} style={styles.tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" style={styles.section}>
        <div style={styles.researchPanel}>
          <div>
            <div style={styles.sectionKicker}>Research & Technical Identity</div>
            <h2 style={styles.sectionTitle}>Healthcare AI, Explainability, and Scientific Computing.</h2>
            <p style={styles.panelText}>
              My strongest research direction is early Alzheimer’s disease detection using AI/ML on MRI images,
              supported by explainability techniques like Grad-CAM and evaluation metrics such as ROC/AUC,
              confusion matrices, and class-wise performance. I’m also exploring 3D genome structure and
              computational biology workflows using Hi-C data.
            </p>
          </div>
          <div style={styles.metricGrid}>
            <div style={styles.metric}><b>Medical Imaging</b><span>MRI preprocessing, CNNs, model comparison</span></div>
            <div style={styles.metric}><b>Explainable AI</b><span>Grad-CAM and visual model interpretation</span></div>
            <div style={styles.metric}><b>Bioinformatics</b><span>Hi-C workflows and genome visualization</span></div>
            <div style={styles.metric}><b>Research Reporting</b><span>IEEE-style writing, posters, dashboards</span></div>
          </div>
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <div style={styles.sectionKicker}>Core Expertise</div>
        <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
        <div style={styles.skillsGrid}>
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} style={styles.skillBox}>
              <h3 style={styles.skillTitle}>{group}</h3>
              <div style={styles.skillTags}>
                {list.map((skill) => <span key={skill} style={styles.skillTag}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" style={styles.section}>
        <div style={styles.sectionKicker}>Journey</div>
        <h2 style={styles.sectionTitle}>Where I’m Building From</h2>
        <div style={styles.timeline}>
          {journey.map(([year, title, text]) => (
            <div key={title} style={styles.timelineItem}>
              <div style={styles.year}>{year}</div>
              <div>
                <h3 style={styles.timelineTitle}>{title}</h3>
                <p style={styles.timelineText}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Let’s build something intelligent, useful, and production-ready.</h2>
        <p style={styles.ctaText}>
          Open to internships, freelance projects, research collaborations, and AI/full-stack opportunities.
        </p>
        <div style={styles.heroActions}>
          <a href="mailto:bhavanagutta6@gmail.com" style={styles.primary}>Email Me</a>
          <a href="https://github.com/Bhavanaa95" target="_blank" style={styles.secondary}>View GitHub</a>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    margin: 0,
    minHeight: "100vh",
    background: "#050816",
    color: "#f8fafc",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    position: "relative",
    overflow: "hidden"
  },
  bgOrbOne: {
    position: "fixed", top: "-180px", right: "-150px", width: "520px", height: "520px",
    background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 65%)",
    filter: "blur(8px)", pointerEvents: "none"
  },
  bgOrbTwo: {
    position: "fixed", bottom: "10%", left: "-180px", width: "480px", height: "480px",
    background: "radial-gradient(circle, rgba(37,99,235,0.32), transparent 65%)",
    filter: "blur(8px)", pointerEvents: "none"
  },
  nav: {
    width: "min(1180px, calc(100% - 40px))", margin: "0 auto", padding: "26px 0",
    display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 5
  },
  logo: {
    color: "#fff", textDecoration: "none", fontSize: "28px", fontWeight: 900,
    letterSpacing: "-1px"
  },
  navLinks: { display: "flex", alignItems: "center", gap: "22px", flexWrap: "wrap" },
  navLink: { color: "#cbd5e1", textDecoration: "none", fontWeight: 700, fontSize: "14px" },
  navButton: {
    color: "#050816", background: "#fff", textDecoration: "none", padding: "12px 18px",
    borderRadius: "999px", fontWeight: 900, fontSize: "14px"
  },
  hero: {
    width: "min(1180px, calc(100% - 40px))", margin: "0 auto", padding: "78px 0 70px",
    display: "grid", gridTemplateColumns: "1.35fr 0.75fr", gap: "44px", alignItems: "center", position: "relative", zIndex: 2
  },
  kicker: {
    display: "inline-flex", padding: "10px 14px", border: "1px solid rgba(167,139,250,0.28)",
    borderRadius: "999px", background: "rgba(124,58,237,0.12)", color: "#c4b5fd",
    textTransform: "uppercase", letterSpacing: "2.4px", fontSize: "12px", fontWeight: 900, marginBottom: "26px"
  },
  heroTitle: { fontSize: "clamp(48px, 7vw, 92px)", lineHeight: 0.98, letterSpacing: "-4px", margin: "0 0 28px", fontWeight: 950 },
  heroGradient: { display: "block", background: "linear-gradient(90deg,#a78bfa,#60a5fa,#22d3ee)", WebkitBackgroundClip: "text", color: "transparent" },
  heroSub: { color: "#cbd5e1", fontSize: "20px", lineHeight: 1.75, maxWidth: "760px", margin: "0 0 34px" },
  heroActions: { display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" },
  primary: {
    display: "inline-flex", textDecoration: "none", color: "#fff", background: "linear-gradient(135deg,#7c3aed,#2563eb)",
    padding: "15px 22px", borderRadius: "16px", fontWeight: 950, boxShadow: "0 18px 50px rgba(124,58,237,0.34)"
  },
  secondary: {
    display: "inline-flex", textDecoration: "none", color: "#fff", background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)", padding: "15px 22px", borderRadius: "16px", fontWeight: 900
  },
  heroStats: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginTop: "38px", maxWidth: "760px" },
  stat: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "22px", padding: "20px" },
  profileHeader: { display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" },
  avatar: { width: "64px", height: "64px", borderRadius: "18px", background: "linear-gradient(135deg,#7c3aed,#22d3ee)", display: "grid", placeItems: "center", fontWeight: 950, fontSize: "22px" },
  profileName: { margin: 0, fontSize: "26px", letterSpacing: "-1px" },
  profileLine: { margin: "6px 0 0", color: "#94a3b8", fontWeight: 700 },
  profileList: { display: "grid", gap: "14px" },
  profileItem: { padding: "18px", background: "rgba(15,23,42,0.72)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "18px" },
  heroCard: {
    background: "linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.045))",
    border: "1px solid rgba(255,255,255,0.14)", borderRadius: "34px", padding: "28px",
    boxShadow: "0 34px 100px rgba(0,0,0,0.45)", backdropFilter: "blur(20px)"
  },
  section: { width: "min(1180px, calc(100% - 40px))", margin: "0 auto", padding: "72px 0", position: "relative", zIndex: 2 },
  twoCol: { display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "50px", alignItems: "start" },
  sectionKicker: { color: "#a78bfa", textTransform: "uppercase", letterSpacing: "3px", fontSize: "12px", fontWeight: 950, marginBottom: "16px" },
  sectionTitle: { fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.02, letterSpacing: "-2px", margin: 0, fontWeight: 950 },
  aboutText: { color: "#cbd5e1", fontSize: "18px", lineHeight: 1.85 },
  sectionTop: { display: "flex", justifyContent: "space-between", alignItems: "end", gap: "30px", flexWrap: "wrap", marginBottom: "34px" },
  sectionDescription: { maxWidth: "520px", color: "#cbd5e1", lineHeight: 1.7, fontSize: "17px" },
  projectGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "22px" },
  projectCard: {
    background: "linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: "28px", padding: "26px",
    boxShadow: "0 24px 80px rgba(0,0,0,0.28)"
  },
  projectTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px" },
  projectNumber: { color: "#64748b", fontWeight: 950, fontSize: "14px" },
  status: { color: "#c4b5fd", background: "rgba(124,58,237,0.16)", border: "1px solid rgba(167,139,250,0.22)", padding: "7px 11px", borderRadius: "999px", fontSize: "12px", fontWeight: 950 },
  projectTitle: { fontSize: "27px", lineHeight: 1.12, margin: "0 0 14px", letterSpacing: "-1px" },
  projectDesc: { color: "#cbd5e1", lineHeight: 1.7, marginBottom: "16px" },
  bullets: { color: "#dbeafe", paddingLeft: "18px", lineHeight: 1.7, marginBottom: "20px" },
  tags: { display: "flex", flexWrap: "wrap", gap: "9px" },
  tag: { background: "rgba(37,99,235,0.18)", border: "1px solid rgba(96,165,250,0.22)", color: "#bfdbfe", padding: "8px 11px", borderRadius: "999px", fontSize: "12px", fontWeight: 850 },
  researchPanel: {
    display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", background: "linear-gradient(135deg,rgba(124,58,237,0.22),rgba(37,99,235,0.11))",
    border: "1px solid rgba(255,255,255,0.13)", borderRadius: "34px", padding: "38px"
  },
  panelText: { color: "#dbeafe", lineHeight: 1.8, fontSize: "17px" },
  metricGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
  metric: { background: "rgba(2,6,23,0.46)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "22px", padding: "20px" },
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px", marginTop: "30px" },
  skillBox: { background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)", borderRadius: "26px", padding: "24px" },
  skillTitle: { marginTop: 0, fontSize: "21px" },
  skillTags: { display: "flex", flexWrap: "wrap", gap: "9px" },
  skillTag: { background: "rgba(255,255,255,0.08)", color: "#e2e8f0", padding: "8px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: 850 },
  timeline: { display: "grid", gap: "16px", marginTop: "30px" },
  timelineItem: { display: "grid", gridTemplateColumns: "180px 1fr", gap: "22px", background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)", borderRadius: "24px", padding: "22px" },
  year: { color: "#a78bfa", fontWeight: 950 },
  timelineTitle: { margin: "0 0 8px", fontSize: "21px" },
  timelineText: { margin: 0, color: "#cbd5e1", lineHeight: 1.7 },
  cta: { width: "min(1180px, calc(100% - 40px))", margin: "40px auto 70px", padding: "46px", borderRadius: "34px", background: "linear-gradient(135deg,rgba(124,58,237,0.28),rgba(34,211,238,0.11))", border: "1px solid rgba(255,255,255,0.13)", position: "relative", zIndex: 2 },
  ctaTitle: { fontSize: "clamp(34px,5vw,62px)", lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 16px", fontWeight: 950 },
  ctaText: { color: "#cbd5e1", fontSize: "18px", marginBottom: "28px" }
};
