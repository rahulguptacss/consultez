import Header from '../../components/sections/Header';
import Footer from '../../components/sections/Footer';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Blogs from '../../components/sections/Blogs';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = { title: pages.blog.metadata.title };

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title={pages.blog.title} breadcrumb={[{ label: 'Home', href: '/' }, { label: pages.blog.pageName }]} />
        <Blogs data={sections.blogs} showButton={false} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
