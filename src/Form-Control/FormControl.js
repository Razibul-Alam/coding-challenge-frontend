import React,{useState,useEffect} from 'react';
import { Form } from 'react-bootstrap';
import"./FormControl.css"
const FormControl = () => {
    const[nameText,setNameText]=useState('')
    const[locationText,setLocationText]=useState('')
    const[users,setUsers]=useState([])
    const[locations,setLocations]=useState([])

    const handleName=(e)=>{
        setNameText(e.target.value)
    }
    const handleLocation=(e)=>{
        setLocationText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('hello')
    }
    console.log(users)
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data))
    },[nameText])

    useEffect(()=>{
fetch('./Location.json')
.then(res=>res.json())
.then(data=>setLocations(data))
    },[])
    return (
        <div className='w-50 m-auto mt-5'>
            <h3 className='text-center text-primary'>User Info</h3>
            <form className='form-control' onSubmit={handleSubmit}>
                <label>
                    Name
                     <input value={nameText} className='form-control' onChange={handleName} type="text" name="" id="" />
                </label>
               {nameText&& <ul>
                {users?.map(user=><li onClick={()=>setNameText(user.name)}>{user.name}</li>)}
                </ul>}
                <br />
                <label>
                    Location
                     <input value={locationText}  className='form-control' onChange={handleLocation}  type="text" name="" id="" />
                </label>
                {locationText&& <ul>
                {locations?.map(location=><li onClick={()=>setLocationText(location.location)}>{location.location}</li>)}
                </ul>}
                <br />
                <label>
                    Body
                     <input className='form-control' type="text" name="" id="" />
                </label>
                <input className='form-control my-3' type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default FormControl;