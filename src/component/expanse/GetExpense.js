const getExpense = async (data, setAllExpense) => {
  try {
    const response = await fetch(
      "https://billsspiltter.onrender.com/getExpense",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();

    if (result.success === false) {
      window.location.href = "/";
      return;
    }
    setAllExpense(result.response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default getExpense;
