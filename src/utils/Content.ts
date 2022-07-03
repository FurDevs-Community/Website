import { faDiscord, faGithub, faTwitter, faRedditAlien } from "@fortawesome/free-brands-svg-icons"

export const socials = [
  {
    name: "Discord",
    url: "https://discord.gg/RkMCWWFSBg",
    icon: faDiscord,
  },
  {
    name: "GitHub",
    url: "https://github.com/FurDevs",
    icon: faGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/FurDevs",
    icon: faTwitter,
  },
  {
    name: "Reddit",
    url: "https://reddit.com/r/FurDevs",
    icon: faRedditAlien,
  },
]

export const langs = [
  { start: 'puts "', end: '"' },
  { start: 'printf("', end: '\\n");' },
  // Break
  { start: 'console.log("', end: '");' },
  { start: 'print("', end: '")' },
  { start: 'System.out.println("', end: '");' },
  { start: "<", end: " />" },
  { start: 'std::cout << "', end: '";' },
  { start: 'Console.WriteLine("', end: '")' },
  { start: 'IO.puts("', end: '")' },
  { start: "echo ", end: " " },
  { start: 'puts "', end: '"' },
  { start: 'printf("', end: '\\n");' },
  // Break
  { start: 'console.log("', end: '");' },
  { start: 'print("', end: '")' },
  { start: 'System.out.println("', end: '");' },
]
