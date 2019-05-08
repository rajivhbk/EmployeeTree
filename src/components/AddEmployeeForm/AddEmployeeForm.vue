<template>
  <div>
    <div class="overlay"></div>
    <form action novalidate>
      <div class="form-item">
        <label for>
          Name:
          <input v-model="newEmployee.name" type="text" required>
        </label>
      </div>
      <div class="form-item">
        <label for="designation">
          Designation:
          <input v-model="newEmployee.designation" type="text" required>
        </label>
      </div>
      <div class="form-item">
        <label for="department">
          Department:
          <input v-model="newEmployee.department" type="text" required>
        </label>
      </div>
      <div class="form-item">
        <button class="form-btn submit" v-on:click="addEmployee()">Submit</button>
        <button class="form-btn cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
import Employee from "../../datastructures/Employee";
export default {
  name: "addEmployeeForm",
  props: {
    parentEmployee: Object
  },
  data: () => ({
    newEmployee: new Employee()
  }),
  methods: {
    addEmployee() {
      this.parentEmployee.addEmployee(this.newEmployee);
    }
  }
};
</script>
<style>
form {
  position: absolute;
  left: 40%;
  top: 40%;
  background-color: #fff;
  z-index: 3;
  width: 20%;
  height: 20%;
  padding: 30px;
}
.form-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}
.overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}
</style>
