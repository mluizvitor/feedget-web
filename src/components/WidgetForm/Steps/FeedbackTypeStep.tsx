import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged} : FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='widget-header-title' >{'Deixe seu feedback'}</span>
        <CloseButton />
      </header>

      <div className='widget-type-canvas'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type='button'
              className='widget-type-button'>
              <img src={value.image.source}
                alt={value.image.alt}
                className='w-10 h-10 mb-2'/>
              <span>
                {value.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}