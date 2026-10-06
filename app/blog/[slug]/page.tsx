import { notFound } from 'next/navigation';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import BlogDetails from '../../../components/sections/BlogDetails';
import BackToTop from '../../../components/ui/BackToTop';
import { common, sections } from '../../../components/types';

export function generateStaticParams() {
  return sections.blogs.items.map((item) => ({ slug: item.href.split('/').pop() as string }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = sections.blogs.items.find((item) => item.href.endsWith(slug));
  return { title: post ? `FinTrust - ${post.title}` : 'Blog - FinTrust' };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = sections.blogs.items.find((item) => item.href.endsWith(`/${slug}`));
  if (!post) notFound();
  const related = sections.blogs.items.filter((item) => item.href !== post.href);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb title="Blog Details" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        <BlogDetails data={post} related={related} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
