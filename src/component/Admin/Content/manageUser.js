import ModalCreateUser from "./Modal/modalCreateUser";
import '../../../assets/scss/managerUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManagerUser = (props) => {
    const [show, setShow] = useState(false);
    return (
        <div className="manager-user-container">
            <div className="title">
                Manager user
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShow(true)}>
                        <FcPlus /> Add New Users
                    </button>
                </div>
                <div className="table-users-container">
                    Table Users
                </div>
                <ModalCreateUser show={show} setShow={setShow} />
            </div>
        </div>
    )
}

export default ManagerUser;