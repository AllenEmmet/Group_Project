/*
  * Dashboard for our site
  * Holds: 
  * User info, goals, calories, exercises
  * These then can be broken down into their seperate componenets
  */
import React from 'react'

const Dashboard = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{margin: '20px'}}>
        <h2>Today's total:</h2>
        <p>(Display  either positive or negative calorie value depending on which below is higher</p>
      </div>
      <div style={{display: 'flex'}}>
        <div style={{margin: '20px'}}>
          <h3>Calories burned today:</h3>
          <p>Display calorie total from today's inputs</p>
        </div>
        <div style={{margin: '20px'}}>
          <h3>Calories eaten today:</h3>
          <p>Display calorie total from today's inputs</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard