//global variables//
let chosenWords = []
let nameArr = []

createWordsArray = () => {
    let myName = $('#name').val().trim()
    nameArr.push(myName)
    let words = [
        $('#mystery-word-1').val().trim(),
        $('#mystery-word-2').val().trim(), 
        $('#mystery-word-3').val().trim(), 
        $('#mystery-word-4').val().trim(), 
        $('#mystery-word-5').val().trim()
    ]
    for (let i = 0; i < words.length; i++) {
        chosenWords.push(words[i])
    }
}

changeScreenColor = () => {
    $('body').css({'background-color': 'black', 'border-top': 'green'})
    $('header').empty()
    $('.content').css('border', 'none')
}

generateWord = () => {
    const randomWord = chosenWords[Math.floor(Math.random() * chosenWords.length)];
    updateInfo(randomWord)
}

function updateInfo(word) {
    const newWord = word
    createContent(newWord)
}

createContent = (word) => {
    $('.content').empty()
    const newHeader= $('<h1>').text('My name is ' + nameArr[0]).attr('id', 'yourname')
    const newWord = $('<h3>').text('I am ' + word)
    $('.content').append(newHeader, newWord).addClass('wordsection')
}

$('#submit').on('click', event => {
    event.preventDefault()
    createWordsArray()
    changeScreenColor()
    generateWord()
    setInterval(generateWord, 2000)
})