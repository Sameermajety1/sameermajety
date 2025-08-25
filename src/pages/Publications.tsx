import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FloatingParticle } from '../components/FloatingElements';

interface Publication {
  title: string;
  journal: string;
  year: number;
  date: string;
  authors: string;
  abstract: string;
  keywords?: string[];
  impactFactor?: number;
  link: string;
}

// Posters have fewer fields and no links/abstracts
interface PosterPresentation {
  title: string;
  journal: string;
  year: number;
  date: string;
  authors: string;
}

// Hardcoded publications data
const peerReviewedPublications: Publication[] = [
  {
    title: "Spinal teratoma in an adolescent: a rare case report with intradural presentation and review of management strategies",
    journal: "Annals of Medicine and Surgery",
    year: 2025,
    date: "August",
    authors: " Agarwal S, Agarwal R, Majety SK, Veldurthi AKK, Koppala SD, Muppana G.",
    abstract: "Spinal teratomas are rare tumors of pluripotent germ cells, accounting for <0.5% of all spinal cord tumors and 2% of all teratomas. While they commonly occur in gonads, extragonadal spinal presentation is uncommon. They are often associated with spinal dysraphism and present variably depending on tumor location and neural compression. MRI aids in diagnosis, but histopathological examination remains the gold standard. Early detection is vital to avoid irreversible neurological damage.",
    keywords: ["Aseptic Meningitis", "Intradural Tumor", "Monodermal Teratoma", "Spinal Teratoma", "Surgical Excision"],
    link: "https://pubmed.ncbi.nlm.nih.gov/40787529/"
  },
  {
    title: "Study of Serum Cholinesterase Levels Among the Farmers Exposed to Pesticides in Kakinada District: A Cross-sectional Study.",
    journal: "International Journal of Medical Science and Current Research",
    year: 2024,
    date: "April",
    authors: "Kathare AR, Kumar TA, Badam LK, Lakshmi VB, Majety SK.",
    abstract: "A vast majority of the population in India (56.7%) is engaged in agriculture and is therefore exposed to pesticides. Unsafe and non-preventive work practices in handling and spraying of organophosphorous compounds has endangered the agriculture workers to its toxic effects. Enhanced risk of exposure among the farmers and agricultural labourers, might cause serious adverse health effects and negative socio-economic impact.",
    keywords: ["Pesticides", " Organophosphorous Compounds", " Serum Choliestera"],
    link: "https://www.ijmscr.com/asset/images/uploads/17103925636076.pdf"
  },
  {
    title: "Clinical Outcomes and Predictors of Mortality in Paraquat Poisoning: Insights from a Tertiary Care Center in South India.",
    journal: "International Journal of Medicine and Public Health",
    year: 2025,
    date: "July",
    authors: "Majety SK, Pasam SS, Chakra S, Pathipaka SK, Kathare AR.",
    abstract: "Paraquat poisoning remains a major public health issue in developing countries due to its high toxicity and easy availability. Despite its lethality, data on clinical course, treatment outcomes, and predictors of mortality are limited. The objective is to evaluate clinical features, outcomes, and predictors of mortality among patients admitted with paraquat poisoning at a tertiary care center in South India.",
    keywords: ["Paraquat Poisoning", "Acute Kidney Injury", "Acute Liver Injury", "Mortality", " Public Health Issue"],
    link: "https://www.ijmedph.org/Uploads/Volume15Issue3/131.%202755.%20IJMEDPH_Haroon_709-713.pdf"
  },
  {
    title: "A case report of zoster-induced guillain-barré syndrome: diagnostic challenges and potential role of pulse prednisone",
    journal: " Annals of Medicine and Surgery",
    year: 2025,
    date: "July",
    authors: "Mishra D, Nayeem O, Majety SK, Shaik N, Muppana GM.",
    abstract: "Zoster-induced Guillain-Barré Syndrome (ZGBS) is a rare neurological complication of varicella-zoster virus (VZV) reactivation. Diagnosing ZGBS is challenging due to its overlapping clinical features with other forms of Guillain-Barré Syndrome (GBS) and zoster myelitis. This report emphasizes the importance of early recognition and tailored treatment, particularly in resource-limited settings.",
    link: "https://journals.lww.com/annals-of-medicine-and-surgery/abstract/9900/a_case_report_of_zoster_induced_guillain_barr_.3161.aspx#:~:text=Conclusion%3A,in%20rare%20conditions%20like%20ZGBS."
  },
  {
    title: "Paraquat poisoning: a case series of 15 survivors and narrative review.",
    journal: "Annals of Medicine and Surgery",
    year: 2025,
    date: "May",
    authors: "Pasam SS , Majety SK, Nayeem O, Mishra D, Chakra S, Singh R, Karuchola MP, Anumolu A.",
    abstract: "Paraquat (PQ) poisoning is a grave concern in developing countries due to its wide availability. Acute paraquat poisoning can have both systemic and local manifestations, with mortality rates that can reach as high as 90%; pulmonary complications and multiple organ dysfunction syndromes being major causes. This case series is a unique retrospective observational study of 15 survivors from South India.",
    keywords: ["Neurotoxicity of Paraquat", "Paraquat and Hemodialysis", "Paraquat and N-acetyl Cysteine", "Paraquat Poisoning", "Paraquat Prognosis"],
    link: "https://pubmed.ncbi.nlm.nih.gov/40337403/#:~:text=This%20case%20series%20is%20a,varying%20amounts%20of%20paraquat%20dichloride."
  },
  {
    title: "Blockchain in Healthcare Data ManagementThe interplay of immunity and growth: a case of combined variable immunodeficiency and growth hormone deficiency. ",
    journal: "Annals of Medicine and Surgery",
    year: 2024,
    date: "November",
    authors: "Majety SK, Modh S, Mishra D, Alam N, Suvvari TK, Pagadala CGM, Muppana G.",
    abstract: "",
    link: "#"
  },
  {
    title: "A case report of tuberculous meningitis resulting in irreversible visual impairment due to delayed diagnosis",
    journal: "Clinical Case Reports",
    year: 2024,
    date: "August",
    authors: "Lin EL, Gulhane SA, Majety SK, Lakkamaneni ST, Lekkala P.",
    abstract: "",
    link: "#"
  },
  {
    title: "Atypical Presentation of L3 Vertebral Body Osteochondroma Mimicking Cauda Equina Syndrome: A Case Report.",
    journal: "Annals of Medicine and Surgery",
    year: 2025,
    date: "August",
    authors: "Agarwal S, Majety SK, Agarwal R, Veluru C, Earni SC, Anumol A.",
    abstract: "",
    link: "#"
  },
  {
    title: "Hidden Hunger: The Alarming Rise of Protein-Energy Malnutrition in Older Adults of High-Income Countries",
    journal: "Journal of American Geriatic Society",
    year: 2025,
    date: "April",
    authors: "Ponnaluri A, Majety SK, Musallam S, Agarwal S, Rangan P, Agarwal N.",
    abstract: "",
    link: "#"
  }
];

