import React from "react";
import Head from "next/head";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YoutubeEmbedProps {
  videoId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({videoId}) => {
  return (
    <div className="youtube-video-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="youtube-video">
        <LiteYouTubeEmbed
          id={videoId}
          title="What's new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
