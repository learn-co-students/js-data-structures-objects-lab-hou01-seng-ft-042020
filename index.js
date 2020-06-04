// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}