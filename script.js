//select popup overlay,box and add button 

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton =document.getElementById("add-popup")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel and add button

var cancelbutton = document.getElementById("cancel-popup")


cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})



// adding new book for select add-book,book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container")
var addbookbutton = document.getElementById("add-book")
var addbooktitle = document.getElementById("book-title-input")
var addauthor = document.getElementById("book-author-input")
var adddescrip = document.getElementById("book-description-input")

addbookbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${addbooktitle.value}</h2>
            <h5>${addauthor.value}</h5>
            <p>${adddescrip.value}</p>
            <button onclick="delbook(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//delet the book deteils

function delbook(event){
    event.target.parentElement.remove()
}