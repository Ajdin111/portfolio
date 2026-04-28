import type { Client } from '../../types'

interface ClientCardProps {
  client: Client
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <a
      href={client.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg overflow-hidden border border-white/5 hover:border-teal-400/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden">
        {client.image ? (
          <img
            src={client.image}
            alt={client.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-white/5">
            <p className="text-gray-600 text-sm">Screenshot coming soon</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-teal-400 text-base font-medium group-hover:text-teal-300 transition-colors duration-200">
          {client.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          {client.description}
        </p>
      </div>
    </a>
  )
}