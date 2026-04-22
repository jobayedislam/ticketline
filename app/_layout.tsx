import { BookingProvider } from "@/context/BookingContext";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <BookingProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="bus-results" options={{ headerShown: false }} />
          <Stack.Screen name="select-seats" options={{ headerShown: false }} />
          <Stack.Screen
            name="ticket-confirm"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="payment" options={{ headerShown: false }} />
        </Stack>
      </BookingProvider>
    </PaperProvider>
  );
}
