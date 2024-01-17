//Hamburger Menu-Responsive

const hamburger = document.getElementById("icon")
const hovMenu = document.getElementById("menu");
const menuItems = document.querySelectorAll('.menuBar li');

hamburger.addEventListener("click",() =>{
    hovMenu.classList.toggle("show");
    
})

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if(hovMenu.classList.contains("show"))
    hovMenu.classList.remove('show');
  });
});


//Item Functions

function decreaseItem(cardId) {
  const itemCount = document.getElementById(`value${cardId}`);
  let currentValue = parseInt(itemCount.textContent, 10);
  if (currentValue > 0) {
    itemCount.textContent = currentValue - 1;
  }
}
function increaseItem(cardId) {
  const itemCount = document.getElementById(`value${cardId}`);
  let currentValue = parseInt(itemCount.textContent, 10);
  itemCount.textContent = currentValue + 1;
}

//BuyNow Function

//Fruits Names
const fruits=document.querySelectorAll(".fruitName");

function buyNow(cardId) {
  
  const itemCount = document.getElementById(`value${cardId}`);
  let currentValue = parseInt(itemCount.textContent, 10);
  let fruitName = fruits[cardId-1].textContent;
  alert(`You Bought ${currentValue} ${fruitName}`);
}