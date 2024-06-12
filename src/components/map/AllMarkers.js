import { useState } from "react";

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState([
    {
      place_id: "1",
      geometry: { location: { lat: 40.1792, lng: 44.4991 } },
      name: "ԿԵՆՏՐՈՆ 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "250.000",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "2",
      geometry: { location: { lat: 40.1844, lng: 44.5152 } },
      name: "ԿԵՆՏՐՈՆ 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "120,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "3",
      geometry: { location: { lat: 40.1915, lng: 44.509 } },
      name: "ԿԵՆՏՐՈՆ 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "200,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "4",
      geometry: { location: { lat: 40.1912, lng: 44.5061 } },
      name: "ԿԵՆՏՐՈՆ 2 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "85.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "5",
      geometry: { location: { lat: 40.1854, lng: 44.504 } },
      name: "ԿԵՆՏՐՈՆ 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "96.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "6",
      geometry: { location: { lat: 40.184, lng: 44.5105 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "98,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "7",
      geometry: { location: { lat: 40.1816, lng: 44.5048 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "123,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "8",
      geometry: { location: { lat: 40.1773, lng: 44.5086 } },
      name: "ԿԵՆՏՐՈՆ: 2 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "80,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "9",
      geometry: { location: { lat: 40.1748, lng: 44.4986 } },
      name: "ԿԵՆՏՐՈՆ: 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "202,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "10",
      geometry: { location: { lat: 40.1762, lng: 44.5104 } },
      name: "ԿԵՆՏՐՈՆ: 2 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "87,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "11",
      geometry: { location: { lat: 40.1811, lng: 44.5076 } },
      name: "ԿԵՆՏՐՈՆ: 1 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "55,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "12",
      geometry: { location: { lat: 40.1796, lng: 44.5048 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "165,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "13",
      geometry: { location: { lat: 40.178, lng: 44.5053 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "113,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "14",
      geometry: { location: { lat: 40.181, lng: 44.501 } },
      name: "ԿԵՆՏՐՈՆ: 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "180,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "15",
      geometry: { location: { lat: 40.184, lng: 44.498 } },
      name: "МԿԵՆՏՐՈՆ: 2 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "88,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "16",
      geometry: { location: { lat: 40.183, lng: 44.507 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "121.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "17",
      geometry: { location: { lat: 40.1825, lng: 44.5045 } },
      name: "ԿԵՆՏՐՈՆ: 1 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "55.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "18",
      geometry: { location: { lat: 40.1798, lng: 44.5093 } },
      name: "ԿԵՆՏՐՈՆ: 1 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "69,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "19",
      geometry: { location: { lat: 40.1782, lng: 44.5059 } },
      name: "ԿԵՆՏՐՈՆ: 2 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "97,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "20",
      geometry: { location: { lat: 40.1803, lng: 44.503 } },
      name: "ԿԵՆՏՐՈՆ: 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "199,000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },

    {
      place_id: "21",
      geometry: { location: { lat: 40.1496, lng: 44.5158 } },
      name: "ԿԵՆՏՐՈՆ: 5 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "245.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "22",
      geometry: { location: { lat: 40.1512, lng: 44.5116 } },
      name: "ԿԵՆՏՐՈՆ: 1 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "68.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "23",
      geometry: { location: { lat: 40.1481, lng: 44.5213 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "156.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "24",
      geometry: { location: { lat: 40.1504, lng: 44.5195 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "132.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "25",
      geometry: { location: { lat: 40.1465, lng: 44.5201 } },
      name: "ԿԵՆՏՐՈՆ: 2 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "106.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "26",
      geometry: { location: { lat: 40.188, lng: 44.535 } },
      name: "ԿԵՆՏՐՈՆ: 1 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "75.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "27",
      geometry: { location: { lat: 40.185, lng: 44.532 } },
      name: "ԿԵՆՏՐՈՆ: 3 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "100.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "28",
      geometry: { location: { lat: 40.191, lng: 44.536 } },
      name: "ԿԵՆՏՐՈՆ: 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "210.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "29",
      geometry: { location: { lat: 40.187, lng: 44.532 } },
      name: "ԿԵՆՏՐՈՆ: 4 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "200.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
    {
      place_id: "30",
      geometry: { location: { lat: 40.183, lng: 44.528 } },
      name: "ԿԵՆՏՐՈՆ: 6 ՍԵՆՅԱԿԱՆՈՑ ԲՆԱԿԱՐԱՆ",
      price: "340.000$",
      img: "https://media.designcafe.com/wp-content/uploads/2023/03/14120252/mansion-interior.jpg",
      about: "",
    },
  ]);
  const updateSearchResults = (newResults) => {
    setSearchResults(newResults);
  };

  return [searchResults, updateSearchResults];
};