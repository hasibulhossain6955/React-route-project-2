import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from '../Component/Phones/PhoneCard/DetailsCard';

const Phone = () => {

    const [phone,setPhone]=useState({})


    const {id}=useParams()
    

    const phones =useLoaderData()
    

    useEffect(()=>{
        
        const findPhone=phones?.find(phone=>phone.id===id)
        setPhone(findPhone)
    },[id,phones])
    console.log(phone)
    return (
        <div>
           <DetailsCard phone={phone}></DetailsCard>
        </div>
    );
};

export default Phone;