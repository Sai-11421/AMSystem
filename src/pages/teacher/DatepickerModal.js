import React from 'react';
import { Modal, Form } from 'react-bootstrap'

const DatepickerModal = ({ show, setshow, setdate }) => {
    return (
        <div>
            <Modal show={show} onHide={() => setshow(false)}>
                <div style={{ padding: '40px' }}>
                    <h6>Enter the date on which you want to modify the attendance</h6><br/>
                    <Form.Control type='date' onChange={(e) => { setdate(e.target.value); setshow(false) }} />
                </div>
            </Modal>
        </div>
    );
};

export default DatepickerModal;