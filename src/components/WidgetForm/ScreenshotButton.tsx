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
        className='screenshot-button-remove'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Trash weight='fill'
          className='w-4 h-4'/>
      </button>
    );
  }
  
  return (
    <button type='button'
      onClick={handleTakeScreenshot}
      className='screenshot-button-take'>
      {
        isTakingScreenshot
          ?
          <Loading/>
          :
          <Camera className='w-6 h-6'/>
      }
    </button>
  );
}