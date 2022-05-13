import {SiExpress, SiNodedotjs, SiPostgresql, SiRailway, SiReact, SiTailwindcss, SiTypescript, SiVercel} from 'react-icons/si';
import { GenIcon, IconType } from 'react-icons';

interface TechsProps {
  icon?: IconType;
  label: string
}

const techs: TechsProps[] = [
  {
    label: 'ReactJS',
  },
  { 
    label: 'Typescript',
  },
  {
    label: 'Tailwind',
  },
  {
    label: 'Vercel',
  },
  {
    label: 'Node.JS',
  },
  {
    label: 'Express',
  },
  {
    label: 'PostgreSQL',
  },
  {
    label: 'Railway',
  }
];

function renderIcons(data: number) {

  switch(data) {
    case 0: 
      return <SiReact size={24} />;
    
    case 1:
      return <SiTypescript size={24}/>;

    case 2:
      return <SiTailwindcss size={24}/>;

    case 3:
      return <SiVercel size={24}/>;

    case 4:
      return <SiNodedotjs size={24}/>;

    case 5:
      return <SiExpress size={24}/>;

    case 6:
      return <SiPostgresql size={24}/>;

    case 7:
      return <SiRailway size={24}/>;

    default:
      return null;
  }

}

export function Techs() {
  return (
    <section className='px-6 py-[128px] border-y-2 border-y-brand-color border-dashed'>
      <div className='landing-inner-section flex-col'>
        <div>
          <strong className='landing-h1 text-center flex-1 mb-8'>
            {'Poderoso desde o nascimento'}
          </strong>
          <p className='landing-p text-center flex-1'>
            {'Feedget foi construído com as seguintes tecnologias'}
          </p>
        </div>

        <div className='flex flex-row gap-4 md:gap-8 flex-wrap justify-center'>
          {techs.map((tech, index) => {
            return (
              <div key={index}
                className='h-12 px-4 md:h-14 md:px-6 border-2 border-dashed border-brand-color rounded-full flex items-center gap-4'>
                {renderIcons(index)}
                <span className='font-medium text-md md:text-xl'>{tech.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
