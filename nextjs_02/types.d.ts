type WikiResult = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

type SearchWikiResult = {
  query?: {
    pages?: WikiResult[];
  };
};

type Exercise = {
    bodyPart:string;
    equipment:string;
    gifUrl:string;
    id:string;
    name:string;
    target:string;
}
