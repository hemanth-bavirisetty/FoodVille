import { createContext } from "react";
const userContext = createContext({
  user: {
    name: "Hemanth",
    email: "hemanth@googl.com",
  },
});
userContext.displayName = "userContext";
export default userContext;
