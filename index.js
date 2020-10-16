function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.startsWith(str))
}

function matchName(drivers, str) {
    return drivers.filter(driverObj => driverObj.name === str)
}