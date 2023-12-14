import VladImage from "./images/vladProfileImage.png";
import MykolaImage from "./images/MykolaProfileImage.jpg";
import OksanaImage from "./images/oksanaProfileImg.png"

import "./index.css";
import TeamMember from "./components/TeamMember";

function App() {
  return (
    <div className="m-4">
      <h2 className="text-primary font-bold text-center">My dream team</h2>
      <div className="h-[50vh] flex gap-4 justify-center items-center">
        <TeamMember
          name="Vlad"
          surname="Boriatynskyi"
          position="Full-stack developer"
          photoUrl={VladImage}
          color="red"
        />
        <TeamMember
          name="Mykola"
          surname="Balii"
          position="Frontend developer"
          photoUrl={MykolaImage}
          color="magenta"
         />
        <TeamMember
          name="Oksana"
          surname="Holomsha"
          position="UI/UX designer"
          photoUrl={OksanaImage}
          color="red"
        />
      </div>
    </div>
  );
}

export default App;
