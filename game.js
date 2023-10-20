let wins=0;
let loses=0;
let ties=0;
    function play(btnStringValue)
    {
        //alert(btnStringValue)
        let computedAnswer= '';
        
        const counterBoard= document.getElementById(`score`);
    
        let btnStringValueRand= Math.random();
        
            if (btnStringValue===`Rock`) 
            {
        
                if (btnStringValueRand>=0 && btnStringValueRand<1/4){
                    computedAnswer = `Computer chose Rock:It's a tie!`;
                    alert(computedAnswer);
                    ties++;
                    
                }
                else if (btnStringValueRand>=1/4 && btnStringValueRand < 2/4){
                    computedAnswer = `Computer chose Pencil: You win!`;
                    alert(computedAnswer);
                    wins++;
                }
                else if (btnStringValueRand>=2/4 && btnStringValueRand < 3/4){
                    computedAnswer = `Computer chose Sciccors: You win!`;
                    alert(computedAnswer);
                    wins++;
                }
                else if (btnStringValueRand>=3/4 && btnStringValueRand < 4/4){
                    computedAnswer = `Computer chose Paper: Wasted`;
                    alert(computedAnswer);
                    loses++;
                }
            }
            else if (btnStringValue===`Pencil`) 
            {
        
                if (btnStringValueRand>=0 && btnStringValueRand<1/4){
                    computedAnswer = `Computer chose Rock:Wasted!`;
                    alert(computedAnswer);
                    loses++;
                    
                }
                else if (btnStringValueRand>=1/4 && btnStringValueRand < 2/4){
                    computedAnswer = `Computer chose Pencil: It's a tie!`;
                    alert(computedAnswer);
                    ties++;
                }
                else if (btnStringValueRand>=2/4 && btnStringValueRand < 3/4){
                    computedAnswer = `Computer chose Sciccors:It's a tie!`;
                    alert(computedAnswer);
                    ties++;
                }
                else if (btnStringValueRand>=3/4 && btnStringValueRand < 4/4){
                    computedAnswer = `Computer chose Paper: You win`;
                    alert(computedAnswer);
                    wins++;
                }
            }
            else if (btnStringValue===`Sciccors`) 
            {
        
                if (btnStringValueRand>=0 && btnStringValueRand<1/4){
                    computedAnswer = `Computer chose Rock: Wasted!`;
                    alert(computedAnswer);
                    loses++;
                    
                }
                else if (btnStringValueRand>=1/4 && btnStringValueRand < 2/4){
                    computedAnswer = `Computer chose Pencil: It's a tie!`;
                    alert(computedAnswer);
                    ties++;
                }
                else if (btnStringValueRand>=2/4 && btnStringValueRand < 3/4){
                    computedAnswer = `Computer chose Sciccors: It's a tie!`;
                    alert(computedAnswer);
                    ties++;
                }
                else if (btnStringValueRand>=3/4 && btnStringValueRand < 4/4){
                    computedAnswer = `Computer chose Paper: You win`;
                    alert(computedAnswer);
                    wins++;
                }
            }
            else if (btnStringValue===`Paper`) 
            {
        
                if (btnStringValueRand>=0 && btnStringValueRand<1/4){
                    computedAnswer = `Computer chose Rock:You win!`;
                    alert(computedAnswer);
                    wins++;
                    
                }
                else if (btnStringValueRand>=1/4 && btnStringValueRand < 2/4){
                    computedAnswer = `Computer chose Pencil: Wasted!`;
                    alert(computedAnswer);
                    loses++;
                }
                else if (btnStringValueRand>=2/4 && btnStringValueRand < 3/4){
                    computedAnswer = `Computer chose Sciccors: It's a tie!`;
                    alert(computedAnswer);
                    ties++;
                }
                else if (btnStringValueRand>=3/4 && btnStringValueRand < 4/4){
                    computedAnswer = `Computer chose Paper: It's a tie`;
                    alert(computedAnswer);
                    ties++;
                }
            }

        
        document.getElementById('winCount').textContent = `Wins: ` + wins;
        document.getElementById('winCount').classList.add('win'); // Apply the "win" class
        
        document.getElementById('loseCount').textContent = ` Loses:` + loses;
        document.getElementById('loseCount').classList.add('lose'); // Apply the "lose" class
        
        document.getElementById('tieCount').textContent =`Ties:` + ties;
        document.getElementById('tieCount').classList.add('tie'); // Apply the "tie" class
    }
































