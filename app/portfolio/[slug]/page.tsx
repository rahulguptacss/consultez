import { notFound } from 'next/navigation';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import PortfolioDetails from '../../../components/sections/PortfolioDetails';
import BackToTop from '../../../components/ui/BackToTop';
import { common, pages, sections } from '../../../components/types';

export function generateStaticParams() {
  return sections.portfolio_details.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = sections.portfolio_details.items.find((project) => project.slug === slug);
  return { title: item ? `${item.title} - FinTrust` : pages.portfolio_detail.metadata.title };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = sections.portfolio_details.items.find((project) => project.slug === slug);
  if (!item) notFound();
  const section = sections.portfolio_details;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={{ ...pages.portfolio_detail.breadcrumb!, title: item.title }} />
        <PortfolioDetails
          data={item}
          labels={{
            about_label: section.about_label,
            info_title: section.info_title,
            client_label: section.client_label,
            type_label: section.type_label,
            date_label: section.date_label,
          }}
        />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
