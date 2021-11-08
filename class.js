class Employee {
    static numberOfEmployees = 0;
    static EmployeeNum(x) {
        this.numberOfEmployees += x;
        return this.numberOfEmployees;
    }

    constructor(name, email, age, address, experience) {
        this.name = name;
        this.email - email;
        this.age = age;
        this.address = address;
        this.experience = experience;
        this.salary = 1000;
    }

    printInfo() {
        return (
            "Employee Name: " + this.name + " " + "Email: " + this.email + " " + "Age: " + this.age + " " + "Address: " + this.address + " " + "Years of Experience: " + this.experience + " " + this.salary
        );
    }

    raiseSalary() {
        this.salary *= 1.5;
    }

}

class Manager extends Employee {
    static numberOfManagers = 0;
    static ManagersNum(x) {
        this.numberOfManagers += x;
        return this.numberOfManagers;
    }

    constructor(name, email, age, address, experience, department) {
        super(name, email, age, address, experience);
        this.salary = 1500;
        this.department = department;
    }

    printInfo() {
        return (
            "Manager Name: " + this.name + " " + "Email: " + this.email + " " + "Address: " + this.address + " " + "Years Of Experience: " + this.experience + " " + "Department: " + this.department + " " + this.salary
        );
    }

    raiseSalary() {
        this.salary *= 2;
    }

    

    
}

let company = [
    new Employee("rabih", "rabih.xxx@lau.edu", 28, "hamra", 3),
    new Employee("Mohamad", "Mohamad.zyx@lau.edu", 23, "ain mreiseh", 2),
    new Employee("Ahmad", "ahmad.xyy@lau.edu.lb", 35, "hamra", 1),
    new Manager("Yehya", "yehya.zzz@lau.edu.lb", 45, "baabda", 6, "Math"),
    new Manager("Hussein", "hussein.yyx@lau.edu", 26, "jbeil", 8, "computer science"),

];

console.log(company);

var emp = Employee.EmployeeNum(3);
var mgr = Manager.ManagersNum(2);
console.log(emp);
console.log(mgr);

if (company[3] instanceof Manager) {
    company[3].raiseSalary();
    console.log(company[3]);
}
if (company[4] instanceof Manager) {
    company[4].raiseSalary();
    console.log(company[3]);
}