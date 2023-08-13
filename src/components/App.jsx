import React, { Component } from 'react';
import Statistic from 'components/statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import { Section } from './sectionTitle/sectionTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementOnClickBtn = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) => {
    const ratings = this.countTotalFeedback(this.state);
    const rating = (good / ratings) * 100;
    return Math.round(rating) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementOnClickBtn}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </>
    );
  }
}
