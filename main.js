const secondsElement = document.querySelector('#seconds')
const minutesElement = document.querySelector('#minutes')
const hoursElement = document.querySelector('#hours')
const daysElement = document.querySelector('#days')
const loading = document.querySelector('#loading')
const countdownElement = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`December 25 2021 00:00:00`)

function formatUnit(unit) {
  return unit < 10 ? '0' + unit : unit
}

function countdownValues(days, hours, minutes, seconds) {
  secondsElement.textContent = formatUnit(seconds)
  minutesElement.textContent = formatUnit(minutes)
  hoursElement.textContent = formatUnit(hours)
  daysElement.textContent = formatUnit(days)
}

function updateCountdown() {
  const currentTime = new Date()
  const diffTime = newYearTime - currentTime

  const days = Math.floor(diffTime / 1000 / 60 / 60 / 24)
  const hours = Math.floor(diffTime / 1000 / 60 / 60) % 24
  const minutes = Math.floor(diffTime / 1000 / 60) % 60
  const seconds = Math.floor(diffTime / 1000) % 60

  countdownValues(days, hours, minutes, seconds)
}

function handleCountdownDisplay() {
  loading.remove()
  countdownElement.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)

// snow fall

function createShow() {
  const main = document.querySelector('#main')
  const span = document.createElement('span')

  span.style.left = Math.random() * innerWidth + 'px'

  main.appendChild(span)

  setTimeout(() => {
    span.remove()
  }, 5000)
}

setInterval(createShow, 100)
