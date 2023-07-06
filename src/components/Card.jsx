import {
  BsCloudSunFill,
  BsArrowUpShort,
  BsArrowDownShort,
  BsArrowRightShort,
  BsWater,
  BsEye,
} from "react-icons/bs";
const PrimaryCard = ({ location, temp }) => {
  return (
    <div className="py-4 px-8 rounded-xl w-max text-gray-800">
      <div>
        <h2 className="font-bold text-4xl">{location}</h2>
        <h3 className="text-sm py-2">Updated 5 minutes ago</h3>
      </div>

      <div className="flex flex-row items-center">
        <h1 className="font-extrabold text-9xl">
          {temp}
          <span className="text-5xl">C</span>
        </h1>
        <div className="h-20 w-20 ml-10">
          <BsCloudSunFill className="w-full h-full" />
        </div>
      </div>
      <h3 className="text-2xl py-4">Mostly sunny</h3>
      <div className="flex flex-row justify-evenly lg:justify-start items-center py-4 gap-6">
        <div className="flex flex-row items-center">
          <BsArrowUpShort className="w-8 h-8" />
          <p>21C</p>
        </div>
        <div className="flex flex-row items-center">
          <BsArrowDownShort className="w-8 h-8" />
          <p>12C</p>
        </div>
      </div>

      <div className="flex flex-row justify-evenly lg:justify-start gap-4 items-center pt-6">
        <div className="flex flex-row items-center">
          <BsEye className="w-6 h-6 mr-2" />
          <p>Good</p>
        </div>
        <div className="flex flex-row items-center">
          <BsWater className="w-6 h-6 mx-2" />
          <p>54%</p>
        </div>
        <div className="flex flex-row items-center">
          <BsArrowRightShort className="w-8 h-8" />
          <p>24 mph</p>
        </div>
      </div>
    </div>
  );
};

const HourlyCard = ({ time, temp }) => {
  return (
    <div className="py-6 px-8 rounded-xl l w-full h-full lg:w-fit glass-card text-gray-800 text-center ">
      <div className="flex flex-col lg:items-center lg:justify-center">
        <div className="flex flex-col">
          <div className="font-bold text-4xl">
            {temp}
            <span className="text-xl">C</span>
          </div>
          <div className="font-medium py-2 ">{time}</div>
        </div>
        <div className="h-12 w-12 mx-auto">
          <BsCloudSunFill className="w-full h-full" />
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

const DailyCard = ({}) => {
  return (
    <div className="py-4 px-8  rounded-xl l w-full glass-card-again text-gray-800 ">
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <div className="font-bold text-4xl opacity-100">
            26
            <span className="text-xl">C</span>
          </div>
          <div className="font-medium py-2">Thursday</div>
        </div>
        <div className="h-14 w-14 lg:h-16 lg:w-16 mx-auto">
          <BsCloudSunFill className="w-full h-full" />
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
          <BsArrowRightShort className="w-8 h-8" />
          <p>24 mph</p>
        </div>
      </div>
    </div>
  );
};

export { PrimaryCard, HourlyCard, DailyCard };
