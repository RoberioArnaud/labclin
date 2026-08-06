import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Phone, Microscope, Stethoscope, Dna, FlaskConical, Heart, ArrowRight, MessageCircle, Clock, ShieldCheck, CalendarDays, ChevronRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/labclin-logo.png";
import mark from "@/assets/labclin-logo.png";
import heroImg from "@/assets/lab-hero.jpg";
import lucasImg from "@/assets/dr-lucas-alcantara.png";
import rafaelaImg from "@/assets/dra-rafaela-marques.png";
import cleudaliceImg from "@/assets/dra-cleudalice-ramalho.png";
import eloysaImg from "@/assets/dra-eloysa.png";
import joseWilsonImg from "@/assets/dr-jose-wilson.png";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LabClin — Laboratório e Clínica Integrada" },
      { name: "description", content: "Exames clínicos, consultas e especialistas em Cacimba de Dentro e Araruna. Agende seu atendimento pelo WhatsApp." },
      { property: "og:title", content: "LabClin — Laboratório e Clínica Integrada" },
      { property: "og:description", content: "Cuidando da sua saúde com precisão e acolhimento." },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5583982323029?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20atendimento%20na%20LabClin.";

type Professional = {
  specialty: string;
  initials?: string;
  name?: string;
  description?: string;
  tone?: string;
  image?: string;
  imagePosition?: string;
};

const professionals: Professional[] = [
  { name: "DR. LUCAS ALCÂNTARA", specialty: "Biomédico", image: lucasImg },
  { name: "Dra. Rafaela Marques", specialty: "Medicina de Família e Comunidade", image: rafaelaImg, imagePosition: "left center" },
  { name: "Dra. Cleudalice Ramalho", specialty: "Ultrassonografia", image: cleudaliceImg, imagePosition: "75% center" },
  { name: "Dra. Eloysa", specialty: "Nutricionista", image: eloysaImg },
  { name: "Dr. José Wilson", specialty: "Ginecologista", image: joseWilsonImg },
];

const sameDayExams = [
  "Hemograma", "Tipagem sanguínea", "Sumário de urina", "Parasitológico de fezes",
  "Pesquisa de sangue oculto", "VDRL", "ASLO", "Fator reumatoide", "PCR", "BHCG",
  "VHS", "HIV", "Sífilis", "HCV", "HBsAg", "H. pylori",
];

