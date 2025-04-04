import { useGetCourse } from "@/src/lib/core-react/hooks/public/useCourse";
import {
  CourseCollectionModel,
  CourseModel,
} from "@/src/models/courseCollectionModel";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Button,
} from "react-native";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

interface IProps {
  id: number;
}
const CourseDetailsPage = ({ id }: IProps) => {
  const { data, error, isLoading } = useGetCourse({
    all: true,
    course_id: id,
  });

  const courseDetails = data ? new CourseCollectionModel(data.data) : undefined;

  const course = courseDetails?.getData().getCourses();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return "Error";
  }
  if (course instanceof CourseModel) {
    // Extract YouTube video ID from the full URL
    const getYouTubeVideoId = (url: string): string | null => {
      const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(course.getThumbnailVideo());
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {/* Thumbnail Image */}
          <Image
            source={{
              uri: `https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg`,
            }}
            style={styles.thumbnail}
          />

          {/* Title */}
          <Text style={styles.title}>{course.getTitleEn()}</Text>
          <Text style={styles.subTitle}>{course.getTitleBn()}</Text>

          {/* Category */}
          <Text style={styles.category}>
            Category: {course.getCourseCategory()?.getCategoryName()}
          </Text>

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{course.getDescriptionEn()}</Text>
          <Text style={styles.description}>{course.getDescriptionBn()}</Text>

          {/* Video Preview Button */}
          <VideoPlayer youtubeLink={course.getThumbnailVideo()} />

          {/* Pricing */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>৳ {course.getPrice()}</Text>
            {course.getOldPrice() && (
              <Text style={styles.oldPrice}>৳ {course.getOldPrice()}</Text>
            )}
          </View>

          {/* Difficulty & Tag */}
          <Text style={styles.meta}>Difficulty: {course.getDifficulty()}</Text>
          <Text style={styles.meta}>Tag: {course.getTag()}</Text>

          {course.getType() === "paid" && (
            <TouchableOpacity
              onPress={() => {
                console.log("Clicked")
              }}
              style={styles.videoButton}
            >
              <Text style={styles.videoButtonText}>🎬 Purchase</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 16,
  },
  subTitle: {
    fontSize: 16,
    color: "#555",
  },
  category: {
    marginTop: 8,
    fontStyle: "italic",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 22,
    color: "#444",
  },
  videoButton: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  videoButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  priceContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#28a745",
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  meta: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
});

export default CourseDetailsPage;
