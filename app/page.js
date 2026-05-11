export default function Portfolio() {
  const projects = [
    {
      title: "VisaHire.ai",
      desc: "AI-powered visa sponsorship and job matching platform for international students.",
      tech: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
      title: "Alzheimer's AI Detection",
      desc: "MRI-based deep learning system with Grad-CAM explainability achieving high diagnostic accuracy.",
      tech: ["TensorFlow", "PyTorch", "Computer Vision"],
    },
    {
      title: "AI Research Dashboard",
      desc: "Interactive ML analytics dashboard with ROC curves, confusion matrices, and t-SNE visualization.",
      tech: ["React", "Analytics", "Visualization"],
    },
    {
      title: "3D Genome Analysis",
      desc: "Bioinformatics workflows using Hi-C genomic datasets for structural genome research.",
      tech: ["Python", "Hi-C", "Bioinformatics"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-8 md:px-20 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black to-blue-900/30" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.35em] text-violet-400 text-sm mb-6 font-semibold">
                AI Researcher • Full-Stack Developer
              </p>

              <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
                Bhavana
                <span className="block text-violet-500">Gutta</span>
              </h1>

              <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl mb-10">
                Building intelligent healthcare AI systems, scalable web applications,
                and machine learning solutions focused on real-world impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-violet-600 hover:bg-violet-500 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-violet-500/20">
                  View Projects
                </button>

                <button className="border border-zinc-700 hover:border-violet-500 transition px-8 py-4 rounded-2xl font-semibold text-lg bg-zinc-900/40 backdrop-blur">
                  Download Resume
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-violet-500 to-blue-500 blur-3xl opacity-30 absolute inset-0" />

              <div className="relative bg-zinc-900/70 border border-zinc-800 rounded-[2rem] p-10 backdrop-blur-xl shadow-2xl w-[340px]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />

                  <div>
                    <h3 className="font-bold text-2xl">Bhavana Gutta</h3>
                    <p className="text-zinc-400">UNT Computer Science</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-zinc-800/60 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm mb-1">Research Focus</p>
                    <h4 className="font-semibold">Healthcare AI & Bioinformatics</h4>
                  </div>

                  <div className="bg-zinc-800/60 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm mb-1">Current Stack</p>
                    <h4 className="font-semibold">Next.js • ML • AI Systems</h4>
                  </div>

                  <div className="bg-zinc-800/60 rounded-2xl p-5">
                    <p className="text-zinc-400 text-sm mb-1">Goal</p>
                    <h4 className="font-semibold">Top-Tier AI Software Engineer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-4">
                Featured Work
              </p>

              <h2 className="text-5xl md:text-6xl font-black">
                Selected Projects
              </h2>
            </div>

            <p className="text-zinc-400 max-w-xl text-lg">
              Combining machine learning, healthcare AI, and scalable full-stack engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-zinc-900/60 border border-zinc-800 rounded-[2rem] p-8 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-52 rounded-3xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-zinc-800 mb-8 flex items-center justify-center">
                  <h3 className="text-3xl font-black text-center px-4">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 md:px-20 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-4">
              Technical Expertise
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "NestJS",
              "Python",
              "TensorFlow",
              "PyTorch",
              "Machine Learning",
              "Computer Vision",
              "PostgreSQL",
              "Bioinformatics",
              "AI Systems",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 text-center hover:border-violet-500 transition"
              >
                <p className="text-xl font-bold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
