import { notFound } from 'next/navigation';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import BlogDetails from '../../../components/sections/BlogDetails';
import BackToTop from '../../../components/ui/BackToTop';
import { common, pages, sections } from '../../../components/types';

export function generateStaticParams() {
  return sections.blog_details.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = sections.blog_details.items.find((item) => item.slug === slug);
  return { title: post ? `${post.title} - FinTrust` : pages.blog_details.metadata.title };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = sections.blog_details.items.find((item) => item.slug === slug);
  if (!post) notFound();
  const latest = sections.blogs.items.filter((item) => !item.href.endsWith(`/${slug}`)).slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={pages.blog_details.breadcrumb!} />
        <BlogDetails
          data={post}
          latest={latest}
          sidebar={{
            author_label: sections.blog_details.author_label,
            latest_title: sections.blog_details.latest_title,
            categories_title: sections.blog_details.categories_title,
            categories: sections.blog_details.categories,
          }}
        />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
