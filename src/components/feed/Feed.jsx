import Loader from "../../Utilits/Loader";
import VideosFeed from "../videosfeed/VideosFeed";
// import { useOutletContext } from "react-router-dom";

const Feed = ({NewData}) => {
    // const context = useOutletContext();
    // console.log(context);
  return (
    <div className="h-auto w-auto">
      <Loader NewData={NewData} />
      <VideosFeed NewData={NewData}/>
      <div className="bg-white"></div>
    </div>
  );
};
export default Feed;
