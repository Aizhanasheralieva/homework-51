
import './LottoApp.css'
import React, {useState} from "react";
import LottoBall from "./components/LottoBall/LottoBall";

    const LottoApp: React.FC = () => {
        const [number, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  // const changeNumbersArray = () => {
  //
  //
  //     setNumbers([]);
  // };
  return (
      <>
        <div className="lotto">
            <LottoBall number={[5, 11, 16, 23, 32]}/>
        </div>
        {/*<button onClick={changeNumbersArray}>Get new numbers</button>*/}
      </>
  )
};

export default LottoApp
