import ApplicationProcess from "../../components/Destination/ApplicationProcess/ApplicationProcess";
import AtGlance from "../../components/Destination/AtGlance/AtGlance";
import Blogs from "../../components/Destination/Blogs/Blogs";
import CostEducation from "../../components/Destination/CostEducation/CostEducation";
import FAQS from "../../components/Destination/FAQS/FAQS";
import PopularUniversities from "../../components/Destination/PopularUniversities/PopularUniversities";
import StudentSay from "../../components/Destination/StudentSay/StudentSay";
import StudentSpeak from "../../components/Destination/StudentSpeak/StudentSpeak";
import Study from "../../components/Destination/Study/Study";
import StudyUsa from "../../components/Destination/StudyUsa/StudyUsa";

const StudyDestination = () => {
    return (
        <div>
            <Study />
            <ApplicationProcess/>
            <StudyUsa />
            <PopularUniversities />
            <CostEducation />
            <AtGlance />
            <StudentSay />
            <StudentSpeak/>
            <FAQS />
            <Blogs />
        </div>
    );
};

export default StudyDestination;