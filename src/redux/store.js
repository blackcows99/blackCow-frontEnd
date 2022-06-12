import { configureStore} from '@reduxjs/toolkit'
import CommercialSlice from './modules/Commercial'
import CommentSlice from './modules/Comment';
const store = configureStore({
  reducer: { 
    // user : user.reducer,   // state를 등록하는 과정 user로 등록
    commercial: CommercialSlice.reducer,
    comment: CommentSlice.reducer,
  }
}) 
export default store;
