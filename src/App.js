import VladImage from './images/vladProfileImage.png'

import './index.css';
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
      </div>
    </div>
  );
}

export default App;
