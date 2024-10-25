import "./singlePost.css";

export default function singlePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/140/171/original/john-bell-haGopMEwC6M-unsplash.jpg?1724123504'
          alt='Coyote'
          className='singlePostImage'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
            <i className='singlePostIcon fa-solid fa-trash-can'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Angelica</b>{' '}
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          tempora velit consequatur vero consectetur eius inventore architecto
          ab, nisi, ullam error quo aspernatur. Sequi architecto itaque, rem
          deleniti excepturi quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga totam inventore tempora, commodi dicta cupiditate, consequatur repudiandae necessitatibus possimus velit odio. Excepturi voluptatum doloremque tempore ut corporis voluptatibus commodi?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolorem eum voluptates in tempore quia a blanditiis nihil quibusdam deserunt minima modi rem, eveniet culpa alias illum ea magnam error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi sit dolor dolore voluptatibus eveniet, deserunt corporis labore amet enim! Facilis eos soluta nulla sint quos nam accusantium repudiandae odio.
        </p>
      </div>
    </div>
  );
}
