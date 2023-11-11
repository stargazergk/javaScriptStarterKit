import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcers/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../services/models/customer.js"
import User from "../services/models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 =new MongoLogger()

let userService = new UserService(logger1)

let user1= new User(1,"göktuğ","kanmaz","ankara")
let user2= new User(2,"baran","kökçekli","istanbul")


userService.add(user1)
userService.add(user2)
//console.log(userService.list())
//console.log(userService.getById(2))



//userService.getById(1)
//userService.list()


let costomer={id:1, firstName:"Göktuğ"}

costomer.lastName ="Kanmaz"

console.log("-----------------")

userService.load()

let customerToAdd =new Customer(1,"ali","yalan","kaş","dfsgsdgsd")
customerToAdd.type="customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
