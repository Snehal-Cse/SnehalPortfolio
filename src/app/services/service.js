import React from "react";

export async function AddData(currentTab, formData){
    try{
         const response = await fetch(`/api/${currentTab}/add`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
         })
         const result = response.json();
         console.log(result);
         return result;
       
    }
    catch(e){
        console.log(e);
    }
}
export async function GetData(currentTab){
    try{
        const res = await fetch(`/api/${currentTab}/get`,{
            method:'GET'
        })
        const result = await res.json();
        console.log(result);
        return result;
    }
    catch(e){
          console.log(e);
    }
}