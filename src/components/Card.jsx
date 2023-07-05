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
    <div className="py-4 px-8 rounded-xl l w-full lg:wi-fit text-gray-800">
      <div>
        <h2 className="font-bold text-4xl">{location}</h2>
        <h3 className="text-sm py-2">Updated 5 minutes ago</h3>
      </div>

      <div className="flex flex-row items-center ">
        <h1 className="font-extrabold text-9xl">
          {temp}
          <span className="text-5xl">C</span>
        </h1>
        <div className="h-20 w-20 ml-10">
          <BsCloudSunFill className="w-full h-full" />
        </div>
      </div>
      <h3 className="text-2xl pt-4">Mostly sunny</h3>
      <div className="flex flex-row justify-evenly items-center py-4">
        <div className="flex flex-row items-center">
          <BsArrowUpShort className="w-8 h-8" />
          <p>21C</p>
        </div>
        <div className="flex flex-row items-center">
          <BsArrowDownShort className="w-8 h-8" />
          <p>12C</p>
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center py-4">
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

const SecondaryCard = ({ time, temp }) => {
  return (
    <div className="py-4 px-8 rounded-xl l w-full lg:w-fit bg-gray-100 backdrop-blur-xl text-gray-800">
      <div className="flex flex-row lg:flex-col">
        <div className="flex flex-col">
          <div className="font-bold text-4xl">
            {temp}
            <span className="text-xl">C</span>
          </div>
          <div className="font-medium py-2">{time}</div>
        </div>
        <div className="h-12 w-12 mx-auto">
          <BsCloudSunFill className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center lg:pt-6">
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
      </div>
    </div>
  );
};

export { PrimaryCard, SecondaryCard };
