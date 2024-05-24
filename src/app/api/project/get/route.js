import ConnectToDb from "@/app/database/db";

import project from "@/app/models/projects";

import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export async  function GET(req){
try{
    await ConnectToDb()
    const extractData = await project.find({})
    if(extractData){
        return NextResponse.json({
            success:true,
            message: "Data fetched successfully"
        })
    }
    else{
        return NextResponse.json(
            {
                success:false,
                message: "Data cannot be fetched"
            }
        )  
    }
}
catch(e){
    return NextResponse.json(
        {
            success:false,
            message: "Data cannot be fetched"
        }
    )
    
}


}