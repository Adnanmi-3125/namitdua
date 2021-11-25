

import Header from "../components/Header"
import ImgSlider from "../components/ImgSlider"
import Viewers from "../components/Viewers"
import About from "../components/AboutUs"
import ContactInfo from "../components/ContactInfo"
export default function Home() {
  return (
    <div>
      <Header/>
      <ImgSlider/>
      <Viewers/>
      <About/>
      <hr style={{marginTop:'50px' }}/>
      <ContactInfo/>
 </div>
  )
}
