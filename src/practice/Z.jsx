import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function Z() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Hello {user.name}</h2>
      <p>Your Role is {user.role}</p>
    </div>
  );
}