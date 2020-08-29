document.addEventListener('DOMContentLoaded', function() {

    const birthdayTime = document.querySelector('#birthdayTime')
    const countdownContainer = document.querySelector('#countdown')
    const daysCountdown = document.querySelector('#days')
    const hoursCountdown = document.querySelector('#hours')
    const minutesCountdown = document.querySelector('#minutes')
    const secondsCountdown = document.querySelector('#seconds')
  
    const currentTime = new Date()
    let yearOfTheEvent = currentTime.getFullYear()
    let eventDate = new Date( yearOfTheEvent, 07, 29 )
    const isItAugust30th = currentTime.getMonth() === 07 && currentTime.getDate() === 29
  
    function countdown() {
      
      if (now > eventDate) {
        eventDate = new Date( yearOfTheEvent + 1, 07, 29 )
      } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
        eventDate = new Date( now.getFullYear(), 07, 29 )
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

    function myFunction() {
      var x = document.getElementById("myNumber").value;
      if (x == 1){
      document.getElementById("result").innerHTML = "tell me the one best compliment , jo kisi ne kra tumhe and which you liked the most one... ";
      }
      else if (x == 2){
      document.getElementById("result").innerHTML = "khud ko khoob zor se thappad marte hue ek video banao or send kro :p ( han jante hai bas ek thappad par nai maar skta :p)";
      }
      else if (x == 3){
      document.getElementById("result").innerHTML = "what do you hate about me ??? ";
      }
      else{
         document.getElementById("demo").innerHTML = "ullu , 1-3 mein dalna hai";
      }
    }
