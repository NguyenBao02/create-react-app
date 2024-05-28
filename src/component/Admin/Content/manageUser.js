import ModalCreateUser from "./Modal/modalCreateUser";
import '../../../assets/scss/managerUser.scss';
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import TableUser from "./tableUser";
import { getAllUser } from "../../../services/apiServices";
import ModalUpdateUser from "./Modal/modalUpdateUser";
import ModalDisplayUser from "./Modal/modalDisplayUser";
import ModalDeleteUser from "./Modal/modalDeleteUser";
import _ from "lodash";

const ManagerUser = (props) => {
    const [show, setShow] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [listUserUpdate, setListUserUpdate] = useState({});
    const [showDisplayUser, setShowDisplayUser] = useState(false);
    const [listUserDisplay, setListUserDisplay] = useState({});
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [listUserDelete, setListUserDelete] = useState({});

    useEffect(() => {
        fetchApiUser();
    }, []);

    const fetchApiUser = async () => {
        let res = await getAllUser();

        if (res.data.status) {
            setListUser(res.data.data);
        }
    }

    const handleUpdateUser = (item) => {
        setShowUpdateUser(true);
        setListUserUpdate(item)
    }

    const resetUpdateData = () => {
        setListUserUpdate({});
    }

    const handleDisplayUser = (item) => {
        setShowDisplayUser(true);
        setListUserDisplay(item);
    }

    const handleDeleteUser = (item) => {
        setShowDeleteUser(true);
        setListUserDelete(item);
    }

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
                    {!_.isEmpty(listUser) ?
                        <TableUser handleDeleteUser={handleDeleteUser} listUser={listUser} handleUpdateUser={handleUpdateUser} handleDisplayUser={handleDisplayUser} />
                        :
                        <span>No Data</span>
                    }
                </div>
                <ModalCreateUser show={show} setShow={setShow} fetchApiUser={fetchApiUser} />

                <ModalUpdateUser resetUpdateData={resetUpdateData} listUserUpdate={listUserUpdate} show={showUpdateUser} setShow={setShowUpdateUser} fetchApiUser={fetchApiUser} />

                <ModalDisplayUser show={showDisplayUser} setShow={setShowDisplayUser} listUserDisplay={listUserDisplay} />

                <ModalDeleteUser fetchApiUser={fetchApiUser} listUserDelete={listUserDelete} show={showDeleteUser} setShow={setShowDeleteUser} />
            </div>
        </div>
    )
}

export default ManagerUser;