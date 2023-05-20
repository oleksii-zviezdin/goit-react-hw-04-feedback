// import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ["good", "neutral", "bad"];

  const handleChangeState = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case "good":
        setGood(prevSet => prevSet + 1)
        break;
      case "neutral":
        setNeutral(prevSet => prevSet + 1)
        break;
      case "bad":
        setBad(prevSet => prevSet + 1)
        break;
      default:
        console.log(`This is opion ${name} in not support`)
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

    const totalOpinions = countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={handleChangeState}
          />
        </Section>
        {totalOpinions <= 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
}

// export class App extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   handleChangeState = e => {
//     const { name } = e.currentTarget;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return Math.round((good * 100) / (good + neutral + bad));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalOpinions = this.countTotalFeedback();

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleChangeState}
//           />
//         </Section>
//         {totalOpinions <= 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         )}
//       </Container>
//     );
//   }
// }
