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
    <Popover className='absolute bottom-6 right-6'>
      <Popover.Panel>Hello Feedget</Popover.Panel>

      <Popover.Button onClick={toggleWidgetVisibility} className='bg-brand-500 hover:bg-brand-400 text-white transition-colors
        rounded-full px-3 h-12
        flex items-center group'>
        <ChatTeardropDots className='h-6 w-6' weight='duotone'/>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2' />
          {'Feedback'}
        </span>
      </Popover.Button>
    </Popover>
  );
}