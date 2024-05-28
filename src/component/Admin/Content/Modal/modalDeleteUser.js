import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postDeleteUser } from '../../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, setShow, listUserDelete } = props

    const handleClose = () => setShow(false);

    const handleDelete = async () => {
        let res = await postDeleteUser(listUserDelete.id);

        if (res.data.status) {
            handleClose();
            toast.success(res.data.message);
            await props.fetchApiUser();
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete <b>{listUserDelete.username}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => handleDelete()} variant="danger">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;