import React from "react";

// create the context
const UserContext = React.createContext();
    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
    };

// create a provider component
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    // this value will be available to child components of this provider
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
    );
}

export { UserContext, UserProvider };