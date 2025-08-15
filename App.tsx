import "./global.css";
import AppNavigator from "./src/navigation/AppNavigator/AppNavigator";
import { BookingProvider } from "./src/context/BookingContext/BookingContext";

export default function App() {
  return (
    <BookingProvider>
      <AppNavigator />
    </BookingProvider>
  );
}
