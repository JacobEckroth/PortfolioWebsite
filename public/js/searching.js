

var searchButtons = document.getElementsByClassName("searchButton");




var searchTerms = []

for(var i = 0; i < searchButtons.length; i++){
    console.log(i);
    searchButtons[i].addEventListener("click",toggleButtonActive);
}

function toggleButtonActive(e){
   var buttonClicked = e.target;

   const classNames = buttonClicked.classList;
   var classNamesArray = [];
   for(var i = classNames.length >>> 0; i--;){
       classNamesArray[i] = classNames[i];
   }
   
   if(classNamesArray.indexOf('active') != -1){
      
       buttonClicked.classList.remove("active");
       buttonClicked.classList.add("inactive");
       searchTerms = searchTerms.filter(e => e !== buttonClicked.id)
   }else{
    
       buttonClicked.classList.remove("inactive");
       buttonClicked.classList.add("active");
       searchTerms.push(buttonClicked.id)

   }
   updateShowingProjectsText();
    
}

var showingProjectsText = document.getElementById("showingProjectsText")
const defaultText = "Showing All Projects:"

function updateShowingProjectsText(){
    if(searchTerms.length == 0){
        showingProjectsText.textContent = defaultText;
    }else if(searchTerms.length == 1){
        showingProjectsText.textContent = "Showing projects using " + searchTerms + ':';
        
    }else if(searchTerms.length == 2){
        showingProjectsText.textContent = "Showing projects using " + searchTerms[0] + " and " + searchTerms[1] + ":"
    }
    
    else{
        showingProjectsText.textContent = "Showing projects using "
        for(var i = 0; i < searchTerms.length - 1 ; i++){
            showingProjectsText.textContent += (searchTerms[i] +", ")
        }
        showingProjectsText.textContent += "and " + searchTerms[searchTerms.length-1] + ":"
    }
}

var resetButton = document.getElementById("resetSearch")
resetButton.addEventListener("click",resetForm);

function resetForm(){
    for(var i = 0; i < searchButtons.length; i++){
        console.log(i);
        searchButtons[i].classList.remove("active");
        searchButtons[i].classList.add("inactive");
    }
    searchTerms = [];
    document.getElementById("searchProjects").value = "";
    updateShowingProjectsText();
}