'use client'

import { Toaster, toast } from "sonner"

export default function Page() {
  const downLoadUrl = 'http://localhost:3000/SNEHAL_RESUME.png'
  const downLoadFile = (url) => {
    try{
      const aTag = document.createElement('a')
      aTag.href = url
      aTag.setAttribute('download', 'SNEHAL_RESUME.png')
      aTag.setAttribute('rel', 'noopener noreferrer')
      document.body.appendChild(aTag)
      aTag.click()
      document.body.removeChild(aTag)
      toast.success("It has successfully downloaded.")
    }
    catch(error){
      toast.error("Error in downloading file");
    }
  }
  return (
    <div className="flex flex-col sm:flex-row w-screen h-[82vh] justify-center items-center select-none">
        <Toaster position="top-center" richColors expand={false} />
      <div className="flex flex-col sm:flex-col h-1/2 sm:h-full w-full sm:w-1/2 items-center sm:items-end justify-center p-4">
        <img src="./myImg.jpeg" alt="My Image" className="h-3/4 w-2/4 sm:w-2/4 rounded-full" />
      </div>
      <div className="flex flex-col h-1/2 sm:h-full w-full sm:w-1/2 items-center justify-center font-['Georgia'] font-extrabold p-4 sm:mr-4">
        <div className="flex flex-row text-4xl font-extrabold py-2 px-1 text-slate-950">HELLO, I AM</div>
        <div className="flex flex-row text-4xl font-extrabold py-2 px-1 text-indigo-800">SNEHAL BANDI</div>
        <div className="flex flex-row text-1xl font-semibold py-2 text-slate-950 px-1 tracking-tight font-sans justify-center text-center">
          "Professional Web Developer with a passion for problem solving, expertise in Data Structures and Algorithms, and a commitment to continuous growth and learning."
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-col py-3">
            <button type="button" onClick={() => { downLoadFile(downLoadUrl) }} className="bg-indigo-800 p-2 rounded-lg text-lg text-white font-['Georgia']">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
