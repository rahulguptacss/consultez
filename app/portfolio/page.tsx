import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Portfolio from '../../components/sections/Portfolio';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = { title: pages.portfolio.metadata.title };

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={pages.portfolio.breadcrumb!} />
        <Portfolio data={sections.portfolio} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
