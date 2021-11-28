'use strict'

const cake = document.querySelector('.cake')
const rose = document.querySelector('.rose')
const surprise = document.querySelector('.surprise')
const coffee = document.querySelector('.coffee')
const card = document.querySelector('.card')

const pos = {
  'cake': '40% 70%',
  'rose': '3% 6%',
  'surprise': '50% 6%',
  'coffee': '3% 77%'
}

const elst = [cake, rose, surprise, coffee]

let TopScroll = window.pageYOffset || document.documentElement.scrollTop
let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft

window.onscroll = function() {
  window.scrollTo(LeftScroll, TopScroll)
}

for (let i = 0; i < elst.length; i++) {
  if (elst[i]) {
    elst[i].onmousedown = function() {
      elst[i].style.position = 'absolute'
      elst[i].style.zIndex = 1000
      document.body.append(elst[i])
      
      document.addEventListener('mousemove', onMouseMove)
      
      document.addEventListener("mouseleave", function() {
        elst[i].style.top = pos[elst[i].classList[0]].split(' ')[0]
        elst[i].style.left = pos[elst[i].classList[0]].split(' ')[1]
        document.removeEventListener('mousemove', onMouseMove)
        elst[i].onmouseup = null
      })
    
      elst[i].onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove)
        cake.onmouseup = null
      }
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY, elst[i])
      }
    }
  }
}

card.addEventListener('mouseover', () => {
  card.style.transform = 'rotate(0deg) scaleX(1.5) scaleY(1.5)';
  cake.style.zIndex = 1;
  surprise.style.zIndex = 1;
  rose.style.zIndex = 1;
  coffee.style.zIndex = 1;
})

card.addEventListener('mouseout', () => {
  card.style.transform = 'rotate(10deg)';
})

function moveAt(pageX, pageY, el) {
  el.style.left = pageX - el.offsetWidth / 2 + 'px'
  el.style.top = pageY - el.offsetHeight / 2 + 'px'
}