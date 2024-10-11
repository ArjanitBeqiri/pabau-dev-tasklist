import Link from "next/link";
import BookingList from "./components/BookingList";

async function getBookings() {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
    mode: "no-cors",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Current booking count: {bookings.length}
        </h1>
        <BookingList bookings={bookings} />
        <Link href="/create-booking">
          <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">
            Create New Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
