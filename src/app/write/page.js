'use client';

import { useState } from 'react';
import SubjectPage from '../question-pages/subject-page';
import PresentLevelsPage from '../question-pages/present-levels-page';
import ImprovementPage from '../question-pages/improvement-page';

const steps = [
  { id: 1, title: 'What subject is your student in?', content: SubjectPage },
  { id: 2, title: 'What is their present grade level of performance in that subject?', content: PresentLevelsPage },
  { id: 3, title: 'What does the student need to improve?', content: ImprovementPage },
];

export default function Write() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  let StepComponent = steps[currentStep].content;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-[70%] h-[80%] bg-white rounded-lg shadow-lg p-8 ">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
          <StepComponent />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 font-body rounded-lg ${currentStep === 0 ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg font-body bg-blue-500 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
