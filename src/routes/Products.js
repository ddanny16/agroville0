import { React} from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import MainProd from '../components/MainProd'
import Background from "../assets/cows.svg"
import { FaSearch } from "react-icons/fa"
// import MainProd from '../components/MainProd'


const Products = () => {

  return (
    <div>
      <Navbar   />
    

      <HeroImg img={Background} heading="Local. Natural. Sustainable" text="" btn={<FaSearch size={20} style={{
        color: "#fff",
        marginRight: "0rem",



      }} />} />
      <MainProd />

    </div>
  )
}

export default Products
