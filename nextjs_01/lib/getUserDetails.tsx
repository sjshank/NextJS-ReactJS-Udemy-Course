
const getUserDetails = async (userId:string) => {
    const result  = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { next: { revalidate: 30 }});
    if(!result){
        // throw new Error("Failed to fetch data");
        return undefined; //this is useful when you have a nonfound handler in your dynamic route segment
    }else {
        return result.json();
    }

}

export default getUserDetails;