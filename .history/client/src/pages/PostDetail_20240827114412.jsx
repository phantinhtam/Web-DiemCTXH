import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';
import PostAuthor from '../comporments/PostAuthor';

const PostDetail = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);

    if (posts.length === 0) {
        return <p>No posts available</p>; // Hiển thị thông báo nếu không có bài viết
    }

    return (
        <section className='post-detail'>
            <div className="post-detail__container">
                {/* {posts.map((post) => (
                    <div className="post" key={post.id}>
                         <div className="thumbnail">
                            <img src={post.thumbnail} alt={post.title} />                     
                        </div>
                        <div className="content-pdetail">
                            <Link className="link" to={`/posts/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>  
                            <p>{post.desc}</p>
                            <button>Đọc Thêm</button>
                            <p></p>
                        </div>
                    </div>
                ))} */}

                <div className='post-detail__header'>
                    <PostAuthor/>
                    <div className='post-detail__buttons'>
                        <Link to={}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostDetail;
