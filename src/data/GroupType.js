import Home from "../images/Home.jpg";
import Office from "../images/Office.jpg";
import Trip from "../images/Trip.jpg";
import Personal from "../images/personal.jpg";
import Sport from "../images/Sport.jpg";
import Other from "../images/Other.jpg";
const GroupType = [
  {
    name: "Home",
    Image: Home,
  },
  {
    name: "Trip",
    Image: Trip,
  },
  {
    name: "Office",
    Image: Office,
  },
  {
    name: "Personal",
    Image: Personal,
  },
  {
    name: "Sport",
    Image: Sport,
  },
  {
    name: "Other",
    Image: Other,
  },
];

// Sample group templates
export const groupTemplates = [
  {
    id: 1,
    name: "Roommates",
    icon: "🏠",
    description: "Split rent, utilities, groceries and household expenses",
    textColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: 2,
    name: "Trip",
    icon: "✈️",
    description: "Track expenses for travel, accommodations, and activities",
    textColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    name: "Couple",
    icon: "❤️",
    description: "Manage shared expenses with your partner",
    textColor: "red-blue-600",
    bgColor: "bg-red-100",
  },
  {
    id: 4,
    name: "Event",
    icon: "🎉",
    description: "Plan a party, wedding or gathering with shared costs",
    textColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    name: "Personal",
    icon: "👤",
    description: "Manage personal expenses and budgets efficiently",
    textColor: "text-gray-600",
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    name: "Sport",
    icon: "⚽",
    description: "Organize sports events and track shared expenses",
    textColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 7,
    name: "Office",
    icon: "🏢",
    description: "Coordinate office expenses and shared resources",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];
export const expensesPoint = [
  { point: "Automatically track balances within the group" },
  { point: "Split expenses evenly or with custom amounts" },
  { point: "Settle up expenses with one click when ready" },
];
export const categories = ["all groups", "active", "recent"];
export default GroupType;
