'use client';
import React from 'react';
import FormController from '../form-controllers';
import { Button } from 'react-scroll';
 import { AddData } from '@/app/services/service';

export default function About(){
  const [formData, setFormData] = React.useState({
            AboutMe :"",
            Projects:"",
            Experience:"",
            Skills:"",
            Extracurricular:""
  })
    const data = [
        {
          type: 'text',
          name: 'AboutMe',
          placeholder: 'About Me'
        },
        {
          type: 'number',
          name: 'Projects',
          placeholder: 'Enter the No. of Projects'
        },
        {
            type: 'number',
            name: 'Experience',
            placeholder: 'Years Of Experience'
          },
          {
            type: 'text',
            name: 'Skills',
            placeholder: 'Skills'
          },
          {
            type: 'text',
            name: 'Extracurricular',
            placeholder: 'Extracurricular'
          },
      ];
      const dataImp = data.map((item, index) => (
        <FormController 
          key={index} 
          type={item.type} 
          name={item.name} 
          placeholder={item.placeholder} 
          formData={formData}
          setFormData = {setFormData}
        />
      ));
      const resetData = ()=>{
        setFormData({
          AboutMe :"",
          Projects:"",
          Experience:"",
          Skills:"",
          Extracurricular:""
        });
  }
     const handleData = async ()=>{
      try{
           const response = await AddData('about', formData)
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
        <div className = "p-8">
        <div className='flex flex-col justify-center w-full h-full text-center bg-slate-200 align-center p-4 rounded-sm'>
          ADMIN ABOUT PAGE
          <div className='flex flex-col justify-center w-full h-full text-center px-12 mt-12 gap-y-8 text-black text-sm'>
          {dataImp}
          <div className='flex justify-center'>
              <Button onClick={handleData}
                type='submit' 
                className='bg-green-700 p-2 text-white outline-none rounded-md'
              >
                Add Info
              </Button>

          </div>
          </div>
        </div>
        </div>
      );
}