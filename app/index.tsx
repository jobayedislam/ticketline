import DestinationInput from "@/components/DestinationInput";
import LoadingOverlay from "@/components/LoadingOverlay";
import TravelDateInput from "@/components/TravelDateInput";
import { CITIES } from "@/data/data";
import useDelayedNavigation from "@/utils/DelayedNavigation";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  Card,
  HelperText,
  IconButton,
  Surface,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [fromText, setFromText] = useState<string>("");
  const [toText, setToText] = useState<string>("");
  const [dateText, setDateText] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState({
    from: "",
    to: "",
    date: "",
  });
  const { isLoading, navigateWithDelay } = useDelayedNavigation();

  const handleSwap = () => {
    const temp = fromText;
    setFromText(toText);
    setToText(temp);
  };

  const handleSearch = () => {
    let valid = true;
    let newErrors = { from: "", to: "", date: "" };

    if (!fromText) {
      newErrors.from = "Please select a starting point";
      valid = false;
    }
    if (!toText) {
      newErrors.to = "Please select a destination point";
      valid = false;
    }
    if (fromText && toText && fromText === toText) {
      newErrors.from = "Starting and destination point cannot be the same.";
      newErrors.to = "Starting and destination point cannot be the same.";
      valid = false;
    }
    if (!dateText || dateText === undefined) {
      newErrors.date = "Please select a travel date";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      navigateWithDelay("/bus-results", 1000);
    }
  };

  return (
    <Surface style={[styles.rootSurface, { paddingBottom: insets.bottom }]}>
      <LoadingOverlay visible={isLoading} message="Loading search results" />
      <Appbar.Header>
        <Appbar.Content title="Search destination" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card mode="contained">
          <Card.Content>
            <DestinationInput
              label="From"
              value={fromText}
              onSelect={(text) => {
                setFromText(text);
                if (text) setErrors((prev) => ({ ...prev, from: "" }));
              }}
              destinations={CITIES}
              isError={!!errors.from}
            />
            {errors.from && (
              <HelperText type="error" visible={!!errors.from}>
                {errors.from}
              </HelperText>
            )}

            <View style={styles.swapIcon}>
              <IconButton
                icon="swap-vertical"
                size={30}
                mode="outlined"
                onPress={handleSwap}
              />
            </View>

            <DestinationInput
              label="To"
              value={toText}
              onSelect={(text) => {
                setToText(text);
                if (text) setErrors((prev) => ({ ...prev, to: "" }));
              }}
              destinations={CITIES}
              isError={!!errors.to}
            />

            {errors.to && (
              <HelperText type="error" visible={!!errors.to}>
                {errors.to}
              </HelperText>
            )}
          </Card.Content>
        </Card>

        <Card mode="contained" style={styles.dateCard}>
          <Card.Content>
            <TravelDateInput
              value={dateText}
              onPick={(date) => {
                setDateText(date);
                if (date) setErrors((prev) => ({ ...prev, date: "" }));
              }}
            />
            {errors.date && (
              <HelperText type="error" visible={!!errors.date}>
                {errors.date}
              </HelperText>
            )}
          </Card.Content>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => handleSearch()}
            icon="magnify"
            style={styles.primaryButton}
            contentStyle={styles.buttonHeight}
            labelStyle={styles.primaryButtonLabel}
          >
            Search
          </Button>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  rootSurface: { flex: 1 },

  container: {
    padding: 16,
  },

  swapIcon: {
    alignItems: "center",
    margin: 5,
  },

  dateCard: {
    marginTop: 20,
  },

  buttonContainer: {
    marginTop: 20,
    gap: 8,
  },

  primaryButton: {
    borderRadius: 8,
  },

  primaryButtonLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonHeight: {
    height: 52,
  },
});

export default HomeScreen;
