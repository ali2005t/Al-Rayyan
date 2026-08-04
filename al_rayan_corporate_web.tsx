import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Award,
  ShieldCheck,
  Users,
  Factory,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
  Menu,
  MapPin,
  Mail,
  Clock,
  ArrowLeft,
  Play,
  Sparkles,
  Layers,
  Maximize2,
  Wrench,
  Ruler,
  Truck,
  Building2,
  SlidersHorizontal,
  Home,
  Check,
  Zap,
  PhoneCall,
  Calendar,
  Send,
  ZoomIn,
  Calculator,
  Sliders,
  Info,
  CheckCircle,
  Flame,
  Droplets,
  Layers3
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const HERO_SLIDES = [
  {
    title: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù† ÙˆÙØ®Ù…Ø©',
    subtitle: 'ØªØµØ§Ù…ÙŠÙ… Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ ÙˆØ£ÙƒØ±ÙŠÙ„ÙŠÙƒ ØªØ­Ø§ÙƒÙŠ Ø£Ø±Ù‚Ù‰ Ø§Ù„Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø£ÙˆØ±ÙˆØ¨ÙŠØ©'
  },
  {
    title: 'ØºØ±Ù Ø§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ… Ø§Ù„Ø­ØµØ±ÙŠØ©',
    subtitle: 'Ø§Ø³ØªØºÙ„Ø§Ù„ Ø°ÙƒÙŠ Ù„Ù„Ù…Ø³Ø§Ø­Ø§Øª Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø§Øª Ù…Ø®ÙÙŠØ© ÙˆÙ‚ÙˆØ§Ø·Ø¹ Ø²Ø¬Ø§Ø¬ÙŠØ©'
  },
  {
    title: 'ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„ÙƒØ±ØªÙ† ÙˆÙˆÙ„ ÙˆØ§Ù„Ø³Ø¨Ø§ÙŠØ¯Ø±',
    subtitle: 'Ø­Ù„ÙˆÙ„ Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ù‡Ø¬ÙŠÙ†Ø© Ù„Ù„Ù…Ø¨Ø§Ù†ÙŠ ÙˆØ§Ù„Ù…Ø­Ù„Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ©'
  }
];

