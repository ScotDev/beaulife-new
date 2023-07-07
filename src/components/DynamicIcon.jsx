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
      icon = <BsFillCloudHazeFill className="w-full h-full" />;
      break;
    case "Patchy rain possible":
      icon = <BsFillCloudDrizzleFill className="w-full h-full" />;
      break;
    case "Light rain":
      icon = <BsFillCloudRainFill className="w-full h-full" />;
      break;
    case "Moderate rain":
    case "Heavy rain":
      icon = <BsFillCloudRainHeavyFill className="w-full h-full" />;
      break;
    default:
      icon = <BsSunFill className="w-full h-full" />;
      console.log("Weather type not found");
      break;
  }

  return <>{icon}</>;
}
