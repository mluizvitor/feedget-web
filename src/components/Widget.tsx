import {ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }

  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end shadow-lg'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button onClick={toggleWidgetVisibility}
        className='bg-brand-color hover:bg-brand-hover text-brand-onBrand transition-colors
          rounded-full px-3 h-12 flex items-center group shadow-brandShadow
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-hover'>
        <ChatTeardropDots className='h-6 w-6'
          weight='duotone'/>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2' />
          {'Feedback'}
        </span>
      </Popover.Button>
    </Popover>
  );
}