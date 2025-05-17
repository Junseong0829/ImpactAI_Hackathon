import "./Detail.css";
import {Link} from "react-router-dom";
import PrettyProgressBar from "./PrettyProgressBar";
import logo3 from "../../../assets/logo3.svg";
import logo9 from "../../../assets/logo9.svg";
import logo10 from "../../../assets/logo10.svg";
import img10 from "../../../assets/img10.png";

function RightDetail(){
    return(
        <div className="Detail">
            <div className="article-tag-right">
                📌 From the Right – 이 뉴스는 보수 성향 시각에서 작성되었습니다.
            </div>
            <div style={{width:"60%", display:"block", margin:"0 auto", padding:"20px"}}>
                <img src={img10} style={{width:"100%", borderRadius:"20px"}} />
                <p style={{paddingLeft:"10px", fontSize:"15px", color:"gray", margin:"0px"}}>⏏ 러시아, 평화 회담 직후 민간 버스 '야만적 공격'... 최소 9명 사망</p>
                <p>우크라이나 북동부 수미 지역에서 토요일, 러시아의 드론이 민간인 승객을 태운 버스를 공격해 최소 9명이 사망하고 4명 이상이 부상하는 참사가 발생했습니다. 이번 공격은 러시아와 우크라이나가 몇 년 만에 처음으로 직접 평화 회담을 가졌으나 휴전 합의에는 실패한 지 불과 몇 시간 만에 자행되었습니다.</p>
                <p>수미 지역 행정부는 텔레그램을 통해 "이는 어떠한 위협도 가하지 않은 민간 운송 수단에 대한 고의적인 공격으로, 러시아의 또 다른 전쟁 범죄"라고 강력히 규탄했습니다. 우크라이나 국가경찰이 공개한 사진에는 빌로필리아 시내 도로 위에 지붕이 뜯겨 나가고 창문이 산산조각 난 버스의 처참한 모습이 담겼습니다. 볼로디미르 젤렌스키 우크라이나 대통령은 이번 공격을 "고의적인 민간인 살해"로 명명했으며, 현지에서는 희생자들을 기리기 위해 '검은 토요일'로 칭하며 애도 기간을 선포했습니다. 피해자 대부분은 대피 중이던 노년층 여성들이었던 것으로 알려졌습니다.</p>
                <p>러시아 국방부는 토요일 오전 수미 지역의 군사 장비 집결지를 타격했다고 주장했으나, 민간인 버스 공격에 대해서는 구체적인 언급을 회피했습니다.</p>
                <h1>성과 없는 평화 회담, 트럼프 대통령의 역할론 부상</h1>
                <p>앞서 금요일, 튀르키예에서 열린 러시아와 우크라이나 간 직접 평화 회담은 2022년 러시아의 침공 초기 이후 처음이었으나, 두 시간도 채 안 되어 휴전 합의 없이 끝났습니다. 양측은 각각 1,000명의 전쟁 포로를 교환하기로 합의한 것이 유일한 성과였지만, 전투 종식을 위한 핵심 조건에서는 여전히 현격한 입장차를 보였습니다.</p>
                <p>우크라이나는 서방 동맹국들의 지지 하에 평화 정착의 첫걸음으로 임시 휴전을 요구하고 있지만, 크렘린궁은 이를 거부하고 있습니다. 이러한 교착 상태에서 도널드 트럼프 전 미국 대통령의 역할론이 부상하고 있습니다. 젤렌스키 대통령은 트럼프 대통령 및 프랑스, 독일, 영국, 폴란드 지도자들과 협상 내용을 논의했다고 밝혔으며, 러시아가 "완전하고 무조건적인 휴전과 살상 중단"을 거부할 경우 "가혹한 제재"를 촉구했습니다.</p>
                <p>트럼프 대통령은 폭스뉴스와의 인터뷰에서 "솔직히, 우리가 합의에 이르지 못한다면 (제재를) 가할 것"이라며, "지금이 바로 담판을 지을 때(turkey time)"라고 강조했습니다. 그는 또한 푸틴 대통령이 협상 테이블에 나올 의지가 있으며, "푸틴은 이 모든 것에 지쳤다고 생각한다"고 언급하며, 자신이 푸틴 대통령과의 직접 협상을 통해 사태를 해결할 수 있다는 자신감을 내비쳤습니다.</p>
                <p>결론적으로, 평화 협상 노력에도 불구하고 러시아의 야만적인 민간인 공격이 계속됨에 따라, 국제사회의 강력한 대러 제재와 함께 평화 정착을 위한 미국의 주도적인 역할, 특히 트럼프 대통령과 같은 강력한 지도자의 협상력이 절실히 요구되고 있습니다.</p>
                <h1 style={{margin:"50px 0px", marginBottom:"10px", paddingTop:"10px", borderBottom:"1px solid black"}}>기사 원문 읽기</h1>
                <div style={{display:"flex", gap:"20px"}}>
                    <Link to="https://www.newsmax.com/world/globaltalk/russia-ukraine-war-drone-strike-sumy/2025/05/17/id/1211311/">
                        <img src={logo3} style={{width:"50px", borderRadius:"10rem"}}/>
                    </Link>
                    <Link to="https://www.foxnews.com/world/russian-drone-strike-ukraine-kills-9-injures-4-after-peace-talks-officials-say">
                        <img src={logo9} style={{width:"50px"}}/>
                    </Link>
                    <Link to="https://www.dailymail.co.uk/news/article-14722031/Putin-end-peace-talks-killing-Ukrainian-civilians-drone-strike.html">
                        <img src={logo10} style={{width:"50px"}}/>
                    </Link>
                </div>
                <h1 style={{margin:"50px 0px", marginBottom:"10px", paddingTop:"10px", borderBottom:"1px solid black"}}>다른 성향과 비교하기</h1>
                <div>
                    <div style={{display:"flex", gap:"20px", alignItems:"center"}}> 
                        <PrettyProgressBar
                            value={68}
                            height="50px"
                            fillColor="#ffaeae"         
                            backgroundColor="#dfdfdf"
                            width="350px"
                            />
                        <div style={{flex:1}}>
                            <p style={{fontSize:"15px", fontWeight:"500"}}>"평화 회담 중에도 민간인을 겨냥한 러시아의 잔혹한 공격은 용납할 수 없는 전쟁 범죄이며, 국제 사회는 즉각적이고 강력한 제재로 러시아의 만행을 중단시켜야 한다."</p>
                        </div>
                    </div>
                    <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
                        <PrettyProgressBar
                            value={12}
                            height="50px"
                            fillColor="#9986b3"         
                            backgroundColor="#dfdfdf"
                            width="350px"
                            />
                        <div style={{flex:1}}>
                            <p style={{fontSize:"15px", fontWeight:"500"}}>"우크라이나에서 러시아의 드론 공격으로 민간인 사상자가 발생했으며, 양국 평화 회담은 큰 진전 없이 포로 교환 합의에 머물렀다."</p>
                        </div>
                    </div>
                    <div style={{display:"flex", gap:"20px",alignItems:"center"}}>
                        <PrettyProgressBar
                            value={30}
                            height="50px"
                            fillColor="#a9d5ff"         
                            backgroundColor="#dfdfdf"
                            width="350px"
                            />
                        <div style={{flex:1}}>
                            <p style={{fontSize:"14px", fontWeight:"500"}}>"러시아의 민간인 대상 공격으로 평화 회담이 성과 없이 끝난 가운데, 교착 상태를 타개하고 평화를 정착시키기 위해서는 트럼프 대통령과 같은 강력한 리더십의 역할이 중요하다."</p>
                        </div>
                    </div>
                </div>
                <div className="chat-input-row">
                    <input
                    className="chat-input"
                    placeholder="정치 이슈에 대해 토론해보세요."
                    />
                    <Link to="/chat">
                        <button className="chat-button">
                        보내기
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default RightDetail;