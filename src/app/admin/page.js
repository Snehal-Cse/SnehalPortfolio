"use client"
import React from 'react'
import About from "../components/admin-view/about/about"
import Contact from "../components/admin-view/contact/contact"
import Education from "../components/admin-view/education/education"
import Experience from "../components/admin-view/experience/experience"
import Home from "../components/admin-view/home/home"
import Project from "../components/admin-view/project/project"
import ConnectToDb from '../database/db'
export default function Page(){
    React.useEffect(() => {
        ConnectToDb();
    }, []);
    const [component, setComponent] = React.useState('home')
    
    const menuItems = [
        {
            id: 'home',
            label: 'HOME',
            component: <Home />

        },
        {
            id: 'about',
            label: 'ABOUT',
            component: <About />
        },
        {
            id: 'experience',
            label: 'EXPERIENCE',
            component: <Experience />
        },
        {
            id: 'education',
            label: 'EDUCATION ',
            component: <Education />
        },
        {
            id: 'projects',
            label: 'PROJECTS',
            component: <Project />
        },
        {
            id: 'contact',
            label: 'CONTACT',
            component: <Contact />
            
        }
    ]
    const menuData = menuItems.map((item)=>{
         return <button key = {item.id}
            className = "p-4"
            onClick={()=>{
                setComponent(item.id)
            }}
            >{item.label}
        </button>
})
    const menuHeading = menuItems.find((item)=> item.id === component).component
    return(
        <div>
        <div className="flex flex-row justify-center  w-screen  h-16 font-bold text-center text-xl">
         {menuData}
        </div>
        <div className="text-2xl font-semibold text-red-600 mt-6">
             {menuHeading}
        </div>
        </div>
    )
}