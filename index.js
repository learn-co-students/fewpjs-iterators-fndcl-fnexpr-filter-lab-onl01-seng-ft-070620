// pry = require('pryjs');

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toUpperCase() === name.toUpperCase()
    })
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => {
        return driver.startsWith(query)
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver['name'] === name
    })
}

// findMatching(drivers, "Bobby")