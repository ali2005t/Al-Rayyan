import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Facebook,
  CheckCircle2,
  Award,
  ShieldCheck,
  Users,
  User,
  Factory,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
  Menu,
  MapPin,
  Mail,
  ArrowDown,
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
  Home as HomeIcon,
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
  HeartHandshake,
  Monitor,
  Cog
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const HERO_SLIDES = [
  {
    title_ar: 'مطابخ مودرن وفخمة',
    title_en: 'Modern & Luxury Kitchens',
    subtitle_ar: 'تصاميم ألوميتال وأكريليك تحاكي أرقى المعايير الأوروبية',
    subtitle_en: 'Alumetal and Acrylic designs mimicking European standards'
  },
  {
    title_ar: 'غرف الدريسنج روم الحصرية',
    title_en: 'Exclusive Dressing Rooms',
    subtitle_ar: 'استغلال ذكي للمساحات مع إضاءات مخفية وقواطع زجاجية',
    subtitle_en: 'Smart space utilization with hidden lights & glass partitions'
  },
  {
    title_ar: 'واجهات الكرتن وول والسبايدر',
    title_en: 'Curtain Wall & Spider Facades',
    subtitle_ar: 'حلول معمارية هجينة للمباني والمحلات التجارية الراقية',
    subtitle_en: 'Hybrid architectural solutions for premium buildings'
  }
];

const SERVICES_DATA = [
  {
    id: 'kitchens',
    title: 'مطابخ مودرن وفخمة', title_en: 'Modern & Luxury Kitchens',
    subtitle: 'تصاميم مطابخ حديثة', subtitle_en: 'Modern Kitchen Designs',
    desc: 'تصميم وتنفيذ أحدث المطابخ بأجود خامات الألوميتال، الخشب الألومنيوم (خشمونيوم)، والبولي لاك والأكريليك مع حلول استغلال المساحات والتخزين الذكي.',
    desc_en: 'Design and execution of the latest kitchens using Alumetal, Khashmonium, PolyLac and Acrylic with smart storage solutions.',
    icon: HomeIcon,
    image: '/صورة_الريان_1.png',
    features: ['مقاومة تامة للمياه والحرارة والحشرات', 'مفصلات وآليات إغلاق صامت تدوم طويلاً', 'تصاميم 3D تفاعلية مخصصة لكل مساحة'],
    features_en: ['Full resistance to water, heat & insects', 'Silent-close hinges lasting for years', 'Custom 3D interactive designs']
  },
  {
    id: 'polylac-kitchens',
    title: 'مطابخ بولي لاك (PolyLac)', title_en: 'PolyLac Kitchens',
    subtitle: 'لمعان دائم وفخامة', subtitle_en: 'Lasting Gloss & Luxury',
    desc: 'مطابخ بولي لاك بتصميمات عصرية جذابة تتميز باللمعان العالي ومقاومة الخدوش والحرارة لتناسب الاستخدام اليومي المكثف.',
    desc_en: 'PolyLac kitchens with high-gloss, scratch and heat resistance designs for intensive daily use.',
    icon: Sparkles,
    image: '/صورة_الريان_2.png',
    features: ['أعلى درجة لمعان (Mirror Effect)', 'مقاومة تامة للخدش والحرارة والمياه', 'ألوان ثابتة لا تتأثر بمرور الزمن'],
    features_en: ['Highest gloss level (Mirror Effect)', 'Full scratch, heat & water resistance', 'Permanent colors unaffected by time']
  },
  {
    id: 'khashmonium-kitchens',
    title: 'مطابخ الألومنيوم', title_en: 'Khashmonium Kitchens',
    subtitle: 'أصالة الخشب وقوة الألومنيوم', subtitle_en: 'Wood Look, Aluminum Strength',
    desc: 'نجمع لك بين الشكل الكلاسيكي الدافئ للخشب الطبيعي والمتانة العالية للألومنيوم المقاوم للماء والحشرات بلمسات عصرية.',
    desc_en: 'We combine warm classic wood aesthetics with high-durability waterproof and pest-resistant aluminum.',
    icon: Layers,
    image: '/صورة_الريان_3.png',
    features: ['مظهر خشبي طبيعي وجذاب', 'مقاوم 100% للمياه والصدأ', 'عمر افتراضي طويل بدون صيانة'],
    features_en: ['Natural attractive wood appearance', '100% resistant to water and rust', 'Long lifespan with zero maintenance']
  },
  {
    id: 'acrylic-kitchens',
    title: 'مطابخ أكريليك', title_en: 'Acrylic Kitchens',
    subtitle: 'تصاميم تركية وعالمية', subtitle_en: 'Turkish & International Designs',
    desc: 'مطابخ أكريليك حديثة مصممة بأجود الخامات لتوفير مساحة عمل مريحة وألوان متناسقة تضفي بهجة وفخامة لمنزلك.',
    desc_en: 'Modern acrylic kitchens with finest materials for a comfortable workspace and harmonious colors adding luxury to your home.',
    icon: ShieldCheck,
    image: '/صورة_الريان_4.png',
    features: ['خامات أكريليك أوروبية صديقة للبيئة', 'إكسسوارات ومفصلات سوفت كلوز (Soft Close)', 'توزيع ذكي للأجهزة المدمجة (Built-in)'],
    features_en: ['Eco-friendly European acrylic materials', 'Soft-close accessories and hinges', 'Smart layout for built-in appliances']
  },
  {
    id: 'curtain-walls',
    title: 'واجهات الكرتن وول', title_en: 'Curtain Wall Facades',
    subtitle: 'أنظمة واجهات معمارية', subtitle_en: 'Architectural Facade Systems',
    desc: 'واجهات زجاجية للمباني الإدارية والشركات والمباني السكنية الراقية، توفر إضاءة طبيعية وتصميم معماري عالمي.',
    desc_en: 'Glass facades for administrative buildings, companies and upscale residences providing natural lighting and global architectural design.',
    icon: Building2,
    image: '/صورة_الريان_4.png',
    features: ['أنظمة هيكلية وواجهات مستمرة Structural Glazing', 'تحمل عالي للرياح والضغط العالي', 'مظهر معماري استثنائي للمشاريع الكبرى'],
    features_en: ['Structural Glazing systems', 'High resistance to wind and pressure', 'Exceptional look for large-scale projects']
  },
  {
    id: 'glass-facades',
    title: 'الواجهات الزجاجية والسبايدر', title_en: 'Glass & Spider Facades',
    subtitle: 'واجهات سيكوريت بانورامية', subtitle_en: 'Panoramic Securit Facades',
    desc: 'تركيب واجهات زجاجية سيكوريت معتمدة للمحلات والمولات والمباني التجارية بأحدث أنظمة التثبيت والسبايدر.',
    desc_en: 'Certified Securit glass facades for shops, malls and commercial buildings with the latest spider fixing systems.',
    icon: Maximize2,
    image: '/صورة_الريان_4.png',
    features: ['زجاج سيكوريت معالج حرارياً ضد الصدمات', 'إكسسوارات ستانلس ستيل 316 مقاوم للصدأ', 'رؤية بانورامية خالية من العوائق'],
    features_en: ['Heat-treated shock-resistant Securit glass', 'Stainless Steel 316 rust-proof accessories', 'Unobstructed panoramic view']
  },
  {
    id: 'office-partitions',
    title: 'قواطع المكاتب الزجاجية', title_en: 'Office Glass Partitions',
    subtitle: 'قواطع زجاجية احترافية', subtitle_en: 'Professional Glass Partitions',
    desc: 'تقسيم المساحات الإدارية بطرق ذكية تمنح خصوصية وشفافية في العمل مع عزل صوتي متطور للمكاتب وغرف الاجتماعات.',
    desc_en: 'Smart office space division with privacy, transparency and advanced soundproofing for offices and meeting rooms.',
    icon: SlidersHorizontal,
    image: '/صورة_الريان_5.png',
    features: ['أنظمة زجاجية بدون فواصل رأسمية Frame-less', 'دمج ستائر داخلية أو زجاج متغبر ذكي', 'عزل صوتي لمساحات العمل الهدوء'],
    features_en: ['Frame-less glass systems', 'Internal blinds or smart frosted glass', 'Soundproofing for quiet workspaces']
  },
  {
    id: 'cladding',
    title: 'تجليد واجهات كلادينج', title_en: 'Aluminum Cladding',
    subtitle: 'تكسية واجهات احترافية', subtitle_en: 'Professional Facade Cladding',
    desc: 'تكسية واجهات المباني والمحلات بألواح الكلادينج المقاومة للحريق بألوان متنوعة وضمان طويل الأمد.',
    desc_en: 'Covering building and shop facades with fire-resistant cladding panels in various colors with a long-term warranty.',
    icon: Award,
    image: '/صورة_الريان_2.png',
    features: ['ألواح مقاومة للحريق والحرارة UV', 'تنوع هائل في الألوان والتشطيبات', 'سهولة الصيانة والتنظيف المباشر'],
    features_en: ['Fire and UV heat resistant panels', 'Huge variety of colors and finishes', 'Easy maintenance and direct cleaning']
  },
  {
    id: 'metal-fab',
    title: 'تصنيع أعمال ألومنيوم مخصصة', title_en: 'Custom Aluminum Fabrication',
    subtitle: 'تصنيع مخصص حسب الطلب', subtitle_en: 'Made-to-Order Manufacturing',
    desc: 'حلول وتصاميم هندسية خاصة وفق مخططات الاستشاريين للمشاريع الفاخرة والفنادق والمقرات التجارية.',
    desc_en: 'Special engineering solutions per consultant drawings for luxury projects, hotels and commercial headquarters.',
    icon: Wrench,
    image: '/صورة_الريان_3.png',
    features: ['تنفيذ دقيق حسب المواصفات الفنية', 'إنتاج بآلات CNC ألمانية متطورة', 'إشراف مهندسين متخصصين في الموقع'],
    features_en: ['Precise execution per technical specs', 'Advanced German CNC machine production', 'On-site specialist engineer supervision']
  }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'مطبخ مودرن بلمسات رخام وألوميتال أسود',
    category: 'kitchens',
    categoryName: 'مطابخ مودرن',
    location: 'التجمع الخامس - القاهرة الجديدة',
    date: '2024',
    materials: 'قطاع ألومنيوم معزول + إكسسوارات بلوم نمساوي + رخام كالاكاتا',
    image: '/صورة_الريان_1.png',
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
    image: '/صورة_الريان_2.png',
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
    image: '/صورة_الريان_3.png',
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
    image: '/صورة_الريان_7.png',
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
    image: '/صورة_الريان_6.png',
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
    image: '/صورة_الريان_3.png',
    details: 'مطبخ يجمع بين دفء شكل الخشب الطبيعي ومزايا الألومنيوم المقاوم للماء والحشرات مع وحدات تخزين ذكية.'
  }
];

