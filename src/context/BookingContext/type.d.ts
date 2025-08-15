export type Booking = {
  id: number;
  facilityId: number;
  facilityName: string;
  userName: string;
  participants: number;
  date: Date;
};

export type BookingContextType = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
};
