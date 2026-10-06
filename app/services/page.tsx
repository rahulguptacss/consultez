import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Services from '../../components/sections/Services';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = { title: pages.services.metadata.title };

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title={pages.services.title} breadcrumb={[{ label: 'Home', href: '/' }, { label: pages.services.pageName }]} />
        <Services data={sections.services} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
