export interface BuildProps {
  id: number
  name: string
  status: string
  cost: number
  soldPrice: number
  listDate: string
  soldDate: string
  parts: Parts
}

export interface Parts {
  cpu: Cpu
  motherboard: Motherboard
  ram: Ram[]
  gpu: Gpu
  storage: Storage[]
  psu: Psu
  network: Network
  case: Case
}

export interface Cpu {
  brand: string
  model: string
  price: number
}

export interface Motherboard {
  brand: string
  model: string
  price: number
}

export interface Ram {
  format: string
  brand: string
  memory: number
  count: number
}

export interface Gpu {
  brand: string
  model: string
  memory: number
  price: number
}

export interface Storage {
  type: string
  brand: string
  memory: number
  count: number
}

export interface Psu {
  brand: string
  wattage: number
  price: number
}

export interface Network {
  brand: string
  model: string
  price: number
}

export interface Case {
  brand: string
  model: string
  size: string
  price: number
}
