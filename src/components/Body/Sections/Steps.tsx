import step01Img from '../../../assets/steps/step01.webp';
import step02Img from '../../../assets/steps/step02.webp';
import step03Img from '../../../assets/steps/step03.webp';
import step04Img from '../../../assets/steps/step04.webp';

interface StepsProps {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

const steps: StepsProps[] = [
  { 
    title: 'Passo 1',
    body: 'É só clicar no botão flutuante no canto da página',
    image: step01Img,
    imageAlt: 'Botão com um ícone de balão de mensagem com o texto Feedback ao lado direito.',
  },
  {
    title: 'Passo 2',
    body: 'E então escolher que tipo de feedback deseja enviar',
    image: step02Img,
    imageAlt: 'Interface do widget. Mostra três botões para escolher a categoria do feedback.',
  },
  {
    title: 'Passo 3',
    body: 'E por fim  descrever o que você tem em mente, fazer uma captura de tela se precisar, e então e enviar',
    image: step03Img,
    imageAlt: 'Interface de envio de feedback. Mostra um campo de texto, um botão para realizar captura de tela e o botão Enviar Feedback.',
  },
  {
    title: 'Passo 4',
    body: 'Depois de terminar, você pode enviar mais feedbacks se precisar',
    image: step04Img,
    imageAlt: 'Interface de conclusão do envio. Mostra um texto de sucesso e um botão para realizar um novo feedback.',
  }
];

export function Steps() {
  return (
    <section className='px-6 py-[96px]'>
      <div className='landing-inner-section flex-col'>
        
        <strong className='landing-h1 text-center flex-1'>
          {'Quer ver como é fácil?'}
        </strong>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            
          {steps.map((step, i) => {
            return (
              <div key={i}>
                <div className='overflow-hidden rounded-xl bg-brand-color bg-opacity-50'>
                  <img src={step.image}
                    alt={step.imageAlt}
                    className='max-h-[320px] mx-auto' />
                </div>

                <div className='p-6 text-md leading-[150%]'>
                  <strong className='text-xl leading-[150%] font-medium mb-2'>{step.title}</strong>
                  <p>{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}