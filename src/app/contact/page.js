"use client"
import React from "react"
import { Toaster, toast } from 'sonner'
import emailjs from '@emailjs/browser';

export default function Page() {
  const [info, setInfo] = React.useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();


    if (!info.fullname || !info.email || !info.phone || !info.message) {
      toast.error('All fields are required.');
      return;
    }

    if (!validateEmail(info.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(info.phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    emailjs
      .sendForm('service_f4avwhf', 'template_bvk7pkv', e.target, {
        publicKey: 'cMbeXk20HzlKvaKRe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('The email is successfully sent! We will revert back shortly.');
          setInfo({
            fullname: "",
            email: "",
            phone: "",
            message: ""
          });
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Your message has not been sent.');
        },
      );
  };

  return (
    <div className="w-screen h-[82.5vh] flex flex-row justify-center items-center">
      <Toaster position="top-center" richColors expand={false} />
      <div className="bg-white w-96 p-4 h-4/6 rounded-lg flex flex-col shadow-xl border-2 border-black-800">
        <form onSubmit={sendEmail}>
          <h1 className="flex flex-row font-['georgia'] justify-center font-extrabold text-xl py-4 text-indigo-900">FEEL FREE TO GET IN TOUCH!</h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row border p-2 rounded-md">
              <input
                type="text"
                className="w-full outline-none font-['georgia']"
                placeholder="Full Name"
                value={info.fullname}
                name="fullname"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row border p-2 rounded-md">
              <input
                type="email"
                className="w-full outline-none font-['georgia']"
                placeholder="Email"
                value={info.email}
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row border p-2 rounded-md">
              <input
                type="text"
                className="w-full outline-none font-['georgia']"
                placeholder="Mobile"
                value={info.phone}
                name="phone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row border p-2 rounded-md">
              <textarea
                className="resize-none w-full outline-none font-['georgia']"
                placeholder="Enter a message"
                value={info.message}
                name="message"
                onChange={handleChange}
                required
              />
            </div>
            <div className="bg-indigo-900 rounded py-1">
              <button type="submit" className="w-full text-white font-extrabold p-1">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
