function findMatching(drivers, string) {
  return drivers.filter(f =>  f.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(f => f.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(source, string) {
  return source.filter(record => record.name === string)
}