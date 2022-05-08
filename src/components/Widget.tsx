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
    <Popover className='feedback-popover-canvas z-[10]'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button onClick={toggleWidgetVisibility}
        className='feedback-popover-trigger group'>
        <ChatTeardropDots className='h-6 w-6' />
        <span className='feedback-popover-trigger-label group-hover:max-w-xs'>
          <span className='pl-2' />
          {'Feedback'}
        </span>
      </Popover.Button>
    </Popover>
  );
}