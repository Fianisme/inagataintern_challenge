import React, { useState } from 'react';

export default function EditProfile() {
  // 1. Inisialisasi state dengan mock data (bisa langsung diganti data dari API nanti)
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '*************', // disarankan dikosongkan/diatur terpisah di backend, tapi ini untuk visual awal
    dob: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  });

  // 2. Handler fungsi submit (Tinggal dicolok API method POST/PUT sama backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang siap dikirim ke API backend:', formData);
    alert('Data berhasil disimpan! (Cek console log untuk melihat object data)');
  };

  // 3. Helper function biar kodingan input di bawah gak kepanjangan
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-14 gap-y-8 items-start">
      
      {/* Sisi Kiri: Foto Profil */}
      <div className="relative flex-shrink-0 mx-auto lg:mx-0">
        <div className="w-[130px] h-[130px] rounded-full overflow-hidden border border-gray-200">
          <img 
            src={formData.avatar} 
            alt="Profile Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#1814F3] hover:bg-blue-800 text-white rounded-full flex items-center justify-center border-2 border-white shadow-md cursor-pointer transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>
      </div>

      {/* Sisi Kanan: Form Inputs Grid */}
      <div className="flex-1 w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5">
          
          {/* Your Name */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Your Name</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* User Name */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">User Name</label>
            <input 
              type="text" 
              value={formData.username} 
              onChange={(e) => handleChange('username', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Email</label>
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Password</label>
            <input 
              type="password" 
              value={formData.password} 
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Date of Birth</label>
            <div className="relative">
              <select 
                value={formData.dob} 
                onChange={(e) => handleChange('dob', e.target.value)}
                className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] appearance-none bg-white focus:outline-none focus:border-[#1814F3]"
              >
                <option value="25 January 1990">25 January 1990</option>
                <option value="01 January 2000">01 January 2000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#718EBF]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Present Address */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Present Address</label>
            <input 
              type="text" 
              value={formData.presentAddress} 
              onChange={(e) => handleChange('presentAddress', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Permanent Address */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Permanent Address</label>
            <input 
              type="text" 
              value={formData.permanentAddress} 
              onChange={(e) => handleChange('permanentAddress', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">City</label>
            <input 
              type="text" 
              value={formData.city} 
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Postal Code */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Postal Code</label>
            <input 
              type="text" 
              value={formData.postalCode} 
              onChange={(e) => handleChange('postalCode', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[15px] font-normal text-[#343C6A]">Country</label>
            <input 
              type="text" 
              value={formData.country} 
              onChange={(e) => handleChange('country', e.target.value)}
              className="w-full h-[50px] border border-[#DFEAF2] rounded-[15px] px-5 text-[#718EBF] text-[15px] focus:outline-none focus:border-[#1814F3]" 
            />
          </div>

          {/* Tombol Save */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button 
              type="submit" 
              className="w-full md:w-[190px] h-[50px] bg-[#1814F3] hover:bg-blue-800 text-white font-medium text-[16px] rounded-[15px] transition-colors shadow-sm cursor-pointer"
            >
              Save
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}