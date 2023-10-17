import { Container ,Form,Modal,Button,Table} from 'react-bootstrap'
import React from 'react'
import './Register.css'
import { useState } from 'react'
const Register = () => {
    const [modal,setModal]=useState(false);
  
  return (
    <>
    <Container className='py-4'>
        <h1 className='text-center fw-bold'>Crud Operation in React JS</h1>
    
    <Button className='bg-danger border-0 btn-design'>
        <i className='fa fa-plus' onClick={()=>setModal(true)
}></i>
    </Button>
    <Table striped border hover className='mt-5 text-center'>
        <thead>
            <tr>
                <th>Sr</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            <td>1</td>
            <td></td>
            <td>nauman</td>
            <td>12345</td>
            <td>nauman@gmail.com</td>
            <td>12345</td>
        </tbody>

    </Table>
    <Modal show={modal} onHide={()=>setModal(false)
}>
        <Modal.Header closeButton >
           < Modal.Title >
           New Registration

           </Modal.Title>
           </Modal.Header>
           <Modal.Body>
            <Form>
                <Form.Group className='mb-3'>
                     <Form.Label>
                        Name
                       </Form.Label>
                    <Form.Control />
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label>
                       Name
                       </Form.Label>
                    <Form.Control />
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label>
                       Password
                       </Form.Label>
                    <Form.Control />
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label >
                      Profile
                       </Form.Label>
                    <Form.Control type="file" />
                       
                    

                </Form.Group>
                <Button className=' bg-danger border-0 w-100 mt-2 mb-3'>Regsiter</Button>
            </Form>
           </Modal.Body>

        

    </Modal>
    </Container>
    
    </>
  )
}

export default Register