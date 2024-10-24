import "./post.css";

export default function Post() {
  return (
    <div className="post">
     <img className="postImage"
     src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/148/427/original/yellowstone-bison_copy.jpg?1729796946" alt="Yellowstone Bison" />

     <div className="postInfo">
        <div className="postCategories">
            <span className="postCategory">Africa</span>
            <span className="postCategory">Antarctica</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor </span>
        <hr />
        <span className="postDate">1 hour ago</span>
     </div>
     <p className="postDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ut nulla consectetur quaerat. Corrupti cum repellendus labore, ratione nobis tempore officia explicabo modi. Corrupti itaque illo ut doloribus soluta veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis saepe eveniet modi quisquam distinctio odio labore reprehenderit quibusdam a. Enim itaque libero vel tempore laborum corporis minus fugit animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, a? Excepturi architecto nam mollitia. Est quod tenetur dolorum nihil, fugit neque labore! Nostrum iure atque tempora. Pariatur corporis expedita nostrum.</p>  
</div>
  )
}
