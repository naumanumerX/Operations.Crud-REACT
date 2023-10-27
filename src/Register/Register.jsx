import { Container ,Form,Modal,Button,Table} from 'react-bootstrap'
import React from 'react'
import './Register.css'
import { useState,useEffect } from 'react'
import useHttp from '../Hooks/useHttp'
import { useRef } from 'react'
const Register = () => {

   let num=useRef(1);
    const registerData={
        name:"",
        email:"",
        password:"",
        mobile:"",
        profie: ""
    }
    const [input,setInput]=useState(registerData);

    const [modal,setModal]=useState(false);
    const [data,setData]=useState(null);
    const[request,setRequest]=useState({
        method:"get",
        url:"http://localhost:8080/0/5"  ///0/5 means-> min-max data to fetch
    });
    const [httpResponse,httpError,httpLoader]=useHttp(request);

    useEffect(()=>{
        if(request.method=='get'){
            console.log("GETTING>>>>>")
          if(httpResponse){
           console.log("insidehttpResponse..")

            setData(httpResponse.data)
          }
           
        }
        else{
            if(httpResponse)
            {
                console.log(httpResponse)
            alert("Data Inseterted  Successfully")
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

        // let input=e.target;
        // const file=input.files[0]
        // console.log(file);
        // const fReader= new FileReader();
        // fReader.readAsDataURL(file);
        // fReader.onLoad=(e)=>{
        //     const url=e.target.result;
        //     console.log(url);   
        //      }

        let input=e.target;
        const file=input.files[0];
        console.log(file);
        const fReader=new FileReader();
        fReader.readAsDataURL(file);
        fReader.onload=e=>{
            const url=e.target.result;
            return setInput((oldData)=>{

                return {...oldData, profile:url};
            })
        }
            
        //     setInput((oldData)=>{
        //         return {...oldData,
        //             profile:url
        //         }
        //     })
        // }


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
    
    const deleteRow=(id)=>{
       setData( data.filter((item,index)=>index!==id))

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
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {data&&data.map((items,index)=>(

              <tr key={index}>
              <td>{index+1}</td>
              <td>
                <img src={items.profile} width={40} alt="" />
              </td>
              <td>{items.name}</td>
              <td>{items.mobile}</td>
              <td>{items.email}</td>
              <td>{items.password}</td>
              <td>
                <button className='btn btn-primary px-2 py-1 mx2'><i className='fa fa-edit'></i></button>
                <button className='btn btn-danger px-2 py-1 m-1' onClick={()=>deleteRow(index)}><i className='fa fa-trash'></i></button>
              
              </td>
              </tr>
          ))}
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