import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
}

export interface HeaderData {
  logo_text: string;
  links: LinkType[];
  phone: string;
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_text: string;
  description: string;
  quick_links: LinkType[];
  our_services: LinkType[];
  company: LinkType[];
  headings: { quick_links: string; our_services: string; company: string; contact: string };
  contact: { address: string; email: string; phone: string };
  contact_labels: { address: string; email: string; phone: string };
  copyright: string;
}

export interface HeroSectionData {
  eyebrow: string;
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  button: { text: string; href: string };
  image: string;
}

export interface AboutSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  image_secondary: string;
  cards: { title: string; description: string; icon: string }[];
  stats: { value: string; label: string }[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  items: ServiceItem[];
}

export interface TeamSectionData {
  subtitle: string;
  title_line1: string;
  title_mobile_line1: string;
  title_mobile_prefix: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  members: { name: string; role: string; image: string }[];
}

export interface FaqSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  items: { question: string; answer: string }[];
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  reviews: { text: string; author: string; role: string; avatar: string; rating: number }[];
}

export interface BlogItem {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface BlogsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  items: BlogItem[];
}

export interface PortfolioSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  items: { title: string; category: string; image: string }[];
}

export interface ContactSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  cards: { icon: string; title: string; value: string; href?: string }[];
  form: {
    title: string;
    description: string;
    button_text: string;
    placeholders: { name: string; email: string; phone: string; message: string };
  };
}

export interface ServiceDetailsData {
  slug: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export interface ThankYouSectionData {
  title: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
}

export interface HeaderProps { data: HeaderData }
export interface FooterProps { data: FooterData }
export interface HeroProps { data: HeroSectionData }
export interface AboutProps { data: AboutSectionData }
export interface ServicesProps { data: ServicesSectionData; limit?: number }
export interface TeamProps { data: TeamSectionData }
export interface FaqProps { data: FaqSectionData }
export interface TestimonialsProps { data: TestimonialsSectionData }
export interface BlogsProps { data: BlogsSectionData; showButton?: boolean }
export interface PortfolioProps { data: PortfolioSectionData }
export interface ContactProps { data: ContactSectionData }
export interface ServiceDetailsProps { data: ServiceDetailsData; allServices: ServiceItem[] }
export interface BlogDetailsProps { data: BlogItem; related: BlogItem[] }
export interface ThankYouProps { data: ThankYouSectionData }

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata: { title: string };
  components: PageComponent[];
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Finance.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

export function toSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
