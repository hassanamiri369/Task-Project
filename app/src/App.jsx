import Article from "./components/Article/Article"
import Buttons from "./components/Buttons/Buttons"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import NavBar from "./components/NavBar/NavBar"

function App() {
 
  return (
    <>
      <div className="App">
        <section className="container">
          <NavBar/>

          <Header/>


          <Main/>


          <Article/>

          <Buttons/>

          <Footer/>
        </section>
      </div>
    </>
  )
}

export default App
