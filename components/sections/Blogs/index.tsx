'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BlogsProps } from '../../types';
import Reveal from '../../ui/Reveal';

export default function Blogs({ data, showButton = true }: BlogsProps) {
  return (
    <section className="relative overflow-hidden bg-[#f4efe8] px-3 py-12 sm:px-4 sm:py-14">
      <div className="pointer-events-none absolute -top-16 -right-20 h-64 w-64 rounded-full border border-[#efe4d8]" />
      <Reveal className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center">
              <span className="h-[2px] w-7 rounded-full bg-[#c6a36b]" />
              <span className="rounded-full border border-[#c6a36b] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] text-[#411516] uppercase">
                {data.subtitle}
              </span>
              <span className="h-[2px] w-14 rounded-full bg-[#c6a36b]" />
            </div>
            <h2 className="mt-4 text-[28px] leading-[1.12] font-extrabold tracking-[-0.02em] text-[#411516] sm:text-[42px]" style={{ fontWeight: 800 }}>
              {data.title_line1} <span className="block text-[#c4a15a] sm:inline">{data.title_highlight}</span>
            </h2>
            <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-[#6d6560]">{data.description}</p>
          </div>
          {showButton && (
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-fit">
              <Link href={data.button.href} className="inline-flex items-center gap-2 rounded-full bg-[#411516] px-6 py-3 text-[15px] font-medium text-white">
                {data.button.text}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.1}>
              <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 320, damping: 22 }} className="overflow-hidden rounded-[24px] bg-white pb-5 shadow-[0_10px_30px_rgba(65,21,22,0.05)]">
                <div className="relative">
                  <img src={item.image} alt="" className="h-[180px] w-full object-cover sm:h-[200px]" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#f8ebe8] px-3 py-1.5 text-[13px] font-medium text-[#411516]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M8 3v4M16 3v4M3 10h18" />
                    </svg>
                    {item.date}
                  </span>
                </div>
                <div className="px-5 pt-4">
                  <h3 className="text-[20px] leading-snug font-bold text-[#411516]">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-[#8a817b]">{item.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link href={item.href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#411516]">
                      Read More
                      <ArrowRight size={15} />
                    </Link>
                    <Link href={item.href} aria-label="Read more" className="grid h-10 w-10 place-items-center rounded-full bg-[#411516] text-white">
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
