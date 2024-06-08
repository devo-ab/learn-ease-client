import HighlightClass from "../../Components/HighlightClass/HighlightClass";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Offer from "../../Components/Offer/Offer";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Partner from "../../Components/Partner/Partner";
import TeacherSection from "../../Components/TeacherSection/TeacherSection";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HighlightClass></HighlightClass>
            <TeacherSection></TeacherSection>
            <Offer></Offer>
            <OurTeam></OurTeam>
            <Partner></Partner>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;