const advid = document.getElementById("adviceID");
const bubble = document.getElementById("theAdvice");

const renderAdvice = (id, text) => {
  advid.textContent = id;
  bubble.textContent = text;
};

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";
  let adviceID = "";
  let theAdvice = "";
  try {
    const response = await fetch(url);
    const data = await response.json();

    adviceID = `ADVICE ${data.slip.id}`;
    theAdvice = `"${data.slip.advice}"`;
  } catch (e) {
    console.log(e);
  }
  renderAdvice(adviceID, theAdvice);
}

button.addEventListener("click", getAdvice);
