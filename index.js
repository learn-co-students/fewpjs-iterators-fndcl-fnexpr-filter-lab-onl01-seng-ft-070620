// Code your solution here
function findMatching(arr, term) {
    return arr.filter(e => e.toUpperCase() === term.toUpperCase())
}

function fuzzyMatch(arr, term) {
    return arr.filter(e => e.startsWith(term))
}

function matchName(arr, term) {
    return arr.filter(obj => obj.name === term)
}