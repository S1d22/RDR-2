
export interface Rule {
  id: string;
  category: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface WhitelistFormData {
  gamertag: string;
  age: string;
  experience: string;
  characterBackstory: string;
  discordId: string;
}
