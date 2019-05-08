<template>
  <div class="card" v-on:click="toggleChildren()">
    <div class="department-wrapper" v-bind:class="{ active: employee.isChildrenShown }">
      <h4 class="department">{{employee.department}}</h4>
      <span>{{employee.id}}</span>
    </div>
    <div class="details-wrapper">
      <h4 class="name">{{employee.name}}</h4>
      <h5 class="designation">{{employee.designation}}</h5>
    </div>
    <div class="properties">
      <span class="properties-item" v-bind:class="{ active: employee.isChildrenShown }">
        <i class="fas fa-sitemap"></i>
        {{employee.numberOfImmediateEmployees}}
      </span>
      <span class="properties-item" v-bind:class="{ active: employee.isChildrenShown }">
        <i class="fas fa-user"></i>
        {{employee.totalEmployees}}
      </span>
      <span class="properties-item" v-bind:class="{ active: employee.isChildrenShown }">
        <i class="fas fa-minus-circle"></i>
      </span>
    </div>
    <div class="actions">
      <span class="add">
        <i class="fas fa-user-plus"></i>
      </span>
      <span class="edit">
        <i class="fas fa-pencil-alt"></i>
      </span>
      <span v-on:click="removeEmployee()" class="delete">
        <i class="fas fa-trash-alt"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "card",
  props: {
    employee: Object
  },
  computed: {
    ...mapGetters(["getParent"])
  },
  methods: {
    toggleChildren() {
      this.employee.isChildrenShown
        ? this.employee.hideChildren()
        : this.hideSiblings();
    },
    hideSiblings() {
      let parent = this.getParent(this.employee);
      parent.immediateEmployees.forEach(emp => {
        emp.hideChildren();
      });
      this.employee.showChildren();
    },
    removeEmployee() {
      this.getParent(this.employee).removeChildEmployee(this.employee);
    },
    addEmployee() {
      console.log("add employee");
    }
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  width: 350px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.department-wrapper {
  border: 1px solid rgb(248, 248, 248);
}
.department-wrapper.active {
  background-color: rgb(25, 128, 126);
  color: #fff;
}
.details-wrapper {
  border: 1px solid rgb(248, 248, 248);
}
.properties {
  border: 1px solid rgb(248, 248, 248);
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.properties .properties-item {
  display: flex;
  flex-direction: column;
}
.properties .properties-item.active {
  color: rgb(72, 130, 168);
}
.actions {
  border: 1px solid rgb(248, 248, 248);
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
.actions .add {
  color: rgb(123, 224, 148);
  cursor: pointer;
}
.actions .edit {
  color: black;
  cursor: pointer;
}
.actions .delete {
  color: rgb(209, 101, 112);
  cursor: pointer;
}
</style>

