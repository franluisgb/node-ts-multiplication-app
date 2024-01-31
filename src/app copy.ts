import fs from 'fs'
import { yarg } from './config/plugins/args.plugin'

const { b:base, l:limit, s:showTable } = yarg

// const base: number = yarg.b
let outputMessage: string = ''
const headerMessage: string = `==================================
          Tabla del ${base}
==================================\n
`
const outputPath: string = 'outputs'

for (let index = 1; index <= limit; index++) {
  const multiplication = base * index
  if (index !== limit) {
    outputMessage += `${base} x ${index} = ${multiplication}\n`
  } else {
    outputMessage += `${base} x ${index} = ${multiplication}`
  }
}

outputMessage = headerMessage + outputMessage

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)

if (showTable) {
  console.log(outputMessage)
}
console.log('File create!')