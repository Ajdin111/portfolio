import { useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import ThemeToggle from '../ui/ThemeToggle'

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Clients', id: 'clients' },
  { label: 'Contact', id: 'contact' },
]

const sectionIds = navLinks.map(link => link.id)

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

interface SocialLinksProps {
  size?: number
}

const SocialLinks = ({ size = 18 }: SocialLinksProps) => (
  <div className="flex items-center gap-4">
    <a
      href="https://github.com/Ajdin111"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-teal-400 transition-colors duration-200"
      aria-label="GitHub"
    >
      <GithubIcon size={size} />
    </a>
    <a
      href="https://www.linkedin.com/in/ajdin-mujkanovi%C4%87-a780712a6/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-teal-400 transition-colors duration-200"
      aria-label="LinkedIn"
    >
      <LinkedInIcon size={size} />
    </a>
    <a
      href="mailto:mujkanoviic17@gmail.com"
      className="text-gray-500 hover:text-teal-400 transition-colors duration-200"
      aria-label="Email"
    >
      <EmailIcon size={size} />
    </a>
  </div>
)

export default function Sidebar() {
  const activeSection = useScrollSpy(sectionIds)
  const { toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between px-8 py-10 border-r border-white/5 z-40">
        <div>
          <p className="text-white font-semibold text-lg leading-tight">
            Ajdin<br />Mujkanovic
          </p>
          <p className="text-teal-400 text-sm mt-1">Software Engineer</p>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Building full-stack web applications and delivering client websites
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-sm py-1 transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-white font-medium'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <SocialLinks size={18} />
          <ThemeToggle onToggle={toggleTheme} />
        </div>
      </aside>

      {/* MOBILE TOP BAR */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0d1117]/95 backdrop-blur-sm z-40">
        <p className="text-white font-semibold text-sm">Ajdin Mujkanovic</p>
        <div className="flex items-center gap-4">
          <ThemeToggle onToggle={toggleTheme} />
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-[#0d1117]/98 backdrop-blur-sm z-30 flex flex-col px-8 py-10 gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-lg py-1 transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-white font-medium'
                    : 'text-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <SocialLinks size={20} />
        </div>
      )}
    </>
  )
}