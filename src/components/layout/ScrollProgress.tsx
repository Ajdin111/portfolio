import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = (scrollTop / docHeight) * 100
      setProgress(percent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
      <div
        className="h-full bg-teal-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}