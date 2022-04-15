export interface IGun {
  setName(name: string): void
  setPower(power: number): void

  getName(): string
  getPower(): number
}

export class Gun implements IGun {
  constructor(private name: string, private power: number) { }

  setName(name: string): void {
    this.name = name
  }

  setPower(power: number): void {
    this.power = power
  }

  getName(): string {
    return this.name
  }

  getPower(): number {
    return this.power
  }
}



const gun = (name: string) => {
  console.log('hola')
}