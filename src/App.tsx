import { useEffect, useState } from "react"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { Gallery } from "./components/Gallery/Gallery"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { GlobalStyles } from "./styles/global"

function App() {
  const [headerColor, setHeaderColor] = useState('transparent');

  document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;

    if (scroll_position > 75) {
      setHeaderColor('#FFFFFF');
    } else {
      setHeaderColor('transparent');
    }
  });

  return (
    <>
      <Header
        headerColor={headerColor}
      />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <GlobalStyles />
    </>
  )
}

export default App