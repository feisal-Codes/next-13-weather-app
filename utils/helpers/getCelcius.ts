export const getCelcius = (kelvin: string) => {
  if (!kelvin) {
    return
  }
  let celcius = Math.round(Number(kelvin) - 273.15)
  return celcius
}
