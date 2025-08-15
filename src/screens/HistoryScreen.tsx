import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { BookingContext } from "../context/BookingContext/BookingContext";

export default function HistoryScreen() {
  const { bookings } = useContext(BookingContext);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {bookings.length === 0 ? (
        <Text className="text-gray-500 font-sans text-center mt-10">
          No bookings found
        </Text>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-white p-4 rounded-xl mb-3 shadow-sm">
              <Text className="text-lg font-heading text-gray-800 mb-1">
                {item.facilityName}
              </Text>
              <Text className="text-gray-600 font-sans">
                Name: {item.userName}
              </Text>
              <Text className="text-gray-600 font-sans">
                Participants: {item.participants}
              </Text>
              <Text className="text-gray-600 font-sans">
                Date: {item.date.toLocaleDateString()}{" "}
                {item.date.toLocaleTimeString()}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
