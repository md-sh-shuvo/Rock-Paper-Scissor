const getID = (id) => document.getElementById(id);

let cntRound = 0, cntYou = 0, cntAI = 0;;

['rock', 'paper', 'scissor'].forEach(id => {
    getID(id).classList.add('bg-green-500');
})

getID('rps').addEventListener('click', function(event){
    let target = event.target.closest('div'); 
    if (!target || !['rock', 'paper', 'scissor'].includes(target.id)) return;
      
    cntRound++;

    ['rock', 'paper', 'scissor'].forEach(id =>{
        getID(id).classList.remove('bg-green-500', 'bg-black');
    })

    if(event.target.id === 'rock'){

        getID('rock').classList.add('bg-black');
        getID('paper').classList.add('bg-green-500');
        getID('scissor').classList.add('bg-green-500');
    }
    else if(event.target.id === 'paper'){
        getID('paper').classList.add('bg-black');
        getID('rock').classList.add('bg-green-500');
        getID('scissor').classList.add('bg-green-500');
        
    }
    else if(event.target.id === 'scissor'){
        getID('scissor').classList.add('bg-black');
        getID('rock').classList.add('bg-green-500');
        getID('paper').classList.add('bg-green-500');

    }



    let arr = ['Rock', 'Paper', 'Scissor'];
    let index = Math.floor(Math.random()*arr.length);
    let aiTurn = arr[index];
    let youTurn = event.target.innerText;
    getID('random').innerText = aiTurn;
    
    
    
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
        getID('result').style.color = 'gray';

    }
    if(cntRound%3 === 0) {
        if(cntYou > cntAI) 
            setTimeout(() => {
                alert("Congrats!!! You Won... Play again?..");
                getID('result').innerText = 'Start';
                ['rock', 'paper', 'scissor'].forEach(id =>{
                    getID(id).classList.add('bg-green-500');
                })
                cntAI = 0;
                cntYou = 0;
            }, 300);
        else if(cntAI > cntYou)
            setTimeout(() => {
                alert("Oops!!! AI Won... Play again?..");
                getID('result').innerText = 'Start';
                ['rock', 'paper', 'scissor'].forEach(id =>{
                    getID(id).classList.add('bg-green-500');
                })
                cntAI = 0;
                cntYou = 0;
        }, 300);
        else
            setTimeout(() => {
                alert("Match DRAW... Play again?..");
                getID('result').innerText = 'Start';
                ['rock', 'paper', 'scissor'].forEach(id =>{
                    getID(id).classList.add('bg-green-500');;
                })
                cntAI = 0;
                cntYou = 0;
            }, 300);
    }
})

