import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import "./DiscussionSection.css";

function DiscussionSection(){
    return(
        <>
            <h2 style={{marginBottom:"0px", paddingLeft:"40px", fontSize:"36px", fontWeight:"800"}}>토론이 활발해요 🔥</h2>
            <div className="container">
                <div className="box">
                    <img alt="사진" src={img2} className="image"/>
                    <h3>러-우 전쟁 종전 협상</h3>
                    <p>36명이 AI와 토론 중</p>
                </div>
                <div className="box">
                    <img alt="사진" src={img3} className="image"/>
                    <h3>윤석열 대통령 탄핵</h3>
                    <p>34명이 AI와 토론 중</p>
                </div>
                <div className="box">
                    <img alt="사진" src={img4} className="image"/>
                    <h3>중국-대만 갈등</h3>
                    <p>12명이 AI와 토론 중</p>
                </div>
            </div>
            <h2 style={{marginTop:"0px", marginBottom:"0px", paddingLeft:"40px", fontSize:"36px", fontWeight:"800"}}>의견 차이가 심해요 😡</h2>
            <div className="container">
                <div className="box">
                    <img alt="사진" src={img5} className="image"/>
                    <h3>21대 대통령 선거</h3>
                    <div style={{ marginTop: "5px",display: "flex", alignItems: "center", gap: "15px", color:"gray" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img alt="left" src={left} width={15} />
                            <span>1,190명</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img alt="right" src={right} width={15} />
                            <span>1,127명</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img alt="사진" src={img6} className="image"/>
                    <h3>윤석열 국민의 힘 탈당</h3>
                    <div style={{ marginTop: "5px",display: "flex", alignItems: "center", gap: "15px", color:"gray" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img alt="left" src={left} width={15} />
                            <span>1,080명</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img alt="right" src={right} width={15} />
                            <span>1,120명</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img alt="사진" src={img7} className="image"/>
                    <h3>중국-대만 갈등</h3>
                    <div style={{ marginTop: "5px",display: "flex", alignItems: "center", gap: "15px", color:"gray" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img alt="left" src={left} width={15} />
                            <span>3,190명</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <img alt="right" src={right} width={15} />
                            <span>2,472명</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DiscussionSection;