import React, { useState, useEffect } from "react";
import './video.css'
import axios from "axios";
import { Col } from "reactstrap";
import Subtitle from "./Subtitle";
const Videopart = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [video, setVideo] = useState([]);
  // Function to fetch the video feed and update the URL
  const fetchVideoFeed = async () => {
    try {
      const response = await fetch(
        "http://192.168.37.22:80/received_video_feed"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch video feed");
      }
      const blob = await response.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching video feed:", error);
    }
  };
  // Function to refresh the video feed
  const refreshVideoFeed = async () => {
    try {
      const response = await fetch(
        "http://192.168.37.22:80/refresh_video_feed"
      );
      if (!response.ok) {
        throw new Error("Failed to refresh video feed");
      }
      // After refreshing the video feed, fetch the updated video feed
      fetchVideoFeed();
    } catch (error) {
      console.error("Error refreshing video feed:", error);
    }
  };

  // Load the video feed when the component mounts
  useEffect(() => {
    fetchVideoFeed();

    // Refresh the video feed every 1 second
    const interval = setInterval(refreshVideoFeed, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <Col className="video-feed">
      <h5>Live Monitoring</h5>
      <img src={videoUrl} alt="Live Video Feed" controls/>
    </Col>
  );
};

export default Videopart;
