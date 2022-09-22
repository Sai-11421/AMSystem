import React from 'react';
import { Modal, Table } from 'react-bootstrap'

const AttendanceModal = ({ show, setshow }) => {
    return (
        <div>
            <Modal show={show} onHide={() => setshow(false)} size='lg'>
                <Modal.Body>
                    <center>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Subjects</th>
                                    <th>No.of days attended</th>
                                    <th>Total No.of working days</th>
                                    <th>Attendance Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Cloud Computing</td>
                                    <td>28</td>
                                    <td>40</td>
                                    <td>70%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Human Computer Interaction</td>
                                    <td>30</td>
                                    <td>35</td>
                                    <td>85.71%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Soft Skills</td>
                                    <td>15</td>
                                    <td>20</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Artificial Intelligence</td>
                                    <td>32</td>
                                    <td>40</td>
                                    <td>80%</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Cloud Computing Lab</td>
                                    <td>32</td>
                                    <td>40</td>
                                    <td>80%</td>
                                </tr>
                            </tbody>
                        </Table>
                    </center>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AttendanceModal;