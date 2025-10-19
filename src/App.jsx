import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Locations from './components/Locations'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Locations />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App