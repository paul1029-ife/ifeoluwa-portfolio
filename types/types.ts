// types.ts

import { LucideIcon } from "lucide-react";

export type ProjectId = "tbc" | "nibo" | "beyou";

export type ServiceType =
  | "Frontend Development"
  | "Full Stack Development"
  | "Mobile Development"
  | "Web3 Development"
  | "UI/UX Implementation"
  | "Consultation";

export interface Phase {
  title: string;
  icon: LucideIcon;
  date: string;
  services: ServiceType[];
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  duration: string;
  team: string;
  theme: string;
  accentColor: string;
  liveUrl: string;
  phases: Phase[];
}

export type ProjectsDataType = {
  [K in ProjectId]: Project;
};
