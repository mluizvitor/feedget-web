import { Brief } from './Sections/Brief';
import { Head } from './Sections/Head';
import { Links } from './Sections/Links';
import { Steps } from './Sections/Steps';
import { Techs } from './Sections/Techs';

export function Body() {
  return (
    <main className='pt-[64px] md:pt-[72px]'>

      <Head />

      <Brief />

      <Steps />

      <Techs />

      <Links />

      <footer className='flex items-center min-h-[400px] p-8 bg-light-surface-secondary-hover dark:bg-dark-surface-secondary'>
        <div className='w-full max-w-[1120px] mx-auto'>

          <p>{'Criado por Luiz Vitor Monteiro'}</p>

          <p className='mt-6'>{'Baseado na aplicação Feedback Widget, proposto pela Rocketseat no evento NLW Return'}</p>
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
