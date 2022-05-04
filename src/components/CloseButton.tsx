import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button className='top-3 right-3 absolute text-zinc-400 hover:text-zinc-100
      w-8 h-8 rounded-full flex items-center justify-center
      focus:outline-brand-hover focus:outline-none focus:text-zinc-100'
    title='Fechar formulário de Feedback'>
      <X className='w-4 h-4'
        weight='bold'/>
    </Popover.Button>
  );
}