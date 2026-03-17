export interface Project {
  id: string;
  title: string;
  company: string;
  fullCompany: string;
  description: string;
  stack: string[];
  website: string | null;
  industry: string;
  accentColor: string;
  panelBg: string;
  screenshotUrl: string | null;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  iconName: string;
}
