import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import Dob from "../assets/dob.svg";
import Map from "../assets/map.svg";
import "./Main.css";



const Main = () => {

    const [users,setUsers] = useState("")

    const getuser = async () =>{
        const {data} = await axios.get("https://randomuser.me/api/");
        // console.log(data.results[0])
        setUsers(data.results[0]);

    }

    useEffect(()=>{
        getuser();
    },[]);

   
    const handleButton = ()=>{
        getuser();
    }

  return (
    <>
       <div className='container  mt-5 '>
        <div>
            <img className='rounded-circle mt-5 ' style={{width:"100px",height:"auto"}} src={users.picture?.large} alt="image" />
            <h1 className=''>{users.name?.title} {users.name?.first} {users.name?.last}</h1>
        </div>
        <div className='info-row'>
            <img src={Mail} alt="" />
            <p className='mt-3 ms-6 fs-6'>{users.email}</p>
        </div>
        <div className='info-row'>
            <img src={Phone} alt="" />
            <p>{users.phone}</p>
        </div>
        <div className='info-row'>
            <img src={Location} alt="" />
            <p>{users.location?.city}</p>
        </div>
        <div className='info-row'>
            <img src= {Dob} alt="" />
            <p>{users.dob?.age}</p>
        </div>
        <div className='info-row'>
            <img src= {Map} alt="" />
            <p>{new Date (users.registered?.date).toLocaleDateString()}</p>
        </div>
       
    </div>

    <div>
        <button className='btn btn-secondary mt-4' onClick={handleButton}>Random User</button>
    </div>
    </>
 
  )
}

export default Main;