import Vue from 'vue';
import Vuex from 'vuex';
import safeBrowsingService from '@/safeBrowsingService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siteStatus: null,
  },
  mutations: {
    setSiteStatus(state, status) {
      state.siteStatus = status;
    },
  },
  actions: {
    async checkSite({ commit }, url) {
      try {
        const response = await safeBrowsingService.checkSite(url);
        commit('setSiteStatus', response.data.matches);
      } catch (error) {
        console.error(error);
        commit('setSiteStatus', null);
      }
    },
  },
});
