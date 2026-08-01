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

const HERO_SLIDES = [
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

const SERVICES_DATA = [
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

const PROJECTS_DATA = [
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInspectionModalOpen(false);
      setFormData({ name: '', phone: '', service: 'مطابخ مودرن', city: 'القاهرة / الجيزة', notes: '' });
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
                ر
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight font-serif">
                الريــــان
              </span>
              <span className="text-[10px] sm:text-xs text-[#FF8C32] font-semibold tracking-wider">
                لأعمال المطابخ والدريسنج والألوميتال
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {[
              { id: 'home', label: 'الرئيسية' },
              { id: 'about', label: 'من نحن' },
              { id: 'services', label: 'خدماتنا' },
              { id: 'estimator', label: 'حاسبة المواصفات' },
              { id: 'projects', label: 'أعمالنا' },
              { id: 'factory', label: 'المصنع' },
              { id: 'faq', label: 'الأسئلة' },
              { id: 'contact', label: 'اتصل بنا' }
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
              <span>اطلب معاينة مجانية</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-[#0A3EA8] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              معاينة مجانية
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
                { id: 'home', label: 'الرئيسية' },
                { id: 'about', label: 'من نحن' },
                { id: 'services', label: 'خدماتنا' },
                { id: 'estimator', label: 'حاسبة المواصفات' },
                { id: 'projects', label: 'معرض الأعمال' },
                { id: 'factory', label: 'المصنع والتكنولوجيا' },
                { id: 'faq', label: 'الأسئلة الشائعة' },
                { id: 'contact', label: 'تواصل معنا' }
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
                  <span>اتصل بنا: 01102655589</span>
                </a>
                <a
                  href="https://wa.me/201102655589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-sm font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
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
                <span>الريان للألوميتال والمطابخ الفاخرة</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight font-serif tracking-normal">
                نصنع الجودة... <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C32] via-[#ffaa64] to-white">
                  ونبني الثقة
                </span>
              </h1>

              <p className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-light transition-all duration-500">
                {HERO_SLIDES[heroSlideIndex].subtitle} — متخصصون في <strong className="text-white font-semibold">المطابخ المودرن</strong>، 
                <strong className="text-white font-semibold">غرف الدريسنج</strong>، 
                <strong className="text-white font-semibold">أنظمة الألوميتال</strong>، 
                و<strong className="text-white font-semibold">الواجهات الزجاجية المعمارية</strong> بضمان 10 سنوات.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto bg-[#FF8C32] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl hover:shadow-[#FF8C32]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>استكشف معرض أعمالنا</span>
                  <ArrowLeft className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setInspectionModalOpen(true)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5 text-[#FF8C32]" />
                  <span>احجز معاينة مجانية الآن</span>
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
                  { label: 'مطابخ مودرن', sub: 'أكريليك وبولي لاك' },
                  { label: 'دريسنج روم', sub: 'تصاميم زجاجية' },
                  { label: 'أنظمة ألوميتال', sub: 'جامبو وتانجو' },
                  { label: 'واجهات زجاج', sub: 'سيكوريت وكرتن وول' }
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
                      انقر لتكبير صورة النموذج
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-white">لماذا اختيار الريان؟</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C32]" />
                        <span>ضمان حقيقي لمدة 10 سنوات على كافة القطاعات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C32]" />
                        <span>معاينة ورفع مساحات دقيق بأجهزة الليزر</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C32]" />
                        <span>سرعة في التوريد والتركيب بأعلى احترافية</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/201102655589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-white py-3 rounded-xl font-bold text-center text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>تواصل سريع عبر الواتساب</span>
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
              <span className="text-xs sm:text-sm text-gray-300 font-medium">مشروع مكتمل بنجاح</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white font-serif">+{countYears}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">عاماً من الخبرة والتميّز</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#FF8C32] font-serif">+{countClients}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">عميل سعيد ومستمر</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-white font-serif">100%</span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">دقة وتزام بالمواعيد</span>
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
                    <h4 className="font-bold text-white text-base">جودة معتمدة</h4>
                    <p className="text-xs text-gray-300">أحدث خطوط الإنتاج للألوميتال والمطابخ</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A3EA8]/30 rounded-full filter blur-3xl -z-0" />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-2 bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#FF8C32] px-4 py-1.5 rounded-full text-xs font-bold w-fit">
                <Building2 className="w-4 h-4" />
                <span>عن الريان للألوميتال والمطابخ</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif">
                نحول رؤيتك إلى واقع معماري <br />
                <span className="text-[#FF8C32]">يتسم بالأناقة والدقة المتناهية</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                تعد <strong className="text-white">شركة الريان لأعمال المطابخ والدريسنج والألوميتال</strong> واحدة من الشركات الرائدة في مصر والمتخصصة في تقديم حلول متكاملة للمساحات السكنية والتجارية. نحن نجمع بين الخبرة الطويلة والتقنيات الحديثة لنصنع منتجات تفوق التوقعات من حيث المتانة، الأناقة، والاستغلال الذكي للمساحات.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF8C32]/40 transition-colors">
                  <h4 className="text-[#FF8C32] font-bold text-base mb-1">رؤيتنا</h4>
                  <p className="text-xs text-gray-300">أن نكون العلامة التجارية الأولى والأكثر ثقة في صناعة المطابخ وأنظمة الألوميتال في مصر والشرق الأوسط.</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#FF8C32]/40 transition-colors">
                  <h4 className="text-[#FF8C32] font-bold text-base mb-1">رسالتنا</h4>
                  <p className="text-xs text-gray-300">تقديم منتجات هندسية عالية الجودة تضمن الراحة والأمان والجمال لعملائنا بأفضل الأسعار وبضمان حقيقي.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF8C32]/20 text-[#FF8C32] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">مهندسون وفنيون محترفون</h5>
                    <p className="text-xs text-gray-400">إشراف دقيق على كل خطوة تصنيع</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A3EA8]/40 text-[#0A3EA8] flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">أفضل القطاعات والإكسسوارات</h5>
                    <p className="text-xs text-gray-400">قطاعات ألومنيوم ثقيلة وزجاج معالج</p>
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
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">خدماتنا المتخصصة</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              حلول متكاملة للمطابخ والدريسنج والألوميتال
            </h2>
            <p className="text-gray-300 text-base">
              نصمم وننفذ أرقى المنتجات الهندسية والحلول المعمارية للمنازل، الفيلل، الشركات، والمشاريع التجارية بأعلى معايير الدقة.
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
                      <span>اطلب معاينة لهذه الخدمة</span>
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
              <span>أداة مخصصة لعملاء الريان</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              حاسبة المواصفات وتقدير الميزانية والضمان
            </h2>
            <p className="text-gray-300 text-base">
              اختر نوع مشروعك والمادة المفضلة لتعرف التقدير الزمني والمزايا الفنية والضمان الممنوح فورياً.
            </p>
          </div>

          <div className="bg-[#08173b] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A3EA8]/20 rounded-full filter blur-3xl -z-0" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                <div>
                  <label className="text-sm font-bold text-gray-200 mb-3 block flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FF8C32] text-white text-xs flex items-center justify-center font-mono">1</span>
                    اختر نوع القطاع / المشروع المطلوب:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'kitchens', label: 'مطابخ مودرن' },
                      { id: 'dressing', label: 'دريسنج روم' },
                      { id: 'windows', label: 'شبابيك وأبواب' },
                      { id: 'facades', label: 'واجهات زجاجية' }
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
                    اختر خام ونوع التشطيب:
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
                            <div className="text-xs text-gray-400">مدة التصنيع: {mat.duration}</div>
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
                      المساحة التقريبية (أمتار):
                    </label>
                    <span className="text-[#FF8C32] font-mono font-bold text-base bg-[#091B44] px-3 py-1 rounded-lg border border-white/10">
                      {estimatorArea} {estimatorCategory === 'kitchens' || estimatorCategory === 'dressing' ? 'متر طولي / مربع' : 'متر مربع'}
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
                    <span>4 م</span>
                    <span>30 م</span>
                    <span>60 م+</span>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-5 bg-[#091B44] p-6 rounded-3xl border border-white/20 shadow-xl flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs font-bold text-[#FF8C32]">ملخص المقايسة التقديرية</span>
                    <ShieldCheck className="w-6 h-6 text-green-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{selectedMaterialObj.name}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    تشمل المقايسة التصميم 3D، المعاينة بالليزر، القص بآلات CNC، التوريد والتركيب الشامل بأيدي مهندسين متخصصين.
                  </p>

                  <div className="space-y-3 bg-[#08173b] p-4 rounded-2xl border border-white/10 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">فترة التنفيذ والتسليم:</span>
                      <span className="text-white font-bold">{selectedMaterialObj.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">مدة الضمان المعتمد:</span>
                      <span className="text-green-400 font-bold">{selectedMaterialObj.guarantee} ضد العيوب</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">المعاينة والتصميم 3D:</span>
                      <span className="text-[#FF8C32] font-bold">مجاناً 100%</span>
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
                    <span>احجز معاينة بقطاع ({selectedMaterialObj.name})</span>
                  </button>

                  <a
                    href="https://wa.me/201102655589"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>استفسر فورياً عبر الواتساب</span>
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
              <span className="text-[#FF8C32] font-bold text-sm tracking-wider">التحول القبل وبعد</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                شاهد الفارق <br />
                <span className="text-[#FF8C32]">قبل وبعد تنفيذ الريان</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                نحيل المساحات العادية أو غير المستغلة إلى تحف معمارية فاخرة تجمع بين الأمان، العزل التام، والشكل المودرن الساحر. اسحب المؤشر للاطلاع على النتيجة الفعالية!
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#FF8C32]" />
                  <span className="text-sm font-semibold text-white">تحسين استغلال المساحة بنسبة 100%</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#0A3EA8]" />
                  <span className="text-sm font-semibold text-white">تشطيبات خالية من العيوب وضمان شامل</span>
                </div>
              </div>

              <button
                onClick={() => setInspectionModalOpen(true)}
                className="w-fit bg-[#FF8C32] hover:bg-[#e07520] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                جدد مطبخك أو منزلك الآن
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none">
                
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                  alt="بعد التجديد - مطبخ الريان"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-600/90 text-white font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                  بعد التنفيذ ✨
                </span>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${beforeAfterPos}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                    alt="قبل التجديد"
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale brightness-75"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 right-4 bg-black/80 text-[#FF8C32] font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                    قبل التنفيذ 🛠️
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
                👈 اسحب مؤشر الصّورة يميناً ويساراً لملاحظة الفارق المعماري
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#08173b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">لماذا نعتبر الخيار الأول؟</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              مميزات تجعل شركة الريان خيارك الآمن
            </h2>
            <p className="text-gray-300 text-base">
              نحن لا نقدم مجرد منتج، بل نقدم تجربة متكاملة تبدأ من المعاينة المجانية وحتى الضمان وخدمة ما بعد البيع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'خامات فائقة الجودة',
                desc: 'نستخدم قطاعات ألوميتال معتمدة بسمك ثقيل وإكسسوارات إيطالية ونمساوية تدوم لعشرات السنين دون تغيير.'
              },
              {
                icon: Users,
                title: 'مهندسون وفنيون متخصصون',
                desc: 'طاقم هندسي مدرب على أعلى مستوى لإجراء الرفع المساحي بدقة والتصميم والتثبيت الخالي من الأخطاء.'
              },
              {
                icon: Award,
                title: 'ضمان حقيقي 10 سنوات',
                desc: 'نمنح عملاءنا شهادة ضمان معتمدة وموثوقة على كافة المنتجات، مع التزام تام بالصيانة السريعة.'
              },
              {
                icon: Clock,
                title: 'سرعة في التسليم',
                desc: 'نحترم وقت العميل بصرامة، ونلتزم بمواعيد التسليم المحددة بالعقد دون أي تأخير.'
              },
              {
                icon: Factory,
                title: 'أحدث المعدات والماكينات',
                desc: 'نمتلك مصنعاً مجهزاً بأحدث ماكينات القص والتجميع وتقنيات التقطيع بالليزر لضمان زوايا دقيقة 100%.'
              },
              {
                icon: Sparkles,
                title: 'أسعار منافسة وحلول مرنة',
                desc: 'نقدم قيمة استثنائية مقابل السعر مع إمكانية توفير خيارات متعددة تناسب ميزانيتك ومتطلباتك.'
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
              <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">معرض الأعمال</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif">
                مشاريع نفخر بتنفيذها
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
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
                      title="تكبير الصورة"
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
                    <span>عام التنفيذ: {project.date}</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#FF8C32] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>تفاصيل المشروع</span>
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
              <span className="text-[#FF8C32] text-sm font-bold tracking-wider">مصنع الريان للتصنيع المتطور</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                تقنيات حديثة ودقة تصنيع متناهية
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                يتميز مصنعنا بوجود أحدث خطوط الإنتاج وآلات التجميع والقص CNC والتقطيع بالليزر، لإخراج قطاعات ألوميتال ومطابخ بمواصفات قياسية زواياها محكمة وتفاصيلها فائقة الجودة.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#091B44] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-1">ماكينات CNC ألمانية</h4>
                  <p className="text-xs text-gray-400">دقة قص تصل إلى أجزاء من المليمتر</p>
                </div>

                <div className="bg-[#091B44] p-4 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-1">دهانات إلكتروستاتيك</h4>
                  <p className="text-xs text-gray-400">ثبات ألوان دائم ضد الخدش والصدأ</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-[#0A3EA8] hover:bg-[#1955d1] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-3 hover:scale-105 transition-all"
                >
                  <Play className="w-5 h-5 fill-current text-[#FF8C32]" />
                  <span>شاهد جولة داخل المصنع</span>
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
                    تشغيل مقطع الفيديو HD
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
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">ثقة العملاء هي رأس مالنا</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              ماذا يقول عملاؤنا عن الريان؟
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
            <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">إجابات استفساراتكم</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              الأسئلة الشائعة
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
            عرض خاص لفترة محدودة
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif max-w-3xl leading-tight">
            جاهز تبدأ مشروعك وتجدد مطبخك أو واجهة مبناك بأعلى جودة؟
          </h2>

          <p className="text-gray-200 text-base max-w-xl">
            احصل على معاينة مجانية من مهندس متخصص واستلم تصميم 3D تفاعلي مجاناً دون أي التزام.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={() => setInspectionModalOpen(true)}
              className="bg-[#FF8C32] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all hover:scale-105"
            >
              اطلب معاينة مجانية الآن
            </button>
            <a
              href="https://wa.me/201102655589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل واتساب مباشرة</span>
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
                <span className="text-[#FF8C32] text-sm font-bold tracking-widest uppercase block mb-2">تواصل معنا</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
                  يسعدنا استقبال استفساراتكم
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  فريقنا الهندسي والخدمي جاهز للرد على اتصالاتكم وتوفير كافة التفاصيل والمقايسات الفنية.
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
                    <span className="text-xs text-gray-400 block">الهاتف الرئيسي المباشر</span>
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
                    <span className="text-xs text-gray-400 block">خط الدعم والاستشارات</span>
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
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">واتساب 24/7</span>
                    <span className="text-lg font-bold text-white font-mono" dir="ltr">01102655589</span>
                  </div>
                </a>

                <div className="bg-[#08173b] p-5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#FF8C32] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">المصنع والإدارة</span>
                    <span className="text-sm font-bold text-white">جمهورية مصر العربية - القاهرة الكبرى</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 bg-[#08173b] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">أرسل لنا تفاصيل طلبك</h3>

              {formSubmitted ? (
                <div className="bg-green-500/20 border border-green-500 text-green-200 p-6 rounded-2xl text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                  <h4 className="text-xl font-bold">تم استلام طلبك بنجاح!</h4>
                  <p className="text-sm">سيتواصل معك مهندس متخصص من فريق الريان خلال ساعات قليلة لتأكيد موعد المعاينة.</p>
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
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">رقم الهاتف / الواتساب</label>
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
                      <label className="block text-xs font-semibold text-gray-300 mb-2">الخدمة المطلوبة</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                      >
                        <option value="مطابخ مودرن">مطابخ مودرن وفخمة</option>
                        <option value="دريسنج روم">غرف دريسنج روم</option>
                        <option value="شبابيك وأبواب ألوميتال">شبابيك وأبواب ألوميتال</option>
                        <option value="واجهات كرتن وول وسيكوريت">واجهات كرتن وول وسيكوريت</option>
                        <option value="قواطع مكاتب">قواطع مكاتب زجاجية</option>
                        <option value="تجليد كلادينج">تجليد واجهات كلادينج</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">المدينة / المنطقة</label>
                      <input
                        type="text"
                        placeholder="مثل: التجمع، زايد، الشروق"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#FF8C32] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">ملاحظات أو تفاصيل إضافية</label>
                    <textarea
                      rows="4"
                      placeholder="أدخل أي تفاصيل تود توضيحها للمهندس..."
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
                    <span>تأكيد إرسال الطلب للمعاينة</span>
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
                  ر
                </div>
                <span className="text-xl font-bold text-white font-serif">الريـــان</span>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                الشركة الرائدة في تصنيع المطابخ المودرن، غرف الدريسنج، أنظمة الألوميتال، والواجهات الزجاجية بأرقى التصاميم وأقوى الضمانات في مصر.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">خدماتنا الرئيسية</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">مطابخ أكريليك وبولي لاك</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">غرف دريسنج روم فاخرة</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">شبابيك ألوميتال معزولة الصوت</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">واجهات كرتن وول وسيكوريت</a></li>
                <li><a href="#services" className="hover:text-[#FF8C32] transition-colors">تجليد واجهات الكلادينج</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#FF8C32] transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-[#FF8C32] transition-colors">من نحن</a></li>
                <li><a href="#estimator" className="hover:text-[#FF8C32] transition-colors">حاسبة المواصفات</a></li>
                <li><a href="#projects" className="hover:text-[#FF8C32] transition-colors">معرض الأعمال</a></li>
                <li><a href="#faq" className="hover:text-[#FF8C32] transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">أرقام التواصل والتواجد</h4>
              <div className="space-y-3 text-xs">
                <p dir="ltr" className="font-mono text-white text-sm font-bold">01102655589</p>
                <p dir="ltr" className="font-mono text-white text-sm font-bold">+20 10 30043236</p>
                <p className="text-gray-400">ساعات العمل: السبت - الخميس (9:00 ص - 10:00 م)</p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
            <p>© {new Date().getFullYear()} شركة الريان لأعمال المطابخ والدريسنج والألوميتال. جميع الحقوق محفوظة.</p>
            <p className="text-gray-400">تصميم وتطوير هندسي فاخر 🌟</p>
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
        <MessageCircle className="w-7 h-7" />
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
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#FF8C32] outline-none"
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
                  className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3 text-white text-sm focus:border-[#FF8C32] outline-none font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">نوع المشروع / القطاع المطلوب</label>
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
              className="absolute -top-12 left-0 text-white hover:text-[#FF8C32] p-2 bg-white/10 rounded-full transition-colors"
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
              <Factory className="w-16 h-16 text-[#FF8C32] mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">جولة مصنع الريان لأعمال المطابخ والألوميتال</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                نستخدم أحدث معدات التقطيع والتجميع بالليزر وقطاعات ألومنيوم معالجة لضمان أعلى جودة تنفيذية.
              </p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="bg-[#FF8C32] text-white font-bold px-6 py-2.5 rounded-xl text-xs"
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
                <ZoomIn className="w-4 h-4 text-[#FF8C32]" />
              </div>
            </div>

            <span className="text-[#FF8C32] font-bold text-xs block mb-1">{selectedProject.categoryName}</span>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>

            <div className="space-y-3 text-sm text-gray-300 bg-[#091B44] p-4 rounded-xl border border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF8C32]" />
                <span>الموقع: <strong>{selectedProject.location}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#FF8C32]" />
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
                className="flex-1 bg-[#FF8C32] hover:bg-[#e07520] text-white py-3 rounded-xl font-bold text-sm transition-all"
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