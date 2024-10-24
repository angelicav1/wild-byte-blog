import "./sidebar.css"

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className="sidebarImage"
          src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/361/original/logo.png?1729739839'
          alt='About Wild Byte'
        />
        <p>
          Wild Byte is an educational project that utilizes technology such as
          full-stack web development, historical records, and creativity to
          highlight stories of the natural world.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Africa</li>
          <li className='sidebarListItem'>Antarctica</li>
          <li className='sidebarListItem'>Asia</li>
          <li className='sidebarListItem'>Europe</li>
          <li className='sidebarListItem'>North America</li>
          <li className='sidebarListItem'>South America</li>
          <li className='sidebarListItem'>Oceania</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-square-instagram'></i>
          <i className='sidebarIcon fa-brands fa-facebook'></i>
          <i className='sidebarIcon fa-brands fa-tiktok'></i>
          <i className='sidebarIcon fa-brands fa-x-twitter'></i>
        </div>
      </div>
      </div>
  );
}
