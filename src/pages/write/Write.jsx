import "./write.css";

export default function Write() {
  return (
    <div className='write'>
      <img
        className='writeImage'
        src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/450/original/dylan-ferreira-drl_EYmkujk-unsplash.jpg?1729825065'
        alt='Wild Coyote'
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
}
