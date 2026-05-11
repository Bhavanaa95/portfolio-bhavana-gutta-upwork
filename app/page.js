export default function Home() {
  const projects = [
    "VisaHire.ai",
    "Alzheimer's Disease Detection",
    "AI Research Dashboard",
    "3D Genome Structure Analysis"
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #000000, #111827, #1e1b4b)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "60px"
    }}>
      <div style={{maxWidth: "1100px", margin: "0 auto"}}>
        <p style={{
          color: "#a855f7",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "20px"
        }}>
          AI Researcher • Full-Stack Developer
        </p>

        <h1 style={{
          fontSize: "72px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}>
          Bhavana Gutta
        </h1>

        <p style={{
          fontSize: "22px",
          color: "#d1d5db",
          maxWidth: "700px",
          lineHeight: 1.6
        }}>
          Building intelligent AI systems, scalable full-stack applications,
          and healthcare-focused machine learning solutions.
        </p>

        <div style={{marginTop: "80px"}}>
          <h2 style={{
            fontSize: "42px",
            marginBottom: "30px"
          }}>
            Featured Projects
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px"
          }}>
            {projects.map((project, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <h3 style={{fontSize: "24px"}}>{project}</h3>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: "80px"}}>
          <h2 style={{fontSize: "42px"}}>Technical Skills</h2>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "25px"
          }}>
            {[
              "Next.js",
              "React",
              "TypeScript",
              "TensorFlow",
              "PyTorch",
              "NestJS",
              "PostgreSQL",
              "Machine Learning",
              "Bioinformatics"
            ].map((skill, i) => (
              <span key={i} style={{
                padding: "12px 20px",
                borderRadius: "999px",
                background: "#7c3aed",
                fontWeight: "bold"
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
