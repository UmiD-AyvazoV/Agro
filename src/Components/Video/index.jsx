import video from '../../Assets/img/Banner/quba.mp4'

const Video = () => {
  return (
    <video autoPlay='autoplay' muted width="100%">
      <source src={video} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;