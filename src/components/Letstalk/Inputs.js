import React, { useState, useEffect } from 'react';

const Inputs = ({ fields, onInputChange, clearInputs }) => {
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    // Clear inputs when clearInputs changes
    if (clearInputs) {
      setInputData({});
    }
  }, [clearInputs]);

  const handleInputChange = (fieldName, value) => {
    setInputData({
      ...inputData,
      [fieldName]: value
    });
    onInputChange(fieldName, value);
  };
  

  // Function to render dropdowns for specified field names
  const renderField = (field) => {
    if (typeof field === 'string') {
      // Render input field for string fields
      return (
        <input
          type="text"
          id={field.toLowerCase()}
          name={field.toLowerCase()}
          value={inputData[field.toLowerCase()] || ''}
          onChange={(e) => handleInputChange(field.toLowerCase(), e.target.value)}
          className="peer py-2 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none focus:border-slate-500 focus:ring-1 focus:ring-yellow-400"
          placeholder={field}
        />
      );
    } else if (typeof field === 'object' && field.dropdownName && Array.isArray(field.options)) {
      // Render dropdown for object fields with options
      return (
        <select
          id={field.dropdownName.toLowerCase()}
          name={field.dropdownName.toLowerCase()}
          value={inputData[field.dropdownName.toLowerCase()] || ''}
          onChange={(e) => handleInputChange(field.dropdownName.toLowerCase(), e.target.value)}
          className="peer  py-2 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-200 placeholder-transparent ease-in-out focus:border-slate-500 focus:ring-1 focus:ring-yellow-400"
        >
          <option selected className='text-black'>Select Option</option>
          {field.options.map((option, index) => (
            <option key={index} value={option} className='text-black'>{option}</option>
          ))}
        </select>
      );
    }
  };

  return (
    <div className="mx-auto md:w-3/4 lg:w-4/5 mt-4">
      <div className="-m-2 flex flex-wrap">
        {fields.map((field, index) => (
          <div key={index} className="w-1/2 p-3 mt-3">
            <div className="relative">
              {renderField(field)}
              {typeof field === 'string' ? (
                <label
                  htmlFor={field.toLowerCase()}
                  className="absolute left-3 -top-7 bg-transparent text-sm leading-7 text-gray transition-all font-normal"
                >
                  {field}
                  <sup className="text-Trialprimary1 text-xs ms-1">*</sup> {/* Superscript * with text color primary */}
                </label>
              ) : (<label
                htmlFor={field.dropdownName.toLowerCase()}
                className="absolute left-3 -top-7 bg-transparent text-sm leading-7 text-gray transition-all font-normal"
              >
                {field.dropdownName}
                <sup className="text-Trialprimary1 text-xs ms-1">*</sup> {/* Superscript * with text color primary */}
              </label>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inputs;
