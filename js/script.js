const menu = document.querySelector("#menu");


const strawberry = document.querySelector("h1");
const text = `<p>ストロベリースムージー</p>`;


const lists = [
    "strawberry.jpg", 
    "lime.jpg", 
    "fig.jpg",
    "lemon.jpg",
    "mango.jpg",
    "apple.jpg",
];

// console.log(lists[1]);
const content = `<div><img src="images/${lists[0]}" alt=""></div>
    <div><img src="images/${lists[1]}" alt=""></div>
    <div><img src="images/${lists[2]}" alt=""></div>
    <div><img src="images/${lists[3]}" alt=""></div>
    <div><img src="images/${lists[4]}" alt=""></div>
    <div><img src="images/${lists[5]}" alt=""></div>
    `;

//menu.textContent = content;
menu.insertAdjacentHTML("beforeend", content);

