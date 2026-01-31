let page1 = document.querySelector(".page-1");
let imgWrapper = document.querySelector(".page-1 .img-wrapper");
let img = imgWrapper.querySelector("img");

const images = [
  "https://images.unsplash.com/photo-1715772605517-8c1e09dc31f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8",

  "https://images.unsplash.com/photo-1740638733796-99124a3b0a4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8",

  "https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8",

  "https://images.unsplash.com/photo-1764257416209-e2044659503f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8",

  "https://images.unsplash.com/photo-1764105720554-695f1673fb50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8",

  "https://plus.unsplash.com/premium_photo-1764691325995-3a985d3ab88f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8",

  "https://images.unsplash.com/photo-1763987209766-d9bb8836c0e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
];

let index = 0;
let lastX = 0;

page1.addEventListener("mousemove", (e) => {
  const rect = page1.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  imgWrapper.style.left = x + "px";
  imgWrapper.style.top = y + "px";

  if (Math.abs(e.clientX - lastX) > 40) {
    img.src = images[index];
    index = (index + 1) % images.length;
    lastX = e.clientX;
  }
});

page1.addEventListener("mouseleave", () => {
  imgWrapper.style.left = "50%";
  imgWrapper.style.top = "50%";
  imgWrapper.style.transform = "translate(-50%, -50%)";
  img.src = "https://images.unsplash.com/photo-1764990189201-8025ff64d981?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"
});


let layouts = document.querySelectorAll(".layout-1, .layout-2, .layout-3");

layouts.forEach(layout => {
  const img = layout.querySelector(".bottom img");

  layout.addEventListener("mouseenter", () => {
    img.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
  });
});