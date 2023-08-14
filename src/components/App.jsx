import React, { Component } from 'react';
import Statistic from 'components/statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import { Section } from './sectionTitle/sectionTitle';
import { Notification } from './notification/notification';

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

  countTotalFeedback = () => {
    const valuesArray = Object.values(this.state);
    const totalFeedback = valuesArray.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const ratings = this.countTotalFeedback();
    const good = this.state.good;
    const rating = ratings ? (good / ratings) * 100 : 0;
    return Math.round(rating);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementOnClickBtn}
          />
        </Section>
        <Section title={'Statistic'}>
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}