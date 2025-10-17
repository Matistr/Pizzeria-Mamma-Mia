import { createContext } from "react";

export const UserContext = createContext({
  token: null,
  email: "",
  login: async () => {},
  register: async () => {},
  logout: () => {},
  getProfile: async () => {},
});