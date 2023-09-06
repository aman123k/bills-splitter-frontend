import React, { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [image, setImage] = useState();
  const [settlement, setSettlement] = useState("");
  const [user, setUser] = useState([]);

  return (
    <ThemeContext.Provider
      value={{
        open,
        setOpen,
        image,
        setImage,
        members,
        setMembers,
        settlement,
        setSettlement,
        user,
        setUser,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
