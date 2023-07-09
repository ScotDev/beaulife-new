import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PrimaryCard, HourlyCard, DailyCard } from "../components/Card";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { getWeatherData } from "../utils/getWeatherData";

export default function SearchResult() {
  let { lat, long } = useParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      if (lat && long) {
        setError("");
        setIsloading(true);
        const res = await getWeatherData({ lat, long });
        if (!res.error) {
          setData(res);
        } else {
          console.log(res.axiosError);
          setError(res.error);
        }
      }
    })();

    setTimeout(() => {
      setIsloading(false);
    }, 700);
  }, [lat, long]);

  return (
    <>
      <div className="background">
        <div className="background-color-pinkish"></div>
      </div>
      <div className="flex flex-col items-center h-screen">
        <Navbar />
        <main className="container">
          <div className="flex flex-col lg:flex-row gap-10 py-4">
            <div className="grid place-items-center mx-auto">
              {isLoading && <Loading />}
              {error && (
                <div className="grid place-items-center py-4 px-8 ">
                  <p className="text-lg font-medium">An error occured</p>
                  <p className="text-center pt-4 max-w-xs">{error}</p>
                </div>
              )}
            </div>

            {data && !isLoading && <PrimaryCard data={data} />}

            <div id="scrollable" className="scroller">
              {data &&
                !isLoading &&
                data?.data?.hourlyData?.map((item, index) => {
                  return (
                    <div key={index} className="scroll-item">
                      <HourlyCard data={item} />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="grid place-items-center gap-6 py-6 w-full lg:w-2/5">
            {data &&
              !isLoading &&
              data?.data?.dailyData?.map((item, index) => {
                return <DailyCard key={index} data={item} />;
              })}
          </div>
        </main>
      </div>
    </>
  );
}
