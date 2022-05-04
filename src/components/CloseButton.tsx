import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button className='top-3 right-3 header-button'
      title='Fechar formulário de Feedback'>
      <X className='w-4 h-4'
        weight='bold'/>
    </Popover.Button>
  );
}