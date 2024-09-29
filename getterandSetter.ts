const person = {

    firstName: "Arun",
    lastName: "Muthusamy",
    place: "London",
    get fullName() {
        return this.firstName + this.lastName
    },
    set fullName(value) {
        const value1 = value.split(' ')
        this.firstName = value1[0]
        this.lastName = value1[1]
    },
    get name() {
        return this.place
    },
    set name(value){
        this.place=value
    }

}
person.fullName = "Arun Arumugam"

console.log(person.fullName)
person.name="Kadayam"
console.log(person.name)