import React, { createContext, useState, ReactNode } from "react";
import { Booking, BookingContextType } from "./type";

export const BookingContext = createContext<BookingContextType>({
  bookings: [],
  addBooking: () => {},
});

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
