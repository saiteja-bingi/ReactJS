import {useContext} from 'react'
import {userContextObj} from '../contexts/UserContext'

const Child2 = () => {
    const {users}=useContext(userContextObj)
  return (
    <div>
        <h1>Child2</h1>
        <p>Number of users: {users.length}</p>
    </div>
  )
}

export default Child2