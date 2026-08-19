import { ArrowRight, HeartPulse, Activity, Brain, RefreshCw, UserCheck, Sun, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const WHATSAPP_LINK = "https://wa.me/5532999545982?text=Olá,%20Ramon!%20Gostaria%20de%20saber%20mais%20sobre%20o%20seu%20acompanhamento.";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#D32F2F]/30 flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0A0A0A]/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-serif tracking-tighter text-white">Ramon Alberto</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D32F2F] font-bold">Educação Física & Saúde</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <span className="text-[11px] font-mono opacity-40 uppercase">CREF 031983-G/MG</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 mb-8 border border-[#D32F2F] text-[#D32F2F] text-[10px] uppercase tracking-widest font-bold rounded-full">Atendimento Humanizado</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white max-w-4xl">
          Mais do que transformar o corpo, transforme sua <span className="italic text-[#D32F2F]">relação com a saúde</span>.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light">
          Meu propósito é ajudar você a alcançar seus objetivos através do exercício físico, do conhecimento e de um acompanhamento individualizado.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D32F2F] text-white px-10 py-5 font-bold uppercase tracking-tighter text-sm transition-all shadow-[0_0_20px_rgba(211,47,47,0.3)] hover:shadow-[0_0_30px_rgba(211,47,47,0.5)]"
          >
            Iniciar Minha Jornada
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-tighter text-sm hover:bg-white/5 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-white/5 border border-white/10">
            {/* Placeholder - you can replace this src with your uploaded image URL later */}
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop"
              alt="Ramon Alberto - Professor de Educação Física"
              fill
              className="object-cover grayscale opacity-80 mix-blend-lighten"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#D32F2F] mb-4 block">Sobre Mim</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">
                Muito prazer, sou Ramon Alberto
              </h2>
            </div>
            
            <div className="space-y-5 text-lg text-white/60 leading-relaxed font-light">
              <p>
                Sou profissional de Educação Física formado há 10 anos. Desde o início da minha carreira, mantenho um compromisso inegociável com o aprendizado contínuo e a atualização profissional.
              </p>
              <p>
                Acredito que o corpo humano é complexo e fascinante. Por isso, continuo investindo fortemente em minha formação — atualmente realizando uma nova graduação, além de pós-graduação e diversos cursos de atualização. Meu objetivo é ampliar constantemente meus conhecimentos para oferecer a você um atendimento cada vez mais qualificado, seguro e embasado cientificamente.
              </p>
              <div className="pt-6 pb-2">
                <p className="font-serif text-white/80 border-l border-[#D32F2F] pl-6 italic text-xl leading-relaxed">
                  "Cada pessoa possui uma realidade, uma história e necessidades diferentes. Meu trabalho vai muito além da estética; trata-se de construir uma base sólida para a sua vida."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-24 bg-[#0A0A0A] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#D32F2F] mb-4 block">Metodologia</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white">
                Foco no que realmente importa
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed font-light">
              Um acompanhamento desenhado para as suas necessidades reais, priorizando sua saúde física e mental a longo prazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { title: 'Emagrecimento', icon: Activity, desc: 'Estratégias saudáveis e sustentáveis, sem radicalismos e respeitando o seu corpo.' },
              { title: 'Lipedema', icon: HeartPulse, desc: 'Abordagem especializada com foco no alívio de sintomas e melhora da qualidade de vida.' },
              { title: 'Exercício e Saúde', icon: Sun, desc: 'Prevenção e tratamento de condições metabólicas através do movimento consciente.' },
              { title: 'Qualidade de Vida', icon: RefreshCw, desc: 'Mais disposição, energia e mobilidade para você aproveitar o seu dia a dia.' },
              { title: 'Mudança de Hábitos', icon: Brain, desc: 'Apoio contínuo para construir rotinas reais que você consiga manter a longo prazo.' },
              { title: 'Individualizado', icon: UserCheck, desc: 'Treinos cuidadosamente adaptados à sua realidade, limitações e objetivos.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0A] p-10 flex flex-col gap-6 group hover:bg-white/[0.02] transition-colors">
                <div className="text-[#D32F2F]">
                  <item.icon className="w-8 h-8 stroke-[1]" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed font-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0A0A0A] border-t border-white/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D32F2F]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Pronto para mudar a sua relação com o exercício?
          </h2>
          <p className="text-lg text-white/40 mb-12 font-light leading-relaxed">
            Vamos juntos construir uma rotina que respeita sua história e foca no seu bem-estar físico e mental. O primeiro passo é simples.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-tighter text-sm hover:bg-white/5 transition-colors flex items-center gap-3"
          >
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2 text-white">Localização</span>
              <span className="text-xs font-light text-white/80">Atendimento Presencial e Online</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2 text-white">Contato Direto</span>
              <span className="text-xs font-light text-white/80">(32) 99954-5982</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2 text-white">Experiência</span>
              <span className="text-xs font-light text-white/80">10 Anos Formado</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="hidden md:block h-[1px] w-12 bg-white/10"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 text-white">Individualizado • Ético • Humano</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
