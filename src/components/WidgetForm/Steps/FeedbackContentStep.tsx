import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleFeedbackSubmit(event: FormEvent) {
    event.preventDefault();

    onFeedbackSent();
  }
  
  return (
    <>
      <header>
        <button type='button'
          className='top-3 left-3 absolute text-zinc-400 hover:text-zinc-100
          w-8 h-8 rounded-full flex items-center justify-center
          focus:outline-brand-color focus:outline-none focus:text-zinc-100'
          onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight='bold'
            className='w-4 h-4'/>
        </button>

        <span className='text-xl leading-6 flex items-center gap-2' >
          <img src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className='w-6 h-6'/>
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleFeedbackSubmit}
        className='my-4 w-full'>
        <textarea placeholder='Conte com detalhes o que está acontecendo...' 
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent
          border-[1px] border-zinc-600 rounded-md px-3 py-2
          focus:border-brand-color focus:outline-none focus:ring-brand-hover focus:ring-1 resize-none
          scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          onChange={event => setComment(event.target.value)}/>

        <footer className='flex gap-2 mt-2'>

          <ScreenshotButton screenshot={screenshot}
            onScreenshotTook={setScreenshot}/>

          <button type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-color text-brand-onBrand rounded-md border-transparent
            flex-1 flex justify-center items-center text-sm hover:bg-brand-hover
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-hover
            transition-colors disabled:opacity-50 disabled:hover:bg-brand-color'>
            <span>{'Enviar Feedback'}</span>
          </button>
        </footer>
      </form>
    </>
  );
}