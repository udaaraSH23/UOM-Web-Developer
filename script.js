const hamburger = document.getElementById("icon")
const hovMenu = document.getElementById("menu");
const menuItems = document.querySelectorAll('.menuBar li');

hamburger.addEventListener("click",() =>{
    hovMenu.classList.toggle("show");
    
})

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    hovMenu.classList.remove('show');
  });
});


//Item Functions

const addItem =document.getElementById("sum")
const removeItem =document.getElementById("subtract")
const items =document.getElementById("itemCount")
