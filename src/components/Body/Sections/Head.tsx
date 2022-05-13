import happyImage from '../../../assets/home/happy.webp';
import { Link } from 'react-scroll';

export function Head() {
  return (
    <section className='flex items-center px-6 min-h-[60vh] md:min-h-[80vh] py-[64px] bg-brand-color text-brand-on-brand'>
      <div className='landing-inner-section flex-col md:flex-row justify-between'>
        <div className='w-full md:max-w-[60%] text-center md:text-left'>
          <h1 className='text-3xl leading-[130%] md:text-[48px] font-black'>
            {'Receba feedbacks com rapidez e praticidade'}
          </h1>
          <p className='landing-p mt-8'>
            {'Com o Feedget seus usuários conseguem enviar ideias, comentários e relatos de problemas com poucos cliques, tão rápido quanto um estalar de dedos (ou quase).'}
          </p>

          <Link to='briefSection'
            smooth={true}
            tabIndex={1}
            className='rounded-full font-black tracking-wide bg-brand-on-brand text-brand-color text-xl px-6 h-14 mt-8 inline-flex items-center justify-center cursor-pointer'>
            {'Conheça o Feedget'}
          </Link>
        </div>

        <div className='md:max-w-[320px]'>
          <img src={happyImage}
            alt='Ilustração em três dimensões de um homem sentado no chão com o celular na mão com feição de alegria'
            className='mx-auto'/>
        </div>
      </div>
    </section>
  );
}