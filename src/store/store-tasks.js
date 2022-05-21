import Vue from "vue";
import {uid} from "quasar"

const state = {
  tasks: {
    id1: {
      name: "walk the dog",
      completed: false,
      dueDate: "5/22/2022",
      dueTime: "8:30 AM",
    },

    id2: {
      name: "coding homework",
      completed: false,
      dueDate: "5/25/2022",
      dueTime: "9:30 PM",
    },

    id3: {
      name: "go grocery shopping",
      completed: false,
      dueDate: "5/24/2022",
      dueTime: "12:30 AM",
    },
  },
  search: "",
  sort:'name'
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state,payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },

  setSearch(state,value) {

    state.search = value
  },
  setSort(state,value) {

    state.sort = value
  }
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({commit}, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task:task
    }
    commit('addTask',payload)

  },
  setSearch({commit}, value) {
    commit('setSearch',value)
  },
  setSort({commit}, value) {
    commit('setSort',value)
  }
};

const getters = {

  tasksSorted: (state) => {
    let tasksSorted = {}

    let keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a,b) => {

      let aProp = state.tasks[a][state.sort].toLowerCase()
      let bProp = state.tasks[b][state.sort].toLowerCase()

      if(aProp > bProp) return 1
      else if (aProp < bProp) return -1
      else return 0

    })

    keysOrdered.forEach((key) =>
    tasksSorted[key]=state.tasks[key])
    return tasksSorted
  } ,

  tasksFiltered: (state, getters) => {

    let tasksSorted = getters.tasksSorted,
     tasksFiltered = {}
    if(state.search) {
        Object.keys(tasksSorted).forEach(function(key) {
          let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()

          if(taskNameLowerCase.includes(searchLowerCase)) {
            tasksFiltered[key] = task
          }
        })
        return tasksFiltered
    }
     return tasksSorted
  },
  tasksToDo: (state,getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key){
      let task = tasksFiltered[key]
      if(!task.completed) {
        tasks[key] = task
      }
    })


    return tasks;
  },

tasksCompleted: (state,getters) => {
  let tasksFiltered = getters.tasksFiltered
  let tasks = {}
  Object.keys(tasksFiltered).forEach(function(key){
    let task = tasksFiltered[key]
    if(task.completed) {
      tasks[key] = task
    }
  })
return tasks;
},
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
