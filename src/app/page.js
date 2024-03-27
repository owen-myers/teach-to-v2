//need to keep tabs on this; might cause issues with the rest of the app
'use client';

import UserInput from "./components/user-input.js"; 
import GenButton from "./components/generate-button.js";
import ClearButton from "./components/clear-button.js";
import axios from "axios";

export default function Home() {

  {/*
  3/23/24 - Input will go here, but I have to get it from all the following
  UserInput components. Don't know how to do that yet.
  */}

  //const teacherMessage = "Hey! How are you?";


  const handleSubmit = (event) => {
    sendTeacherMessage();
  };
  

  const sendTeacherMessage = () => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": "Hi! How are you?" }]
    };

    axios.post(url, data, { headers: headers })
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2x1 font-semibold mb-4">Goalie</h1>
      <UserInput question="What subject is your student working in?" type="text" placeholder="e.g., Math" />
      <UserInput question="What is your student's present grade level of performance in the above subject?" type="text" placeholder="e.g., 5th" />
      <UserInput question="What does your student need to improve?" type="text" placeholder="e.g., Multiplying two-digit numbers" />
      <UserInput question="What does your student already do well?" type="text" placeholder="e.g., Single digit multiplication" />
      <div>
        <GenButton onClick={ handleSubmit }>Generate</GenButton>
        <ClearButton>Clear</ClearButton>
      </div>
      <div className="container mx-auto my-10 p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3x1 font-bold mb-6">Results</h1>
          < p className="text-gray-700 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
          </p>
      </div>
    </div>
  );
};
