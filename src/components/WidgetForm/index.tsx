import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import otherImage from '../../assets/other.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImage,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='widget-body'>

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        !feedbackType ? 
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          :
          <FeedbackContentStep feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={() => setFeedbackSent(true)} />
      )}

      <footer className='widget-footer-text'>
        {'Feito com ❤️ por '}
        <a className='widget-footer-anchor'
          href='https://github.com/mluizvitor'>{'Vitor Monteiro'}</a>
      </footer>      
    </div>
  );
}