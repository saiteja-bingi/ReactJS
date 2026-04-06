import UserForm from "./UserForm"
import UserList from "./UserList"
import {useEffect, useState}  from 'react'

function UserManagement() {

    const [users, setUsers] = useState([])

    async function createUser(user){
        // console.log(user)
        // save newUser in local API
        // we need JSON Server
        // npm install json-server
        // json-server --watch users.json

        // save newuser in local API using  HTTP POST req
        let res=await fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        // console.log(res)
        if(res.status===201){
            readUser()
        }
    }
    //read all users from api
    async function readUser(){
        let res=await fetch('http://localhost:3000/users')
        let data=await res.json()
        // console.log(data)
        setUsers(data)
    }

    async function updateUser(user){
        // HTTP put request
        let res=await fetch(`http://localhost:3000/users/${user.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        if(res.status===200){
            readUser()
        }
    }
    async function deleteUser(id){
        let res=await fetch(`http://localhost:3000/users/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(res.status===200){
            readUser()
        }
    }

    useEffect(()=>{
        readUser()
    },[])

    return (
        <div className="container">
            <h1 className="display-3 text-center text-primary">User Management</h1>
            <div className="row">
                <div className="col-md-6">
                    <UserForm createUser={createUser}/>
                </div>
                <div className="col-md-6">
                    <UserList users={users} readUser={readUser} updateUser={updateUser} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    )
}

export default UserManagement

// 4 types of http requests
// GET - read
// POST - create
// PUT - update
// DELETE - delete
 

// steps for update
// place edit button
// when click on edit then it need to show modal
