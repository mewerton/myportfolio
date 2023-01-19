import { Experience } from "../../Components/Experience"
import { Intro } from "../../Components/Intro"
import { Navbar } from "../../Components/Navbar"
import { Services } from "../../Components/Services"
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


    </Container>
  ) 
}