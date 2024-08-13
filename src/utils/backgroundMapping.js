// backgroundMapping.js
export const getBackgroundClass = (weatherMain) => {
  switch (weatherMain.toLowerCase()) {
    case "clear":
      return "clear";
    case "clouds":
      return "cloudy";
    case "rain":
    case "drizzle":
      return "rainy";
    case "snow":
      return "snowy";
    default:
      return "default-background"; // Default background if no match is found
  }
};
