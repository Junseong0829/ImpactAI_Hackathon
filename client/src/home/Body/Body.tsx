import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.css";
import NewSlider from "../NewsSlider/NewsSlider.tsx";
import DiscussionSection from "../DiscussionSection/DiscussionSection.tsx";

function Body(){
    return(
        <>
            <div className="body">
                <NewSlider />
                <DiscussionSection />
            </div>
        </>
    );
}

export default Body;