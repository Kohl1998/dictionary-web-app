// Toggle button
let toggle = $('#toggle')

// Light mode button
let img = $('#moonIcon')

// Input field
let inputField = $('#inputField')

// To hold api response
let result = []

// Function to change image src once toggle button is clicked
toggle.on('click', function () {
    img.attr('src', 'assets/images/crescent-moon-svgrepo-dark.svg')
    $('body').css({ "background-color": "black" })
    $('#mainContent').css({ "background-color": "white", "color": "black" })
    console.log(input)
})


inputField.on('keypress', function (e) {
    // Checks if user hit enter button
    if (e.which == 13 && userValue !== '') {
        e.preventDefault()
        var userValue = $('#search').val()
        console.log(userValue)
        let root = $('#root')
        let title = $('<h1>')
        title.text(userValue)
        /* class in css sheet to create space between user input and input box */
        title.addClass('marginTop')
        root.append(title)
    }
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userValue}`
    $.ajax({
        url: url,
        method: "GET",
        dataType: 'json',
        success: function (response) {
            console.log(response[0].sourceUrls)
            let root = $('#root')
            let phonetic = $('<h5>').text(response[0].phonetic).css({'color': 'purple'})
            let noun = $('<h5>').text(response[0].meanings[1].partOfSpeech).css({'color': 'black', 'margin': '20px'})
            let meaning = $('<h5>').text('Meaning').css({'color': 'black', 'margin-top': '30px'})
            // Definitions
            let listOne = $('<li>').text(response[0].meanings[1].definitions[0].definition)
            let listTwo = $('<li>').text(response[0].meanings[1].definitions[1].definition)
            // Synonyms
            let synonym = $('<h5>').text('Synonyms').css({'color': 'purple', 'margin-top': '30px'})
            let synonymDefinition = $('<h5>').text(response[0].meanings[0].synonyms[0]) 
            // verbs
            let verb = $('<h5>').text('Verb').css({'margin-top': '30px'})
            let verbMeaning = $('<h5>').text('Meaning').css({'color': 'black', 'margin-top': '30px'})
            let verbList = $('<li>').text(response[0].meanings[1].definitions[0].definition)
            // Source
            let source = $('<h6>').text('Source').css({'color': 'black', 'margin-top': '20px'})
            let src = $('<a>').text(response[0].sourceUrls).css({'color': 'blue'})
            root.append(phonetic, noun, meaning, listOne, listTwo, synonym, synonymDefinition, verb, verbMeaning, verbList, source, src)
        },
        error: function (error) {
            console.log(error)
            let root = $('#root')
            let errorMessage = $('<h5>').text('Word not available!').css({'color': 'red'})
            root.append(errorMessage)
            // Clears input after 3 secs if word not found 
            setTimeout(() => {
                $('#search').val('')
                let root = $('#root')
                root.empty()
            }, 3000);
            // plays audio if error in GET request
            $('audio#pop')[0].play()
        }
    })
}
)

// Function to toggle between Google fonts
$('#font').change(function () {
    // to show users option from dropdown
    let value = $(this).val()
    alert(`You have selected ${value}`)
    // updates font family with option selected
    $('body').css({ "font-family": value })
})

// Empties search content once user clicks dictionary icon
let reset = $('#reset').on('click', function () {
    $('#search').val('')
    let root = $('#root')
    root.empty()
})

