import { CloseButton } from '../../CloseButton';
import successImage from '../../../assets/success.png';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='widget-success-canvas'>
        <img src={successImage}
          alt='Imagem de um quadrado verde com cantos arredondados. No centro há um símbolo branco no formato de verificado/check'
          className='h-10 w-10'/>

        <span className='widget-success-title'>{'Agradecemos o feedback!'}</span>

        <button type='button'
          onClick={onFeedbackRestartRequested}
          className='widget-success-send-new'>
          {'Quero enviar outro'}
        </button>
      </div>
    </>);
}