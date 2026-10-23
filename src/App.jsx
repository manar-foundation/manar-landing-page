import './App.css'

import Apply from './components/Apply'
import Details from './components/Details'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Qualifications from './components/Qualifications'
import Tasks from './components/Tasks'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Details />
        <Tasks />
        <Qualifications />
        <Apply />
      </main>
      <Footer />
    </>
  )
}
