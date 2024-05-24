'use client';
import React from 'react';

export default function FormController({ type, name, placeholder, formData, setFormData }) {
  return (
    <div className="flex flex-col justify-center text-center">
      <input
        className="w-full border-2 border-slate-700 rounded-md outline-none p-2 placeholder:italic placeholder:text-slate-400"
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={formData[name]}
        onChange={(e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value
          }));
        }}
      />
    </div>
  );
}
