const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['Im good you dumb fuck', 'doin good boi', 'leave me alone'];
const weather = ['you need a tan'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('voice is activated!!');
};

recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.result[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(msg){
    const speech = new SpeechSynthesisUtterance();

    if(msg.include('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.text = 'can you repeat that again';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}