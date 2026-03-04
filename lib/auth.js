export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

export function getRole() {
  return localStorage.getItem("role");
}

export function getUserEmail() {
  return localStorage.getItem("email");
}

export function logout(router) {
  localStorage.clear();
  router.push("/login");
}