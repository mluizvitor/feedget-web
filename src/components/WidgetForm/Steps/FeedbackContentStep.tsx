import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { api } from '../../../services/api';
import { CloseButton } from '../../CloseButton';
import { Loading } from '../../Loading';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleFeedbackSubmit(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        comment,
        screenshot,
      });

    } catch (error) {
      console.log(error);
    }

    setIsSendingFeedback(false);

    onFeedbackSent();
  }
  
  return (
    <>
      <header>
        <button type='button'
          className='top-3 left-3 header-button'
          onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight='bold'
            className='w-4 h-4'/>
        </button>

        <span className='widget-header-title' >
          <img src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className='w-6 h-6 mr-2'/>
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleFeedbackSubmit}
        className='widget-content-form'>
        <textarea placeholder='Conte com detalhes o que está acontecendo...' 
          className='widget-content-textarea'
          onChange={event => setComment(event.target.value)}/>

        <footer className='widget-content-footer'>

          <ScreenshotButton screenshot={screenshot}
            onScreenshotTook={setScreenshot}/>

          <button type='submit'
            disabled={comment.length === 0 || isSendingFeedback}
            className='widget-content-send-feedback ml-2'>

            {isSendingFeedback
              ? 
              <Loading />
              :
              <span>{'Enviar Feedback'}</span>
            }
          </button>
        </footer>
      </form>
    </>
  );
}