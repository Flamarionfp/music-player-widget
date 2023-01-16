import { useMobile } from "hooks";
import { MusicPlayer, MusicPlayerProps } from "widgets";
function App() {
  const { isDesktop } = useMobile();

  const musicPlayerDefaultProps: MusicPlayerProps = {
    trackImagePath: "song-image.png",
    trackName: "Maura",
    artistName: "Manoel Gomes",
    duration: 4000,
    trackUrl: "#",
  };

  return (
    <div className="bg-slate-500 h-screen w-screen flex flex-col lg:flex-row justify-center items-center gap-6">
      <MusicPlayer {...musicPlayerDefaultProps} />

      {isDesktop && (
        <MusicPlayer {...musicPlayerDefaultProps} variant="full-resizable" />
      )}

      <MusicPlayer
        {...musicPlayerDefaultProps}
        variant="horizontal-resizable"
      />
    </div>
  );
}

export default App;
