import { ReactNode } from "react";

export interface Profile {
  name: string;
  email: string;
  phone: string;
  description: string;
  websites: PersonalWebsite[];
  educations: Education[];
  experiences: Experience[];
}

export interface Education {
  school: StringWithLink;
  degree: string;
  from: string;
  to: string;
}

export interface Experience {
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
