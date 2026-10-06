'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Megaphone, TrendingUp, Users } from 'lucide-react';
import { ServicesProps } from '../../types';
import Reveal from '../../ui/Reveal';

const icons = { TrendingUp, Megaphone, Users };

export default function Services({ data, limit }: ServicesProps) {
  const items = limit ? data.items.slice(0, limit) : data.items;

  return (
    <section className="relative overflow-hidden bg-[#f7f3ee] px-3 py-12 sm:px-4 sm:py-14">
      <div className="pointer-events-none absolute top-[210px] -right-28 h-72 w-72 rounded-full border border-[#efe4d8]" />
      <Reveal className="mx-auto max-w-[1240px]">
        <div className="flex items-center">
          <span className="h-[2px] w-7 rounded-full bg-[#c6a36b]" />
          <span className="rounded-full border border-[#c6a36b] px-4 py-1.5 text-[12px] font-semibold tracking-[0.18em] text-[#411516] uppercase">
            {data.subtitle}
          </span>
          <span className="h-[2px] w-14 rounded-full bg-[#c6a36b]" />
        </div>
        <div className="mt-5 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="shrink-0 text-[34px] leading-[1.12] font-extrabold tracking-[-0.02em] text-[#411516] sm:text-[42px] lg:text-[46px]" style={{ fontWeight: 800 }}>
            {data.title_line1}
            <span className="block text-[#c4a15a]">{data.title_highlight}</span>
          </h2>
          <p className="max-w-[420px] text-[15px] leading-7 font-normal text-[#6d6560] lg:mx-4">{data.description}</p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href={data.button.href} className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#411516] px-8 py-3.5 text-[16px] font-medium text-white">
              {data.button.text}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? TrendingUp;
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.article whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="overflow-hidden rounded-[30px] bg-white pb-5 shadow-[0_12px_40px_rgba(65,21,22,0.06)]">
                  <div className="relative">
                    <img src={item.image} alt="" className="h-[210px] w-full object-cover" />
                    <span className="absolute bottom-0 left-6 grid h-[74px] w-[74px] translate-y-1/2 place-items-center rounded-full border border-[#e2c07a] bg-[#411516] text-[#e2c07a]">
                      <Icon size={30} strokeWidth={1.6} />
                    </span>
                  </div>
                  <div className="px-5 pt-9">
                    <h3 className="text-[26px] font-extrabold text-[#411516]" style={{ fontWeight: 800 }}>{item.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-6 text-[#8b827c]">{item.description}</p>
                    <Link href={item.link} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f6eee8] px-6 py-2.5 text-[15px] font-medium text-[#411516]">
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
