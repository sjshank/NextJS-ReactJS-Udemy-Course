import React from "react";
//this file is consuming server actions which can be used inside useEffect, event handlers
const ResourceList = async ({ getAllResource }) => {
  const result = await getAllResource();
  const list = result.data;
  return (
    <div className="flex flex-col p-5">
      {list &&
        list.map((d) => {
          return (
            <p key={d.id} style={{ color: `${d.color}` }}>
              {d.name} - {d.year}
            </p>
          );
        })}
    </div>
  );
};

export default ResourceList;
