import confetti from "canvas-confetti";
import Typed from "typed.js";

// Confetti
let confettiBtn = document.getElementById("confetti-btn")

confettiBtn.addEventListener("click", ()=> {
    let myCanvas = document.createElement("canvas")
    myCanvas.style.width = "100vw"
    myCanvas.style.height = "100vh"
    myCanvas.style.position = "fixed"
    myCanvas.style.inset = 0;
    myCanvas.style.pointerEvents = "none";
    document.body.appendChild(myCanvas)

    let myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
    myConfetti({
        particleCount: 100,
        spread: 160
    })
})

// Dark Mode
const sunIcon = document.querySelector(".sun")
const moonIcon = document.querySelector(".moon")

const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
}

const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark")
        moonIcon.classList.add("display-none")
        return
    }
    sunIcon.classList.add("display-none")
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
        iconToggle();
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    iconToggle();
}

sunIcon.addEventListener("click", () => {
    themeSwitch();
})

moonIcon.addEventListener("click", () => {
    themeSwitch()
})
themeCheck()

// running text
const runningText = new Typed('#runningText', {
    strings: ['Appreciate Us'],
    typeSpeed: 80,
    backDelay: 1000,
    loop: true
})

// navbar filter
const triggers = document.querySelectorAll('li.filter-trigger');
const users = document.querySelectorAll('.item');
var all = document.querySelector('.reset')

function clearActive() {
  var activeLink = document.querySelector('.active');
  activeLink.classList.remove("active");
}

triggers.forEach(element => {
  element.addEventListener('click', function() {
    clearActive();
    element.classList.add('active');
    
    let filter = element.dataset.filter;
    console.log(filter);
    
    users.forEach(users => {
      if(!users.classList.contains(filter)) {
        users.classList.add('hide');
      } else {
        users.classList.remove('hide');
      }
    });
    
    if(filter === 'all') {
      users.forEach(users => {
        users.classList.remove('hide');
      })
    }
  })
});
