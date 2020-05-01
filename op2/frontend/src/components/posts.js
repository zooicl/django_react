import React from 'react'

const Posts = ({posts}) => {
    return (
        <div>
            <center><h1>Post List</h1></center>
            {posts.map((post) => (
                <div className="post">
                    <div key={post.id}>
                        <h5 className="post-title">{post.title}</h5>
                        <p className="post-content">{post.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Posts