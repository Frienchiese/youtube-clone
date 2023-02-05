import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture, demoChannelTitle } from "../utils/constants";

const ChannelCard = ({
  channelDetail: {
    id: { channelId },
    snippet,
  },
}) => {
  console.log(channelId, snippet);
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
              mb: 2,
            }}
          />
          <Typography variant="h6">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
