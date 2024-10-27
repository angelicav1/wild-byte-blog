import { Route } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
    return (
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fa-brands fa-square-instagram'></i>
          <i className='topIcon fa-brands fa-facebook'></i>
          <i className='topIcon fa-brands fa-tiktok'></i>
          <i className='topIcon fa-brands fa-x-twitter'></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Route className='route' to='/'>
                HOME
              </Route>
            </li>
            <li className='topListItem'>
              <Route className='route' to='/'>
                ABOUT
              </Route>
            </li>
            <li className='topListItem'>
              <Route className='route' to='/'>
                CONTACT
              </Route>
            </li>
            <li className='topListItem'>
              <Route className='route' to='/'>
                WRITE
              </Route>
            </li>
            <li className='topListItem'>
              {user && "LOGOUT"}
              <Route className='route' to='/'>
                LOGOUT
              </Route>
            </li>
          </ul>
        </div>
        <div className='topRight'>
          {
            user ? (

              <img
            className='topImage'
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/232/original/Wordpress_Transparent.png?1723244265'
            alt=''
          />
            ) : (
              <ul className="topList">
              <Route className="route" to="/login">LOGIN</Route>
              <Route className="route" to="/register">REGISTER</Route>
              </ul>
            )
          }
          
          <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
    );
}