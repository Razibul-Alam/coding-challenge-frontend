import React,{useState,useEffect} from 'react';
import LocationMap from '../Map/LocationMap';
import"./FormControl.css"
const FormControl = () => {
    // declare all state
    const[nameText,setNameText]=useState('')
    const[id,setId]=useState('')
    const[lat,setLat]=useState(23.81)
    const[lan,setLan]=useState(90.41)
    const[desc,setDesc]=useState('')
    const[locationText,setLocationText]=useState('')
    const[users,setUsers]=useState([])
    const[showList,setShowList]=useState(true)
    const[showLocation,setShowLocation]=useState(true)
    const[error,setError]=useState(false)

// handle all input onchange
    const handleName=(e)=>{
        setNameText(e.target.value)
        setError(false)
    }
    const handleId=(e)=>{
        setId(e.target.value)
        setError(false)
    }
    const handleDesc=(e)=>{
        setDesc(e.target.value)
        setError(false)
    }
    const handleLocation=(e)=>{
        setLocationText(e.target.value)
        setError(false)
    }
    // handle submit form
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(nameText&&locationText&& desc&&id){
            alert('successfully sumitted')
        setNameText('')
        setLocationText('')
        setId('')
        setDesc('')
        setShowLocation(true)
        setShowList(true)
        setError(false)
        document.getElementById("frm").reset()
        }else{
            setError(true)
        }

    }
//    load all users
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setUsers(data))
    },[nameText])

//  handle users list
    const handleShowList=(text,id)=>{
setNameText(text)
setId(id)
setShowList(false)
    }
// handle location show
    const handleShowLocation=(text,geo)=>{
        console.log(geo)
setLocationText(text)
setLat(geo.lat)
setLan(geo.lng)
setShowLocation(false)
    }
    
    return (
        <div className='container mt-5'>
        <div className='row'>
        <div className='col-md-6 mt-2'>
            <h3 className='text-primary text-center'>User Info</h3>
            <form className='form-control  pb-2' onSubmit={handleSubmit} id="frm">

                <label>Name</label>
                     <input value={nameText} className='form-control' onChange={handleName} type="text" name="" id="" />
                
               {(nameText&&showList) &&<ul>
                {users?.map(user=><li onClick={()=>handleShowList(user.name,user.id)}>{user.name}</li>)}
                </ul>}
                <br />
                
                <label>Id</label>
                     <input value={id} className='form-control' onChange={handleId} type="text" name="" id="" />
                <br />
                <label>Location</label>
                     <input value={locationText}  className='form-control' onChange={handleLocation}  type="text" name="" id="" />
                {(locationText&&showLocation) &&<ul>
                {users?.map(location=><li onClick={()=>handleShowLocation(location.address.city,location.address.geo)}>{location.address.city}</li>)}
                </ul>}
                <br />
                <label>Description</label>
                    
                     <input className='form-control' value={desc} type="text-area" onChange={handleDesc} name="" id="" />
                <input className='form-control my-3 btn-success' type="submit" value="Submit" />
                {(error)&&<h6 className='text-center text-danger'>All fields are required</h6>}
            </form>
            
        </div>
        <div className='col-md-6 mt-5'>
        {(showLocation&&locationText)?<LocationMap lat={lat} lan={lan}/>
         :<img className='img-fluid' style={{height:"100%"}} src="https://i.ibb.co/Njy2c36/form.png"  alt='imge'/>}
        </div>
        </div>
        </div>
    );
};

export default FormControl;