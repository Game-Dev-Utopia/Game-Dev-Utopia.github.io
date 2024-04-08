import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Inputs from "./Inputs";

const Stepper = ({ stepsData, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isAllInputsFilled, setIsAllInputsFilled] = useState(false);
  const [clearInputs, setClearInputs] = useState(false);

  useEffect(() => {
    // Check if all inputs are filled whenever formData or currentStep changes
    const currentStepFields = stepsData[currentStep].fields;
    const isFilled = currentStepFields.every(field => {
      return (
        formData[field.fieldName.toLowerCase()] !== undefined &&
        formData[field.fieldName.toLowerCase()] !== ''
      );
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
      [fieldName.toLowerCase()]: value
    });
    //console.log(formData);
  };

  const handleSubmit = () => {
    // Clean up the formData before creating formDataObject
    const cleanFormData = {};
    ////console.log(formData);

    // Iterate over each field in formData and clean up the field names
    Object.entries(formData).forEach(([fieldName, value]) => {
      const cleanedFieldName = fieldName.trim().replace(/\s+/g, '');
      cleanFormData[cleanedFieldName] = value;
    });
    console.log(cleanFormData);

    // Create an empty formDataObject to store the organized data
    const formDataObject = {};

    // Iterate over each step and its fields to organize the data
    stepsData.forEach(step => {
      const stepData = {};

      // Iterate over each field in the step
      step.fields.forEach(field => {
        let fieldNameCamelCase;
        if (field.inputType === 'text' || field.inputType === 'textarea') {
          // For text and textarea fields, remove spaces and convert to camelCase
          const formattedFieldName = field.fieldName.trim().replace(/\s+/g, '');
          fieldNameCamelCase = formattedFieldName.charAt(0).toUpperCase() + formattedFieldName.slice(1);
        } else if (field.inputType === 'dropdown') {
          // For dropdown fields, use dropdownName
          const formattedDropdownName = field.fieldName.trim().replace(/\s+/g, '');
          fieldNameCamelCase = formattedDropdownName.charAt(0).toUpperCase() + formattedDropdownName.slice(1);
        }

        // Add the field data to stepData with camelCase field name
        stepData[fieldNameCamelCase] = cleanFormData[fieldNameCamelCase.toLowerCase()];
      });

      // Add the stepData to formDataObject under the title of the step
      const stepTitle = step.title.replace(/\s+/g, '').toLowerCase();
      formDataObject[stepTitle] = stepData;
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
      <div className={`flex ${stepsData.length === 1 ? "justify-center" : "justify-between"}`}>
        {stepsData.map((step, i) => (
          <div
            key={i}
            className={`step-item  w-1/2 ${currentStep === i && "active"} ${i < currentStep ? "complete" : ""}`}
          >
            <div className="step">
              {i < currentStep ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-bold text-center">{step.title}</p>
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
            className="mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-blue-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}

        <button
          className={`mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-blue-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center ${!isAllInputsFilled && 'opacity-50 cursor-not-allowed'}`}
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
