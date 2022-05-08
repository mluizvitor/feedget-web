export function Header() {
  return (
    <header className='bg-zinc-900 h-[72px] px-6 py-3 flex fixed w-full justify-center gap-8j'>
      <div className='max-w-[1120px] flex flex-1 items-center justify-between'>
        <div className='h-9 w-full max-w-[160px] bg-zinc-800 rounded-lg' />
        
        <nav className='hidden sm:flex flex-1 justify-center gap-8'>
          {
            [...Array(4)].map(() => (
              <>
                <div className='h-4 min-w-[40px] w-full max-w-[100px] rounded-lg bg-zinc-800' />
              </>
            ))
          }
        </nav>

        <div className='flex items-center'>
          {
            [...Array(2)].map(() => (
              <>
                <div className='bg-zinc-800 rounded-lg h-8 w-8 mr-4'/>
              </>
            ))
          }
          <div className='bg-zinc-800 rounded-[24px] h-12 w-12'/>
        </div>
      </div>
    </header>
  );
}
