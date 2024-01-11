import React from 'react';
import { Container } from 'react-bootstrap';
import YouTube from 'react-youtube';


const VideoPlayer = () => {
  // Replace 'VIDEO_ID' with the actual ID of your YouTube video
  const videoId = 'bv1om7Sr97I';

  // Options for the YouTube player
  const opts = {
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <>
    <Container fluid className="how-works-body pt-5  d-flex justify-content-center align-items-center flex-column">
    <div className='videoplayer'>
      <YouTube videoId={videoId} opts={opts} />
    </div>
    </Container>
    </>
  );
};

export default VideoPlayer;
