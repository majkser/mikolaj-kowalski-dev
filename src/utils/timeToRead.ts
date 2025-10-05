export function timeToRead(content: string) {
  const wordsPerMinute = 200; // avg reading speed
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
