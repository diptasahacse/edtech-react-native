import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CourseModel } from "../../src/models/courseCollectionModel";
interface IProps {
  course: CourseModel;
}
export default function CourseCard({ course }: IProps) {
  const onBuy = () => {
    console.log("Buy Now");
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: course.getThumbnailImage() }}
        style={styles.image}
      />
      <Text style={styles.title}>{course.getTitleEn()}</Text>
      <Text style={styles.description}>{course.getDescriptionEn()}</Text>
      <Text style={styles.price}>{course.getPrice()}</Text>
      <TouchableOpacity style={styles.button} onPress={onBuy}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
