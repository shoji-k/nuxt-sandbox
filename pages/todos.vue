<template>
  <v-container class="fill-height text-center" fluid>
    <v-row>
      <v-col>
        <h1>Todos</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form ref="form">
          <v-text-field
            v-model="todo"
            :rules="requireRules"
            label="Todo"
            required
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="add" color="primary">save</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row :key="todo.id" v-for="todo in todos">
          <v-col>
            {{ todo.name }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({
    todo: ''
  }),
  computed: {
    todos() {
      return this.$store.getters['todos/getList']
    }
  },
  created() {
    this.requireRules = [(v) => !!v || 'Required']
  },
  methods: {
    add() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('todos/add', { text: this.todo })
        this.todo = ''
      }
    }
  }
}
</script>
