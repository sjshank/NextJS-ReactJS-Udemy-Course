import React from "react";
import { notFound } from "next/navigation";
import RandomNotFound from "./components/randomNotFound";

/*
 * Dynamic segments by default get params object as argument
 */

const randomIds = ["randomId-1", "randomId-2", "randomId-3"];

export const generateMetadata = ({ params }) => {
  console.log(params);
  const random = params.random;
  return { title: `${random} - Random Dashboard` };
};
//This segment will be render at server end when request came from client. Hence, it's a SSR
//In order to cnvert into SSG, generate the segment params at build time.
const RandomDashboard = ({ params }) => {
  console.log(params); //{random: 'id from url'}
  if (!randomIds.includes(params.random)) {
    notFound();
  }
  return (
    <div>
      RandomDashboard
      <br />
      <RandomNotFound />
    </div>
  );
};

export default RandomDashboard;

//statically generating params here for all the random dashboard pages.
//This will help to prefetch dynamic routes at build time. Resutls in SSG
//This is only possible when we are certain about potential params
// export function generateStaticParams() {
//   return randomIds.map((id) => {
//     if (id !== "randomId-2") {
//       return {
//         random: id,
//       };
//     }
//   });
// }
