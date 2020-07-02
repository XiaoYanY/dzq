import services from '../loadServices';

const { commonService } = services;

export default {
  state: {
    user: {},
    demoName: 'hello word'
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
    async getUser(payload, state) {
      const res = await commonService.getHomeData();
      this.updateState({ user: res.data });
    }
  }
};
