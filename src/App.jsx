import { useRef, useState, useEffect } from 'react'
import Contents from './components/Contents'
import Navigation from './components/Navigation'
import Contact_Email from './components/Contact'
import './index.css'

function App() {
 
  const [Home, setHome] = useState(false)
  const [About, setAbout] = useState(true)
  const [Works, setWorks] = useState(false)
  const [Contact, setContact] = useState(false)
  const [Resume, setResume] = useState(false)

  const [windowSize, setWindowSize] = useState(getWindowSize());


  const [ActiveNav, setActiveNav] = useState(false)

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  function handleHome(){
    setHome(true)

    setAbout(false)
    setWorks(false)
    setContact(false)
    setResume(false)
    setActiveNav(false)
  }  

  function handleAbout(){
    setAbout(true)

    setHome(false)
    setWorks(false)
    setContact(false)
    setResume(false)
    setActiveNav(false)
  }

  function handleWorks(){

    setWorks(true)

    setAbout(false)
    setHome(false)
    setContact(false)
    setResume(false)
    setActiveNav(false)
  }

  function handleContact(){
    setContact(true)

    setHome(false)
    setWorks(false)
    setAbout(false)
    setResume(false)
    setActiveNav(false)
  }

  function handleResume(){
    setResume(true)

    setHome(false)
    setWorks(false)
    setContact(false)
    setAbout(false)
    setActiveNav(false)
  }



  function ActiveNavigation(){
    setActiveNav(true)
  }
 
  return (
    <div className="App">
   
      <Navigation 
      handleHome={handleHome} 
      handleAbout={handleAbout} 
      handleWorks={handleWorks}
      handleContact={handleContact}
      handleResume={handleResume}
      width = {windowSize.innerWidth}
      ActiveNavigation={ActiveNavigation}
      ActiveNav = {ActiveNav}
      />


      <Contents
      Home={Home}
      About={About}
      Works={Works}
      Contact={Contact}
      Resume={Resume}
      Contact_Email={Contact_Email}
      />
      
    </div>
  )
}

export default App
