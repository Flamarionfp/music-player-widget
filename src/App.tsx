import { MusicPlayer } from 'widgets';
import { MusicPlayerProps } from 'widgets/music-player/MusicPlayer.types';
function App() {
  const musicPlayerDefaultProps: MusicPlayerProps = {
    trackImagePath: 'song-image.png',
    trackName: 'Maura',
    artistName: 'Manoel Gomes',
    duration: 4000,
    trackUrl: 'http://edge.iono.fm/xice/162_medium.aac',
  };

  return (
    <div className="bg-slate-500 h-screen w-screen flex flex-col lg:flex-row justify-center items-center gap-6">
      <MusicPlayer {...musicPlayerDefaultProps} variant="horizontal-resizable" />
    </div>
  );
}

export default App;
