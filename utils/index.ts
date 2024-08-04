export function getFileExtension(url: string) {
  return url.substring(url.lastIndexOf('.') + 1)
}

export const genID = (length = 16) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}
