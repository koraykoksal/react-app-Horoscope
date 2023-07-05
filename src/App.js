import "./App.scss";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";



function App() {
  return (
    <div className="App">

      {/* <header className="App-header">Learn React</header> */}

      <Navbar/>
      <Header/>
      <Main/>
      

    </div>
  )
}

export default App
