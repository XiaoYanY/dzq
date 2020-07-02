import services from '../loadServices';

const { commonService } = services;

export default {
  state: {
    list: []
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    async query(payload, state) {
      const res = await commonService.getHomeData();
      this.updateState({ list: res.data });
    }
  }
};
