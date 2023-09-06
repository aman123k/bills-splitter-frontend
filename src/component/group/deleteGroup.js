const deleteGroup = async (id, navigation, toast) => {
  try {
    const response = await fetch(
      `https://bills-splitter-backend.onrender.com/deleteGroup/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const result = await response.json();

    if (result.success) {
      toast.success(result.response);
      setTimeout(() => {
        navigation("/");
      }, 1000);
    } else {
      toast.error(result.response);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default deleteGroup;
