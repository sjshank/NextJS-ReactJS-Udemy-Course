import getWikiSearchResult from "../../lib/getWikiSearchResult";
import React from "react";
import Item from "./components/Item";

type Props = {
  params: {
    searchQuery: string;
  };
};

export const generateMetadata = async ({ params: { searchQuery } }: Props) => {
  const wikiData: SearchWikiResult = await getWikiSearchResult(searchQuery);
  const pages: WikiResult[] | undefined = wikiData?.query?.pages;

  if (!pages) {
    return {
      title: "Data not found",
    };
  }
  return {
    title: `${searchQuery}`,
    description: `Search result for ${searchQuery}`,
  };
};

const SearchQuery = async ({ params: { searchQuery } }: Props) => {
    console.log(searchQuery);
  const wikiData: SearchWikiResult = await getWikiSearchResult(searchQuery);
  const pages: WikiResult[] | undefined = wikiData?.query?.pages;
  return (
    <main className="bg-gray-400 mx-auto max-w-lg py-1 min-h-screen">
      {pages ? (
        Object.values(pages).map((page:WikiResult) => {
          return <Item page={page} key={page.pageid}/>;
        })
      ) : (
        <h2 className="p-2 text-xl text-center">No data found</h2>
      )}
    </main>
  );
};

export default SearchQuery;
