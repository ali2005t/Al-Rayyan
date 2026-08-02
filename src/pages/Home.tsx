import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
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
    subtitle: 'تصاميم مطابخ حديثة',
    desc: 'تصميم وتنفيذ أحدث المطابخ بأجود خامات الألوميتال، الخشب الألومنيوم (خشمونيوم)، والبولي لاك والأكريليك مع حلول استغلال المساحات والتخزين الذكي.',
    icon: HomeIcon,
    image: '/image_copy.png',
    features: ['مقاومة تامة للمياه والحرارة والحشرات', 'مفصلات وآليات إغلاق صامت تدوم طويلاً', 'تصاميم 3D تفاعلية مخصصة لكل مساحة']
  },
  {
    id: 'polylac-kitchens',
    title: 'مطابخ بولي لاك (PolyLac)',
    subtitle: 'لمعان دائم وفخامة',
    desc: 'مطابخ بولي لاك بتصميمات عصرية جذابة تتميز باللمعان العالي ومقاومة الخدوش والحرارة لتناسب الاستخدام اليومي المكثف.',
    icon: Sparkles,
    image: '/image_copy_2.png',
    features: ['أعلى درجة لمعان (Mirror Effect)', 'مقاومة تامة للخدش والحرارة والمياه', 'ألوان ثابتة لا تتأثر بمرور الزمن']
  },
  {
    id: 'khashmonium-kitchens',
    title: 'مطابخ خشمونيوم',
    subtitle: 'أصالة الخشب وقوة الألومنيوم',
    desc: 'نجمع لك بين الشكل الكلاسيكي الدافئ للخشب الطبيعي والمتانة العالية للألومنيوم المقاوم للماء والحشرات بلمسات عصرية.',
    icon: Layers,
    image: '/image_copy_3.png',
    features: ['مظهر خشبي طبيعي وجذاب', 'مقاوم 100% للمياه والصدأ', 'عمر افتراضي طويل بدون صيانة']
  },
  {
    id: 'acrylic-kitchens',
    title: 'مطابخ أكريليك',
    subtitle: 'تصاميم تركية وعالمية',
    desc: 'مطابخ أكريليك حديثة مصممة بأجود الخامات لتوفير مساحة عمل مريحة وألوان متناسقة تضفي بهجة وفخامة لمنزلك.',
    icon: ShieldCheck,
    image: '/image_copy_4.png',
    features: ['خامات أكريليك أوروبية صديقة للبيئة', 'إكسسوارات ومفصلات سوفت كلوز (Soft Close)', 'توزيع ذكي للأجهزة المدمجة (Built-in)']
  },
  {
    id: 'curtain-walls',
    title: 'واجهات الكرتن وول',
    subtitle: 'أنظمة واجهات معمارية',
    desc: 'واجهات زجاجية للمباني الإدارية والشركات والمباني السكنية الراقية، توفر إضاءة طبيعية وتصميم معماري عالمي.',
    icon: Building2,
    image: '/image_copy_4.png',
    features: ['أنظمة هيكلية وواجهات مستمرة Structural Glazing', 'تحمل عالي للرياح والضغط العالي', 'مظهر معماري استثنائي للمشاريع الكبرى']
  },
  {
    id: 'glass-facades',
    title: 'الواجهات الزجاجية والسبايدر',
    subtitle: 'واجهات سيكوريت بانورامية',
    desc: 'تركيب واجهات زجاجية سيكوريت معتمدة للمحلات والمولات والمباني التجارية بأحدث أنظمة التثبيت والسبايدر.',
    icon: Maximize2,
    image: '/image_copy_4.png',
    features: ['زجاج سيكوريت معالج حرارياً ضد الصدمات', 'إكسسوارات ستانلس ستيل 316 مقاوم للصدأ', 'رؤية بانورامية خالية من العوائق']
  },
  {
    id: 'office-partitions',
    title: 'قواطع المكاتب الزجاجية',
    subtitle: 'Office Glass Partitions',
    desc: 'تقسيم المساحات الإدارية بطرق ذكية تمنح خصوصية وشفافية في العمل مع عزل صوتي متطور للمكاتب وغرف الاجتماعات.',
    icon: SlidersHorizontal,
    image: '/image_copy_5.png',
    features: ['أنظمة زجاجية بدون فواصل رأسمية Frame-less', 'دمج ستائر داخلية أو زجاج متغبر ذكي', 'عزل صوتي لمساحات العمل الهدوء']
  },
  {
    id: 'cladding',
    title: 'تجليد واجهات كلادينج',
    subtitle: 'Aluminum Cladding Work',
    desc: 'تكسية واجهات المباني والمحلات بألواح الكلادينج المقاومة للحريق بألوان متنوعة وضمان طويل الأمد.',
    icon: Award,
    image: '/image_copy_2.png',
    features: ['ألواح مقاومة للحريق والحرارة UV', 'تنوع هائل في الألوان والتشطيبات', 'سهولة الصيانة والتنظيف المباشر']
  },
  {
    id: 'metal-fab',
    title: 'تصنيع أعمال ألومنيوم مخصصة',
    subtitle: 'Custom Aluminum Fabrication',
    desc: 'حلول وتصاميم هندسية خاصة وفق مخططات الاستشاريين للمشاريع الفاخرة والفنادق والمقرات التجارية.',
    icon: Wrench,
    image: '/image_copy_3.png',
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
    image: '/image_copy.png',
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
    image: '/image_copy_2.png',
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
    image: '/image_copy_3.png',
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
    image: '/image_copy_7.png',
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
    image: '/image_copy_6.png',
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
    image: '/image_copy_3.png',
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
    image: '/image_copy_3.png'
  },
  {
    id: 2,
    name: 'أ/ شريف حسني',
    role: 'مالك شركة تسويق - العاصمة الإدارية',
    comment: 'نفذوا لنا واجهة المقر الرئيسي وقواطع الزجاج السيكوريت الداخلية. الاحترافية عالية جداً، ومهندسي الموقع على دراية كاملة بأدق التفاصيل المعمارية.',
    rating: 5,
    image: '/image_copy.png'
  },
  {
    id: 3,
    name: 'د. مروة الشافعي',
    role: 'مالكة فيلا بمدينة الشيخ زايد',
    comment: 'المطبخ والدريسنج روم طلعوا أجمل بكتير من التخيل! التصميم 3D المطابق للواقع، وتنسيق الألوان والإضاءات مخلي البيت تحفة فنية. شكراً لفريق الريان.',
    rating: 5,
    image: '/image_copy_2.png'
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
    <div className="min-h-screen bg-[#091B44] text-white font-sans dir-rtl overflow-x-hidden selection:bg-[#C89B3C] selection:text-white" dir="rtl">

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
              <img src="/logo.jpg" alt="شعار الريان" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight font-serif">
                الريــــان
              </span>
              <span className="text-[10px] sm:text-xs text-[#C89B3C] font-semibold tracking-wider">
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
              { id: 'projects', label: 'أعمالنا' },
              { id: 'factory', label: 'المصنع' },
              { id: 'faq', label: 'الأسئلة' },
              { id: 'contact', label: 'اتصل بنا' }
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
              onClick={() => setInspectionModalOpen(true)}
              className="bg-gradient-to-r from-[#0A3EA8] to-[#1e58d4] hover:from-[#1e58d4] hover:to-[#0A3EA8] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#C89B3C] animate-spin" style={{ animationDuration: '4s' }} />
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
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#C89B3C]" /> : <Menu className="w-7 h-7" />}
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
          <img
            src="/banner.jpg"
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
                الريان لأعمال <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] via-[#ffaa64] to-white">
                  المطابخ والدريسنج
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed font-light transition-all duration-500"
              >
                نصمم وننفذ مطبخ أحلامك بأعلى جودة وتشطيبات احترافية تناسب جميع المساحات والأذواق. متخصصون في <strong className="text-white font-semibold">المطابخ المودرن</strong>، و<strong className="text-white font-semibold">غرف الدريسنج</strong>.
              </motion.p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto bg-[#C89B3C] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl hover:shadow-[#C89B3C]/30 transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>استكشف معرض أعمالنا</span>
                  <ArrowLeft className="w-5 h-5" />
                </a>

                <button
                  onClick={() => setInspectionModalOpen(true)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                >
                  <PhoneCall className="w-5 h-5 text-[#C89B3C]" />
                  <span>احجز معاينة مجانية الآن</span>
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
                  { label: 'مطابخ مودرن', sub: 'أكريليك وبولي لاك' },
                  { label: 'دريسنج روم', sub: 'تصاميم زجاجية' },
                  { label: 'أنظمة ألوميتال', sub: 'جامبو وتانجو' },
                  { label: 'واجهات زجاج', sub: 'سيكوريت وكرتن وول' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center sm:text-right backdrop-blur-sm hover:border-[#C89B3C]/50 transition-colors">
                    <div className="text-white font-bold text-sm">{item.label}</div>
                    <div className="text-[#C89B3C] text-xs font-light">{item.sub}</div>
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
                  src="/hero_person_transparent.png"
                  alt="ممثل مؤسسة الريان"
                  className="absolute bottom-2 z-10 w-auto h-[120%] max-w-[140%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Floating Nameplate */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#091B44] border-2 border-[#C89B3C] text-white px-8 py-3 rounded-2xl shadow-2xl z-20 flex flex-col items-center gap-1 w-max hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C89B3C]" />
                    <span className="font-bold text-base">المهندس / شريف نادي</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-gray-300" />
                    <span className="text-xs text-gray-300 font-semibold">صاحب شركة الريان</span>
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
                onClick={() => setZoomedImage('/image_copy_6.png')}
              >
                <img
                  src="/image_copy.png"
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
                <span>عن الريان لأعمال المطابخ والدريسنج</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif">
                نحول رؤيتك إلى واقع معماري <br />
                <span className="text-[#C89B3C]">يتسم بالأناقة والدقة المتناهية</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-base">
                <strong className="text-white">الريان</strong> شركة متخصصة في تصميم وتنفيذ المطابخ والدريسنج بجميع المقاسات والخامات، مع فريق محترف يهتم بأدق التفاصيل لتقديم حلول عملية وعصرية تناسب كل منزل.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#C89B3C]/40 transition-colors">
                  <h4 className="text-[#C89B3C] font-bold text-base mb-1">رؤيتنا</h4>
                  <p className="text-xs text-gray-300">أن نكون العلامة التجارية الأولى والأكثر ثقة في صناعة المطابخ وأنظمة الألوميتال في مصر والشرق الأوسط.</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#C89B3C]/40 transition-colors">
                  <h4 className="text-[#C89B3C] font-bold text-base mb-1">رسالتنا</h4>
                  <p className="text-xs text-gray-300">تقديم منتجات هندسية عالية الجودة تضمن الراحة والأمان والجمال لعملائنا بأفضل الأسعار وبضمان حقيقي.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center font-bold">
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
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">خدماتنا المتخصصة</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              حلول متكاملة للمطابخ والدريسنج والألوميتال
            </h2>
            <p className="text-gray-300 text-base">
              نصمم وننفذ أرقى المنتجات الهندسية والحلول المعمارية للمنازل، الفيلل، الشركات، والمشاريع التجارية بأعلى معايير الدقة.
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
                      <span className="text-xs font-semibold text-[#C89B3C]">{service.subtitle}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#C89B3C] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="pt-3 border-t border-white/5 space-y-2">
                        {service.features.map((feat, idx) => (
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
              <span className="text-[#C89B3C] font-bold text-sm tracking-wider">التحول القبل وبعد</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                شاهد الفارق <br />
                <span className="text-[#C89B3C]">قبل وبعد تنفيذ الريان</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                نحيل المساحات العادية أو غير المستغلة إلى تحف معمارية فاخرة تجمع بين الأمان، العزل التام، والشكل المودرن الساحر. اسحب المؤشر للاطلاع على النتيجة الفعالية!
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#C89B3C]" />
                  <span className="text-sm font-semibold text-white">تحسين استغلال المساحة بنسبة 100%</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-[#0A3EA8]" />
                  <span className="text-sm font-semibold text-white">تشطيبات خالية من العيوب وضمان شامل</span>
                </div>
              </div>

              <button
                onClick={() => setInspectionModalOpen(true)}
                className="w-fit bg-[#C89B3C] hover:bg-[#e07520] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                جدد مطبخك أو منزلك الآن
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
                  src="/image_copy_5.png"
                  alt="النتيجة النهائية الفاخرة - تنفيذ شركة الريان للألوميتال"
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
                    src="/image_copy_6.png"
                    alt="الحالة الأصلية للموقع قبل بدء أعمال التشطيبات والتركيب"
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale brightness-75"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 right-4 bg-black/80 text-[#C89B3C] font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-lg">
                    قبل التنفيذ 🛠️
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
                👈 اسحب مؤشر الصّورة يميناً ويساراً لملاحظة الفارق المعماري
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#08173b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">لماذا نعتبر الخيار الأول؟</span>
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
                  className="bg-[#091B44] p-8 rounded-3xl border border-white/10 hover:border-[#C89B3C]/50 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0A3EA8]/30 border border-[#0A3EA8] text-[#C89B3C] flex items-center justify-center">
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
                <span>مصنع الريان للألوميتال</span>
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
                <span className="text-sm font-bold text-white">فني ومهندس لخدمتك</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(200,155,60,0.15)] border border-white/10 group cursor-pointer" onClick={() => setZoomedImage('/person.png')}>
                <img
                  src="/person.png"
                  alt="فريق عمل الريان والمهندسين"
                  className="w-full h-[400px] sm:h-[500px] object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05102a] via-[#05102a]/40 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">فريق مهندسي الريان</h4>
                    <p className="text-[#C89B3C] text-sm font-semibold mt-1">نعمل يداً بيد لتحقيق حلمك</p>
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

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">معرض الأعمال</span>
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
                    <div className="flex items-center gap-2 text-xs text-[#C89B3C]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
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
                    <span>عام التنفيذ: {project.date}</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#C89B3C] font-bold hover:underline flex items-center gap-1"
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
              <span className="text-[#C89B3C] text-sm font-bold tracking-wider">مصنع الريان للتصنيع المتطور</span>
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
                  onClick={() => setZoomedImage('/image_copy_7.png')}
                  className="bg-[#0A3EA8] hover:bg-[#1955d1] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-3 hover:scale-105 transition-all"
                >
                  <ZoomIn className="w-5 h-5 text-[#C89B3C]" />
                  <span>تكبير الصورة</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer"
                onClick={() => setZoomedImage('/image_copy_7.png')}
              >
                <img
                  src="/image_copy_7.png"
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
              أعمالنا على <span className="text-[#C89B3C]">أرض الواقع</span>
            </h2>

            <p className="text-gray-300 text-base">
              شاهد تفاصيل التشطيبات المودرن ودقة التركيب من خلال هذه المقاطع السريعة من أعمالنا.
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
                "https://www.facebook.com/reel/1773121107000371",
                "https://www.facebook.com/reel/1716579213028179",
                "LOGO",
                "https://www.facebook.com/reel/2008169783155366",
                "https://www.facebook.com/reel/1669292920937518"
              ].map((item, idx) => (
                <div key={idx} className={`w-full flex justify-center transition-all duration-500 hover:-translate-y-2 ${idx % 3 === 1 ? 'lg:mt-16' : ''} ${idx % 2 === 1 ? 'md:mt-12 lg:mt-0' : ''} ${idx === 6 ? 'lg:col-start-2' : ''}`}>
                  {item === "LOGO" ? (
                    <div className="w-[300px] h-[533px] flex flex-col items-center justify-center relative group hidden lg:flex">
                      <div className="absolute inset-0 bg-[#C89B3C] rounded-full blur-[80px] opacity-20 animate-pulse" style={{ animationDuration: '3s' }}></div>
                      <img src="/logo.jpg" alt="Al Rayan" className="w-56 h-56 object-cover rounded-full border-4 border-[#C89B3C] shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute bottom-[20%] text-[#C89B3C] font-bold text-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        إبداعات الريان
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
              <span>تابع صفحتنا على فيسبوك لمزيد من الأعمال</span>
            </a>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#091B44] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">ثقة العملاء هي رأس مالنا</span>
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
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">إجابات استفساراتكم</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              الأسئلة الشائعة
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
              className="bg-[#C89B3C] hover:bg-[#e07520] text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl transition-all hover:scale-105"
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
            <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">كيف نعمل؟</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif mb-4">
              خطوات تنفيذ مشروعك
            </h2>
            <p className="text-gray-300 text-base">
              رحلة سلسة واحترافية من أول اتصال حتى الاستلام النهائي لضمان أعلى مستويات الجودة والرضا.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent -z-10" />

            {[
              { id: 1, title: 'الاستشارة', icon: <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-[#C89B3C] transition-colors" /> },
              { id: 2, title: 'المعاينة', icon: <Ruler className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-[#C89B3C] transition-colors" /> },
              { id: 3, title: 'تصميم 3D', icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-[#C89B3C] transition-colors" /> },
              { id: 4, title: 'التصنيع', icon: <Cog className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-[#C89B3C] transition-colors" /> },
              { id: 5, title: 'التركيب', icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-[#C89B3C] transition-colors" /> },
              { id: 6, title: 'دعم ما بعد البيع', icon: <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-[#C89B3C] transition-colors" /> },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#091B44] border-4 border-[#0A3EA8]/50 group-hover:border-[#C89B3C] shadow-2xl flex items-center justify-center text-3xl sm:text-4xl mb-4 transition-all duration-500 group-hover:scale-110 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#C89B3C] text-white text-sm font-bold flex items-center justify-center border-2 border-[#05102a]">
                    {step.id}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-[#C89B3C] transition-colors">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#091B44] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-[#C89B3C] text-sm font-bold tracking-widest uppercase block mb-2">تواصل معنا</span>
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
                  className="bg-[#08173b] p-5 rounded-2xl border border-white/10 hover:border-[#C89B3C] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#C89B3C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">الهاتف الرئيسي المباشر</span>
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
                  <div className="w-12 h-12 rounded-xl bg-[#0A3EA8]/40 text-[#C89B3C] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">المصنع والإدارة</span>
                    <span className="text-sm font-bold text-white">جمهورية مصر العربية - القاهرة الكبرى</span>
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
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
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
                        className="w-full bg-[#091B44] border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">ملاحظات أو تفاصيل إضافية</label>
                    <textarea
                      rows={4}
                      placeholder="أدخل أي تفاصيل تود توضيحها للمهندس..."
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
                    <span>تأكيد إرسال الطلب للمعاينة</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Contact Banner Image */}
      <section className="w-full bg-[#05102a] border-t border-white/10">
        <img src="/banner.jpg" alt="تواصل معنا - الريان" className="w-full h-auto max-h-[400px] object-cover" />
      </section>

      {/* Footer */}
      <footer className="bg-[#05102a] border-t border-white/10 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-white/5 p-1 flex items-center justify-center overflow-hidden">
                  <img src="/logo.jpg" alt="شعار الريان" className="w-full h-full object-contain" />
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
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">مطابخ أكريليك وبولي لاك</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">غرف دريسنج روم فاخرة</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">شبابيك ألوميتال معزولة الصوت</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">واجهات كرتن وول وسيكوريت</a></li>
                <li><a href="#services" className="hover:text-[#C89B3C] transition-colors">تجليد واجهات الكلادينج</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#C89B3C] transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-[#C89B3C] transition-colors">من نحن</a></li>
                <li><a href="#projects" className="hover:text-[#C89B3C] transition-colors">معرض الأعمال</a></li>
                <li><a href="#faq" className="hover:text-[#C89B3C] transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">أرقام التواصل والتواجد</h4>
              <div className="space-y-3 text-xs">
                <a href="https://wa.me/201102655589" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C89B3C] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span dir="ltr" className="font-mono text-white text-sm font-bold">01102655589</span>
                </a>
                <a href="https://wa.me/201030043236" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C89B3C] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span dir="ltr" className="font-mono text-white text-sm font-bold">+20 10 30043236</span>
                </a>
                <div className="flex gap-4 pt-4">
                  <a href="https://www.facebook.com/Alrayan.alometal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2]/10 border border-[#1877F2] flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E1306C]/10 border border-[#E1306C] flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all">
                    <Instagram className="w-5 h-5" />
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


