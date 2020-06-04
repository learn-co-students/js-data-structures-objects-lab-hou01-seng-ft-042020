// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    // 1) "before each" hook for "returns a driver with the original key value pairs and the new key value pair"
    return Object.assign({}, driver, {[key]:value});
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // 2) updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
    driver[key] = value;
    return driver;
}


function deleteFromDriverByKey(driver, key){
//     3) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
//     4) does not modify the original driver (it is non-destructive)
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    //  5) returns driver without the delete key/value pair
    //  6) modifies the original driver
    delete driver[key];
    return driver;
}
