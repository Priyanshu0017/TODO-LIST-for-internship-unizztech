let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

const savetodo = (e) => {
    e.preventDefault()
    console.log("form submitted");
    let li = document.createElement('li')
    li.innerText = input.value
    let button = document.createElement('button')
    let i = document.createElement('i')
    i.className = "fa-solid fa-xmark"
    button.appendChild(i)
    li.appendChild(button)
    ul.appendChild(li)
    form.reset()
}

form.addEventListener("submit", savetodo)
const deletetodo = (e) => {
    if(e.target.className.includes("fa-solid")){
        let removelist = e.target.parentElement
        let removeli = removelist.parentElement
        if(window.confirm("Are you sure")) {
            ul.removeChild(removeli)
        }
    }
}

ul.addEventListener('click',deletetodo)

