import { Contact } from "../../Components/Contact"
import { Experience } from "../../Components/Experience"
import { Footer } from "../../Components/Footer"
import { Intro } from "../../Components/Intro"
import { Navbar } from "../../Components/Navbar"
import { Portfolio } from "../../Components/Portfolio"
import { Services } from "../../Components/Services"
import { Testemonials } from "../../Components/Testemonials"
import { Works } from "../../Components/Works"
import { Container } from "./styles"

export function App(){
    
  return(
    <Container>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      {/* <Testemonials/> */}
      <Contact/>
      <Footer/>
    </Container>
  ) 
}