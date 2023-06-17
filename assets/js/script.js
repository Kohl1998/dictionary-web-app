// Toggle button
let toggle = $('#toggle')

// Light mode button
let img = $('#moonIcon')

// Input field
let inputField = $('#inputField')




// Function to change image src once toggle button is clicked
toggle.on('click', function () {
    img.attr('src', 'assets/images/crescent-moon-svgrepo-dark.svg') 
    console.log(input)
})


inputField.on('keypress', function(e) {
    if (e.which == 13) {
        let userValue = $('#search').val()
        console.log(userValue)
        let root = $('#root')
        let title = $('<h1>')
        title.text(userValue)
        /* class in css sheet to create space between user input and input box */
        title.addClass('inputMargin')
        root.append(title)}
    })

let result = $('#apiResponse')
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`