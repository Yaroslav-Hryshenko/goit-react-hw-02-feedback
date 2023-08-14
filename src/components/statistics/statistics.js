import PropTypes from 'prop-types';
import css from './statistics.module.css';
// import { Notification } from '../notification/notification'

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
    
        <>
          <ul className={css.feedback_list_statistic}>
            <li className={css.feedback_item_statistic}>
              <p>Good: {good}</p>
            </li>
            <li className={css.feedback_item_statistic}>
              <p>Neutral: {neutral}</p>
            </li>
            <li className={css.feedback_item_statistic}>
              <p>Bad: {bad}</p>
            </li>
          </ul>
          <p className={css.feedback_total}>Total: {total}</p>
          <p className={css.feedback_positive}>
            Positive Feedback: {positivePercentage}%
          </p>
        </>
      
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;