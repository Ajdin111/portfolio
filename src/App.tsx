import Sidebar from './components/layout/Sidebar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Work from './components/sections/Work'
import Clients from './components/sections/Clients'
import Contact from './components/sections/Contact'
import ScrollProgress from './components/layout/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 flex">
      <Sidebar />
      <main className="mt-16 lg:mt-0 lg:ml-64 flex-1"> 
        <ScrollProgress />
        <Hero />
        <About />
        <Work />
        <Clients />
        <Contact />
      </main>
    </div>
  )
}

export default App