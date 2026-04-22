export interface TripDetailsType {
  from: string;
  to: string;
  month: string;
  day: string;
}

export interface BusTicketData {
  busId: string;
  company: string;
  busNumber: string;
  type: "AC" | "Non-AC";
  totalSeats: number;
  unavailableSeats: string[];
  startingTime: string;
  reportingTime: string;
  boardingPoint: string;
  price: number;
}

export const CITIES: string[] = [
  "Dhaka",
  "Chattogram",
  "Gazipur",
  "Narayanganj",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
  "Barishal",
  "Cumilla",
  "Bogura",
  "Cox's Bazar",
  "Jashore",
  "Kushtia",
  "Tangail",
  "Dinajpur",
  "Faridpur",
  "Sirajganj",
  "Feni",
  "Brahmanbaria",
  "Noakhali",
  "Chandpur",
  "Lakshmipur",
  "Pabna",
  "Naogaon",
  "Chapainawabganj",
  "Thakurgaon",
  "Panchagarh",
  "Kurigram",
  "Lalmonirhat",
  "Gaibandha",
  "Nilphamari",
  "Sherpur",
  "Netrokona",
  "Jamalpur",
  "Kishoreganj",
  "Manikganj",
  "Munshiganj",
  "Narsingdi",
  "Rajbari",
  "Gopalganj",
  "Madaripur",
  "Shariatpur",
  "Satkhira",
  "Bagerhat",
  "Jhenaidah",
  "Magura",
  "Narail",
  "Chuadanga",
  "Meherpur",
  "Bhola",
  "Patuakhali",
  "Pirojpur",
  "Jhalokathi",
  "Barguna",
  "Habiganj",
  "Moulvibazar",
  "Sunamganj",
  "Bandarban",
  "Rangamati",
  "Khagrachhari",
];
