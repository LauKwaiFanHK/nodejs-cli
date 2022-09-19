// Since I am using ES6, need to provide file extension '.js' to import a file
import MusicPlayer from "./musicPlayer.js";

class MusicPlayerConsumer {
    constructor(){
        this.musicPlayer = new MusicPlayer();
    }

    startPlayList(){
        const musicFileName = 'hello.mp3';
        this.musicPlayer.playMusileFile(musicFileName);
    }
}

export default MusicPlayerConsumer;