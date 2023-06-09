
import { format } from 'date-fns'

export function formatToArray (data: any) {
  const myData = Object.keys(data).map(key => {
    return { [key]: data[key] }
  })
  return myData
}

export function formatData (data: any) {
  const formatedObj: any = {}
  data?.list?.map((list: any) => {
    if (formatedObj?.[format(new Date(list.dt * 1000), 'EEEE')]) {
      formatedObj[format(new Date(list?.dt * 1000), 'EEEE')].push(list)
    } else {
      formatedObj[format(new Date(list?.dt * 1000), 'EEEE')] = [list]
    }
  })

  return formatToArray(formatedObj)
}
