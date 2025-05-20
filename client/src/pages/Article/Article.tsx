import "./Article.css";
import {Link} from "react-router-dom";

function Article(){
    return(
        <>
            <div style={{padding:"10px", gap:"20px"}}>
                <h1 style={{fontSize:"50px"}}>러시아 우크라이나 공격</h1>
                <div className="container">
                   <div className="left">
                    <span style={{fontSize:"25px"}}>From the Left</span>
                   </div>
                   <div className="center">
                    <span style={{fontSize:"25px"}}>From the Center</span>
                   </div>
                   <div className="right">
                    <span style={{fontSize:"25px"}}>From the Right</span>
                   </div>
                </div>
                <div className="container">
                    <Link to="./leftDetail1">
                        <div className="article">
                            <div className="articleImage8" />
                            <h2 style={{fontSize:"30px"}}> 러시아의 만행, 평화 희망 무너뜨려…미국 외교에 대한 의구심 확산</h2>
                            <p> - 러시아, 우크라이나 북동부서 민간인 버스에 의도적으로 잔혹한 드론 공격, 9명 사망. 우크라, "냉혹한 전쟁 범죄" 규탄.</p>
                            <p>- 이 치명적 공격은 러시아가 우크라이나 영토에 대한 받아들일 수 없는 극단적 요구 고수한 평화 회담 직후 발생. 휴전 논의 실질적 진전에 타격.</p> 
                            <p>- 미국의 외교 노력, 특히 트럼프 대통령 방식에 대해 비판 커짐. 일부는 이러한 방식이 오히려 푸틴 정권을 고무시킬 수 있다고 우려.</p>
                        </div>
                    </Link>
                    <Link to="./centerDetail1">
                        <div className="article">
                            <div className="articleImage9" />
                            <h2 style={{fontSize:"30px"}}> 우크라이나 민간 버스 공격, 평화회담 실패 직후 발생 </h2>
                            <p>- 우크라이나 수미(Sumy) 지역에서 발생한 러시아의 드론 공격, 민간 미니버스 타격 받아 9명 사망.</p>
                            <p>- 러-우 평화회담 직후  사건 발생, 회담은 휴전 합의에는 이르지 못했지만 포로 교환 계획 합의.</p>
                            <p> - 미국, 프랑스, 영국 등 주요국 지도자들, 회담과 전쟁 상황에 입장 표명. 제재 강화를 촉구하거나 평화 달성 위한 다양한 접근법 제시. </p>
                        </div>
                    </Link>
                    <Link to="./rightDetail1">
                        <div className="article">
                            <div className="articleImage10" />
                            <h2 style={{fontSize:"30px"}}> 잔혹한 러시아 드론 공격, 평화회담 결렬 직후 민간인 희생 </h2>
                            <p>-러시아가 우크라이나 민간 미니버스를 잔혹하게 드론으로 공격, 최소 9명이 사망, 우크라이나 당국 이를 "냉소적인 전쟁 범죄"라고 비판. </p>
                            <p>- 이번 치명적 공격은 터키서 열린 러-우크라 직접 평화회담이 휴전 합의 없이 결렬된 직후 발생. 다만 양측은 대규모 포로 교환에는 합의. </p>
                            <p>- 트럼프 대통령, 합의 불발 시 제재 검토 언급. 푸틴과의 회담을 통해 갈등을 종식시킬 수 있다고 거듭 주장. </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Article;