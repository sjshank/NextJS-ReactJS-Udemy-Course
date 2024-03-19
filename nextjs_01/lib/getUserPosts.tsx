
const getUserPosts = async (userId:string) => {
    //this will add ISR (Increment Static Rendering ) support to SSG
    //It will validate data after every 30sec
    const result  = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 30 } });
    if(!result){
        // throw new Error("Failed to fetch data");
        return undefined; //this is useful when you have a nonfound handler in your dynamic route segment
    }else {
        return result.json();
    }

}

export default getUserPosts;