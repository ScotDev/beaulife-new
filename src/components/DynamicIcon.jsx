import {
  BsCloudSunFill,
  BsSunFill,
  BsFillCloudHazeFill,
  BsFillCloudsFill,
  BsFillCloudyFill,
  BsFillCloudDrizzleFill,
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsFillCloudSunFill,
  BsFillMoonFill,
  BsCloudFogFill,
  BsFillCloudHaze2Fill,
  BsFillCloudLightningRainFill,
  BsFillCloudSnowFill,
} from "react-icons/bs";

export default function DynamicIcon({ condition }) {
  let icon;
  switch (condition) {
    // in future reference this list
    // https://www.weatherapi.com/docs/weather_conditions.json
    case "Partly cloudy":
      icon = <BsCloudSunFill className="w-full h-full" />;
      break;
    // Clear is WeatherAPI's nighttime equivalent to "Sunny"
    case "Clear":
      icon = <BsFillMoonFill className="w-full h-full" />;
      break;
    case "Sunny":
      icon = <BsSunFill className="w-full h-full" />;
      break;
    case "Cloudy":
      icon = <BsFillCloudsFill className="w-full h-full" />;
      break;
    // case "Partly cloudy":
    //   icon = <BsFillCloudSunFill className="w-full h-full" />;
    //   break;
    case "Overcast":
      icon = <BsFillCloudyFill className="w-full h-full" />;
      break;
    case "Mist":
      icon = <BsFillCloudHaze2Fill className="w-full h-full" />;
      break;
    case "Fog":
      icon = <BsFillCloudHazeFill className="w-full h-full" />;
      break;
    case "Patchy rain possible":
    case "Light rain":
    case "Light rain shower":
      icon = <BsFillCloudDrizzleFill className="w-full h-full" />;
      break;
    case "Moderate rain":
    case "Heavy rain":
    case "Moderate or heavy rain shower":
      icon = <BsFillCloudRainHeavyFill className="w-full h-full" />;
      break;
    case condition.includes("thunder"):
      icon = <BsFillCloudLightningRainFill className="w-full h-full" />;
      break;
    case condition.includes("snow"):
      icon = <BsFillCloudSnowFill className="w-full h-full" />;
      break;
    default:
      icon = <BsFillCloudyFill className="w-full h-full" />;
      // console.log("Weather type not found");
      break;
  }

  return <>{icon}</>;
}
