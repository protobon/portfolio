export const getFile = (path) => {
    const baseUrl = new URL(`/portfolio/assets/`, import.meta.url).href;
    const regex = /(.*)-[a-z0-9]+.(jpg|png|pdf|svg)/; // Adjust regex for supported image formats
    const match = regex.exec(path); // Attempt to match the original filename with a hashed version
  
    if (match) {
      return `${baseUrl}${match[1]}.${match[2]}`; // Return the reconstructed path with the hashed filename
    } else {
      return new URL(`/assets/${path}`, import.meta.url).href; // Fallback to original path if no match (optional)
    }
  };