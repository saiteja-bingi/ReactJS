import {useForm} from 'react-hook-form'

function UserForm(props) {
    let {register, handleSubmit,formState:{errors}} = useForm()
    
    return (
        <div className="mt-5">
            <h1>Create New User</h1>
            <form action="" onSubmit={handleSubmit(props.createUser)}>
                <input type="text" {...register('username',{required:true})} className="form-control mb-3" placeholder="Name" />
                <input type="email" {...register('email')} className="form-control mb-3" placeholder="Email" />
                <input type="date" {...register('dob')} className="form-control mb-3" placeholder="Date of Birth" />
                <button type="submit" className="btn btn-success mt-3">Create User</button>
            </form>
        </div>
    )
}

export default UserForm