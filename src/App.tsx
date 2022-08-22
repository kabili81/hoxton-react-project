import './App.css'
import { AboutUs } from '../components/AboutUs'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { News } from '../components/News'
import { Services} from '../components/Services'



function App() {


  return (
    <div className="App">
      <header   className='App-header'>
        <div className='header-left__menu'>
  <img src="http://edconsulting-rks.com/wp-content/uploads/2022/04/cropped-EDLogo.png" alt="logo" width={200}/>
  </div>
  <div className='header-right__menu'>
  <Home />
 <AboutUs />
  <Services />
  <News />
  <Contact />
 </div>
  </header>
    </div>
  )
}

export default App
