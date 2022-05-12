import happyImage from '../../assets/home/happy.webp';

export function Body() {
  return (
    <main className='pt-[64px] md:pt-[72px]'>

      <section className='flex items-center px-6 min-h-[60vh] md:min-h-[70vh] py-[64px] bg-brand-color text-brand-on-brand'>
        <div className='max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row gap-16'>
          <div className='w-full md:mt-0'>
            <h1 className='text-3xl leading-[130%] md:text-[48px] font-black'>
              {'Receba feedbacks com'}
              <br />
              {'rapidez e praticidade'}
            </h1>
            <p className='text-md leading-[150%] md:text-xl font-regular mt-8'>
              {'Com o Feedget seus visitantes conseguem enviar ideias, comentários e relatos de problemas com poucos cliques, tão rápido quanto um estalar de dedos (ou quase).'}
            </p>

            <button className='rounded-full bg-brand-on-brand text-brand-color text-xl px-6 h-14 mt-8'>
              {'Conheça o Feedget'}
            </button>
          </div>

          <div className='max-w-[200px] sm:min-w-[300px] hidden md:block'>
            <img src={homeImage}
              alt='Ilustração em três dimensões de um homem sentado no chão com o celular na mão com feição de alegria'
              className='mx-auto'/>
          </div>
        </div>
        
        
      </section>

      <footer className='flex items-center min-h-[400px] p-8 bg-light-surface-secondary dark:bg-dark-surface-secondary'>
        <div className='w-full max-w-[1120px] mx-auto'>

          <p>{'Criado por Luiz Vitor Monteiro'}</p>

          <p className='mt-6'>{'Baseado na aplicação Feedget Widget, proposto pela Rocketseat no evento NLW Return'}</p>
          <p>{'Design original por Ilana Mallak'}</p>

          <p className='mt-6'>
            {'Illustration by '}
            <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'
              className='underline underline-offset-2'>
              {'Icons 8'}
            </a>
            {' from '}
            <a href='https://icons8.com/illustrations'
              className='underline underline-offset-2'>
              {'Ouch!'}
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}
