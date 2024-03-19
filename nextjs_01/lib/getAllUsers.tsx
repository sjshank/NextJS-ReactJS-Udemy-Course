
const getAllUsers = async ( ) => {
    const result  = await fetch("https://jsonplaceholder.typicode.com/users");
    if(result.status !== 200){
        throw new Error("Failed to fetch data");
    }else {
        return result.json();
    }

}

export default getAllUsers;