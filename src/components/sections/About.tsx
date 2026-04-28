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
            My experience spans full-stack web development, software design, and collaborative team projects where I've had to think about systems, not just features. I'm comfortable with JavaScript, TypeScript, Node.js, FastAPI, relation databases, but more than any specific tool, I focus on writing code that's clean, maintainable, and built on solid foundations.
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