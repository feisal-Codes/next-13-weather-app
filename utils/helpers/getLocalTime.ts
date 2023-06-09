export const getLocalTime = (unix: string) => {
  let date = new Date(Number(unix) * 1000)
  return date.toString()
}
