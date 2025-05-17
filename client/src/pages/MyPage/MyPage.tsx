import React from "react";
import "./MyPage.css";

const MyPage: React.FC = () => {
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
            src="https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-a4f4-61fb-9cff-cb31893a3c47/raw?se=2025-05-17T19%3A31%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-17T18%3A23%3A11Z&ske=2025-05-18T18%3A23%3A11Z&sks=b&skv=2024-08-04&sig=2VOMcbP1JQfiLihfR2mOMki4QsHRRG0zWHjtzWldkeU%3D"
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
            src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-a128-622f-8061-f6eaf164ddf2/raw?se=2025-05-17T19%3A32%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-17T01%3A30%3A49Z&ske=2025-05-18T01%3A30%3A49Z&sks=b&skv=2024-08-04&sig=h8/Ixw4psIbteRyyffGWCbaWGWPG0YwsimjfitZHqL4%3D"
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
        <h2>토론 기록 보기 💬</h2>
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
