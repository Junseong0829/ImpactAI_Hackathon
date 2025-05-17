import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsSlider.css"; // 스타일 파일 따로 관리

const newsItems = [
  {
    title: "도널드 트럼프의 관세 정책",
    image: "/assets/news1.jpg",
    link: "https://example.com/article1"
  },
  {
    title: "러-우 전쟁 종전 협상",
    image: "/assets/news2.jpg",
    link: "https://example.com/article2"
  },
  {
    title: "윤석열 대통령 탄핵",
    image: "/assets/news3.jpg",
    link: "https://example.com/article3"
  },
  {
    title: "중국-대만 갈등",
    image: "/assets/news3.jpg",
    link: "https://example.com/article3"
  },
  {
    title: "21대 대통령 선거",
    image: "/assets/news3.jpg",
    link: "https://example.com/article3"
  },
];

function NewsSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500
  };

  return (
    <div className="news-slider">
      <Slider {...settings}>
        {newsItems.map((item, idx) => (
          <div key={idx}>
            <div
              className="news-slide"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay">
                <div className="overlay2">
                  <h2>{item.title}</h2>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button>기사 보기 →</button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NewsSlider;