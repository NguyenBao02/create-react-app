import ModalCreateUser from "./Modal/modalCreateUser";
import '../../../assets/scss/managerUser.scss';

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
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManagerUser;