export interface Project {
  name: string;
  lang: string;
  desc: string;
  icon: string;
  stars: number;
  url: string;
}

export const projects: Project[] = [
  { name: "aibrawl", lang: "Python", desc: "", icon: "gamepad-2", stars: 0, url: "https://github.com/neverjoskiy/aibrawl" },
  { name: "noxumcleaner", lang: "Python", desc: "", icon: "brush", stars: 1, url: "https://github.com/neverjoskiy/noxumcleaner" },
  { name: "popup", lang: "Python", desc: "", icon: "message-square", stars: 0, url: "https://github.com/neverjoskiy/popup" },
  { name: "eliteclean", lang: "Rust", desc: "", icon: "sparkles", stars: 1, url: "https://github.com/neverjoskiy/eliteclean" },
  { name: "fireworks", lang: "Python", desc: "", icon: "sparkles", stars: 0, url: "https://github.com/neverjoskiy/fireworks" },
  { name: "eleganto", lang: "C", desc: "flagship project", icon: "crown", stars: 0, url: "https://github.com/neverjoskiy/eleganto" },
  { name: "eliboost", lang: "HTML", desc: "", icon: "zap", stars: 0, url: "https://github.com/neverjoskiy/eliboost" },
  { name: "elitos", lang: "C", desc: "", icon: "monitor", stars: 0, url: "https://github.com/neverjoskiy/elitos" },
  { name: "nvs", lang: "Python", desc: "", icon: "terminal", stars: 0, url: "https://github.com/neverjoskiy/nvs" },
  { name: "fastcup", lang: "HTML", desc: "unofficial fastcup app on electron", icon: "coffee", stars: 0, url: "https://github.com/neverjoskiy/fastcup" },
  { name: "bliss-site", lang: "HTML", desc: "", icon: "globe", stars: 0, url: "https://github.com/neverjoskiy/bliss-site" },
  { name: "discord", lang: "HTML", desc: "", icon: "message-circle", stars: 0, url: "https://github.com/neverjoskiy/discord" },
  { name: "pccontrol-python", lang: "Python", desc: "PC control via Telegram Bot", icon: "bot", stars: 0, url: "https://github.com/neverjoskiy/pccontrol-python" },
  { name: "blissdlc", lang: "", desc: "", icon: "package", stars: 0, url: "https://github.com/neverjoskiy/blissdlc" },
  { name: "voltaren", lang: "", desc: "", icon: "zap", stars: 0, url: "https://github.com/neverjoskiy/voltaren" },
  { name: "nebula", lang: "JavaScript", desc: "", icon: "orbit", stars: 0, url: "https://github.com/neverjoskiy/nebula" },
  { name: "360av-clone", lang: "JavaScript", desc: "", icon: "shield", stars: 0, url: "https://github.com/neverjoskiy/360av-clone" },
  { name: "neveros-ai", lang: "Python", desc: "", icon: "brain", stars: 0, url: "https://github.com/neverjoskiy/neveros-ai" },
];

export const langColors: Record<string, string> = {
  Python: '#3572A5',
  Rust: '#dea584',
  C: '#555555',
  HTML: '#e34c26',
  JavaScript: '#f1e05a',
};
