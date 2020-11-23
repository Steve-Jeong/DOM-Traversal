// Learn Javascript DOM Traversal
// https://www.youtube.com/watch?v=v7rSSy8CaYE&ab_channel=WebDevSimplified
//

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color
}

// const grandparent = document.getElementById("grandparent-id")
// color = "#aaa"
// changeBackgroundColor(grandparent, color)

// const grandparent = document.querySelector("#grandparent-id")
// color = "#aaa"
// changeBackgroundColor(grandparent, color)

const grandparent = document.querySelector(".grandparent")
color = "#aaa"
changeBackgroundColor(grandparent, color)


// const parents = Array.from(document.getElementsByClassName("parent"))
// color = "#777"
// parents.forEach(element => changeBackgroundColor(element, color));


// const parent = document.querySelector(".parent")
// color = "#777"
// changeBackgroundColor(parent, color);

// const parents = document.querySelectorAll(".parent")
// color = "#777"
// parents.forEach(element => changeBackgroundColor(element, color))

const parents = Array.from(grandparent.children)
color = "#777"
parents.forEach(element => changeBackgroundColor(element, color))

// const parentOne = parents[0]
// const children = parentOne.children
// color = "#111"
// changeBackgroundColor(children[0], color)

// const parent = document.querySelector(".parent")
// const children = parent.querySelectorAll(".child")
// color = "#111"
// children.forEach(element => changeBackgroundColor(element, color))

// const children = grandparent.querySelectorAll(".child")
// color = "#111"
// children.forEach(element => changeBackgroundColor(element, color))

const childOne = document.querySelector("#child-one")
color = "#111"
changeBackgroundColor(childOne, color)

const parent = childOne.parentElement
color = "#123"
changeBackgroundColor(parent, color)

const grandparent1 = childOne.closest(".grandparent")
color = "#321"
changeBackgroundColor(grandparent1, color)

const childTwo = childOne.nextElementSibling
color = "#321"
changeBackgroundColor(childTwo.previousElementSibling, color)
