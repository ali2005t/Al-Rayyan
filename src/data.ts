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
  Droplets
} from 'lucide-react';

export const HERO_SLIDES = [
  {
    title: 'مطابخ مودرن وفخمة',
    subtitle: 'تصاميم ألوميتال وأكريليك تحاكي أرقى المعايير الأوروبية'
  },
  {
    title: 'غرف الدريسنج روم الحصرية',
    subtitle: 'استغلال ذكي للمساحات مع إضاءات مخفية وقواطع زجاجية'
  },
  {
    title: 'واجهات الكرتن وول والسبايدر',
    subtitle: 'حلول معمارية هجينة للمباني والمحلات التجارية الراقية'
  }
];

export const SERVICES_DATA = [
  {
    id: 'kitchens',
    title: 'مطابخ مودرن وفخمة',
    subtitle: 'Modern Luxury Kitchens',
    desc: 'تصميم وتنفيذ أحدث المطابخ بأجود خامات الألوميتال، الخشب الألومنيوم (خشمونيوم)، والبولي لاك والأكريليك مع حلول استغلال المساحات والتخزين الذكي.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    features: ['مقاومة تامة للمياه والحرارة والحشرات', 'مفصلات وآليات إغلاق صامت تدوم طويلاً', 'تصاميم 3D تفاعلية مخصصة لكل مساحة']
  },
  {
    id: 'dressing',
    title: 'غرف الدريسنج روم',
    subtitle: 'Custom Dressing Rooms',
    desc: 'غرف ملابس عصرية مصممة بدقة عالية تجمع بين الأناقة والاستغلال الأمثل للمساحة، مع إضاءات مخفية وتقسيمات ذكية تناسب احتياجاتك.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1000&q=80',
    features: ['إضاءة LED مدمجة بحساسات حركة ذكية', 'تقسيمات مخصصة للملابس والأكسسوارات', 'ألومنيوم مقوى مع زجاج فاميه أو شفاف']
  },
  {
    id: 'windows',
    title: 'نوافذ وشبابيك ألوميتال',
    subtitle: 'Aluminum Windows',
    desc: 'أنظمة شبابيك ألومنيوم عازلة للصوت والأتربة والحرارة قطاعات (جامبو، تانجو، BS، وجورجيا) بألوان قطاعات عصرية وتثبيت احترافي.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1000&q=80',
    features: ['عزل صوتي وحراري يصل إلى 95%', 'زجاج دبل (دوبل جلاس) معزول بغاز الأرجون', 'إكسسوارات إيطالية وتركية معتمدة']
  },
  {
    id: 'doors',
    title: 'أبواب ألوميتال مودرن',
    subtitle: 'Modern Aluminum Doors',
    desc: 'أبواب داخلية وخارجية بأشكال هندسية راقية، تجمع بين الأمان العالي واللمسة الفنية المعاصرة للفيلا أو الشقة أو المكتب.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    features: ['أنظمة غلق متعددة النقاط للأمان العالي', 'تصاميم زجاجية وشراعية معاصرة', 'مقاومة تامة للصدأ والعوامل الجوية']
  },
  {
    id: 'curtain-walls',
    title: 'واجهات الكرتن وول',
    subtitle: 'Curtain Wall Systems',
    desc: 'واجهات زجاجية للمباني الإدارية والشركات والمباني السكنية الراقية، توفر إضاءة طبيعية وتصميم معماري عالمي.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    features: ['أنظمة هيكلية وواجهات مستمرة Structural Glazing', 'تحمل عالي للرياح والضغط العالي', 'مظهر معماري استثنائي للمشاريع الكبرى']
  },
  {
    id: 'glass-facades',
    title: 'الواجهات الزجاجية والسبايدر',
    subtitle: 'Glass & Spider Facades',
    desc: 'تركيب واجهات زجاجية سيكوريت معتمدة للمحلات والمولات والمباني التجارية بأحدث أنظمة التثبيت والسبايدر.',
    icon: Maximize2,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    features: ['زجاج سيكوريت معالج حرارياً ضد الصدمات', 'إكسسوارات ستانلس ستيل 316 مقاوم للصدأ', 'رؤية بانورامية خالية من العوائق']
  },
  {
    id: 'office-partitions',
    title: 'قواطع المكاتب الزجاجية',
    subtitle: 'Office Glass Partitions',
    desc: 'تقسيم المساحات الإدارية بطرق ذكية تمنح خصوصية وشفافية في العمل مع عزل صوتي متطور للمكاتب وغرف الاجتماعات.',
    icon: SlidersHorizontal,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    features: ['أنظمة زجاجية بدون فواصل رأسمية Frame-less', 'دمج ستائر داخلية أو زجاج متغبر ذكي', 'عزل صوتي لمساحات العمل الهدوء']
  },
  {
    id: 'cladding',
    title: 'تجليد واجهات كلادينج',
    subtitle: 'Aluminum Cladding Work',
    desc: 'تكسية واجهات المباني والمحلات بألواح الكلادينج المقاومة للحريق بألوان متنوعة وضمان طويل الأمد.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80',
    features: ['ألواح مقاومة للحريق والحرارة UV', 'تنوع هائل في الألوان والتشطيبات', 'سهولة الصيانة والتنظيف المباشر']
  },
  {
    id: 'metal-fab',
    title: 'تصنيع أعمال ألومنيوم مخصصة',
    subtitle: 'Custom Aluminum Fabrication',
    desc: 'حلول وتصاميم هندسية خاصة وفق مخططات الاستشاريين للمشاريع الفاخرة والفنادق والمقرات التجارية.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    features: ['تنفيذ دقيق حسب المواصفات الفنية', 'إنتاج بآلات CNC ألمانية متطورة', 'إشراف مهندسين متخصصين في الموقع']
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'مطبخ مودرن بلمسات رخام وألوميتال أسود',
    category: 'kitchens',
    categoryName: 'مطابخ مودرن',
    location: 'التجمع الخامس - القاهرة الجديدة',
    date: '2024',
    materials: 'قطاع ألومنيوم معزول + إكسسوارات بلوم نمساوي + رخام كالاكاتا',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    details: 'تم تنفيذ المطبخ بألواح أكريليك سوداء غير لامعة مع قطاعات ألومنيوم خفية وإضاءة LED ذكية مدمجة بالرفوف.'
  },
  {
    id: 2,
    title: 'دريسنج روم فاخرة بقواطع زجاج فاميه',
    category: 'dressing',
    categoryName: 'دريسنج روم',
    location: 'الشيخ زايد - 6 أكتوبر',
    date: '2024',
    materials: 'إطار ألومنيوم برونزي + زجاج سيكوريت عاكس + إضاءة LED 3000K',
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1000&q=80',
    details: 'تصميم دريسنج روم مفتوح يدمج بين أنظمة الأدراج المقواة والرفوف الزجاجية المزودة بإضاءات استشعارية.'
  },
  {
    id: 3,
    title: 'واجهة كرتن وول لبرج إداري فاخر',
    category: 'facades',
    categoryName: 'واجهات زجاجية',
    location: 'العاصمة الإدارية الجديدة',
    date: '2023',
    materials: 'Structural Glazing Double Glass 24mm + قطاعات ألومنيوم ثقيلة',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    details: 'تركيب واجهة كرتن وول بمساحة 1200 متر مربع توفر عزلاً كاملاً للصوت والحرارة وتتحمل الرياح العالية.'
  },
  {
    id: 4,
    title: 'أنظمة شبابيك وأبواب ألوميتال لفيلا مودرن',
    category: 'windows',
    categoryName: 'شبابيك وأبواب',
    location: 'الرحاب - القاهرة',
    date: '2024',
    materials: 'قطاع جامبو عازل + زجاج دوبل جورجيا أسود',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1000&q=80',
    details: 'تنفيذ كافة فتحات الفيلا بقطاعات ألومنيوم عريضة تضمن أعلى معدلات الأمان والعزل مع سلك ناموس بلبيس مخفي.'
  },
  {
    id: 5,
    title: 'قواطع زجاجية لمقر شركة عالمية',
    category: 'facades',
    categoryName: 'قواطع مكاتب',
    location: 'القرية الذكية - 6 أكتوبر',
    date: '2023',
    materials: 'زجاج سيكوريت 12 مم + إكسسوارات ستانلس ستيل 316',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    details: 'تقسيم المساحة المفتوحة للشركة إلى 14 مكتب وغرفة اجتماعات معزولة صوتياً بتصميم فريم لس مودرن.'
  },
  {
    id: 6,
    title: 'مطبخ ألوميتال خشابي (خشمونيوم) راقي',
    category: 'kitchens',
    categoryName: 'مطابخ مودرن',
    location: 'الشروق - القاهرة',
    date: '2024',
    materials: 'دهانات إلكتروستاتيك خشبية + إكسسوارات هيدروليكية',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
    details: 'مطبخ يجمع بين دفء شكل الخشب الطبيعي ومزايا الألومنيوم المقاوم للماء والحشرات مع وحدات تخزين ذكية.'
  }
];

