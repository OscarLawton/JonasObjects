const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1990,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    calcAge: function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    objSummary: function(){
        console.log(`${this.firstName} is a ${this.age} year old ${this.job}, and he ${this.hasDriversLicense? "has" : "does not have" } a drivers license.` )
    }
}

console.log(jonas.calcAge())
console.log(jonas.age)
jonas.objSummary()

console.log(jonas.firstName + " has " + jonas.friends.length + " friends, and his best friend is called " + jonas.friends[0] + '.')


//hello