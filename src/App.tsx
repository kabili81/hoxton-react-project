import './App.css'
import { AboutUs } from '../components/AboutUs'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { News } from '../components/News'
import { Services} from '../components/Services'
import { Link } from 'react-router-dom'



function App() {
  const title = 'Accounting & Tax Services'

  return (
    <div className="App">
      <header   className='App-header'>
        <div className='header-left__menu'>
  <img src="http://edconsulting-rks.com/wp-content/uploads/2022/04/cropped-EDLogo.png" alt="logo" width={200}/>
  <h5>{ title }</h5>
  <h2>{"ED CONSULTING"}</h2>
  <div>
  <hr
        style={{
          background: 'orange',
          color: 'orange',
          borderColor: 'orange',
          height: '5px',
          
        }}
      />

      
  </div>
  <p>{"Invest your time and efforts on running your business. Leave the accounting to me"}</p>
  <button>Contact</button>
  </div>

  <div className='header-right__menu'>
  <Link to={'home'}>Home</Link>
   <Link to={'about us'}>About Us</Link>
   <Link to={'services'}>Services</Link>
   <Link to={'ews'}>News</Link>
   <Link to={'Contact'}>Contact</Link>

 
 </div>
  </header>
    </div>
  )
}

export default App