function Index() {
  const [professionalsCarouselApi, setProfessionalsCarouselApi] = useState<CarouselApi>();
  const [isProfessionalsCarouselPaused, setProfessionalsCarouselPaused] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState<string>();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!professionalsCarouselApi || isProfessionalsCarouselPaused) {
      return;
    }

    const interval = window.setInterval(() => professionalsCarouselApi.scrollNext(), 3500);
    return () => window.clearInterval(interval);
  }, [isProfessionalsCarouselPaused, professionalsCarouselApi]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#1a2340] border-b border-white/5">
        <div className="max-w-md lg:max-w-7xl mx-auto px-5 lg:px-10 py-2.5 lg:py-3 flex items-center justify-between">
          <img src={logo} alt="LabClin" className="h-10 lg:h-12 w-auto" />
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
            <a href="#servicos" className="hover:text-brand-teal transition-colors">Serviços</a>
            <a href="#profissionais" className="hover:text-brand-teal transition-colors">Profissionais</a>
            <a href="#historia" className="hover:text-brand-teal transition-colors">Nossa história</a>
            <a href="#contato" className="hover:text-brand-teal transition-colors">Contato</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-xs lg:text-sm font-semibold text-white bg-whatsapp/90 hover:bg-whatsapp px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-full flex items-center gap-1.5 lg:gap-2 transition-colors">
            <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4" /> Agendar
          </a>
        </div>
      </header>

      <main className="max-w-md lg:max-w-7xl mx-auto">
        {/* Hero */}
        <section className="relative px-5 lg:px-10 pt-8 lg:pt-20 pb-12 lg:pb-24">
          <div className="absolute -top-10 -right-10 w-60 lg:w-[32rem] h-60 lg:h-[32rem] rounded-full bg-brand-teal-soft blur-3xl opacity-60" />
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal bg-brand-teal-soft px-3 py-1.5 rounded-full">
                <span className="bubble inline-block h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Laboratório médico de confiança
              </span>
              <h1 className="mt-5 text-[2.6rem] lg:text-6xl xl:text-7xl leading-[1.05] font-bold text-brand-navy animate-fade-up">
                Sua saúde com <em className="not-italic text-brand-teal font-display italic">precisão</em> e cuidado.
              </h1>
              <p className="mt-4 lg:mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed lg:max-w-lg animate-fade-up" style={{ animationDelay: "120ms" }}>
                Exames clínicos, consultas médicas e especialistas em Cacimba de Dentro e Araruna. Resultados rápidos, atendimento humano.
              </p>

              <div className="mt-7 flex flex-col lg:flex-row gap-3 lg:gap-4 animate-fade-up" style={{ animationDelay: "220ms" }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener"
                   className="group flex items-center justify-center gap-2.5 bg-whatsapp text-white font-semibold py-4 lg:px-8 rounded-2xl shadow-soft-lg hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300">
                  <MessageCircle className="h-5 w-5" />
                  Fale conosco no WhatsApp
                  <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a href="#servicos" className="text-center lg:self-center text-sm font-medium text-brand-navy/70 py-2 lg:py-4 lg:px-6 lg:border lg:border-brand-navy/15 lg:rounded-2xl hover:text-brand-teal transition-colors">
                  Ver nossos serviços ↓
                </a>
              </div>

              {/* stats */}
              <div className="mt-6 lg:mt-10 grid grid-cols-3 gap-2 lg:gap-4 reveal lg:max-w-lg">
                {[
                  { n: "2022", l: "Fundada em" },
                  { n: "3", l: "Unidades de atendimento" },
                  { n: "100%", l: "Cuidado humano" },
                ].map((s, i) => (
                  <div key={s.l} style={{ transitionDelay: `${i * 80}ms` }} className="text-center bg-accent rounded-2xl py-3 lg:py-5 px-2 shadow-soft hover:-translate-y-0.5 transition-transform">
                    <div className="font-display text-xl lg:text-3xl font-bold text-brand-navy">{s.n}</div>
                    <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight mt-0.5 lg:mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0 relative rounded-3xl overflow-hidden shadow-soft-lg animate-fade-in-soft" style={{ animationDelay: "320ms" }}>
              <img src={heroImg} alt="Laboratório LabClin" width={768} height={1024} className="w-full h-72 lg:h-[34rem] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent" />
              <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8 text-white">
                <div className="flex items-center gap-2 text-xs lg:text-sm">
                  <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5" /> Certificado e seguro
                </div>
                <p className="mt-1 font-display text-lg lg:text-2xl">Tecnologia + cuidado humano</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="px-5 lg:px-10 py-12 lg:py-24 bg-[var(--gradient-soft)] lg:rounded-[3rem]">
          <div className="lg:text-center lg:max-w-2xl lg:mx-auto">
            <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">O que oferecemos</p>
            <h2 className="mt-2 text-3xl lg:text-5xl font-bold text-brand-navy">Serviços completos para sua saúde</h2>
          </div>

          <div className="mt-7 lg:mt-14 space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {[
              { icon: Stethoscope, t: "Consultas médicas", d: "Atendimento com clínicos gerais e especialistas." },
              { icon: FlaskConical, t: "Exames clínicos", d: "Coleta laboratorial com tecnologia de ponta." },
              { icon: Dna, t: "DNA & Sexagem", d: "Testes genéticos com privacidade e precisão." },
              { icon: Microscope, t: "Biópsias & Citológico", d: "Análises detalhadas para diagnósticos seguros." },
            ].map((s, i) => (
              <div key={s.t} style={{ transitionDelay: `${i * 100}ms` }} className="reveal card-hover relative flex lg:flex-col gap-4 lg:gap-5 overflow-hidden bg-card border border-border/50 p-4 lg:p-7 rounded-2xl shadow-soft">
                <div className="shrink-0 h-12 w-12 lg:h-14 lg:w-14 rounded-xl bg-brand-teal-soft flex items-center justify-center">
                  <s.icon className="h-6 w-6 lg:h-7 lg:w-7 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold lg:text-lg text-brand-navy">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 lg:mt-2">{s.d}</p>
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-teal" />
              </div>
            ))}
          </div>
        </section>

        {/* Resultados no mesmo dia */}
        <section id="resultados" className="px-5 lg:px-10 py-12 lg:py-24">
          <div className="relative">
            <div className="relative">
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand-teal">Resultados ágeis</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold leading-tight text-brand-navy lg:text-5xl">Exames com resultado no mesmo dia</h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground lg:text-base">Mais agilidade para você cuidar da sua saúde. Confira abaixo os exames disponíveis para resultado no mesmo dia.</p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {sameDayExams.map((exam) => (
                  <div key={exam} className="relative flex items-center gap-2 overflow-hidden rounded-xl border border-white bg-white/90 py-2.5 pl-4 pr-3 text-xs text-brand-navy shadow-soft lg:text-sm">
                    <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2.5 bg-brand-teal" />
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-teal" />
                    {exam}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Profissionais */}
        <section id="profissionais" className="px-5 lg:px-10 py-14 lg:py-24 overflow-hidden">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="lg:max-w-2xl">
              <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Nossa equipe</p>
              <h2 className="mt-2 text-3xl lg:text-5xl font-bold text-brand-navy">Profissionais para cuidar de você.</h2>
              <p className="mt-3 text-sm lg:text-base text-muted-foreground leading-relaxed">Conheça as áreas de atendimento da LabClin e encontre o cuidado que você precisa.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors">
              Consultar agenda <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <Carousel opts={{ align: "start", loop: true, duration: 25 }} setApi={setProfessionalsCarouselApi} className="mt-8 lg:mt-12 px-1 lg:px-7 reveal">
            <CarouselContent className="-ml-4 pt-3 pb-8" viewportClassName="-mx-6 px-6">
              {professionals.map((professional) => (
                <CarouselItem key={professional.specialty} className="pl-4 basis-[65%] sm:basis-[56%] lg:basis-1/3">
                  <article
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setProfessionalsCarouselPaused(true);
                      setSelectedProfessional(professional.specialty);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setProfessionalsCarouselPaused(true);
                        setSelectedProfessional(professional.specialty);
                      }
                    }}
                    className={`group h-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_-18px_rgba(18,35,67,0.42)] transition-all duration-300 ${selectedProfessional === professional.specialty ? "-translate-y-3 scale-[1.02] shadow-[0_24px_48px_-18px_rgba(18,35,67,0.5)]" : "hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-18px_rgba(18,35,67,0.5)]"}`}
                  >
                    <div className={`relative overflow-hidden ${professional.image ? "aspect-[9/16]" : `h-48 lg:h-56 bg-gradient-to-br ${professional.tone}`}`}>
                      {professional.image ? (
                        <img src={professional.image} alt={professional.name} className="h-full w-full object-cover" style={{ objectPosition: professional.imagePosition }} />
                      ) : (
                        <>
                          <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/30" />
                          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-brand-navy/10 to-transparent" />
                          <div className="absolute bottom-5 left-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/80 font-display text-2xl font-bold text-brand-navy shadow-soft backdrop-blur">
                            {professional.initials}
                          </div>
                          <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-brand-navy backdrop-blur">
                            <ShieldCheck className="h-3.5 w-3.5 text-brand-teal" /> LabClin
                          </span>
                        </>
                      )}
                    </div>
                    <div className="p-5 lg:p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">{professional.name ?? "Área de atendimento"}</p>
                      <h3 className="mt-1.5 text-xl font-bold text-brand-navy">{professional.specialty}</h3>
                      {professional.description && <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">{professional.description}</p>}
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                        <CalendarDays className="h-4 w-4" /> Ver disponibilidade
                      </a>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Profissional anterior" className="left-3 top-28 border-0 bg-white/90 text-brand-navy shadow-soft hover:bg-white lg:-left-4 lg:top-1/2" />
            <CarouselNext aria-label="Próximo profissional" className="right-3 top-28 border-0 bg-white/90 text-brand-navy shadow-soft hover:bg-white lg:-right-4 lg:top-1/2" />
          </Carousel>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-teal lg:hidden transition-colors">
            Consultar agenda <ChevronRight className="h-4 w-4" />
          </a>
        </section>

        {/* História + CTA + Localização — bloco único navy */}
        <section id="historia" className="relative overflow-hidden rounded-t-[3rem] bg-brand-navy px-6 py-20 text-white shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.25)] lg:left-1/2 lg:mt-0 lg:w-screen lg:-translate-x-1/2 lg:rounded-none lg:px-16 lg:py-32">
          <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-brand-teal/10 blur-3xl" />

          <div className="relative">
            {/* História - desktop two columns */}
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Nossa história</p>
                <h2 className="mt-3 text-3xl font-bold lg:text-5xl">Cuidando do interior da Paraíba desde 2022.</h2>
                <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-white/80 lg:mt-8 lg:space-y-6 lg:text-base">
                  <p>
                    Fundada em <strong className="text-white">2022</strong>, a <strong className="text-white">LabClin</strong> nasceu com uma missão simples: levar diagnósticos confiáveis e atendimento humano às cidades de <strong className="text-white">Cacimba de Dentro</strong> e <strong className="text-white">Araruna</strong>.
                  </p>
                  <p>
                    Em poucos anos, conquistamos a confiança da nossa comunidade combinando equipamentos modernos, equipe qualificada e uma escuta atenta — porque saúde é mais do que números, é cuidado real com cada pessoa que passa por aqui.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center lg:order-first lg:mt-0">
                <img src={mark} alt="LabClin" width={400} height={300} loading="lazy" className="w-52 rounded-2xl lg:w-96" />
              </div>
            </div>

            <div className="mt-8 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
              {[
                { i: Heart, t: "Atendimento humano" },
                { i: ShieldCheck, t: "Resultados confiáveis" },
                { i: Clock, t: "Entrega ágil" },
                { i: Microscope, t: "Tecnologia atual" },
              ].map((v, i) => (
                <div key={v.t} style={{ transitionDelay: `${i * 80}ms` }} className="reveal bg-white/5 border border-white/10 rounded-2xl p-3 lg:p-5 backdrop-blur hover:bg-white/10 hover:-translate-y-0.5 transition">
                  <v.i className="h-5 w-5 lg:h-6 lg:w-6 text-brand-teal" />
                  <p className="mt-2 lg:mt-3 text-sm lg:text-base font-medium">{v.t}</p>
                </div>
              ))}
            </div>

            {/* Divisória sutil */}
            <div className="mt-14 mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* CTA + Contato - desktop two columns */}
            <div id="contato" className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider lg:text-sm">Vamos cuidar de você</p>
                <h2 className="mt-2 text-3xl font-bold lg:text-6xl">Agende seu atendimento agora mesmo.</h2>
                <p className="mt-3 text-white/80 lg:mt-5 lg:text-xl">
                  Resposta rápida pelo WhatsApp. Estamos prontos para te receber.
                </p>

                <a href={WHATSAPP_URL} target="_blank" rel="noopener"
                   className="mt-6 flex items-center justify-center gap-2.5 rounded-2xl bg-whatsapp py-4 font-semibold text-white shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] active:scale-[0.98] lg:mt-8 lg:inline-flex lg:px-10 lg:text-lg">
                  <MessageCircle className="h-5 w-5" />
                  Fale conosco no WhatsApp
                </a>
              </div>

              <div className="mt-8 lg:mt-0 space-y-3 text-sm">
                <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 lg:p-5 rounded-2xl border border-white/10">
                  <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white lg:text-base">Cacimba de Dentro</p>
                    <p className="text-white/70 text-xs lg:text-sm mt-0.5">Rua Presidente João Pessoa</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 lg:p-5 rounded-2xl border border-white/10">
                  <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white lg:text-base"><span>Araruna</span> <span className="text-brand-teal text-xs font-bold ml-1">· Clínica Cuiddare</span></p>
                    <p className="text-white/70 text-xs lg:text-sm mt-0.5">Rua Antônio Targino da Costa, 175 — Araruna/PB</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 lg:p-5 rounded-2xl border border-white/10">
                  <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white lg:text-base"><span>Cacimba de Dentro</span> <span className="text-brand-teal text-xs font-bold ml-1">· Clínica Baduclin</span></p>
                    <p className="text-white/70 text-xs lg:text-sm mt-0.5">Distrito de Logradouro - Cacimba de Dentro/PB</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 lg:p-5 rounded-2xl border border-white/10">
                  <Clock className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-white lg:text-base">Horário de atendimento</p>
                    <div className="mt-2 space-y-2 text-xs lg:text-sm text-white/80">
                      <div>
                        <p className="font-semibold text-brand-teal">Manhã</p>
                        <p>Segunda a sexta · 6h30 às 11h30</p>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-teal">Tarde</p>
                        <p>Segunda a quinta · 13h30 às 16h30</p>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-teal">Sábado</p>
                        <p>Aberto por agendamento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative border-t border-white/10 bg-brand-navy px-5 py-4 text-center text-xs text-white/60 lg:left-1/2 lg:w-screen lg:-translate-x-1/2 lg:px-10 lg:py-5 lg:text-sm">
          <img src={logo} alt="LabClin" className="mx-auto h-6 lg:h-8" />
          <p className="mt-2">© {new Date().getFullYear()} LabClin — Laboratório e Clínica Integrada.</p>
          <p className="mt-1">Todos os direitos reservados.</p>
        </footer>
      </main>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener"
         aria-label="Fale no WhatsApp"
         className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-[var(--shadow-glow)] active:scale-95 transition">
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      </a>
    </div>
  );
}
