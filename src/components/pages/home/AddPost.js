import { useState } from "react";

function AddPost(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  return (
    <div className="post-item">
      <div className="post-title">
        <input
          className="title__heading input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="post__description">
        <textarea
          className="post__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="save-btn"
          onClick={() => props.onSave({ title, content: description })}
        >
          Save
        </button>
        <button className="save-btn" onClick={() => props.onCancel()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddPost;
