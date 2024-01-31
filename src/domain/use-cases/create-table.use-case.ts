export interface CreateTableUseCase {
  run: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
  base: number
  limit?: number
}

export class CreateTable implements CreateTableUseCase {
  constructor(
    /**
     * DI / Dependency Injection
     */
  ) {}

  run({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage: string = ''
    for (let index = 1; index <= limit; index++) {
      const multiplication = base * index
      if (index !== limit) {
        outputMessage += `${base} x ${index} = ${multiplication}\n`
      } else {
        outputMessage += `${base} x ${index} = ${multiplication}`
      }
    }
    return outputMessage
  }
}