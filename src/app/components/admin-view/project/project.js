'use client';
import React from 'react';
import FormController from '../form-controllers';
import { Button } from 'react-scroll';
import { AddData } from '@/app/services/service';
export default function Project(){
    const [formData, setFormData] = React.useState({
      Heading:'',
      Content:'',
      Website:'',
      GitHub:''
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
        },
        {
            type: 'url',
            name: 'Website',
            placeholder: 'Website Link'
          },
          {
            type: 'url',
            name: 'GitHub',
            placeholder: 'GitHub Link '
          }
      ];
      console.log(formData)
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
          Heading:'',
          Content:'',
          Website:'',
           GitHub:''
        })
      }
      const handleData = async ()=>{
        try{
             const response = await AddData('project', formData)
             console.log("Data added successfully",response);
             if(response.success){
              resetData();
             }
        }
        catch(e){
          console.log(e);
        }
       }
      return (
        <div className = "p-8">
        <div className='flex flex-col justify-center w-full h-full text-center bg-slate-200 align-center p-4 rounded-sm'>
          ADMIN PROJECTS PAGE
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