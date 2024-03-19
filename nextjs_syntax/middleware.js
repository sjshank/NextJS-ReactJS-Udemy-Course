import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {




  //we can set headers for all reqest
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set("x-hello-from-middleware2", "hello"); // we can verify under browser network tab
  return response;

  //If user is not authenticated then don't allow to access API calls

//   if (!isAuthenticated(request)) {
//     // Respond with JSON indicating an error message
//     return Response.json(
//       { success: false, message: 'authentication failed' },
//       { status: 401 }
//     )
//   }


//   if (request.nextUrl.pathname.startsWith("/services")) {
//     return response.rewrite(new URL("/user/login", request.url));
//   }

//   if (request.nextUrl.pathname.startsWith("/home")) {
//     console.log(request.nextUrl.pathname);
//     return response.redirect(new URL("/dashboard", request.url));
//   }
}

//Matching paths. Will run for those only
// export const config = {
//   matcher: ["/services/:path*"],
// };


//We can secure our API (Route handlers from being publicaly access)
// export const config = {
//     matcher: '/api/:function*',
//   }