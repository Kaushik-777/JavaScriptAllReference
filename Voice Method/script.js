const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const statusDisplay = document.getElementById("status");

recognition.interimResults = true;
recognition.lang = "en-US";

recognition.addEventListener("result", (event) => {
  const transcript = Array.from(event.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  console.log("Transcript:", transcript);
  statusDisplay.textContent = transcript;

  // Command logic
  if (transcript.includes("hello")) {
    const utterance = new SpeechSynthesisUtterance(
      "Hello! How can I help you?"
    );
    window.speechSynthesis.speak(utterance);
  } else if (transcript.includes("Alexis")) {
    const utterance = new SpeechSynthesisUtterance(
      "Yes Kaushik tell me what happened"
    );
    window.speechSynthesis.speak(utterance);
  }
});

recognition.addEventListener("end", recognition.start);
recognition.addEventListener("error", (event) => {
  console.error("Error occurred in recognition:", event.error);
});

document.getElementById("start-button").addEventListener("click", () => {
  statusDisplay.textContent = "Listening...";
  recognition.start();
});
