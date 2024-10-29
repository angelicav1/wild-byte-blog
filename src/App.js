import TopBar from './components/topbar/TopBar';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route
          path='/register'
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route path='/write' element={user ? <Write /> : <Register />}></Route>
        <Route
          path='/settings'
          element={user ? <Settings /> : <Register />}
        ></Route>
        <Route path='/post/:postId'>
          {' '}
          <Single />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
