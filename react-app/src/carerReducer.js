import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axiosMock';

const getCarers = createAsyncThunk(
  'carers/getCarers',
  async () => {
    const res = await axios.get(`/carers`);
    return res.data;
  }
);

const getCarer = createAsyncThunk(
  'carers/getCarer',
  async (carerId) => {
    const res = await axios.get(`/carer/${carerId}`);
    return res.data;
  }
);

const carerSlice = createSlice({
  name: 'carer',
  initialState: {
    carers: [],
    carer: null,
    errors: {},
  },
  reducers: {
  },
  extraReducers: {
    [getCarers.fulfilled]: (state, action) => {
      state.carers = action.payload;
    },
    [getCarers.rejected]: (state) => {
      state.carers = [];
      state.errors.carers = 'Failed to load carers';
    },
    [getCarer.fulfilled]: (state, action) => {
      state.carer = action.payload;
    },
    [getCarer.rejected]: (state) => {
      state.carer = null;
      state.errors.carers = 'Failed to load carer';
    },
  }
});

const { reducer } = carerSlice;
export { getCarers, getCarer }
export default reducer;
