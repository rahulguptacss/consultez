'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PortfolioProps } from '../../types';
import Reveal from '../../ui/Reveal';

export default function Portfolio({ data }: PortfolioProps) {
  const pageSize = 6;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(data.items.length / pageSize);
  const visible = data.items.slice(page * pageSize, page * pageSize + pageSize);

  const shift = (dir: number) => setPage((value) => Math.min(Math.max(value + dir, 0), pageCount - 1));

  return (
    <section className="bg-[#fbf7f4] px-3 py-10 sm:px-4 sm:py-14">
      <Reveal className="mx-auto max-w-[1180px]">
        <div className="flex items-center">
          <span className="h-[2px] w-7 rounded-full bg-[#c6a36b]" />
          <span className="rounded-full border border-[#c6a36b] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] text-[#411516] uppercase">{data.subtitle}</span>
          <span className="h-[2px] w-14 rounded-full bg-[#c6a36b]" />
        </div>
        <div className="mt-5 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="shrink-0 text-[30px] leading-[1.12] font-extrabold tracking-[-0.02em] text-[#411516] sm:text-[42px] lg:whitespace-nowrap lg:text-[46px]" style={{ fontWeight: 800 }}>
            {data.title_line1} <span className="text-[#c4a15a]">{data.title_highlight}</span>
          </h2>
          <p className="max-w-[420px] text-[15px] leading-7 text-[#6d6560] lg:mx-4">{data.description}</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <Reveal key={`${item.title}-${page}`} delay={index * 0.06}>
              <motion.article whileHover={{ y: -6 }} className="pb-4">
                <Link href={`/portfolio/${item.slug}`} className="block">
                <img src={item.image} alt="" className="h-[260px] w-full rounded-[22px] object-cover object-top sm:h-[300px]" />
                <div className="relative z-10 mx-3 -mt-20 flex items-center justify-between gap-3 rounded-[18px] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(65,21,22,0.08)] sm:-mt-24 sm:px-5">
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#411516]">{item.category}</p>
                    <h3 className="mt-1 text-[16px] leading-6 font-bold text-[#163026] sm:text-[18px] hover:text-[#c4a15a]">{item.title}</h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#411516]/25 text-[#411516]">
                    <ArrowRight size={16} />
                  </span>
                </div>
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button type="button" aria-label="Previous" onClick={() => shift(-1)} disabled={page === 0} className="grid h-10 w-10 place-items-center rounded-full border border-[#411516] text-[#411516] disabled:opacity-40">
              <ArrowLeft size={16} />
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button key={index} type="button" onClick={() => setPage(index)} className={`grid h-10 w-10 place-items-center rounded-full text-[15px] font-semibold ${page === index ? 'bg-[#411516] text-white' : 'border border-[#411516]/30 text-[#411516]'}`}>
                {index + 1}
              </button>
            ))}
            <button type="button" aria-label="Next" onClick={() => shift(1)} disabled={page === pageCount - 1} className="grid h-10 w-10 place-items-center rounded-full border border-[#411516] text-[#411516] disabled:opacity-40">
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </Reveal>
    </section>
  );
}
