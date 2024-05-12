import Loader from "../../Utilits/Loader";
import VideosFeed from "../videosfeed/VideosFeed";
import { useOutletContext } from "react-router-dom";

const Feed = () => {
    const context = useOutletContext();
    console.log(context);
  return (
    <div className="h-auto w-auto">
      <Loader ResData={context} />
      <VideosFeed ResData={context} />
    </div>
  );
};
export default Feed;
