import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/pages/login/Login';
import Register from './components/pages/login/Register'
import NewsNo  from './components/pages/news/NewsNo';
function App() {

  return (
   <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
            <Routes>
                <Route path="/news" element={<NewsNo/>}></Route>
            </Routes>
            
   </BrowserRouter>
  )
}

export default App
