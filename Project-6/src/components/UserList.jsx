function UserList() {
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
            </table>
        </div>
    )
}

export default UserList