const conferencePublications: Publication[] = [
  {
    title: "Next-Generation Healthcare: AI and Beyond",
    journal: "International Medical Innovation Conference",
    year: 2023,
    date: "July 2023",
    authors: "Majety S.K., Roberts A.",
    abstract: "Keynote presentation on the future of healthcare technology, focusing on AI integration and emerging technologies.",
    keywords: ["Healthcare Innovation", "Artificial Intelligence", "Future Tech"],
    impactFactor: 4.0,
    link: "#"
  },
  {
    title: "Remote Patient Monitoring Systems",
    journal: "Global Digital Health Summit",
    year: 2023,
    date: "May 2023",
    authors: "Majety S.K., White B.",
    abstract: "Presentation on innovative remote patient monitoring systems and their impact on healthcare delivery.",
    keywords: ["Remote Monitoring", "Digital Health", "Patient Care"],
    impactFactor: 3.8,
    link: "#"
  },
  {
    title: "ML Models in Medical Imaging Analysis",
    journal: "Medical AI Symposium",
    year: 2022,
    date: "November 2022",
    authors: "Majety S.K., Garcia M.",
    abstract: "Discussion of advanced machine learning models in medical imaging analysis and diagnosis.",
    keywords: ["Machine Learning", "Medical Imaging", "AI"],
    impactFactor: 3.9,
    link: "#"
  },
  {
    title: "Cybersecurity in Healthcare Systems",
    journal: "Healthcare Security Conference",
    year: 2022,
    date: "August 2022",
    authors: "Majety S.K., Lee J.",
    abstract: "Analysis of cybersecurity challenges and solutions in modern healthcare systems.",
    keywords: ["Cybersecurity", "Healthcare IT", "Data Protection"],
    impactFactor: 3.7,
    link: "#"
  },
  {
    title: "Digital Transformation in Clinical Trials",
    journal: "Clinical Research Innovation Forum",
    year: 2022,
    date: "June 2022",
    authors: "Majety S.K., Taylor R.",
    abstract: "Exploring digital technologies in modernizing clinical trial processes.",
    keywords: ["Clinical Trials", "Digital Transformation", "Research"],
    impactFactor: 3.6,
    link: "#"
  },
  {
    title: "Smart Hospitals: IoT Integration",
    journal: "Healthcare Technology Summit",
    year: 2022,
    date: "March 2022",
    authors: "Majety S.K., Kumar P.",
    abstract: "Discussion on implementing IoT solutions in hospital environments.",
    keywords: ["IoT", "Smart Hospitals", "Healthcare Technology"],
    impactFactor: 3.8,
    link: "#"
  },
  {
    title: "Smart Hospitals: IoT Integration",
    journal: "Healthcare Technology Summit",
    year: 2022,
    date: "March 2022",
    authors: "Majety S.K., Kumar P.",
    abstract: "Discussion on implementing IoT solutions in hospital environments.",
    keywords: ["IoT", "Smart Hospitals", "Healthcare Technology"],
    impactFactor: 3.8,
    link: "#"
  }
];

