

$(document).ready(function() {

    
    let listOfWords = ['elephant', 'headphones', 'dentist']

    
    

    //select one random word from the list
    let randomWord = listOfWords[Math.floor(Math.random()*listOfWords.length)]
    let randomWordSplit = randomWord.split("");
    
    
    //creates a div surrounding the letter and a letter div
    for (i = 0; i<randomWord.length; i++) {
        $divAroundLetter = $('<div>').addClass('DivAroundLetter').css('border-style', 'solid');
        $('#guessLetters').append($divAroundLetter);
        $letter = $('<div>').addClass('letter').text(randomWordSplit[i]).css('color', 'lightblue');
        $divAroundLetter.append($letter);
    
    }

  
 
    //main game function
    const checkCorrectLetter = () => {
    //array of corret guesses
    correctGuesses = []
    //player guess
    let numOfGuesses = 0
    $('button').on('click', (event) => {
        let currentGuess = $(event.target).text().toLowerCase()
        $(event.target).prop('disabled', true);
        numOfGuesses++

    //correct letters will show up in black 
        for (let i=0; i<randomWord.length; i++) {
            if (currentGuess == randomWord[i]) {
            $correctLetter = ($('.letter').eq(i).css('color', 'black').addClass('revealed')) 
            //sends correct letters to correctGuesses array
            correctGuesses.push($correctLetter)

            // SOURCE: https://github.com/simonjsuh/Vanilla-Javascript-Hangman-Game/blob/master/js/hangman.js
            // winning function, match the correct guess length with the random word 
            if (correctGuesses.length == randomWord.length) {
                console.log('You win!')
            } if (numOfGuesses == 7) {
                console.log('hi')
                $('.button').prop('disabled', true);
            }

        
            }  //end of if statement


        
        } //end of for loop

        
        

        
    }) //end of button listener
} //end of correct letter function

    


checkCorrectLetter()

}); //end of jQuery function


