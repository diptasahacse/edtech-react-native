import { View, Text } from "react-native";
import React from "react";
import CourseDetailsPage from "@/components/CourseDetailsPage/CourseDetailsPage";
import { useLocalSearchParams } from "expo-router";

const CourseDetails = () => {
  const { id } = useLocalSearchParams();
  return <CourseDetailsPage id={Number(id)} />;
};

export default CourseDetails;
