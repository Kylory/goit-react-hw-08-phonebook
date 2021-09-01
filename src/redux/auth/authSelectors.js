const getUserName = (state) => state.auth.user.name;
const isLoggedIn = (state) => state.auth.isLoggedIn;
const isFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;

export { getUserName, isLoggedIn, isFetchingCurrentUser };
