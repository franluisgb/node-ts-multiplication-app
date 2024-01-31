import fs from 'fs'

export interface SaveFileUseCase {
  run: (options: SaveFileOptions) => boolean
}

export interface SaveFileOptions {
  fileContent: string
  fileDestination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor(/** repository: StorageRepository */) {}

  run({ fileContent, fileDestination = 'outputs', fileName = 'table' }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true })
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
      console.log('File create!')
      return true
    } catch (error) {
      return false  
    }
  }
}