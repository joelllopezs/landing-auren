
import React, { useState } from "react";
import './styles.css';
import {
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock3,
  Gem,
  ChevronDown,
  Instagram,
  Facebook,
  Youtube,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";

const notes = [
  {
    number: "01",
    title: "Notas de saída",
    description: "Bergamota italiana e pimenta rosa",
    detail: "Uma abertura fresca, vibrante e marcante.",
  },
  {
    number: "02",
    title: "Notas de coração",
    description: "Lavanda, cardamomo e cedro",
    detail: "Um coração aromático, elegante e envolvente.",
  },
  {
    number: "03",
    title: "Notas de fundo",
    description: "Âmbar, baunilha negra e vetiver",
    detail: "Uma assinatura quente, intensa e duradoura.",
  },
];

const benefits = [
  {
    icon: Gem,
    title: "Presença marcante",
    description: "Uma fragrância feita para deixar lembranças.",
  },
  {
    icon: Sparkles,
    title: "Composição sofisticada",
    description: "Notas cuidadosamente combinadas.",
  },
  {
    icon: ShieldCheck,
    title: "Design exclusivo",
    description: "Elegância em cada detalhe do frasco.",
  },
  {
    icon: Clock3,
    title: "Longa duração",
    description: "Uma fragrância para acompanhar seus momentos.",
  },
];

const faqs = [
  {
    question: "Qual é a concentração da fragrância?",
    answer:
      "Auren Noir é apresentado como Eau de Parfum, com uma composição intensa e sofisticada.",
  },
  {
    question: "Qual é o volume do frasco?",
    answer: "O produto possui 100 ml.",
  },
  {
    question: "A fragrância é indicada para quais ocasiões?",
    answer:
      "Sua proposta versátil combina com ocasiões especiais e também com o uso diário.",
  },
  {
    question: "Como funciona a compra?",
    answer:
      "Este projeto é uma demonstração de e-commerce. O botão de compra ainda não está conectado a um sistema de pagamento.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handlePurchase = () => {
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 2500);
  };

  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          AUREN
          <span>NOIR</span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#fragrancia" onClick={closeMenu}>
            A fragrância
          </a>
          <a href="#composicao" onClick={closeMenu}>
            Composição
          </a>
          <a href="#beneficios" onClick={closeMenu}>
            Benefícios
          </a>
          <a href="#produto" onClick={closeMenu}>
            O produto
          </a>
          <a href="#faq" onClick={closeMenu}>
            Dúvidas
          </a>
        </nav>

        <a href="#produto" className="header-cta">
          Comprar agora <ArrowRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <img
          src="/images/auren-hero.png"
          alt="Frasco Auren Noir em fotografia de campanha"
          className="hero-bg"
        />
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-content">
          <span className="eyebrow">
            PERFUMARIA DE ALTO PADRÃO
          </span>

          <h1>
            O poder de
            <br />
            ser <em>inesquecível.</em>
          </h1>

          <p>
            Auren Noir é mais do que um perfume.
            É uma assinatura de presença, elegância
            e personalidade.
          </p>

          <a href="#produto" className="primary-button">
            Descubra Auren Noir <ArrowRight size={17} />
          </a>

          <div className="hero-trust">
            <span><Gem size={16} /> Alta perfumaria</span>
            <span><ShieldCheck size={16} /> Design exclusivo</span>
          </div>
        </div>

      </section>

      {/* MANIFESTO */}
      <section className="manifesto" id="fragrancia">
        <div className="manifesto-image">
          <img
            src="/images/auren-lifestyle.png"
            alt="Campanha masculina Auren Noir"
            loading="lazy"
          />
        </div>

        <div className="manifesto-content">
          <span className="eyebrow">A ESSÊNCIA</span>

          <h2>
            Mais que um perfume.
            <br />
            Uma <em>presença.</em>
          </h2>

          <p>
            Existem fragrâncias que acompanham momentos.
            Outras se tornam parte da sua identidade.
          </p>

          <p>
            Auren Noir nasceu para quem entende que
            elegância não precisa chamar atenção.
            Ela simplesmente permanece.
          </p>

          <a href="#composicao" className="text-link">
            Conheça a fragrância <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* COMPOSIÇÃO */}
      <section className="fragrance" id="composicao">
        <div className="section-heading">
          <span className="eyebrow">A COMPOSIÇÃO</span>
          <h2>
            Uma fragrância
            <br />
            em <em>três atos.</em>
          </h2>
          <p>
            Uma jornada olfativa que revela camadas
            de sofisticação, do frescor inicial à
            intensidade marcante.
          </p>
        </div>

        <div className="fragrance-image">
          <img
            src="/images/auren-notas-olfativas.png"
            alt="Ingredientes e notas olfativas da Auren Noir"
            loading="lazy"
          />
        </div>

        <div className="notes-grid">
          {notes.map((note) => (
            <article className="note-card" key={note.number}>
              <span className="note-number">{note.number}</span>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <small>{note.detail}</small>
            </article>
          ))}
        </div>
      </section>

      {/* CAMPANHA */}
      <section className="campaign">
        <div className="campaign-image">
          <img
            src="/images/auren-detalhes.png"
            alt="Detalhes do frasco Auren Noir"
            loading="lazy"
          />
        </div>

        <div className="campaign-content">
          <span className="eyebrow">A ARTE DOS DETALHES</span>

          <h2>
            Elegância em
            <br />
            cada <em>detalhe.</em>
          </h2>

          <p>
            Uma composição desenvolvida para transmitir
            personalidade. Do primeiro contato à última
            impressão, cada detalhe faz parte da experiência.
          </p>

          <a href="#produto" className="text-link">
            Conheça o produto <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="benefits" id="beneficios">
        <div className="section-heading centered">
          <span className="eyebrow">POR QUE AUREN NOIR?</span>
          <h2>
            A diferença está nos <em>detalhes.</em>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefit-card" key={benefit.title}>
                <Icon size={30} strokeWidth={1.3} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRODUTO */}
      <section className="product" id="produto">
        <div className="product-visual">
          <img
            src="/images/auren-embalagem.png"
            alt="Perfume Auren Noir e sua embalagem"
            loading="lazy"
          />
        </div>

        <div className="product-info">
          <span className="eyebrow">THE SIGNATURE COLLECTION</span>

          <h2>Auren Noir</h2>
          <p className="product-type">Eau de Parfum · 100 ml</p>

          <div className="rating">
            <span>★★★★★</span>
            <small>4.9 (avaliações demonstrativas)</small>
          </div>

          <p className="product-description">
            Uma fragrância intensa e sofisticada,
            feita para homens que deixam sua marca.
          </p>

          <div className="price">
            R$ 389,90
          </div>

          <p className="installments">
            ou 3x de R$ 129,97
          </p>

          <div className="quantity-control">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Diminuir quantidade"
            >
              <Minus size={15} />
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Aumentar quantidade"
            >
              <Plus size={15} />
            </button>
          </div>

          <button className="primary-button buy-button" onClick={handlePurchase}>
            <ShoppingBag size={17} />
            {added ? "Adicionado à sacola!" : "Adicionar ao carrinho"}
            <ArrowRight size={17} />
          </button>

          <div className="product-assurances">
            <span><ShieldCheck size={17} /> Compra segura</span>
            <span><Truck size={17} /> Entrega garantida</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="section-heading centered">
          <span className="eyebrow">INFORMAÇÕES</span>
          <h2>
            Ficou com alguma <em>dúvida?</em>
          </h2>
          <p>Respondemos às principais perguntas sobre Auren Noir.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                onClick={() =>
                  setActiveFaq(activeFaq === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={19}
                  className={activeFaq === index ? "faq-rotated" : ""}
                />
              </button>

              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <span className="eyebrow">AUREN NOIR</span>
        <h2>
          Deixe sua marca
          <br />
          no <em>mundo.</em>
        </h2>

        <a href="#produto" className="primary-button">
          Experimente Auren Noir <ArrowRight size={17} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#inicio" className="logo">
          AUREN
          <span>NOIR</span>
        </a>

        <p>Mais que um perfume. Uma presença.</p>

        <div className="social-links">
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
        </div>

        <small>© 2026 Auren Noir. Marca fictícia criada para demonstração.</small>
      </footer>
    </main>
  );
}

export default App;
