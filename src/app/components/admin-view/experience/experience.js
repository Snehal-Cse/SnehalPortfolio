'use client';
import React from 'react';
import FormController from '../form-controllers';
import { Button } from 'react-scroll';
import { AddData } from '@/app/services/service';
export default function Experience(){
    const [formData, setFormData] = React.useState({
      Heading: '',
      Content:""
    })
    const data = [
        {
          type: 'text',
          name: 'Heading',
          placeholder: 'Heading'
        },
        {
          type: 'text',
          name: 'Content',
          placeholder: 'Content'
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
          Heading: '',
          Content:""
        })
      }
      const handleData = async ()=>{
        try{
             const response = await AddData('experience', formData)
             console.log("Data added successfully",response);
             if(response.success){
              resetData();
             }
        }
        catch(e){
          console.log(e);
        }
       }
    console.log(formData)
      return (
        <div className = "p-8">
        <div className='flex flex-col justify-center w-full h-full text-center bg-slate-200 align-center p-4 rounded-sm'>
          ADMIN EXPERIENCE PAGE
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