export const staffTeam: IStaff[] = [
  {
    staffName: "Vulpo",
    color: "#8800FF",
    imageURL: "https://vulpo.xyz/images/artworks/vulpie.jpg",
    role: "Sever Owner",
  },
  {
    staffName: `AlphaSerpentis`,
    color: `#8800FF`,
    imageURL: `/images/staff/ammy.png`,
    role: `Administator`,
  },
  {
    staffName: `ShadowDev`,
    color: `#8800FF`,
    imageURL: `/images/staff/shadow.gif`,
    role: `Administator`,
  },
  {
    staffName: `ilovemyhouse`,
    color: `#8800FF`,
    imageURL: `/images/staff/ilovemyhouse.png`,
    role: `Moderator`,
  },
];

export interface IStaff {
  staffName: string;
  role: string;
  imageURL: string;
  color: string;
  socials?: {
    icon: string;
    url: string;
  }[];
}
