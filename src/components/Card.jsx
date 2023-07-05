// export default function Card() {
import { BsCloudSunFill } from "react-icons/bs";
const PrimaryCard = ({ location, temp }) => {
  return (
    <div className=" py-4 px-8 rounded-xl l w-fit backdrop-blur-2xl">
      <div>
        <h2 className="font-bold text-4xl">{location}</h2>
        <h3 className="text-sm py-2">Updated 5 minutes ago</h3>
      </div>

      <div className="flex flex-row items-center ">
        <h1 className="font-extrabold text-9xl">
          {temp}
          <span className="text-5xl">C</span>
        </h1>
        <div className="h-16 w-16 ml-8">
          <BsCloudSunFill className="w-full h-full" />
        </div>
      </div>
      <h3 className="text-2xl pt-4">Mostly sunny</h3>
    </div>
  );
};

//   return (
//     <>
//       <div class="max-w-sm rounded overflow-hidden shadow-lg my-2">
//         <img
//           class="w-full"
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
//           alt="Sunset in the mountains"
//         />
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//           <p class="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Voluptatibus quia, nulla!
//           </p>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             photography
//           </span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             travel
//           </span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             winter
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

export { PrimaryCard };
