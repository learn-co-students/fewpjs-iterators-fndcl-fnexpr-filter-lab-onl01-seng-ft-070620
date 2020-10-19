function findMatching(drivers, name) {
   return drivers.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(d => {
        let number = letters.length
        let nameFilter = d.slice(0, number) 
        return nameFilter === letters 
    })
}

function matchName(drivers, name) {
    return drivers.filter(d => d.name === name)
}
