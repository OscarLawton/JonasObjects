const objMark = {

    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.BMI = this.mass / this.height **2
        return this.BMI;
    },

}

const objJohn = {

    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = this.mass / this.height **2
        return this.BMI;
    },
      
}

if(objMark.calcBMI() > objJohn.calcBMI()){
    console.log(`Mark's BMI (${objMark.calcBMI()}) is greater than John's BMI (${objJohn.calcBMI()})!`)
}  else if (objMark.calcBMI() < objJohn.calcBMI()){
    console.log(`John's BMI ${objMark.calcBMI()} is greater than Mark's BMI (${objMark.calcBMI()})!`) 
} else {
    console.log("Both people's BMIs are equal.")
}

//console.log(`${objMark.calcBMI() > objJohn.calcBMI()? : "John's" }` )
//console.log(objJohn.calcBMI())