import { Footer } from "./components/Footer/Footer"
import { Gallery } from "./components/Gallery/Gallery"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>    
      <Header />
      <Hero />
      <Gallery />
      {/* <Footer /> */}
      <GlobalStyles />
    </>
  )
}

export default App