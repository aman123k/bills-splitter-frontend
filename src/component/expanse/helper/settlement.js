const settlement = async (email, id, navgation, toast) => {
  try {
    const response = await fetch(
      `https://bills-splitter-backend.onrender.com/settlement/${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id: id }),
      }
    );
    const result = await response.json();
    if (result.success) {
      toast.success(result.response);
      setTimeout(() => {
        navgation("/");
      }, 1000);
    }
  } catch (error) {
    console.error("Error fetching data:");
  }
};
export default settlement;
