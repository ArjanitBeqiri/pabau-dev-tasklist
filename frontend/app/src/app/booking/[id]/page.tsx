import Link from "next/link";

async function getBooking(id: string) {
  const res = await fetch(
    `http://host.docker.internal:5000/api/bookings/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch booking");
  }
  return res.json();
}

export default async function BookingPage({
  params,
}: {
  params: { id: string };
}) {
  const booking = await getBooking(params.id);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Booking Details</h1>
      <p className="mt-2 text-gray-600">
        This booking is with {booking.doctor_name} for {booking.service} and it
        ends on {booking.end_time}.
      </p>
      <Link href="/">
        <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
