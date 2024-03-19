import Link from "next/link";
import React from "react";

type Props = {
  page: WikiResult;
};

const Item = ({ page }: Props) => {
  return (
    <article className="m-4 max-w-lg">
      <div className="flex flex-col justify-center items-center">
        <h2>
          <Link
            href={`https://en.wikipedia.org/?curid=${page.pageid}`}
            target="_blank"
            className="text-xl font-bold underline"
          >
            {page.title}
          </Link>
        </h2>
        <p>{page.extract}</p>
      </div>
    </article>
  );
};

export default Item;
