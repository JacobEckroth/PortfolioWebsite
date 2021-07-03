
//test();
function test(){
    var cardHolder = document.getElementById("cardHolder")
    var context = {
        
    }
    var exampleProjectHTML = Handlebars.templates.projectCard({title:"Title"});
    cardHolder.insertAdjacentHTML('beforeend',exampleProjectHTML)
}