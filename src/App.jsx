import {useState } from "react";
import "./App.css";
import AssGameHeader from "./AssGameHeader";
import { Languages } from "./Languages";
import { getFareWellText } from "./utils";
import Confetti from "react-confetti"

const App = () => {
  const [letter, setLetter] = useState([
    { value: "A", found: false, notFound: false },
    { value: "B", found: false, notFound: false },
    { value: "C", found: false, notFound: false },
    { value: "D", found: false, notFound: false },
    { value: "E", found: false, notFound: false },
    { value: "F", found: false, notFound: false },
    { value: "G", found: false, notFound: false },
    { value: "H", found: false, notFound: false },
    { value: "I", found: false, notFound: false },
    { value: "J", found: false, notFound: false },
    { value: "K", found: false, notFound: false },
    { value: "L", found: false, notFound: false },
    { value: "M", found: false, notFound: false },
    { value: "N", found: false, notFound: false },
    { value: "O", found: false, notFound: false },
    { value: "P", found: false, notFound: false },
    { value: "Q", found: false, notFound: false },
    { value: "R", found: false, notFound: false },
    { value: "S", found: false, notFound: false },
    { value: "T", found: false, notFound: false },
    { value: "U", found: false, notFound: false },
    { value: "V", found: false, notFound: false },
    { value: "W", found: false, notFound: false },
    { value: "X", found: false, notFound: false },
    { value: "Y", found: false, notFound: false },
    { value: "Z", found: false, notFound: false },
  ]);
const randomWord=()=>{
  const words = ["PROGRAMMING","REACT","DATA","TECHNOLOGY","VALUE","ASSEMBLY","GAME"]
  return words[Math.floor(Math.random()*words.length-1)]
}
  const [currentWord,setCurrentWord]=useState(()=>randomWord());
  const currentLetter = currentWord.split("");
  const [clickedLetter, setClickedLetter] = useState([]);

  const numberOfWrongGues = clickedLetter.filter(
    (letter) => !currentLetter.includes(letter)
  );

  const correctGues = currentLetter.every((le) => clickedLetter.includes(le));

  let isGameOver = false;
  if (numberOfWrongGues.length > 7) {
    console.log(numberOfWrongGues.length);
    isGameOver = true;
  }
  const lastGuessedLetter = clickedLetter[clickedLetter.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentLetter.includes(lastGuessedLetter);
  console.log(isLastGuessIncorrect);
  const handleSubmitLetter = (index) => {
        const foundedIndex = currentLetter.indexOf(letter[index].value);
        setClickedLetter(
          clickedLetter.includes(letter[index].value)
            ? clickedLetter
            : [...clickedLetter, letter[index].value]
        );
        console.log(clickedLetter);
        if (foundedIndex != -1) {
          // console.log(foundedIndex)
          setLetter([...letter], (letter[index].found = true));
        }
        if (foundedIndex === -1) {
          // console.log(foundedIndex)
          setLetter([...letter], (letter[index].notFound = true));
        }
  };
  const handleNewGame = () => {
    setCurrentWord(()=>randomWord());
    setClickedLetter([])
    setLetter([
      { value: "A", found: false, notFound: false },
      { value: "B", found: false, notFound: false },
      { value: "C", found: false, notFound: false },
      { value: "D", found: false, notFound: false },
      { value: "E", found: false, notFound: false },
      { value: "F", found: false, notFound: false },
      { value: "G", found: false, notFound: false },
      { value: "H", found: false, notFound: false },
      { value: "I", found: false, notFound: false },
      { value: "J", found: false, notFound: false },
      { value: "K", found: false, notFound: false },
      { value: "L", found: false, notFound: false },
      { value: "M", found: false, notFound: false },
      { value: "N", found: false, notFound: false },
      { value: "O", found: false, notFound: false },
      { value: "P", found: false, notFound: false },
      { value: "Q", found: false, notFound: false },
      { value: "R", found: false, notFound: false },
      { value: "S", found: false, notFound: false },
      { value: "T", found: false, notFound: false },
      { value: "U", found: false, notFound: false },
      { value: "V", found: false, notFound: false },
      { value: "W", found: false, notFound: false },
      { value: "X", found: false, notFound: false },
      { value: "Y", found: false, notFound: false },
      { value: "Z", found: false, notFound: false },
    ])
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-gray-900">
        {
          correctGues && <Confetti/>
        }
        <div className="w-3/6 bg-gray-900 text-white flex flex-col items-center">
          <AssGameHeader />
          {!isGameOver ? (
            correctGues ? (
              <div className=" bg-green-600 w-3/4 p-2 flex flex-col items-center justify-center gap-4">
                <h1>You Win!</h1>
                <p className="ml-4">Well done 🎉</p>
              </div>
            ) : isLastGuessIncorrect ? (
              <div className=" bg-purple-600 w-3/6 p-3 flex flex-col items-center justify-center gap-4 rounded-md">
                <h1>
                  
                {getFareWellText(Languages[numberOfWrongGues.length-1].name)}
                     
                </h1>
              </div>
            ) : (
              ""
            )
          ) : (
            <div className=" bg-red-600 w-3/4 p-2 flex flex-col items-center justify-center gap-4">
              <h1>Game Over!</h1>
              <p className="ml-4">You Loss! Better start learning assembly. <br></br> The current Word is {currentWord}</p>
              
            </div>
          )}
          <div className="mt-8 flex flex-wrap w-3/4  items-center justify-center gap-[1px]">
            {Languages.map((language, index) => {
              const isLanguageLost = index < numberOfWrongGues.length;
              return (
                <button
                  style={{
                    backgroundColor: language.backgroundColor,
                    color: language.color,
                  }}
                  className={`w-max p-3 rounded-sm ${
                    isLanguageLost ? "opacity-25" : ""
                  }`}
                >
                  {language.name}
                </button>
              );
            })}
          </div>
          <div className=" w-3/4 flex justify-center items-center mt-8 gap-[2px]">
            {currentLetter.map((letter) => (
              <div className="bg-zinc-800 border-b-4 w-10 h-10 flex justify-center items-center">
                <span>{clickedLetter.includes(letter) ? letter : ""}</span>
              </div>
            ))}
          </div>
          <div className="w-4/5 flex mt-8 gap-[2px] justify-center flex-wrap">
            {letter.map((l, index) => {
              return (
                <button
                  onClick={() => handleSubmitLetter(index)}
                  key={index}
                  disabled={isGameOver || correctGues}
                  className={` text-black p-4 rounded-md w-12 h-12 cursor-pointer ${
                    l.found
                      ? "bg-green-500"
                      : l.notFound
                      ? "bg-red-500"
                      : "bg-yellow-500 hover:bg-yellow-400 hover:border hover:border-blue-600"
                  } ${isGameOver?"opacity-35":correctGues?"opacity-35":""}`}
                >
                  {l.value}
                </button>
              );
            })}
          </div>
          {correctGues ? (
            <div className="mt-3">
              <button
                onClick={handleNewGame}
                className="bg-blue-600 p-2 w-44 rounded-md"
              >
                New Game
              </button>
            </div>
          ) : isGameOver ? (
            <div className="mt-3">
              <button
                onClick={handleNewGame}
                className="bg-blue-600 p-2 w-44 rounded-md"
              >
                New Game
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default App;
