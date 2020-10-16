function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.slice(0,2) === str);
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str);
}