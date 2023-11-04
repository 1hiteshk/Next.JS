import User from "@/components/user";

function UserList({users}) {
    return <><h1>Users List</h1>
    {users.map((user) => {
        return(
            <div key={user?.id}>
                <User  user={user}/>
            </div>
        )
    })}
    </>
}

export default UserList;

export async function getStaticProps(){ // it returns a object
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);  // we will see the list of users logged in terminal not the browser
// now we have the data how to pass it to the function above

return{ // this object will contains a property called props which is again an object, it contains an key valuepair
    props:{
        users: data,
    },
}//when we return our UserList comp. will receive props at build time
}