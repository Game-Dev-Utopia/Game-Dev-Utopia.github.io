import { useEffect, useState } from "react";
import CardHolder from "@/components/AboutUsCards/CardHolder";
import CardHolderDynamic from "@/components/AboutUsCards/CardHolderDynamic";
import { getRequest } from "@/api/api";
import Timeline from "@/components/HistoryTimeline/Timeline";

//import aboutUsData from "@/utilities/aboutUsPageData";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await getRequest("/api/aboutus/getaboutus");
        //console.log("res" + JSON.stringify(response1));
        setAboutUsData(response1);
        const response2 = await getRequest("/api/timeline/getalltimelines");

        setTimelineData(response2);
        setIsLoading(false); // Set isLoading to false after data is fetched
        //console.log("ab" + aboutUsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., set an error state)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && !aboutUsData ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-hero">
          {Object.keys(aboutUsData).map((index, i) => {
            const data_length = aboutUsData[index].length;
            if (data_length > 1)
              return <CardHolderDynamic datas={aboutUsData[index]} key={i} />;
            else return <CardHolder datas={aboutUsData[index]} key={i} />;
          })}

          {timelineData && <Timeline datas={timelineData.timeline} />}
        </div>
      )}
    </>
  );
};

export default AboutUs;
