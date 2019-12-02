window.onload = function(){}
    
    var typed = new Typed('.blink', {
  strings: ["good day muhit", "your action plan for today"],
  typeSpeed: 100
});


//////////////get all the variables from html file
var add = document.getElementById("add");
var removeAll = document.getElementById("removeall");
var list = document.getElementById("list");


///////////////remove all buttons sart/////////////////////
removeAll.onclick = function(){
    list.innerHTML = "";
}
/////////////////remove all button ends



//////////////start adding a new list element//////////////////
add.onclick = function(){
    addlist(list);
    document.getElementById("userinput").value = "";
    document.getElementById("userinput").focus();
}

function addlist(targetUL){
    //////grab the text from user
    var inputText = document.getElementById("userinput").value;
    ///////////created the li
    var li = document.createElement("li");
    ////////create a node into this li
    var textNode = document.createTextNode(inputText + " ");
    ///////create a button
    var removeButton = document.createElement("button");
    
    
    ///////////make sure no one can add blank todo witout enter text in input
    if(inputText !== ""){
        //////add a remove button with class and set the attribute 
        removeButton.className = "btn btn-xs btn-danger";
        ///////fill it with innerhtml
        removeButton.innerHTML = " &times; ";
        /////////set attribute (click to  * )
        removeButton.setAttribute("onclick", "removeMe(this)");
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUL.appendChild(li);
    } else{
        alert("please enter a list");
    }
}
/////////////end of adding a new list element//////////////

                                                 
$(function (){
     $("#userinput").keydown(function(e) {
    if (e.which === 13) {
        addlist();
      e.preventDefault();   // Don't submit the form
      $("ul").append("<li>" + this.value + "</li>"); // append this.value
      this.value = "";  // reset the value field
    }
  })
})



function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}












































