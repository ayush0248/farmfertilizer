import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../styles/sub-style/InformationSection.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const InformationSection = () => {
  const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/embed/HgPt61uRs20');

  const videos = [
    { id: 'HgPt61uRs20', title: 'Organic Farming Secrets' },
    { id: 'example2', title: '2 Factor Authentication' },
    { id: 'example3', title: 'Let\'s learn CyberSecurity' },
    { id: 'example4', title: 'How to be Safe' },
    { id: 'example5', title: 'Online Transactions' },
    // Add more video items as needed
  ];

  const handleVideoClick = (videoId) => {
    setCurrentVideo(`https://www.youtube.com/embed/${videoId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="information-section">
      <h2>Information Section</h2>
      <div className="video-player">
        <iframe
          src={currentVideo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
      </div>
      <Slider {...settings} className="video-carousel">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => handleVideoClick(video.id)}
          >
            <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="Video Thumbnail" />
            <p>{video.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InformationSection;
