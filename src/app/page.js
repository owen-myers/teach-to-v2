'use client';

import { useState } from "react";

import GenButton from "./components/generate-button";
import UserInput from "./components/user-input";
import Image from "next/image";
import FrontPageTeacher from "../../public/Teacher student amico.svg";
import LoadingSpinner from "./components/loading-spinner";
import Modal from "./components/modal";

const gradeOtherInputStyle = `text-blue-900 border border-blue-900 border-dashed relative text-sm font-karla
transition-colors duration-300 hover:bg-blue-200 rounded-md pl-4`;

const subjectOtherInputStyle = `text-green-900 border border-green-900 border-dashed relative text-sm font-karla
transition-colors duration-300 hover:bg-green-200 rounded-md pl-4`;

//style for generate button
const generateButtonHomeStyle = `bg-violet-500 text-white text-md font-karla transition-colors duration-300 
hover:bg-violet-600`;

//style for labels
const homeLabelStyle = "font-karla pb-2";

//style for response headers
const responseHeaderStyle = "text-xl font-lora mb-6 pl-6";

//style for response text
const responseTextStyle = "font-karla text-md pl-6";

const responseListStyle = "font-karla text-md pl-6 mb-4";

export default function HomePage() {

  //state toggle for inputs
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [writtenInput, setWrittenInput] = useState("");
  const [chatResponseData, setChatResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //styles for grade buttons
  const gradeButtonStyle = `bg-blue-100 text-blue-900 border border-blue-900 relative text-sm font-karla 
  transition-colors duration-300 active:bg-blue-200 hover:bg-blue-300 `;

  //styles for subject buttons
  const subjectButtonStyle = `bg-green-100 text-green-900 border border-green-900 relative text-sm font-karla
  transition-colors duration-300 hover:bg-green-300 `;

  //handles submit + API function call
  const handleSubmit = async () => {
    if (!selectedGrade || !selectedSubject) return;

    //set key/value pair
    const key = `${selectedGrade}-${selectedSubject}`;
    console.log("Selected Key: " + key);

    if (!key) {
      console.error("Error: No key found for selected inputs.");
      return;
    }

    setChatResponseData(null);
    setIsLoading(true);
    setIsModalOpen(true);

    //fetches API request and processes response
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, writtenInput }),
      });

      const data = await res.json();
      console.log("API Response: ", data);

      if (res.ok) {
      setChatResponseData(JSON.parse(data.chatResponseData));
      } else {
        setChatResponseData("Error: " + data.error);
      }

    } catch (error) {
      console.error("Error: ", error);
      setChatResponseData("There was an error. Sorry!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row w-9/10 sm:w-3/4 mx-auto items-center">
        <div className="flex flex-col w-2/3 items-center sm:items-left mb-12">
          <h1 className="font-lora text-4xl pb-4">Get some help with IEP goals</h1>
          <h3 className="font-karla text-xl">Try generating one below</h3>
        </div>
        <div>
          <Image
          src={ FrontPageTeacher }
          alt="A teacher with her student."
          width={250}
          height={250}
          />
        </div>
      </div>
        <div className="flex flex-col md:flex-row md:space-x-4 md:pl-16 md:pr-16 md:pt-12 md:pb-4"> 
          <div className="w-full md:max-w-1/3 h-full p-4">
            <p className={homeLabelStyle}>Grade</p>
            <div className="grid grid-cols-2 gap-4">
              <GenButton 
              onClick={() => setSelectedGrade('Elementary')}
              customStyles={gradeButtonStyle + `${selectedGrade === 'Elementary' ? 'bg-blue-300' : 'bg-blue-100'}`}>Elementary
              </GenButton>
              <GenButton 
              onClick={() => setSelectedGrade('Middle School')}
              customStyles={gradeButtonStyle + `${selectedGrade === 'Middle School' ? 'bg-blue-300' : 'bg-blue-100'}`}>Middle School
              </GenButton>
              <GenButton 
              onClick={() => setSelectedGrade('High School')}
              customStyles={gradeButtonStyle + `${selectedGrade === 'High School' ? 'bg-blue-300' : 'bg-blue-100'}`}>High School
              </GenButton>
              <input 
              type="text" 
              placeholder="Other (type here)" 
              className={gradeOtherInputStyle} 
              onInput={() => setSelectedGrade('Other')} 
              />
            </div>
          </div>
          <div className="w-full md:max-w-1/3 h-full p-4">
            <p className={homeLabelStyle}>Subject</p>
            <div className="grid grid-cols-2 gap-4">
              <GenButton 
              onClick={() => setSelectedSubject('Behavior')}
              customStyles={subjectButtonStyle + `${selectedSubject === 'Behavior' ? 'bg-green-300' : 'bg-green-100'}`}>Behavior
              </GenButton>
              <GenButton 
              onClick={() => setSelectedSubject('Math')}
              customStyles={subjectButtonStyle + `${selectedSubject === 'Math' ? 'bg-green-300' : 'bg-green-100'}`}>Math
              </GenButton>
              <GenButton 
              onClick={() => setSelectedSubject('Reading')}
              customStyles={subjectButtonStyle + `${selectedSubject === 'Reading' ? 'bg-green-300' : 'bg-green-100'}`}>Reading
              </GenButton>
              <input 
              type="text" 
              placeholder="Other (type here)" 
              className={subjectOtherInputStyle}
              onInput={() => setSelectedSubject('Other')}
               />
            </div>
          </div>
          <div className="w-full md:max-w-1/3 h-full p-4 mb-6">
            <p className={homeLabelStyle}>How can the student grow?</p>
            <UserInput type="text" placeholder="Write something here..." value={writtenInput} onChange={(e) => setWrittenInput(e.target.value)}/>
          </div>
        </div>
        <div className="flex justify-center">
            <GenButton onClick={handleSubmit} customStyles={generateButtonHomeStyle}>Generate</GenButton>
        </div>
        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            chatResponseData && Object.keys(chatResponseData).length > 0 && (
              <div className="flex flex-col">
                <div className="w-9/10 align-left text-left pr-4">
                  <h3 className="font-karla text-xs text-gray-500 pl-6 mb-4 pt-4">Results</h3>
                  <h2 className={responseHeaderStyle}>Suggested Goal</h2>
                    <p className={responseTextStyle}>{chatResponseData?.IEP_goal || "No goal provided. Please try again."}</p>
                  <br/>
                  <h2 className={responseHeaderStyle}>Reasoning</h2>
                    <p className={responseTextStyle}>{chatResponseData?.reason || "No reasoning provided. Please try again."}</p>
                  <br/>
                  <h2 className={responseHeaderStyle}>Potential Alternative Goals</h2>
                    <ol className="list-decimal pl-10 mb-8">
                      {chatResponseData?.potential_alternative_goals?.map((item, index) => (
                        <li className={responseListStyle} key={index}>{item}</li>
                      ))}
                    </ol>
                  <div className="flex justify-center">
                    <GenButton onClick={handleSubmit} customStyles="bg-violet-500 text-white text-md font-karla
                    transition-colors duration-300 hover:bg-violet-600 m-4 w-full sm:w-2/5">Regenerate</GenButton>
                  </div>
                </div>
              </div>
            )
          )}
        </Modal>
    </div>
  );
};