<template>
  <li>
    <card v-bind:employee="employee"></card>
    <ul
      v-if="employee.immediateEmployees && employee.immediateEmployees.length && employee.isChildrenShown"
    >
      <node v-for="employee in employee.immediateEmployees" :employee="employee" :key="employee.id"></node>
    </ul>
  </li>
</template>
<script>
import card from "../Card/Card";
export default {
  name: "node",
  components: { card },
  props: {
    employee: Object
  },
  computed: {},
  methods: {}
};
</script>
<style>
.tree {
  display: flex;
  display: flex;
  justify-content: center;
}
.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 50%;
  height: 20px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
}

.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}

.tree li:only-child {
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}

.tree li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
}

.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 20px;
}
.tree ul {
  padding: 20px 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
}

.tree li {
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

