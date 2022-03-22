import React, { useState} from 'react';
import Sound from 'react-sound';
import song from './song.mp3'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Button, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';


const vol = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      secondary: {
          main: grey[50],
      },
    },
  });
  

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying) => {
        const [isPlaying, setIsPlaying ] = useState(false);

        return(
            <div style={{position: 'absolute', right: '2rem'}}>
                <ThemeProvider theme={vol}>
                <Button variant="outlined" onClick={() => setIsPlaying(!isPlaying)} color="secondary" sx={{padding: '1vh', borderRadius: '100%'}}>{!isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon /> }</Button>
                </ThemeProvider>
                <Sound
                    url={song}
                    playStatus ={
                        isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                    }
                    playFromPosition={300}
                    onLoading = {handleSongLoading}
                    onPlaying={handleSongPlaying}
                    onFinishedPlaying = {handleSongFinishedPlaying} />
            </div>
        )
    }

export default PlaySound;
