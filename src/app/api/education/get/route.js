import ConnectToDb from "@/app/database/db";
import about from "@/app/models/about";

import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export async  function GET(req){
try{
    await ConnectToDb()
    const extractData = await about.find({})
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