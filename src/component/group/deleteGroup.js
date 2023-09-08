const deleteGroup = async (id, navigation, toast) => {
  try {
    const response = await toast.promise(
      fetch(`https://bills-splitter-backend.onrender.com/deleteGroup/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      {
        loading: "loading data",
        success: "data loaded successfully",
        error: "faild to load data",
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
