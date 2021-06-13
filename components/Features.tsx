export const featuresList: IFeatures[] = [
    {
        title: "Chill and Friendly Community",
        description:
            "We have a Friendly and Non-Toxic Community that are willing to help you out and chill to chat with or make new Friendship",
        icon: "fas fa-users",
    },
    {
        title: "Coding Challenges",
        description:
            "For every few Weeks we host Coding Challenges that's aimed to challenge yourself as well as have something that's impressive in your GitHub Page or Profolio.",
        icon: "fas fa-laptop",
    },
    {
        title: "Revolve around the furry fandom",
        description:
            "We're a Furry Community, we have channels for you to display your Artworks, talk about the Furry Fandom and possibly meet new Furry Friends with the same interests as you",
        icon: "fas fa-paw",
    },
];

export interface IFeatures {
    title: string;
    description: string;
    icon: string;
}
