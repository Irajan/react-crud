import { useEffect, useState } from "react";

import "../../../assets/css/user.css";

import UserPost from "./UserPost";

function UserContainer() {
  return (
    <>
      <div className="user-container">
        <h3 className="user-header">Users</h3>
        <ul className="users">
          <li className="user">
            <UserPost />
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserContainer;
