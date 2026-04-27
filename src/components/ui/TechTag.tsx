import type { TechTag } from '../../types'

interface TechTagProps {
  tag: TechTag
}

export default function TechTag({ tag }: TechTagProps) {
  return (
    <span className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">
      {tag.label}
    </span>
  )
}