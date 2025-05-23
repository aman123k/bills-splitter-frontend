import React, { createContext, useState } from "react";
const GroupContext = createContext();

function GroupContextProvider(props) {
  const [openGroupPopUp, setOpenGroupPopUp] = useState(false);

  return (
    <GroupContext.Provider
      value={{
        openGroupPopUp,
        setOpenGroupPopUp,
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
}

export { GroupContext, GroupContextProvider };
