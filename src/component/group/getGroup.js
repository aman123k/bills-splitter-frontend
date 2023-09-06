import GroupType from "../../data/GroupType";

const getGroups = async (setImage, setMembers, setUser) => {
  try {
    const response = await fetch("https://billsspiltter.onrender.com/groups", {
      credentials: "include",
    });
    const result = await response.json();

    if (result.success === false) {
      window.location.href = "/login";
      return;
    }
    setMembers(result.response);
    setUser(result.data);
    const groupImage = result.response.map((image) => {
      return GroupType.find((img) => {
        return img.name === image.groupType;
      });
    });
    setImage(groupImage);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getGroups;
