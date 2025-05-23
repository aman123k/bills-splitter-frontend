// Function to generate initials
const getInitials = (name = "User") => {
  const parts = name.split(" ");
  const initials = parts
    .map((part) => part[0]?.toUpperCase())
    .join("")
    .slice(0, 2); // Limit to 2 characters
  return initials;
};
// Function to generate color from a string (e.g., user name)
const generateColorFromName = (name = "") => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Convert hash to an RGB color
  const color = `hsl(${hash % 360}, 70%, 50%)`; // HSL color format
  return color;
};

function GeneralAvatar({ height, width, name }) {
  const backgroundColor = generateColorFromName(name);

  return (
    <div
      className=" flex items-center justify-center font-bold text-white rounded-full"
      style={{
        height,
        width,
        backgroundColor,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

export default GeneralAvatar;
