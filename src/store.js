import Vue from "vue";
import Vuex from "vuex";
import { employees } from "./datastructures/data";

const digits = (n = 0) =>
  n < 10 ? [n] : [...digits(Math.floor(n / 10)), n % 10];

const traverseTree = (tree, hierarchy, depth) => {
  const hierarchyArray = digits(hierarchy);
  let currentNode = tree;
  let currentId = 1;
  if (depth == 1) {
    return currentNode;
  } else {
    for (let i = 0; i < depth - 1; i++) {
      currentId = hierarchyArray.slice(0, i + 2).join("");
      currentNode = currentNode.immediateEmployees.find(
        emp => emp.id == currentId
      );
    }
    return currentNode;
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: employees
  },
  mutations: {
    removeEmployee(state, employee) {
      console.log(state, employee);
    }
  },
  actions: {},
  getters: {
    getParent: state => employee => {
      const hierarchy = digits(employee.id);
      const parent = traverseTree(
        state.employees,
        employee.id,
        hierarchy.length - 1
      );
      return parent;
    }
  }
});
