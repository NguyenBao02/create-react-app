import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../../assets/scss/managerUser.scss';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const ModalDisplayUser = (props) => {
    const { show, setShow, listUserDisplay } = props;
    const [preview, setPreview] = useState();
    const handleClose = () => setShow(false)


    const handleSetPreview = () => {
        if (listUserDisplay.image) {
            setPreview(`http://127.0.0.1:8000/images/${listUserDisplay.image}`)
        }
    };

    const fortmatDay = (day) => {
        return dayjs(day, 'YYYY-MM-DD');
    }

    useEffect(() => {
        handleSetPreview();
    }, [listUserDisplay]);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Display User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3 modal-create-user">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input value={listUserDisplay.email} disabled type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Username</label>
                            <input value={listUserDisplay.username} disabled type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Role</label>
                            <select disabled id="inputState" className="form-select">
                                <option value={listUserDisplay.role}>{listUserDisplay.role}</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Created At</label>
                            <input value={fortmatDay(listUserDisplay.created_at)} disabled type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-12">
                            <div className='img-preview'>
                                {
                                    preview ?
                                        <img src={preview} />
                                        :
                                        <span>Image Preview</span>
                                }
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDisplayUser;