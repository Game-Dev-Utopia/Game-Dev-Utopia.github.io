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

  return (
    <div className="mx-auto md:w-3/4 lg:w-4/5 mt-4">
      <div className="-m-2 flex flex-wrap">
        {fields.map((fieldName, index) => (
          <div key={index} className="w-1/2 p-3 mt-2">
            <div className="relative">
              <input
                type="text"
                id={fieldName.toLowerCase()}
                name={fieldName.toLowerCase()}
                value={inputData[fieldName.toLowerCase()] || ''}
                onChange={(e) => handleInputChange(fieldName.toLowerCase(), e.target.value)}
                className="peer py-1 px-3 w-full bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-500 shadow-inner shadow-slate-600/90 rounded-md outline-none text-base leading-8 text-gray-200 placeholder-transparent ease-in-out focus:border-slate-500 focus:ring-1 focus:ring-yellow-400"
                placeholder={fieldName}
              />
              <label
                htmlFor={fieldName.toLowerCase()}
                className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 font-normal"
              >
                {fieldName}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inputs;