export const ESTIMATOR_OPTIONS = {
  kitchens: {
    title: 'مطابخ مودرن وفخمة',
    materials: [
      { id: 'polylac', name: 'بولي لاك تركيات (PolyLac)', duration: '12-15 يوم عمل', guarantee: '10 سنوات', badge: 'الأكثر طلباً' },
      { id: 'acrylic', name: 'أكريليك ألماني عالي اللمعان', duration: '10-14 يوم عمل', guarantee: '10 سنوات', badge: 'فخامة خيالية' },
      { id: 'khashmonium', name: 'خشمونيوم دهان إلكتروستاتيك خشبابي', duration: '14-18 يوم عمل', guarantee: '10 سنوات', badge: 'مقاوم 100% للماء' }
    ]
  },
  dressing: {
    title: 'غرف دريسنج روم',
    materials: [
      { id: 'glass-frame', name: 'إطار ألومنيوم رفيع + زجاج فاميه LED', duration: '10-12 يوم عمل', guarantee: '10 سنوات', badge: 'مودرن تريند' },
      { id: 'open-system', name: 'نظام المفتوح هيفاي طراز إيطالي', duration: '10-14 يوم عمل', guarantee: '10 سنوات', badge: 'استغلال مساحة' }
    ]
  },
  windows: {
    title: 'شبابيك وأبواب ألوميتال',
    materials: [
      { id: 'jumbo', name: 'قطاع جامبو ثقيل (زجاج دوبل عازل)', duration: '7-10 أيام عمل', guarantee: '10 سنوات', badge: 'أعلى نسبة عزل' },
      { id: 'tango', name: 'قطاع تانجو معزول جورجيا', duration: '7-10 أيام عمل', guarantee: '10 سنوات', badge: 'تصميم أوروبي' },
      { id: 'bs', name: 'قطاع BS صغير أو كبير معزول', duration: '5-8 أيام عمل', guarantee: '10 سنوات', badge: 'اقتصادي وعملي' }
    ]
  },
  facades: {
    title: 'واجهات كرتن وول وسيكوريت',
    materials: [
      { id: 'curtain-struct', name: 'كرتن وول Structural Glazing 24mm', duration: 'حسب مساحة المبنى', guarantee: '15 سنة', badge: 'للمباني والشركات' },
      { id: 'spider', name: 'واجهة سبايدر زجاج سيكوريت 12mm', duration: 'حسب المسطح', guarantee: '10 سنوات', badge: 'رؤية بانورامية' }
    ]
  }
};

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'م. أحمد ناصر',
    role: 'استشاري هندسي - مشروع فيلا التجمع',
    comment: 'التعامل مع شركة الريان كان تجربة استثنائية. دقة الالتزام بالمواعيد، جودة تركيب قطاعات الألوميتال، والاهتمام بأصغر التفاصيل في المطبخ والدريسنج جعلهم الخيار الأول لمشاريعنا.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'أ/ شريف حسني',
    role: 'مالك شركة تسويق - العاصمة الإدارية',
    comment: 'نفذوا لنا واجهة المقر الرئيسي وقواطع الزجاج السيكوريت الداخلية. الاحترافية عالية جداً، ومهندسي الموقع على دراية كاملة بأدق التفاصيل المعمارية.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'د. مروة الشافعي',
    role: 'مالكة فيلا بمدينة الشيخ زايد',
    comment: 'المطبخ والدريسنج روم طلعوا أجمل بكتير من التخيل! التصميم 3D المطابق للواقع، وتنسيق الألوان والإضاءات مخلي البيت تحفة فنية. شكراً لفريق الريان.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_DATA = [
  {
    q: 'ما هي الخامات والمواد المستخدمة في مطابخ ودريسنج الريان؟',
    a: 'نستخدم أفضل قطاعات الألوميتال المعالجة بالدهانات الإلكتروستاتيكية، بالإضافة لألواح الأكريليك، البولي لاك، والخشمونيوم عالي الجودة. جميع الإكسسوارات والمفصلات نمساوية وإيطالية ذات كفاءة عالية وضمان طويل الأمد.'
  },
  {
    q: 'هل توفرون ضماناً حقيقياً على الأعمال والمنتجات؟',
    a: 'نعم، نقدم ضماناً معتمداً لمدة 10 سنوات على كافة القطاعات والإكسسوارات، ضد عيوب التصنيع والتركيب والتآكل، مع خدمة صيانة دورية وسريعة.'
  },
  {
    q: 'كيف تتم عملية المعاينة والتصميم قبل التنفيذ؟',
    a: 'يقوم مهندس متخصص من فريق الريان بزيارة الموقع لرفع المساحات بدقة باستخدام أجهزة الليزر، ثم يقوم فريق التصميم بإعداد تصميم 3D تفاعلي مجاناً لترى مشروعك قبل البدء بالتصنيع.'
  },
  {
    q: 'ما هي المدة الاستغراقية لتصنيع وتسليم المشروع؟',
    a: 'تتراوح مدة التنفيذ والتسليم من 10 إلى 20 يوم عمل حسب حجم المشروع وطبيعة التشطيبات المطلوبة، مع التزام تام بالجدول الزمني المحدد في العقد.'
  },
  {
    q: 'هل تغطي خدماتكم كافة محافظات جمهورية مصر العربية؟',
    a: 'نعم، فريقنا الهندسي ومجموعات التركيب مجهزة للانتقال وتنفيذ المشاريع في كافة المحافظات والمناطق الساحلية والمدن الجديدة.'
  }
];

