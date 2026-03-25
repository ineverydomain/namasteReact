import UserContext from "../utils/UserContext";
import Header from "./Header";
import User from "./User";
const About = () => {
  return (
    <div>
      <UserContext.Provider>
        <h1> About</h1>
      </UserContext.Provider>
      <User />
    </div>
  );
};
export default About;
