import {Modal} from 'react-bootstrap'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

function UserList(props) {//users,readUser,updateUser,deleteUser

    let {register,handleSubmit,setValue} = useForm()

    let [showModal,setShowModal] = useState(false)
    function openModal(){
        setShowModal(true)
    }
    function closeModal(){
        setShowModal(false)
    }

    function userToEdit(user){
        //open modal
        openModal()
        // place user data in form
        setValue('id',user.id)
        setValue('username',user.username)
        setValue('email',user.email)
        setValue('dob',user.dob)
        
    }

    function saveModifiedUser(user){
        // close modal
        closeModal()
        // update user
        props.updateUser(user)
    }

    return (
        <div>
            <h1 className="mt-5">List of Users</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>username</th>
                        <th>Email</th>
                        <th>Date of Birth</th>

                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user)=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => userToEdit(user)}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>props.deleteUser(user.id)}>X</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/* modal to edit user data */}
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* user edit form */}
                    <form action="" onSubmit={handleSubmit(saveModifiedUser)}>
                        <input type="text" {...register('id')} className="form-control mb-3" placeholder="ID" hidden/>
                        <input type="text" {...register('username',{required:true})} className="form-control mb-3" placeholder="Name" />
                        <input type="email" {...register('email')} className="form-control mb-3" placeholder="Email" />
                        <input type="date" {...register('dob')} className="form-control mb-3" placeholder="Date of Birth" />
                        <button type="submit" className="btn btn-success mt-3">Save</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UserList