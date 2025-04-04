import React, { useCallback, useRef } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = (width * 9) / 16;

interface IProps {
  youtubeLink: string;
}

const VideoPlayer = ({ youtubeLink }: IProps) => {
  const playerRef = useRef(null);

  const getYouTubeVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : "";
  };

  const videoId = getYouTubeVideoId(youtubeLink);

  return (
    <View style={styles.videoContainer}>
      <YoutubePlayer
        ref={playerRef}
        height={VIDEO_HEIGHT}
        play={false}
        initialPlayerParams={{
            modestbranding: false,
           
        }}
        videoId={videoId}
        webViewProps={{
          allowsFullscreenVideo: true,
          allowsProtectedMedia: true,
        }}
        forceAndroidAutoplay={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    height: VIDEO_HEIGHT,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default VideoPlayer;
