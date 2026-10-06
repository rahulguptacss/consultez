'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, LayoutGrid, Mail, MapPin, Pencil, Phone, Send } from 'lucide-react';
import { ContactProps } from '../../types';

const icons = { MapPin, Phone, Mail };

const field = 'h-12 w-full rounded-lg border border-[#efe6e1] bg-white px-10 text-[14px] text-[#3a342f] outline-none placeholder:text-[#b7aea8] focus:border-[#c6a36b]';

export default function Contact({ data }: ContactProps) {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [subjectOpen, setSubjectOpen] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/thank-you');
  };

  return (
    <section className="bg-[#fbf7f4] px-3 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-4 md:grid-cols-3">
          {data.cards.map((card, index) => {
            const Icon = icons[card.icon as keyof typeof icons] ?? MapPin;
            return (
              <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 }} whileHover={{ y: -6 }} className="flex h-full items-center gap-4 rounded-[18px] bg-[#f7eee9] py-3 pr-3 pl-4">
                  <motion.span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-[#f6ddd8] text-[#d15a52]" initial={{ scale: 0.6 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 260, delay: index * 0.1 }}>
                    <Icon size={32} strokeWidth={1.75} />
                  </motion.span>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-extrabold text-[#1c1a17]" style={{ fontWeight: 800 }}>{card.title}</h3>
                    <motion.span className="mt-1.5 block h-[3px] w-8 origin-left rounded-full bg-[#e2c07a]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }} />
                    <div className="mt-2">
                      {card.lines.map((line, lineIndex) => (
                        <p key={`${card.title}-${lineIndex}`} className="text-[14px] leading-6 text-[#8d8680]">
                          {card.href ? <a href={card.href}>{line}</a> : line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_460px]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="flex items-center gap-3">
              <motion.span className="h-[2px] w-8 origin-left rounded-full bg-[#e2c07a]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
              <span className="text-[12px] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">{data.subtitle}</span>
              <motion.span className="h-[2px] w-10 origin-left rounded-full bg-[#e2c07a]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} />
            </div>
            <h2 className="mt-3 text-[28px] leading-tight font-extrabold text-[#411516] sm:text-[36px]" style={{ fontWeight: 800 }}>
              {data.title_line1} <span className="text-[#c23b32]">{data.title_highlight}</span>
            </h2>
            <p className="mt-3 max-w-[520px] text-[14px] leading-7 text-[#6d6560] sm:text-[15px]">{data.description}</p>
            <motion.div className="mt-5 overflow-hidden rounded-[16px]" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <iframe title="Office map" src={data.map_embed} className="h-[220px] w-full border-0 sm:h-[320px]" loading="lazy" />
            </motion.div>
          </motion.div>

          <motion.form onSubmit={onSubmit} className="relative overflow-hidden rounded-[22px] bg-[#fbf6f4] p-5 shadow-[0_10px_30px_rgba(65,21,22,0.05)] sm:p-7" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <motion.span className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[#f6e4e1]" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
            <div className="relative flex items-center gap-3">
              <span className="text-[12px] font-semibold tracking-[0.14em] text-[#c4a15a] uppercase">{data.form.subtitle}</span>
              <motion.span className="h-[2px] w-12 origin-left rounded-full bg-[#e2c07a]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
            </div>
            <h3 className="relative mt-3 text-[28px] font-extrabold sm:text-[34px]" style={{ fontWeight: 800 }}>
              <span className="text-[#c23b32]">{data.form.title}</span> <span className="text-[#1d2b24]">{data.form.title_highlight}</span>
            </h3>
            <p className="relative mt-2 text-[13px] leading-6 text-[#8d8680]">{data.form.description}</p>
            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              <label className="relative">
                <UserIcon />
                <input required name="name" placeholder={data.form.placeholders.name} className={field} />
              </label>
              <label className="relative">
                <Mail size={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#b7aea8]" />
                <input required type="email" name="email" placeholder={data.form.placeholders.email} className={field} />
              </label>
              <label className="relative">
                <Phone size={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#b7aea8]" />
                <input name="phone" inputMode="numeric" placeholder={data.form.placeholders.phone} className={field} onChange={(event) => { event.target.value = event.target.value.replace(/\D/g, ''); }} />
              </label>
              <div className="relative">
                <LayoutGrid size={16} className="pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 text-[#b7aea8]" />
                <input type="hidden" name="subject" value={subject} required />
                <button type="button" onClick={() => setSubjectOpen((open) => !open)} className={`${field} flex items-center pr-9 text-left ${subject ? 'text-[#3a342f]' : 'text-[#b7aea8]'}`}>
                  {subject || data.form.placeholders.subject}
                </button>
                <ChevronDown size={16} className={`pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#9a918b] transition-transform ${subjectOpen ? 'rotate-180' : ''}`} />
                {subjectOpen && (
                  <ul className="absolute top-[52px] z-20 w-full overflow-hidden rounded-lg border border-[#efe6e1] bg-white py-1 shadow-[0_12px_28px_rgba(65,21,22,0.08)]">
                    {data.form.subjects.map((item) => (
                      <li key={item}>
                        <button type="button" onClick={() => { setSubject(item); setSubjectOpen(false); }} className={`w-full px-4 py-2.5 text-left text-[14px] hover:bg-[#fbf6f4] ${subject === item ? 'font-semibold text-[#411516]' : 'text-[#6d6560]'}`}>
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <label className="relative sm:col-span-2">
                <Pencil size={16} className="pointer-events-none absolute top-4 left-3 text-[#b7aea8]" />
                <textarea required name="message" rows={4} placeholder={data.form.placeholders.message} className="w-full rounded-lg border border-[#efe6e1] bg-white py-3 pr-4 pl-10 text-[14px] text-[#3a342f] outline-none placeholder:text-[#b7aea8] focus:border-[#c6a36b]" />
              </label>
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative mt-4 inline-flex items-center gap-3 rounded-full bg-[#9d2430] py-3 pr-5 pl-5 text-[15px] font-semibold text-white">
              <Send size={16} />
              {data.form.button_text}
              <ArrowRight size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#b7aea8]" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
    </svg>
  );
}
