// Demonstrate using keyword 'class' to create a class using prototype-based inheritance
// A function constructor to create a employee object
export default class Employee {
    // Define properties of an Employee object
    constructor(name, yearOfBirth, roles) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.roles = roles;
    }

    // Define methods of an Employee object
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    // Demostrate using keyword 'static' to indicate this method is specific to this class itself,
    // but not to be shared across instances of this class i.e. only the class 'Employee' can call this method
    static sortEmployeesByAge(employees){
        const sortedEmployees = employees.sort((b, a) => {
            return b.yearOfBirth - a.yearOfBirth;
        })

        return sortedEmployees;
    }
}