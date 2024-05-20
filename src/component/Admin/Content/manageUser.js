import ModalCreateUser from "./Modal/modalCreateUser";

const ManagerUser = (props) => {
    return (
        <div className="manager-user-container">
            <div className="title">
                Manager user
            </div>
            <div className="user-content">
                <div>
                    <button>Add New Users</button>
                </div>
                <div>
                    Table Users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default ManagerUser;