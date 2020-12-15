import { getHomeData } from '../../services/commonService';

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
      const res = await getHomeData().catch(e => e);
      this.updateState({ list: [{ title: 'h111' }, { title: 'h222' }] });
    }
  }
};
