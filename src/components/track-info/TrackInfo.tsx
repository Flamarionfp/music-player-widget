import { COMPACT_VARIANT } from "constants";
import { truncate } from "helpers";
import { TrackInfoProps } from "./TrackInfo.types";

export const TrackInfo = (props: TrackInfoProps) => {
  const { variant, artistName, trackImagePath, trackName } = props;

  const trackImageAlt = `${trackName} de ${artistName}`;

  const containerStyle = variant === COMPACT_VARIANT && "flex-col";

  const imageStyle =
    variant === COMPACT_VARIANT
      ? "w-full h-[190px] object-contain hover:scale-90 transition duration-500"
      : "w-20";

  return (
    <div className={`flex gap-7 ${containerStyle}`}>
      <img className={imageStyle} alt={trackImageAlt} src={trackImagePath} />
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
