const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the file name? Check it again. (It will be the root path.)${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn add:page [fileName]${logFontReset}`

const fs = require('fs')
const pickCode = fs.readFileSync(`${process.cwd()}/src/types/type/index.ts`, 'utf8')
const pickLayoutType = pickCode
  .split('\n')
  .filter((code) => code.includes('chooseLayout:'))[0]
  .replace(/ /g, '')
  .replace(/'/g, '')
  .replace('chooseLayout:', '')
  .split('|')
  .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
const pickPagesType = pickCode
  .split('\n')
  .filter((code) => code.includes('pages:'))[0]
  .replace(/ /g, '')
  .replace(/'/g, '')
  .replace('pages:', '')
  .split('|')

module.exports = {
  prompt: async ({ prompter, args }) => {
    const { name } = args
    if (!name) throw new Error(errorMessage)

    const questions = [
      {
        type: 'select',
        name: 'componentName',
        message: 'Please choose component name.\n(🐶 Convert to pascal case, from the list below.)',
        choices: pickPagesType
      },
      {
        type: 'select',
        name: 'chooseLayout',
        message: 'Please choose layout component.',
        choices: pickLayoutType
      },
      {
        type: 'input',
        name: 'pageTitle',
        message: 'Please add page title. (Empty OK.🙆‍♂️)\n'
      },
      {
        type: 'input',
        name: 'pageDescription',
        message: 'Please add page description.　(Empty OK.🙆‍♂️)\n'
      }
    ]
    const answers = await prompter.prompt(questions)
    answers.chooseLayout = answers.chooseLayout.charAt(0).toLowerCase() + answers.chooseLayout.slice(1)
    answers.name = name

    return { ...answers }
  }
}
