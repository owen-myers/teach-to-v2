'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import GenButton from "../components/generate-button";
import UserInput from "../components/user-input";
import LoadingSpinner from "../components/loading-spinner";
import Modal from "../components/modal";
import { getUser } from "../actions/getUser";

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
const responseHeaderStyle = "text-xl font-lora mb-6 pl-6 text-violet-900";

//style for response text
const responseTextStyle = "font-karla text-md pl-6";

const responseListStyle = "font-karla text-md pl-6 mb-4";

// Base button styles
const baseGradeButtonStyle = `text-blue-900 border border-blue-900 relative text-sm font-karla 
transition-colors duration-300 hover:bg-blue-300`;

const baseSubjectButtonStyle = `text-green-900 border border-green-900 relative text-sm font-karla
transition-colors duration-300 hover:bg-green-300`;

export default function PrivatePage() {
  const router = useRouter();
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [writtenInput, setWrittenInput] = useState("");
  const [chatResponseData, setChatResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Helper function to get grade button style
  const getGradeButtonStyle = (grade) => {
    return `${baseGradeButtonStyle} ${
      selectedGrade === grade 
        ? 'bg-blue-300' 
        : 'bg-blue-100'
    }`;
  };

  // Helper function to get subject button style
  const getSubjectButtonStyle = (subject) => {
    return `${baseSubjectButtonStyle} ${
      selectedSubject === subject 
        ? 'bg-green-300' 
        : 'bg-green-100'
    }`;
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        if (!userData) {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth error:', error);
        router.push('/login');
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  //handles submit + API function call
  const handleSubmit = async () => {
    if (!selectedGrade || !selectedSubject) {
      setErrorMessage("Please choose both a grade and subject.");
      return;
    }

    setErrorMessage("");
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

  if (isCheckingAuth) {
    return <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>;
  }

  if (!user) {
    return null; // Router will handle redirect
  }

  return (
    <div>
        <div className="flex flex-col md:flex-row md:space-x-4 md:pl-16 md:pr-16 md:pt-12 md:pb-4 justify-center"> 
          <div className="w-full md:w-96 h-full p-4">
            <p className={homeLabelStyle}>Grade</p>
            <div className="grid grid-cols-2 gap-4">
              <GenButton 
              onClick={() => setSelectedGrade('Elementary')}
              customStyles={getGradeButtonStyle('Elementary')}>Elementary
              </GenButton>
              <GenButton 
              onClick={() => setSelectedGrade('Middle School')}
              customStyles={getGradeButtonStyle('Middle School')}>Middle School
              </GenButton>
              <GenButton 
              onClick={() => setSelectedGrade('High School')}
              customStyles={getGradeButtonStyle('High School')}>High School
              </GenButton>
              <input 
              type="text" 
              placeholder="Other" 
              className={gradeOtherInputStyle} 
              onInput={() => setSelectedGrade('Other')} 
              />
            </div>
          </div>
          <div className="w-full md:w-96 h-full p-4">
            <p className={homeLabelStyle}>Subject</p>
            <div className="grid grid-cols-2 gap-4">
              <GenButton 
              onClick={() => setSelectedSubject('Behavior')}
              customStyles={getSubjectButtonStyle('Behavior')}>Behavior
              </GenButton>
              <GenButton 
              onClick={() => setSelectedSubject('Math')}
              customStyles={getSubjectButtonStyle('Math')}>Math
              </GenButton>
              <GenButton 
              onClick={() => setSelectedSubject('Reading')}
              customStyles={getSubjectButtonStyle('Reading')}>Reading
              </GenButton>
              <input 
              type="text" 
              placeholder="Other" 
              className={subjectOtherInputStyle}
              onInput={() => setSelectedSubject('Other')}
              />
            </div>
          </div>
          <div className="w-full md:w-96 h-full p-4 mb-6">
            <p className={homeLabelStyle}>How can the student grow?</p>
            <UserInput type="text" placeholder="Improving comprehension skills" value={writtenInput} onChange={(e) => setWrittenInput(e.target.value)} question={undefined}/>
          </div>
        </div>
        <div className="flex flex-col items-center pb-2">
            {errorMessage && (
              <div className="text-red-500 font-karla mb-4">{errorMessage}</div>
            )}
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
}