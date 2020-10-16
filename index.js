// Code your solution here

function findMatching(drivers, name)
{
    let results = drivers.filter(driver=> {return driver.toLowerCase() == name.toLowerCase()})
    return results
}

function fuzzyMatch(drivers, name)
{
    let results = drivers.filter(driver=> {return driver.startsWith(name)})
    return results
}

function matchName(drivers, name)
{
    let results = drivers.filter(driver => {return driver.name == name})
    return results
}