// Posters: no abstract/keywords/links
const posterPresentations: PosterPresentation[] = [
  {
    title: "State-wise and National Trends of Type 1 and Type 2 Diabetes Mellitus in India: A Systematic Analysis from the Global Burden of Disease Study 2021",
    journal: "Association of International Research (AIR), Hyderabad, India",
    year: 2025,
    date: "06 April",
    authors: "Majety SK, Kamadi H, Seelam V, Earni SC.",
  },
  {
    title: "Clinical Outcomes and Predictors of Mortality in Paraquat Poisoning: Insights from a Tertiary Care Center in South India",
    journal: "Association of International Research (AIR), Hyderabad, India",
    year: 2025,
    date: "06 April",
    authors: " Majety SK, Pasam SS, Sakalabaktula KSK, Sandeep C, Pathipaka S, Kathare AR.",
  },
  {
    title: "Unequal Burdens: Gender, Geography, and Risk Factors Driving HIV and STI Trends in the U.S.—A GBD 2021",
    journal: "Based Systematic Analysis States of America",
    year: 2025,
    date: "19 October",
    authors: "Majety SK, Ponnaluri A, Kamadi H, Mrinmai PK, Earni SC, Seelam V. IDWeek 2025.",
  },
  {
    title: "Mapping Respiratory Infection Burden in the U.S.: State-Level and Gender-Specific Insights from GBD 2021",
    journal: "Atlanta, GA, United States of America",
    year: 2025,
    date: "19 October",
    authors: "Majety, S. K., Seelam, V., Mrinmai, P. K., Shaik, N., Kamadi, H., & Earni, S. C.",
  },
  {
    title: "Novel and Potential Biomarkers in Prediction and Prognosis of Cryptococcal-IRIS: A Systematic Review.",
    journal: "Atlanta, GA, United States of America",
    year: 2025,
    date: "19 October",
    authors: "Mishra D, Alam N, Majety SK.",
  }
];

const publications = {
  peerReviewed: peerReviewedPublications,
  conferences: conferencePublications,
  posters: posterPresentations
};

const CompactPublicationCard = ({ pub }: { pub: Publication }) => (
        <motion.div 
    className="card group hover:shadow-glow transition-all duration-300 p-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-bold text-light group-hover:text-secondary transition-colors flex-1 mr-2">
          {pub.title}
        </h3>
        <span className="text-lg font-bold text-secondary whitespace-nowrap">
          {pub.year}
        </span>
      </div>
      
      <a 
        href={pub.link} 
        className="text-secondary text-xs hover:underline flex items-center gap-1 mt-auto"
      >
        Read full paper
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
          </motion.div>
);

