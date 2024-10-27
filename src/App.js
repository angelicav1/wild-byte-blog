import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import { BrowserRouter, Route} from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

