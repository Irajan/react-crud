import PostAction from "../../common/PostAction";
import "../../../assets/css/post.css";
import { userContext } from "../../App";
import { useContext } from "react";

function Post(props) {
  const { userData } = useContext(userContext);

  return (
    <li className="post-item">
      <div className="post-title">
        <h3 className="title__heading">{props.title}</h3>
        {userData.role === "ADMIN" && (
          <PostAction
            onEdit={() => props.onEdit(props.id)}
            onDelete={() => props.onDelete(props.id)}
          />
        )}
      </div>

      <p className="post__description">{props.description}</p>
    </li>
  );
}

export default Post;
