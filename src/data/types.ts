export interface Class {
  title: string;
  link: string;
}

export interface Curriculum {
  semester1: Class[];
  semester2: Class[];
}

export interface Specialty {
  [key: string]: Curriculum;
}
