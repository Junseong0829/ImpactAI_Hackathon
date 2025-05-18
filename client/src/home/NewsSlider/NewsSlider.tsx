import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsSlider.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

const newsItems = [
  {
    title: "도널드 트럼프의 관세 정책",
    image: img1,
    link: "https://example.com/article1",
  },
  {
    title: "러시아의 우크라이나 공격",
    image: img2,
    link: "https://example.com/article2",
  },
  {
    title: "윤석열 대통령 탄핵",
    image: img3,
    link: "https://example.com/article3",
  },
  {
    title: "중국-대만 갈등",
    image: img4,
    link: "https://example.com/article3",
  },
];

function NewsSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500,
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
                  <Link to="/article1">
                    <button style={{ marginTop: "5px" }}>기사 보기 ›</button>
                  </Link>
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
