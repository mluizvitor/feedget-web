import { CloseButton } from '../../CloseButton';
import successImage from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img src={successImage}
          alt='Imagem de um quadrado verde com cantos arredondados. No centro há um símbolo branco no formato de verificado/check' />

        <span className='text-xl mt-4'>{'Agradecemos o feedback!'}</span>

        <button type='button'
          onClick={onFeedbackRestartRequested}
          className='py-2 px-6 rounded-md mt-6 bg-zinc-800 hover:bg-zinc-700
          border-transparent transition-colors text-sm leading-6 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-color'>
          {'Quero enviar outro'}
        </button>
      </div>
    </>);
}