import React, { useState, useEffect, useRef } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useSearchResults } from "./AllMarkers";

const ArmeniaMap = ({ google }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [autoCompleteService, setAutoCompleteService] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [searchResults, setSearchResults] = useSearchResults();
  const mapRef = useRef(null);

  useEffect(() => {
    const autoCompleteService = new google.maps.places.AutocompleteService();
    setAutoCompleteService(autoCompleteService);
  }, [google]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (autoCompleteService) {
      autoCompleteService.getPlacePredictions(
        {
          input: query,
          componentRestrictions: { country: "am" },
          types: ["geocode"],
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setSearchResults(results);
          } else {
            console.error(
              "Ошибка при выполнении запроса автозаполнения:",
              status
            );
          }
        }
      );
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (google) {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.textSearch(
        {
          query: searchQuery,
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setSearchResults(results);

            if (results.length > 0) {
              const location = results[0].geometry.location;
              mapRef.current.map.setCenter(location);
              mapRef.current.map.setZoom(12);
            }
          } else {
            console.error("Ошибка при выполнении запроса поиска:", status);
          }
        }
      );
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.description);
    handleSearchSubmit(new window.Event("submit"));
  };

  const handleMarkerClick = (result) => {
    if (selectedMarker === result) {
      setSelectedMarker(null);
    } else {
      setSelectedMarker(result);
    }
  };

  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  const mapCustomStyles = [
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ weight: 5, visibility: "on" }],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ color: "#3FB56A" }],
    },
  ];

  return (
    <div className="">
      <div className="h-96 relative">
        <Map
          google={google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.0691, lng: 45.0382 }}
          ref={mapRef}
          styles={mapCustomStyles}
        >
          {searchResults.map(
            (result) =>
              result.geometry &&
              result.geometry.location && (
                <Marker
                  key={result.place_id}
                  position={result.geometry.location}
                  title={result.name}
                  onClick={() => handleMarkerClick(result)}
                />
              )
          )}
        </Map>
        {selectedMarker && (
          <div className="popup rounded-lg flex absolute left-10 top-2 bg-white w-1/3  text-2xl ">
            <img
              className="mx-auto rounded-2xl p-2 w-1/2"
              src={selectedMarker.img}
              alt="Место"
            />
            <div className="flex mt-3 flex-col text-neutral-500 text-lg ml-2 text-wrap  font-bold">
              <h3>{selectedMarker.name}</h3>
              <div className=" flex">
                <h3 className=" my-3">ԳԻՆԸ: </h3>
                <h3 className="text-green-500 my-3 ml-2">
                  {selectedMarker.price}
                </h3>
              </div>
            </div>
          </div>
        )}
        <form
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Գրեք հասցեն"
            className=" bg-white my-2  rounded-md py-2 pl-4 pr-3 border-emerald-300 border-2
              shadow-sm focus:outline-none focus:border-emerald-300 focus:ring-emerald-300 text-black
              focus:ring-1 sm:text-md transition duration-300 ease-in-out hover:bg-emerald-100 hover:border-emerald-500
              hover:text-emerald-900 hover:shadow-md cursor-pointer"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <ul className="absolute left-0 right-0 top-full bg-white border border-gray-300 rounded-b z-10">
              {searchResults.map((result) => (
                <li
                  key={result.place_id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(result)}
                >
                  {result.description}
                </li>
              ))}
            </ul>
          )}

          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold  rounded transition duration-300 transform hover:scale-105"
          >
            Որոնել
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCpmOS5-Hfw-5AU5YmI5atbQuxTJjXBKCw",
})(ArmeniaMap);
