import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div style={{ 
      background: "linear-gradient(135deg, #A1C4FD, #C2E9FB, #E2F4FD, #D4E6F1, #B4D9E8, #A2C9D6, #9ABAD8, #9B9BEB, #8A9BEB, #7A9AC9, #6C9BB2, #5A9A9E)", // soothing shades of blues and greens
      minHeight: "100vh" 
  }}>
    <>
    <Navbar/>
<div className="px-8 md:px-[200px]">
        <HomePosts/>
        <HomePosts/>
        <HomePosts/>
        <HomePosts/>
        <HomePosts/>
        



    </div>   
    <Footer/>   
    
    </>
    

  </div>
  
  )
}

export default Home