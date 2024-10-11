import Link from "next/link";

interface Booking {
  id: number;
  date: string;
  start_time: string;
  doctor_name: string;
  service: string;
  end_time: string;
}

export default function BookingList({ bookings }: { bookings: Booking[] }) {
  return (
    <ul className="space-y-4">
      {bookings.map((booking) => (
        <li
          key={booking.id}
          className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200"
        >
          <Link
            href={`/booking/${booking.id}`}
            className="text-blue-500 hover:underline"
          >
            A booking on {booking.date} starting at {booking.start_time}
          </Link>
        </li>
      ))}
    </ul>
  );
}
