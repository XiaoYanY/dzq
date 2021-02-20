import { getHomeData } from '../../services/commonService';

export default {
  state: {
    user: {}
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
      const res = await getHomeData();
      this.updateState({ user: res.data });
    }
  }
};
