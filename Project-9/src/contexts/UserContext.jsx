import {createContext} from 'react'
import {useState,useEffect} from 'react'
export const userContextObj=createContext()

function UserContext({children}){
    // state
    const [users,setUsers]=useState([])

    async function getUsers(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await res.json()
        setUsers(data)
    }

    useEffect(()=>{
        getUsers()
    },[])

    return(
        <userContextObj.Provider value={{users}}>
            {children}
        </userContextObj.Provider>
    )
}

export default UserContext

//dont write more than one states in context because it will cause re-rendering of all components