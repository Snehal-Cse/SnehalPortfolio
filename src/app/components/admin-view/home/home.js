'use client';
import React, { useEffect } from 'react';
import FormController from '../form-controllers';
import { Button } from 'react-scroll'; // Ensure this is the intended import
import { AddData, GetData } from '@/app/services/service';
import { set } from 'mongoose';


export default function Home() {
  const [formData, setFormData] = React.useState({
     heading: '',
     career_Summary: ''
  });

console.log(formData)
  const data = [
    {
      type: 'text',
      name: 'heading',
      placeholder: 'Heading'
    },
    {
      type: 'text',
      name: 'career_Summary',
      placeholder: 'Career Summary'
    }
  ];

  const dataImp = data.map((item, index) => (
    <FormController 
      key={index} 
      type={item.type} 
      name={item.name} 
      placeholder={item.placeholder} 
      formData={formData} 
      setFormData={setFormData}
    />
  ));
  const resetData = ()=>{
    setFormData({
      heading: '',
      career_Summary: ''
   });
  }
  
  
 
  const handleData = async ()=>{
    try{
         const response = await AddData('home', formData)
         console.log("Data added successfully",response);
         
        


         if(response.success){
          resetData()
        
         }
    }

    catch(e){
      console.log(e);
    }
   }
   

  return (
    <div className="p-8">
      <div className="flex flex-col justify-center w-full h-full text-center bg-slate-200 align-center p-4 rounded-sm">
        ADMIN HOME PAGE
        <div className="flex flex-col justify-center w-full h-full text-center px-12 mt-12 gap-y-8 text-black text-sm">
          {dataImp}
          <div className="flex justify-center">
            <Button onClick={handleData}
              type="submit" 
              className="bg-green-700 p-2 text-white outline-none rounded-md"
            >
              Add Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
