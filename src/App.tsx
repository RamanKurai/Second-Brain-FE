import DashBoard from './pages/DashBoard'
import { Landing } from './pages/Landing'
import { SharePage } from './pages/SharedLinkPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/signup' element={<SignUp/>} /> 
    <Route path='/signin' element={<SignIn/>} /> 
    <Route path='/dashboard' element={<DashBoard/>} /> 
    <Route path='/brain/share/:hash' element={<SharePage/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
