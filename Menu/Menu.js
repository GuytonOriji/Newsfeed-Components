/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function createMenuComp(ulArray){
let menu = document.createElement("div")//creating menu div

let uList = document.createElement("ul")//creating unordered list tag

menu.append(uList)//nesting th unordered list in the menu class tag

ulArray.forEach(li=>{//pushing each li link in the unordered list tag
  uList.innerHTML+=`<li>${li}</li>`
})

menu.classList.add("menu")//adding class 'menu' to parent menu tag "menu"

const menu_btn = document.querySelector(".menu-button")





menu_btn.addEventListener("click", function(event){
    event.preventDefault()
    event.stopPropagation()

   menu.classList.toggle("menu--open")
})


if(document.querySelector(".menu")){

document.querySelector(".menu").addEventListener("blur", function(event){
  // event.preventDefault()
  // event.stopPropagation()

 menu.classList.toggle("menu--open")
})

}



return menu


}



const header = document.querySelector("body")
header.appendChild(createMenuComp(menuItems))//adding to the dom


//styles for the pages with "you will not be writing any CSS in this file" message

document.querySelector("html").style='background-color:#004D40;'
document.querySelector("body").style='background-color:#004D40;'