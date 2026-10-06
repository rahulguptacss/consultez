import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Faq from '../components/sections/Faq';
import Testimonials from '../components/sections/Testimonials';
import Blogs from '../components/sections/Blogs';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections } from '../components/types';

export const metadata = { title: pages.home.metadata.title };

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#2b2422]">
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <Services data={sections.services} limit={3} />
        <Team data={sections.team} />
        <Faq data={sections.faq} />
        <Testimonials data={sections.testimonials} />
        <Blogs data={sections.blogs} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
