
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
    return string
  } else {
    console.log("I can't hear you!")
  }
}
sayHiToGrandma('HELLO')
