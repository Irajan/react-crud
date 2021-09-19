import React from "react";
import { useEffect, useState } from "react";

import ShowIcon from "../../common/ShowIcon";

function UserPost(props) {
  return (
    <>
      <div className="user-name"> {props.name}</div>
      <ShowIcon />
      <ul className="users-posts">
        <li className="user-post">Title 1</li>
      </ul>
    </>
  );
}

export default UserPost;
