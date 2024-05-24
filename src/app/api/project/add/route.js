import React from "react";
import ConnectToDb from "@/app/database/db";
import { NextResponse } from "next/server";
import project from "@/app/models/projects";

export const dynamic = "force-dynamic"

export async function POST(req){
    try{
         await ConnectToDb();
         const extractData = await req.json();
         const saveData = project.create(extractData)
         if(saveData){
            return NextResponse.json({
                success:true,
                message:"Data saved successfully"
            })
         }
         else{
            return NextResponse.json({
                success:false,
                message:"the Data has not been added"
               })  
         }
    }
    catch(e){
      return NextResponse.json({
        success:false,
        message:"the Data has not been added"
       }) 
    }
}