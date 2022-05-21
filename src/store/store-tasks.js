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

  }
};

const getters = {
  tasksToDo: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key){
      let task = state.tasks[key]
      if(!task.completed) {
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
