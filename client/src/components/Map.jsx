import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Button from "./Button";
import NotificationPanel from "./Notification";
import { notifications } from "../utils/notificationData";

function Map() {
  const [center, setCenter] = useState({ lat: '', lng: '' });
  const [mapType, setMapType] = useState("hybrid");
  const [Notifications, setNotifications] = useState(notifications);

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/locations`);
      const data = await res.json();
      console.log(data);
      setCenter({ lat: data?.location?.lat, lng: data.location.lng });
    };

    fetchLocation();
  }, []);

  const handleDelete = (id) => {
    setNotifications((prev) => {
      return prev.filter((each) => {
        return each.id != id;
      })
    })
  }

  return (
    <div className='px-4 py-6'>

      <div className="w-full lg:h-screen flex flex-col lg:flex-row gap-7">
        <div className="w-full lg:w-[70%]">
          <div className="w-full h-14 bg-subHeadColor flex items-center px-4">
            <div className="text-white flex gap-1 items-center">
              <h1 className="text-xs font-medium">Area</h1>
              <span className="font-thin">
                <i className="fa-solid fa-crosshairs"></i>
              </span>
            </div>
          </div>
          {center.lat && center.lng &&
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={15}
                options={{
                  mapTypeId: mapType,
                  mapTypeControl: true,
                  streetViewControl: true,
                  fullscreenControl: true,
                }}
              >
                <Marker position={center} />
                <Button mapType={mapType} setMapType={setMapType} />
              </GoogleMap>
            </LoadScript>
          }
        </div>
        <div className="flex-1 flex flex-col gap-2 h-fit">
          {
            Notifications?.map((data, ind) => (
              <NotificationPanel Notification={data} key={ind} handleDelete={handleDelete} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Map