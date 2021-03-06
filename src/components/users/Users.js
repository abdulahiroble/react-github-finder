import React, { useContext } from "react";
import UserItem from "./Useritem";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  // Initialize githubContext
  const githubContext = useContext(GithubContext);

  // Destructuring
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
