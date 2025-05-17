import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Body.css";
import NewSlider from "./NewsSlider.tsx";

function Body(){
    return(
        <>
            <div className="body">
                <NewSlider />
            </div>
        </>
    );
}

export default Body;