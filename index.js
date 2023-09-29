alert("This site is not yet fully developed and some features may not function properly in case of any bugs please email me: samijamal905@gmail.com. Happy quizing"
)
console.log("Hello bRothers")

var country = [];
var selectedCountry;
var optionsBox = document.getElementById("labels-div");
var feedbackBox = document.getElementById("feedback-div");
var response;
$.ajax({
    url: "https://restcountries.com/v3.1/all",
    type: 'GET',
    success: function(res) {
        response = res
        
    }
});


function game(){
    optionsBox.innerHTML = ""
    country = []
    for(let i=0; i<4; i++){
        var randomCountry = response[Math.floor(Math.random() * 250) + 1]
        country.push(randomCountry)
        optionsBox.innerHTML += `<div class="ans ml-2"><label class="radio"><input style="background-color:red" type="radio" name="option" value="${randomCountry.name.common}" id="1"> <span>${randomCountry.name.common}</span>
        </label></div>`
    }
    console.log(country)
    //var countryName = document.querySelector("#country-name")
    var flag = document.getElementById("flag")
    selectedCountry = country[Math.floor(Math.random() * 4)]
    //countryName.textContent = country[0].name.common
    flag.setAttribute("src", "")
    flag.setAttribute("src", selectedCountry.flags.png)
}

function startGame(response, randomCountries, selectedCountry, flagSrc){

}

var inputs = document.getElementsByTagName("input")
var question = document.getElementsByClassName("question")
var checkButton = document.getElementById("check-answer")
var nextButton = document.getElementById("next")
var gamePage = document.getElementById("game")
var startButton = document.getElementById("start")
var pointsCounter = document.getElementById("points")

var points = 0

startButton.addEventListener("click", function(){
    gamePage.setAttribute("style", "display:block")
    startButton.setAttribute("style", "display:none")
    game()
})

checkButton.addEventListener("click", function(){
    feedbackBox.innerHTML = ""
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].checked){
            if(inputs[i].value == selectedCountry.name.common){
                console.log("You're correct")
                feedbackBox.innerHTML += `<h2 id="feedback">Correct</h2>`
                points++
                pointsCounter.textContent = `Points: ${points}`
                feedbackBox.style.backgroundColor = "rgb(83, 245, 83)"
            }else{
                console.log("You're incorrect")
                feedbackBox.innerHTML += `<h2 id="feedback">Incorrect</h2>
                                          <p>Answer: ${selectedCountry.name.common}</p>`                          
                feedbackBox.style.backgroundColor = "rgb(245, 83, 83)"
            }
        }
    }
    checkButton.style.display = "none"
    nextButton.style.display = "block"
})

nextButton.addEventListener("click", function(){
    feedbackBox.innerHTML = ""
    feedbackBox.style.backgroundColor = "rgb(255,255,255)"
    checkButton.style.display = "block"
    nextButton.style.display = "none"
    game()
    
})




console.log(question[0].id)

