import { configureStore } from '@reduxjs/toolkit';
// import { campaignApi } from './modules/campaign';
// import { listApi } from './modules/list';
// import { templatesApi } from './modules/template';
// import { messageApi } from './modules/message';
// import { userApi } from './modules/user';

export const store = configureStore({
    reducer: {
        // [campaignApi.reducerPath]: campaignApi.reducer,
        // [listApi.reducerPath]: listApi.reducer,
        // [messageApi.reducerPath]: messageApi.reducer,
        // [templatesApi.reducerPath]: templatesApi.reducer,
        // [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware()
        .concat(
            // campaignApi.middleware,
            // listApi.middleware,
            // messageApi.middleware,
            // templatesApi.middleware,
            // userApi.middleware
        )
})