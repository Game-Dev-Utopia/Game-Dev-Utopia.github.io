
import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Inputs from "./Inputs";

const Stepper = ({ stepsData, onSubmit }) => {
  const steps = stepsData;
  //console.log(steps);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isAllInputsFilled, setIsAllInputsFilled] = useState(false);
  const [clearInputs, setClearInputs] = useState(false);

  useEffect(() => {
    // Check if all inputs are filled whenever formData or currentStep changes
    const currentStepFields = stepsData[currentStep].fields;
    const isFilled = currentStepFields.every(field => {
      if (typeof field === 'string') {
        return formData[field.toLowerCase()] !== undefined && formData[field.toLowerCase()] !== '';
      } else if (typeof field === 'object') {
        return formData[field.dropdownName.toLowerCase()] !== undefined && formData[field.dropdownName.toLowerCase()] !== '';
      }
      return false;
    });
    setIsAllInputsFilled(isFilled);
  }, [formData, currentStep, stepsData]);

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value
    });
    //console.log(formData);
  };

  const handleSubmit = () => {
    // Clean up the formData before creating formDataObject
    const cleanFormData = {};

    // Iterate over each field in formData and clean up the field names
    Object.entries(formData).forEach(([fieldName, value]) => {
      const cleanedFieldName = fieldName.trim().replace(/\s+/g, '');
      cleanFormData[cleanedFieldName] = value;
    });
    console.log(cleanFormData);

    // Create an empty formDataObject to store the organized data
    const formDataObject = {};

    // Iterate over each step and its fields to organize the data
    stepsData.forEach((step, index) => {
      const stepData = {};

      // Iterate over each field in the step
      step.fields.forEach(field => {
        if (typeof field === 'string') {
          // For string fields, remove spaces and convert to camelCase
          const formattedFieldName = field.trim().replace(/\s+/g, '');
          const fieldNameCamelCase = formattedFieldName.charAt(0).toUpperCase() + formattedFieldName.slice(1);
          stepData[fieldNameCamelCase] = cleanFormData[formattedFieldName.toLowerCase()];
        } else if (typeof field === 'object') {
          // For dropdown fields, use dropdownName and options
          const formattedDropdownName = field.dropdownName.trim().replace(/\s+/g, '');
          const dropdownNameCamelCase = formattedDropdownName.charAt(0).toUpperCase() + formattedDropdownName.slice(1);
          stepData[dropdownNameCamelCase] = cleanFormData[formattedDropdownName.toLowerCase()];
        }
      });

      // Add the stepData to formDataObject under the title of the step
      const stepTitle = step.title.replace(/\s+/g, '');
      formDataObject[step.title.toLowerCase().replace(/\s+/g, '')] = stepData;
    });

    // Pass formDataObject to the onSubmit callback or do further processing
    onSubmit(formDataObject);

    // Clear all inputs
    setFormData({});
    setClearInputs(true);

    // Reset stepper to step one
    setCurrentStep(0);

  };



  return (
    <>
      <div className="flex justify-between">
        {stepsData.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i && "active"} ${i < currentStep ? "complete" : ""
              }`}
          >
            <div className="step">
              {i < currentStep ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-bold">{step.title}</p>
          </div>
        ))}
      </div>

      <Inputs
        fields={stepsData[currentStep].fields}
        onInputChange={handleInputChange}
        clearInputs={clearInputs}
      />

      <div className="flex justify-between mt-8">
        {currentStep !== 0 && (
          <button
            className="mx-auto text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}

        <button
          className={`mx-auto text-white bg-gradient-to-r from-Trialprimary1  to-Trialprimary2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center ${!isAllInputsFilled && 'opacity-50 cursor-not-allowed'}`}
          onClick={currentStep === stepsData.length - 1 ? handleSubmit : handleNext}
          disabled={!isAllInputsFilled}
        >
          {currentStep === stepsData.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Stepper;