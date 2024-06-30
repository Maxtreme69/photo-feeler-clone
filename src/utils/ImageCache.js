// utils/imageCache.js
import generateHash from './GenerateHash';

const imageCache = new Map();

export const getCachedImageURL = async (file) => {
  const hash = await generateHash(file);
  if (imageCache.has(hash)) {
    return imageCache.get(hash);
  } else {
    const newURL = URL.createObjectURL(file);
    imageCache.set(hash, newURL);
    return newURL;
  }
};