const SERVICES_DATA = [
  {
    id: 'kitchens',
    title: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù† ÙˆÙØ®Ù…Ø©',
    subtitle: 'Modern Luxury Kitchens',
    desc: 'ØªØµÙ…ÙŠÙ… ÙˆØªÙ†ÙÙŠØ° Ø£Ø­Ø¯Ø« Ø§Ù„Ù…Ø·Ø§Ø¨Ø® Ø¨Ø£Ø¬ÙˆØ¯ Ø®Ø§Ù…Ø§Øª Ø§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ØŒ Ø§Ù„Ø®Ø´Ø¨ Ø§Ù„Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… (Ø®Ø´Ù…ÙˆÙ†ÙŠÙˆÙ…)ØŒ ÙˆØ§Ù„Ø¨ÙˆÙ„ÙŠ Ù„Ø§Ùƒ ÙˆØ§Ù„Ø£ÙƒØ±ÙŠÙ„ÙŠÙƒ Ù…Ø¹ Ø­Ù„ÙˆÙ„ Ø§Ø³ØªØºÙ„Ø§Ù„ Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª ÙˆØ§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ø°ÙƒÙŠ.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    features: ['Ù…Ù‚Ø§ÙˆÙ…Ø© ØªØ§Ù…Ø© Ù„Ù„Ù…ÙŠØ§Ù‡ ÙˆØ§Ù„Ø­Ø±Ø§Ø±Ø© ÙˆØ§Ù„Ø­Ø´Ø±Ø§Øª', 'Ù…ÙØµÙ„Ø§Øª ÙˆØ¢Ù„ÙŠØ§Øª Ø¥ØºÙ„Ø§Ù‚ ØµØ§Ù…Øª ØªØ¯ÙˆÙ… Ø·ÙˆÙŠÙ„Ø§Ù‹', 'ØªØµØ§Ù…ÙŠÙ… 3D ØªÙØ§Ø¹Ù„ÙŠØ© Ù…Ø®ØµØµØ© Ù„ÙƒÙ„ Ù…Ø³Ø§Ø­Ø©']
  },
  {
    id: 'dressing',
    title: 'ØºØ±Ù Ø§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…',
    subtitle: 'Custom Dressing Rooms',
    desc: 'ØºØ±Ù Ù…Ù„Ø§Ø¨Ø³ Ø¹ØµØ±ÙŠØ© Ù…ØµÙ…Ù…Ø© Ø¨Ø¯Ù‚Ø© Ø¹Ø§Ù„ÙŠØ© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø£Ù†Ø§Ù‚Ø© ÙˆØ§Ù„Ø§Ø³ØªØºÙ„Ø§Ù„ Ø§Ù„Ø£Ù…Ø«Ù„ Ù„Ù„Ù…Ø³Ø§Ø­Ø©ØŒ Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø§Øª Ù…Ø®ÙÙŠØ© ÙˆØªÙ‚Ø³ÙŠÙ…Ø§Øª Ø°ÙƒÙŠØ© ØªÙ†Ø§Ø³Ø¨ Ø§Ø­ØªÙŠØ§Ø¬Ø§ØªÙƒ.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø¥Ø¶Ø§Ø¡Ø© LED Ù…Ø¯Ù…Ø¬Ø© Ø¨Ø­Ø³Ø§Ø³Ø§Øª Ø­Ø±ÙƒØ© Ø°ÙƒÙŠØ©', 'ØªÙ‚Ø³ÙŠÙ…Ø§Øª Ù…Ø®ØµØµØ© Ù„Ù„Ù…Ù„Ø§Ø¨Ø³ ÙˆØ§Ù„Ø£ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª', 'Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ù…Ù‚ÙˆÙ‰ Ù…Ø¹ Ø²Ø¬Ø§Ø¬ ÙØ§Ù…ÙŠÙ‡ Ø£Ùˆ Ø´ÙØ§Ù']
  },
  {
    id: 'windows',
    title: 'Ù†ÙˆØ§ÙØ° ÙˆØ´Ø¨Ø§Ø¨ÙŠÙƒ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„',
    subtitle: 'Aluminum Windows',
    desc: 'Ø£Ù†Ø¸Ù…Ø© Ø´Ø¨Ø§Ø¨ÙŠÙƒ Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø¹Ø§Ø²Ù„Ø© Ù„Ù„ØµÙˆØª ÙˆØ§Ù„Ø£ØªØ±Ø¨Ø© ÙˆØ§Ù„Ø­Ø±Ø§Ø±Ø© Ù‚Ø·Ø§Ø¹Ø§Øª (Ø¬Ø§Ù…Ø¨ÙˆØŒ ØªØ§Ù†Ø¬ÙˆØŒ BSØŒ ÙˆØ¬ÙˆØ±Ø¬ÙŠØ§) Ø¨Ø£Ù„ÙˆØ§Ù† Ù‚Ø·Ø§Ø¹Ø§Øª Ø¹ØµØ±ÙŠØ© ÙˆØªØ«Ø¨ÙŠØª Ø§Ø­ØªØ±Ø§ÙÙŠ.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø¹Ø²Ù„ ØµÙˆØªÙŠ ÙˆØ­Ø±Ø§Ø±ÙŠ ÙŠØµÙ„ Ø¥Ù„Ù‰ 95%', 'Ø²Ø¬Ø§Ø¬ Ø¯Ø¨Ù„ (Ø¯ÙˆØ¨Ù„ Ø¬Ù„Ø§Ø³) Ù…Ø¹Ø²ÙˆÙ„ Ø¨ØºØ§Ø² Ø§Ù„Ø£Ø±Ø¬ÙˆÙ†', 'Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ø¥ÙŠØ·Ø§Ù„ÙŠØ© ÙˆØªØ±ÙƒÙŠØ© Ù…Ø¹ØªÙ…Ø¯Ø©']
  },
  {
    id: 'doors',
    title: 'Ø£Ø¨ÙˆØ§Ø¨ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ù…ÙˆØ¯Ø±Ù†',
    subtitle: 'Modern Aluminum Doors',
    desc: 'Ø£Ø¨ÙˆØ§Ø¨ Ø¯Ø§Ø®Ù„ÙŠØ© ÙˆØ®Ø§Ø±Ø¬ÙŠØ© Ø¨Ø£Ø´ÙƒØ§Ù„ Ù‡Ù†Ø¯Ø³ÙŠØ© Ø±Ø§Ù‚ÙŠØ©ØŒ ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø£Ù…Ø§Ù† Ø§Ù„Ø¹Ø§Ù„ÙŠ ÙˆØ§Ù„Ù„Ù…Ø³Ø© Ø§Ù„ÙÙ†ÙŠØ© Ø§Ù„Ù…Ø¹Ø§ØµØ±Ø© Ù„Ù„ÙÙŠÙ„Ø§ Ø£Ùˆ Ø§Ù„Ø´Ù‚Ø© Ø£Ùˆ Ø§Ù„Ù…ÙƒØªØ¨.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø£Ù†Ø¸Ù…Ø© ØºÙ„Ù‚ Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù†Ù‚Ø§Ø· Ù„Ù„Ø£Ù…Ø§Ù† Ø§Ù„Ø¹Ø§Ù„ÙŠ', 'ØªØµØ§Ù…ÙŠÙ… Ø²Ø¬Ø§Ø¬ÙŠØ© ÙˆØ´Ø±Ø§Ø¹ÙŠØ© Ù…Ø¹Ø§ØµØ±Ø©', 'Ù…Ù‚Ø§ÙˆÙ…Ø© ØªØ§Ù…Ø© Ù„Ù„ØµØ¯Ø£ ÙˆØ§Ù„Ø¹ÙˆØ§Ù…Ù„ Ø§Ù„Ø¬ÙˆÙŠØ©']
  },
  {
    id: 'curtain-walls',
    title: 'ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„ÙƒØ±ØªÙ† ÙˆÙˆÙ„',
    subtitle: 'Curtain Wall Systems',
    desc: 'ÙˆØ§Ø¬Ù‡Ø§Øª Ø²Ø¬Ø§Ø¬ÙŠØ© Ù„Ù„Ù…Ø¨Ø§Ù†ÙŠ Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠØ© ÙˆØ§Ù„Ø´Ø±ÙƒØ§Øª ÙˆØ§Ù„Ù…Ø¨Ø§Ù†ÙŠ Ø§Ù„Ø³ÙƒÙ†ÙŠØ© Ø§Ù„Ø±Ø§Ù‚ÙŠØ©ØŒ ØªÙˆÙØ± Ø¥Ø¶Ø§Ø¡Ø© Ø·Ø¨ÙŠØ¹ÙŠØ© ÙˆØªØµÙ…ÙŠÙ… Ù…Ø¹Ù…Ø§Ø±ÙŠ Ø¹Ø§Ù„Ù…ÙŠ.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø£Ù†Ø¸Ù…Ø© Ù‡ÙŠÙƒÙ„ÙŠØ© ÙˆÙˆØ§Ø¬Ù‡Ø§Øª Ù…Ø³ØªÙ…Ø±Ø© Structural Glazing', 'ØªØ­Ù…Ù„ Ø¹Ø§Ù„ÙŠ Ù„Ù„Ø±ÙŠØ§Ø­ ÙˆØ§Ù„Ø¶ØºØ· Ø§Ù„Ø¹Ø§Ù„ÙŠ', 'Ù…Ø¸Ù‡Ø± Ù…Ø¹Ù…Ø§Ø±ÙŠ Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠ Ù„Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„ÙƒØ¨Ø±Ù‰']
  },
  {
    id: 'glass-facades',
    title: 'Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠØ© ÙˆØ§Ù„Ø³Ø¨Ø§ÙŠØ¯Ø±',
    subtitle: 'Glass & Spider Facades',
    desc: 'ØªØ±ÙƒÙŠØ¨ ÙˆØ§Ø¬Ù‡Ø§Øª Ø²Ø¬Ø§Ø¬ÙŠØ© Ø³ÙŠÙƒÙˆØ±ÙŠØª Ù…Ø¹ØªÙ…Ø¯Ø© Ù„Ù„Ù…Ø­Ù„Ø§Øª ÙˆØ§Ù„Ù…ÙˆÙ„Ø§Øª ÙˆØ§Ù„Ù…Ø¨Ø§Ù†ÙŠ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø¨Ø£Ø­Ø¯Ø« Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ«Ø¨ÙŠØª ÙˆØ§Ù„Ø³Ø¨Ø§ÙŠØ¯Ø±.',
    icon: Maximize2,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø²Ø¬Ø§Ø¬ Ø³ÙŠÙƒÙˆØ±ÙŠØª Ù…Ø¹Ø§Ù„Ø¬ Ø­Ø±Ø§Ø±ÙŠØ§Ù‹ Ø¶Ø¯ Ø§Ù„ØµØ¯Ù…Ø§Øª', 'Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ø³ØªØ§Ù†Ù„Ø³ Ø³ØªÙŠÙ„ 316 Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„ØµØ¯Ø£', 'Ø±Ø¤ÙŠØ© Ø¨Ø§Ù†ÙˆØ±Ø§Ù…ÙŠØ© Ø®Ø§Ù„ÙŠØ© Ù…Ù† Ø§Ù„Ø¹ÙˆØ§Ø¦Ù‚']
  },
  {
    id: 'office-partitions',
    title: 'Ù‚ÙˆØ§Ø·Ø¹ Ø§Ù„Ù…ÙƒØ§ØªØ¨ Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠØ©',
    subtitle: 'Office Glass Partitions',
    desc: 'ØªÙ‚Ø³ÙŠÙ… Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠØ© Ø¨Ø·Ø±Ù‚ Ø°ÙƒÙŠØ© ØªÙ…Ù†Ø­ Ø®ØµÙˆØµÙŠØ© ÙˆØ´ÙØ§ÙÙŠØ© ÙÙŠ Ø§Ù„Ø¹Ù…Ù„ Ù…Ø¹ Ø¹Ø²Ù„ ØµÙˆØªÙŠ Ù…ØªØ·ÙˆØ± Ù„Ù„Ù…ÙƒØ§ØªØ¨ ÙˆØºØ±Ù Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹Ø§Øª.',
    icon: SlidersHorizontal,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø£Ù†Ø¸Ù…Ø© Ø²Ø¬Ø§Ø¬ÙŠØ© Ø¨Ø¯ÙˆÙ† ÙÙˆØ§ØµÙ„ Ø±Ø£Ø³Ù…ÙŠØ© Frame-less', 'Ø¯Ù…Ø¬ Ø³ØªØ§Ø¦Ø± Ø¯Ø§Ø®Ù„ÙŠØ© Ø£Ùˆ Ø²Ø¬Ø§Ø¬ Ù…ØªØºØ¨Ø± Ø°ÙƒÙŠ', 'Ø¹Ø²Ù„ ØµÙˆØªÙŠ Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ù‡Ø¯ÙˆØ¡']
  },
  {
    id: 'cladding',
    title: 'ØªØ¬Ù„ÙŠØ¯ ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬',
    subtitle: 'Aluminum Cladding Work',
    desc: 'ØªÙƒØ³ÙŠØ© ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ù…Ø¨Ø§Ù†ÙŠ ÙˆØ§Ù„Ù…Ø­Ù„Ø§Øª Ø¨Ø£Ù„ÙˆØ§Ø­ Ø§Ù„ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬ Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ø­Ø±ÙŠÙ‚ Ø¨Ø£Ù„ÙˆØ§Ù† Ù…ØªÙ†ÙˆØ¹Ø© ÙˆØ¶Ù…Ø§Ù† Ø·ÙˆÙŠÙ„ Ø§Ù„Ø£Ù…Ø¯.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80',
    features: ['Ø£Ù„ÙˆØ§Ø­ Ù…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ø­Ø±ÙŠÙ‚ ÙˆØ§Ù„Ø­Ø±Ø§Ø±Ø© UV', 'ØªÙ†ÙˆØ¹ Ù‡Ø§Ø¦Ù„ ÙÙŠ Ø§Ù„Ø£Ù„ÙˆØ§Ù† ÙˆØ§Ù„ØªØ´Ø·ÙŠØ¨Ø§Øª', 'Ø³Ù‡ÙˆÙ„Ø© Ø§Ù„ØµÙŠØ§Ù†Ø© ÙˆØ§Ù„ØªÙ†Ø¸ÙŠÙ Ø§Ù„Ù…Ø¨Ø§Ø´Ø±']
  },
  {
    id: 'metal-fab',
    title: 'ØªØµÙ†ÙŠØ¹ Ø£Ø¹Ù…Ø§Ù„ Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ù…Ø®ØµØµØ©',
    subtitle: 'Custom Aluminum Fabrication',
    desc: 'Ø­Ù„ÙˆÙ„ ÙˆØªØµØ§Ù…ÙŠÙ… Ù‡Ù†Ø¯Ø³ÙŠØ© Ø®Ø§ØµØ© ÙˆÙÙ‚ Ù…Ø®Ø·Ø·Ø§Øª Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±ÙŠÙŠÙ† Ù„Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„ÙØ§Ø®Ø±Ø© ÙˆØ§Ù„ÙÙ†Ø§Ø¯Ù‚ ÙˆØ§Ù„Ù…Ù‚Ø±Ø§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    features: ['ØªÙ†ÙÙŠØ° Ø¯Ù‚ÙŠÙ‚ Ø­Ø³Ø¨ Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª Ø§Ù„ÙÙ†ÙŠØ©', 'Ø¥Ù†ØªØ§Ø¬ Ø¨Ø¢Ù„Ø§Øª CNC Ø£Ù„Ù…Ø§Ù†ÙŠØ© Ù…ØªØ·ÙˆØ±Ø©', 'Ø¥Ø´Ø±Ø§Ù Ù…Ù‡Ù†Ø¯Ø³ÙŠÙ† Ù…ØªØ®ØµØµÙŠÙ† ÙÙŠ Ø§Ù„Ù…ÙˆÙ‚Ø¹']
  }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Ù…Ø·Ø¨Ø® Ù…ÙˆØ¯Ø±Ù† Ø¨Ù„Ù…Ø³Ø§Øª Ø±Ø®Ø§Ù… ÙˆØ£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ø£Ø³ÙˆØ¯',
    category: 'kitchens',
    categoryName: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†',
    location: 'Ø§Ù„ØªØ¬Ù…Ø¹ Ø§Ù„Ø®Ø§Ù…Ø³ - Ø§Ù„Ù‚Ø§Ù‡Ø±Ø© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©',
    date: '2024',
    materials: 'Ù‚Ø·Ø§Ø¹ Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ù…Ø¹Ø²ÙˆÙ„ + Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ø¨Ù„ÙˆÙ… Ù†Ù…Ø³Ø§ÙˆÙŠ + Ø±Ø®Ø§Ù… ÙƒØ§Ù„Ø§ÙƒØ§ØªØ§',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    details: 'ØªÙ… ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø·Ø¨Ø® Ø¨Ø£Ù„ÙˆØ§Ø­ Ø£ÙƒØ±ÙŠÙ„ÙŠÙƒ Ø³ÙˆØ¯Ø§Ø¡ ØºÙŠØ± Ù„Ø§Ù…Ø¹Ø© Ù…Ø¹ Ù‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø®ÙÙŠØ© ÙˆØ¥Ø¶Ø§Ø¡Ø© LED Ø°ÙƒÙŠØ© Ù…Ø¯Ù…Ø¬Ø© Ø¨Ø§Ù„Ø±ÙÙˆÙ.'
  },
  {
    id: 2,
    title: 'Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ… ÙØ§Ø®Ø±Ø© Ø¨Ù‚ÙˆØ§Ø·Ø¹ Ø²Ø¬Ø§Ø¬ ÙØ§Ù…ÙŠÙ‡',
    category: 'dressing',
    categoryName: 'Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…',
    location: 'Ø§Ù„Ø´ÙŠØ® Ø²Ø§ÙŠØ¯ - 6 Ø£ÙƒØªÙˆØ¨Ø±',
    date: '2024',
    materials: 'Ø¥Ø·Ø§Ø± Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø¨Ø±ÙˆÙ†Ø²ÙŠ + Ø²Ø¬Ø§Ø¬ Ø³ÙŠÙƒÙˆØ±ÙŠØª Ø¹Ø§ÙƒØ³ + Ø¥Ø¶Ø§Ø¡Ø© LED 3000K',
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1000&q=80',
    details: 'ØªØµÙ…ÙŠÙ… Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ… Ù…ÙØªÙˆØ­ ÙŠØ¯Ù…Ø¬ Ø¨ÙŠÙ† Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£Ø¯Ø±Ø§Ø¬ Ø§Ù„Ù…Ù‚ÙˆØ§Ø© ÙˆØ§Ù„Ø±ÙÙˆÙ Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠØ© Ø§Ù„Ù…Ø²ÙˆØ¯Ø© Ø¨Ø¥Ø¶Ø§Ø¡Ø§Øª Ø§Ø³ØªØ´Ø¹Ø§Ø±ÙŠØ©.'
  },
  {
    id: 3,
    title: 'ÙˆØ§Ø¬Ù‡Ø© ÙƒØ±ØªÙ† ÙˆÙˆÙ„ Ù„Ø¨Ø±Ø¬ Ø¥Ø¯Ø§Ø±ÙŠ ÙØ§Ø®Ø±',
    category: 'facades',
    categoryName: 'ÙˆØ§Ø¬Ù‡Ø§Øª Ø²Ø¬Ø§Ø¬ÙŠØ©',
    location: 'Ø§Ù„Ø¹Ø§ØµÙ…Ø© Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠØ© Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©',
    date: '2023',
    materials: 'Structural Glazing Double Glass 24mm + Ù‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø«Ù‚ÙŠÙ„Ø©',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    details: 'ØªØ±ÙƒÙŠØ¨ ÙˆØ§Ø¬Ù‡Ø© ÙƒØ±ØªÙ† ÙˆÙˆÙ„ Ø¨Ù…Ø³Ø§Ø­Ø© 1200 Ù…ØªØ± Ù…Ø±Ø¨Ø¹ ØªÙˆÙØ± Ø¹Ø²Ù„Ø§Ù‹ ÙƒØ§Ù…Ù„Ø§Ù‹ Ù„Ù„ØµÙˆØª ÙˆØ§Ù„Ø­Ø±Ø§Ø±Ø© ÙˆØªØªØ­Ù…Ù„ Ø§Ù„Ø±ÙŠØ§Ø­ Ø§Ù„Ø¹Ø§Ù„ÙŠØ©.'
  },
  {
    id: 4,
    title: 'Ø£Ù†Ø¸Ù…Ø© Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ù„ÙÙŠÙ„Ø§ Ù…ÙˆØ¯Ø±Ù†',
    category: 'windows',
    categoryName: 'Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨',
    location: 'Ø§Ù„Ø±Ø­Ø§Ø¨ - Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©',
    date: '2024',
    materials: 'Ù‚Ø·Ø§Ø¹ Ø¬Ø§Ù…Ø¨Ùˆ Ø¹Ø§Ø²Ù„ + Ø²Ø¬Ø§Ø¬ Ø¯ÙˆØ¨Ù„ Ø¬ÙˆØ±Ø¬ÙŠØ§ Ø£Ø³ÙˆØ¯',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1000&q=80',
    details: 'ØªÙ†ÙÙŠØ° ÙƒØ§ÙØ© ÙØªØ­Ø§Øª Ø§Ù„ÙÙŠÙ„Ø§ Ø¨Ù‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø¹Ø±ÙŠØ¶Ø© ØªØ¶Ù…Ù† Ø£Ø¹Ù„Ù‰ Ù…Ø¹Ø¯Ù„Ø§Øª Ø§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„Ø¹Ø²Ù„ Ù…Ø¹ Ø³Ù„Ùƒ Ù†Ø§Ù…ÙˆØ³ Ø¨Ù„Ø¨ÙŠØ³ Ù…Ø®ÙÙŠ.'
  },
  {
    id: 5,
    title: 'Ù‚ÙˆØ§Ø·Ø¹ Ø²Ø¬Ø§Ø¬ÙŠØ© Ù„Ù…Ù‚Ø± Ø´Ø±ÙƒØ© Ø¹Ø§Ù„Ù…ÙŠØ©',
    category: 'facades',
    categoryName: 'Ù‚ÙˆØ§Ø·Ø¹ Ù…ÙƒØ§ØªØ¨',
    location: 'Ø§Ù„Ù‚Ø±ÙŠØ© Ø§Ù„Ø°ÙƒÙŠØ© - 6 Ø£ÙƒØªÙˆØ¨Ø±',
    date: '2023',
    materials: 'Ø²Ø¬Ø§Ø¬ Ø³ÙŠÙƒÙˆØ±ÙŠØª 12 Ù…Ù… + Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ø³ØªØ§Ù†Ù„Ø³ Ø³ØªÙŠÙ„ 316',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    details: 'ØªÙ‚Ø³ÙŠÙ… Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…ÙØªÙˆØ­Ø© Ù„Ù„Ø´Ø±ÙƒØ© Ø¥Ù„Ù‰ 14 Ù…ÙƒØªØ¨ ÙˆØºØ±ÙØ© Ø§Ø¬ØªÙ…Ø§Ø¹Ø§Øª Ù…Ø¹Ø²ÙˆÙ„Ø© ØµÙˆØªÙŠØ§Ù‹ Ø¨ØªØµÙ…ÙŠÙ… ÙØ±ÙŠÙ… Ù„Ø³ Ù…ÙˆØ¯Ø±Ù†.'
  },
  {
    id: 6,
    title: 'Ù…Ø·Ø¨Ø® Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ø®Ø´Ø§Ø¨ÙŠ (Ø®Ø´Ù…ÙˆÙ†ÙŠÙˆÙ…) Ø±Ø§Ù‚ÙŠ',
    category: 'kitchens',
    categoryName: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†',
    location: 'Ø§Ù„Ø´Ø±ÙˆÙ‚ - Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©',
    date: '2024',
    materials: 'Ø¯Ù‡Ø§Ù†Ø§Øª Ø¥Ù„ÙƒØªØ±ÙˆØ³ØªØ§ØªÙŠÙƒ Ø®Ø´Ø¨ÙŠØ© + Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ù‡ÙŠØ¯Ø±ÙˆÙ„ÙŠÙƒÙŠØ©',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
    details: 'Ù…Ø·Ø¨Ø® ÙŠØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø¯ÙØ¡ Ø´ÙƒÙ„ Ø§Ù„Ø®Ø´Ø¨ Ø§Ù„Ø·Ø¨ÙŠØ¹ÙŠ ÙˆÙ…Ø²Ø§ÙŠØ§ Ø§Ù„Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø§Ù„Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„Ù…Ø§Ø¡ ÙˆØ§Ù„Ø­Ø´Ø±Ø§Øª Ù…Ø¹ ÙˆØ­Ø¯Ø§Øª ØªØ®Ø²ÙŠÙ† Ø°ÙƒÙŠØ©.'
  }
];

