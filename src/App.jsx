import { Navbar,Footer} from './components';
import { Home,About,Contact,WebDevelopment,AppDevelopment,Ecommerce,TrainingDevelopment,AmazonMarketing } from './pages';
import { Routes,Route} from 'react-router';

function App() {

      return <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service/webdevelopment' element={<WebDevelopment />} />
        <Route path='/service/appdevelopment' element={<AppDevelopment />} />
        <Route path='/service/ecommerce' element={<Ecommerce />} />
        <Route path='/service/gadgets_amazon_marketing' element={<AmazonMarketing />} />
        <Route path='/service/trainingdevelopment' element={<TrainingDevelopment />} />
      </Routes>
      <Footer/>
    </>
}

export default App
