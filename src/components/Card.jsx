import { useState } from "react";
import {
  BsCloudSunFill,
  BsArrowUpShort,
  BsArrowDownShort,
  BsWind,
  BsWater,
  BsEye,
  BsSun,
} from "react-icons/bs";
import DynamicIcon from "./DynamicIcon";
import Loading from "./Loading";
import { gradeVisibility } from "../utils/gradeVisibility";

const PrimaryCard = ({ location, data, minMax }) => {
  const visibility = gradeVisibility(data?.vis_miles);
  const rtf = new Intl.RelativeTimeFormat("en", { style: "long" });
  const updatedAt = rtf.format(-2, "minute");
  if (!data) {
    return (
      <div className="grid place-items-center py-4 px-8 h=[416px] w-[352px]">
        <p className="text-lg font-medium">No data found</p>
        <p className="text-center pt-4">
          (Location services may be disabled on your device)
        </p>
      </div>
    );
  }
  if (location) {
    if (location.country === "United Kingdom") {
      location.country = "UK";
    }
  }

  return (
    <div className="py-4 px-8 rounded-xl w-max text-gray-800">
      <div>
        <h2 className="font-bold text-4xl">{`${location?.name}, ${location?.country}`}</h2>
        <h3 className="text-sm lg:text-base py-2">{`Updated ${updatedAt}`}</h3>
      </div>

      <div className="flex flex-row items-center">
        <h1 className="font-extrabold text-9xl">
          {data?.temp_c}
          <span className="text-5xl pl-1">C</span>
        </h1>
        <div className="h-24 w-24 ml-12 lg:ml-16">
          <DynamicIcon condition={data?.condition.text} />
        </div>
      </div>
      <h3 className="text-2xl py-4">{data?.condition.text}</h3>
      <div className="flex flex-row justify-evenly lg:justify-start items-center py-4 gap-6">
        <div className="flex flex-row items-center font-medium">
          <BsArrowUpShort className="w-8 h-8" />
          <p className="text-2xl">
            {minMax?.maxtemp_c.toFixed(0)}
            <span className="text-lg pl-0.5">C</span>
          </p>
        </div>
        <div className="flex flex-row items-center  font-medium">
          <BsArrowDownShort className="w-8 h-8" />
          <p className="text-2xl">
            {minMax?.mintemp_c.toFixed(0)}
            <span className="text-lg pl-0.5">C</span>
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-evenly lg:justify-start gap-4 items-center pt-6">
        <div className="flex flex-row items-center  font-medium">
          <BsEye className="w-6 h-6 mr-2" />
          <p className="capitalize">{visibility}</p>
        </div>
        <div className="flex flex-row items-center  font-medium">
          <BsWater className="w-6 h-6 mx-2" />
          <p className=" pl-0.5">{data?.humidity}%</p>
        </div>
        <div className="flex flex-row items-center  font-medium">
          <BsWind className="w-6 h-6 mr-2" />
          <p>{data?.wind_mph.toFixed(0)} mph</p>
        </div>
      </div>
    </div>
  );
};

