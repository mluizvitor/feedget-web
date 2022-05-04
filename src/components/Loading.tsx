import { CircleNotch } from 'phosphor-react';

export function Loading() {
  return (
    <div className='loading-placeholder'>
      <CircleNotch weight='bold'
        className='loading-placeholder-icon'/>
    </div>
  );
}