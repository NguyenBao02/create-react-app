import { getAllUser } from "../../../services/apiServices";
import { useEffect, useState } from "react";

const TableUser = (props) => {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchApiUser();
    }, []);

    const fetchApiUser = async () => {
        let res = await getAllUser();

        if (res.data.status) {
            setListUser(res.data.data);
        }
    }

    return (
        <>
            <table className="table table-bordered text-center align-items-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((item, index) =>
                    (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className="btn btn-secondary">Display</button>
                                <button className="btn btn-warning ms-2">Update</button>
                                <button className="btn btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    )
                    )
                    }
                </tbody>
            </table>
        </>
    );
}

export default TableUser;