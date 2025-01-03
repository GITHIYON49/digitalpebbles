import './App.css';
import { Navbar,Footer} from './components';
import { Home,About,Service,Contact,WebDevelopment,AppDevelopment,Ecommerce,TrainingDevelopment,AmazonMarketing } from './pages';
import { Routes,Route} from 'react-router';

function App() {

      return <>
      <Navbar/>
      {/* <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Service/>} path='/services'/>
            <Route element={<WebDevelopment/>} path='/services/webdevelopment'/>
            <Route element={<AppDevelopment/>} path='/services/appdevelopment'/>
            <Route element={<Ecommerce/>} path='/services/e_commerce'/>
            <Route element={<AmazonMarketing/>} path='/services/gagets_amazon_marketing'/>
            <Route element={<TrainingDevelopment/>} path='/services/trainingdevelopment'/>
            <Route element={<Contact/>} path='/contact'/>
      </Routes> */}
      {/* <Footer/> */}
      </>
}

export default App
