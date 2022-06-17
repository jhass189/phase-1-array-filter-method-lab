// Code your solution here
function findMatching(drivers, name) {
    let names = drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
    return names
}
function fuzzyMatch(drivers, first) {
    const letters = drivers.filter(driver => driver.substring(0, 2) == first)
    return letters
}
function matchName(drivers, name) {
    const names = drivers.filter(driver => driver.name == name)
    return names
}
