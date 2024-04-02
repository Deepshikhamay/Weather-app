import desktop from "../src/images/pic.jpg";
import laptop from "../src/images/pic1.jpg";
import "./App.css";
import Temperature from "./component/temperature";
import { FaCloudSunRain } from "react-icons/fa6";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("Bangalore");
  const [weatherData, setWeatherData] = useState(null);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=fefe606768064edbad4105518243103&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  console.log("weatherData ", weatherData);

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src={desktop}
          alt=""
          height={3000}
          width={3000}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex justify-center items-center py-[150px] relative ">
        <div className="absolute inset-0 -z-10 mt-[10%]">
          <img
            className="shadow-xl shadow-black rounded-lg ml-[20%]"
            src={laptop}
            alt=" "
            height={1000}
            width={800}
          />
        </div>

        <div>
          <div className="mt-10 flex ">
            <input
              type="text"
              placeholder="Enter Your City"
              className="text-xl rounded-md p-2 mr-[420px] text-white bg-slate-900 focus:outline-none shadow-lg shadow-black"
              onChange={handleCityChange}
              defaultValue="Bangalore"
            />

            <button
              className="px-2 py-2 mr-[100px] focus:outline-none bg-black text-white rounded-lg border border-black shadow-lg shadow-black"
              onClick={(e) => {
                setCity(e.target.value);
              }}
            >
              search
            </button>
          </div>
        </div>
      </div>
      <div className=" h-screen flex justify-center ">
        <div className="w-1/2 h-1/4 flex justify-center -mr-32">
          <div className=" w-5 h-5 -mt-32 ">
            <FaCloudSunRain className="text-[80px] text-transform scale-100 hover:scale-110  " />
            <div className="mt-[20px] font-bold  ">
              <p className="mt-[60px] text-[60px] text-7xl text-transform scale-100 hover:scale-110">
                {weatherData?.current.temp_c}
                <span>°C</span>
              </p>
            </div>
          </div>

          <div className="font-bold mt-[200px] text-2xl -ml-20 text-transform scale-100 hover:scale-110">
            {weatherData?.location.localtime} | {city}
          </div>
        </div>

        <div className=" w-1/3 h-1/3 -mt-32 p-2  "></div>
      </div>

      {weatherData && (
        <>
          <Temperature
            stats={{
              title: "Wind status",
              value: weatherData.current.wind_mph,
              unit: "mph",
              direction: weatherData.current.wind_dir,
            }}
            name={{
              title: "Visibility",
              value: weatherData.current.vis_miles,
              unit: "miles",
            }}
            air={{
              title: "Air Pressure",
              value: weatherData.current.pressure_mb,
              unit: "mb",
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
