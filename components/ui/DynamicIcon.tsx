'use client';

import React from 'react';
import {
  Users,
  UserPlus,
  Accessibility,
  Home,
  Palette,
  Trophy,
  ShoppingCart,
  ShoppingBag,
  Briefcase,
  MapPin,
  PawPrint,
  ChefHat,
  Laptop,
  Share2,
  Star,
  Sparkles,
  BookOpen,
  MessageSquare,
  Layers,
  Brain,
  SquareCheckBig,
  Mic,
  BookText,
  Image as ImageIcon,
  SquareSplitHorizontal,
  ArrowRight,
  ArrowLeft,
  Volume2,
  VolumeX,
  RotateCw,
  Check,
  Eye,
  EyeOff,
  Globe,
  GraduationCap,
  Target,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  UserPlus,
  Accessibility,
  Home,
  Palette,
  Trophy,
  ShoppingCart,
  ShoppingBag,
  Briefcase,
  MapPin,
  PawPrint,
  ChefHat,
  Laptop,
  Share2,
  Star,
  Sparkles,
  BookOpen,
  MessageSquare,
  Layers,
  Brain,
  SquareCheckBig,
  Mic,
  BookText,
  Image: ImageIcon,
  SquareSplitHorizontal,
  ArrowRight,
  ArrowLeft,
  Volume2,
  VolumeX,
  RotateCw,
  Check,
  Eye,
  EyeOff,
  Globe,
  GraduationCap,
  Target,
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 24, className }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] || BookOpen;
  return <IconComponent size={size} className={className} />;
}
