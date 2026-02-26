import React from 'react';
import { 
  CheckCircle, 
  ChevronRight, 
  ShieldCheck, 
  Play, 
  Download, 
  BookOpen, 
  Map as MapIcon, 
  Image as ImageIcon, 
  RefreshCw, 
  Lock,
  Star,
  Zap,
  Check,
  FileText,
  Layers,
  ArrowRight,
  List,
  Gift,
  Smartphone,
  Target,
  Sparkles,
  Quote,
  Clock
} from 'lucide-react';

const CHECKOUT_URL = "https://ggcheckout.com.br/checkout/v5/djLzzV4yzxbkhTDQ1aD5";

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-lg border-b border-blue-900/50 py-4">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <BookOpen className="text-yellow-accent w-6 h-6" />
        <span className="font-serif font-bold text-xl text-white tracking-tight">Apocalipse <span className="text-yellow-accent">Revelado</span></span>
      </div>
      <a 
        href="#pricing" 
        className="bg-yellow-accent text-blue-950 px-6 py-2 rounded-full font-black text-sm hover:bg-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.4)] hidden sm:block uppercase tracking-tight"
      >
        QUERO ACESSO AGORA
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1120]">
    {/* Decorative light flares */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Star className="w-3 h-3 fill-yellow-400" /> Material Visual Exclusivo
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-black text-white leading-tight mb-6">
          O Apocalipse explicado de forma <span className="text-yellow-accent italic">clara e visual.</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Entenda as criaturas, os selos, o juízo e a Nova Jerusalém sem a confusão ou o medo que travam o seu estudo bíblico.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a 
            href="#pricing"
            className="group relative inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-6 bg-yellow-accent text-blue-950 rounded-2xl font-black text-lg md:text-xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:scale-[1.05] w-full sm:w-auto active:scale-95 shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-tighter">
              GARANTIR MEU ACESSO <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <Lock className="w-4 h-4 text-yellow-accent" /> Acesso Digital Imediato
            </span>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/2 relative">
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-blue-900/30 hover:scale-[1.02] transition-all duration-700 group">
           <img 
            src="https://i.ibb.co/273MDzxF/Chat-GPT-Image-11-de-jan-de-2026-18-45-12.png" 
            alt="Apocalipse Revelado - Capa do Produto" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/40 via-transparent to-transparent opacity-30"></div>
        </div>
        
        {/* Floating badge */}
        <div className="absolute -bottom-8 -right-4 z-20 bg-blue-950/90 backdrop-blur border border-yellow-400/30 p-5 rounded-2xl shadow-2xl hidden sm:block">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-yellow-accent/10 flex items-center justify-center">
              <CheckCircle className="text-yellow-accent w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Garantia</p>
              <p className="text-sm font-bold text-white">7 Dias de Teste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection: React.FC = () => (
  <section className="py-16 bg-[#0F172A] border-y border-blue-900/30">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="w-20 h-1 bg-yellow-accent mx-auto mb-10 shadow-[0_0_10px_#FACC15]"></div>
      <h2 className="text-2xl md:text-5xl font-serif font-bold text-white mb-8 leading-snug">
        O Apocalipse foi escrito para <span className="italic text-yellow-accent">revelar</span> — não para confundir.
      </h2>
      <div className="space-y-6 text-xl text-blue-100/60 leading-relaxed font-light">
        <p>
          Muitos cristãos sentem medo ou confusão ao ler as profecias finais. Símbolos complexos e criaturas misteriosas acabam gerando insegurança no estudo.
        </p>
        <p className="text-white font-medium">
          Este guia visual foi criado para trazer a clareza que João pretendia entregar: a vitória gloriosa de Cristo e a esperança para os fiéis.
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600/20 border border-blue-500/50 text-blue-100 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all hover:scale-105">
          QUERO CONHECER O MATERIAL <ChevronRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

const LearningGrid: React.FC = () => {
  const benefits = [
    { 
      title: "Criaturas do Apocalipse explicadas", 
      imageUrl: "https://i.ibb.co/27K1zxfk/Chat-GPT-Image-11-de-jan-de-2026-18-45-24.png" 
    },
    { 
      title: "Os Cavaleiros e seus significados", 
      imageUrl: "https://i.ibb.co/76Cb4T5/Chat-GPT-Image-11-de-jan-de-2026-18-45-28.png"
    },
    { 
      title: "O Trono Celestial e o Juízo Final", 
      imageUrl: "https://i.ibb.co/ZRbMrMjR/Chat-GPT-Image-11-de-jan-de-2026-18-45-52.png"
    },
    { 
      title: "Lugares proféticos: Patmos e Babilônia", 
      imageUrl: "https://i.ibb.co/G4vytNMv/Chat-GPT-Image-11-de-jan-de-2026-18-45-40.png"
    },
    { 
      title: "Jerusalém e a Nova Jerusalém", 
      imageUrl: "https://i.ibb.co/d4BZGDNz/Chat-GPT-Image-11-de-jan-de-2026-18-45-41.png"
    },
    { 
      title: "A esperança final para os fiéis", 
      imageUrl: "https://i.ibb.co/S7szz88y/Chat-GPT-Image-11-de-jan-de-2026-18-46-18.png"
    },
  ];

  return (
    <section className="py-16 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-white mb-4">Veja algumas páginas por dentro</h2>
          <p className="text-blue-300/50 text-lg">Um mergulho visual nos mistérios revelados</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[#1E293B] p-6 rounded-[2.5rem] border border-blue-800/30 hover:border-yellow-400/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col shadow-lg">
              <div className="w-full aspect-[9/16] overflow-hidden rounded-[2rem] mb-6 bg-blue-900/50 border border-blue-800/30 flex items-center justify-center relative">
                <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight px-2 text-center">{b.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-yellow-accent text-blue-950 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105">
            VER TODOS OS DETALHES <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Pr. Marcos Oliveira",
      role: "Líder de Estudo Bíblico",
      text: "Finalmente um material que traduz a complexidade do Apocalipse em algo visual e compreensível. Meus alunos estão maravilhados com a clareza das ilustrações.",
      avatar: "https://i.pravatar.cc/150?u=marcos"
    },
    {
      name: "Ana Cláudia Silva",
      role: "Professora de EBD",
      text: "Eu sempre tive receio de ensinar Apocalipse. Com este guia, me sinto segura e as imagens ajudam demais a fixar os conceitos proféticos na mente dos alunos.",
      avatar: "https://i.pravatar.cc/150?u=ana"
    },
    {
      name: "Ricardo Mendes",
      role: "Estudante de Teologia",
      text: "O rigor bíblico aliado ao design editorial premium torna este ebook indispensável. Os mapas proféticos são, sem dúvida, o melhor bônus que já recebi.",
      avatar: "https://i.pravatar.cc/150?u=ricardo"
    }
  ];

  return (
    <section className="py-16 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-accent/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-yellow-accent text-sm font-bold uppercase tracking-widest">
            <Quote className="w-4 h-4 fill-yellow-accent" /> Testemunhos Reais
          </div>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-white mb-6">
            O que dizem os leitores e alunos
          </h2>
          <p className="text-blue-100/40 text-lg max-w-2xl mx-auto">Vidas impactadas e entendimentos transformados através de um estudo claro das Escrituras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#1E293B] p-8 rounded-[2.5rem] border border-blue-800/30 relative group hover:border-yellow-accent/40 transition-all duration-500 shadow-xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-accent fill-yellow-accent" />
                ))}
              </div>
              <p className="text-blue-100/70 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-yellow-accent/30" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-yellow-accent/60 text-xs font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <div className="absolute top-8 right-8 text-blue-900/20 group-hover:text-yellow-accent/5 transition-colors duration-500">
                <Quote className="w-16 h-16" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-blue-800/30 border border-blue-700/50 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105">
            QUERO FAZER PARTE <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const WhatYouWillReceive: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B1120] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
             Conteúdo Exclusivo
          </div>
          <h2 className="text-2xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            O Que Você Vai Receber <span className="text-yellow-accent italic">Neste Material</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-accent mx-auto mb-6 shadow-[0_0_15px_#FACC15]"></div>
          <p className="text-blue-100/40 text-lg max-w-2xl mx-auto">Um resumo completo do produto e sua estrutura, transmitindo alto valor, clareza e autoridade espiritual.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Block 1: Ebook Main */}
          <div className="bg-[#1E293B] border border-blue-800/40 p-6 md:p-12 rounded-[3rem] shadow-2xl hover:border-yellow-400/30 transition-all duration-500 group">
             <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-yellow-accent text-blue-950 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_5px_20px_rgba(250,204,21,0.3)]">
                   <BookOpen className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4"><span className="text-yellow-accent">📘</span> Ebook Completo – O Apocalipse Revelado</h3>
                   <p className="text-blue-100/60 leading-relaxed text-lg">
                      Um estudo bíblico profundo, organizado e visual que revela os mistérios do Apocalipse com clareza, fidelidade às Escrituras e aplicações espirituais para os dias atuais.
                   </p>
                </div>
             </div>

             <div className="bg-blue-950/40 rounded-[2rem] p-8 border border-blue-900/30">
                <div className="flex items-center gap-3 mb-6">
                   <List className="w-6 h-6 text-yellow-accent" />
                   <h4 className="text-xl font-bold text-white uppercase tracking-widest text-sm"><span className="text-yellow-accent">🧩</span> Estrutura do Conteúdo</h4>
                </div>
                <ul className="space-y-4">
                   {[
                      "Introdução: Como ler o Apocalipse corretamente",
                      "As Criaturas do Apocalipse (Dragão, Bestas, Anjos...)",
                      "Os Quatro Cavaleiros",
                      "Os Símbolos Proféticos (666, Selos, Trombetas...)",
                      "Lugares Proféticos (Patmos, Babilônia, Armagedom...)",
                      "O Trono Celestial e a Adoração no Céu",
                      "O Juízo Final e o Livro da Vida",
                      "A Esperança Final: Novo Céu, Nova Terra e Vida Eterna"
                   ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-blue-100/70 hover:text-white transition-colors">
                         <CheckCircle className="w-5 h-5 text-yellow-accent flex-shrink-0 mt-0.5" />
                         <span className={item.includes("Símbolos") ? "text-yellow-accent font-semibold" : ""}>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Right Column: Other Blocks */}
          <div className="space-y-8">
             
             {/* Visual Content Block */}
             <div className="bg-[#1E293B] border border-blue-800/40 p-8 rounded-[2.5rem] hover:border-yellow-400/30 transition-all duration-500 group">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-yellow-accent text-blue-950 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <ImageIcon className="w-7 h-7" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white mb-1"><span className="text-yellow-accent">🖼️</span> Conteúdo Visual Premium</h4>
                      <p className="text-blue-100/40 text-sm">Páginas ilustradas, mapas explicativos e layout editorial fácil.</p>
                   </div>
                </div>
             </div>

             {/* Bonus Block */}
             <div className="bg-[#1E293B] border border-yellow-400/30 p-8 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-yellow-accent text-blue-950 px-4 py-1 text-[10px] font-black uppercase tracking-tighter shadow-lg rounded-bl-xl">INCLUSO</div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-yellow-accent text-blue-950 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Gift className="w-7 h-7" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white mb-1"><span className="text-yellow-accent">🎁</span> BÔNUS INCLUSOS</h4>
                      <p className="text-blue-100/60 text-sm">Mapa da Bíblia Ilustrado e material complementar para estudo.</p>
                   </div>
                </div>
             </div>

             {/* Format Block */}
             <div className="bg-[#1E293B] border border-blue-800/40 p-8 rounded-[2.5rem] hover:border-yellow-400/30 transition-all duration-500 group">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-yellow-accent text-blue-950 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Smartphone className="w-7 h-7" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white mb-1"><span className="text-yellow-accent">📲</span> Formato e Acesso</h4>
                      <p className="text-blue-100/40 text-sm">Ebook em PDF com acesso imediato via celular, tablet ou PC.</p>
                   </div>
                </div>
             </div>

             {/* For Whom Block */}
             <div className="bg-[#1E293B] border border-blue-800/40 p-8 rounded-[2.5rem] hover:border-yellow-400/30 transition-all duration-500 group">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 bg-yellow-accent text-blue-950 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Target className="w-7 h-7" />
                   </div>
                   <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-3"><span className="text-yellow-accent">🎯</span> Para quem é este material</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-blue-100/50">
                         <li className="flex items-center gap-2"><Check className="w-3 h-3 text-yellow-accent" /> Cristãos sem medo</li>
                         <li className="flex items-center gap-2"><Check className="w-3 h-3 text-yellow-accent" /> Professores EBD</li>
                         <li className="flex items-center gap-2"><Check className="w-3 h-3 text-yellow-accent" /> Líderes e Pregadores</li>
                         <li className="flex items-center gap-2"><Check className="w-3 h-3 text-yellow-accent" /> Estudantes de Teologia</li>
                      </ul>
                   </div>
                </div>
             </div>

          </div>
        </div>

        <div className="mt-20 text-center">
           <blockquote className="text-2xl md:text-3xl font-serif italic text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              “Este não é apenas um estudo sobre o fim… é um convite à <span className="text-yellow-accent">esperança</span>, vigilância e fidelidade.”
           </blockquote>

           {/* HIGHLY HIGHLIGHTED CTA BUTTON - WHAT YOU RECEIVE */}
           <div className="relative group inline-block w-full max-w-xl">
              <div className="absolute -inset-3 bg-yellow-accent/40 rounded-3xl blur-2xl group-hover:bg-yellow-accent/60 transition duration-500 opacity-80 animate-pulse"></div>
              <a 
                href="#pricing" 
                className="relative flex items-center justify-center w-full bg-yellow-accent text-blue-950 py-5 md:py-8 rounded-2xl font-black text-lg md:text-2xl shadow-[0_20px_50px_rgba(250,204,21,0.5)] hover:shadow-[0_0_80px_rgba(250,204,21,0.8)] hover:scale-[1.06] hover:bg-white transition-all duration-300 transform overflow-hidden active:scale-95 border-b-4 border-yellow-600 uppercase tracking-tighter"
              >
                <span className="flex items-center gap-3">
                   QUERO RECEBER ESTE MATERIAL AGORA <Sparkles className="w-8 h-8 fill-blue-950" />
                </span>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

const BonusSection: React.FC = () => (
  <section className="py-16 bg-[#0B1120]">
    <div className="max-w-5xl mx-auto px-4 space-y-20">
      
      {/* Bonus 1: Mapa da Bíblia */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-[#1E293B] border border-yellow-400/20 rounded-[3rem] p-6 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8">
            <span className="bg-yellow-accent text-blue-950 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">BÔNUS GRÁTIS</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-800/50 group-hover:scale-105 transition-transform duration-500">
                 <img src="https://i.ibb.co/LhcTpvBM/Capa.png" alt="Mapa da Bíblia" className="w-full h-auto object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em] mb-4">🎁 PRESENTE EXCLUSIVO 01</h2>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">📍 Mapa da Bíblia Profético</h3>
              <p className="text-blue-100/60 mb-8 leading-relaxed text-lg">
                Um guia visual completo de Gênesis a Apocalipse. Com este mapa, você nunca mais ficará perdido nas rotas e tempos bíblicos, situando cada profecia no seu contexto geográfico e histórico.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-6 bg-blue-950/50 p-6 rounded-2xl border border-blue-800/30">
                <div className="flex flex-col">
                  <span className="text-slate-500 line-through text-sm">Valor Real: R$ 47,90</span>
                  <span className="text-yellow-accent font-black text-4xl uppercase tracking-tight">Grátis</span>
                </div>
                <div className="h-12 w-px bg-blue-800"></div>
                <div className="text-blue-100/40 text-xs font-bold uppercase leading-tight">
                  Incluso no<br/>Pacote Hoje
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus 2: Resumo da Bíblia */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
        <div className="relative bg-[#1E293B] border border-blue-800/30 rounded-[3rem] p-6 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8">
            <span className="bg-yellow-accent text-blue-950 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">BÔNUS GRÁTIS</span>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-2/5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-800/50 group-hover:scale-105 transition-transform duration-500">
                 <img src="https://i.ibb.co/fdM2s9dS/Screenshot-3234.jpg" alt="Resumo da Bíblia" className="w-full h-auto object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-yellow-400 text-xs font-black uppercase tracking-[0.3em] mb-4">🎁 PRESENTE EXCLUSIVO 02</h2>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">📘 Resumo Completo da Bíblia</h3>
              <p className="text-blue-100/60 mb-8 leading-relaxed text-lg">
                Um resumo completo da Bíblia: De Gênesis a Apocalipse, entenda o propósito e a mensagem de cada livro em poucos minutos com este guia prático e direto. Ideal para uma visão panorâmica das Escrituras.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-6 bg-blue-950/50 p-6 rounded-2xl border border-blue-800/30">
                <div className="flex flex-col">
                  <span className="text-slate-500 line-through text-sm">Valor Real: R$ 37,90</span>
                  <span className="text-yellow-accent font-black text-4xl uppercase tracking-tight">Grátis</span>
                </div>
                <div className="h-12 w-px bg-blue-800"></div>
                <div className="text-blue-100/40 text-xs font-bold uppercase leading-tight">
                  Acesso Imediato<br/>Disponível
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#pricing" className="inline-flex items-center justify-center px-10 py-5 bg-yellow-accent text-blue-950 rounded-full font-black text-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-105 uppercase tracking-tight">
          GARANTIR MEUS BÔNUS AGORA <Gift className="ml-2 w-6 h-6" />
        </a>
      </div>

    </div>
  </section>
);

const PricingSection: React.FC = () => (
  <section id="pricing" className="py-16 bg-[#0B1120] relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120]"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-5xl font-serif font-bold text-white mb-6">
          Escolha o melhor plano para você
        </h2>
        <p className="text-blue-100/60 text-lg max-w-2xl mx-auto">
          Comece seus estudos hoje mesmo com o material que vai transformar sua visão do Apocalipse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        
        {/* Plan 1: Basic */}
        <div className="bg-[#1E293B] border border-blue-800/30 rounded-[2.5rem] p-8 md:p-10 hover:border-blue-700/50 transition-all duration-300 flex flex-col h-full relative group">
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Básico</h3>
            <p className="text-blue-100/50 text-sm">Para quem quer apenas o essencial.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-blue-100/70">R$</span>
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">10<span className="text-2xl">,00</span></span>
            </div>
            <p className="text-blue-100/30 text-xs font-bold uppercase mt-2">Pagamento Único</p>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-start gap-3 text-blue-100/70 text-sm">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span>Ebook Apocalipse Revelado</span>
            </li>
            <li className="flex items-start gap-3 text-blue-100/70 text-sm">
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span>Acesso Imediato</span>
            </li>
             <li className="flex items-start gap-3 text-blue-100/30 text-sm line-through decoration-blue-500/30">
              <span className="w-5 h-5 flex-shrink-0"></span>
              <span>Bônus: Mapa da Bíblia</span>
            </li>
            <li className="flex items-start gap-3 text-blue-100/30 text-sm line-through decoration-blue-500/30">
              <span className="w-5 h-5 flex-shrink-0"></span>
              <span>Bônus: Resumo da Bíblia</span>
            </li>
          </ul>

          <a 
            href="https://ggcheckout.com.br/checkout/v5/7hEJV72i641Tq4ZThlvH"
            className="w-full block bg-blue-900/50 text-white py-4 rounded-xl font-bold text-center hover:bg-blue-800 transition-colors border border-blue-700/30 uppercase tracking-wider text-sm"
          >
            Quero o Básico
          </a>
        </div>

        {/* Plan 2: Premium */}
        <div className="bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-2 border-yellow-400/50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(250,204,21,0.15)] relative transform md:-translate-y-4 md:scale-105 z-10 flex flex-col h-full">
          <div className="absolute top-0 right-0 bg-yellow-accent text-blue-950 text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-[2.3rem] uppercase tracking-widest">
            Mais Vendido
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
               <Star className="w-5 h-5 text-yellow-accent fill-yellow-accent" />
               <h3 className="text-3xl font-serif font-bold text-white">Completo</h3>
            </div>
            <p className="text-yellow-100/70 text-sm">A experiência definitiva com todos os bônus.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-yellow-100/70">R$</span>
              <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">27<span className="text-3xl">,90</span></span>
            </div>
            <p className="text-yellow-100/40 text-xs font-bold uppercase mt-2">Pagamento Único • Acesso Vitalício</p>
          </div>

          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-start gap-3 text-white text-base font-medium">
              <div className="bg-yellow-accent/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-yellow-accent" />
              </div>
              <span><strong>Ebook Apocalipse Revelado</strong></span>
            </li>
            <li className="flex items-start gap-3 text-white text-base font-medium">
              <div className="bg-yellow-accent/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-yellow-accent" />
              </div>
              <span><strong>BÔNUS:</strong> Mapa da Bíblia Ilustrado</span>
            </li>
            <li className="flex items-start gap-3 text-white text-base font-medium">
              <div className="bg-yellow-accent/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-yellow-accent" />
              </div>
              <span><strong>BÔNUS:</strong> Resumo Completo da Bíblia</span>
            </li>
            <li className="flex items-start gap-3 text-white text-base font-medium">
              <div className="bg-yellow-accent/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-yellow-accent" />
              </div>
              <span>Atualizações Gratuitas</span>
            </li>
            <li className="flex items-start gap-3 text-white text-base font-medium">
              <div className="bg-yellow-accent/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-yellow-accent" />
              </div>
              <span>Garantia de 7 Dias</span>
            </li>
          </ul>

          <a 
            href="https://ggcheckout.com.br/checkout/v5/djLzzV4yzxbkhTDQ1aD5"
            className="w-full flex items-center justify-center gap-2 bg-yellow-accent text-blue-950 py-5 rounded-2xl font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] uppercase tracking-tight"
          >
            Quero o Completo <ArrowRight className="w-5 h-5" />
          </a>
          
          <p className="text-center text-blue-100/30 text-xs mt-4 font-medium">
            Compra 100% Segura e Acesso Imediato
          </p>
        </div>

      </div>
      
      <div className="mt-16 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" className="h-6" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Master" className="h-8" />
      </div>

    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-20 bg-[#0B1120] relative overflow-hidden">
    {/* Decorative flare */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]"></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-12 leading-tight">
        "O Apocalipse não é medo, é <span className="text-yellow-accent">vitória</span>."
      </h2>
      <div className="relative group inline-block">
        <div className="absolute -inset-4 bg-yellow-accent/40 rounded-full blur-3xl group-hover:bg-yellow-accent/60 transition duration-500 opacity-80 animate-pulse"></div>
        <a 
          href="#pricing"
          className="group relative inline-flex items-center justify-center px-8 py-5 md:px-16 md:py-9 bg-yellow-accent text-blue-950 rounded-full font-black text-xl md:text-3xl overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_80px_rgba(250,204,21,0.6)] hover:scale-110 active:scale-95 border-b-8 border-yellow-600 uppercase tracking-tighter"
        >
          ✨ QUERO ENTENDER O APOCALIPSE AGORA
        </a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-[#0B1120] py-20 text-white border-t border-blue-900/30">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-yellow-accent w-10 h-10" />
            <span className="font-serif font-bold text-3xl text-white tracking-tight">Apocalipse <span className="text-yellow-accent">Revelado</span></span>
          </div>
          <p className="text-blue-100/40 max-w-sm mb-6 text-lg leading-relaxed">
            Um guia visual completo para desvendar os mistérios do último livro da Bíblia com clareza teológica e fidelidade.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
            <div>
            <h4 className="font-bold text-yellow-accent mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-blue-100/60 text-sm font-medium">
                <li><a href="#" className="hover:text-yellow-accent transition-colors">Página Inicial</a></li>
                <li><a href="#pricing" className="hover:text-yellow-accent transition-colors">Preços</a></li>
                <li><a href="#pricing" className="hover:text-yellow-accent transition-colors">Garantia</a></li>
            </ul>
            </div>
            
            <div>
            <h4 className="font-bold text-yellow-accent mb-6 uppercase text-xs tracking-widest">Políticas</h4>
            <ul className="space-y-4 text-blue-100/60 text-sm font-medium">
                <li><a href="#" className="hover:text-yellow-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-yellow-accent transition-colors">Privacidade</a></li>
            </ul>
            </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-blue-100/30 text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-yellow-accent" /> Compra segura
          </div>
          <div className="flex items-center gap-2 text-blue-100/30 text-xs font-bold uppercase">
            <Lock className="w-4 h-4 text-yellow-accent" /> Material Digital
          </div>
        </div>
        <p className="text-blue-100/20 text-xs font-medium">
          &copy; {new Date().getFullYear()} Apocalipse Revelado. Material Digital enviado por E-mail imediatamente.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] selection:bg-yellow-accent selection:text-blue-950">
      <Navbar />
      <Hero />
      <ProblemSection />
      <LearningGrid />
      <TestimonialsSection />
      <WhatYouWillReceive />
      <BonusSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}