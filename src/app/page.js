//need to keep tabs on this; might cause issues with the rest of the app
'use client';

import { useState } from "react";
import UserInput from "./components/user-input.js"; 
import GenButton from "./components/generate-button.js";
import ClearButton from "./components/clear-button.js";
import axios from "axios";
import LittleGuy from "../../public/TeachTo_Little_Guy.png";
import Image from "next/image";

export default function Home() {

  //input state values
  const [subjectValue, setSubjectValue] = useState("");
  const [gradeValue, setGradeValue] = useState("");
  const [improvementValue, setImprovementValue] = useState("");
  const [strengthsValue, setStrengthsValue] = useState("");
  const [chatResponseData, setChatResponseData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //clears input text
  const handleClear = (event) => {
    event.preventDefault();

    setSubjectValue("");
    setGradeValue("");
    setImprovementValue("");
    setStrengthsValue("");
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const fullTeacherPrompt = "You are a special education expert. Write an individualized education plan (IEP) goal for a special education teacher that has a student doing "
    + subjectValue + " at a " + gradeValue + " grade level. This student has the following needs for improvement: " + improvementValue +
    ". This student also has the following strengths: " + strengthsValue + ". " + "Explain why you chose this goal and potential alternative goals.";
    
    sendTeacherMessage(fullTeacherPrompt);
  };
  

  const sendTeacherMessage = (fullTeacherPrompt) => {
    setIsLoading(true);
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": fullTeacherPrompt }],
      max_tokens: 450
    };

    axios.post(url, data, { headers: headers })
    .then((response) => {
      console.log(response);
      setIsLoading(false);
      setChatResponseData(response.data.choices[0].message.content);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
      setChatResponseData("There was an error. Sorry!");
    })
  };

  return (
    <div className="container mx-auto p-2">
      <div className="container mx-auto flex justify-center items-center mb-12">
        <Image
        src={ LittleGuy }
        width={300}
        height={300}
        alt="Little guy holding a pencil."
        />
      </div>
      <h1 className="text-2x1 font-semibold mb-12">Fill out the form to generate an IEP goal. Results below!</h1>
      <UserInput question="What subject is your student working in?" type="text" placeholder="e.g., Math" value={subjectValue} onChange={(e) => setSubjectValue(e.target.value)} />
      <UserInput question="What is your student's present grade level of performance in the above subject?" type="text" placeholder="e.g., 5th" value={gradeValue} onChange={(e) => setGradeValue(e.target.value)} />
      <UserInput question="What does your student need to improve?" type="text" placeholder="e.g., Multiplying two-digit numbers" value={improvementValue} onChange={(e) => setImprovementValue(e.target.value)} />
      <UserInput question="What does your student already do well?" type="text" placeholder="e.g., Single digit multiplication" value={strengthsValue} onChange={(e) => setStrengthsValue(e.target.value)} />
      <div>
        <GenButton onClick={ handleSubmit }>Generate</GenButton>
        <ClearButton onClick={ handleClear }>Clear</ClearButton>
      </div>
      <div className="container mx-auto my-10 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3x1 font-bold mb-6">Results</h1>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
          <p className="text-gray-700 leading-7">{chatResponseData}</p>
        )}
      </div>
    </div>
  );
};
