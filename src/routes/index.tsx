import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Calendar, Microscope, Stethoscope, Dna, FlaskConical, Heart, Star, ArrowRight, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import logo from "@/assets/labclin-logo.png";
import mark from "@/assets/labclin-logo.png";
import heroImg from "@/assets/lab-hero.jpg";
import doctorImg from "@/assets/doctor.jpg";

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

const WHATSAPP_URL = "https://wa.me/5583999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20atendimento%20na%20LabClin.";

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-md mx-auto px-5 py-2.5 flex items-center justify-between">
          <img src={logo} alt="LabClin" className="h-10 w-auto" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-xs font-semibold text-white bg-whatsapp/90 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> Agendar
          </a>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Hero */}
        <section className="relative px-5 pt-8 pb-12">
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-brand-teal-soft blur-3xl opacity-60" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal bg-brand-teal-soft px-3 py-1.5 rounded-full">
              <span className="bubble inline-block h-1.5 w-1.5 rounded-full bg-brand-teal" />
              Laboratório médico de confiança
            </span>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] font-bold text-brand-navy">
              Sua saúde com <em className="not-italic text-brand-teal font-display italic">precisão</em> e cuidado.
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Exames clínicos, consultas médicas e especialistas em Cacimba de Dentro e Araruna. Resultados rápidos, atendimento humano.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener"
                 className="group flex items-center justify-center gap-2.5 bg-whatsapp text-white font-semibold py-4 rounded-2xl shadow-[var(--shadow-glow)] active:scale-[0.98] transition">
                <MessageCircle className="h-5 w-5" />
                Fale conosco no WhatsApp
                <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition" />
              </a>
              <a href="#servicos" className="text-center text-sm font-medium text-brand-navy/70 py-2">
                Ver nossos serviços ↓
              </a>
            </div>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src={heroImg} alt="Laboratório LabClin" width={768} height={1024} className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="h-4 w-4" /> Certificado e seguro
                </div>
                <p className="mt-1 font-display text-lg">Tecnologia + cuidado humano</p>
              </div>
            </div>

            {/* stats */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { n: "2022", l: "Fundada em" },
                { n: "2", l: "Unidades de atendimento" },
                { n: "100%", l: "Cuidado humano" },
              ].map((s) => (
                <div key={s.l} className="text-center bg-accent rounded-2xl py-3 px-2">
                  <div className="font-display text-xl font-bold text-brand-navy">{s.n}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="px-5 py-12 bg-[var(--gradient-soft)]">
          <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">O que oferecemos</p>
          <h2 className="mt-2 text-3xl font-bold text-brand-navy">Serviços completos para sua saúde</h2>

          <div className="mt-7 space-y-3">
            {[
              { icon: Stethoscope, t: "Consultas médicas", d: "Atendimento com clínicos gerais e especialistas." },
              { icon: FlaskConical, t: "Exames clínicos", d: "Coleta laboratorial com tecnologia de ponta." },
              { icon: Dna, t: "DNA & Sexagem", d: "Testes genéticos com privacidade e precisão." },
              { icon: Microscope, t: "Biópsias & Citológico", d: "Análises detalhadas para diagnósticos seguros." },
            ].map((s) => (
              <div key={s.t} className="flex gap-4 bg-card border border-border/50 p-4 rounded-2xl shadow-sm">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-brand-teal-soft flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* História */}
        <section className="px-5 py-14 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-brand-teal/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Nossa história</p>
            <h2 className="mt-2 text-3xl font-bold">Cuidando do interior da Paraíba desde 2022.</h2>
            <div className="mt-5 rounded-3xl overflow-hidden">
              <img src={mark} alt="LabClin" width={400} height={300} loading="lazy" className="w-48 mx-auto rounded-2xl" />
            </div>
            <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-[15px]">
              <p>
                Fundada em <strong className="text-white">2022</strong>, a <strong className="text-white">LabClin</strong> nasceu com uma missão simples: levar diagnósticos confiáveis e atendimento humano às cidades de <strong className="text-white">Cacimba de Dentro</strong> e <strong className="text-white">Araruna</strong>.
              </p>
              <p>
                Em poucos anos, conquistamos a confiança da nossa comunidade combinando equipamentos modernos, equipe qualificada e uma escuta atenta — porque saúde é mais do que números, é cuidado real com cada pessoa que passa por aqui.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { i: Heart, t: "Atendimento humano" },
                { i: ShieldCheck, t: "Resultados confiáveis" },
                { i: Clock, t: "Entrega ágil" },
                { i: Microscope, t: "Tecnologia atual" },
              ].map((v) => (
                <div key={v.t} className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur">
                  <v.i className="h-5 w-5 text-brand-teal" />
                  <p className="mt-2 text-sm font-medium">{v.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final + Localização */}
        <section className="px-5 py-14 bg-brand-navy text-white rounded-t-[2.5rem] relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-brand-teal/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Vamos cuidar de você</p>
            <h2 className="mt-2 text-3xl font-bold">Agende seu atendimento agora mesmo.</h2>
            <p className="mt-3 text-white/80">
              Resposta rápida pelo WhatsApp. Estamos prontos para te receber.
            </p>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener"
               className="mt-6 flex items-center justify-center gap-2.5 bg-whatsapp text-white font-semibold py-4 rounded-2xl shadow-[var(--shadow-glow)] active:scale-[0.98] transition">
              <MessageCircle className="h-5 w-5" />
              Fale conosco no WhatsApp
            </a>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Cacimba de Dentro</p>
                  <p className="text-white/70 text-xs mt-0.5">Rua Presidente João Pessoa</p>
                </div>
              </div>
              <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Araruna</p>
                  <p className="text-white/70 text-xs mt-0.5">Unidade de atendimento</p>
                </div>
              </div>
              <div className="flex gap-3 items-start bg-white/5 backdrop-blur p-4 rounded-2xl border border-white/10">
                <Clock className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-white">Horário de atendimento</p>
                  <div className="mt-2 space-y-2 text-xs text-white/80">
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
        </section>

        <footer className="bg-brand-navy text-white/60 px-5 py-8 text-center text-xs border-t border-white/10">
          <img src={logo} alt="LabClin" className="h-10 mx-auto" />
          <p className="mt-4">© {new Date().getFullYear()} LabClin — Laboratório e Clínica Integrada.</p>
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
