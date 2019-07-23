import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      allProjects: [],
      allPages: [],
      pageTitle: '',
      currentTopic: '',
      allTopics: [],
      siteMeta: [],
      siteInfo: [],
      siteSocial: [],
      navStack: ''
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getSiteMeta')
        await dispatch('getPages')
        await dispatch('getAllProjects')
        await dispatch('getTopics')
      },
      getSiteMeta({ state, commit }) {
        const info = require('~/content/meta/info.json')
        const social = require('~/content/meta/social.json')

        commit('SET_INFO', info)
        commit('SET_SOCIAL', social)
      },
      async getPages({ state, commit }) {
        const context = await require.context(
          '~/content/pages/',
          false,
          /\.json$/
        )

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/${key.replace('.json', '').replace('./', '')}`
        }))

        commit('SET_PAGES', pages)
      },
      async getAllProjects({ state, commit }) {
        const context = await require.context(
          '~/content/projects/',
          false,
          /\.json$/
        )

        const searchprojects = await context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }))

        commit('SET_PROJECTS', searchprojects.reverse())
      },
      async getTopics({ state, commit }) {
        const context = await require.context(
          '~/content/topics/',
          false,
          /\.json$/
        )

        const searchtopics = await context.keys().map(key => ({
          ...context(key),
          _path: `/topics/${key.replace('.json', '').replace('./', '')}`
        }))

        commit('SET_TOPICS', searchtopics.reverse())
      }
    },
    mutations: {
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_SOCIAL(state, data) {
        state.siteSocial = data
      },
      SET_PAGES(state, data) {
        state.allPages = data
      },
      SET_TITLE(state, data) {
        state.pageTitle = data
      },
      SET_PROJECTS(state, data) {
        state.allProjects = data
      },
      SET_TOPICS(state, data) {
        state.allTopics = data
      },
      SET_NAVSTACK(state, data) {
        state.navStack = data
      }
    }
  })

export default createStore
