import { useEffect, useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

import * as postService from "../../../services/post";

function PostContainer() {
  const [displayAdd, setDisplayAdd] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editId, setEditId] = useState(-1);

  useEffect(function () {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const data = await postService.fetch();
      setPosts(data);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSave = async ({ title, content }) => {
    try {
      const data = await postService.add({ title, content });
      setDisplayAdd(false);
      setPosts((post) => [...post, data]);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (payload) => {
    const id = editId;
    try {
      await postService.update(id, payload);
      alert("Edited successfully");

      const updatedPost = posts.map((post) =>
        post._id === id ? { ...post, ...payload } : post
      );

      setPosts(updatedPost);
      setEditId(-1);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmation = window.confirm("Are you sure to delete");

    if (!confirmation) return;

    try {
      await postService.remove(id);
      alert("Successfully deleted");
      const filteredPost = posts.filter((post) => post._id !== id);

      setPosts(filteredPost);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="post-container">
      <h3 className="post-header">Posts</h3>
      <ul className="post-items">
        {posts.map((post) => (
          <div key={post._id}>
            {post._id === editId ? (
              <AddPost
                title={post.title}
                description={post.content}
                onCancel={() => setEditId(-1)}
                onSave={handleEdit}
              />
            ) : (
              <Post
                id={post._id}
                title={post.title}
                description={post.content}
                onEdit={(id) => setEditId(id)}
                onDelete={handleDelete}
              />
            )}
          </div>
        ))}

        {displayAdd && (
          <AddPost onCancel={() => setDisplayAdd(false)} onSave={handleSave} />
        )}
      </ul>

      <button className="add-btn" onClick={() => setDisplayAdd(true)}>
        +
      </button>
    </div>
  );
}

export default PostContainer;
