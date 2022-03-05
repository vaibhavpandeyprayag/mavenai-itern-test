/*
  This component shows the team member details.
  It shows the avatar of member, member's name, and his/her rank.
  It takes 3 props - member's name, member's avatar (image), member's rank.
*/

const TeamMember = ({ memberName, memberImage, memberRank }) => {
  const className =
    memberRank === "Top Trader"
      ? "custom-bg-green-2 custom-text-color-4"
      : memberRank === "Manager"
      ? "custom-bg-blue-1 custom-text-color-5"
      : "";
  return (
    <div className="d-flex justify-content-between align-items-center w-100 py-2 px-3 custom-margin-y-1 rounded-1 shadow">
      <div className="d-flex gap-3 align-items-center">
        <img
          src={memberImage}
          className="w-25 rounded-circle custom-box-shadow-3"
        />
        <h6 className="custom-text-color-2">{memberName}</h6>
      </div>
      <label
        className={
          "px-3 py-2 rounded-pill text-center small custom-box-shadow-2 " +
          className
        }
      >
        {memberRank}
      </label>
    </div>
  );
};

export default TeamMember;
