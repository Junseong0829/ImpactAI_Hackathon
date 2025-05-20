import "./Detail.css";
import {Link} from "react-router-dom";
import PrettyProgressBar from "./PrettyProgressBar";
import logo4 from "../../../assets/logo4.svg";
import logo5 from "../../../assets/logo5.svg";
import logo6 from "../../../assets/logo6.svg";
import img9 from "../../../assets/img9.png";

function CenterDetail(){
    return(
        <div className="Detail">
            <div className="article-tag-center">
                📌 From the Center – 이 뉴스는 중립 성향 시각에서 작성되었습니다.
            </div>
            <div style={{width:"60%", display:"block", margin:"0 auto", padding:"20px"}}>
                <img src={img9} style={{width:"100%", borderRadius:"20px"}} />
                <p style={{paddingLeft:"10px", fontSize:"15px", color:"gray", margin:"0px"}}>⏏ 러시아 드론, 우크라이나 민간인 버스 공격…최소 9명 사망</p>
                <p>우크라이나 북동부 수미 지역 빌로필리아에서 토요일, 러시아의 드론 공격으로 민간인 대피 버스가 피격되어 최소 9명이 사망하고 7명이 부상했다고 우크라이나 관리들이 밝혔습니다. 이 공격은 러시아와 우크라이나가 몇 년 만에 처음으로 직접 평화 회담을 가졌으나 휴전 합의에 이르지 못한 지 불과 몇 시간 만에 발생했습니다.</p>
                <p>수미 주지사 올레흐 흐리호로우와 우크라이나 국가경찰에 따르면, 부상자 중 3명은 중태입니다. AP 통신은 해당 보고를 독립적으로 확인할 수 없었으며, 러시아 측의 즉각적인 논평은 없었습니다. 볼로디미르 젤렌스키 우크라이나 대통령은 이번 공격을 "고의적인 민간인 살해"라고 규정하며, "러시아군이 어떤 종류의 차량을 공격하는지 몰랐을 리 없다"고 텔레그램을 통해 밝혔습니다. 그는 금요일 평화 회담의 기회를 놓친 것을 개탄하며 "우크라이나는 인명 구조를 위해 완전하고 무조건적인 휴전을 오랫동안 제안해 왔다"고 덧붙였습니다. 러시아 국방부는 토요일 오전 빌로필리아에서 남동쪽으로 약 50km 떨어진 수미 지역의 군사 집결지를 타격했다고 주장했으나, 다른 공격에 대해서는 언급하지 않았습니다. 희생자 대부분은 노년 여성들이었으며, 당국은 일부 희생자의 신원을 확인 중입니다.</p>
                <h1>평화 회담 교착…포로 교환 합의는 성과</h1>
                <p>앞서 금요일, 러시아와 우크라이나 관리들은 임시 휴전을 목표로 튀르키예 이스탄불에서 만났지만, 회담은 두 시간도 채 되지 않아 별다른 돌파구 없이 종료되었습니다. 이는 2022년 2월 러시아의 전면 침공 초기 이후 양측 간 첫 대면 대화였습니다.</p>
                <p>양측은 각각 1,000명의 전쟁 포로를 교환하기로 합의했으나, 전투 종식을 위한 주요 조건에 대해서는 여전히 큰 입장차를 보였습니다. 우크라이나 측 수석 대표인 루스템 우메로우 국방장관에 따르면, 양측은 휴전과 정상회담 가능성에 대해서도 논의했습니다. 러시아 대표단장인 블라디미르 메딘스키 대통령 보좌관은 양측이 서로에게 상세한 휴전 제안을 제공하기로 합의했으며, 우크라이나가 정상회담을 요청했고 러시아가 이를 검토 중이라고 전했습니다.</p>
                <p>드미트리 페스코프 크렘린궁 대변인은 토요일, 합의된 포로 교환이 진행되고 양측 대표단이 구체적으로 명시되지 않은 추가 "합의"에 도달한다면 푸틴 대통령과 젤렌스키 대통령의 회담 가능성이 열려 있다고 말했습니다. 그는 또한 러시아가 우크라이나에 휴전 조건을 제시할 것이라고 밝혔으나, 구체적인 시기나 정상회담 전제 조건은 언급하지 않았습니다.</p>
                <h1>국제사회 반응 및 추가 압박 촉구</h1>
                <p>젤렌스키 대통령은 이스탄불 회담 결과를 도널드 트럼프 미국 대통령 및 프랑스, 독일, 영국, 폴란드 지도자들과 논의했다고 밝혔으며, 러시아가 "완전하고 무조건적인 휴전과 살상 중단"을 거부할 경우 강력한 제재를 촉구했습니다. 그는 "러시아에 대한 더 강력한 제재와 압박 없이는 러시아가 진정한 외교를 추구하지 않을 것"이라고 강조했습니다.</p>
                <p>에마뉘엘 마크롱 프랑스 대통령은 푸틴 대통령의 "냉소주의"를 비난하며 러시아가 서방 국가들이 지지하는 휴전 제안을 "존중"하지 않았다고 말했습니다. 데이비드 라미 영국 외무장관은 이스탄불 회담 이후 러시아 측의 "모호한 태도"와 "진지한 평화 논의 의지 부족"을 지적했습니다. 트럼프 대통령은 이스탄불 협상 전, 자신과 푸틴 대통령이 직접 만나기 전에는 "아무 일도 일어날 수 없다"고 언급한 바 있습니다.</p>
                <p>한편, 우크라이나 당국에 따르면 금요일과 밤사이 러시아의 포격, 드론, 공습으로 도네츠크, 하르키우, 헤르손 지역에서 최소 5명의 민간인이 추가로 사망했습니다. 우크라이나 공군은 러시아군이 밤새 62대의 드론을 발사했으며, 이 중 36대를 격추하고 6대는 전자 교란으로 경로를 이탈했다고 보고했습니다.</p>
                <h1 style={{margin:"50px 0px", marginBottom:"10px", paddingTop:"10px", borderBottom:"1px solid black"}}>기사 원문 읽기</h1>
                <div style={{display:"flex", gap:"20px"}}>
                    <Link to="https://edition.cnn.com/2025/05/17/europe/russian-attack-bus-sumy-intl">
                        <img src={logo4} style={{width:"50px", borderRadius:"10rem"}}/>
                    </Link>
                    <Link to="https://www.washingtonpost.com/world/2025/05/17/sumy-bus-strike-russia-ukraine/">
                        <img src={logo5} style={{width:"50px"}}/>
                    </Link>
                    <Link to="https://abcnews.go.com/International/9-killed-russian-drone-attack-ukrainian-bus-after/story?id=121900355">
                        <img src={logo6} style={{width:"50px"}}/>
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
                            value={20}
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
export default CenterDetail;