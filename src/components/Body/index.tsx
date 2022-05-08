import imageBugy from '../../assets/bugy/image.png';
import typefaceBugy from '../../assets/bugy/typeface.png';

export function Body() {

  return (
    <main className='pt-[96px] md:pt-[120px] pb-[calc(32px+32px+48px)] px-6 max-w-[calc(24px+24px+1120px)] mx-auto opacity-50'>
      <div className='py-6 px-8 sm:py-12 sm:px-14 rounded-lg mb-8 text-light-text-secondary dark:text-dark-text-secondary bg-light-surface-primary dark:bg-dark-surface-primary'>
        <span>
          {'Experimente enviar um feedback de um '}
          <em>
            {'bug'}
          </em>
          {' na aplicação 🐛'}
        </span>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8'>
        {
          [...Array(4)].map(() => {
            return (
              <>
                <div
                  className='w-full rounded-lg mr-3 text-light-text-primary dark:text-dark-text-primary bg-light-surface-primary dark:bg-dark-surface-primary'>
                  <img src={imageBugy}
                    alt='Bugy Image Placement' 
                    className='ml-6 mt-[11px]' />
                  <span className='px-6 py-6 block font-script text-xl md:text-2xl'>{'Bugy Image Placement'}</span>
                </div>

                <div className='w-full rounded-lg text-light-text-primary dark:text-dark-text-primary bg-light-surface-primary dark:bg-dark-surface-primary'>
                  <img src={typefaceBugy}
                    alt='Bugy Typeface'
                    className='ml-6 mt-[11px]' />
                  <span className='px-6 py-6 block font-script text-xl md:text-2xl'>{'Bugy Typeface'}</span>
                </div>
              </>
            );
          })
        }
      </div>

    </main>
  );
}
