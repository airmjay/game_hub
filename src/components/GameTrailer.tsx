interface Props{
  url : string | undefined,
  preview : string | undefined
}
const GameTrailer = ( {url, preview} : Props  ) => {
  return (
    <video
      controls
      title="naruto"
      src={url}
      poster={preview}
    > No video preview</video>
  );
};

export default GameTrailer;
