const deleteExpense = async (id, groupId, navigation, toast) => {
  try {
    const response = await fetch(
      `https://bills-splitter-backend.onrender.com/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ groupId: groupId }),
        credentials: "include",
      }
    );
    const result = await response.json();

    if (result.success) {
      toast.success(result.response);
      setTimeout(() => {
        navigation("/group");
      }, 1000);
    } else {
      toast.error(result.response);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default deleteExpense;
