import { configureStore } from '@reduxjs/toolkit'

// import postsReducer from '../features/posts/postsSlice'
// import usersReducer from '../features/users/usersSlice'
// import notificationsReducer from '../features/notifications/notificationsSlice'
import authReducer from '../features/Auth/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    // posts: postsReducer,
    // users: usersReducer,
    // notifications: notificationsReducer
  }
})