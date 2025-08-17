import Header from './components/header/header';
import Hero from './components/hero/hero';
import Main from './components/main/main';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import { useEffect, useState } from 'react';



function App() {
 useEffect(() => {
  window.addEventListener('scroll', () => {
   if (window.scrollY > 300) {
    setScrollPosition(true);
   } else {
    setScrollPosition(false);
   }
   
  });
 }, []);

  const [scrollPosition, setScrollPosition] = useState(false);
  
  return (
    <div id='up' className='container'>
    <Header />
   
    <Hero />
    <div className='divider'/>
    <Main />
    <div className='divider'/>
    <Contact />
    <div className='divider'/>
    <Footer />

   
     <a style={{opacity: scrollPosition ? 1: 0, transition: 'all 0.5s ease-in-out'}} href="#up">
          <button className='icon-keyboard_arrow_up'></button>

    </a>
  
    </div>
  )
}

export default App
