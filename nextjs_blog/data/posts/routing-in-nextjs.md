---
title: Routing in Next.js
date: 2024-03-05,
image: nextjs-file-based-routing.png
excerpt: NextJS is a the React framework for production - enables routing in your app by using the file-system-based routing.
isFeatured: true
---

Next.js uses the file system to enable routing in the app. Next automatically treats every file with the extensions .js, .jsx, .ts, or .tsx under the pages directory as a route.

Index Routes: The index.js files in our pages directory are automatically routed to the root directory. For Example: If we create a file in the pages directory named index.js . Then it could be accessed by going to http://localhost:3000/

Nested Routes: If we create a nested folder structure, our routes will also be structured in the same manner. For Example: If we create a new folder called users and create a new file called about.js within it, we can access this file by visiting http://localhost:3000/users/about

Dynamic Routes: We can also accept URL parameters and create dynamic routes using the bracket syntax. For Example: If we create a new page in the pages directory called [id].js then the component exported from this file, could access the parameter id and render content accordingly. This can be accessed by going to localhost:3000/<Any Dynamic Id> .
