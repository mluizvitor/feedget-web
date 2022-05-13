import { ArrowSquareOut, GithubLogo, LinkedinLogo } from 'phosphor-react';

export function Links() {
  return (
    <section className='px-6 py-[128px]'>
      <div className='landing-inner-section items-center flex-col gap-0'>

        <strong className='landing-h2 text-center flex-1 mb-4'>
          {'Veja o projeto no Github'}
        </strong>

        <a href='https://github.com/mluizvitor/feedget-web'
          target= '_blank'
          rel='noreferrer noopener'
          className='h-14 flex gap-4 bg-brand-color text-brand-on-brand font-medium px-6 rounded-full items-center'>
          <GithubLogo size={24} />
          {'Feedget no Github'}
        </a>

        <strong className='landing-h2 text-center flex-1 mb-4 mt-24'>
          {'Contate o autor no LinkedIn'}
        </strong>

        <a href='https://linkedin.com/in/mluizvitor/'
          target= '_blank'
          rel='noreferrer noopener'
          className='h-14 flex gap-4 bg-brand-color text-brand-on-brand font-medium px-6 rounded-full items-center'>
          <LinkedinLogo size={24} />
          {'Vitor Monteiro no LinkedIn'}
        </a>
      </div>
    </section>
  );
}