const HourlyCard = ({ data }) => {
  // console.log(data);

  const tempDate = new Date(data.time);
  const parsedTime = tempDate.toLocaleTimeString("en-gb", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="pb-6 pt-4 px-8 rounded-xl l w-full h-full lg:w-fit glass-card text-gray-800 text-center ">
      <div className="flex flex-col lg:items-center lg:justify-center">
        <div className="flex flex-col">
          <div className="font-medium pb-2">{parsedTime}</div>
          <div className="font-bold text-4xl py-2">
            {data?.temp_c.toFixed(0)}
            <span className="text-xl pl-0.5">C</span>
          </div>
        </div>
        <div className="h-12 w-12 mx-auto mt-2">
          <DynamicIcon condition={data?.condition} />
        </div>
      </div>
      {/* <div className="flex flex-row justify-evenly items-center lg:pt-6">
        <div className="flex flex-row items-center">
          <BsArrowUpShort className="w-8 h-8" />
          <p>
            {temp}
            <span className="text-xs">C</span>
          </p>
        </div>
        <div className="flex flex-row items-center">
          <BsArrowDownShort className="w-8 h-8" />
          <p>
            12<span className="text-xs">C</span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

const DailyCard = ({ data }) => {
  return (
    <div className="py-4 px-8  rounded-xl l w-full glass-card text-gray-800 ">
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <div className="font-bold text-4xl opacity-100">
            26
            <span className="text-xl">C</span>
          </div>
          <div className="font-medium py-2">Thursday</div>
        </div>
        <div className="h-14 w-14 lg:h-16 lg:w-16 mx-auto">
          <DynamicIcon condition={data?.condition.text} />
        </div>
      </div>
      <div className="flex flex-row justify-start gap-4 lg:gap-0 lg:justify-evenly items-center pt-2 lg:pt-6">
        <div className="flex flex-row items-center">
          <BsArrowUpShort className="w-8 h-8" />
          <p>
            27
            <span className="text-xs">C</span>
          </p>
        </div>
        <div className="flex flex-row items-center">
          <BsArrowDownShort className="w-8 h-8" />
          <p>
            12<span className="text-xs">C</span>
          </p>
        </div>
        <div className="flex flex-row items-center">
          <BsWater className="w-6 h-6 mx-2" />
          <p>54%</p>
        </div>
        <div className="flex flex-row items-center">
          <BsWind className="w-8 h-8" />
          <p>24 mph</p>
        </div>
      </div>
    </div>
  );
};

const MiniCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(data);
  const tempDate = new Date(data.date);
  const dateAsDay = tempDate.toLocaleDateString("en-gb", { weekday: "long" });

  const toggleState = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };
  return (
    <div
      className="py-6 px-8 rounded-xl l w-full glass-card text-gray-800 flex flex-col items-center justify-between "
      onClick={toggleState}
    >
      {/* <div className="flex flex-row items-center"> */}
      {/* <div className="flex flex-row items-center justify-between w-full"> */}
      <div className="grid place-items-center grid-cols-3 gap-2 w-full">
        <div className="font-medium text-lg py-2 capitalize ">{dateAsDay}</div>
        <div className="h-8 lg:h-16 lg:w-16 mx-auto">
          <DynamicIcon condition={data?.condition} />
        </div>
        <div className="flex flex-row gap-4">
          <div className="text-3xl">
            {data.maxtemp_c.toFixed(0)}
            <span className="text-base pl-0.5">C</span>
          </div>
          <div className="text-3xl text-gray-500">
            {data.mintemp_c.toFixed(0)}
            <span className="text-base pl-0.5">C</span>
          </div>
        </div>
      </div>
      {/* </div> */}
      {isExpanded && (
        // <div className="flex flex-row gap-4 lg:gap-0 justify-evenly items-center pt-6 lg:pt-6">
        <div className="grid place-items-center grid-cols-3 gap-2 pt-4 lg:pt-6 w-full">
          {/* <div className="flex flex-row items-center">
            <BsArrowUpShort className="w-8 h-8" />
            <p>
              27
              <span className="text-xs">C</span>
            </p>
          </div>
          <div className="flex flex-row items-center">
            <BsArrowDownShort className="w-8 h-8" />
            <p>
              12<span className="text-xs">C</span>
            </p>
          </div> */}
          <div className="flex flex-row items-center">
            <BsEye className="w-6 h-6 mx-2" />
            <p className="font-medium">{gradeVisibility(data.avgvis_miles)}</p>
          </div>
          <div className="flex flex-row items-center">
            {/* <BsSun className="w-6 h-6 mx-2" /> */}
            <p>UV</p>
            <p className="pl-1 font-medium">{data.uv}</p>
          </div>
          <div className="flex flex-row items-center">
            <BsWind className="w-6 h-6 mr-2" />
            <p className="font-medium">{data.maxwind_mph.toFixed(0)} mph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { PrimaryCard, HourlyCard, DailyCard, MiniCard };
