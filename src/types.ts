export interface Project {
  category: string;
  name: string;
  description: string;
  tech: string[];
}

export interface Service {
  name: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Stat {
  value: string;
  label: string;
}
