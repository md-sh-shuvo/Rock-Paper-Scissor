const getID = (id) => document.getElementById(id);
let cntRound = 0;
getID('rps').addEventListener('click', function(event){
    cntRound++;
    let arr = ['Rock', 'Paper', 'Scissor'];
    let index = Math.floor(Math.random()*arr.length);
    let aiTurn = arr[index];
    let youTurn = event.target.innerText;
    getID('random').innerText = aiTurn;
    
    
    let cntYou = 0, cntAI = 0;
    if(youTurn === 'Rock' && aiTurn == 'Paper'){
        getID('result').innerText = 'AI Won';
        getID('result').style.color = 'red';
        cntAI++;
    }
    else if(youTurn === 'Rock' && aiTurn == 'Scissor'){
        getID('result').innerText = 'You Won';
        getID('result').style.color = 'green';
        cntYou++;
    }
    else if(youTurn === 'Paper' && aiTurn == 'Rock'){
        getID('result').innerText = 'You Won';
        getID('result').style.color = 'green';
        cntYou++;
    }
    else if(youTurn === 'Paper' && aiTurn == 'Scissor'){
        getID('result').innerText = 'AI Won';
        getID('result').style.color = 'red';
        cntAI++;
    }
    else if(youTurn === 'Scissor' && aiTurn == 'Rock'){
        getID('result').innerText = 'AI Won';
        getID('result').style.color = 'red';
        cntAI++;
    }
    else if(youTurn === 'Scissor' && aiTurn == 'Paper'){
        getID('result').innerText = 'You Won';
        getID('result').style.color = 'green';
        cntYou++;
    }
    else{
        getID('result').innerText = 'Draw';
        getID('result').style.color = 'white';

    }
    if(cntRound%3 === 0) {
        if(cntYou > cntAI) 
            setTimeout(() => {
                alert("Congrats!!! You Won... Play again?..");
                getID('result').innerText = '';
                cntAI = 0;
                cntYou = 0;
            }, 300);
        else if(cntAI > cntRound)
            setTimeout(() => {
                alert("Oops!!! AI Won... Play again?..");
                getID('result').innerText = '';
                cntAI = 0;
                cntYou = 0;
        }, 300);
        else
            setTimeout(() => {
                alert("Match DRAW... Play again?..");
                getID('result').innerText = '';
                cntAI = 0;
                cntYou = 0;
            }, 300);
    }
})