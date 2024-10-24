import "./sidebar.css"

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME </span>
        <img
          className='sidebarImage'
          src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/422/original/logo_copy_Small.jpeg?1729790788'
          alt='About Wild Byte'
        />
        <p>
          Wild Byte is an educational project that utilizes technology such as
          full-stack web development, historical record, and creativity to
          highlight stories of the natural world. It is our goal to help you get to know our non-human counterparts and your place in nature.
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
      <div className='sidebarItem'>FOLLOW US</div>
      <div className='sidebarSocial'>
        <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        <i className='sidebarIcon fa-brands fa-facebook'></i>
        <i className='sidebarIcon fa-brands fa-tiktok'></i>
        <i className='sidebarIcon fa-brands fa-x-twitter'></i>
      </div>
    </div>
  );
}