const ESTIMATOR_OPTIONS = {
  kitchens: {
    title: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù† ÙˆÙØ®Ù…Ø©',
    materials: [
      { id: 'polylac', name: 'Ø¨ÙˆÙ„ÙŠ Ù„Ø§Ùƒ ØªØ±ÙƒÙŠØ§Øª (PolyLac)', duration: '12-15 ÙŠÙˆÙ… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ø§Ù„Ø£ÙƒØ«Ø± Ø·Ù„Ø¨Ø§Ù‹' },
      { id: 'acrylic', name: 'Ø£ÙƒØ±ÙŠÙ„ÙŠÙƒ Ø£Ù„Ù…Ø§Ù†ÙŠ Ø¹Ø§Ù„ÙŠ Ø§Ù„Ù„Ù…Ø¹Ø§Ù†', duration: '10-14 ÙŠÙˆÙ… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'ÙØ®Ø§Ù…Ø© Ø®ÙŠØ§Ù„ÙŠØ©' },
      { id: 'khashmonium', name: 'Ø®Ø´Ù…ÙˆÙ†ÙŠÙˆÙ… Ø¯Ù‡Ø§Ù† Ø¥Ù„ÙƒØªØ±ÙˆØ³ØªØ§ØªÙŠÙƒ Ø®Ø´Ø¨Ø§Ø¨ÙŠ', duration: '14-18 ÙŠÙˆÙ… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ù…Ù‚Ø§ÙˆÙ… 100% Ù„Ù„Ù…Ø§Ø¡' }
    ]
  },
  dressing: {
    title: 'ØºØ±Ù Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…',
    materials: [
      { id: 'glass-frame', name: 'Ø¥Ø·Ø§Ø± Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø±ÙÙŠØ¹ + Ø²Ø¬Ø§Ø¬ ÙØ§Ù…ÙŠÙ‡ LED', duration: '10-12 ÙŠÙˆÙ… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ù…ÙˆØ¯Ø±Ù† ØªØ±ÙŠÙ†Ø¯' },
      { id: 'open-system', name: 'Ù†Ø¸Ø§Ù… Ø§Ù„Ù…ÙØªÙˆØ­ Ù‡ÙŠÙØ§ÙŠ Ø·Ø±Ø§Ø² Ø¥ÙŠØ·Ø§Ù„ÙŠ', duration: '10-14 ÙŠÙˆÙ… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ø§Ø³ØªØºÙ„Ø§Ù„ Ù…Ø³Ø§Ø­Ø©' }
    ]
  },
  windows: {
    title: 'Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„',
    materials: [
      { id: 'jumbo', name: 'Ù‚Ø·Ø§Ø¹ Ø¬Ø§Ù…Ø¨Ùˆ Ø«Ù‚ÙŠÙ„ (Ø²Ø¬Ø§Ø¬ Ø¯ÙˆØ¨Ù„ Ø¹Ø§Ø²Ù„)', duration: '7-10 Ø£ÙŠØ§Ù… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ø£Ø¹Ù„Ù‰ Ù†Ø³Ø¨Ø© Ø¹Ø²Ù„' },
      { id: 'tango', name: 'Ù‚Ø·Ø§Ø¹ ØªØ§Ù†Ø¬Ùˆ Ù…Ø¹Ø²ÙˆÙ„ Ø¬ÙˆØ±Ø¬ÙŠØ§', duration: '7-10 Ø£ÙŠØ§Ù… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'ØªØµÙ…ÙŠÙ… Ø£ÙˆØ±ÙˆØ¨ÙŠ' },
      { id: 'bs', name: 'Ù‚Ø·Ø§Ø¹ BS ØµØºÙŠØ± Ø£Ùˆ ÙƒØ¨ÙŠØ± Ù…Ø¹Ø²ÙˆÙ„', duration: '5-8 Ø£ÙŠØ§Ù… Ø¹Ù…Ù„', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ø§Ù‚ØªØµØ§Ø¯ÙŠ ÙˆØ¹Ù…Ù„ÙŠ' }
    ]
  },
  facades: {
    title: 'ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒØ±ØªÙ† ÙˆÙˆÙ„ ÙˆØ³ÙŠÙƒÙˆØ±ÙŠØª',
    materials: [
      { id: 'curtain-struct', name: 'ÙƒØ±ØªÙ† ÙˆÙˆÙ„ Structural Glazing 24mm', duration: 'Ø­Ø³Ø¨ Ù…Ø³Ø§Ø­Ø© Ø§Ù„Ù…Ø¨Ù†Ù‰', guarantee: '15 Ø³Ù†Ø©', badge: 'Ù„Ù„Ù…Ø¨Ø§Ù†ÙŠ ÙˆØ§Ù„Ø´Ø±ÙƒØ§Øª' },
      { id: 'spider', name: 'ÙˆØ§Ø¬Ù‡Ø© Ø³Ø¨Ø§ÙŠØ¯Ø± Ø²Ø¬Ø§Ø¬ Ø³ÙŠÙƒÙˆØ±ÙŠØª 12mm', duration: 'Ø­Ø³Ø¨ Ø§Ù„Ù…Ø³Ø·Ø­', guarantee: '10 Ø³Ù†ÙˆØ§Øª', badge: 'Ø±Ø¤ÙŠØ© Ø¨Ø§Ù†ÙˆØ±Ø§Ù…ÙŠØ©' }
    ]
  }
};

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Ù…. Ø£Ø­Ù…Ø¯ Ù†Ø§ØµØ±',
    role: 'Ø§Ø³ØªØ´Ø§Ø±ÙŠ Ù‡Ù†Ø¯Ø³ÙŠ - Ù…Ø´Ø±ÙˆØ¹ ÙÙŠÙ„Ø§ Ø§Ù„ØªØ¬Ù…Ø¹',
    comment: 'Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø´Ø±ÙƒØ© Ø§Ù„Ø±ÙŠØ§Ù† ÙƒØ§Ù† ØªØ¬Ø±Ø¨Ø© Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠØ©. Ø¯Ù‚Ø© Ø§Ù„Ø§Ù„ØªØ²Ø§Ù… Ø¨Ø§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯ØŒ Ø¬ÙˆØ¯Ø© ØªØ±ÙƒÙŠØ¨ Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ØŒ ÙˆØ§Ù„Ø§Ù‡ØªÙ…Ø§Ù… Ø¨Ø£ØµØºØ± Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙÙŠ Ø§Ù„Ù…Ø·Ø¨Ø® ÙˆØ§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø¬Ø¹Ù„Ù‡Ù… Ø§Ù„Ø®ÙŠØ§Ø± Ø§Ù„Ø£ÙˆÙ„ Ù„Ù…Ø´Ø§Ø±ÙŠØ¹Ù†Ø§.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Ø£/ Ø´Ø±ÙŠÙ Ø­Ø³Ù†ÙŠ',
    role: 'Ù…Ø§Ù„Ùƒ Ø´Ø±ÙƒØ© ØªØ³ÙˆÙŠÙ‚ - Ø§Ù„Ø¹Ø§ØµÙ…Ø© Ø§Ù„Ø¥Ø¯Ø§Ø±ÙŠØ©',
    comment: 'Ù†ÙØ°ÙˆØ§ Ù„Ù†Ø§ ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ù…Ù‚Ø± Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ ÙˆÙ‚ÙˆØ§Ø·Ø¹ Ø§Ù„Ø²Ø¬Ø§Ø¬ Ø§Ù„Ø³ÙŠÙƒÙˆØ±ÙŠØª Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠØ©. Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø¬Ø¯Ø§Ù‹ØŒ ÙˆÙ…Ù‡Ù†Ø¯Ø³ÙŠ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¹Ù„Ù‰ Ø¯Ø±Ø§ÙŠØ© ÙƒØ§Ù…Ù„Ø© Ø¨Ø£Ø¯Ù‚ Ø§Ù„ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Ø¯. Ù…Ø±ÙˆØ© Ø§Ù„Ø´Ø§ÙØ¹ÙŠ',
    role: 'Ù…Ø§Ù„ÙƒØ© ÙÙŠÙ„Ø§ Ø¨Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„Ø´ÙŠØ® Ø²Ø§ÙŠØ¯',
    comment: 'Ø§Ù„Ù…Ø·Ø¨Ø® ÙˆØ§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ… Ø·Ù„Ø¹ÙˆØ§ Ø£Ø¬Ù…Ù„ Ø¨ÙƒØªÙŠØ± Ù…Ù† Ø§Ù„ØªØ®ÙŠÙ„! Ø§Ù„ØªØµÙ…ÙŠÙ… 3D Ø§Ù„Ù…Ø·Ø§Ø¨Ù‚ Ù„Ù„ÙˆØ§Ù‚Ø¹ØŒ ÙˆØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø£Ù„ÙˆØ§Ù† ÙˆØ§Ù„Ø¥Ø¶Ø§Ø¡Ø§Øª Ù…Ø®Ù„ÙŠ Ø§Ù„Ø¨ÙŠØª ØªØ­ÙØ© ÙÙ†ÙŠØ©. Ø´ÙƒØ±Ø§Ù‹ Ù„ÙØ±ÙŠÙ‚ Ø§Ù„Ø±ÙŠØ§Ù†.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

const FAQ_DATA = [
  {
    q: 'Ù…Ø§ Ù‡ÙŠ Ø§Ù„Ø®Ø§Ù…Ø§Øª ÙˆØ§Ù„Ù…ÙˆØ§Ø¯ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø© ÙÙŠ Ù…Ø·Ø§Ø¨Ø® ÙˆØ¯Ø±ÙŠØ³Ù†Ø¬ Ø§Ù„Ø±ÙŠØ§Ù†ØŸ',
    a: 'Ù†Ø³ØªØ®Ø¯Ù… Ø£ÙØ¶Ù„ Ù‚Ø·Ø§Ø¹Ø§Øª Ø§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© Ø¨Ø§Ù„Ø¯Ù‡Ø§Ù†Ø§Øª Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆØ³ØªØ§ØªÙŠÙƒÙŠØ©ØŒ Ø¨Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ù„Ø£Ù„ÙˆØ§Ø­ Ø§Ù„Ø£ÙƒØ±ÙŠÙ„ÙŠÙƒØŒ Ø§Ù„Ø¨ÙˆÙ„ÙŠ Ù„Ø§ÙƒØŒ ÙˆØ§Ù„Ø®Ø´Ù…ÙˆÙ†ÙŠÙˆÙ… Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø¬ÙˆØ¯Ø©. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª ÙˆØ§Ù„Ù…ÙØµÙ„Ø§Øª Ù†Ù…Ø³Ø§ÙˆÙŠØ© ÙˆØ¥ÙŠØ·Ø§Ù„ÙŠØ© Ø°Ø§Øª ÙƒÙØ§Ø¡Ø© Ø¹Ø§Ù„ÙŠØ© ÙˆØ¶Ù…Ø§Ù† Ø·ÙˆÙŠÙ„ Ø§Ù„Ø£Ù…Ø¯.'
  },
  {
    q: 'Ù‡Ù„ ØªÙˆÙØ±ÙˆÙ† Ø¶Ù…Ø§Ù†Ø§Ù‹ Ø­Ù‚ÙŠÙ‚ÙŠØ§Ù‹ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ§Ù„Ù…Ù†ØªØ¬Ø§ØªØŸ',
    a: 'Ù†Ø¹Ù…ØŒ Ù†Ù‚Ø¯Ù… Ø¶Ù…Ø§Ù†Ø§Ù‹ Ù…Ø¹ØªÙ…Ø¯Ø§Ù‹ Ù„Ù…Ø¯Ø© 10 Ø³Ù†ÙˆØ§Øª Ø¹Ù„Ù‰ ÙƒØ§ÙØ© Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª ÙˆØ§Ù„Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§ØªØŒ Ø¶Ø¯ Ø¹ÙŠÙˆØ¨ Ø§Ù„ØªØµÙ†ÙŠØ¹ ÙˆØ§Ù„ØªØ±ÙƒÙŠØ¨ ÙˆØ§Ù„ØªØ¢ÙƒÙ„ØŒ Ù…Ø¹ Ø®Ø¯Ù…Ø© ØµÙŠØ§Ù†Ø© Ø¯ÙˆØ±ÙŠØ© ÙˆØ³Ø±ÙŠØ¹Ø©.'
  },
  {
    q: 'ÙƒÙŠÙ ØªØªÙ… Ø¹Ù…Ù„ÙŠØ© Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø© ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… Ù‚Ø¨Ù„ Ø§Ù„ØªÙ†ÙÙŠØ°ØŸ',
    a: 'ÙŠÙ‚ÙˆÙ… Ù…Ù‡Ù†Ø¯Ø³ Ù…ØªØ®ØµØµ Ù…Ù† ÙØ±ÙŠÙ‚ Ø§Ù„Ø±ÙŠØ§Ù† Ø¨Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ù„Ø±ÙØ¹ Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø¨Ø¯Ù‚Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù„ÙŠØ²Ø±ØŒ Ø«Ù… ÙŠÙ‚ÙˆÙ… ÙØ±ÙŠÙ‚ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø¨Ø¥Ø¹Ø¯Ø§Ø¯ ØªØµÙ…ÙŠÙ… 3D ØªÙØ§Ø¹Ù„ÙŠ Ù…Ø¬Ø§Ù†Ø§Ù‹ Ù„ØªØ±Ù‰ Ù…Ø´Ø±ÙˆØ¹Ùƒ Ù‚Ø¨Ù„ Ø§Ù„Ø¨Ø¯Ø¡ Ø¨Ø§Ù„ØªØµÙ†ÙŠØ¹.'
  },
  {
    q: 'Ù…Ø§ Ù‡ÙŠ Ø§Ù„Ù…Ø¯Ø© Ø§Ù„Ø§Ø³ØªØºØ±Ø§Ù‚ÙŠØ© Ù„ØªØµÙ†ÙŠØ¹ ÙˆØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ØŸ',
    a: 'ØªØªØ±Ø§ÙˆØ­ Ù…Ø¯Ø© Ø§Ù„ØªÙ†ÙÙŠØ° ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ… Ù…Ù† 10 Ø¥Ù„Ù‰ 20 ÙŠÙˆÙ… Ø¹Ù…Ù„ Ø­Ø³Ø¨ Ø­Ø¬Ù… Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ ÙˆØ·Ø¨ÙŠØ¹Ø© Ø§Ù„ØªØ´Ø·ÙŠØ¨Ø§Øª Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©ØŒ Ù…Ø¹ Ø§Ù„ØªØ²Ø§Ù… ØªØ§Ù… Ø¨Ø§Ù„Ø¬Ø¯ÙˆÙ„ Ø§Ù„Ø²Ù…Ù†ÙŠ Ø§Ù„Ù…Ø­Ø¯Ø¯ ÙÙŠ Ø§Ù„Ø¹Ù‚Ø¯.'
  },
  {
    q: 'Ù‡Ù„ ØªØºØ·ÙŠ Ø®Ø¯Ù…Ø§ØªÙƒÙ… ÙƒØ§ÙØ© Ù…Ø­Ø§ÙØ¸Ø§Øª Ø¬Ù…Ù‡ÙˆØ±ÙŠØ© Ù…ØµØ± Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©ØŸ',
    a: 'Ù†Ø¹Ù…ØŒ ÙØ±ÙŠÙ‚Ù†Ø§ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ ÙˆÙ…Ø¬Ù…ÙˆØ¹Ø§Øª Ø§Ù„ØªØ±ÙƒÙŠØ¨ Ù…Ø¬Ù‡Ø²Ø© Ù„Ù„Ø§Ù†ØªÙ‚Ø§Ù„ ÙˆØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ ÙÙŠ ÙƒØ§ÙØ© Ø§Ù„Ù…Ø­Ø§ÙØ¸Ø§Øª ÙˆØ§Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø³Ø§Ø­Ù„ÙŠØ© ÙˆØ§Ù„Ù…Ø¯Ù† Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø©.'
  }
];

export default function App() {
  // Navigation & UI States
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Fullscreen Lightbox Image Zoom State
  const [zoomedImage, setZoomedImage] = useState(null);

  // Hero Text Slide Index
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  // Estimator Interactive State
  const [estimatorCategory, setEstimatorCategory] = useState('kitchens');
  const [estimatorMaterialIndex, setEstimatorMaterialIndex] = useState(0);
  const [estimatorArea, setEstimatorArea] = useState(12);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†',
    city: 'Ø§Ù„Ù‚Ø§Ù‡Ø±Ø© / Ø§Ù„Ø¬ÙŠØ²Ø©',
    notes: ''
  });

  // Dynamic Animated Counters
  const [countProjects, setCountProjects] = useState(0);
  const [countYears, setCountYears] = useState(0);
  const [countClients, setCountClients] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Hero Text Timer
    const heroTimer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    // Dynamic Counter Effect
    let p = 0;
    let y = 0;
    let c = 0;
    const interval = setInterval(() => {
      if (p < 500) p += 20;
      if (y < 15) y += 1;
      if (c < 1000) c += 40;

      setCountProjects(Math.min(p, 500));
      setCountYears(Math.min(y, 15));
      setCountClients(Math.min(c, 1000));

      if (p >= 500 && y >= 15 && c >= 1000) {
        clearInterval(interval);
      }
    }, 40);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(heroTimer);
      clearInterval(interval);
    };
  }, []);

  const filteredProjects = activeProjectFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeProjectFilter);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInspectionModalOpen(false);
      setFormData({ name: '', phone: '', service: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†', city: 'Ø§Ù„Ù‚Ø§Ù‡Ø±Ø© / Ø§Ù„Ø¬ÙŠØ²Ø©', notes: '' });
    }, 3000);
  };

  const currentEstimatorData = ESTIMATOR_OPTIONS[estimatorCategory];
  const selectedMaterialObj = currentEstimatorData.materials[estimatorMaterialIndex] || currentEstimatorData.materials[0];

  return (
    <div className="min-h-screen bg-[#091B44] text-white font-sans dir-rtl overflow-x-hidden selection:bg-[#FF8C32] selection:text-white" dir="rtl">
      
      {/* Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#091B44]/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
            : 'bg-gradient-to-b from-[#091B44]/90 via-[#091B44]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#0A3EA8] to-[#FF8C32] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#091B44] rounded-[10px] flex items-center justify-center font-extrabold text-xl text-[#FF8C32]">
                Ø±
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight font-serif">
                Ø§Ù„Ø±ÙŠÙ€Ù€Ù€Ù€Ø§Ù†
              </span>
              <span className="text-[10px] sm:text-xs text-[#FF8C32] font-semibold tracking-wider">
                Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ ÙˆØ§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {[
              { id: 'home', label: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©' },
              { id: 'about', label: 'Ù…Ù† Ù†Ø­Ù†' },
              { id: 'services', label: 'Ø®Ø¯Ù…Ø§ØªÙ†Ø§' },
              { id: 'estimator', label: 'Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª' },
              { id: 'projects', label: 'Ø£Ø¹Ù…Ø§Ù„Ù†Ø§' },
              { id: 'factory', label: 'Ø§Ù„Ù…ØµÙ†Ø¹' },
              { id: 'faq', label: 'Ø§Ù„Ø£Ø³Ø¦Ù„Ø©' },
              { id: 'contact', label: 'Ø§ØªØµÙ„ Ø¨Ù†Ø§' }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveNav(link.id)}
                className={`transition-colors duration-200 hover:text-[#FF8C32] relative py-1 ${
                  activeNav === link.id ? 'text-[#FF8C32] font-bold' : 'text-gray-200'
                }`}
              >
                {link.label}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#FF8C32] rounded-full animate-pulse" />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-gradient-to-r from-[#0A3EA8] to-[#1e58d4] hover:from-[#1e58d4] hover:to-[#0A3EA8] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FF8C32] animate-spin" style={{ animationDuration: '4s' }} />
              <span>Ø§Ø·Ù„Ø¨ Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ©</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-[#0A3EA8] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ©
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-white p-2"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#FF8C32]" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#091B44]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
            <div className="flex flex-col gap-4 text-base font-medium">
              {[
                { id: 'home', label: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©' },
                { id: 'about', label: 'Ù…Ù† Ù†Ø­Ù†' },
                { id: 'services', label: 'Ø®Ø¯Ù…Ø§ØªÙ†Ø§' },
                { id: 'estimator', label: 'Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª' },
                { id: 'projects', label: 'Ù…Ø¹Ø±Ø¶ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„' },
                { id: 'factory', label: 'Ø§Ù„Ù…ØµÙ†Ø¹ ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§' },
                { id: 'faq', label: 'Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©' },
                { id: 'contact', label: 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§' }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveNav(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-200 hover:text-[#FF8C32] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-[#FF8C32]" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="tel:01102655589"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 rounded-xl text-sm font-bold"
                >
                  <Phone className="w-4 h-4 text-[#FF8C32]" />
                  <span>Ø§ØªØµÙ„ Ø¨Ù†Ø§: 01102655589</span>
                </a>
                <a
                  href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84.
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-sm font-bold"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Ù…Ø­Ø§Ø¯Ø«Ø© ÙˆØ§ØªØ³Ø§Ø¨ Ù…Ø¨Ø§Ø´Ø±Ø©</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION WITH BACKGROUND VIDEO & AMBIENT BLUR LIGHTING */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Video Player with Ambient Soft Blur & Shimmer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transform scale-110 filter brightness-[0.55] saturate-[1.2] blur-[2px] opacity-85 transition-transform duration-1000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-design-41566-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxurious-modern-kitchen-41568-large.mp4" type="video/mp4" />
          </video>

          {/* Glow Neon & Dark Gradient Overlays for Soft Lighting Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091B44] via-[#091B44]/70 to-[#0A3EA8]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091B44] via-transparent to-[#091B44]/60" />

          {/* Animated Ambient Light Spheres */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF8C32]/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#0A3EA8]/40 rounded-full filter blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-right w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-2 self-center sm:self-start bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[#FF8C32] text-sm font-bold shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Ø§Ù„Ø±ÙŠØ§Ù† Ù„Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ ÙˆØ§Ù„Ù…Ø·Ø§Ø¨Ø® Ø§Ù„ÙØ§Ø®Ø±Ø©</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight font-serif tracking-normal">
                Ù†ØµÙ†Ø¹ Ø§Ù„Ø¬ÙˆØ¯Ø©... <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C32] via-[#ffaa64] to-white">
                  ÙˆÙ†Ø¨Ù†ÙŠ Ø§Ù„Ø«Ù‚Ø©
                </span>
              </h1>

              <p className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-light transition-all duration-500">
                {HERO_SLIDES[heroSlideIndex].subtitle} â€” Ù…ØªØ®ØµØµÙˆÙ† ÙÙŠ <strong className="text-white font-semibold">Ø§Ù„Ù…Ø·Ø§Ø¨Ø® Ø§Ù„Ù…ÙˆØ¯Ø±Ù†</strong>ØŒ 
                <strong className="text-white font-semibold">ØºØ±Ù Ø§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬</strong>ØŒ 
                <strong className="text-white font-semibold">Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„</strong>ØŒ 
                Ùˆ<strong className="text-white font-semibold">Ø§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠØ© Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ©</strong> Ø¨Ø¶Ù…Ø§Ù† 10 Ø³Ù†ÙˆØ§Øª.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto bg-[#FF8C32] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl hover:shadow-[#FF8C32]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>Ø§Ø³ØªÙƒØ´Ù Ù…Ø¹Ø±Ø¶ Ø£Ø¹Ù…Ø§Ù„Ù†Ø§</span>
                  <ArrowLeft className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setInspectionModalOpen(true)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5 text-[#FF8C32]" />
                  <span>Ø§Ø­Ø¬Ø² Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ø§Ù„Ø¢Ù†</span>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2 pt-2 justify-center sm:justify-start">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroSlideIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      heroSlideIndex === i ? 'w-8 bg-[#FF8C32]' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Key Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {[
                  { label: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†', sub: 'Ø£ÙƒØ±ÙŠÙ„ÙŠÙƒ ÙˆØ¨ÙˆÙ„ÙŠ Ù„Ø§Ùƒ' },
                  { label: 'Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…', sub: 'ØªØµØ§Ù…ÙŠÙ… Ø²Ø¬Ø§Ø¬ÙŠØ©' },
                  { label: 'Ø£Ù†Ø¸Ù…Ø© Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„', sub: 'Ø¬Ø§Ù…Ø¨Ùˆ ÙˆØªØ§Ù†Ø¬Ùˆ' },
                  { label: 'ÙˆØ§Ø¬Ù‡Ø§Øª Ø²Ø¬Ø§Ø¬', sub: 'Ø³ÙŠÙƒÙˆØ±ÙŠØª ÙˆÙƒØ±ØªÙ† ÙˆÙˆÙ„' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center sm:text-right backdrop-blur-sm hover:border-[#FF8C32]/50 transition-colors">
                    <div className="text-white font-bold text-sm">{item.label}</div>
                    <div className="text-[#FF8C32] text-xs font-light">{item.sub}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick Hero Floating Card & Zoom Preview */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8C32] to-[#0A3EA8] rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-[#091B44]/90 border border-white/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col gap-6">
                  
                  <div
                    className="relative h-48 rounded-2xl overflow-hidden shadow-inner cursor-pointer group/img"
                    onClick={() => setZoomedImage('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80')}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                      alt="Modern Kitchen Preview"
                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/img:bg-black/20 transition-colors">
                      <div className="w-12 h-12 bg-[#FF8C32] text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover/img:scale-110 transition-transform">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-semibold flex items-center gap-1">
                      <ZoomIn className="w-3 h-3 text-[#FF8C32]" />
                      Ø§Ù†Ù‚Ø± Ù„ØªÙƒØ¨ÙŠØ± ØµÙˆØ±Ø© Ø§Ù„Ù†Ù…ÙˆØ°Ø¬
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-white">Ù„Ù…Ø§Ø°Ø§ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ø±ÙŠØ§Ù†ØŸ</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C32]" />
                        <span>Ø¶Ù…Ø§Ù† Ø­Ù‚ÙŠÙ‚ÙŠ Ù„Ù…Ø¯Ø© 10 Ø³Ù†ÙˆØ§Øª Ø¹Ù„Ù‰ ÙƒØ§ÙØ© Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C32]" />
                        <span>Ù…Ø¹Ø§ÙŠÙ†Ø© ÙˆØ±ÙØ¹ Ù…Ø³Ø§Ø­Ø§Øª Ø¯Ù‚ÙŠÙ‚ Ø¨Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù„ÙŠØ²Ø±</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C32]" />
                        <span>Ø³Ø±Ø¹Ø© ÙÙŠ Ø§Ù„ØªÙˆØ±ÙŠØ¯ ÙˆØ§Ù„ØªØ±ÙƒÙŠØ¨ Ø¨Ø£Ø¹Ù„Ù‰ Ø§Ø­ØªØ±Ø§ÙÙŠØ©</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84.
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-white py-3 rounded-xl font-bold text-center text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>ØªÙˆØ§ØµÙ„ Ø³Ø±ÙŠØ¹ Ø¹Ø¨Ø± Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨</span>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Animated Statistics Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#091B44] via-[#0A3EA8]/80 to-[#091B44] border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#FF8C32] font-serif">+{countProjects}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Ù…Ø´Ø±ÙˆØ¹ Ù…ÙƒØªÙ…Ù„ Ø¨Ù†Ø¬Ø§Ø­</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white font-serif">+{countYears}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Ø¹Ø§Ù…Ø§Ù‹ Ù…Ù† Ø§Ù„Ø®Ø¨Ø±Ø© ÙˆØ§Ù„ØªÙ…ÙŠÙ‘Ø²</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#FF8C32] font-serif">+{countClients}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Ø¹Ù…ÙŠÙ„ Ø³Ø¹ÙŠØ¯ ÙˆÙ…Ø³ØªÙ…Ø±</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white font-serif">100%</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Ø¯Ù‚Ø© ÙˆØªØ²Ø§Ù… Ø¨Ø§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯</span>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#091B44] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative group/about">
              <div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
                onClick={() => setZoomedImage('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80')}
              >
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="Al Rayan Kitchen Showroom"
                  className="w-full h-[420px] object-cover group-hover/about:scale-110 transition-transform duration-700 filter brightness-95 group-hover/about:brightness-105"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/20 text-[#FF8C32]">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-20 bg-gradient-to-br from-[#0A3EA8] to-[#091B44] border border-white/20 p-6 rounded-2xl shadow-2xl hidden sm:block max-w-xs backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF8C32] text-white flex items-center justify-center font-bold text-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Ø¬ÙˆØ¯Ø© Ù…Ø¹ØªÙ…Ø¯Ø©</h4>
                    <p className="text-xs text-gray-300">Ø£Ø­Ø¯Ø« Ø®Ø·ÙˆØ· Ø§Ù„Ø¥Ù†ØªØ§Ø¬ Ù„Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ ÙˆØ§Ù„Ù…Ø·Ø§Ø¨Ø®</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A3EA8]/30 rounded-full filter blur-3xl -z-0" />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-2 bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#FF8C32] px-4 py-1.5 rounded-full text-xs font-bold w-fit">
                <Building2 className="w-4 h-4" />
                <span>Ø¹Ù† Ø§Ù„Ø±ÙŠØ§Ù† Ù„Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ ÙˆØ§Ù„Ù…Ø·Ø§Ø¨Ø®</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif">
                Ù†Ø­ÙˆÙ„ Ø±Ø¤ÙŠØªÙƒ Ø¥Ù„Ù‰ ÙˆØ§Ù‚Ø¹ Ù…Ø¹Ù…Ø§Ø±ÙŠ <br />
                <span className="text-[#FF8C32]">ÙŠØªØ³Ù… Ø¨Ø§Ù„Ø£Ù†Ø§Ù‚Ø© ÙˆØ§Ù„Ø¯Ù‚Ø© Ø§Ù„Ù…ØªÙ†Ø§Ù‡ÙŠØ©</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                ØªØ¹Ø¯ <strong className="text-white">Ø´Ø±ÙƒØ© Ø§Ù„Ø±ÙŠØ§Ù† Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ ÙˆØ§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„</strong> ÙˆØ§Ø­Ø¯Ø© Ù…Ù† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø±Ø§Ø¦Ø¯Ø© ÙÙŠ Ù…ØµØ± ÙˆØ§Ù„Ù…ØªØ®ØµØµØ© ÙÙŠ ØªÙ‚Ø¯ÙŠÙ… Ø­Ù„ÙˆÙ„ Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø³ÙƒÙ†ÙŠØ© ÙˆØ§Ù„ØªØ¬Ø§Ø±ÙŠØ©. Ù†Ø­Ù† Ù†Ø¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„Ø·ÙˆÙŠÙ„Ø© ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø­Ø¯ÙŠØ«Ø© Ù„Ù†ØµÙ†Ø¹ Ù…Ù†ØªØ¬Ø§Øª ØªÙÙˆÙ‚ Ø§Ù„ØªÙˆÙ‚Ø¹Ø§Øª Ù…Ù† Ø­ÙŠØ« Ø§Ù„Ù…ØªØ§Ù†Ø©ØŒ Ø§Ù„Ø£Ù†Ø§Ù‚Ø©ØŒ ÙˆØ§Ù„Ø§Ø³ØªØºÙ„Ø§Ù„ Ø§Ù„Ø°ÙƒÙŠ Ù„Ù„Ù…Ø³Ø§Ø­Ø§Øª.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF8C32]/40 transition-colors">
                  <h4 className="text-[#FF8C32] font-bold text-base mb-1">Ø±Ø¤ÙŠØªÙ†Ø§</h4>
                  <p className="text-xs text-gray-300">Ø£Ù† Ù†ÙƒÙˆÙ† Ø§Ù„Ø¹Ù„Ø§Ù…Ø© Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø§Ù„Ø£ÙˆÙ„Ù‰ ÙˆØ§Ù„Ø£ÙƒØ«Ø± Ø«Ù‚Ø© ÙÙŠ ØµÙ†Ø§Ø¹Ø© Ø§Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ ÙÙŠ Ù…ØµØ± ÙˆØ§Ù„Ø´Ø±Ù‚ Ø§Ù„Ø£ÙˆØ³Ø·.</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF8C32]/40 transition-colors">
                  <h4 className="text-[#FF8C32] font-bold text-base mb-1">Ø±Ø³Ø§Ù„ØªÙ†Ø§</h4>
                  <p className="text-xs text-gray-300">ØªÙ‚Ø¯ÙŠÙ… Ù…Ù†ØªØ¬Ø§Øª Ù‡Ù†Ø¯Ø³ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø© ØªØ¶Ù…Ù† Ø§Ù„Ø±Ø§Ø­Ø© ÙˆØ§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„Ø¬Ù…Ø§Ù„ Ù„Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§ Ø¨Ø£ÙØ¶Ù„ Ø§Ù„Ø£Ø³Ø¹Ø§Ø± ÙˆØ¨Ø¶Ù…Ø§Ù† Ø­Ù‚ÙŠÙ‚ÙŠ.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF8C32]/20 text-[#FF8C32] flex items-center justify-center font-bold">
                    âœ“
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Ù…Ù‡Ù†Ø¯Ø³ÙˆÙ† ÙˆÙÙ†ÙŠÙˆÙ† Ù…Ø­ØªØ±ÙÙˆÙ†</h5>
                    <p className="text-xs text-gray-400">Ø¥Ø´Ø±Ø§Ù Ø¯Ù‚ÙŠÙ‚ Ø¹Ù„Ù‰ ÙƒÙ„ Ø®Ø·ÙˆØ© ØªØµÙ†ÙŠØ¹</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A3EA8]/40 text-[#0A3EA8] flex items-center justify-center font-bold">
                    âœ“
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Ø£ÙØ¶Ù„ Ø§Ù„Ù‚Ø·Ø§Ø¹Ø§Øª ÙˆØ§Ù„Ø¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª</h5>
                    <p className="text-xs text-gray-400">Ù‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ø«Ù‚ÙŠÙ„Ø© ÙˆØ²Ø¬Ø§Ø¬ Ù…Ø¹Ø§Ù„Ø¬</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#08173b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">Ø®Ø¯Ù…Ø§ØªÙ†Ø§ Ø§Ù„Ù…ØªØ®ØµØµØ©</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              Ø­Ù„ÙˆÙ„ Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ ÙˆØ§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„
            </h2>
            <p className="text-gray-300 text-base">
              Ù†ØµÙ…Ù… ÙˆÙ†Ù†ÙØ° Ø£Ø±Ù‚Ù‰ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØ§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠØ© Ù„Ù„Ù…Ù†Ø§Ø²Ù„ØŒ Ø§Ù„ÙÙŠÙ„Ù„ØŒ Ø§Ù„Ø´Ø±ÙƒØ§ØªØŒ ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© Ø¨Ø£Ø¹Ù„Ù‰ Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¯Ù‚Ø©.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-[#091B44] border border-white/10 rounded-3xl overflow-hidden hover:border-[#FF8C32]/50 hover:shadow-2xl hover:shadow-[#0A3EA8]/30 transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
                >
                  <div>
                    <div
                      className="relative h-56 overflow-hidden cursor-pointer"
                      onClick={() => setZoomedImage(service.image)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091B44] via-transparent to-transparent" />
                      
                      <div className="absolute top-4 right-4 bg-[#091B44]/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-[#FF8C32]">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4 text-[#FF8C32]" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-3">
                      <span className="text-xs font-semibold text-[#FF8C32]">{service.subtitle}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FF8C32] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="pt-3 border-t border-white/5 space-y-2">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <Check className="w-3.5 h-3.5 text-[#FF8C32]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setInspectionModalOpen(true)}
                      className="w-full bg-white/5 hover:bg-[#FF8C32] hover:text-white border border-white/10 text-gray-200 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Ø§Ø·Ù„Ø¨ Ù…Ø¹Ø§ÙŠÙ†Ø© Ù„Ù‡Ø°Ù‡ Ø§Ù„Ø®Ø¯Ù…Ø©</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Estimator Section */}
      <section id="estimator" className="py-24 bg-[#091B44] relative border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FF8C32]/20 border border-[#FF8C32] text-[#FF8C32] px-4 py-1.5 rounded-full text-xs font-bold mb-3">
              <Calculator className="w-4 h-4" />
              <span>Ø£Ø¯Ø§Ø© Ù…Ø®ØµØµØ© Ù„Ø¹Ù…Ù„Ø§Ø¡ Ø§Ù„Ø±ÙŠØ§Ù†</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª ÙˆØªÙ‚Ø¯ÙŠØ± Ø§Ù„Ù…ÙŠØ²Ø§Ù†ÙŠØ© ÙˆØ§Ù„Ø¶Ù…Ø§Ù†
            </h2>
            <p className="text-gray-300 text-base">
              Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ù…Ø´Ø±ÙˆØ¹Ùƒ ÙˆØ§Ù„Ù…Ø§Ø¯Ø© Ø§Ù„Ù…ÙØ¶Ù„Ø© Ù„ØªØ¹Ø±Ù Ø§Ù„ØªÙ‚Ø¯ÙŠØ± Ø§Ù„Ø²Ù…Ù†ÙŠ ÙˆØ§Ù„Ù…Ø²Ø§ÙŠØ§ Ø§Ù„ÙÙ†ÙŠØ© ÙˆØ§Ù„Ø¶Ù…Ø§Ù† Ø§Ù„Ù…Ù…Ù†ÙˆØ­ ÙÙˆØ±ÙŠØ§Ù‹.
            </p>
          </div>

          <div className="bg-[#08173b] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A3EA8]/20 rounded-full filter blur-3xl -z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                <div>
                  <label className="text-sm font-bold text-gray-200 mb-3 block flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FF8C32] text-white text-xs flex items-center justify-center font-mono">1</span>
                    Ø§Ø®ØªØ± Ù†ÙˆØ¹ Ø§Ù„Ù‚Ø·Ø§Ø¹ / Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'kitchens', label: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†' },
                      { id: 'dressing', label: 'Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…' },
                      { id: 'windows', label: 'Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨' },
                      { id: 'facades', label: 'ÙˆØ§Ø¬Ù‡Ø§Øª Ø²Ø¬Ø§Ø¬ÙŠØ©' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setEstimatorCategory(cat.id);
                          setEstimatorMaterialIndex(0);
                        }}
                        className={`p-3 rounded-xl font-bold text-xs transition-all text-center border ${
                          estimatorCategory === cat.id
                            ? 'bg-[#FF8C32] text-white border-[#FF8C32] shadow-lg shadow-[#FF8C32]/20'
                            : 'bg-[#091B44] text-gray-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-200 mb-3 block flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FF8C32] text-white text-xs flex items-center justify-center font-mono">2</span>
                    Ø§Ø®ØªØ± Ø®Ø§Ù… ÙˆÙ†ÙˆØ¹ Ø§Ù„ØªØ´Ø·ÙŠØ¨:
                  </label>
                  <div className="space-y-3">
                    {currentEstimatorData.materials.map((mat, idx) => (
                      <div
                        key={mat.id}
                        onClick={() => setEstimatorMaterialIndex(idx)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          estimatorMaterialIndex === idx
                            ? 'bg-[#0A3EA8]/40 border-[#FF8C32] text-white shadow-md'
                            : 'bg-[#091B44] border-white/10 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            estimatorMaterialIndex === idx ? 'border-[#FF8C32] bg-[#FF8C32]' : 'border-gray-500'
                          }`}>
                            {estimatorMaterialIndex === idx && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white">{mat.name}</div>
                            <div className="text-xs text-gray-400">Ù…Ø¯Ø© Ø§Ù„ØªØµÙ†ÙŠØ¹: {mat.duration}</div>
                          </div>
                        </div>

                        <span className="bg-[#FF8C32]/20 text-[#FF8C32] text-[11px] font-bold px-2.5 py-1 rounded-full">
                          {mat.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-gray-200 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FF8C32] text-white text-xs flex items-center justify-center font-mono">3</span>
                      Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø§Ù„ØªÙ‚Ø±ÙŠØ¨ÙŠØ© (Ø£Ù…ØªØ§Ø±):
                    </label>
                    <span className="text-[#FF8C32] font-mono font-bold text-base bg-[#091B44] px-3 py-1 rounded-lg border border-white/10">
                      {estimatorArea} {estimatorCategory === 'kitchens' || estimatorCategory === 'dressing' ? 'Ù…ØªØ± Ø·ÙˆÙ„ÙŠ / Ù…Ø±Ø¨Ø¹' : 'Ù…ØªØ± Ù…Ø±Ø¨Ø¹'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="60"
                    value={estimatorArea}
                    onChange={(e) => setEstimatorArea(parseInt(e.target.value))}
                    className="w-full accent-[#FF8C32] bg-[#091B44] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>4 Ù…</span>
                    <span>30 Ù…</span>
                    <span>60 Ù…+</span>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-5 bg-[#091B44] p-6 rounded-3xl border border-white/20 shadow-xl flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs font-bold text-[#FF8C32]">Ù…Ù„Ø®Øµ Ø§Ù„Ù…Ù‚Ø§ÙŠØ³Ø© Ø§Ù„ØªÙ‚Ø¯ÙŠØ±ÙŠØ©</span>
                    <ShieldCheck className="w-6 h-6 text-green-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{selectedMaterialObj.name}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    ØªØ´Ù…Ù„ Ø§Ù„Ù…Ù‚Ø§ÙŠØ³Ø© Ø§Ù„ØªØµÙ…ÙŠÙ… 3DØŒ Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø© Ø¨Ø§Ù„Ù„ÙŠØ²Ø±ØŒ Ø§Ù„Ù‚Øµ Ø¨Ø¢Ù„Ø§Øª CNCØŒ Ø§Ù„ØªÙˆØ±ÙŠØ¯ ÙˆØ§Ù„ØªØ±ÙƒÙŠØ¨ Ø§Ù„Ø´Ø§Ù…Ù„ Ø¨Ø£ÙŠØ¯ÙŠ Ù…Ù‡Ù†Ø¯Ø³ÙŠÙ† Ù…ØªØ®ØµØµÙŠÙ†.
                  </p>

                  <div className="space-y-3 bg-[#08173b] p-4 rounded-2xl border border-white/10 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">ÙØªØ±Ø© Ø§Ù„ØªÙ†ÙÙŠØ° ÙˆØ§Ù„ØªØ³Ù„ÙŠÙ…:</span>
                      <span className="text-white font-bold">{selectedMaterialObj.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Ù…Ø¯Ø© Ø§Ù„Ø¶Ù…Ø§Ù† Ø§Ù„Ù…Ø¹ØªÙ…Ø¯:</span>
                      <span className="text-green-400 font-bold">{selectedMaterialObj.guarantee} Ø¶Ø¯ Ø§Ù„Ø¹ÙŠÙˆØ¨</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø© ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… 3D:</span>
                      <span className="text-[#FF8C32] font-bold">Ù…Ø¬Ø§Ù†Ø§Ù‹ 100%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => {
                      setFormData({
                        ...formData,
                        service: `${currentEstimatorData.title} - ${selectedMaterialObj.name}`
                      });
                      setInspectionModalOpen(true);
                    }}
                    className="w-full bg-[#FF8C32] hover:bg-[#e07520] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ø§Ø­Ø¬Ø² Ù…Ø¹Ø§ÙŠÙ†Ø© Ø¨Ù‚Ø·Ø§Ø¹ ({selectedMaterialObj.name})</span>
                  </button>

                  <a
                    href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84.
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Ø§Ø³ØªÙØ³Ø± ÙÙˆØ±ÙŠØ§Ù‹ Ø¹Ø¨Ø± Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Before & After Interactive Comparison */}
      <section className="py-24 bg-[#091B44] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[#FF8C32] font-bold text-sm tracking-wider">Ø§Ù„ØªØ­ÙˆÙ„ Ø§Ù„Ù‚Ø¨Ù„ ÙˆØ¨Ø¹Ø¯</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                Ø´Ø§Ù‡Ø¯ Ø§Ù„ÙØ§Ø±Ù‚ <br />
                <span className="text-[#FF8C32]">Ù‚Ø¨Ù„ ÙˆØ¨Ø¹Ø¯ ØªÙ†ÙÙŠØ° Ø§Ù„Ø±ÙŠØ§Ù†</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Ù†Ø­ÙŠÙ„ Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø§Ù„Ø¹Ø§Ø¯ÙŠØ© Ø£Ùˆ ØºÙŠØ± Ø§Ù„Ù…Ø³ØªØºÙ„Ø© Ø¥Ù„Ù‰ ØªØ­Ù Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ÙØ§Ø®Ø±Ø© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø£Ù…Ø§Ù†ØŒ Ø§Ù„Ø¹Ø²Ù„ Ø§Ù„ØªØ§Ù…ØŒ ÙˆØ§Ù„Ø´ÙƒÙ„ Ø§Ù„Ù…ÙˆØ¯Ø±Ù† Ø§Ù„Ø³Ø§Ø­Ø±. Ø§Ø³Ø­Ø¨ Ø§Ù„Ù…Ø¤Ø´Ø± Ù„Ù„Ø§Ø·Ù„Ø§Ø¹ Ø¹Ù„Ù‰ Ø§Ù„Ù†ØªÙŠØ¬Ø© Ø§Ù„ÙØ¹Ø§Ù„ÙŠØ©!
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#FF8C32]" />
                  <span className="text-sm font-semibold text-white">ØªØ­Ø³ÙŠÙ† Ø§Ø³ØªØºÙ„Ø§Ù„ Ø§Ù„Ù…Ø³Ø§Ø­Ø© Ø¨Ù†Ø³Ø¨Ø© 100%</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#0A3EA8]" />
                  <span className="text-sm font-semibold text-white">ØªØ´Ø·ÙŠØ¨Ø§Øª Ø®Ø§Ù„ÙŠØ© Ù…Ù† Ø§Ù„Ø¹ÙŠÙˆØ¨ ÙˆØ¶Ù…Ø§Ù† Ø´Ø§Ù…Ù„</span>
                </div>
              </div>

              <button
                onClick={() => setInspectionModalOpen(true)}
                className="w-fit bg-[#FF8C32] hover:bg-[#e07520] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                Ø¬Ø¯Ø¯ Ù…Ø·Ø¨Ø®Ùƒ Ø£Ùˆ Ù…Ù†Ø²Ù„Ùƒ Ø§Ù„Ø¢Ù†
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none">
                
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                  alt="Ø¨Ø¹Ø¯ Ø§Ù„ØªØ¬Ø¯ÙŠØ¯ - Ù…Ø·Ø¨Ø® Ø§Ù„Ø±ÙŠØ§Ù†"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-600/90 text-white font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                  Ø¨Ø¹Ø¯ Ø§Ù„ØªÙ†ÙÙŠØ° âœ¨
                </span>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${beforeAfterPos}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                    alt="Ù‚Ø¨Ù„ Ø§Ù„ØªØ¬Ø¯ÙŠØ¯"
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale brightness-75"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 right-4 bg-black/80 text-[#FF8C32] font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                    Ù‚Ø¨Ù„ Ø§Ù„ØªÙ†ÙÙŠØ° ðŸ› ï¸
                  </span>
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                  style={{ left: `${beforeAfterPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF8C32] text-white flex items-center justify-center shadow-2xl border-2 border-white">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterPos}
                  onChange={(e) => setBeforeAfterPos(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

              </div>
              <p className="text-center text-xs text-gray-400 mt-3">
                ðŸ‘ˆ Ø§Ø³Ø­Ø¨ Ù…Ø¤Ø´Ø± Ø§Ù„ØµÙ‘ÙˆØ±Ø© ÙŠÙ…ÙŠÙ†Ø§Ù‹ ÙˆÙŠØ³Ø§Ø±Ø§Ù‹ Ù„Ù…Ù„Ø§Ø­Ø¸Ø© Ø§Ù„ÙØ§Ø±Ù‚ Ø§Ù„Ù…Ø¹Ù…Ø§Ø±ÙŠ
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#08173b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">Ù„Ù…Ø§Ø°Ø§ Ù†Ø¹ØªØ¨Ø± Ø§Ù„Ø®ÙŠØ§Ø± Ø§Ù„Ø£ÙˆÙ„ØŸ</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              Ù…Ù…ÙŠØ²Ø§Øª ØªØ¬Ø¹Ù„ Ø´Ø±ÙƒØ© Ø§Ù„Ø±ÙŠØ§Ù† Ø®ÙŠØ§Ø±Ùƒ Ø§Ù„Ø¢Ù…Ù†
            </h2>
            <p className="text-gray-300 text-base">
              Ù†Ø­Ù† Ù„Ø§ Ù†Ù‚Ø¯Ù… Ù…Ø¬Ø±Ø¯ Ù…Ù†ØªØ¬ØŒ Ø¨Ù„ Ù†Ù‚Ø¯Ù… ØªØ¬Ø±Ø¨Ø© Ù…ØªÙƒØ§Ù…Ù„Ø© ØªØ¨Ø¯Ø£ Ù…Ù† Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø© Ø§Ù„Ù…Ø¬Ø§Ù†ÙŠØ© ÙˆØ­ØªÙ‰ Ø§Ù„Ø¶Ù…Ø§Ù† ÙˆØ®Ø¯Ù…Ø© Ù…Ø§ Ø¨Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ¹.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Ø®Ø§Ù…Ø§Øª ÙØ§Ø¦Ù‚Ø© Ø§Ù„Ø¬ÙˆØ¯Ø©',
                desc: 'Ù†Ø³ØªØ®Ø¯Ù… Ù‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ù…Ø¹ØªÙ…Ø¯Ø© Ø¨Ø³Ù…Ùƒ Ø«Ù‚ÙŠÙ„ ÙˆØ¥ÙƒØ³Ø³ÙˆØ§Ø±Ø§Øª Ø¥ÙŠØ·Ø§Ù„ÙŠØ© ÙˆÙ†Ù…Ø³Ø§ÙˆÙŠØ© ØªØ¯ÙˆÙ… Ù„Ø¹Ø´Ø±Ø§Øª Ø§Ù„Ø³Ù†ÙŠÙ† Ø¯ÙˆÙ† ØªØºÙŠÙŠØ±.'
              },
              {
                icon: Users,
                title: 'Ù…Ù‡Ù†Ø¯Ø³ÙˆÙ† ÙˆÙÙ†ÙŠÙˆÙ† Ù…ØªØ®ØµØµÙˆÙ†',
                desc: 'Ø·Ø§Ù‚Ù… Ù‡Ù†Ø¯Ø³ÙŠ Ù…Ø¯Ø±Ø¨ Ø¹Ù„Ù‰ Ø£Ø¹Ù„Ù‰ Ù…Ø³ØªÙˆÙ‰ Ù„Ø¥Ø¬Ø±Ø§Ø¡ Ø§Ù„Ø±ÙØ¹ Ø§Ù„Ù…Ø³Ø§Ø­ÙŠ Ø¨Ø¯Ù‚Ø© ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… ÙˆØ§Ù„ØªØ«Ø¨ÙŠØª Ø§Ù„Ø®Ø§Ù„ÙŠ Ù…Ù† Ø§Ù„Ø£Ø®Ø·Ø§Ø¡.'
              },
              {
                icon: Award,
                title: 'Ø¶Ù…Ø§Ù† Ø­Ù‚ÙŠÙ‚ÙŠ 10 Ø³Ù†ÙˆØ§Øª',
                desc: 'Ù†Ù…Ù†Ø­ Ø¹Ù…Ù„Ø§Ø¡Ù†Ø§ Ø´Ù‡Ø§Ø¯Ø© Ø¶Ù…Ø§Ù† Ù…Ø¹ØªÙ…Ø¯Ø© ÙˆÙ…ÙˆØ«ÙˆÙ‚Ø© Ø¹Ù„Ù‰ ÙƒØ§ÙØ© Ø§Ù„Ù…Ù†ØªØ¬Ø§ØªØŒ Ù…Ø¹ Ø§Ù„ØªØ²Ø§Ù… ØªØ§Ù… Ø¨Ø§Ù„ØµÙŠØ§Ù†Ø© Ø§Ù„Ø³Ø±ÙŠØ¹Ø©.'
              },
              {
                icon: Clock,
                title: 'Ø³Ø±Ø¹Ø© ÙÙŠ Ø§Ù„ØªØ³Ù„ÙŠÙ…',
                desc: 'Ù†Ø­ØªØ±Ù… ÙˆÙ‚Øª Ø§Ù„Ø¹Ù…ÙŠÙ„ Ø¨ØµØ±Ø§Ù…Ø©ØŒ ÙˆÙ†Ù„ØªØ²Ù… Ø¨Ù…ÙˆØ§Ø¹ÙŠØ¯ Ø§Ù„ØªØ³Ù„ÙŠÙ… Ø§Ù„Ù…Ø­Ø¯Ø¯Ø© Ø¨Ø§Ù„Ø¹Ù‚Ø¯ Ø¯ÙˆÙ† Ø£ÙŠ ØªØ£Ø®ÙŠØ±.'
              },
              {
                icon: Factory,
                title: 'Ø£Ø­Ø¯Ø« Ø§Ù„Ù…Ø¹Ø¯Ø§Øª ÙˆØ§Ù„Ù…Ø§ÙƒÙŠÙ†Ø§Øª',
                desc: 'Ù†Ù…ØªÙ„Ùƒ Ù…ØµÙ†Ø¹Ø§Ù‹ Ù…Ø¬Ù‡Ø²Ø§Ù‹ Ø¨Ø£Ø­Ø¯Ø« Ù…Ø§ÙƒÙŠÙ†Ø§Øª Ø§Ù„Ù‚Øµ ÙˆØ§Ù„ØªØ¬Ù…ÙŠØ¹ ÙˆØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„ØªÙ‚Ø·ÙŠØ¹ Ø¨Ø§Ù„Ù„ÙŠØ²Ø± Ù„Ø¶Ù…Ø§Ù† Ø²ÙˆØ§ÙŠØ§ Ø¯Ù‚ÙŠÙ‚Ø© 100%.'
              },
              {
                icon: Sparkles,
                title: 'Ø£Ø³Ø¹Ø§Ø± Ù…Ù†Ø§ÙØ³Ø© ÙˆØ­Ù„ÙˆÙ„ Ù…Ø±Ù†Ø©',
                desc: 'Ù†Ù‚Ø¯Ù… Ù‚ÙŠÙ…Ø© Ø§Ø³ØªØ«Ù†Ø§Ø¦ÙŠØ© Ù…Ù‚Ø§Ø¨Ù„ Ø§Ù„Ø³Ø¹Ø± Ù…Ø¹ Ø¥Ù…ÙƒØ§Ù†ÙŠØ© ØªÙˆÙÙŠØ± Ø®ÙŠØ§Ø±Ø§Øª Ù…ØªØ¹Ø¯Ø¯Ø© ØªÙ†Ø§Ø³Ø¨ Ù…ÙŠØ²Ø§Ù†ÙŠØªÙƒ ÙˆÙ…ØªØ·Ù„Ø¨Ø§ØªÙƒ.'
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#091B44] p-8 rounded-3xl border border-white/10 hover:border-[#FF8C32]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#FF8C32] flex items-center justify-center">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 bg-[#091B44] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">Ù…Ø¹Ø±Ø¶ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif">
                Ù…Ø´Ø§Ø±ÙŠØ¹ Ù†ÙØ®Ø± Ø¨ØªÙ†ÙÙŠØ°Ù‡Ø§
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Ø§Ù„ÙƒÙ„' },
                { id: 'kitchens', label: 'Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†' },
                { id: 'dressing', label: 'Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…' },
                { id: 'facades', label: 'ÙˆØ§Ø¬Ù‡Ø§Øª ÙˆÙ‚ÙˆØ§Ø·Ø¹' },
                { id: 'windows', label: 'Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveProjectFilter(btn.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                    activeProjectFilter === btn.id
                      ? 'bg-[#FF8C32] text-white shadow-lg shadow-[#FF8C32]/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#08173b] rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF8C32] transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08173b] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-4 right-4 bg-[#0A3EA8]/90 text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/20">
                      {project.categoryName}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedImage(project.image);
                      }}
                      className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-xl text-white hover:text-[#FF8C32] transition-colors"
                      title="ØªÙƒØ¨ÙŠØ± Ø§Ù„ØµÙˆØ±Ø©"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-xs text-[#FF8C32]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-white group-hover:text-[#FF8C32] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs line-clamp-2">
                      {project.details}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                    <span>Ø¹Ø§Ù… Ø§Ù„ØªÙ†ÙÙŠØ°: {project.date}</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#FF8C32] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Factory Highlights */}
      <section id="factory" className="py-24 bg-[#08173b] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[#FF8C32] text-sm font-bold tracking-wider">Ù…ØµÙ†Ø¹ Ø§Ù„Ø±ÙŠØ§Ù† Ù„Ù„ØªØµÙ†ÙŠØ¹ Ø§Ù„Ù…ØªØ·ÙˆØ±</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                ØªÙ‚Ù†ÙŠØ§Øª Ø­Ø¯ÙŠØ«Ø© ÙˆØ¯Ù‚Ø© ØªØµÙ†ÙŠØ¹ Ù…ØªÙ†Ø§Ù‡ÙŠØ©
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                ÙŠØªÙ…ÙŠØ² Ù…ØµÙ†Ø¹Ù†Ø§ Ø¨ÙˆØ¬ÙˆØ¯ Ø£Ø­Ø¯Ø« Ø®Ø·ÙˆØ· Ø§Ù„Ø¥Ù†ØªØ§Ø¬ ÙˆØ¢Ù„Ø§Øª Ø§Ù„ØªØ¬Ù…ÙŠØ¹ ÙˆØ§Ù„Ù‚Øµ CNC ÙˆØ§Ù„ØªÙ‚Ø·ÙŠØ¹ Ø¨Ø§Ù„Ù„ÙŠØ²Ø±ØŒ Ù„Ø¥Ø®Ø±Ø§Ø¬ Ù‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ ÙˆÙ…Ø·Ø§Ø¨Ø® Ø¨Ù…ÙˆØ§ØµÙØ§Øª Ù‚ÙŠØ§Ø³ÙŠØ© Ø²ÙˆØ§ÙŠØ§Ù‡Ø§ Ù…Ø­ÙƒÙ…Ø© ÙˆØªÙØ§ØµÙŠÙ„Ù‡Ø§ ÙØ§Ø¦Ù‚Ø© Ø§Ù„Ø¬ÙˆØ¯Ø©.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#091B44] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-1">Ù…Ø§ÙƒÙŠÙ†Ø§Øª CNC Ø£Ù„Ù…Ø§Ù†ÙŠØ©</h4>
                  <p className="text-xs text-gray-400">Ø¯Ù‚Ø© Ù‚Øµ ØªØµÙ„ Ø¥Ù„Ù‰ Ø£Ø¬Ø²Ø§Ø¡ Ù…Ù† Ø§Ù„Ù…Ù„ÙŠÙ…ØªØ±</p>
                </div>

                <div className="bg-[#091B44] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-1">Ø¯Ù‡Ø§Ù†Ø§Øª Ø¥Ù„ÙƒØªØ±ÙˆØ³ØªØ§ØªÙŠÙƒ</h4>
                  <p className="text-xs text-gray-400">Ø«Ø¨Ø§Øª Ø£Ù„ÙˆØ§Ù† Ø¯Ø§Ø¦Ù… Ø¶Ø¯ Ø§Ù„Ø®Ø¯Ø´ ÙˆØ§Ù„ØµØ¯Ø£</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-[#0A3EA8] hover:bg-[#1955d1] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-3 hover:scale-105 transition-all"
                >
                  <Play className="w-5 h-5 fill-current text-[#FF8C32]" />
                  <span>Ø´Ø§Ù‡Ø¯ Ø¬ÙˆÙ„Ø© Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…ØµÙ†Ø¹</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer"
                onClick={() => setVideoModalOpen(true)}
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                  alt="Factory Line"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-[#FF8C32] text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current mr-1" />
                  </div>
                  <span className="text-white font-bold text-base bg-black/60 px-4 py-2 rounded-full border border-white/20">
                    ØªØ´ØºÙŠÙ„ Ù…Ù‚Ø·Ø¹ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ HD
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#091B44] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">Ø«Ù‚Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ù‡ÙŠ Ø±Ø£Ø³ Ù…Ø§Ù„Ù†Ø§</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              Ù…Ø§Ø°Ø§ ÙŠÙ‚ÙˆÙ„ Ø¹Ù…Ù„Ø§Ø¤Ù†Ø§ Ø¹Ù† Ø§Ù„Ø±ÙŠØ§Ù†ØŸ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="bg-[#08173b] p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-xl hover:border-[#FF8C32]/40 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 text-[#FF8C32]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-[#FF8C32]" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24 bg-[#08173b] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">Ø¥Ø¬Ø§Ø¨Ø§Øª Ø§Ø³ØªÙØ³Ø§Ø±Ø§ØªÙƒÙ…</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="bg-[#091B44] border border-white/10 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-bold text-white text-base hover:text-[#FF8C32]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FF8C32] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-[#0A3EA8] via-[#091B44] to-[#0A3EA8] relative overflow-hidden border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 flex flex-col items-center gap-6">
          <span className="bg-[#FF8C32] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            Ø¹Ø±Ø¶ Ø®Ø§Øµ Ù„ÙØªØ±Ø© Ù…Ø­Ø¯ÙˆØ¯Ø©
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif max-w-3xl leading-tight">
            Ø¬Ø§Ù‡Ø² ØªØ¨Ø¯Ø£ Ù…Ø´Ø±ÙˆØ¹Ùƒ ÙˆØªØ¬Ø¯Ø¯ Ù…Ø·Ø¨Ø®Ùƒ Ø£Ùˆ ÙˆØ§Ø¬Ù‡Ø© Ù…Ø¨Ù†Ø§Ùƒ Ø¨Ø£Ø¹Ù„Ù‰ Ø¬ÙˆØ¯Ø©ØŸ
          </h2>

          <p className="text-gray-200 text-base max-w-xl">
            Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ù…Ù† Ù…Ù‡Ù†Ø¯Ø³ Ù…ØªØ®ØµØµ ÙˆØ§Ø³ØªÙ„Ù… ØªØµÙ…ÙŠÙ… 3D ØªÙØ§Ø¹Ù„ÙŠ Ù…Ø¬Ø§Ù†Ø§Ù‹ Ø¯ÙˆÙ† Ø£ÙŠ Ø§Ù„ØªØ²Ø§Ù….
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-[#FF8C32] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all hover:scale-105"
            >
              Ø§Ø·Ù„Ø¨ Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ© Ø§Ù„Ø¢Ù†
            </button>
            <a
              href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84.
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>ØªÙˆØ§ØµÙ„ ÙˆØ§ØªØ³Ø§Ø¨ Ù…Ø¨Ø§Ø´Ø±Ø©</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#091B44] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
                  ÙŠØ³Ø¹Ø¯Ù†Ø§ Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ Ø§Ø³ØªÙØ³Ø§Ø±Ø§ØªÙƒÙ…
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  ÙØ±ÙŠÙ‚Ù†Ø§ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ ÙˆØ§Ù„Ø®Ø¯Ù…ÙŠ Ø¬Ø§Ù‡Ø² Ù„Ù„Ø±Ø¯ Ø¹Ù„Ù‰ Ø§ØªØµØ§Ù„Ø§ØªÙƒÙ… ÙˆØªÙˆÙÙŠØ± ÙƒØ§ÙØ© Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ù„Ù…Ù‚Ø§ÙŠØ³Ø§Øª Ø§Ù„ÙÙ†ÙŠØ©.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:01102655589"
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#FF8C32] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#FF8C32] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Ø§Ù„Ù‡Ø§ØªÙ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠ Ø§Ù„Ù…Ø¨Ø§Ø´Ø±</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">01102655589</span>
                  </div>
                </a>

                <a
                  href="tel:+201030043236"
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#FF8C32] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#FF8C32] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Ø®Ø· Ø§Ù„Ø¯Ø¹Ù… ÙˆØ§Ù„Ø§Ø³ØªØ´Ø§Ø±Ø§Øª</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">+20 10 30043236</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84.
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#25D366] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">ÙˆØ§ØªØ³Ø§Ø¨ 24/7</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">01102655589</span>
                  </div>
                </a>

                <div className="bg-[#08173b] p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#FF8C32] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Ø§Ù„Ù…ØµÙ†Ø¹ ÙˆØ§Ù„Ø¥Ø¯Ø§Ø±Ø©</span>
                    <span className="text-sm font-bold text-white">Ø¬Ù…Ù‡ÙˆØ±ÙŠØ© Ù…ØµØ± Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© - Ø§Ù„Ù‚Ø§Ù‡Ø±Ø© Ø§Ù„ÙƒØ¨Ø±Ù‰</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 bg-[#08173b] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Ø£Ø±Ø³Ù„ Ù„Ù†Ø§ ØªÙØ§ØµÙŠÙ„ Ø·Ù„Ø¨Ùƒ</h3>

              {formSubmitted ? (
                <div className="bg-green-500/20 border border-green-500 text-green-200 p-6 rounded-2xl text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                  <h4 className="text-xl font-bold">ØªÙ… Ø§Ø³ØªÙ„Ø§Ù… Ø·Ù„Ø¨Ùƒ Ø¨Ù†Ø¬Ø§Ø­!</h4>
                  <p className="text-sm">Ø³ÙŠØªÙˆØ§ØµÙ„ Ù…Ø¹Ùƒ Ù…Ù‡Ù†Ø¯Ø³ Ù…ØªØ®ØµØµ Ù…Ù† ÙØ±ÙŠÙ‚ Ø§Ù„Ø±ÙŠØ§Ù† Ø®Ù„Ø§Ù„ Ø³Ø§Ø¹Ø§Øª Ù‚Ù„ÙŠÙ„Ø© Ù„ØªØ£ÙƒÙŠØ¯ Ù…ÙˆØ¹Ø¯ Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø©.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">Ø§Ù„Ø§Ø³Ù… Ø¨Ø§Ù„ÙƒØ§Ù…Ù„</label>
                      <input
                        type="text"
                        required
                        placeholder="Ø£Ø¯Ø®Ù„ Ø§Ø³Ù…Ùƒ"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ / Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨</label>
                      <input
                        type="tel"
                        required
                        placeholder="01xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø©</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                      >
                        <option value="Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù†">Ù…Ø·Ø§Ø¨Ø® Ù…ÙˆØ¯Ø±Ù† ÙˆÙØ®Ù…Ø©</option>
                        <option value="Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…">ØºØ±Ù Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ…</option>
                        <option value="Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„">Ø´Ø¨Ø§Ø¨ÙŠÙƒ ÙˆØ£Ø¨ÙˆØ§Ø¨ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„</option>
                        <option value="ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒØ±ØªÙ† ÙˆÙˆÙ„ ÙˆØ³ÙŠÙƒÙˆØ±ÙŠØª">ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒØ±ØªÙ† ÙˆÙˆÙ„ ÙˆØ³ÙŠÙƒÙˆØ±ÙŠØª</option>
                        <option value="Ù‚ÙˆØ§Ø·Ø¹ Ù…ÙƒØ§ØªØ¨">Ù‚ÙˆØ§Ø·Ø¹ Ù…ÙƒØ§ØªØ¨ Ø²Ø¬Ø§Ø¬ÙŠØ©</option>
                        <option value="ØªØ¬Ù„ÙŠØ¯ ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬">ØªØ¬Ù„ÙŠØ¯ ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© / Ø§Ù„Ù…Ù†Ø·Ù‚Ø©</label>
                      <input
                        type="text"
                        placeholder="Ù…Ø«Ù„: Ø§Ù„ØªØ¬Ù…Ø¹ØŒ Ø²Ø§ÙŠØ¯ØŒ Ø§Ù„Ø´Ø±ÙˆÙ‚"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Ù…Ù„Ø§Ø­Ø¸Ø§Øª Ø£Ùˆ ØªÙØ§ØµÙŠÙ„ Ø¥Ø¶Ø§ÙÙŠØ©</label>
                    <textarea
                      rows="4"
                      placeholder="Ø£Ø¯Ø®Ù„ Ø£ÙŠ ØªÙØ§ØµÙŠÙ„ ØªÙˆØ¯ ØªÙˆØ¶ÙŠØ­Ù‡Ø§ Ù„Ù„Ù…Ù‡Ù†Ø¯Ø³..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF8C32] hover:bg-[#e07520] text-white py-4 rounded-xl font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-5 h-5" />
                    <span>ØªØ£ÙƒÙŠØ¯ Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø·Ù„Ø¨ Ù„Ù„Ù…Ø¹Ø§ÙŠÙ†Ø©</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05102a] border-t border-white/10 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF8C32] text-white flex items-center justify-center font-bold text-xl">
                  Ø±
                </div>
                <span className="text-xl font-bold text-white font-serif">Ø§Ù„Ø±ÙŠÙ€Ù€Ù€Ø§Ù†</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                Ø§Ù„Ø´Ø±ÙƒØ© Ø§Ù„Ø±Ø§Ø¦Ø¯Ø© ÙÙŠ ØªØµÙ†ÙŠØ¹ Ø§Ù„Ù…Ø·Ø§Ø¨Ø® Ø§Ù„Ù…ÙˆØ¯Ø±Ù†ØŒ ØºØ±Ù Ø§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ØŒ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ØŒ ÙˆØ§Ù„ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„Ø²Ø¬Ø§Ø¬ÙŠØ© Ø¨Ø£Ø±Ù‚Ù‰ Ø§Ù„ØªØµØ§Ù…ÙŠÙ… ÙˆØ£Ù‚ÙˆÙ‰ Ø§Ù„Ø¶Ù…Ø§Ù†Ø§Øª ÙÙŠ Ù…ØµØ±.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Ø®Ø¯Ù…Ø§ØªÙ†Ø§ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">Ù…Ø·Ø§Ø¨Ø® Ø£ÙƒØ±ÙŠÙ„ÙŠÙƒ ÙˆØ¨ÙˆÙ„ÙŠ Ù„Ø§Ùƒ</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">ØºØ±Ù Ø¯Ø±ÙŠØ³Ù†Ø¬ Ø±ÙˆÙ… ÙØ§Ø®Ø±Ø©</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">Ø´Ø¨Ø§Ø¨ÙŠÙƒ Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„ Ù…Ø¹Ø²ÙˆÙ„Ø© Ø§Ù„ØµÙˆØª</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">ÙˆØ§Ø¬Ù‡Ø§Øª ÙƒØ±ØªÙ† ÙˆÙˆÙ„ ÙˆØ³ÙŠÙƒÙˆØ±ÙŠØª</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">ØªØ¬Ù„ÙŠØ¯ ÙˆØ§Ø¬Ù‡Ø§Øª Ø§Ù„ÙƒÙ„Ø§Ø¯ÙŠÙ†Ø¬</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#FF8C32] transition-colors">Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</a></li>
                <li><a href="#about" className="hover:text-[#FF8C32] transition-colors">Ù…Ù† Ù†Ø­Ù†</a></li>
                <li><a href="#estimator" className="hover:text-[#FF8C32] transition-colors">Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…ÙˆØ§ØµÙØ§Øª</a></li>
                <li><a href="#projects" className="hover:text-[#FF8C32] transition-colors">Ù…Ø¹Ø±Ø¶ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„</a></li>
                <li><a href="#faq" className="hover:text-[#FF8C32] transition-colors">Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Ø£Ø±Ù‚Ø§Ù… Ø§Ù„ØªÙˆØ§ØµÙ„ ÙˆØ§Ù„ØªÙˆØ§Ø¬Ø¯</h4>
              <div className="space-y-3 text-xs">
                <p dir="ltr" className="font-mono text-white text-sm font-bold">01102655589</p>
                <p dir="ltr" className="font-mono text-white text-sm font-bold">+20 10 30043236</p>
                <p className="text-gray-400">Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ø¹Ù…Ù„: Ø§Ù„Ø³Ø¨Øª - Ø§Ù„Ø®Ù…ÙŠØ³ (9:00 Øµ - 10:00 Ù…)</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
            <p>Â© {new Date().getFullYear()} Ø´Ø±ÙƒØ© Ø§Ù„Ø±ÙŠØ§Ù† Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ§Ù„Ø¯Ø±ÙŠØ³Ù†Ø¬ ÙˆØ§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.</p>
            <p className="text-gray-400">ØªØµÙ…ÙŠÙ… ÙˆØªØ·ÙˆÙŠØ± Ù‡Ù†Ø¯Ø³ÙŠ ÙØ§Ø®Ø± ðŸŒŸ</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Widget */}
      <a
        href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84.
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" size={28} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      </a>

      {/* Free Inspection Request Modal */}
      {inspectionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#08173b] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setInspectionModalOpen(false)}
              className="absolute top-4 left-4 text-gray-400 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-[#FF8C32] text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Ù…Ø¹Ø§ÙŠÙ†Ø© ÙˆØ±ÙØ¹ Ù…Ù‚Ø§Ø³Ø§Øª Ù…Ø¬Ø§Ù†ÙŠØ©</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Ø§Ø­Ø¬Ø² Ù…ÙˆØ¹Ø¯ Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ù†Ø²Ù„ÙŠØ©</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Ø§Ù„Ø§Ø³Ù… Ø¨Ø§Ù„ÙƒØ§Ù…Ù„</label>
                <input
                  type="text"
                  required
                  placeholder="Ø§Ø³Ù…Ùƒ Ø§Ù„ÙƒØ±ÙŠÙ…"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#FF8C32] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ Ø§Ù„ØªÙˆØ§ØµÙ„</label>
                <input
                  type="tel"
                  required
                  placeholder="01xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#FF8C32] outline-none font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Ù†ÙˆØ¹ Ø§Ù„Ù…Ø´Ø±ÙˆØ¹ / Ø§Ù„Ù‚Ø·Ø§Ø¹ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨</label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#FF8C32] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF8C32] hover:bg-[#e07520] text-white py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                ØªØ£ÙƒÙŠØ¯ Ø­Ø¬Ø² Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø© Ø§Ù„Ù…Ø¬Ø§Ù†ÙŠØ©
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Fullscreen Image Zoom Lightbox Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in" onClick={() => setZoomedImage(null)}>
          <div className="relative max-w-5xl w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-12 left-0 text-white hover:text-[#FF8C32] p-2 bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed High Definition View"
              className="max-h-[85vh] w-auto rounded-2xl object-contain border border-white/20 shadow-2xl"
            />
            <p className="text-center text-xs text-gray-300 mt-3">Ø§Ù†Ù‚Ø± ÙÙŠ Ø£ÙŠ Ù…ÙƒØ§Ù† Ù„Ù„Ø®Ø±ÙˆØ¬ Ù…Ù† Ø§Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù…ÙƒØ¨Ø±</p>
          </div>
        </div>
      )}

      {/* Factory Video Showcase Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 left-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center p-8 space-y-4">
              <Factory className="w-16 h-16 text-[#FF8C32] mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Ø¬ÙˆÙ„Ø© Ù…ØµÙ†Ø¹ Ø§Ù„Ø±ÙŠØ§Ù† Ù„Ø£Ø¹Ù…Ø§Ù„ Ø§Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ§Ù„Ø£Ù„ÙˆÙ…ÙŠØªØ§Ù„</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Ù†Ø³ØªØ®Ø¯Ù… Ø£Ø­Ø¯Ø« Ù…Ø¹Ø¯Ø§Øª Ø§Ù„ØªÙ‚Ø·ÙŠØ¹ ÙˆØ§Ù„ØªØ¬Ù…ÙŠØ¹ Ø¨Ø§Ù„Ù„ÙŠØ²Ø± ÙˆÙ‚Ø·Ø§Ø¹Ø§Øª Ø£Ù„ÙˆÙ…Ù†ÙŠÙˆÙ… Ù…Ø¹Ø§Ù„Ø¬Ø© Ù„Ø¶Ù…Ø§Ù† Ø£Ø¹Ù„Ù‰ Ø¬ÙˆØ¯Ø© ØªÙ†ÙÙŠØ°ÙŠØ©.
              </p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="bg-[#FF8C32] text-white font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù…Ø´ØºÙ„
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#08173b] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 left-4 text-gray-400 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative group/modalImg mb-6 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setZoomedImage(selectedProject.image)}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover border border-white/10 group-hover/modalImg:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md p-2 rounded-xl text-white">
                <ZoomIn className="w-4 h-4 text-[#FF8C32]" />
              </div>
            </div>

            <span className="text-[#FF8C32] font-bold text-xs block mb-1">{selectedProject.categoryName}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>

            <div className="space-y-3 text-sm text-gray-300 bg-[#091B44] p-4 rounded-xl border border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF8C32]" />
                <span>Ø§Ù„Ù…ÙˆÙ‚Ø¹: <strong>{selectedProject.location}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#FF8C32]" />
                <span>Ø§Ù„Ø®Ø§Ù…Ø§Øª: <strong>{selectedProject.materials}</strong></span>
              </div>
            </div>

            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              {selectedProject.details}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setInspectionModalOpen(true);
                }}
                className="flex-1 bg-[#FF8C32] hover:bg-[#e07520] text-white py-3 rounded-xl font-bold text-sm transition-all"
              >
                Ø§Ø·Ù„Ø¨ Ù…Ø´Ø±ÙˆØ¹Ø§Ù‹ Ù…Ø´Ø§Ø¨Ù‡Ø§Ù‹
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
