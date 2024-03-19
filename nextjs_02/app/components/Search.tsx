"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const router: AppRouterInstance = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSearchText("");
    router.push(`/${searchText}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-50 flex justify-center items-center"
    >
      <div className="self-auto">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
          className="bg-white p-2 w-80 text-xl rounded-xl text-slate-800"
        />
      </div>
      <div>
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
            🛸
        </button>
      </div>
    </form>
  );
};

export default Search;
