
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('HELLO')

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('hello')

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toLowerCase() === string) {
    return 'I can\'t hear you!'
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
  
}
sayHiToGrandma('HELLO')
sayHiToGrandma('hello')
sayHiToGrandma('I love you, Grandma.')

