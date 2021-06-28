const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the name command? Check it again.${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn frontend:add:hooks [name]${logFontReset}`

module.exports = {
  prompt: async ({ prompter, args }) => {
    const answers = {}
    const { name } = args
    if (!name) throw new Error(errorMessage)
    answers.name = name

    const hooksFnArgNumberQuestion = {
      type: 'input',
      name: 'hooksFnArgNumber',
      message: 'Add hooks function arg? (Please enter a number, 0 <= n, Empty === 0)\n',
      validate: (answer) => !isNaN(Number(answer))
    }
    const hooksFnArgNumberAnswer = await prompter.prompt(hooksFnArgNumberQuestion)
    const { hooksFnArgNumber } = hooksFnArgNumberAnswer
    answers.hooksFnArgNumber = hooksFnArgNumber

    if (hooksFnArgNumber > 0) {
      answers.hooksFnArgDetails = Array.from({ length: answers.hooksFnArgNumber }, (_info, index) => {
        return {
          [`hooksFnArgName${index + 1}`]: undefined,
          [`hooksFnArgType${index + 1}`]: undefined
        }
      })

      const hooksFnArgDetailQuestionTemp = (number) => {
        return [
          {
            type: 'input',
            name: `hooksFnArgName${number}`,
            message: `Please add hooks fn arg${number} name.\n`,
            validate: (answer) => answer !== ''
          },
          {
            type: 'input',
            name: `hooksFnArgType${number}`,
            message: `Please add hooks fn arg${number} type\n`,
            validate: (answer) => answer !== ''
          }
        ]
      }
      const hooksFnArgDetailQuestion = Array.from({ length: answers.hooksFnArgNumber }, (_info, index) => hooksFnArgDetailQuestionTemp(index + 1)).flat()
      const hooksFnArgDetailAnswer = await prompter.prompt(hooksFnArgDetailQuestion)

      answers.hooksFnArgDetails.forEach((info, index, arr) => {
        Object.keys(info).forEach((detailsKey) => {
          Object.keys(hooksFnArgDetailAnswer).forEach((answersKey) => {
            if (answersKey === detailsKey) arr[index][detailsKey] = hooksFnArgDetailAnswer[answersKey]
          })
        })
      })
    }

    const hooksReturnTypeAliasQuestion = {
      type: 'confirm',
      name: 'hooksReturnTypeAlias',
      message: 'Define a type alias for hooks functions return type annotations?\n'
    }
    const hooksReturnTypeAliasAnswer = await prompter.prompt(hooksReturnTypeAliasQuestion)
    const { hooksReturnTypeAlias } = hooksReturnTypeAliasAnswer
    answers.hooksReturnTypeAlias = hooksReturnTypeAlias

    if (hooksReturnTypeAlias) {
      const hooksReturnTypeNumberQuestion = {
        type: 'input',
        name: 'hooksReturnTypeNumber',
        message: 'Please input hooks return types number.\n',
        validate: (answer) => !isNaN(Number(answer)) && answer !== '' && Number(answer) > 0
      }
      const hooksReturnTypeNumberAnswer = await prompter.prompt(hooksReturnTypeNumberQuestion)
      const { hooksReturnTypeNumber } = hooksReturnTypeNumberAnswer
      answers.hooksReturnTypeNumber = Number(hooksReturnTypeNumber)

      if (answers.hooksReturnTypeNumber !== 0) {
        answers.hooksReturnTypeDetails = Array.from({ length: answers.hooksReturnTypeNumber }, (_info, index) => {
          return {
            [`hooksReturnTypeKey${index + 1}`]: undefined,
            [`hooksReturnTypeDetail${index + 1}`]: undefined
          }
        })

        const hooksReturnTypeDetailQuestionTemp = (number) => {
          return [
            {
              type: 'input',
              name: `hooksReturnTypeKey${number}`,
              message: `Please add hooks return type${number} key.\n`,
              validate: (answer) => answer !== ''
            },
            {
              type: 'input',
              name: `hooksReturnTypeDetail${number}`,
              message: `Please add hooks return type${number} types\n`,
              validate: (answer) => answer !== ''
            }
          ]
        }
        const hooksReturnTypeDetailQuestion = Array.from({ length: answers.hooksReturnTypeNumber }, (_info, index) =>
          hooksReturnTypeDetailQuestionTemp(index + 1)
        ).flat()
        const hooksReturnTypeDetailAnswer = await prompter.prompt(hooksReturnTypeDetailQuestion)

        answers.hooksReturnTypeDetails.forEach((info, index, arr) => {
          Object.keys(info).forEach((detailsKey) => {
            Object.keys(hooksReturnTypeDetailAnswer).forEach((answersKey) => {
              if (answersKey === detailsKey) arr[index][detailsKey] = hooksReturnTypeDetailAnswer[answersKey]
            })
          })
        })
      }
    } else {
      const hooksReturnTypeAnnotationQuestion = {
        type: 'input',
        name: 'hooksReturnTypeAnnotation',
        message: 'Please input hooks return type annotation\n(🐶 When empty, type is undefined.)\n'
      }
      const hooksReturnTypeAnnotationAnswer = await prompter.prompt(hooksReturnTypeAnnotationQuestion)
      const { hooksReturnTypeAnnotation } = hooksReturnTypeAnnotationAnswer
      answers.hooksReturnTypeAnnotation = hooksReturnTypeAnnotation
    }

    const reactHooksQuestion = {
      type: 'MultiSelect',
      name: 'reactHooks',
      message: 'If use react hooks, Please choose list below.\n🐶 (When do not use, Do not select anything.)',
      choices: ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef']
    }
    const reactHooksAnswer = await prompter.prompt(reactHooksQuestion)
    const { reactHooks } = reactHooksAnswer
    answers.reactHooks = reactHooks

    return { ...answers }
  }
}
