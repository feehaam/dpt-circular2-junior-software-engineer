import React from "react";
import './Name.css';

function Name() {

    // To collect the input provided by the user
    const getName = () => {
        return document.getElementById('full_name').value;
    }

    // Sets the output result after each click
    const setOutput = (full_name) => {
        document.getElementById('output').innerText = full_name;
    }

    // Function to reverse a string after reverse button is clicked
    const reverse = () =>  {
        const full_name = getName();
        let reversedName = "";
        for (let i = full_name.length - 1; i >= 0; i--) {
            reversedName += full_name[i];
        }
        setOutput(reversedName);
    }

    // This functions counts the number of vowels in the name
    const counter = () => {
        const full_name = getName().toLowerCase();
        let totalVowels = 0;
        for(let i=0; i<full_name.length; i++){
            let ch = full_name[i];
            if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
                totalVowels++;
            }
        }
        setOutput("Total vowels in your name is "+totalVowels+".");
    }

    // It displays the 3rd character/letter of name
    const character = () => {
        const full_name = getName();
        setOutput("3rd your name = "+full_name[2]);
    }

    // To replace all <space> by <hyphen>
    const space = () => {
        let full_name = getName();
        let nameWithHyphen = "";
        for(let i=0; i<full_name.length; i++){
            if(full_name[i] === ' ') 
                nameWithHyphen += '-';
            else 
                nameWithHyphen += full_name[i];
        }
        setOutput(nameWithHyphen);
    }

    // Bubble sort algorithm on the name
    const sortB = () => {
        let full_name = getName();
        let letters = [...full_name];
        
        for(let i=0; i<letters.length; i++){
            for(let j=0; j<letters.length-1; j++){
                if(letters[j] > letters[j+1]){
                    let temp = letters[j];
                    letters[j] = letters[j+1];
                    letters[j+1] = temp;
                }
            }
        }

        setOutput(letters.join(''));
    }

    // Insertion sort algorithm on the name
    const sortI = () => {
        let full_name = getName();
        let letters = [...full_name];

        for(let i=1; i<letters.length; i++){
            if(letters[i] < letters[i-1]){
                for(let j=i; j>=0 && letters[j] < letters[j-1]; j--){
                    let temp = letters[j];
                    letters[j] = letters[j-1];
                    letters[j-1] = temp;
                }
            }
        }
        
        setOutput(letters.join(''));
    }

    return (
        <div>
            <div className="main-block">
                <input type={'text'} id={'full_name'} placeholder={'Type your name here'} />
                <div className="buttons">
                    <button className="btn btn-dark" onClick={reverse}>
                        Revserse
                    </button>
                    <button className="btn btn-dark m-1" onClick={counter}>
                        Counter
                    </button>
                    <button className="btn btn-dark m-1" onClick={character}>
                        Character
                    </button>
                    <button className="btn btn-dark m-1" onClick={space}>
                        Space
                    </button>
                    <button className="btn btn-dark m-1" onClick={sortB}>
                        Bubble sort
                    </button>
                    <button className="btn btn-dark m-1" onClick={sortI}>
                        Insertion sort
                    </button>
                </div>
                <div className="output">
                    <div className="output-title">
                        Output
                    </div>
                    <div className="output-body" id="output">
                        Total vowels: 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Name;