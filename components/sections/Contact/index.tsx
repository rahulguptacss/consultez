'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactProps } from '../../types';

const icons = { MapPin, Phone, Mail };

export default function Contact({ data }: ContactProps) {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/thank-you');
  };

  return (
    <section className="bg-[#f7f3ee] px-5 py-16">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="text-[12px] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">{data.subtitle}</span>
          <h2 className="mt-3 font-serif text-[36px] leading-tight text-[#2b2422]">
            {data.title_line1} <span className="text-[#411516]">{data.title_highlight}</span>
          </h2>
          <p className="mt-3 text-[16px] leading-7 text-[#6b615c]">{data.description}</p>
          <div className="mt-6 space-y-3">
            {data.cards.map((card) => {
              const Icon = icons[card.icon as keyof typeof icons] ?? MapPin;
              const body = (
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#411516] text-[#f3e6c8]">
                    <Icon size={16} />
                  </span>
                  <div>
                    <div className="text-[13px] text-[#8a6a3b]">{card.title}</div>
                    <div className="text-[15px] font-medium text-[#2b2422]">{card.value}</div>
                  </div>
                </div>
              );
              return card.href ? <a key={card.title} href={card.href}>{body}</a> : <div key={card.title}>{body}</div>;
            })}
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-[24px] bg-white p-6 sm:p-8">
          <h3 className="font-serif text-[28px] text-[#2b2422]">{data.form.title}</h3>
          <p className="mt-2 text-[15px] text-[#6b615c]">{data.form.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder={data.form.placeholders.name} className="rounded-xl border border-[#eadfd4] px-4 py-3 outline-none focus:border-[#c6a36b]" />
            <input required type="email" name="email" placeholder={data.form.placeholders.email} className="rounded-xl border border-[#eadfd4] px-4 py-3 outline-none focus:border-[#c6a36b]" />
            <input required name="phone" placeholder={data.form.placeholders.phone} className="rounded-xl border border-[#eadfd4] px-4 py-3 outline-none focus:border-[#c6a36b] sm:col-span-2" />
            <textarea required name="message" rows={5} placeholder={data.form.placeholders.message} className="rounded-xl border border-[#eadfd4] px-4 py-3 outline-none focus:border-[#c6a36b] sm:col-span-2" />
          </div>
          <button type="submit" className="mt-5 rounded-full bg-[#411516] px-6 py-3 text-[15px] font-semibold text-white">
            {data.form.button_text}
          </button>
        </form>
      </div>
    </section>
  );
}
