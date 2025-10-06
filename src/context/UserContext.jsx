import { useState, useMemo } from "react";
import { UserContext } from "./UserContext";
import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => setToken(false);

  const value = useMemo(() => ({ token, logout }), [token]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};