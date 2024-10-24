import "./single.css";
import Sidebar from '../../components/sidebar/SideBar';
import SinglePost from "../../components/singlePost/singlePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}
