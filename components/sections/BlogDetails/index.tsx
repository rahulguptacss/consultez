'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { BlogDetailsProps } from '../../types';
import Reveal from '../../ui/Reveal';

export default function BlogDetails({ data, latest, sidebar }: BlogDetailsProps) {
  return (
    <section className="bg-white px-3 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-[1180px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <Reveal>
            <div className="relative overflow-hidden rounded-[18px]">
              <motion.img src={data.image} alt="" className="h-[220px] w-full object-cover object-top sm:h-[420px]" initial={{ scale: 1.05 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
              <div className="absolute top-4 left-4 flex w-[72px] flex-col items-center rounded-xl bg-[#411516] px-2 py-3 text-center text-white">
                <Calendar size={16} />
                <span className="mt-1 text-[22px] leading-none font-extrabold" style={{ fontWeight: 800 }}>{data.day}</span>
                <span className="mt-1 text-[11px] font-semibold tracking-wide uppercase">{data.month}</span>
              </div>
            </div>
          </Reveal>
          <motion.p className="mt-4 flex items-center gap-2 text-[14px] text-[#6d6560]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <User size={16} className="text-[#411516]" />
            {sidebar.author_label}
          </motion.p>
          <motion.h2 className="mt-3 text-[22px] leading-tight font-extrabold text-[#c4a15a] sm:text-[32px]" style={{ fontWeight: 800 }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            {data.title}
          </motion.h2>
          <motion.p className="mt-3 text-[14px] leading-7 text-[#6d6560] sm:text-[15px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            {data.intro}
          </motion.p>
          <div className="mt-6 space-y-6">
            {data.sections.map((block, index) => (
              <motion.div key={block.heading} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
                <h3 className="text-[20px] font-extrabold text-[#411516] sm:text-[26px]" style={{ fontWeight: 800 }}>{block.heading}</h3>
                <motion.span className="mt-2 block h-[3px] w-10 origin-left rounded-full bg-[#e2c07a]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} />
                <p className="mt-3 text-[14px] leading-7 text-[#6d6560] sm:text-[15px]">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </article>
        <aside className="min-w-0 lg:sticky lg:top-[120px]">
          <div className="rounded-[18px] border border-[#f0e6de] bg-white p-4 shadow-[0_8px_24px_rgba(65,21,22,0.04)] sm:p-5">
            <h3 className="text-[18px] font-extrabold text-[#411516] sm:text-[20px]" style={{ fontWeight: 800 }}>{sidebar.latest_title}</h3>
            <span className="mt-2 block h-[3px] w-10 rounded-full bg-[#e2c07a]" />
            <ul className="mt-4 space-y-4">
              {latest.map((post, index) => (
                <motion.li key={post.href} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <Link href={post.href} className="flex gap-3">
                    <motion.img src={post.image} alt="" whileHover={{ scale: 1.04 }} className="h-14 w-16 shrink-0 rounded-lg object-cover" />
                    <span className="min-w-0">
                      <span className="block text-[12px] text-[#8a817b]">{post.date}</span>
                      <span className="mt-1 block text-[14px] leading-5 font-semibold text-[#411516]">{post.title}</span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
