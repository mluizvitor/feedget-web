import { Switch } from '@headlessui/react';
import { GithubLogo, LinkedinLogo, Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link, animateScroll } from 'react-scroll';

export function Header() {
  const [darkThemeActive, setDarkThemeActive] = useState(() => {
    const config = localStorage.getItem('@feedget:datkTheme');

    if(config) {
      const parseConfig: boolean = JSON.parse(config);

      if (parseConfig) {
        document.documentElement.classList.add('dark');
        return true;
      }
    }

    return false;
  });

  function darkActivator() {
    const appRoot = document.documentElement;
    
    if (darkThemeActive) {
      setDarkThemeActive(false);
      appRoot.classList.remove('dark');
      
      return;
    }

    setDarkThemeActive(true);
    appRoot.classList.add('dark');
    return;
  }

  useEffect(() => {
    localStorage.setItem('@feedget:datkTheme', JSON.stringify(darkThemeActive));
  }, [darkThemeActive]);

  return (
    <header className='bg-light-surface-primary dark:bg-dark-surface-secondary shadow-md h-[64px] md:h-[72px] px-6 py-3 flex fixed w-full justify-center gap-8 z-[16]'>
      <div className='max-w-[1120px] flex flex-1 items-center justify-between gap-6'>
        
        <Link to=''
          onClick={animateScroll.scrollToTop}
          smooth={true}
          tabIndex={1}>
          <svg className='fill-light-text-primary dark:fill-dark-text-primary h-[32px] md:w-[138px] cursor-pointer'
            version='1.1'
            viewBox='0 0 860 200'>
            <path d='m100 0c-55.133 0-100 44.866-100 100v84.193c-0.1149 8.6738 7.1328 15.92 15.807 15.805l-0.10742 2e-3h84.301c55.133 0 100-44.866 100-100 0-55.133-44.866-100-100-100zm0 16c46.486 1e-6 84 37.513 84 84 0 46.486-37.513 84-84 84h-84v-84c0-46.486 37.513-84 84-84zm-47.995 76c-6.6274 0-12 5.3726-12 12 0 6.6274 5.3726 12 12 12s12-5.3726 12-12c0-6.6274-5.3726-12-12-12zm48 0c-6.6274 0-12 5.3726-12 12 0 6.6274 5.3726 12 12 12 6.6274 0 12-5.3726 12-12 0-6.6274-5.3726-12-12-12zm48 0c-6.6274 0-12 5.3726-12 12 0 6.6274 5.3726 12 12 12s12-5.3726 12-12c0-6.6274-5.3726-12-12-12z'
              strokeLinecap='round'
              strokeLinejoin='round'/>
            <path d='m253.84 39v115.79h17.471v-50.49h49.189v-14.982h-49.189v-35.281h54.334v-15.039zm331.27 0v43.027h-1.0195c-3.0531-5.3713-8.8198-15.209-24.99-15.209-20.976 0-36.41 16.566-36.41 44.723 0 28.1 15.208 44.949 36.297 44.949 15.831 0 22.05-9.6681 25.103-15.209h1.4141v13.512h16.51v-115.79zm238.6 8.1426v20.807h-12.721v13.568h12.721v51.281c-0.0565 15.775 11.987 23.408 25.33 23.125 5.3713-0.0565 8.9898-1.0736 10.969-1.8086l-3.0527-13.965c-1.1308 0.22616-3.2236 0.73438-5.9375 0.73438-5.4844 0-10.402-1.8085-10.402-11.59v-47.777h17.811v-13.568h-17.811v-20.807zm-448.02 19.676c-24.199 0-40.143 18.43-40.143 45.117 0 26.969 15.718 44.611 41.33 44.611 18.941 0 32.341-9.3299 36.185-23.465l-16-2.8828c-3.0532 8.1983-10.404 12.381-20.016 12.381-14.474 0-24.2-9.3853-24.652-26.121h61.742v-5.9922c0-31.38-18.771-43.648-38.447-43.648zm93.517 0c-24.199 0-40.144 18.43-40.144 45.117 0 26.969 15.718 44.611 41.33 44.611 18.941 0 32.341-9.3299 36.185-23.465l-16-2.8828c-3.0531 8.1983-10.404 12.381-20.016 12.381-14.474 0-24.198-9.3853-24.65-26.121h61.74v-5.9922c0-31.38-18.769-43.648-38.445-43.648zm189.52 0c-20.976 0-36.41 16.565-36.41 44.213 0 27.704 15.773 42.461 36.297 42.461 15.944 0 22.107-8.9884 25.16-14.529h1.0742v17.074c0 13.4-9.3276 19.336-22.162 19.336-14.078 0-19.564-7.0672-22.56-11.873l-14.529 5.9941c4.5797 10.46 16.17 19.506 36.92 19.506 22.107 0 39.182-10.12 39.182-32.283v-88.767h-16.566v14.078h-1.2441c-2.9966-5.3713-8.9898-15.209-25.16-15.209zm101.88 0c-24.199 0-40.143 18.43-40.143 45.117 0 26.969 15.718 44.611 41.33 44.611 18.941 0 32.341-9.3299 36.185-23.465l-16-2.8828c-3.0531 8.1983-10.404 12.381-20.016 12.381-14.474 0-24.2-9.3853-24.652-26.121h61.742v-5.9922c0-31.38-18.771-43.648-38.447-43.648zm-384.81 13.965c13.117 0 21.711 9.7249 21.768 23.012h-45.119c0.73502-12.326 9.6124-23.012 23.352-23.012zm93.515 0c13.117 0 21.713 9.7249 21.77 23.012h-45.119c0.73502-12.326 9.6104-23.012 23.35-23.012zm291.41 0c13.117 0 21.711 9.7249 21.768 23.012h-45.119c0.73502-12.326 9.6124-23.012 23.352-23.012zm-198 0.39453c14.757 0 22.672 12.044 22.672 30.193 0 18.262-8.0846 30.701-22.672 30.701-15.096 0-22.955-13.287-22.955-30.701 0-17.245 7.6893-30.193 22.955-30.193zm99.623 0c14.757 0 22.672 12.043 22.672 29.627 0 17.923-8.0846 28.666-22.672 28.666-15.096 0-22.955-11.591-22.955-28.666 0-16.679 7.6893-29.627 22.955-29.627z'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='hidden md:block'/>
          </svg>
        </Link>

        <div className='flex items-center gap-4'>
          <a href='https://github.com/mluizvitor/feedget-web'
            target= '_blank'
            rel='noreferrer noopener'
            className='flex gap-4 bg-light-surface-secondary text-light-text-primary dark:bg-dark-surface-secondary-hover dark:text-dark-text-primary font-medium px-2 py-2 md:px-6 md:py-3 rounded-full items-center cursor-pointer'>
            <GithubLogo size={24} />
            <span className='hidden md:inline'>
              {'Feedget no Github'}
            </span> 
          </a>

          <a href='https://linkedin.com/in/mluizvitor/'
            target= '_blank'
            rel='noreferrer noopener'
            className='flex gap-4 bg-light-surface-secondary text-light-text-primary dark:bg-dark-surface-secondary-hover dark:text-dark-text-primary font-medium px-2 py-2 md:px-6 md:py-3 rounded-full items-center cursor-pointer'>
            <LinkedinLogo size={24} />
            <span className='hidden md:inline'>
              {'Vitor Monteiro no LinkedIn'}
            </span>
          </a>
          <Switch
            id='darkThemeSwitcher'
            checked={darkThemeActive}
            onChange={darkActivator}
            className={`${
              darkThemeActive ? 'bg-brand-color' : 'bg-light-surface-secondary-hover'
            } relative inline-flex h-8 w-[48px] md:h-9 md:w-[64px] items-center rounded-full`}>
            <span className='sr-only'>{'Tema escuro'}</span>
            <span
              className={`${
                darkThemeActive ? 'translate-x-5 md:translate-x-8' : 'translate-x-1'
              } transform rounded-full
                bg-light-surface-primary dark:bg-brand-on-brand
                h-6 w-6 md:h-7 md:w-7 flex items-center justify-center
                transition-transform
                `}>
              {
                darkThemeActive 
                  ? 
                  <Moon weight='bold'
                    className='text-light-text-primary h-5 w-5' />
                  :
                  <Sun weight='bold'
                    className='h-5 w-5' />
              }
            </span>
          </Switch>
        </div>
      </div>
    </header>
  );
}
