// Code your solution here
function findMatching(arrDrivers, driver) {
    return arrDrivers.filter(d =>{
      return d.toLowerCase() === driver.toLowerCase()
    })
}

function fuzzyMatch(arrDrivers, term) {
    return arrDrivers.filter(d => {
       return d.toLowerCase().indexOf(term.toLowerCase()) === 0
    })
}

function matchName(arrDrivers, string) {
    return arrDrivers.filter(d => {
      return  d.name === string
    })
}