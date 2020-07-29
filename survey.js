const readline = require('readline')
const array = []
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`What's your name? Nicknames are also acceptable : `, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      array.push(answer)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`What's an activity you like doing?`, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      array.push(answer)
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('`What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      array.push(answer)
      resolve()
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      array.push(answer)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  for(let i in array){
    console.log(`Question ${i}   Your answers: ${array[i]}`)
  }
  rl.close()
}

main()
