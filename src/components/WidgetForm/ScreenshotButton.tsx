import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({screenshot, onScreenshotTook}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshotTook(base64Image);
    
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button type='button'
        onClick={() => onScreenshotTook(null)}
        className='p-1 w-10 h-10 flex items-end justify-end border-transparent
        text-zinc-400 hover:text-zinc-100 transition-colors rounded-md
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-hover'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 200,
        }}>
        <Trash weight='fill'
          className='w-4 h-4'/>
      </button>
    );
  }
  
  return (
    <button type='button'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-hover'>
      {isTakingScreenshot ? <Loading/> : <Camera className='w-6 h-6 text-zinc-100'/>}
    </button>
  );
}