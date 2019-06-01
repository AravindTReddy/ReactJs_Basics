import React from "react"

function MainContent(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: "20px"
  }
  if (hours<12){
    timeOfDay = "morning"
    styles.color = "red"
  } else if (hours >=12 && hours <17){
    timeOfDay = "AfterNoon"
    styles.color = "green"
  } else {
    timeOfDay = "Night"
    styles.color = "black"
  }
    return (
        <main>
            <p style={styles} >Good {timeOfDay}!</p>
            <p>I am a computer science graduate student at UMBC</p>
        </main>
    )
}

export default MainContent