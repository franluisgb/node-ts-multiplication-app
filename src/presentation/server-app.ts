import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface RunOption {
  base: number
  limit: number
  showTable: boolean
  fileName: string
  fileDestination: string
}

export class ServerApp {
  static async run({ base, limit, showTable, fileName, fileDestination}: RunOption) {
    console.log('Server running...')
    const table = new CreateTable().run({ base, limit })
    const wasCreated = new SaveFile().run({ fileContent: table, fileName, fileDestination })
    if(showTable) {
      console.log(table)
    }
  }
}