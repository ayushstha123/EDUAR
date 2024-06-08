import { AppScene } from '@/pages/Playground/AppScene'
import Button from '@/_components/Button'
import { setScene } from '@/slices/sceneSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircleHelp, X } from 'lucide-react';
import quizData from './quiz.json';

const shapeButtons = [
  { value: "sphere", label: "Sphere" },
  { value: "cube", label: "Cube" },
  { value: "doughnut", label: "Doughnut" },
  { value: "cylinder", label: "Cylinder" },
  { value: "all", label: "All" },
]

const moreButtons = [
  { value: "backroom", label: "Backroom" },
  { value: "scene1", label: "Scene-1" },
  // { value: "scene2", label: "Scene-2" },
  // { value: "scene3", label: "Scene-3" },
  { value: "scene4", label: "Scene-4" },
  // { value: "scene5", label: "Scene-5" },
]

const ButtonGroup = ({ buttons }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex gap-2'>
      {buttons.map(({ value, label }) => (
        <Button
          key={value}
          value={value}
          onClick={() => dispatch(setScene(value))}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default function Playground() {
  const [currentQuestion, setCurrentQuestion] = useState(quizData[Math.floor(Math.random() * quizData.length)]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [quizOn, setQuizOn] = useState(false);

  const value = useSelector(state => state.scene.data || "sphere");

  // Filter questions based on the current shape
  useEffect(() => {
    console.log("currentQuestion", currentQuestion)
    console.log("quizOn", quizOn)
    const filteredQuestions = quizData.filter(item => item.shape === value);
    setRemainingQuestions(filteredQuestions);
  }, [value, setRemainingQuestions, quizOn]);

  // Function to select a random question
  const selectRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    console.log("renadom", randomIndex);

    const selectedQuestion = remainingQuestions[randomIndex];
    console.log("remainingQuestions", remainingQuestions);
    console.log("selectedQuestion", selectedQuestion);

    setCurrentQuestion(selectedQuestion);
    setRemainingQuestions(remainingQuestions.filter((_, index) => index !== randomIndex));
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  // Check if the selected answer is correct
  const checkAnswer = () => {
    setIsCorrect(selectedAnswer === currentQuestion.answer);
  };

  // Render the question and answer options
  const renderQuestion = () => {
    return (
      <main className="grid p-10 gap-3">
        <h3 className="text-xl font-bold up" >{currentQuestion.question}</h3>
        <div>
          {[currentQuestion.answer, currentQuestion.incorrectAnswer].map(option => (
            <label key={option} className="mx-2 flex items-center justify-center gap-2 text-xl">
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
                className
              />
              <span>
                {option}
              </span>
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {isCorrect !== null && (
            <p className={`w-full mx-auto px-4 border rounded-full text-center uppercase text-xl font-bold ${isCorrect ? 'text-green-500 border-2 border-green-500/50' : 'text-red-500 border-2 border-red-500/50'}`} >{isCorrect ? 'Correct!' : 'Oops Incorrect!'}</p>
          )}
          <Button onClick={checkAnswer} variant="muted">Check Answer</Button>
          <Button onClick={selectRandomQuestion}>Next</Button>
        </div>
      </main>
    );
  };



  return (
    <main>
      <section className="flex gap-2 justify-between relative z-[1000]">
        <ButtonGroup buttons={shapeButtons} />
        <ButtonGroup buttons={moreButtons} />
      </section>
      <div className="z-[-1] h-full overflow-hidden">
        <AppScene />
      </div>
      {/* Quiz Box */}
      <section className="absolute bottom-[30%] right-[3%] z-[1000] border bg-white/60 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center">
        {currentQuestion && quizOn && renderQuestion()}
      </section>
      {/* Toggler */}
      <div onClick={() => setQuizOn(!quizOn)} className="absolute bg-white rounded-full p-2 bottom-6 right-6 flex items-center justify-center">
        {quizOn ? <X className="" />
          : <CircleHelp className="" />
        }
      </div>
    </main>
  )
}