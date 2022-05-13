import frustratedImage from '../../../assets/home/frustrated.webp';
import simpleImage from '../../../assets/home/simple.webp';
import featureImage from '../../../assets/home/feature.webp';

interface BriefProps {
  title: string,
  body: string,
  image: string,
  imageAlt: string,
  invertOrder?: boolean,
  imageColoredBg?: boolean,
}

const briefItems: BriefProps[] = [
  {
    title: 'Sabemos que problemas ocorrem',
    body: 'E quando nossos usuários os encontram pode parecer o fim do mundo para eles. Feedget veio para agilizar o processo de relatar esses erros, de apresentar novas ideias ou iniciar uma conexão com o time de suporte.',
    image: frustratedImage,
    imageAlt: 'Ilustração tridimensional de uma pessoa em frente ao computador com olhos fechados e uma das mãos sobre o olho direito, em expressão de frustração.',
  }, 
  {
    title: 'Pensado para ser simples e poderoso',
    body: 'Feedget foi criado para se integrar em qualquer lugar.  Ele fica no cantinho, evitando ao máximo obstruir o conteúdo do seu site enquanto não estiver em uso.',
    image: simpleImage,
    imageAlt: 'Demonstração de como o widget fica aplicado em um serviço de streaming famoso.',
    invertOrder: true,
  },
  {
    title: 'Com facilidades que realmente importam',
    body: 'Aqui você só precisa descrever o que está acontecendo. E se precisar, o Feedget pode preparar uma captura de tela e enviar junto do seu feedback. Fácil, fácil.',
    image: featureImage,
    imageAlt: 'Demonstração do formulário de envio de feedback, mostrando com mais ênfase a função de obter captura de tela',
    imageColoredBg: true,
  }
];

export function Brief() {
  return (
    <section id='briefSection'
      className='px-6 py-[96px] bg-light-surface-primary text-light-text-primary dark:bg-dark-surface-primary dark:text-dark-text-primary flex flex-col'>
      
      {
        briefItems.map((brief, index) => {
          return (
            <div key={index}
              className={`${brief.invertOrder ? 'md:flex-row-reverse' : 'md:flex-row'} mb-16 last:mb-0 flex landing-inner-section flex-col items-center`}>
              <div className={`${brief.imageColoredBg && 'bg-brand-color bg-opacity-50'} max-w-[80%] md:max-w-[200px] md:min-w-[300px] overflow-hidden rounded-xl mb-8 md:mb-0`}>
                <img src={brief.image}
                  alt={brief.imageAlt}
                  className='mx-auto'/>
              </div>

              <div className={`${brief.invertOrder ? 'md:mr-8': 'md:ml-8'} w-full`}>
                <strong className='landing-h2 mb-8'>
                  {brief.title}
                </strong>
                <p className='landing-p'>
                  {brief.body}
                </p>
              </div>
            </div>
          );
        })
      }
    </section>
  );
}