const PublicationCard = ({ pub }: { pub: Publication }) => (
            <motion.div 
    className="card group hover:shadow-glow transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
    <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-light group-hover:text-secondary transition-colors flex-1 mr-4">
                    {pub.title}
                  </h3>
                  <span className="text-2xl font-bold text-secondary whitespace-nowrap">
                      {pub.year}
                  </span>
                  </div>
                
                <div className="flex flex-wrap gap-2 mb-3 text-sm">
                  <span className="text-accent">{pub.journal}</span>
                  <span className="text-gray">•</span>
                  <span className="text-gray">{pub.authors}</span>
                </div>
                
                <p className="text-gray mb-4 line-clamp-3">
                  {pub.abstract}
                </p>
                
                {pub.keywords && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-primary/50 text-xs text-gray rounded-full border border-gray/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
                
      <div className="flex justify-between items-center mt-auto">
                  {pub.impactFactor && (
                    <div className="text-sm">
                      <span className="text-gray">Impact Factor: </span>
                      <span className="text-accent font-semibold">{pub.impactFactor}</span>
                    </div>
                  )}
                  
                    <a 
                      href={pub.link} 
                    className="text-secondary text-sm hover:underline flex items-center gap-1"
                    >
                      Read full paper
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                </div>
              </div>
            </motion.div>
);

// Posters: no links/abstracts
const CompactPosterCard = ({ poster }: { poster: PosterPresentation }) => (
  <motion.div 
    className="card group hover:shadow-glow transition-all duration-300 p-3"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-bold text-light group-hover:text-secondary transition-colors flex-1 mr-2">
          {poster.title}
        </h3>
        <span className="text-lg font-bold text-secondary whitespace-nowrap">
          {poster.year}
        </span>
      </div>
      <div className="text-xs text-gray">
        <span className="text-accent">{poster.journal}</span>
        <span className="mx-1">•</span>
        <span>{poster.date}</span>
      </div>
      <div className="text-xs text-gray mt-1">{poster.authors}</div>
    </div>
  </motion.div>
);

const PosterCard = ({ poster }: { poster: PosterPresentation }) => (
  <motion.div 
    className="card group hover:shadow-glow transition-all duration-300 h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-light group-hover:text-secondary transition-colors flex-1 mr-4">
          {poster.title}
        </h3>
        <span className="text-2xl font-bold text-secondary whitespace-nowrap">
          {poster.year}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-2 text-sm">
        <span className="text-accent">{poster.journal}</span>
        <span className="text-gray">•</span>
        <span className="text-gray">{poster.date}</span>
      </div>
      <div className="text-gray text-sm">{poster.authors}</div>
    </div>
  </motion.div>
);

const StatCard = ({ title, count, icon }: { title: string; count: number; icon: string }) => {
  const reducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute -inset-3 rounded-xl opacity-30 blur-xl bg-gradient-to-tr from-secondary to-primary"
        animate={reducedMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="flex flex-col items-center gap-4 relative z-10">
        <span className="text-4xl">{icon}</span>
        <div className="text-center">
          <motion.p 
            className="text-4xl font-bold text-secondary mb-2"
            animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {count}+
          </motion.p>
          <h4 className="text-sm text-gray-400">{title}</h4>
        </div>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  const [expandedSections, setExpandedSections] = React.useState({
    peerReviewed: false,
    conferences: false,
    posters: false
  });

  const peerReviewedRef = React.useRef<HTMLElement>(null);
  const conferencesRef = React.useRef<HTMLElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -100; // Adjust this value to account for any fixed headers
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="relative">
      {/* Minimal floating elements */}
      <FloatingParticle
        size={4}
        position={{ top: '10%', right: '20%' }}
        color="rgba(139, 92, 246, 0.6)"
        duration={8}
      />
      <FloatingParticle
        size={3}
        position={{ bottom: '30%', left: '15%' }}
        color="rgba(4, 71, 171, 0.6)"
        delay={0.5}
        duration={6}
      />
      
      <div className="container mx-auto px-6 pt-24 pb-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-secondary/10 to-accent/10 px-8 py-3 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">
              Research & <span className="gradient-text">Publications</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contributing to medical knowledge through research and scholarly articles
          </motion.p>

          {/* Collaborate CTA Button */}
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_200%] text-white font-bold shadow-lg hover:shadow-accent/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{ duration: 0.3 }}
          >
            Collaborate with Me
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Publications Sections */}
        <div className="space-y-16">
          {/* Peer Reviewed Publications */}
          <motion.section
            ref={peerReviewedRef}
            layout
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-3xl relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📄
              </motion.span>
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-2xl md:text-3xl font-bold text-light relative z-10">
                  Peer Reviewed <span className="gradient-text">Publications</span>
                </h3>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              layout
            >
              {/* First 6 cards */}
              {publications.peerReviewed.slice(0, 6).map((pub, index) => (
                <div key={`peer-${index}`}>
                  <PublicationCard pub={pub} />
                </div>
              ))}

              {/* Additional cards in smaller size */}
              {expandedSections.peerReviewed && (
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {publications.peerReviewed.slice(6, 10).map((pub, index) => (
                      <div key={`peer-extra-${index}`}>
                        <CompactPublicationCard pub={pub} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            {publications.peerReviewed.length > 6 && (
              <motion.button
                onClick={() => toggleSection('peerReviewed')}
                className="mt-6 text-secondary hover:text-accent flex items-center gap-2 mx-auto font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {expandedSections.peerReviewed ? 'Show Less' : 'See More'}
                <motion.svg
                  animate={{ rotate: expandedSections.peerReviewed ? 180 : 0 }}
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            )}
          </motion.section>

          {/* Conferences */}
          <motion.section
            ref={conferencesRef}
            layout
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-3xl relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌍
              </motion.span>
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-2xl md:text-3xl font-bold text-light relative z-10">
                  Work with International <span className="gradient-text">Conferences</span>
                </h3>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              layout
            >
              {/* First 6 cards */}
              {publications.conferences.slice(0, 6).map((pub, index) => (
                <div key={`conf-${index}`}>
                  <PublicationCard pub={pub} />
                </div>
              ))}

              {/* Additional cards in smaller size */}
              {expandedSections.conferences && (
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {publications.conferences.slice(6, 12).map((pub, index) => (
                      <div key={`conf-extra-${index}`}>
                        <CompactPublicationCard pub={pub} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            {publications.conferences.length > 6 && (
              <motion.button
                onClick={() => toggleSection('conferences')}
                className="mt-6 text-secondary hover:text-accent flex items-center gap-2 mx-auto font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {expandedSections.conferences ? 'Show Less' : 'See More'}
                <motion.svg
                  animate={{ rotate: expandedSections.conferences ? 180 : 0 }}
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            )}
          </motion.section>

          {/* Paper Presentations */}
          <motion.section
            layout
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-3xl relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🖼️
              </motion.span>
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-2xl md:text-3xl font-bold text-light relative z-10">
                  Paper <span className="gradient-text">Presentations</span>
                </h3>
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              layout
            >
              {/* First 4 cards */}
              {publications.posters.slice(0, 4).map((poster, index) => (
                <div key={`poster-${index}`}>
                  <PosterCard poster={poster} />
                </div>
              ))}

              {/* Additional cards in smaller size */}
              {expandedSections.posters && (
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {publications.posters.slice(4, 8).map((poster, index) => (
                      <div key={`poster-extra-${index}`}>
                        <CompactPosterCard poster={poster} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            {publications.posters.length > 4 && (
              <motion.button
                onClick={() => toggleSection('posters')}
                className="mt-6 text-secondary hover:text-accent flex items-center gap-2 mx-auto font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {expandedSections.posters ? 'Show Less' : 'See More'}
                <motion.svg
                  animate={{ rotate: expandedSections.posters ? 180 : 0 }}
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            )}
          </motion.section>

          {/* Stats Section */}
          <motion.section 
            className="mt-24 relative py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-accent/5 to-primary/0 rounded-3xl" />
            
            
            
            <motion.div 
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <StatCard title="Under Review" count={8} icon="🔎" />
              <StatCard title="Ongoing Projects" count={6} icon="🚀" />
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Publications; 