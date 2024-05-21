import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    const handleClose = () => setShow(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("")

    const handleChangePreview = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('username', userName);
        formData.append('role', role);
        formData.append('image', image);

        let res = await axios.post('http://127.0.0.1:8000/api/participant', formData);
        console.log(res);
    }

    return (
        <>
            <Modal className='modal-create-user' backdrop="static" size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Username</label>
                            <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Role</label>
                            <select id="inputState" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value={"USER"}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="image" className="form-label label-upload">
                                <FcPlus /> Upload New Image
                            </label>
                            <input className="form-control" type="file" id="image" hidden onChange={(e) => handleChangePreview(e)}></input>
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;