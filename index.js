// function takes an array and a string
// returns an array of elements that match the string
function findMatching(arr, str) {
  return arr.filter(element => element.toLowerCase() == str.toLowerCase())
}

// function takes an array and a string
// returns an array of elements that begin with that string
function fuzzyMatch(arr, substring) {
  return arr.filter(element => element.startsWith(substring))
}

// takes an array of objects and a string
// returns each object with a name value matching the string
function matchName(arr, str) {
  return arr.filter(obj => obj.name == str)
}
