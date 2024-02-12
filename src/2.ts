// Answer Option I
class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}
/* Наслідування — принцип OOП, який дозволяє класу успадковувати властивості та методи іншого класу. У JS і TS це досягається з використанням ключового слова `extends`. */
class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

console.log(new Employee("Bob", "Sales", 50000).getEmployeeDetails());
console.log(new Manager("Ron", "Sales", 50000).getEmployeeDetails()); // Name: Ron, Department: Sales, Salary: 60000

export { Employee, Manager };

/*  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.
  Клас Employee повинен включати:
  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.
  Клас Manager повинен бути підклас класу Employee
  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.
  
  class Employee {
  // Заповніть модифікатори доступу
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
}  */