const ESTIMATOR_OPTIONS = {
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

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'م. أحمد ناصر',
    role: 'استشاري هندسي - مشروع فيلا التجمع',
    comment: 'التعامل مع شركة الريان كان تجربة استثنائية. دقة الالتزام بالمواعيد، جودة تركيب قطاعات الألوميتال، والاهتمام بأصغر التفاصيل في المطبخ والدريسنج جعلهم الخيار الأول لمشاريعنا.',
    rating: 5,
    image: '/صورة_الريان_3.png'
  },
  {
    id: 2,
    name: 'أ/ شريف حسني',
    role: 'مالك شركة تسويق - العاصمة الإدارية',
    comment: 'نفذوا لنا واجهة المقر الرئيسي وقواطع الزجاج السيكوريت الداخلية. الاحترافية عالية جداً، ومهندسي الموقع على دراية كاملة بأدق التفاصيل المعمارية.',
    rating: 5,
    image: '/صورة_الريان_1.png'
  },
  {
    id: 3,
    name: 'د. مروة الشافعي',
    role: 'مالكة فيلا بمدينة الشيخ زايد',
    comment: 'المطبخ والدريسنج روم طلعوا أجمل بكتير من التخيل! التصميم 3D المطابق للواقع، وتنسيق الألوان والإضاءات مخلي البيت تحفة فنية. شكراً لفريق الريان.',
    rating: 5,
    image: '/صورة_الريان_2.png'
  }
];

