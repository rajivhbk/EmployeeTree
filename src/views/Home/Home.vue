<template>
  <div class="tree">
    <ul>
      <Tree v-bind:employee="employees"/>
    </ul>
    <AddEmployeeForm v-if="addFormOpen"/>
  </div>
</template>
<script>
import Tree from "../../components/Tree/Tree";
import AddEmployeeForm from "../../components/AddEmployeeForm/AddEmployeeForm";
export default {
  components: { Tree, AddEmployeeForm },
  name: "Home",
  computed: {
    employees() {
      return this.$store.state.employees;
    }
  },
  data: () => ({
    addFormOpen: false,
    addEmployeeToParent: {}
  })
};
</script>
