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
    $('#mainContent').css({ "background-color": "black", "color": "white" })
    console.log(input)
})


inputField.on('keypress', function (e) {
    if (e.which == 13) {
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
            console.log(response[0].license)
        },
        error: function (error) {
            console.log(error)
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

// Empties search content
let reset = $('#reset').on('click', function () {
    $('#search').val('')
    let root = $('#root')
    root.empty()
})

