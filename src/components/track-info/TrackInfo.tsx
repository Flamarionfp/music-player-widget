import { FULL_RESIZABLE } from "constants";
import { truncate } from "helpers";
import { TrackInfoProps } from "./TrackInfo.types";

export const TrackInfo = (props: TrackInfoProps) => {
  const { variant, artistName, trackImagePath, trackName } = props;

  const trackImageAlt = `${trackName} de ${artistName}`;

  const containerStyle = variant === FULL_RESIZABLE && "flex-col";

  function getImageStyle() {
    if (variant === FULL_RESIZABLE) {
      return "w-full h-[190px] object-contain hover:scale-90 transition duration-500";
    }

    return "w-20";
  }

  return (
    <div className={`flex gap-7 ${containerStyle}`}>
      <img
        className={getImageStyle()}
        alt={trackImageAlt}
        src={trackImagePath}
      />
      <header className="w-full flex flex-col justify-center">
        <h1 className="font-bold text-2xl text-[#E1E1E6]">
          {truncate(trackName, 20)}
        </h1>
        <h2 className="font-extralight text-lg text-[#E1E1E6]">
          {truncate(artistName, 30)}
        </h2>
      </header>
    </div>
  );
};
