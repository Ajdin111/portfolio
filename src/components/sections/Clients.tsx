import { clients } from '../../data/clients'
import ClientCard from '../ui/ClientCard'

export default function Clients() {
  return (
    <section
      id="clients"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section label */}
        <p className="text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
          03 — Clients
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Client Work
        </h2>

        <p className="text-gray-500 text-base mb-12">
          Websites built and delivered for real clients.
        </p>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {clients.map(client => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}