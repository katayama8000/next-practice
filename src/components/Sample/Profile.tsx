import { FC } from "react";

type ProfileProps = {
  currentLevel: number;
  username: string;
  bio: string;
};

export const Profile: FC<ProfileProps> = ({ currentLevel, username, bio }) => {
  const nextLevel = Math.min(currentLevel + 1, 6);
  const Heading = `h${nextLevel}`;

  return (
    <div>
      <Heading>{username}</Heading>
      <p>{bio}</p>
    </div>
  );
};
