export function Header() {

  function darkActivator() {
    const appRoot = document.documentElement;

    const hasDarkClass = appRoot.classList.contains('dark');

    if (hasDarkClass) {
      appRoot.classList.remove('dark');
      return null;
    }

    appRoot.classList.add('dark');
    return null;
  }

  return (
    <header className='bg-light-surface-primary dark:bg-dark-surface-secondary shadow-md h-[72px] px-6 py-3 flex fixed w-full justify-center gap-8 z-[16]'>
      <div className='max-w-[1120px] flex flex-1 items-center justify-between gap-8'>
        <div className='h-9 w-full max-w-[160px] bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover rounded-lg' />
        
        <nav className='hidden sm:flex flex-1 justify-center gap-8'>
          {
            [...Array(4)].map((e, i) => (
              <div key={i}
                className='h-4 min-w-[40px] w-full max-w-[100px] rounded-lg bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover' />
            ))
          }
        </nav>

        <div className='flex items-center'>
          {
            [...Array(2)].map((e,i) => (
              <div key={i}
                className='rounded-lg h-8 w-8 mr-4 bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover'/>
            ))
          }
          
          <div onClick={darkActivator}
            className='rounded-[24px] h-12 w-12 bg-light-surface-secondary-hover dark:bg-dark-surface-secondary-hover'/>
        </div>
      </div>
    </header>
  );
}
