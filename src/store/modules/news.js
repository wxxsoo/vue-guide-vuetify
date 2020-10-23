import { fetchNewsList, fetchJobsList, fetchAskList } from "@/api/hackerNews";

const news = {
  state: {
    newsList: [],
    jobsList: [],
    askList: []
  },
  getters: {
    newsList(state) {
      return state.newsList;
    },
    jobsList(state) {
      return state.jobsList;
    },
    askList(state) {
      return state.askList;
    }
  },
  mutations: {
    SET_NEWS_LIST(state, data) {
      state.newsList = data;
    },
    SET_JOBS_LIST(state, data) {
      state.jobsList = data;
    },
    SET_ASK_LIST(state, data) {
      state.askList = data;
    }
  },
  actions: {
    async FETCH_NEWS_LIST({ commit }) {
      try {
        const response = await fetchNewsList();
        commit("SET_NEWS_LIST", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_JOBS_LIST({ commit }) {
      try {
        const response = await fetchJobsList();
        commit("SET_JOBS_LIST", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async FETCH_ASK_LIST({ commit }) {
      try {
        const response = await fetchAskList();
        commit("SET_ASK_LIST", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default news;
