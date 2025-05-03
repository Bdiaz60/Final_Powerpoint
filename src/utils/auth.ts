export const registerUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const existingUser = users.find((user: any) => user.email === email);
  if (existingUser) {
    throw new Error("User already exists");
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
};

export const loginUser = (email: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(
    (user: any) => user.email === email && user.password === password
  );
  if (!user) {
    throw new Error("Invalid email or password");
  }
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("loggedInUser");
};

export const getLoggedInUser = () => {
  const user = localStorage.getItem("loggedInUser");
  return user ? JSON.parse(user) : null;
};

export const getUserOrders = (email: string) => {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  return orders.filter((order: any) => order.email === email);
};

export const saveOrder = (order: any) => {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
};
