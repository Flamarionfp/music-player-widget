import { MusicPlayer, MusicPlayerProps } from "widgets";
function App() {
  const musicPlayerDefaultProps: MusicPlayerProps = {
    trackImagePath: "src/assets/song-image.png",
    trackName: "Maura",
    artistName: "Manoel Gomes",
    duration: 4000,
    trackUrl: "#",
  };

  return (
    <div className="bg-slate-500 h-screen w-screen flex justify-center items-center gap-6">
      <MusicPlayer {...musicPlayerDefaultProps} />
      <MusicPlayer {...musicPlayerDefaultProps} variant="compact" />
    </div>
  );
}

export default App;
