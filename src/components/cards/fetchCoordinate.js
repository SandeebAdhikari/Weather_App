export async function getCoordinates(cityName) {
  const apiKey = "10912080c80f9bd3a00c034b2341867d";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  const data = await response.json();
  const { lon, lat } = data.coord;
  return { lon, lat };
}
