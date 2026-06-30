import React, { useState } from 'react';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '*************',
    dob: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang siap dikirim ke API backend:', formData);
    alert('Data berhasil disimpan! (Cek console log untuk melihat object data)');
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    /*
      Mobile: photo di tengah atas, form di bawah (flex-col)
      Tablet+: photo di kiri, form di kanan (flex-row)
    */
    <div className="flex flex-col tablet:flex-row gap-x-10 desktop:gap-x-14 gap-y-6 tablet:gap-y-8 items-start">

      {/* Foto Profil */}
      <div className="relative flex-shrink-0 mx-auto tablet:mx-0 self-start">
        <div className="w-[100px] h-[100px] tablet:w-[130px] tablet:h-[130px] rounded-full overflow-hidden border border-gray-200">
          <img
            src={formData.avatar}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute bottom-1 right-1 w-7 h-7 tablet:w-8 tablet:h-8 bg-[#1814F3] hover:bg-blue-800 text-white rounded-full flex items-center justify-center border-2 border-white shadow-md cursor-pointer transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 tablet:w-4 tablet:h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </button>
      </div>

      {/* Form Grid */}
      <div className="flex-1 w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 tablet:grid-cols-2 gap-x-7 gap-y-4 tablet:gap-y-5">

          {[
            { label: 'Your Name',         field: 'name',             type: 'text'     },
            { label: 'User Name',         field: 'username',         type: 'text'     },
            { label: 'Email',             field: 'email',            type: 'email'    },
            { label: 'Password',          field: 'password',         type: 'password' },
            { label: 'Present Address',   field: 'presentAddress',   type: 'text'     },
            { label: 'Permanent Address', field: 'permanentAddress', type: 'text'     },
            { label: 'City',              field: 'city',             type: 'text'     },
            { label: 'Postal Code',       field: 'postalCode',       type: 'text'     },
            { label: 'Country',           field: 'country',          type: 'text'     },
          ].map(({ label, field, type }) => (
            <div key={field} className="flex flex-col gap-y-2">
              <label className="text-[13px] tablet:text-[15px] font-normal text-[#343C6A]">{label}</label>
              <input
                type={type}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className="w-full h-[46px] tablet:h-[50px] border border-[#DFEAF2] rounded-[15px] px-4 tablet:px-5 text-[#718EBF] text-[14px] tablet:text-[15px] focus:outline-none focus:border-[#1814F3]"
              />
            </div>
          ))}

          {/* Date of Birth — select khusus */}
          <div className="flex flex-col gap-y-2">
            <label className="text-[13px] tablet:text-[15px] font-normal text-[#343C6A]">Date of Birth</label>
            <div className="relative">
              <select
                value={formData.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                className="w-full h-[46px] tablet:h-[50px] border border-[#DFEAF2] rounded-[15px] px-4 tablet:px-5 text-[#718EBF] text-[14px] tablet:text-[15px] appearance-none bg-white focus:outline-none focus:border-[#1814F3]"
              >
                <option value="25 January 1990">25 January 1990</option>
                <option value="01 January 2000">01 January 2000</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#718EBF]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="tablet:col-span-2 flex justify-end mt-2 tablet:mt-4">
            <button
              type="submit"
              className="w-full tablet:w-[190px] h-[46px] tablet:h-[50px] bg-[#1814F3] hover:bg-blue-800 text-white font-medium text-[15px] tablet:text-[16px] rounded-[15px] transition-colors shadow-sm cursor-pointer"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}