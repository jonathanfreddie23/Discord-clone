import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
      channel:null,
      channelName:null,
  },
  reducers: {
    setChannelInfo: (state, action ) => {
      state.channel = action.payload.channel;
      state.channelName = action.payload.channelName;

    },

  },
});

export const { setChannelInfo } = appSlice.actions;



export const selectchannel = (state) => state.app.channel;
export const selectchannelName = (state) => state.app.channelName;


export default appSlice.reducer;
