import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { TextInput } from "react-native-paper";
import {
  DatePickerModal,
  enGB,
  registerTranslation,
} from "react-native-paper-dates";
registerTranslation("en-GB", enGB);

interface TravelDateInputProps {
  value: Date | undefined;
  onPick: (date: Date | undefined) => void;
}

const TravelDateInput: React.FC<TravelDateInputProps> = ({ value, onPick }) => {
  const [visible, setVisible] = useState(false);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const onDismiss = () => setVisible(false);

  const onConfirm = (params: { date: Date | undefined }) => {
    setVisible(false);
    onPick(params.date);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <View>
      <Pressable onPress={() => setVisible(true)}>
        <View pointerEvents="none">
          <TextInput
            label="Travel Date"
            value={formatDate(value)}
            mode="outlined"
            placeholder="Select Date"
            left={<TextInput.Icon icon="calendar" />}
            editable={false}
          />
        </View>
      </Pressable>

      <DatePickerModal
        locale="en-GB"
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        date={value}
        onConfirm={onConfirm}
        validRange={{
          startDate: today,
        }}
      />
    </View>
  );
};

export default TravelDateInput;
