import { IconButton } from 'components';
import { ReactComponent as Play } from '../../assets/play.svg';
/* import { ReactComponent as Pause } from "../../assets/pause.svg"; */
import { ReactComponent as PlayBack } from '../../assets/play-back.svg';
import { ReactComponent as PlayForward } from '../../assets/play-forward.svg';
import { PlayerControllProps } from './PlayerControll.types';

export const PlayerControll = (props: PlayerControllProps) => {
  const { isPlaying, onPlayClick = () => null } = props;

  const buttons = [
    {
      id: '1',
      icon: <PlayBack />,
      title: 'Ir para a faixa anterior',
      onClick: () => null,
    },
    {
      id: '2',
      icon: isPlaying ? null : <Play />,
      title: isPlaying ? 'Pausar' : 'Tocar',
      onClick: isPlaying ? () => null : onPlayClick,
    },
    {
      id: '3',
      icon: <PlayForward />,
      title: 'Ir para a próxima faixa',
      onClick: () => null,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-12">
      {buttons.map((button) => (
        <IconButton key={button.id} {...button} />
      ))}
    </div>
  );
};
