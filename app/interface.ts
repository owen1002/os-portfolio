
export interface Profile {
  name: string;
  email: string;
  phone: string;
  description: string;
  websites: PersonalWebsite[];
  educations: IEducation[];
  experiences: IExperience[];
}

export interface IEducation {
  school: StringWithLink;
  degree: string;
  from: string;
  to: string;
}

export interface IExperience {
  position: string;
  company: StringWithLink;
  from: string;
  to: string;
  specialRemark?: string;
  techStack: string[];
  duties: string[];
}

export interface PersonalWebsite extends StringWithLink {
  name: string;
}

export interface StringWithLink {
  label: string;
  link: string;
}
