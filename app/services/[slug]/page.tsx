import { notFound } from 'next/navigation';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import ServiceDetails from '../../../components/sections/ServiceDetails';
import BackToTop from '../../../components/ui/BackToTop';
import { common, pages, sections, toSlug, ServiceDetailsData } from '../../../components/types';

export function generateStaticParams() {
  return sections.services.items.map((item) => ({ slug: toSlug(item.title) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = sections.service_details.find((item) => item.slug === slug);
  return { title: service ? `FinTrust - ${service.title}` : pages.service_details.metadata.title };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const details = sections.service_details.find((item) => item.slug === slug) as ServiceDetailsData | undefined;
  if (!details) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb
          title={details.title}
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: details.title }]}
        />
        <ServiceDetails data={details} allServices={sections.services.items} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
