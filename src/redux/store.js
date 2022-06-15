import { configureStore } from '@reduxjs/toolkit';

import CommercialSlice from './modules/Commercial';
import CommentSlice from './modules/Comment';
import userSlice from './modules/user';

const store = configureStore({
  reducer: {
    user: userSlice.reducer, // state를 등록하는 과정 user로 등록
    commercial: CommercialSlice.reducer,
    comment: CommentSlice.reducer,
  },
});
export default store;
