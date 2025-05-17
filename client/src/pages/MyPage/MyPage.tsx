import React from "react";
import { useAuth } from '../../context/AuthContext';
import "./MyPage.css";
import img17 from "../../assets/img17.png";
import img18 from "../../assets/img18.png";

const MyPage: React.FC = () => {
  const {logout} = useAuth();
  return (
    <div className="mypage-container">
      {/* 헤더는 제외됨 */}

      <section className="profile-section">
        <img
          className="profile-circle"
          src="https://ikjun.com/_next/image?url=%2Fimg%2Fprofile_round3.png&w=640&q=75"
          alt="프로필"
        />
        <div className="profile-info">
          <div className="profile-name">최익준</div>
          <div className="profile-sub">dev@ikjun.com</div>
        </div>
        <div className="profile-badge">
          <img
            className="badge-icon"
            src={img17}
            alt="배지"
          />
          <div className="badge-text">
            3월
            <br />
            토론왕
          </div>
        </div>
        <div className="profile-badge">
          <img
            className="badge-icon"
            src={img18}
            alt="배지"
          />
          <div className="badge-text">
            토론
            <br />
            10회 달성
          </div>
        </div>
      </section>

      <section className="bias-section">
        <div className="bias-legend">
          <div className="legend-box left">L 33%</div>
          <div className="legend-box center">C 47%</div>
          <div className="legend-box right">R 20%</div>
        </div>
        <div className="bias-bar">
          <div className="bias-segment left" style={{ width: "33%" }} />
          <div className="bias-segment center" style={{ width: "47%" }} />
          <div className="bias-segment right" style={{ width: "20%" }} />
        </div>
      </section>

      <section className="topic-section">
        <h2>내가 봤던 토픽 📚</h2>
        <div className="topic-item">
          <img
            className="topic-thumbnail"
            src="https://cdn.dtnews24.com/news/photo/202408/777686_394940_019.jpg"
          />
          <div className="topic-text">
            <div className="topic-title">기후위기 해법</div>
            <div className="topic-sub">
              이상 기후 심화에 대한 대처 방안과 그에 따른 기대효과
            </div>
          </div>
        </div>
        <div className="topic-item">
          <img
            className="topic-thumbnail"
            src="https://pimg.mk.co.kr/news/cms/202411/01/news-p.v1.20241031.a977867e61204e69b466e1c5ebea4e49_P1.jpg"
          />
          <div className="topic-text">
            <div className="topic-title">부동산 정책 논쟁</div>
            <div className="topic-sub">
              부동산 가격 상승에 대한 정부 정책과 그에 대한 반응
            </div>
          </div>
        </div>
      </section>

      <section className="topic-section">
        <h2>토론 기록 보기 <span onClick={() => {
          logout();
          location.href="/";
        }}>💬</span></h2>
        <div className="topic-item">
          <img
            className="topic-thumbnail"
            src="https://cdn.sisain.co.kr/news/photo/201707/29707_57474_2122.jpg"
          />
          <div className="topic-text">
            <div className="topic-title">최저임금 인상 찬반</div>
            <div className="topic-sub">
              "최저임금 인상은 경제에 긍정적인 영향을 미친다"고 주장
            </div>
          </div>
        </div>
        <div className="topic-item">
          <img
            className="topic-thumbnail"
            src="https://www.npsonair.kr/photo/file_img_view.php?strContent=JUJGJTBFJUY1JTkzSSU3QyU4MyUwNCVFNCVFRSVDNCVBRSUwQWdvdiVDNyUwRiUzRU8lRDclQTlNJTBCJTQwLSU4M1Z6JUZBOCVCOUFjJUY3JUQwJTAwJUZGNSVCMyUyOSVBQiU3QiVEMUIlRTNPZSUxQyUwOSU4RCU5OSU4QyVFNXQlRDYlMjklMDQlQTUxJUI1JUU4JTFDJUJBJUFFJUUwJUM4JUExZiVEOCUxNSVFM20lODglQjElREQlOUUlOTE="
          />
          <div className="topic-text">
            <div className="topic-title">의무 병역제 폐지?</div>
            <div className="topic-sub">
              "의무 복무 제도는 국방 시스템의 기반이 된다"고 주장
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
