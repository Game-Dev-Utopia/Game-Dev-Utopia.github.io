import AchievementsList from "@/components/Achievements/AchievementList";
import Top3Achievements from "@/components/Achievements/Top3Achievements";
import achievements from "@/utilities/Achievements"

const page = () =>{

    const Top3 = achievements.top3Achievements;
    const Achievements = achievements.achievements;

    return( 
        <div>
            <Top3Achievements Top3Data={Top3}/>
            <AchievementsList datas={Achievements}/>
        </div>
    )

}
export default page
