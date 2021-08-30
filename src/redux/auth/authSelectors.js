const getUserName = (state) => state.auth.user.name;
const isLoggedIn = (state) => state.auth.isLoggedIn;

export { getUserName, isLoggedIn };
