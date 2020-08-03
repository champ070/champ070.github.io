document.addEventListener('DOMContentLoaded', function() {

    const birthdayTime = document.querySelector('#birthdayTime')
    const countdownContainer = document.querySelector('#countdown')
    const daysCountdown = document.querySelector('#days')
    const hoursCountdown = document.querySelector('#hours')
    const minutesCountdown = document.querySelector('#minutes')
    const secondsCountdown = document.querySelector('#seconds')
  
    const currentTime = new Date()
    let yearOfTheEvent = currentTime.getFullYear()
    let eventDate = new Date( yearOfTheEvent, 07, 30 )
    const isItAugust30th = currentTime.getMonth() === 07 && currentTime.getDate() === 30
  
    function countdown() {
      const now = new Date()
      
      if (now > eventDate) {
        eventDate = new Date( yearOfTheEvent + 1, 07, 30 )
      } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
        eventDate = new Date( now.getFullYear(), 07, 30 )
      }
      
      const currentTime = now.getTime()
      const eventTime = eventDate.getTime()
      const remainingTime = eventTime - currentTime
  
      let seconds = Math.floor( remainingTime / 1000 )
      let minutes = Math.floor( seconds / 60 )
      let hours =  Math.floor( minutes / 60 )
      let days = Math.floor( hours / 24 )
  
      hours %= 24
      minutes %= 60
      seconds %= 60
  
      if ( isItAugust30th ) {
        console.log(' py birthday, Akansha!')
  
        countdownContainer.style.display = "none"
        birthdayTime.style.display = "block"
  
      } else {
  
        daysCountdown.textContent = days
        hoursCountdown.textContent = hours
        minutesCountdown.textContent = minutes
        secondsCountdown.textContent = seconds
  
        setTimeout(countdown, 1000)
  
      } // end of if ( isItFebruary4th )
  
    } // end of countdown
    countdown()
  
  })