let adminSale = 20
let frequentClientSale = 15
let StudentSale = 30

let userBalance = 300
let cartTotal = 330

let userIsAdmin = false
let userIsFrequentClient = false
let userIsStudent = true ;

if (userIsAdmin == true && userBalance >= (cartTotal-adminSale)) {
    console.log (`Payment Completed`)
} else if (userIsFrequentClient == true && userBalance >= (cartTotal - frequentClientSale)) {
    console.log (`Payment Completed`)
} else if (userIsStudent == true && userBalance >= (cartTotal - StudentSale)) {
    console.log (`Payment Completed`)
} else if (userBalance > cartTotal) {
    console.log (`payment Completed`)
} else {
    console.log (`Payment Declined`)
}


