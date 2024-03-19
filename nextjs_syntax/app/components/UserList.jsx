"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const UserList = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/api", {
        method: "GET",
        headers: {
          "api-call": "users",
        },
      });
      const result = await response.json();
      if (!result) {
        redirect("http://localhost:3000/");
      } else {
        setUsers(result.data);
      }
    };
    fetchUsers();


    const fetchTeam = async () => {
      const response = await fetch("http://localhost:3000/api/myTeam", {
        method: "GET",
        headers: {
          "api-call": "team",
        },
      });
      const result = await response.json();
      console.log("team api call result ", result.data);
    };
    fetchTeam();
  },[]);

  const handleAddUser = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add Random User</button>
      <h5>Showing total {Users && Users.length} records</h5>
      {Users.map((user) => {
        return (
          <p
            className="p-5"
            key={user.id}
          >{`${user.first_name} ${user.last_name}`}</p>
        );
      })}
    </div>
  );
};

export default UserList;
