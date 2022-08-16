let line1 = document.querySelector('.line-1')
let line2 = document.querySelector('.line-2')

window.onscroll = () =>{
    let pos = window.scrollY - 1100;
    line1.style.left = `${pos}px`
    line2.style.right = `${pos}px`
     
}

const yourName = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('errorname')
const email = document.getElementById('email')
const errorEmail = document.getElementById('erroremail')

form.addEventListener('submit', (e) => {
  let messages = []
  if (yourName.value === '' || yourName.value == null) {
    messages.push('Name ist ungultig')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
