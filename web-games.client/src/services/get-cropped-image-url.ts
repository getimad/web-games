const getCroppedImageUrl = (url: string) => {
  const newUrl = 'https://media.rawg.io/media/crop/600/400/' + url.slice(url.indexOf('games'));
  return newUrl;
};

export default getCroppedImageUrl;
