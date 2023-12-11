import classNames from 'classnames';

import { Typography } from '@/components/ui/typography';

import style from './feedback.module.scss';
import { feedbackData } from './feedback-data';
import { FeedbackForm } from './feedback-form';
import { FeedbackSlider } from './feedback-slider';

export const Feedback = () => {
  return (
    <section className={classNames('container', style.feedbackContainer)}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={style.title}>
        Відгуки
      </Typography>

      <FeedbackSlider data={feedbackData} />

      <FeedbackForm />
    </section>
  );
};
