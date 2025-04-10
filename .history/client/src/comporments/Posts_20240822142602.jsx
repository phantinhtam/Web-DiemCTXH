import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom';


const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (

    <div className="container">
      <div className="post__container">
        {posts.length > 0 ? (
          <div className="post__container">
            {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                desc={desc}
                authorID={authorID}
              />
            ))}
          </div>
        ) : (
          <h2 className="center">No posts found</h2>
        )}
      </div>
      <div className="sidebar">
        <div className="LeftSide">
          <div className="Title-Left">
            <h3>Sự kiện</h3>
            <ul>

              <li><a href="/su-kien?f=sap-dien-ra" >Sự kiện sắp diễn ra</a></li>
              <li><a href="/su-kien?f=da-dien-ra" >Sự kiện đã diễn ra</a></li>
              <li><a></a></li>
            </ul>
          </div>
        </div>
        <div className="LeftSide">
          <div className="Title">
            <h3>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025</h3>
            <ul>
              <li>Cuộc thi Sinh viên Công Thương với ý tưởng khởi nghiệp là cuộc thi được tổ chức thường niên của Trường Đại học Công Thương Thành phố Hồ Chí Minh</li>
              <Link to="/" className="font_post">Đọc Thêm </Link>
            </ul>

          </div>
        </div>
        <div className="LeftSide">
          <div className="Title">
            <h3>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025</h3>
            <ul>
              <li>Don’t mind the bowl .
.
.
.
.
.
Full plating video of our charred octopus with romesco sauce and beans puree.</li>
              <Link to="/" className="font_post">Đọc Thêm </Link>
            </ul>
          </div>
        </div>
        <div className="LeftSide">
          <div className="Title">
            <h3>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025</h3>
            <ul>
              <li>Don’t mind the bowl .
.
.
.
.
.
Full plating video of our charred octopus with romesco sauce and beans puree.</li>
              <Link to="/" className="font_post">Đọc Thêm </Link>
            </ul>
          </div>
        </div>  <div className="LeftSide">
          <div className="Title">
            <h3>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025</h3>
            <ul>
              <li>Don’t mind the bowl .
.
.
.
.
.
Full plating video of our charred octopus with romesco sauce and beans puree.</li>
              <Link to="/" className="font_post">Đọc Thêm </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Posts;


