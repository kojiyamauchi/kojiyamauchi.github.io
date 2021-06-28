const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the name command? Check it again.${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn add:fc [name]${logFontReset}`

module.exports = {
  prompt: async ({ prompter, args }) => {
    const answers = {}
    const { name } = args
    if (!name) throw new Error(errorMessage)
    answers.name = name

    const outputDirQuestion = {
      type: 'select',
      name: 'chooseOutPutDir',
      message: 'Please choose output directory.',
      choices: ['Layouts', 'Managements', 'Presentations']
    }
    const outputDirAnswer = await prompter.prompt(outputDirQuestion)
    const { chooseOutPutDir } = outputDirAnswer
    answers.chooseOutPutDir = chooseOutPutDir

    if (chooseOutPutDir !== 'Layouts') {
      const chooseComponentTypesQuestion = {
        type: 'select',
        name: 'chooseComponentTypes',
        message: 'Please choose component types.',
        choices: ['Function Component', 'Void Function Component']
      }
      const chooseComponentTypesAnswer = await prompter.prompt(chooseComponentTypesQuestion)
      const { chooseComponentTypes } = chooseComponentTypesAnswer
      answers.chooseComponentTypes = chooseComponentTypes

      const addPropsNumberQuestion = {
        type: 'input',
        name: 'addPropsNumber',
        message: 'How many props? (Please enter a number, 0 <= n, Empty === 0)\n',
        validate: (answer) => !isNaN(Number(answer))
      }
      const addPropsNumberAnswer = await prompter.prompt(addPropsNumberQuestion)
      const { addPropsNumber } = addPropsNumberAnswer
      answers.addPropsNumber = Number(addPropsNumber)

      if (answers.addPropsNumber !== 0) {
        answers.addPropsDetails = Array.from({ length: answers.addPropsNumber }, (_info, index) => {
          return {
            [`addPropsName${index + 1}`]: undefined,
            [`addPropsType${index + 1}`]: undefined
          }
        })

        const addPropsDetailQuestionTemp = (number) => {
          return [
            {
              type: 'input',
              name: `addPropsName${number}`,
              message: `Please add props${number} name.\n`,
              validate: (answer) => answer !== ''
            },
            {
              type: 'input',
              name: `addPropsType${number}`,
              message: `Please add props${number} type\n`,
              validate: (answer) => answer !== ''
            }
          ]
        }
        const addPropsDetailQuestion = Array.from({ length: answers.addPropsNumber }, (_info, index) => addPropsDetailQuestionTemp(index + 1)).flat()
        const addPropsDetailAnswer = await prompter.prompt(addPropsDetailQuestion)

        answers.addPropsDetails.forEach((info, index, arr) => {
          Object.keys(info).forEach((detailsKey) => {
            Object.keys(addPropsDetailAnswer).forEach((answersKey) => {
              if (answersKey === detailsKey) arr[index][detailsKey] = addPropsDetailAnswer[answersKey]
            })
          })
        })
      }

      const wrapperTagsQuestion = {
        type: 'input',
        name: 'wrapperTags',
        message: 'Please add wrapper tags.\n',
        validate: (answer) => answer !== ''
      }
      const wrapperTagsAnswer = await prompter.prompt(wrapperTagsQuestion)
      const { wrapperTags } = wrapperTagsAnswer
      answers.wrapperTags = wrapperTags

      const useHooksQuestion = {
        type: 'confirm',
        name: 'useHooks',
        message: 'Use custom hooks?\n'
      }
      const useHooksAnswer = await prompter.prompt(useHooksQuestion)
      const { useHooks } = useHooksAnswer
      answers.useHooks = useHooks

      if (useHooks) {
        const addHooksFnNameQuestion = {
          type: 'input',
          name: 'addHooksFnName',
          message: 'Please add hooks function name.\n🐶 (Do not need to input "use", "use***" will be output.)\n',
          validate: (answer) => answer !== ''
        }
        const addHooksFnNameAnswer = await prompter.prompt(addHooksFnNameQuestion)
        const { addHooksFnName } = addHooksFnNameAnswer
        answers.addHooksFnName = addHooksFnName

        const addHooksFnArgNumberQuestion = {
          type: 'input',
          name: 'addHooksFnArgNumber',
          message: 'Add hooks function arg? (Please enter a number, 0 <= n, Empty === 0)\n',
          validate: (answer) => !isNaN(Number(answer))
        }
        const addHooksFnArgNumberAnswer = await prompter.prompt(addHooksFnArgNumberQuestion)
        const { addHooksFnArgNumber } = addHooksFnArgNumberAnswer
        answers.addHooksFnArgNumber = addHooksFnArgNumber

        if (addHooksFnArgNumber > 0) {
          answers.addHooksFnArgDetails = Array.from({ length: answers.addHooksFnArgNumber }, (_info, index) => {
            return {
              [`addHooksFnArgName${index + 1}`]: undefined,
              [`addHooksFnArgType${index + 1}`]: undefined
            }
          })

          const addHooksFnArgDetailQuestionTemp = (number) => {
            return [
              {
                type: 'input',
                name: `addHooksFnArgName${number}`,
                message: `Please add hooks fn arg${number} name.\n`,
                validate: (answer) => answer !== ''
              },
              {
                type: 'input',
                name: `addHooksFnArgType${number}`,
                message: `Please add hooks fn arg${number} type\n`,
                validate: (answer) => answer !== ''
              }
            ]
          }
          const addHooksFnArgDetailQuestion = Array.from({ length: answers.addHooksFnArgNumber }, (_info, index) =>
            addHooksFnArgDetailQuestionTemp(index + 1)
          ).flat()
          const addHooksFnArgDetailAnswer = await prompter.prompt(addHooksFnArgDetailQuestion)

          answers.addHooksFnArgDetails.forEach((info, index, arr) => {
            Object.keys(info).forEach((detailsKey) => {
              Object.keys(addHooksFnArgDetailAnswer).forEach((answersKey) => {
                if (answersKey === detailsKey) arr[index][detailsKey] = addHooksFnArgDetailAnswer[answersKey]
              })
            })
          })
        }

        const addHooksReturnTypeAliasQuestion = {
          type: 'confirm',
          name: 'addHooksReturnTypeAlias',
          message: 'Define a type alias for hooks functions return type annotations?\n'
        }
        const addHooksReturnTypeAliasAnswer = await prompter.prompt(addHooksReturnTypeAliasQuestion)
        const { addHooksReturnTypeAlias } = addHooksReturnTypeAliasAnswer
        answers.addHooksReturnTypeAlias = addHooksReturnTypeAlias

        if (addHooksReturnTypeAlias) {
          const addHooksReturnTypeNumberQuestion = {
            type: 'input',
            name: 'addHooksReturnTypeNumber',
            message: 'Please input hooks return types number.\n',
            validate: (answer) => !isNaN(Number(answer)) && answer !== '' && Number(answer) > 0
          }
          const addHooksReturnTypeNumberAnswer = await prompter.prompt(addHooksReturnTypeNumberQuestion)
          const { addHooksReturnTypeNumber } = addHooksReturnTypeNumberAnswer
          answers.addHooksReturnTypeNumber = Number(addHooksReturnTypeNumber)

          if (answers.addHooksReturnTypeNumber !== 0) {
            answers.addHooksReturnTypeDetails = Array.from({ length: answers.addHooksReturnTypeNumber }, (_info, index) => {
              return {
                [`addHooksReturnTypeKey${index + 1}`]: undefined,
                [`addHooksReturnTypeDetail${index + 1}`]: undefined
              }
            })

            const addHooksReturnTypeDetailQuestionTemp = (number) => {
              return [
                {
                  type: 'input',
                  name: `addHooksReturnTypeKey${number}`,
                  message: `Please add hooks return type${number} key.\n`,
                  validate: (answer) => answer !== ''
                },
                {
                  type: 'input',
                  name: `addHooksReturnTypeDetail${number}`,
                  message: `Please add hooks return type${number} types\n`,
                  validate: (answer) => answer !== ''
                }
              ]
            }
            const addHooksReturnTypeDetailQuestion = Array.from({ length: answers.addHooksReturnTypeNumber }, (_info, index) =>
              addHooksReturnTypeDetailQuestionTemp(index + 1)
            ).flat()
            const addHooksReturnTypeDetailAnswer = await prompter.prompt(addHooksReturnTypeDetailQuestion)

            answers.addHooksReturnTypeDetails.forEach((info, index, arr) => {
              Object.keys(info).forEach((detailsKey) => {
                Object.keys(addHooksReturnTypeDetailAnswer).forEach((answersKey) => {
                  if (answersKey === detailsKey) arr[index][detailsKey] = addHooksReturnTypeDetailAnswer[answersKey]
                })
              })
            })
          }
        } else {
          const addHooksReturnTypeAnnotationQuestion = {
            type: 'input',
            name: 'addHooksReturnTypeAnnotation',
            message: 'Please input hooks return type annotation\n(🐶 When empty, type is undefined.)\n'
          }
          const addHooksReturnTypeAnnotationAnswer = await prompter.prompt(addHooksReturnTypeAnnotationQuestion)
          const { addHooksReturnTypeAnnotation } = addHooksReturnTypeAnnotationAnswer
          answers.addHooksReturnTypeAnnotation = addHooksReturnTypeAnnotation
        }

        const addReactHooksQuestion = {
          type: 'MultiSelect',
          name: 'addReactHooks',
          message: 'If use react hooks, Please choose list below.\n🐶 (When do not use, Do not select anything.)',
          choices: ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef']
        }
        const addReactHooksAnswer = await prompter.prompt(addReactHooksQuestion)
        const { addReactHooks } = addReactHooksAnswer
        answers.addReactHooks = addReactHooks
      }
    }

    const StyleModuleQuestion = {
      type: 'confirm',
      name: 'useStyleModule',
      message: 'Use style module?\n'
    }
    const StyleModuleAnswer = await prompter.prompt(StyleModuleQuestion)
    const { useStyleModule } = StyleModuleAnswer
    answers.useStyleModule = useStyleModule

    const storybookQuestion = {
      type: 'confirm',
      name: 'useStorybook',
      message: 'Use storybook?\n'
    }
    const storybookAnswer = await prompter.prompt(storybookQuestion)
    const { useStorybook } = storybookAnswer
    answers.useStorybook = useStorybook

    return { ...answers }
  }
}
