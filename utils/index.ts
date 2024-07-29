export function getFileExtension(url: string) {
  return url.substring(url.lastIndexOf('.') + 1)
}
