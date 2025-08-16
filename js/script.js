const htmlBtn = document.querySelector("#html-btn")
const scriptBtn = document.querySelector("#JavaScript-btn")
const reactBtn = document.querySelector("#react-btn")

const htmlContainer = document.querySelector(".project-html-css-container")
const jsContainer = document.querySelector(".project-js-container")
const reactContainer = document.querySelector(".empty-page")

const exitContainer = document.querySelector("#exit-container")


// Funções 

function showOnly(containerToShow) {
    const containers = [htmlContainer, jsContainer, reactContainer]
    containers.forEach(container => {
        if (container === containerToShow) {
            container.classList.toggle("hide")
        } else {
            container.classList.add("hide")
        } 
    })
}



// eventos 


htmlBtn.addEventListener( "click", (e)=>{
  e.preventDefault()
  showOnly(htmlContainer)
})
scriptBtn.addEventListener( "click", (e)=>{
  e.preventDefault()
  showOnly(jsContainer)
})
reactBtn.addEventListener( "click", (e)=>{
  e.preventDefault()
  showOnly(reactContainer)
})
exitContainer.addEventListener("click", (e)=>{
  e.preventDefault()
  showOnly(reactContainer)
})
AOS.init({
    duration: 1000, // duração da animação em ms
    once: true      // animação ocorre apenas 1 vez
  });

 

  