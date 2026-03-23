function UserForm() {
    return (
        <div className="mt-5">
            <h1>Create New User</h1>
            <form action="">
                <input type="text" className="form-control mb-3" placeholder="Name" />
                <input type="email" className="form-control mb-3" placeholder="Email" />
                <input type="date" className="form-control mb-3" placeholder="Date of Birth" />
                <button type="submit" className="btn btn-success mt-3">Create User</button>
            </form>
        </div>
    )
}

export default UserForm