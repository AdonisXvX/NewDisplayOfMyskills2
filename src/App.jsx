import './App.css'
import reactLogo from './assets/react.svg'
import graphImg from './assets/graph.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Signin from './logIn.jsx'
import SignUp from './signIn.jsx'
import SectionCards from './SectionCards'
import WebDev from './pages/WebDev'
import Marketing from './pages/Marketing'
import AIDev from './pages/AIDev'
import Purchase from './pages/Purchase'
import './pages/sections.css'
import Footer from './components/Footer'
import UserStats from './components/UserStats'
import WelcomeBanner from './components/WelcomeBanner'
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <AuthProvider>
      <BrowserRouter>
      <header>
        <ul>
          <li className="img">
            <a className="brand" href="/">
              <img src={reactLogo} alt="React logo" />
              <span className="brand-name">Kossay Riahi</span>
            </a>
          </li>
          <li>home</li>
          <li>about</li>  
          <li>contact</li>
          <li>my projects</li>
          <li><Link to="/purchase" className='purchase'>Purchase</Link></li>
          <li><Link to="/login" className='LogIn'>Log In</Link></li>
          <li><Link to="/signup" className='SignIn'>Sign Up</Link></li>
          
          <li className="push-right">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input type="text" placeholder='search ....' name="" id="" />
              <UserStats />
            </div>
          </li>
        </ul>

      </header>
      <Routes>
        <Route path="/" element={
          <>
            {showWelcome && <WelcomeBanner onClose={() => setShowWelcome(false)} />}
            <nav>
              <img className='display' src={reactLogo} alt="" />
              <p>
                <h2 className='header2'>Welcome to my Achievements hall ! </h2>
                A Tunisian 🇹🇳 full-stack developer with a Bachelor's degree in Computer Science and 2 years of experience. I create E-commerce websites that helped businesses improve their sales in the market.
                I've built enterprise apps from scratch and I specialize in React.js for front-end development and Node.js for back-end services.
              </p>
            </nav>

            <SectionCards />

            <section>
              <h2 className='header2'>How can I help you grow your business and leads?</h2>
              <p style={{maxWidth: 920, margin: '0.5rem auto', color: '#fff'}}>
                I can provide you with top-notch services in Web Development, Meta Marketing, and AI Development to elevate your business to new heights. I am dedicated to delivering innovative solutions that drive growth and success.
              </p>
              <img src={graphImg} alt="growth graph" className="graph" />
            </section>
          </>
        } />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/section/web-dev" element={<WebDev />} />
        <Route path="/section/marketing" element={<Marketing />} />
        <Route path="/section/ai-dev" element={<AIDev />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
