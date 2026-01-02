export interface Metric {
  name: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  github: string;

  problem?: string;
  approach?: string;
  results?: string;
  metrics?: Metric[];
  images?: string[];
}
