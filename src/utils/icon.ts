/**
 * Icon helper for lucide-static SVG strings.
 * Injects Tailwind classes and makes SVGs responsive.
 */

import {
  Gamepad2,
  Brush,
  MessageSquare,
  Sparkles,
  Crown,
  Zap,
  Monitor,
  Terminal,
  Coffee,
  Globe,
  MessageCircle,
  Bot,
  Package,
  Orbit,
  Shield,
  Brain,
  Github,
  Code2,
  Settings,
  Cpu,
  FileCode,
  Braces,
  Layout,
  Hammer,
  Send,
  Star,
  ChevronRight,
  ExternalLink,
  Mail,
} from 'lucide-static';

export const iconMap: Record<string, string> = {
  'gamepad-2': Gamepad2,
  'brush': Brush,
  'message-square': MessageSquare,
  'sparkles': Sparkles,
  'crown': Crown,
  'zap': Zap,
  'monitor': Monitor,
  'terminal': Terminal,
  'coffee': Coffee,
  'globe': Globe,
  'message-circle': MessageCircle,
  'bot': Bot,
  'package': Package,
  'orbit': Orbit,
  'shield': Shield,
  'brain': Brain,
  'github': Github,
  'code-2': Code2,
  'settings': Settings,
  'cpu': Cpu,
  'file-code': FileCode,
  'braces': Braces,
  'layout': Layout,
  'hammer': Hammer,
  'send': Send,
  'star': Star,
  'chevron-right': ChevronRight,
  'external-link': ExternalLink,
  'mail': Mail,
};

export function renderIcon(svg: string, className: string = 'w-5 h-5'): string {
  if (!svg) return '';
  return svg
    .replace(/width="24"/, 'width="100%"')
    .replace(/height="24"/, 'height="100%"')
    .replace(/class="lucide[^"]*"/, `class="${className} lucide"`);
}
