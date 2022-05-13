import { GithubLogo, LinkedinLogo } from 'phosphor-react';

export function Links() {
  return (
    <section className='px-6 py-[128px]'>
      <div className='landing-inner-section items-center flex-col'>

        <strong className='landing-h2 text-center flex-1 mb-8'>
          {'Veja o projeto no Github'}
        </strong>

        <a href='https://github.com/mluizvitor/feedget-web'
          target= '_blank'
          rel='noreferrer noopener'
          className='header-bar-button h-14 px-6 m-0 bg-brand-color dark:bg-brand-color text-brand-on-brand dark:text-brand-on-brand'>
          <GithubLogo size={24} 
            className='mr-4' />
          {'Feedget no Github'}
        </a>

        <strong className='landing-h2 text-center flex-1 mb-8 mt-24'>
          {'Contate o autor no LinkedIn'}
        </strong>

        <a href='https://linkedin.com/in/mluizvitor/'
          target= '_blank'
          rel='noreferrer noopener'
          className='header-bar-button h-14 px-6 m-0 bg-brand-color dark:bg-brand-color text-brand-on-brand dark:text-brand-on-brand'>
          <LinkedinLogo size={24}
            className='mr-4' />
          {'Vitor no LinkedIn'}
        </a>
      </div>
    </section>
  );
}