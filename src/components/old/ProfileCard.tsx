import type { ProfileProps } from "../../types";

const ProfileCard = ({
  name,
  role,
  experience,
  isOnline = false,
}: ProfileProps) => {
  return (
    <>
      <div className="profile-card">
        <h2>{name}</h2>
        <p>{role}</p>
        <p>{experience} Years Experience</p>
        <p>Status: {isOnline ? "Online" : "Offline"}</p>
      </div>
      
    </>
  );
};

export default ProfileCard;
