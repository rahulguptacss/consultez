import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import Breadcrumb from '../../components/sections/Breadcrumb';
import About from '../../components/sections/About';
import Team from '../../components/sections/Team';
import Testimonials from '../../components/sections/Testimonials';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = { title: pages.about.metadata.title };

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title={pages.about.title} breadcrumb={[{ label: 'Home', href: '/' }, { label: pages.about.pageName }]} />
        <About data={sections.about} />
        <Team data={sections.team} />
        <Testimonials data={sections.testimonials} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
