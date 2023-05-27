import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";
import cakeReducer from './features/cake/cakeSlice'
import icecreamReducer from './features/icecream/icecreamSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
        cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})


// const store = configureStore({
//     reducer: {
//       cake: cakeReducer,
//       icecream: icecreamReducer,
//       user: userReducer
//     }
//   })
  
//   export default store