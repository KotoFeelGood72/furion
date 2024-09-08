export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const user: any = localStorage.getItem("users");
    const parsedUser = JSON.parse(user);
    if (!parsedUser.user) {
      return navigateTo("/");
    }

    if (!parsedUser.user.token) {
      return navigateTo("/");
    }
  }
});
