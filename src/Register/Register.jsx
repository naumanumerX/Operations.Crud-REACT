import { Container ,Form,Modal,Button,Table} from 'react-bootstrap'
import React from 'react'
import './Register.css'
import { useState,useEffect } from 'react'
import useHttp from '../Hooks/useHttp'
const Register = () => {

   
    const registerData={
        name:"",
        email:"",
        password:"",
        mobile:"",
        profie: ""
    }

    const [input,setInput]=useState(registerData);

    const [modal,setModal]=useState(false);
    const[request,setRequest]=useState(null);
    const [httpResponse,httpError,httpLoader]=useHttp(request);

    useEffect(()=>{
        if(request){
          
            if(httpResponse)
            {
            alert("data insertes to database Successfully")
            }


            if(httpError){
            alert("data not insertes")
            }

        }



    },[request])

    const register=(e)=>{
        e.preventDefault();
        return setRequest({
            method:"post",

            url:"http://localhost:8080/register",
            data:input
        })

    }
    const uploadFile=e=>{
        let input=e.target;
        const file=input.files[0];
        console.log(file);
        const fReader=new FileReader();
        fReader.readAsDataURL(file);
        fReader.onload=e=>{
            const url=e.target.result;
            
            setInput((oldData)=>{
                return {...oldData,
                    profile:url
                }
            })
        }


    }
    const updateValue=(e)=>{
        const input=e.target;
        const key=input.name;
        const value=input.value;
        return setInput((oldData)=>{
            return {
                ...oldData,
                [key]:value
            }
        })

    }
    
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
            <Form onSubmit={register}>
                <Form.Group className='mb-3'>
                     <Form.Label>
                        Name
                       </Form.Label>
                    <Form.Control name="name" value={input.name} onChange={updateValue} />
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label>
                       Email
                       </Form.Label>
                    <Form.Control name="email" value={input.email} onChange={updateValue} />
                       
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label>
                       Mobile
                       </Form.Label>
                    <Form.Control name="mobile" value={input.mobile} onChange={updateValue}/>
                       
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label>
                       Password
                       </Form.Label>
                    <Form.Control name="password" value={input.password} onChange={updateValue} />
                       
                    

                </Form.Group>
                <Form.Group className='mb-3'>
                     <Form.Label >
                      Profile
                       </Form.Label>
                    <Form.Control type="file" onChange={uploadFile} />
                       
                    

                </Form.Group>
            
                <Button type="submit" className=' bg-danger border-0 w-100 mt-2 mb-3'>Regsiter</Button>
            
                
            </Form>
           </Modal.Body>

        

    </Modal>
    </Container>
    
    </>
  )
}

export default Register