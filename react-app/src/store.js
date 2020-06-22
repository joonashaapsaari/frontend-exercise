import { configureStore } from '@reduxjs/toolkit';
import carerReducer from './carerReducer';

export default configureStore({
  reducer: {
    carer: carerReducer,
  },
});
