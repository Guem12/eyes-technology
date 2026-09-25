import {
  Code2,
  Smartphone,
  Plug,
  Database,
  PenTool,
  Lightbulb,
  Cloud,
  GitBranch,
  ShieldCheck,
  Server,
  Layers,
  Zap,
} from 'lucide-react';

export const serviceIcons = [Code2, Smartphone, Plug, Database, PenTool, Lightbulb, Cloud];

export const skills = [
  { name: 'JavaScript', level: 95, icon: Code2 },
  { name: 'React', level: 93, icon: Layers },
  { name: 'Node.js', level: 90, icon: Server },
  { name: 'TypeScript', level: 88, icon: Code2 },
  { name: 'Python', level: 82, icon: Code2 },
  { name: 'Docker', level: 78, icon: GitBranch },
  { name: 'PostgreSQL', level: 85, icon: Database },
  { name: 'AWS', level: 75, icon: Cloud },
];

export const stats = [
  { labelKey: 'projects', value: '50+', icon: Code2 },
  { labelKey: 'clients', value: '40+', icon: Lightbulb },
  { labelKey: 'years', value: '8+', icon: Zap },
  { labelKey: 'guarantee', value: '30j', icon: ShieldCheck },
];

export const navPaths = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'pricing', path: '/pricing' },
  { key: 'contact', path: '/contact' },
] as const;
