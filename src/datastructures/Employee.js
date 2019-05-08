class Employee {
  constructor(employee = {}) {
    this.id = employee.id ? employee.id : 1;
    this.name = employee.name ? employee.name : "";
    this.designation = employee.designation ? employee.designation : "";
    this.department = employee.department ? employee.department : "";
    this.immediateEmployees = employee.immediateEmployees
      ? employee.immediateEmployees
      : [];
    this.isChildrenShown = false;
    this.maxVisibleChildren = employee.maxVisibleChildren
      ? employee.maxVisibleChildren
      : 4;
    this.parentRef = employee.parentRef ? employee.parentRef : null;
  }

  addEmployee(employee) {
    this.immediateEmployees.push(new Employee(employee));
  }

  removeChildEmployee(employee) {
    let index = this.immediateEmployees.indexOf(employee);
    this.immediateEmployees.splice(index, 1);
  }

  get numberOfImmediateEmployees() {
    return this.immediateEmployees.length;
  }

  get totalEmployees() {
    let totalEmployees = 0;
    for (let i = 0, len = this.immediateEmployees.length; i < len; i++) {
      totalEmployees += this.immediateEmployees[i].numberOfImmediateEmployees;
    }
    return totalEmployees;
  }

  showChildren() {
    this.isChildrenShown = true;
  }

  hideChildren() {
    for (let i = 0, len = this.immediateEmployees.length; i < len; i++) {
      this.immediateEmployees[i]["isChildrenShown"] = false;
    }
    this.isChildrenShown = false;
  }
}

export default Employee;
