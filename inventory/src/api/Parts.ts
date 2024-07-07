import { functions } from '@/firebase/firebase'
import { httpsCallable } from 'firebase/functions'

type Part = {
  type: string
  brand: string
  model: string
  price: number
  inUse: boolean
}

class Parts {
  static async add({
    type,
    brand,
    model,
    price,
  }: Omit<Part, 'inUse'>): Promise<any> {
    const addPartFunction = httpsCallable(functions, 'addPart')
    const result = await addPartFunction({
      type,
      brand,
      model,
      price,
      inUse: false,
    })
    return result.data
  }

  static async get(): Promise<any> {
    const getPartsFunction = httpsCallable(functions, 'getParts')
    const result = await getPartsFunction()
    return result.data
  }
}

export default Parts
