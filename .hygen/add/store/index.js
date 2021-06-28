const logFontBold = '\x1b[1m'
const logFontColorCyan = '\u001b[36m'
const logFontColorRed = '\u001b[31m'
const logFontReset = '\x1b[0m'
const errorMessage = `🙄 ${logFontBold}${logFontColorRed}Forget to enter the name command? Check it again.${logFontReset}\nCommand: 🌞 ${logFontBold}${logFontColorCyan}yarn add:store [name]${logFontReset}`

module.exports = {
  prompt: async ({ prompter, args }) => {
    const answers = {}
    const { name } = args
    if (!name) throw new Error(errorMessage)
    answers.name = name

    const initialStateQuestion = {
      type: 'select',
      name: 'typeOfInitialState',
      message: 'Defined of object the initial state?',
      choices: ['undefined', 'define']
    }
    const initialStateAnswer = await prompter.prompt(initialStateQuestion)
    const { typeOfInitialState } = initialStateAnswer
    answers.typeOfInitialState = typeOfInitialState

    if (typeOfInitialState === 'define') {
      const stateDetailsQuestion = [
        {
          type: 'input',
          name: 'addState',
          message: 'Please add state.\n💁‍♂️ Example → [key]: [value], [key]: [value], [key]: [value]...\n👌 Empty OK. You can write your own later.\n'
        },
        {
          type: 'confirm',
          name: 'typeHasPartial',
          message: 'State types has partial?\n'
        }
      ]
      const stateDetailsAnswer = await prompter.prompt(stateDetailsQuestion)
      const { typeHasPartial, addState } = stateDetailsAnswer
      answers.typeHasPartial = typeHasPartial
      answers.addState = addState
    }

    const actionNumberQuestion = {
      type: 'input',
      name: 'actionNumber',
      message: 'How many actions?\n',
      validate: (answer) => !isNaN(Number(answer)) && answer !== '' && Number(answer) > 0
    }
    const actionNumberAnswers = await prompter.prompt(actionNumberQuestion)
    const { actionNumber } = actionNumberAnswers
    answers.actionNumber = Number(actionNumber)
    answers.actionDetails = Array.from({ length: answers.actionNumber }, (_info, index) => {
      return {
        [`actionName${index + 1}`]: undefined,
        [`actionPayload${index + 1}`]: undefined
      }
    })

    const actionDetailQuestionTemp = (number) => {
      return [
        {
          type: 'input',
          name: `actionName${number}`,
          message: `Please add action${number} name.\n`
        },
        {
          type: 'select',
          name: `actionPayload${number}`,
          message: `Please choose action${number} payload.\n🐶 (If you input ‘initialize' the action name, Please Select ‘None')`,
          choices: ['Same as state type', 'Manual input', 'None']
        }
      ]
    }
    const actionDetailQuestion = Array.from({ length: answers.actionNumber }, (_info, index) => actionDetailQuestionTemp(index + 1)).flat()
    const actionDetailAnswer = await prompter.prompt(actionDetailQuestion)

    const actionPayloadManualInputQuestionTemp = (name) => {
      const pickActionName = actionDetailAnswer[`actionName${name.slice(-1)}`]
      const toUpper = `${pickActionName.charAt(0).toUpperCase()}${pickActionName.slice(1)}`
      const pickFileName = answers.name
      const toLower = `${pickFileName.charAt(0).toLowerCase()}${pickFileName.slice(1)}`
      const generateLetter = `${toLower}${toUpper}`
      return {
        type: 'input',
        name: name,
        message: `Please add ${generateLetter} payload\n`
      }
    }
    const actionPayloadManualInputQuestion = Object.keys(actionDetailAnswer)
      .filter((key) => {
        if (actionDetailAnswer[key] === 'Manual input') {
          return key
        }
      })
      .map((info) => {
        return actionPayloadManualInputQuestionTemp(info)
      })
    const actionPayloadManualInputAnswer = await prompter.prompt(actionPayloadManualInputQuestion)

    Object.keys(actionPayloadManualInputAnswer).forEach((key) => {
      actionDetailAnswer[key] = actionPayloadManualInputAnswer[key]
    })

    answers.actionDetails.forEach((info, index, arr) => {
      Object.keys(info).forEach((detailsKey) => {
        Object.keys(actionDetailAnswer).forEach((answersKey) => {
          if (answersKey === detailsKey) arr[index][detailsKey] = actionDetailAnswer[answersKey]
        })
      })
    })

    return { ...answers }
  }
}