const FAQ_DATA = [
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

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isTranslating, setIsTranslating] = useState(false);
  
  const toggleLanguage = () => {
    setIsTranslating(true);
    setTimeout(() => {
      const newLang = i18n.language === 'ar' ? 'en' : 'ar';
      i18n.changeLanguage(newLang);
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLang;
    }, 600);
    
    setTimeout(() => {
      setIsTranslating(false);
    }, 1500);
  };

  // Navigation & UI States
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [beforeAfterPos, setBeforeAfterPos] = useState<number>(50);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Fullscreen Lightbox Image Zoom State
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
    service: 'مطابخ مودرن',
    city: 'القاهرة / الجيزة',
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `طلب معاينة من موقع الريان%0A` +
      `الاسم: ${formData.name}%0A` +
      `الهاتف / واتساب: ${formData.phone}%0A` +
      `الخدمة المطلوبة: ${formData.service}%0A` +
      `المدينة / المنطقة: ${formData.city}%0A` +
      `تفاصيل إضافية: ${formData.notes || 'لا توجد تفاصيل إضافية'}%0A` +
      `%0Aيرجى التواصل لتأكيد المعاينة ومواعيد القياسات.`;

    const whatsappUrl = `https://wa.me/201102655589?text=${message}`;
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInspectionModalOpen(false);
      setFormData({ name: '', phone: '', service: 'مطابخ مودرن', city: 'القاهرة / الجيزة', notes: '' });
    }, 3000);
  };

  const currentEstimatorData = ESTIMATOR_OPTIONS[estimatorCategory as keyof typeof ESTIMATOR_OPTIONS];
  const selectedMaterialObj = currentEstimatorData.materials[estimatorMaterialIndex] || currentEstimatorData.materials[0];

  return (
    <div className={`min-h-screen bg-[#091B44] text-white font-sans overflow-x-hidden selection:bg-[#C89B3C] selection:text-white ${i18n.language === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>

      {/* Wave Transition Overlay */}
      <div 
        className="fixed inset-[-100%] z-[100] pointer-events-none transition-transform duration-[1200ms] ease-in-out flex flex-col justify-center items-center bg-gradient-to-r from-[#C89B3C] via-[#0A3EA8] to-[#091B44]"
        style={{ 
          transform: isTranslating ? 'translateX(0) rotate(-5deg)' : `translateX(${i18n.language === 'ar' ? '150%' : '-150%'}) rotate(-5deg)`
        }}
      >
         <div className="text-white text-4xl sm:text-6xl font-bold animate-pulse tracking-wider shadow-2xl" style={{ transform: 'rotate(5deg)' }}>
            {i18n.language === 'ar' ? 'Switching Language...' : 'جاري تبديل اللغة...'}
         </div>
      </div>

      {/* Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#091B44]/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
          : 'bg-gradient-to-b from-[#091B44]/90 via-[#091B44]/50 to-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl bg-white/5 p-1 shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden">
              <img src="/شعار_الريان.jpg" alt="شعار الريان" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight" style={{ fontFamily: "'Tharwat Emara Ruqaa', 'Cairo', serif" }}>
                {i18n.language === 'ar' ? 'الريان' : 'Al-Rayyan'}
              </span>
              <span className="text-[10px] sm:text-xs text-[#C89B3C] font-semibold tracking-wider">
                {i18n.language === 'ar' ? 'لأعمال المطابخ والدريسنج والألوميتال' : 'For Kitchens, Dressing & Alumetal'}
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {[
              { id: 'home', label: t('home') },
              { id: 'about', label: t('about') },
              { id: 'services', label: t('services') },
              { id: 'projects', label: t('projects') },
              { id: 'factory', label: t('factory') },
              { id: 'faq', label: t('faq') },
              { id: 'contact', label: t('contact') }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveNav(link.id)}
                className={`transition-colors duration-200 hover:text-[#C89B3C] relative py-1 ${activeNav === link.id ? 'text-[#C89B3C] font-bold' : 'text-gray-200'
                  }`}
              >
                {link.label}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#C89B3C] rounded-full animate-pulse" />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-[#C89B3C] font-bold text-sm px-3 py-1 border border-white/20 rounded-full hover:bg-white/10 transition-all uppercase"
            >
              {i18n.language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-gradient-to-r from-[#0A3EA8] to-[#1e58d4] hover:from-[#1e58d4] hover:to-[#0A3EA8] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#C89B3C] animate-spin" style={{ animationDuration: '4s' }} />
              <span>{i18n.language === 'ar' ? 'اطلب معاينة مجانية' : 'Free Inspection'}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-white text-xs font-bold px-2 py-2"
            >
              {i18n.language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-[#0A3EA8] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              {i18n.language === 'ar' ? 'معاينة مجانية' : 'Free Insp.'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-white p-2"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#C89B3C]" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#091B44]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all">
            <div className="flex flex-col gap-4 text-base font-medium">
              {[
                { id: 'home', label: t('home') },
                { id: 'about', label: t('about') },
                { id: 'services', label: t('services') },
                { id: 'projects', label: t('projects') },
                { id: 'factory', label: t('factory') },
                { id: 'faq', label: t('faq') },
                { id: 'contact', label: t('contact') }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    setActiveNav(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-200 hover:text-[#C89B3C] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-[#C89B3C]" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="tel:01102655589"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 rounded-xl text-sm font-bold"
                >
                  <Phone className="w-4 h-4 text-[#C89B3C]" />
                  <span>اتصل بنا: 01102655589</span>
                </a>
                <a
                  href="https://wa.me/201102655589?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AD%D8%AC%D8%B2+%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9+%D8%A3%D9%88+%D8%B7%D9%84%D8%A8+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%85%D9%85%D8%A7%D8%AB%D9%84."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-sm font-bold"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>محادثة واتساب مباشرة</span>
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
          <img
            src="/بانر_التواصل.jpg"
            alt="الريان للألوميتال"
            className="w-full h-full object-cover transform scale-105 filter brightness-[0.45] saturate-[1.2] blur-[2px] opacity-90 transition-transform duration-1000"
          />

          {/* Glow Neon & Dark Gradient Overlays for Soft Lighting Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091B44] via-[#091B44]/70 to-[#0A3EA8]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091B44] via-transparent to-[#091B44]/60" />

          {/* Animated Ambient Light Spheres */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C89B3C]/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#0A3EA8]/40 rounded-full filter blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-right w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-6">

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight font-serif tracking-normal"
              >
                {i18n.language === 'ar' ? 'الريان لأعمال' : 'Al-Rayyan for'} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] via-[#ffaa64] to-white">
                  {i18n.language === 'ar' ? 'المطابخ والدريسنج' : 'Kitchens & Dressing Rooms'}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-light transition-all duration-500"
              >
                {i18n.language === 'ar' ? (
                  <>نصمم وننفذ مطبخ أحلامك بأعلى جودة وتشطيبات احترافية تناسب جميع المساحات والأذواق. متخصصون في <strong className="text-white font-semibold">المطابخ المودرن</strong>، و<strong className="text-white font-semibold">غرف الدريسنج</strong>.</>
                ) : (
                  <>We design and execute your dream kitchen with the highest quality and professional finishes. Specialists in <strong className="text-white font-semibold">Modern Kitchens</strong> and <strong className="text-white font-semibold">Dressing Rooms</strong>.</>
                )}
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto bg-[#C89B3C] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl hover:shadow-[#C89B3C]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>{i18n.language === 'ar' ? 'استكشف معرض أعمالنا' : 'Explore Our Gallery'}</span>
                  <ArrowLeft className={`w-5 h-5 ${i18n.language === 'en' ? 'rotate-180' : ''}`} />
                </a>

                <button
                  onClick={() => setInspectionModalOpen(true)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5 text-[#C89B3C]" />
                  <span>{i18n.language === 'ar' ? 'احجز معاينة مجانية الآن' : 'Book a Free Inspection Now'}</span>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2 pt-2 justify-center sm:justify-start">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroSlideIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${heroSlideIndex === i ? 'w-8 bg-[#C89B3C]' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>

              {/* Key Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                {[
                  { label_ar: 'مطابخ مودرن', label_en: 'Modern Kitchens', sub_ar: 'أكريليك وبولي لاك', sub_en: 'Acrylic & PolyLac' },
                  { label_ar: 'دريسنج روم', label_en: 'Dressing Rooms', sub_ar: 'تصاميم زجاجية', sub_en: 'Glass Designs' },
                  { label_ar: 'أنظمة ألوميتال', label_en: 'Alumetal Systems', sub_ar: 'جامبو وتانجو', sub_en: 'Jumbo & Tango' },
                  { label_ar: 'واجهات زجاج', label_en: 'Glass Facades', sub_ar: 'سيكوريت وكرتن وول', sub_en: 'Curtain Wall' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center sm:text-right backdrop-blur-sm hover:border-[#C89B3C]/50 transition-colors">
                    <div className="text-white font-bold text-sm">{i18n.language === 'ar' ? item.label_ar : item.label_en}</div>
                    <div className="text-[#C89B3C] text-xs font-light">{i18n.language === 'ar' ? item.sub_ar : item.sub_en}</div>
                  </div>
                ))}
              </div>

            </div>

            {/* Circular Presenter Image Design */}
            {/* Circular Presenter Image Design */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative mt-16 lg:mt-0 h-[450px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center"
              >
                {/* Movement Lines - Outer Spinning Border */}
                <div className="absolute -inset-5 rounded-full border-[6px] border-dashed border-[#C89B3C]/50 animate-[spin_20s_linear_infinite]" />
                <div className="absolute -inset-10 rounded-full border-[2px] border-dashed border-white/20 animate-[spin_30s_linear_infinite_reverse]" />

                {/* Glowing Background Glow */}
                <div className="absolute inset-0 rounded-full bg-[#C89B3C] blur-[80px] opacity-30 animate-pulse" />

                {/* The Circular Background Itself */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#091B44] to-[#0A3EA8] border-4 border-[#C89B3C] shadow-[0_0_50px_rgba(200,155,60,0.5)] overflow-hidden z-0">
                  {/* Subtle shine effect over the background */}
                  <div className="absolute w-[200%] h-12 bg-white/10 -rotate-45 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
                </div>

                {/* The Pop-out Transparent Image */}
                <img
                  src="/شخص_البطل_شفاف.png"
                  alt="ممثل مؤسسة الريان"
                  className="absolute bottom-2 z-10 w-auto h-[120%] max-w-[140%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Floating Nameplate */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#091B44] border-2 border-[#C89B3C] text-white px-8 py-3 rounded-2xl shadow-2xl z-20 flex flex-col items-center gap-1 w-max hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C89B3C]" />
                    <span className="font-bold text-base">{i18n.language === 'ar' ? 'المهندس / شريف نادي' : 'Eng. Sherif Nadi'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-gray-300" />
                    <span className="text-xs text-gray-300 font-semibold">{i18n.language === 'ar' ? 'صاحب شركة الريان' : 'Founder of Al-Rayyan'}</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>

        {/* Animated Statistics Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#091B44] via-[#0A3EA8]/80 to-[#091B44] border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#C89B3C] font-serif">+{countProjects}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">مشروع مكتمل بنجاح</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white font-serif">+{countYears}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">عاماً من الخبرة والتميّز</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#C89B3C] font-serif">+{countClients}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">عميل سعيد ومستمر</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white font-serif">100%</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">دقة والتزام بالمواعيد</span>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#091B44] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative group/about"
            >
              <div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
                onClick={() => setZoomedImage('/رؤيتنا.png')}
              >
                <img
                  src="/رؤيتنا.png"
                  alt="Al Rayan Kitchen Showroom"
                  className="w-full h-[420px] object-cover group-hover/about:scale-110 transition-transform duration-700 filter brightness-95 group-hover/about:brightness-105"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/20 text-[#C89B3C]">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-20 bg-gradient-to-br from-[#0A3EA8] to-[#091B44] border border-white/20 p-6 rounded-2xl shadow-2xl hidden sm:block max-w-xs backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C] text-white flex items-center justify-center font-bold text-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">جودة معتمدة</h4>
                    <p className="text-xs text-gray-300">أحدث خطوط الإنتاج للألوميتال والمطابخ</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A3EA8]/30 rounded-full filter blur-3xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 flex flex-col gap-6"
            >

              <div className="inline-flex items-center gap-2 bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold w-fit">
                <Building2 className="w-4 h-4" />
                <span>{i18n.language === 'ar' ? 'عن الريان لأعمال المطابخ والدريسنج' : 'About Al-Rayyan Kitchens & Dressing'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif">
                {i18n.language === 'ar' ? 'نحول رؤيتك إلى واقع معماري' : 'We turn your vision into architectural reality'} <br />
                <span className="text-[#C89B3C]">{i18n.language === 'ar' ? 'يتسم بالأناقة والدقة المتناهية' : 'characterized by elegance & precision'}</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                {i18n.language === 'ar' ? (
                  <><strong className="text-white">الريان</strong> شركة متخصصة في تصميم وتنفيذ المطابخ والدريسنج بجميع المقاسات والخامات، مع فريق محترف يهتم بأدق التفاصيل لتقديم حلول عملية وعصرية تناسب كل منزل.</>
                ) : (
                  <><strong className="text-white">Al-Rayyan</strong> is specialized in designing and executing kitchens and dressing rooms of all sizes and materials, with a professional team that cares about the smallest details.</>
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#C89B3C]/40 transition-colors">
                  <h4 className="text-[#C89B3C] font-bold text-base mb-1">{i18n.language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h4>
                  <p className="text-xs text-gray-300">{i18n.language === 'ar' ? 'أن نكون العلامة التجارية الأولى والأكثر ثقة في صناعة المطابخ وأنظمة الألوميتال في مصر والشرق الأوسط.' : 'To be the first and most trusted brand in the kitchen and alumetal industry in Egypt and the Middle East.'}</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#C89B3C]/40 transition-colors">
                  <h4 className="text-[#C89B3C] font-bold text-base mb-1">{i18n.language === 'ar' ? 'رسالتنا' : 'Our Mission'}</h4>
                  <p className="text-xs text-gray-300">{i18n.language === 'ar' ? 'تقديم منتجات هندسية عالية الجودة تضمن الراحة والأمان والجمال لعملائنا بأفضل الأسعار وبضمان حقيقي.' : 'Providing high quality engineering products that ensure comfort, safety and beauty for our clients at the best prices.'}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{i18n.language === 'ar' ? 'مهندسون وفنيون محترفون' : 'Expert Engineers & Technicians'}</h5>
                    <p className="text-xs text-gray-400">{i18n.language === 'ar' ? 'إشراف دقيق على كل خطوة تصنيع' : 'Precise oversight on every step'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A3EA8]/40 text-[#0A3EA8] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{i18n.language === 'ar' ? 'أفضل القطاعات والإكسسوارات' : 'Best Sections & Accessories'}</h5>
                    <p className="text-xs text-gray-400">{i18n.language === 'ar' ? 'قطاعات ألومنيوم ثقيلة وزجاج معالج' : 'Heavy aluminum sections & treated glass'}</p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#08173b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">{i18n.language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              {i18n.language === 'ar' ? 'حلول متكاملة للمطابخ والدريسنج والألوميتال' : 'Integrated Solutions for Kitchens, Dressing & Alumetal'}
            </h2>
            <p className="text-gray-300 text-base">
              {i18n.language === 'ar' ? 'نصمم وننفذ أرقى المنتجات الهندسية والحلول المعمارية للمنازل، الفيلل، الشركات، والمشاريع التجارية بأعلى معايير الدقة.' : 'We design and execute the finest engineering products and architectural solutions for homes, villas, companies, and commercial projects.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-[#091B44] border border-white/10 rounded-3xl overflow-hidden hover:border-[#C89B3C]/50 hover:shadow-2xl hover:shadow-[#0A3EA8]/30 transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
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

                      <div className="absolute top-4 right-4 bg-[#091B44]/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-[#C89B3C]">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4 text-[#C89B3C]" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col gap-3">
                      <span className="text-xs font-semibold text-[#C89B3C]">{i18n.language === 'ar' ? service.subtitle : (service as any).subtitle_en}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#C89B3C] transition-colors">
                        {i18n.language === 'ar' ? service.title : (service as any).title_en}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {i18n.language === 'ar' ? service.desc : (service as any).desc_en}
                      </p>

                      <div className="pt-3 border-t border-white/5 space-y-2">
                        {(i18n.language === 'ar' ? service.features : (service as any).features_en).map((feat: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <Check className="w-3.5 h-3.5 text-[#C89B3C]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setInspectionModalOpen(true)}
                      className="w-full bg-white/5 hover:bg-[#C89B3C] hover:text-white border border-white/10 text-gray-200 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{i18n.language === 'ar' ? 'اطلب معاينة لهذه الخدمة' : 'Request Inspection'}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Before & After Interactive Comparison */}
      <section className="py-24 bg-[#091B44] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <span className="text-[#C89B3C] font-bold text-sm tracking-wider">{i18n.language === 'ar' ? 'التحول القبل وبعد' : 'The Before & After'}</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                {i18n.language === 'ar' ? 'شاهد الفارق' : 'See the Difference'} <br />
                <span className="text-[#C89B3C]">{i18n.language === 'ar' ? 'قبل وبعد تنفيذ الريان' : 'Before & After Al-Rayyan'}</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {i18n.language === 'ar' ? 'نحيل المساحات العادية إلى تحف معمارية فاخرة تجمع بين الأمان، العزل التام، والشكل المودرن الساحر. اسحب المؤشر لمشاهدة النتيجة!' : 'We transform ordinary spaces into luxury architectural masterpieces combining safety, full insulation, and modern design. Drag the slider to see the result!'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#C89B3C]" />
                  <span className="text-sm font-semibold text-white">{i18n.language === 'ar' ? 'تحسين استغلال المساحة بنسبة 100%' : '100% Space Optimization'}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#0A3EA8]" />
                  <span className="text-sm font-semibold text-white">{i18n.language === 'ar' ? 'تشطيبات خالية من العيوب وضمان شامل' : 'Flawless Finishing & Full Warranty'}</span>
                </div>
              </div>

              <button
                onClick={() => setInspectionModalOpen(true)}
                className="w-fit bg-[#C89B3C] hover:bg-[#e07520] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                {i18n.language === 'ar' ? 'جدد مطبخك أو منزلك الآن' : 'Renovate Your Home Now'}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none">

                <img
                  src="/صورة_الريان_5.png"
                  alt="النتيجة النهائية الفاخرة - تنفيذ شركة الريان للألوميتال"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-600/90 text-white font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                  {i18n.language === 'ar' ? 'بعد التنفيذ ✨' : 'After ✨'}
                </span>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${beforeAfterPos}%` }}
                >
                  <img
                    src="/صورة_الريان_6.png"
                    alt="الحالة الأصلية للموقع قبل بدء أعمال التشطيبات والتركيب"
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale brightness-75"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 right-4 bg-black/80 text-[#C89B3C] font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                    {i18n.language === 'ar' ? 'قبل التنفيذ 🛠️' : 'Before 🛠️'}
                  </span>
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                  style={{ left: `${beforeAfterPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C89B3C] text-white flex items-center justify-center shadow-2xl border-2 border-white">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterPos}
                  onChange={(e) => setBeforeAfterPos(parseInt(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

              </div>
              <p className="text-center text-xs text-gray-400 mt-3">
                {i18n.language === 'ar' ? '👈 اسحب مؤشر الصّورة يميناً ويساراً لملاحظة الفارق المعماري' : '👉 Drag the slider left or right to see the architectural difference'}
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#08173b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">{i18n.language === 'ar' ? 'لماذا نعتبر الخيار الأول؟' : 'Why Are We The First Choice?'}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              {i18n.language === 'ar' ? 'مميزات تجعل شركة الريان خيارك الآمن' : 'Features That Make Al-Rayyan Your Safe Choice'}
            </h2>
            <p className="text-gray-300 text-base">
              {i18n.language === 'ar' ? 'نحن لا نقدم مجرد منتج، بل نقدم تجربة متكاملة تبدأ من المعاينة المجانية وحتى الضمان وخدمة ما بعد البيع.' : 'We do not just offer a product, but a complete experience from free inspection to warranty and after-sales service.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title_ar: 'خامات فائقة الجودة', title_en: 'Superior Quality Materials',
                desc_ar: 'نستخدم قطاعات ألوميتال معتمدة بسمك ثقيل وإكسسوارات إيطالية ونمساوية تدوم لعشرات السنين.',
                desc_en: 'We use certified heavy-duty alumetal sections with Italian and Austrian accessories that last for decades.'
              },
              {
                icon: Users,
                title_ar: 'مهندسون وفنيون متخصصون', title_en: 'Expert Engineers & Technicians',
                desc_ar: 'طاقم هندسي مدرب على أعلى مستوى لإجراء الرفع المساحي بدقة والتصميم والتثبيت الخالي من الأخطاء.',
                desc_en: 'A highly trained engineering team for precise surveying, design, and error-free installation.'
              },
              {
                icon: Award,
                title_ar: 'ضمان حقيقي 10 سنوات', title_en: 'Real 10-Year Warranty',
                desc_ar: 'نمنح عملاءنا شهادة ضمان معتمدة على كافة المنتجات، مع التزام تام بالصيانة السريعة.',
                desc_en: 'We provide clients with a certified warranty certificate on all products with full commitment to quick maintenance.'
              },
              {
                icon: Clock,
                title_ar: 'سرعة في التسليم', title_en: 'Fast Delivery',
                desc_ar: 'نحترم وقت العميل بصرامة، ونلتزم بمواعيد التسليم المحددة بالعقد دون أي تأخير.',
                desc_en: 'We respect the client’s time strictly and commit to the contract delivery dates with zero delays.'
              },
              {
                icon: Factory,
                title_ar: 'أحدث المعدات والماكينات', title_en: 'Latest Machines & Equipment',
                desc_ar: 'نمتلك مصنعاً مجهزاً بأحدث ماكينات القص والتجميع وتقنيات التقطيع بالليزر.',
                desc_en: 'Our factory is equipped with the latest CNC cutting machines and laser precision technology for 100% accurate angles.'
              },
              {
                icon: Sparkles,
                title_ar: 'أسعار منافسة وحلول مرنة', title_en: 'Competitive Prices & Flexible Solutions',
                desc_ar: 'نقدم قيمة استثنائية مقابل السعر مع إمكانية توفير خيارات متعددة تناسب ميزانيتك.',
                desc_en: 'We provide exceptional value for money with multiple options to suit your budget and requirements.'
              }
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#091B44] p-8 rounded-3xl border border-white/10 hover:border-[#C89B3C]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#C89B3C] flex items-center justify-center">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{i18n.language === 'ar' ? (feature as any).title_ar : (feature as any).title_en}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{i18n.language === 'ar' ? (feature as any).desc_ar : (feature as any).desc_en}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Team / Technology Section */}
      <section className="py-24 bg-[#05102a] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#C89B3C] px-4 py-1.5 rounded-full text-xs font-bold w-fit">
                <Factory className="w-4 h-4" />
                <span>{i18n.language === 'ar' ? 'مصنع الريان للألوميتال' : 'Al-Rayyan Alumetal Factory'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif">
                تقنيات حديثة <br />
                <span className="text-[#C89B3C]">ودقة تصنيع متناهية</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                وراء كل مطبخ وغرفة دريسنج نصممها، فريق ضخم من الكفاءات الهندسية والفنية المجهزة بأحدث معدات القص والتجميع بالكمبيوتر. نحن نؤمن أن جودة التفاصيل الصغيرة هي ما تصنع الفخامة التي تدوم لسنوات.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex -space-x-4 -space-x-reverse">
                  <div className="w-12 h-12 rounded-full border-2 border-[#05102a] bg-[#091B44] flex items-center justify-center text-white shadow-lg"><Users className="w-5 h-5" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#05102a] bg-[#0A3EA8] flex items-center justify-center text-white shadow-lg"><Wrench className="w-5 h-5" /></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#05102a] bg-[#C89B3C] flex items-center justify-center text-white font-bold text-xs shadow-lg">+50</div>
                </div>
                <span className="text-sm font-bold text-white">{i18n.language === 'ar' ? 'فني ومهندس لخدمتك' : 'Technician & Engineer at your service'}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(200,155,60,0.15)] border border-white/10 group cursor-pointer" onClick={() => setZoomedImage('/صورة_الشخص.png')}>
                <img
                  src="/صورة_الشخص.png"
                  alt="فريق عمل الريان والمهندسين"
                  className="w-full h-[400px] sm:h-[500px] object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05102a] via-[#05102a]/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">{i18n.language === 'ar' ? 'فريق مهندسي الريان' : 'Al-Rayyan Engineering Team'}</h4>
                    <p className="text-[#C89B3C] text-sm font-semibold mt-1">{i18n.language === 'ar' ? 'نعمل يداً بيد لتحقيق حلمك' : 'Working hand in hand to achieve your dream'}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#C89B3C] transition-colors">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C89B3C]/20 rounded-full filter blur-[40px] -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0A3EA8]/30 rounded-full filter blur-[50px] -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 bg-[#091B44] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center text-center mb-12 gap-6">
            <div>
              <span className="text-[#C89B3C] text-xl sm:text-2xl font-bold tracking-widest uppercase block mb-3">{i18n.language === 'ar' ? 'معرض الأعمال' : 'Projects Gallery'}</span>
              <h2 className="text-5xl sm:text-7xl font-black text-white font-serif leading-tight mx-auto">
                {i18n.language === 'ar' ? 'مشاريع نفخر بتنفيذها' : 'Projects We Are Proud Of'}
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'all', label: 'الكل' },
                { id: 'kitchens', label: 'مطابخ مودرن' },
                { id: 'dressing', label: 'دريسنج روم' },
                { id: 'facades', label: 'واجهات وقواطع' },
                { id: 'windows', label: 'شبابيك وأبواب' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveProjectFilter(btn.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${activeProjectFilter === btn.id
                    ? 'bg-[#C89B3C] text-white shadow-lg shadow-[#C89B3C]/30'
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
                className="group bg-[#08173b] rounded-3xl overflow-hidden border border-white/10 hover:border-[#C89B3C] transition-all duration-500 shadow-xl flex flex-col justify-between"
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
                      className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-xl text-white hover:text-[#C89B3C] transition-colors"
                      title="تكبير الصورة"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-white group-hover:text-[#C89B3C] transition-colors cursor-pointer"
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
                    <span>{i18n.language === 'ar' ? 'عام التنفيذ: ' + project.date : 'Year: ' + project.date}</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#C89B3C] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>{i18n.language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}</span>
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
              <span className="text-[#C89B3C] text-sm font-bold tracking-wider">{i18n.language === 'ar' ? 'مصنع الريان للتصنيع المتطور' : 'Al-Rayyan Advanced Manufacturing Factory'}</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                {i18n.language === 'ar' ? 'تقنيات حديثة ودقة تصنيع متناهية' : 'Modern Technologies & Precise Manufacturing'}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {i18n.language === 'ar' ? 'يتميز مصنعنا بوجود أحدث خطوط الإنتاج وآلات التجميع والقص CNC والتقطيع بالليزر، لإخراج قطاعات ألوميتال ومطابخ بمواصفات قياسية.' : 'Our factory features the latest production lines, CNC assembly and cutting machines, and laser cutting technology for standard-spec alumetal sections.'}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#091B44] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-1">{i18n.language === 'ar' ? 'ماكينات CNC ألمانية' : 'German CNC Machines'}</h4>
                  <p className="text-xs text-gray-400">{i18n.language === 'ar' ? 'دقة قص تصل إلى أجزاء من المليمتر' : 'Cutting precision down to fractions of a mm'}</p>
                </div>

                <div className="bg-[#091B44] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-1">{i18n.language === 'ar' ? 'دهانات إلكتروستاتيك' : 'Electrostatic Coatings'}</h4>
                  <p className="text-xs text-gray-400">{i18n.language === 'ar' ? 'ثبات ألوان دائم ضد الخدش والصدأ' : 'Permanent color stability against scratches & rust'}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setZoomedImage('ROW.png')}
                  className="bg-[#0A3EA8] hover:bg-[#1955d1] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-3 hover:scale-105 transition-all"
                >
                  <ZoomIn className="w-5 h-5 text-[#C89B3C]" />
                  <span>{i18n.language === 'ar' ? 'تكبير الصورة' : 'Zoom Image'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer"
                onClick={() => setZoomedImage('ROW.png')}
              >
                <img
                  src="/ROW.png"
                  alt="أعمال الريان للألوميتال والمطابخ"
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05102a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Facebook Reels Section */}
      <section className="py-24 bg-[#05102a] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif mb-4">
              {i18n.language === 'ar' ? 'أعمالنا على' : 'Our Work'} <span className="text-[#C89B3C]">{i18n.language === 'ar' ? 'أرض الواقع' : 'On The Ground'}</span>
            </h2>

            <p className="text-gray-300 text-base">
              {i18n.language === 'ar' ? 'شاهد تفاصيل التشطيبات المودرن ودقة التركيب من خلال هذه المقاطع السريعة من أعمالنا.' : 'Watch modern finishing details and installation precision through these quick clips from our work.'}
            </p>
          </div>

          <div className="relative">
            {/* Dashed Arrows overlay for Desktop */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(200,155,60,0.9)]" viewBox="0 0 1200 1800">
                <defs>
                  <marker id="arrow" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 14 7 L 0 14 z" fill="#C89B3C" />
                  </marker>

                  {/* Neon Glow Filter */}
                  <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Paths from videos to center */}
                <g filter="url(#neon)">
                  <path d="M 300 400 Q 450 650 500 750" stroke="#C89B3C" strokeWidth="4" strokeDasharray="12,12" fill="none" markerEnd="url(#arrow)" opacity="0.9" className="animate-pulse" style={{ animationDuration: '2s' }} />
                  <path d="M 600 500 L 600 700" stroke="#C89B3C" strokeWidth="4" strokeDasharray="12,12" fill="none" markerEnd="url(#arrow)" opacity="0.9" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
                  <path d="M 900 400 Q 750 650 700 750" stroke="#C89B3C" strokeWidth="4" strokeDasharray="12,12" fill="none" markerEnd="url(#arrow)" opacity="0.9" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <path d="M 300 900 L 500 900" stroke="#C89B3C" strokeWidth="4" strokeDasharray="12,12" fill="none" markerEnd="url(#arrow)" opacity="0.9" className="animate-pulse" style={{ animationDuration: '2.2s' }} />
                  <path d="M 900 900 L 700 900" stroke="#C89B3C" strokeWidth="4" strokeDasharray="12,12" fill="none" markerEnd="url(#arrow)" opacity="0.9" className="animate-pulse" style={{ animationDuration: '2.7s' }} />
                  <path d="M 600 1300 L 600 1100" stroke="#C89B3C" strokeWidth="4" strokeDasharray="12,12" fill="none" markerEnd="url(#arrow)" opacity="0.9" className="animate-pulse" style={{ animationDuration: '2.1s' }} />
                </g>
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 items-start pb-12 pt-8 relative z-10">
              {[
                "https://www.facebook.com/reel/1547958189986727",
                "https://www.facebook.com/reel/923003916778208",
                "https://www.facebook.com/reel/1506415967931385",
                "https://www.facebook.com/reel/1716579213028179",
                "LOGO",
                "https://www.facebook.com/reel/2008169783155366",
                "https://www.facebook.com/reel/1669292920937518"
              ].map((item, idx) => (
                <div key={idx} className={`w-full flex justify-center transition-all duration-500 hover:-translate-y-2 ${idx % 3 === 1 ? 'lg:mt-16' : ''} ${idx % 2 === 1 ? 'md:mt-12 lg:mt-0' : ''} ${idx === 6 ? 'lg:col-start-2' : ''}`}>
                  {item === "LOGO" ? (
                    <div className="w-full lg:w-[300px] h-[250px] lg:h-[533px] flex flex-col items-center justify-center relative group">
                      <div className="absolute inset-0 bg-[#C89B3C] rounded-full blur-[60px] lg:blur-[80px] opacity-20 animate-pulse" style={{ animationDuration: '3s' }}></div>

                      {/* Mobile Top Arrows */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center lg:hidden">
                        <ArrowDown className="w-6 h-6 text-[#C89B3C] animate-bounce" />
                      </div>

                      <img src="/شعار_الريان.jpg" alt="Al Rayan" className="w-40 h-40 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-[#C89B3C] shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />

                      <div className="absolute bottom-4 lg:bottom-[20%] text-[#C89B3C] font-bold text-lg lg:text-xl whitespace-nowrap opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        إبداعات الريان
                      </div>

                      {/* Mobile Bottom Arrows */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center lg:hidden">
                        <ArrowDown className="w-6 h-6 text-[#C89B3C] animate-bounce" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-[300px] h-[533px] bg-black/20 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group/reel">
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item)}&show_text=false&width=300`}
                        width="300"
                        height="533"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title={`Facebook Reel ${idx + 1}`}
                      ></iframe>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://www.facebook.com/25rayan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl transition-transform hover:scale-105">
              <span>تابع صفحتنا على فيسبوك لمشاهدة بقية الأعمال</span>
            </a>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#091B44] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">{i18n.language === 'ar' ? 'ثقة العملاء هي رأس مالنا' : 'Client Trust Is Our Capital'}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              ماذا يقول عملاؤنا عن الريان؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="bg-[#08173b] p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-xl hover:border-[#C89B3C]/40 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 text-[#C89B3C]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-[#C89B3C]" />
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
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">{i18n.language === 'ar' ? 'إجابات استفساراتكم' : 'Answers To Your Questions'}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              {i18n.language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="bg-[#091B44] border border-white/10 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-bold text-white text-base hover:text-[#C89B3C]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C89B3C] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
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
          <span className="bg-[#C89B3C] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            {i18n.language === 'ar' ? 'عرض خاص لفترة محدودة' : 'Special Offer for Limited Time'}
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif max-w-3xl leading-tight">
            {i18n.language === 'ar' ? 'جاهز تبدأ مشروعك وتجدد مطبخك أو واجهة مبناك بأعلى جودة؟' : 'Ready to start your project and renovate your kitchen or building facade with the highest quality?'}
          </h2>

          <p className="text-gray-200 text-base max-w-xl">
            {i18n.language === 'ar' ? 'مشوار مشروعك معنا يبدأ بخطوة واحدة: تواصل الآن لتحصل على معاينة مجانية وخطة تنفيذ واضحة من أول يوم.' : 'Your project journey starts with one step: contact us now for a free inspection and a clear execution plan from day one.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-[#C89B3C] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all hover:scale-105"
            >
              {i18n.language === 'ar' ? 'اطلب معاينة مجانية الآن' : 'Book Free Inspection Now'}
            </button>
            <a
              href="https://wa.me/201102655589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>{i18n.language === 'ar' ? 'تواصل واتساب مباشرة' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-24 bg-[#05102a] relative overflow-hidden border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">{i18n.language === 'ar' ? 'كيف نعمل؟' : 'How Do We Work?'}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              {i18n.language === 'ar' ? 'خطوات تنفيذ مشروعك بخطوات واضحة' : 'Your Project Delivered in Clear Steps'}
            </h2>
            <p className="text-gray-300 text-base">
              {i18n.language === 'ar' ? 'نحول فكرتك إلى تنفيذ متكامل بخطوات سهلة وواضحة، من المعاينة الأولى حتى التسليم والمتابعة.' : 'We turn your idea into a complete delivery with clear steps, from the first inspection to handover and follow-up.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 relative">
            <div className="hidden lg:block absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent -z-10" />

            {[
              { id: 1, title_ar: 'الاستشارة', title_en: 'Consultation', desc_ar: 'نستمع لرؤيتك ونحدّد الحل الأنسب لمساحتك وأسلوبك.', desc_en: 'We listen to your vision and define the best solution for your space and style.', icon: <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B3C]" /> },
              { id: 2, title_ar: 'المعاينة', title_en: 'Inspection', desc_ar: 'زيارة الموقع لقياس المساحات بدقة وتوثيق التفاصيل الميدانية.', desc_en: 'On-site visit to measure spaces accurately and document every detail.', icon: <Ruler className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B3C]" /> },
              { id: 3, title_ar: 'تصميم 3D', title_en: '3D Design', desc_ar: 'نرسم التصميم ثلاثي الأبعاد لتشوف مشروعك قبل تنفيذه بالكامل.', desc_en: 'We render a 3D design so you can see your project before it is fully built.', icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B3C]" /> },
              { id: 4, title_ar: 'التصنيع', title_en: 'Manufacturing', desc_ar: 'تصنيع مخصص في المصنع بأعلى معايير الجودة والتشطيب.', desc_en: 'Custom manufacturing in our facility with the highest quality and finishes.', icon: <Cog className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B3C]" /> },
              { id: 5, title_ar: 'التركيب', title_en: 'Installation', desc_ar: 'تركيب محترف بسرعة وبدقة لتسليم المشروع في الوقت المحدد.', desc_en: 'Professional installation done quickly and precisely for on-time delivery.', icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B3C]" /> },
              { id: 6, title_ar: 'دعم ما بعد البيع', title_en: 'After-Sales Support', desc_ar: 'متابعة مستمرة وضمان يضمن راحتك بعد التسليم.', desc_en: 'Continuous follow-up and warranty that ensures your comfort after handover.', icon: <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#C89B3C]" /> },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_28px_90px_-50px_rgba(0,0,0,0.6)] backdrop-blur-2xl hover:-translate-y-2 hover:border-[#C89B3C]/40 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0A3EA8] to-[#091B44] shadow-xl border border-white/10">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold tracking-widest text-[#C89B3C] bg-white/10 px-3 py-2 rounded-full border border-white/10">{step.id}</div>
                </div>
                <h4 className="text-2xl font-black text-white mb-3 transition-colors group-hover:text-[#C89B3C]">{i18n.language === 'ar' ? (step as any).title_ar : (step as any).title_en}</h4>
                <p className="text-sm leading-relaxed text-gray-300">{i18n.language === 'ar' ? (step as any).desc_ar : (step as any).desc_en}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#C89B3C] font-semibold text-sm">
                  <span>{i18n.language === 'ar' ? 'سهل' : 'Smooth'}</span>
                  <span className="h-1 w-8 rounded-full bg-[#C89B3C]/60" />
                  <span>{i18n.language === 'ar' ? 'واضح' : 'Clear'}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="https://wa.me/201102655589" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C89B3C] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_24px_80px_-40px_rgba(200,155,60,0.9)] hover:bg-[#e08c41] transition-all duration-300">
              {i18n.language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#091B44] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">{i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
                  {i18n.language === 'ar' ? 'يسعدنا استقبال استفساراتكم' : 'We Welcome Your Enquiries'}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {i18n.language === 'ar' ? 'فريقنا الهندسي والخدمي جاهز للرد على اتصالاتكم وتوفير كافة التفاصيل والمقايسات الفنية.' : 'Our engineering and service team is ready to answer your calls and provide all details and technical quotes.'}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:01102655589"
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#C89B3C] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#C89B3C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">{i18n.language === 'ar' ? 'الهاتف الرئيسي المباشر' : 'Main Direct Phone'}</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">01102655589</span>
                  </div>
                </a>

                <a
                  href="tel:+201030043236"
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#C89B3C] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#C89B3C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">{i18n.language === 'ar' ? 'خط الدعم والاستشارات' : 'Support & Consultation Line'}</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">+20 10 30043236</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/201102655589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#25D366] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">{i18n.language === 'ar' ? 'واتساب 24/7' : 'WhatsApp 24/7'}</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">01102655589</span>
                  </div>
                </a>

                <div className="bg-[#08173b] p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#C89B3C] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">{i18n.language === 'ar' ? 'المصنع والإدارة' : 'Factory & Administration'}</span>
                    <span className="text-sm font-bold text-white">{i18n.language === 'ar' ? 'جمهورية مصر العربية - القاهرة الكبرى' : 'Egypt - Greater Cairo'}</span>
                  </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389552702!2d31.25846435!3d30.05948845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 bg-[#08173b] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">{i18n.language === 'ar' ? 'أرسل لنا تفاصيل طلبك' : 'Send Us Your Request Details'}</h3>

              {formSubmitted ? (
                <div className="bg-green-500/20 border border-green-500 text-green-200 p-6 rounded-2xl text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                  <h4 className="text-xl font-bold">{i18n.language === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Your Request Was Received!'}</h4>
                  <p className="text-sm">{i18n.language === 'ar' ? 'سيتواصل معك مهندس متخصص من فريق الريان خلال ساعات قليلة لتأكيد موعد المعاينة.' : 'A specialist engineer from Al-Rayyan team will contact you within a few hours to confirm the inspection appointment.'}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">الاسم بالكامل</label>
                      <input
                        type="text"
                        required
                        placeholder="أدخل اسمك"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">{i18n.language === 'ar' ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'}</label>
                      <input
                        type="tel"
                        required
                        placeholder="01xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">الخدمة المطلوبة</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                      >
                        <option value="مطابخ مودرن وفخمة">مطابخ مودرن وفخمة</option>
                        <option value="غرف دريسنج روم">غرف دريسنج روم</option>
                        <option value="شبابيك وأبواب ألوميتال">شبابيك وأبواب ألوميتال</option>
                        <option value="واجهات كرتن وول وسيكوريت">واجهات كرتن وول وسيكوريت</option>
                        <option value="قواطع مكاتب زجاجية">قواطع مكاتب زجاجية</option>
                        <option value="تجليد واجهات كلادينج">تجليد واجهات كلادينج</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">المدينة / المنطقة</label>
                      <input
                        type="text"
                        placeholder="مثل: التجمع، زايد، الشروق"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">تفاصيل المشروع</label>
                    <textarea
                      rows={4}
                      placeholder="اكتب تفاصيل المشروع أو الملاحظات التي تريد إضافتها"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C89B3C] hover:bg-[#e07520] text-white py-4 rounded-xl font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-5 h-5" />
                    <span>{i18n.language === 'ar' ? 'تأكيد إرسال الطلب للمعاينة' : 'Submit Inspection Request'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Contact Banner Image */}
      <section className="w-full bg-[#05102a] border-t border-white/10">
        <img src="/بانر_التواصل.jpg" alt="تواصل معنا - الريان" className="w-full h-auto max-h-[400px] object-cover" />
      </section>

      {/* Footer */}
      <footer className="bg-[#05102a] border-t border-white/10 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-white/5 p-1 flex items-center justify-center overflow-hidden">
                  <img src="/شعار_الريان.jpg" alt="شعار الريان" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: "'Tharwat Emara Ruqaa', 'Cairo', serif" }}>الريان</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                {i18n.language === 'ar' ? 'الشركة الرائدة في تصنيع المطابخ المودرن، غرف الدريسنج، أنظمة الألوميتال، والواجهات الزجاجية بأرقى التصاميم وأقوى الضمانات في مصر.' : 'The leading company in modern kitchens, dressing rooms, alumetal systems, and glass facades with the finest designs and strongest warranties in Egypt.'}
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">{i18n.language === 'ar' ? 'خدماتنا الرئيسية' : 'Our Main Services'}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">مطابخ أكريليك وبولي لاك</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">غرف دريسنج روم فاخرة</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">شبابيك ألوميتال معزولة الصوت</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">واجهات كرتن وول وسيكوريت</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">تجليد واجهات الكلادينج</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">{i18n.language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#C89B3C] transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-[#C89B3C] transition-colors">من نحن</a></li>
                <li><a href="#projects" className="hover:text-[#C89B3C] transition-colors">معرض الأعمال</a></li>
                <li><a href="#faq" className="hover:text-[#C89B3C] transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">{i18n.language === 'ar' ? 'أرقام التواصل والتواجد' : 'Contact Numbers'}</h4>
              <div className="space-y-3 text-xs">
                <a href="https://wa.me/201102655589" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C89B3C] transition-colors">
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span dir="ltr" className="font-mono text-white text-sm font-bold">01102655589</span>
                </a>
                <a href="https://wa.me/201030043236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C89B3C] transition-colors">
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  <span dir="ltr" className="font-mono text-white text-sm font-bold">+20 10 30043236</span>
                </a>
                <div className="flex gap-4 pt-4">
                  <a href="https://www.facebook.com/Alrayan.alometal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#1877F2]/30">
                    <Facebook className="w-5 h-5 fill-current" />
                  </a>
                  <a href="https://www.tiktok.com/@elrayan1001?_r=1&_t=ZS-98ZrkMF4kkL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-black/30">
                    <FaTiktok className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/201102655589" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-[#25D366]/30">
                    <Phone className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex items-center justify-center text-xs">
            <p>© {new Date().getFullYear()} شركة الريان لأعمال المطابخ والدريسنج والألوميتال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Widget */}
      <a
        href="https://wa.me/201102655589"
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

            <div className="flex items-center gap-2 text-[#C89B3C] text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>معاينة ورفع مقاسات مجانية</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">احجز موعد معاينة منزلية</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">الاسم بالكامل</label>
                <input
                  type="text"
                  required
                  placeholder="اسمك الكريم"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#C89B3C] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">رقم الهاتف التواصل</label>
                <input
                  type="tel"
                  required
                  placeholder="01xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#C89B3C] outline-none font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">نوع المشروع / القطاع المطلوب</label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#C89B3C] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C89B3C] hover:bg-[#e07520] text-white py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                تأكيد حجز المعاينة المجانية
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
              className="absolute -top-12 left-0 text-white hover:text-[#C89B3C] p-2 bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed High Definition View"
              className="max-h-[85vh] w-auto rounded-2xl object-contain border border-white/20 shadow-2xl"
            />
            <p className="text-center text-xs text-gray-300 mt-3">انقر في أي مكان للخروج من العرض المكبر</p>
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
              <Factory className="w-16 h-16 text-[#C89B3C] mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">جولة مصنع الريان لأعمال المطابخ والألوميتال</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                نستخدم أحدث معدات التقطيع والتجميع بالليزر وقطاعات ألومنيوم معالجة لضمان أعلى جودة تنفيذية.
              </p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="bg-[#C89B3C] text-white font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                إغلاق المشغل
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
                <ZoomIn className="w-4 h-4 text-[#C89B3C]" />
              </div>
            </div>

            <span className="text-[#C89B3C] font-bold text-xs block mb-1">{selectedProject.categoryName}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>

            <div className="space-y-3 text-sm text-gray-300 bg-[#091B44] p-4 rounded-xl border border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C89B3C]" />
                <span>الموقع: <strong>{selectedProject.location}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#C89B3C]" />
                <span>الخامات: <strong>{selectedProject.materials}</strong></span>
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
                className="flex-1 bg-[#C89B3C] hover:bg-[#e07520] text-white py-3 rounded-xl font-bold text-sm transition-all"
              >
                اطلب مشروعاً مشابهاً
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}



