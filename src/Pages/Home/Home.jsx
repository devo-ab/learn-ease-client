import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Offer from "../../Components/Offer/Offer";
import OurTeam from "../../Components/OurTeam/OurTeam";
import TeacherSection from "../../Components/TeacherSection/TeacherSection";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <TeacherSection></TeacherSection>
            <Offer></Offer>
            <OurTeam></OurTeam>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;