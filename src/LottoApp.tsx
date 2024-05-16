
import './LottoApp.css';
import React, {useState} from 'react';
import LottoBall from './components/LottoBall/LottoBall';

const LottoApp: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);
  const changeNumbersArray = (): void => {
    const someNewNumbers: number[] = [];
    while (someNewNumbers.length < 5) {
      const randomlyGeneratedNumbers: number = Math.floor(Math.random() * 32) + 5;
      if (!someNewNumbers.includes(randomlyGeneratedNumbers)) {
        someNewNumbers.push(randomlyGeneratedNumbers);
      }
    }
    someNewNumbers.sort((a, b) => a - b);
    setNumbers(someNewNumbers);
  };
  return (
    <>
      <h1 className="some-title">Numbers of Lottery</h1>
      <>
        <LottoBall number={numbers[0]}/>
        <LottoBall number={numbers[1]}/>
        <LottoBall number={numbers[2]}/>
        <LottoBall number={numbers[3]}/>
        <LottoBall number={numbers[4]}/>
      </>
      <button className="getNumbersBtn" onClick={changeNumbersArray}>Get new numbers</button>
    </>
  );
};

export default LottoApp;
