import "./App.css";
import React, { useState } from "react";
import Advice from "./components/Advice";

const App = () => {
  const [advice, setAdvice] = useState({
    id: "ADVICE",
    text: "Hit the button to get an advice",
  });

  const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { advice: text } = data.slip;
      setAdvice({ id: `ADVICE ${data.slip.id}`, text: `"${text}"` });
    } catch (e) {
      console.log(e);
      setAdvice({
        id: "Eroare",
        text: "Nu am putut obține un sfat. Te rugăm să încerci din nou.",
      });
    }
  };

  return (
    <div>
      <Advice advice={advice} getAdvice={getAdvice} />
    </div>
  );
};

export default App;
