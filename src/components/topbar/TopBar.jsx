import "./topbar.css";

export default function TopBar() {
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
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
          </ul>
        </div>
        <div className='topRight'>
            <img className="topImage"
              src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/232/original/Wordpress_Transparent.png?1723244265'
              alt=''
            />
          <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
    );
}