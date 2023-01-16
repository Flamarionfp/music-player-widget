import { IconButton } from "components";
import { ReactComponent as Play } from "../../assets/play.svg";
/* import { ReactComponent as Pause } from "../../assets/pause.svg"; */
import { ReactComponent as PlayBack } from "../../assets/play-back.svg";
import { ReactComponent as PlayForward } from "../../assets/play-forward.svg";
import { PlayerControllProps } from "./PlayerControll.types";

export const PlayerControll = (props: PlayerControllProps) => {
  const { isPlaying } = props;

  return (
    <div className="flex justify-center items-center gap-12">
      <IconButton
        onClick={() => null}
        icon={<PlayBack />}
        title="Ir para a faixa anterior"
      />
      <IconButton
        onClick={() => null}
        icon={isPlaying ? null : <Play />}
        title={isPlaying ? "Pausar" : "Tocar"}
      />
      <IconButton
        onClick={() => null}
        icon={<PlayForward />}
        title="Ir para a próxima faixa"
      />
    </div>
  );
};
