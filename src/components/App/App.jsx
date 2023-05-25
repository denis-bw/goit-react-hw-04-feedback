// import React, { Component } from 'react';
import {useState} from 'react' 
import {Statistics} from '../Statistics/Statistics'
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import { Section } from '../Section/Section'
import { Notification } from '../Notification/Notification'
import { ContainerFeedback } from './App.styled'


export default function App ()  {

  const [good, setGood] = useState(0)  
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const status = {
    good,
    neutral,
    bad,
  };

  const onClicBtn = (e) => {
    const nameState = e.target.textContent;

    switch (nameState) {
      case 'good':
        setGood(prevState => {
          return prevState + 1;
        })
        break;
      case 'neutral':
        setNeutral(prevState => {
          return prevState + 1;
        })
         break;
      case 'bad':
        setBad(prevState => {
          return prevState + 1;
        })
        break;
      default: return;
    }
   }

  
  const countTotalFeedback = () => {
    return good + bad + neutral;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (good * 100) / countTotalFeedback(),
    );
  }

  
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
    
  return (
    <ContainerFeedback >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(status)}
          onLeaveFeedback={onClicBtn}>
        </FeedbackOptions>
      </Section>
    
      
      {total ? <Section title="Statistics">
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}>   
        </Statistics>
      </Section> : <Notification message="There is no feedback"></Notification>}
    </ContainerFeedback>
  );
}




