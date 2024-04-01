import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Inputs from "./Inputs";

const Stepper = ({ stepsData, onSubmit }) => {
  const steps = stepsData;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isAllInputsFilled, setIsAllInputsFilled] = useState(false);
  const [clearInputs, setClearInputs] = useState(false);


  useEffect(() => {
    // Check if all inputs are filled whenever formData or currentStep changes
    const currentStepFields = steps[currentStep].fields;
    const isFilled = currentStepFields.every(field => formData[field.toLowerCase()] !== undefined && formData[field.toLowerCase()] !== '');
    setIsAllInputsFilled(isFilled);
  }, [formData, currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
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
    const formDataObject = {};

    // Update formData state with the latest input values
    const updatedFormData = { ...formData };


    // Iterate over each step and its fields to organize the data
    steps.forEach((step, index) => {
      const stepData = {};
      step.fields.forEach(fieldName => {
        // Convert field names to camelCase for consistency
        const camelCaseFieldName = fieldName.replace(/\s+/g, '');
        // Assign the field value from updatedFormData to the stepData object
        //console.log(updatedFormData[fieldName.toLowerCase()]);
        stepData[camelCaseFieldName] = updatedFormData[fieldName.toLowerCase()];
      });

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
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i && "active"} ${i < currentStep ? "complete" : ""
              }`}
          >
            <div className="step">
              {i < currentStep ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-yellow-300">{step.title}</p>
          </div>
        ))}
      </div>

      <Inputs
        fields={steps[currentStep].fields}
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
          className={`mx-auto text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center ${!isAllInputsFilled && 'opacity-50 cursor-not-allowed'}`}
          onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
          disabled={!isAllInputsFilled}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Stepper;
