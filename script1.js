const Questions = [
    [
        " Which among the following rivers originates from the Amarkantak?","Betwa","Mahi","Narmada","Tapti",3
    ],
    [
        "In which state Talchar thermal power plant is located??","Karnataka","Odisha","West","Himachal ",2
    ],
    [
        " The Mt. Everest is situated in which of the following region?","Nepal Himalayas","Assam Himalayas","Punjab Himalayas"," Kashmir Haimalayas",1
    ],
    [
        " What is the average height of the Greater Himalayan range?","4,000 meter","6,100 meter","4,500 meter","4,000 meter",2
    ],
    [
        " What is the rank of Thar desert in the world as per the total area coverage?","7th","11th","13th"," 17th",4
    ],
    [
        " Wagah Border is loacted along:","Durand Line","McMohan line","Sir Creek Line","Radcliffe Line",4
    ],
    [
        " Which of the following state has the highest mangrove cover in India?","Gujarat","West Bengal","Andhra Pradesh","Tamil Nadu",2
    ],
    [
        " As per the ISFR 2019, the increase of forest cover is highest in which of the following state of India?"," Assamt","Mizoram","Madhya Pradeshh","Karnataka",4
    ],
    [
        " Which among the following rivers originates from the Amarkantak?","Betwa","Mahi","Narmada","Tapti",3
    ],
    [
        "In which state Talchar thermal power plant is located??","Karnataka","Odisha","West","Himachal ",2
    ],
    [
        " The Mt. Everest is situated in which of the following region?","Nepal Himalayas","Assam Himalayas","Punjab Himalayas"," Kashmir Haimalayas",1
    ],
    [
        " What is the average height of the Greater Himalayan range?","4,000 meter","6,100 meter","4,500 meter","4,000 meter",2
    ],
    [
        " What is the rank of Thar desert in the world as per the total area coverage?","7th","11th","13th"," 17th",4
    ],
    [
        " Wagah Border is loacted along:","Durand Line","McMohan line","Sir Creek Line","Radcliffe Line",4
    ],
    [
        " What is the average height of the Greater Himalayan range?","4,000 meter","6,100 meter","4,500 meter","4,000 meter",2
    ]
    ]

let prize = [1000,2000,3000,5000,10000,25000,50000,100000,200000,300000,600000,125000,2500000,5000000,100000000]

let money = 0;
let currentQuestion = 0;

function displayQuestion(index) {
    let Qn = index + 1;
    let quesForRs = document.getElementById('ques-rs');
    let ShowQues = document.getElementById('ques-no');
    let option1 = document.getElementById('opt1');
    let option2 = document.getElementById('opt2');
    let option3 = document.getElementById('opt3');
    let option4 = document.getElementById('opt4');
    let answ = document.getElementById('text1')

    
    let answers = document.getElementById('answers');

    quesForRs.textContent = `Question for Rs. ${prize[index]}`;
    ShowQues.textContent = `Q${Qn} ) ${Questions[index][0]}`;
    option1.textContent = `1: ${Questions[index][1]}`;
    option2.textContent = `2: ${Questions[index][2]}`;
    option3.textContent = `3: ${Questions[index][3]}`;
    option4.textContent = `4: ${Questions[index][4]}`;
    answ.textContent = `answer(1-4) : `
    answers.value = ''; // Clear the previous answer
}

function processAnswer(selectedAnswer) {
    let correctAnswer = Questions[currentQuestion][5];
    let messageShow = document.getElementById('messagae1')
    let ShowRes = document.getElementById('AnswerCheck')
    
    if (selectedAnswer === correctAnswer) {
        ShowRes.textContent = `correct answer`

        // console.log("correct answer")
        money = prize[currentQuestion];
        messageShow.textContent = `You Can Win :  ${money}`
  
        if (currentQuestion === 4) {
            messageShow.textContent = `Congratulations! You have reached a safe zone. You are guaranteed to win at least Rs. ${money}`

        } else if (currentQuestion === 8) {
            messageShow.textContent = `Congratulations! You have reached a safe zone. You are guaranteed to win at least Rs. ${money}`

        } else if (currentQuestion === 11) {
            messageShow.textContent = `Congratulations! You have reached a safe zone. You are guaranteed to win at least Rs. ${money}`

        }else if (currentQuestion === 14) {
            messageShow.textContent = `Congratulations! You have reached a safe zone. You are guaranteed to win at least Rs. ${money}`

        }

        currentQuestion++;

        if (currentQuestion < Questions.length) {
            displayQuestion(currentQuestion);
        } else {
            messageShow.textContent = `Congratulations! You win Rs. ${money}`;
        }
    } else {
        ShowRes.textContent = `Incorrect answer`
        // console.log("Incorrect Answer");
        
        messageShow.textContent = `Congratulations! You win Rs. ${money}`;
        restartGame();
    }
    let QuitShow = document.getElementById('QuitAns')
    const messageQit =() =>{
        if(currentQuestion == 0){
            messageShow.textContent = `Sorry! You win Rs. ${money} Better Luck next Time`;
        }
        else{

            messageShow.textContent = `Congratulations! You win Rs. ${money}`;
        }
        
    }
    QuitShow.addEventListener('click',messageQit,restartGame)
}
function restartGame() {
    let messageShow = document.getElementById('messagae1')
    money = 0;
    currentQuestion = 0;
    displayQuestion(currentQuestion);
    messageShow.textContent = `You have: ${money}`
}
let RestartShow = document.getElementById('RestartGame')
RestartShow.addEventListener('click',restartGame)

let SubmitAns = document.getElementById('submit-ans');
SubmitAns.addEventListener('click', function() {
    let ans = parseInt(answers.value);
    processAnswer(ans);
});


// Display the first question
displayQuestion(currentQuestion);


