import Employee from "./Employee";
const data = {
  id: 1,
  name: "Nirav Seth",
  designation: "CEO",
  department: "Anatta",
  immediateEmployees: [
    {
      id: 11,
      name: "Victoriya",
      designation: "COO",
      department: "Board member",
      immediateEmployees: [
        {
          id: 111,
          name: "Maryana",
          designation: "Manager",
          department: "Management",
          immediateEmployees: [
            {
              id: 1111,
              name: "fcbdhfxv",
              designation: "Designer",
              department: "UX",
              immediateEmployees: []
            },
            {
              id: 1112,
              name: "jsdfeu",
              designation: "Designer",
              department: "UX",
              immediateEmployees: []
            },
            {
              id: 1113,
              name: "mfsiejf",
              designation: "Designer",
              department: "UX",
              immediateEmployees: []
            }
          ]
        },
        {
          id: 112,
          name: "Jacky",
          designation: "Manager",
          department: "Management",
          immediateEmployees: []
        },
        {
          id: 113,
          name: "Victor",
          designation: "Manager",
          department: "Management",
          immediateEmployees: []
        }
      ]
    },
    {
      id: 12,
      name: "Victor Beja",
      designation: "CFO",
      department: "Design",
      immediateEmployees: []
    },
    {
      id: 13,
      name: "Surinder",
      designation: "CPO",
      department: "Engineering",
      immediateEmployees: [
        {
          id: 131,
          name: "Shankar",
          designation: "Engg Manager",
          department: "Engineering",
          immediateEmployees: [
            {
              id: 1311,
              name: "Saras",
              designation: "Developer",
              department: "UI",
              immediateEmployees: [
                {
                  id: 13111,
                  name: "Eshaan",
                  designation: "jr UI",
                  department: "UI",
                  immediateEmployees: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function castEmployee(employee) {
  let newEmp = new Employee(employee);
  if (employee.immediateEmployees.length === 0) {
    return newEmp;
  }
  const modifiedImmChild = employee.immediateEmployees.map(emp =>
    castEmployee(emp)
  );
  newEmp.immediateEmployees = modifiedImmChild;
  return newEmp;
}

export const employees = castEmployee(data);
