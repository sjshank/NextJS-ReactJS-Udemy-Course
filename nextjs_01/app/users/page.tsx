import React from "react";
import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";

const UsersPage = async () => {
  const usersData = await getAllUsers();

  return (
    <div>
      <h2>UsersPage</h2>
      <br />
      <div>
        {usersData &&
          usersData.map((user: any) => {
            return (
              <p key={user.id} style={{ padding: 10 }}>
                <Link href={`users/${user.id}`} prefetch={user.id == 10 ? false : true}> {user.name}</Link>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default UsersPage;
