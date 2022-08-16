import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/pages/login/Login';
import Register from './components/pages/login/Register'
function App() {

  return (
   <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
            
   </BrowserRouter>
  )
}

export default App
