import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsProfilePicture'>
            <img
              src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/452/original/avictoria_2_copy.png?1729826407'
              alt='Wild Byte-Angelica Victoria'
            />
            <label htmlFor='fileInput'>
              <i className='settingsProfilePictureIcon fa-regular fa-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Angelica' />
          <label>Email</label>
          <input type='text' placeholder='angelica@avictoria.dev' />
          <label>Password</label>
          <input type='password' />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
