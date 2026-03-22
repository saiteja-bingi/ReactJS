import { useEffect,useState } from "react";
function ApiDemo(){
    // state
    const [users,setUsers]=useState([])
    const getPost=async()=>{
        let res=await fetch('https://dummyjson.com/users')
        let userObj=await res.json()
        let users=userObj.users;
        console.log(users)
        setUsers(users)
    }
    // console.log(users)
    // it will execute only after the first render
    useEffect(()=>{
        getPost();
    },[])
    
    return(
        <div className="text-center">
            <h1>Api Demo</h1>
            {/* display users in table */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ApiDemo;

// rendering JSX element --1
// making API request --2
