export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section label */}
        <p className="text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
          01 — About
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
          About
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-6 text-gray-400 text-base md:text-lg leading-relaxed">
          <p>
            I'm a 3rd-year Software Engineering student at the International University
            of Sarajevo, focused on building web applications that solve real problems.
            I work across the full stack — comfortable writing backend APIs, designing
            database schemas, and building responsive user interfaces.
          </p>

          <p>
            Most of my work involves JavaScript and TypeScript ecosystems — React,
            Node.js, Express — alongside relational databases and modern deployment
            workflows. I've worked both solo on personal projects and as part of teams
            on larger applications, handling everything from initial architecture
            decisions to deployment and maintenance.
          </p>

          <p>
            Outside of code, I like exploring Sarajevo's coffee culture and playing
            chess — both have taught me patience and the value of thinking a few moves
            ahead.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-10 pt-6">
          <p className="text-gray-500 text-sm">
            <span className="font-medium text-gray-400">Languages:</span>{' '}
            Bosnian (native), English (fluent)
          </p>
        </div>
      </div>
    </section>
  )
}