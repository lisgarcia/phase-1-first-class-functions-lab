// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function ([]) {
    return drivers.slice(0, 2)
}
returnFirstTwoDrivers([])

const returnLastTwoDrivers = function ([]) {
    return drivers.slice(2)
}
returnLastTwoDrivers([])
//

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
selectingDrivers[0]()

//
// const fareMultiplier= function () {
//         return "working here"
// }
// console.log(fareMultiplier())



function createFareMultiplier(x=4, y) { 
    return function () {
            return x*y
    }
    }
console.log(createFareMultiplier(x)(4))

function fareDoubler(fare) {
    return fare *2
}
console.log(fareDoubler(2))

function fareTripler(fare) {
    return fare *3
}
console.log(fareDoubler(3))
