import "./Detail.css";
import {Link} from "react-router-dom";
import PrettyProgressBar from "./PrettyProgressBar";
import logo11 from "../../../assets/logo11.png";
import logo3 from "../../../assets/logo3.svg";
import logo7 from "../../../assets/logo7.svg";
import logo8 from "../../../assets/logo8.svg";
import img8 from "../../../assets/img8.png";

function LeftDetail(){
    return(
        <div className="Detail">
            <div className="article-tag-left">
                📌 From the Left – 이 뉴스는 진보 성향 시각에서 작성되었습니다.
            </div>
            <div style={{width:"60%", display:"block", margin:"0 auto", padding:"20px"}}>
                <img src={img8} style={{width:"100%", borderRadius:"20px"}} />
                <p style={{paddingLeft:"10px", fontSize:"15px", color:"gray", margin:"0px"}}>⏏︎ "후안무치한 전쟁 범죄": 평화 회담 중 자행된 러시아의 민간인 학살</p>
                <p>우크라이나 당국에 따르면, 러시아군은 지난 토요일 오전 6시 17분경, 3년 만의 첫 직접 평화 회담이 열린 지 불과 몇 시간 만에 수미주 빌로필리아에서 민간인 대피용 미니버스를 겨냥해 치명적인 드론 공격을 감행했습니다. 이 공격으로 어린이와 그 부모를 포함한 일가족 등 최소 9명의 무고한 민간인이 현장에서 즉사하고, 3명이 위중한 상태에 빠지는 등 7명 이상이 부상하는 참극이 빚어졌습니다. 희생자 대부분은 연금 수급 연령의 여성들이었으며, 해당 미니버스는 어떤 군사적 표식도 없었던 것으로 확인되었습니다.</p>
                <p>우크라이나 국가경찰은 성명을 통해 "이는 단순한 포격이 아닌, 후안무치한 전쟁 범죄"라고 격렬히 규탄하며, 러시아가 또다시 국제인도법을 정면으로 위반하고 의도적으로 민간 시설을 표적으로 삼았다고 폭로했습니다. 볼로디미르 젤렌스키 우크라이나 대통령은 이번 공격을 "고의적인 민간인 살해"로 명명하고, "러시아는 자신들이 어떤 차량을 공격하는지 몰랐을 리 없다"며 러시아가 원한다면 이러한 살상을 멈추고 휴전에 합의할 수 있다고 절규했습니다. 올레흐 흐리호로우 수미 주지사 역시 이번 공격을 "비인간적"이라고 비난했으며, 해당 지역에는 사흘간의 애도 기간이 선포되었습니다. 사용된 무기는 정찰 드론의 유도를 받는 러시아의 '란셋' 공격 드론으로 알려졌습니다.</p>
                <h1>러시아의 발뺌과 기만적인 평화 제스처</h1>
                <p>러시아 국방부는 민간인 버스 공격에 대한 직접적인 언급을 회피한 채, 국영 통신사를 통해 해당 시간에 수미 지역의 "우크라이나 군사 장비 집결지"를 정밀 타격했다고 주장하며 책임을 부인하는 뻔뻔한 태도를 보였습니다. 이러한 주장은 명백한 민간인 피해 증거들과 정면으로 배치됩니다.</p>
                <p>이번 만행은 튀르키예 이스탄불에서 2022년 초 이후 처음으로 러시아와 우크라이나 대표단이 직접 대면한 평화 회담 직후에 발생했다는 점에서 국제사회의 더 큰 공분을 사고 있습니다. 회담에서는 전쟁 발발 이후 최대 규모인 양측 포로 각 1,000명 교환이라는 제한적 합의가 이루어졌을 뿐, 실질적인 휴전이나 평화로 이어질 어떠한 중대한 돌파구도 마련되지 못했습니다. 러시아 측 키릴 드미트리예프 관리는 회담 결과를 "좋은 성과"라 자평하며 포로 교환과 휴전 가능성 타진 등을 언급하고, 심지어 도널드 트럼프 전 미국 대통령 측과 미국 대표단의 도움 덕분이라고 공을 돌렸으나, 회담 직후 이어진 민간인 학살은 이러한 발언의 진정성을 철저히 훼손시키고 있습니다. 더욱이 러시아는 이번 중요 회담에 저위급 대표단을 파견하는 등 협상에 대한 진정성마저 의심케 했습니다.</p>
                <h1>교착된 협상: 러시아의 '최후통첩식' 영토 요구</h1>
                <p>협상 테이블에서 러시아는 현재 우크라이나가 통제 중인 광대한 영토의 할양을 요구하는 등 이른바 '최후통첩식' 주장을 굽히지 않았습니다. 이는 우크라이나 측은 물론 영국, 프랑스, 독일, 폴란드 정상들로부터 "절대 받아들일 수 없는" 요구로 즉각 일축되었습니다. 크렘궁 대변인 드미트리 페스코프는 푸틴 대통령과 젤렌스키 대통령의 정상회담 가능성에 대해 "양측 대표단의 특정 합의 도출이라는 작업의 결과로서만 가능하다"며 선결 조건을 내걸어 사실상 협상 의지가 없음을 시사했습니다. 우크라이나와 서방 동맹국들은 러시아가 국제사회의 추가 제재를 피하고 시간을 벌기 위해 협상을 악용하며 의도적으로 평화 노력을 방해하고 있다고 강력히 비판하고 있습니다.</p>
                <h1>"더 강력한 제재만이 해법": 국제사회의 압박 촉구</h1>
                <p>젤렌스키 대통령은 "러시아에 대한 더 강력한 제재와 압박 없이는 그들이 진정한 외교를 추구하지 않을 것"이라고 역설하며 국제사회에 대러 제재 강화를 절박하게 호소했습니다. 안드리 시비하 우크라이나 외무장관도 이번 공격이 "러시아의 테러를 종식시키기 위해 모스크바에 대한 압박을 더욱 강화해야 한다는 것을 명백히 보여준다"고 강조했습니다. 유럽연합(EU) 역시 러시아가 휴전 제안을 거부하자 추가 제재를 준비 중인 것으로 알려졌습니다.</p>
                <h1>계속되는 수미 지역의 비극: 러시아의 점령 야욕</h1>
                <p>러시아의 만행은 이번이 처음이 아닙니다. 국경과 가까운 빌로필리아를 포함한 수미 지역 주민들은 이미 수개월간 러시아군의 FAB-500 활공 폭탄 공격에 거의 매일같이 시달려왔으며, 지난 4월에는 하루에 4발, 8월에는 하루에 11발의 FAB 폭탄이 투하되는 등 무차별적인 폭격이 자행되어 왔습니다. 이번 공격 대상이 된 빌로필리아에는 최근 긴급 대피 명령이 내려진 상태였습니다. 우크라이나는 1년 넘게 러시아가 수미 지역 점령 야욕을 드러내고 있다고 경고해 왔습니다.</p>
                <p>결론적으로, 평화 협상을 논의하는 와중에도 러시아는 민간인을 향한 잔혹한 공격을 멈추지 않으며 그들의 이중적인 행태와 평화에 대한 의지 부재를 명백히 드러내고 있습니다. 국제사회의 보다 강력하고 단호하며 지속적인 압박만이 무고한 희생을 막고 러시아의 침략 야욕을 꺾어 우크라이나에 진정한 평화를 가져올 수 있다는 목소리가 그 어느 때보다 절실합니다.</p>
                <h1 style={{margin:"50px 0px", marginBottom:"10px", paddingTop:"10px", borderBottom:"1px solid black"}}>기사 원문 읽기</h1>
                <div style={{display:"flex", gap:"20px"}}>
                    <Link to="https://edition.cnn.com/2025/05/17/europe/russian-attack-bus-sumy-intl">
                        <img src={logo11} style={{width:"50px", borderRadius:"10rem"}}/>
                    </Link>
                    <Link to="https://www.washingtonpost.com/world/2025/05/17/sumy-bus-strike-russia-ukraine/">
                        <img src={logo3} style={{width:"50px"}}/>
                    </Link>
                    <Link to="https://abcnews.go.com/International/9-killed-russian-drone-attack-ukrainian-bus-after/story?id=121900355">
                        <img src={logo7} style={{width:"50px"}}/>
                    </Link>
                    <Link to="https://www.nytimes.com/2025/05/17/world/europe/russia-ukraine-putin.html">
                        <img src={logo8} style={{width:"50px"}}/>
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
export default LeftDetail;