import React, { useState } from 'react'
import PostItem from '../comporments/PostItem';
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom';


const EventListNew = () => {
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
  <span>
    <div className="LeftSide">
      <div className="Title-Left">
        <h3>Sự kiện</h3>
        <ul>
          <li><Link to="/posts/1">Sự kiện sắp diễn ra</Link></li>
          <li><Link to="/posts/1">Sự kiện đã diễn ra</Link></li>
        </ul>
      </div>
    </div>
  </span>

  {/* Đọc thêm section */}
  <div className="read-more">
    <h4>Đọc thêm</h4>
    <ul>
      <li><Link to="/articles/1">Tin tức 1</Link></li>
      <li><Link to="/articles/2">Tin tức 2</Link></li>
      <li><Link to="/articles/3">Tin tức 3</Link></li>
    </ul>
  </div>
</div>
        </div>

    );
};

export default EventListNew;



