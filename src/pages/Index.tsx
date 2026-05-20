import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const CAKE_IMG = "https://cdn.poehali.dev/projects/c05a0cc1-3b23-4ba6-9de5-c7f272141c4a/files/4452e2b8-ac9c-46a7-8852-e12bca5b0a83.jpg";
const BABY_IMG = "https://cdn.poehali.dev/projects/c05a0cc1-3b23-4ba6-9de5-c7f272141c4a/files/c86e4388-14c9-42b3-b995-677a0147d5a6.jpg";
const SURFER_CAKE_IMG = "https://cdn.poehali.dev/projects/c05a0cc1-3b23-4ba6-9de5-c7f272141c4a/bucket/0f26868f-b49d-4f41-8b7c-2e7832e5cbfb.jpeg";
const LILAC_CAKE_IMG = "https://cdn.poehali.dev/projects/c05a0cc1-3b23-4ba6-9de5-c7f272141c4a/bucket/faa2c2c0-e9da-4823-8848-9247fb394b82.jpeg";
const FROZEN_FOOD_IMG = "https://cdn.poehali.dev/projects/c05a0cc1-3b23-4ba6-9de5-c7f272141c4a/bucket/018be9a1-242f-4f9b-9124-3155d13705a6.jpeg";
const SPACE_CAKE_IMG = "https://cdn.poehali.dev/projects/c05a0cc1-3b23-4ba6-9de5-c7f272141c4a/bucket/737125cf-b11c-48c3-a6f4-9cf2f3c4e7b5.jpeg";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const cakes = [
  { emoji: "🎂", name: "День рождения", desc: "Нежный бисквит, живые цветы и любая цветовая гамма под ваш праздник" },
  { emoji: "💍", name: "Свадебные торты", desc: "Многоярусные шедевры с живыми или сахарными цветами" },
  { emoji: "🍰", name: "Детский праздник", desc: "Яркие и красочные, с безопасными красителями и любимыми персонажами" },
  { emoji: "🎁", name: "Корпоративные", desc: "С логотипом компании или уникальным посланием для близких" },
];

const babyFood = [
  { emoji: "🥕", name: "Овощные пюре", desc: "Кабачок, морковь, брокколи, тыква — одно- и многокомпонентные" },
  { emoji: "🍎", name: "Фруктовые пюре", desc: "Яблоко, груша, персик, слива — без сахара и добавок" },
  { emoji: "🍖", name: "Мясные пюре", desc: "Курица, индейка, кролик — нежная текстура для первого прикорма" },
  { emoji: "❄️", name: "Замороженные блюда", desc: "Разморозил — разогрел — накормил. Запас на неделю готов!" },
];

const advantages = [
  { icon: "Leaf", title: "Только натуральное", desc: "Ни одного консерванта, красителя или усилителя вкуса. Состав — как у бабушки." },
  { icon: "Heart", title: "Ручная работа", desc: "Каждый торт лепится и украшается вручную — два одинаковых не бывает." },
  { icon: "Shield", title: "Домашнее производство", desc: "Готовим в чистоте и с любовью, как для своей семьи." },
  { icon: "Clock", title: "Свежесть и качество", desc: "Используем сезонные фрукты и ягоды, молочные продукты высшего сорта." },
  { icon: "Star", title: "Индивидуальный подход", desc: "Учтём аллергии, пожелания по вкусу и декору — под любой запрос." },
  { icon: "Package", title: "Удобная доставка", desc: "Заморозка сохраняет вкус и питательные вещества — доставим в любое время." },
];

const reviews = [
  { name: "Марина К.", text: "Заказывала торт на день рождения дочери — она была в восторге! Вкус невероятный, декор просто сказка. Обязательно закажу ещё.", stars: 5 },
  { name: "Анна С.", text: "Детское питание — находка! Малыш ест с удовольствием, а я спокойна за состав. Теперь только у вас заказываем.", stars: 5 },
  { name: "Татьяна В.", text: "Свадебный торт превзошёл все ожидания. Гости просили рецепт, а мы не могли поверить, что это сделано дома!", stars: 5 },
  { name: "Ольга М.", text: "Замороженные пюре — это спасение для работающей мамы. Состав чистый, малыш кушает хорошо. Спасибо огромное!", stars: 5 },
];

const galleryItems = [
  { label: "Торт Сёрфер", emoji: "", img: SURFER_CAKE_IMG, color: "hsl(350 40% 96%)" },
  { label: "День рождения", emoji: "🎉", color: "hsl(25 60% 95%)" },
  { label: "Замороженное питание", emoji: "", img: FROZEN_FOOD_IMG, color: "hsl(160 30% 94%)" },
  { label: "Бэнто — сирень", emoji: "", img: LILAC_CAKE_IMG, color: "hsl(270 30% 95%)" },
  { label: "Бэнто — космос", emoji: "", img: SPACE_CAKE_IMG, color: "hsl(40 30% 95%)" },
  { label: "Мясное пюре", emoji: "🍖", color: "hsl(25 40% 94%)" },
];

export default function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "О нас" },
    { href: "#cakes", label: "Торты" },
    { href: "#baby", label: "Питание" },
    { href: "#advantages", label: "Плюсы" },
    { href: "#gallery", label: "Галерея" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40 50% 98%)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: "hsla(40,50%,98%,0.9)", borderBottom: "1px solid hsl(30 20% 90%)" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#hero" className="font-display text-2xl font-semibold" style={{ color: "hsl(340 40% 55%)" }}>
            Асюша Кукинг
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="font-body text-sm transition-colors hover:text-rose-400"
                style={{ color: "hsl(340 15% 40%)" }}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary hidden md:inline-block text-sm" style={{ padding: "10px 24px" }}>
            Заказать
          </a>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "hsl(340 20% 40%)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ background: "hsl(40 50% 98%)" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-sm py-1"
                style={{ color: "hsl(340 15% 40%)" }} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm text-center mt-2">Заказать</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(340,60%,85%,0.4) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsla(25,70%,88%,0.4) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10 py-24">
          <div>
            <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 60%)" }}>
              Домашняя кулинария
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mt-3 mb-6"
              style={{ color: "hsl(340 20% 22%)" }}>
              Торты с душой<br />
              <em className="italic" style={{ color: "hsl(340 40% 60%)" }}>и детское питание</em><br />
              из натуральных<br />продуктов
            </h1>
            <p className="font-body text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "hsl(340 10% 45%)" }}>
              Каждый торт создаётся вручную под ваш особенный день. Детское питание — без консервантов и усилителей вкуса, как готовит любящая мама.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cakes" className="btn-primary">Выбрать торт</a>
              <a href="#baby" className="btn-outline">Детское питание</a>
            </div>
            <div className="flex gap-8 mt-10">
              {[["200+", "тортов"], ["10 лет", "опыта"], ["100%", "натурально"]].map(([num, txt]) => (
                <div key={txt}>
                  <div className="font-display text-2xl font-semibold" style={{ color: "hsl(340 40% 58%)" }}>{num}</div>
                  <div className="font-body text-xs" style={{ color: "hsl(340 10% 55%)" }}>{txt}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(ellipse, hsla(340,60%,85%,0.5) 0%, transparent 70%)", transform: "scale(1.15)" }} />
              <img src={CAKE_IMG} alt="Торт ручной работы"
                className="relative object-cover rounded-full"
                style={{ width: 340, height: 340, boxShadow: "0 30px 80px hsla(340,40%,60%,0.25)" }} />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <span className="font-handwrite text-base" style={{ color: "hsl(340 40% 58%)" }}>✨ Только натуральное</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <span className="font-handwrite text-base" style={{ color: "hsl(25 55% 55%)" }}>🎂 Ручная работа</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="font-body text-xs" style={{ color: "hsl(340 10% 55%)" }}>листайте вниз</span>
          <Icon name="ChevronDown" size={16} style={{ color: "hsl(340 10% 55%)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding" style={{ background: "hsl(350 40% 97%)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <div className="relative">
              <img src={SURFER_CAKE_IMG} alt="Торт ручной работы — сёрфер"
                className="rounded-3xl w-full object-cover shadow-xl"
                style={{ maxHeight: 420 }} />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl"
                style={{ maxWidth: 180 }}>
                <div className="font-handwrite text-sm" style={{ color: "hsl(340 40% 58%)" }}>
                  Готовлю только из&nbsp;того, что выбираю сама 🌿
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in-up" style={{ transitionDelay: "0.15s" }}>
            <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 60%)" }}>Обо мне</span>
            <div className="flex items-center gap-3 my-3">
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(340 40% 70%))" }} />
              <span style={{ color: "hsl(340 40% 65%)" }}>🌸</span>
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(340 40% 70%), transparent)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-snug mb-5"
              style={{ color: "hsl(340 20% 22%)" }}>
              Готовлю с любовью<br />
              <em className="italic" style={{ color: "hsl(340 40% 60%)" }}>уже 10 лет</em>
            </h2>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "hsl(340 10% 45%)" }}>
              Меня зовут Анастасия, я кулинар и мама. Всё началось с желания кормить своего ребёнка только чистым и натуральным — без химии, без консервантов, с любовью.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "hsl(340 10% 45%)" }}>
              Сегодня я создаю торты на заказ для ваших самых важных событий и готовлю детское питание для маленьких гурманов. Домашнее производство — значит контроль каждого ингредиента.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Без ГМО", "Без консервантов", "Без усилителей", "Домашнее производство"].map(tag => (
                <span key={tag} className="font-body text-xs px-4 py-2 rounded-full"
                  style={{ background: "hsl(340 40% 93%)", color: "hsl(340 40% 50%)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAKES */}
      <section id="cakes" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 60%)" }}>Торты на заказ</span>
            <div className="flex items-center gap-3 my-3 justify-center">
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(340 40% 70%))" }} />
              <span style={{ color: "hsl(340 40% 65%)" }}>🎂</span>
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(340 40% 70%), transparent)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(340 20% 22%)" }}>
              Торт для каждого<br /><em className="italic" style={{ color: "hsl(340 40% 60%)" }}>особого момента</em>
            </h2>
            <p className="font-body text-sm mt-4 max-w-xl mx-auto" style={{ color: "hsl(340 10% 50%)" }}>
              Создаю торты под любое событие — от камерного чаепития до пышной свадьбы
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cakes.map((c, i) => (
              <div key={i} className="fade-in-up card-hover rounded-3xl p-7 text-center"
                style={{ transitionDelay: `${i * 0.1}s`, background: "hsl(350 40% 97%)" }}>
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(340 20% 28%)" }}>{c.name}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(340 10% 50%)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 fade-in-up">
            <a href="#contact" className="btn-primary">Заказать торт</a>
          </div>
        </div>
      </section>

      {/* BABY FOOD */}
      <section id="baby" className="section-padding" style={{ background: "hsl(160 30% 96%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="font-handwrite text-lg" style={{ color: "hsl(160 35% 45%)" }}>Детское питание</span>
            <div className="flex items-center gap-3 my-3 justify-center">
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(160 35% 55%))" }} />
              <span>🌿</span>
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(160 35% 55%), transparent)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(340 20% 22%)" }}>
              Чистое питание<br />
              <em className="italic" style={{ color: "hsl(160 35% 45%)" }}>с первых дней прикорма</em>
            </h2>
            <p className="font-body text-sm mt-4 max-w-xl mx-auto" style={{ color: "hsl(340 10% 50%)" }}>
              Только натуральные ингредиенты, никаких добавок. Замороженные пюре сохраняют все витамины
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {babyFood.map((b, i) => (
              <div key={i} className="fade-in-up card-hover bg-white rounded-3xl p-7 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-4">{b.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(340 20% 28%)" }}>{b.name}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(340 10% 50%)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="fade-in-up mt-12 rounded-3xl overflow-hidden grid md:grid-cols-2"
            style={{ background: "linear-gradient(135deg, hsl(160 30% 88%), hsl(160 25% 92%))" }}>
            <div className="p-8 flex flex-col justify-center">
              <div className="font-display text-2xl md:text-3xl font-light mb-3" style={{ color: "hsl(160 30% 28%)" }}>
                ❄️ Удобная заморозка
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(160 20% 40%)" }}>
                Готовые блюда быстро замораживаем и доставляем. Сделайте запас на неделю — и не думайте о готовке каждый день. Все витамины и вкус сохраняются полностью.
              </p>
            </div>
            <div className="min-h-[220px]">
              <img src={FROZEN_FOOD_IMG} alt="Замороженное детское питание"
                className="w-full h-full object-cover" style={{ minHeight: 220 }} />
            </div>
          </div>
          <div className="text-center mt-8 fade-in-up">
            <a href="#contact" className="btn-primary"
              style={{ background: "linear-gradient(135deg, hsl(160 35% 55%), hsl(160 30% 65%))" }}>
              Заказать питание
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 60%)" }}>Почему выбирают нас</span>
            <div className="flex items-center gap-3 my-3 justify-center">
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(340 40% 70%))" }} />
              <span>✨</span>
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(340 40% 70%), transparent)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(340 20% 22%)" }}>
              Домашнее — значит<br />
              <em className="italic" style={{ color: "hsl(340 40% 60%)" }}>лучшее</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="fade-in-up card-hover rounded-3xl p-7"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  background: i % 3 === 0 ? "hsl(350 40% 97%)" : i % 3 === 1 ? "hsl(25 60% 96%)" : "hsl(160 30% 95%)"
                }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-white">
                  <Icon name={a.icon as "Leaf"} size={22} style={{ color: "hsl(340 40% 60%)" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(340 20% 28%)" }}>{a.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(340 10% 50%)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-padding" style={{ background: "hsl(40 50% 97%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 60%)" }}>Галерея</span>
            <div className="flex items-center gap-3 my-3 justify-center">
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(340 40% 70%))" }} />
              <span>📸</span>
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(340 40% 70%), transparent)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(340 20% 22%)" }}>
              Наши работы
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((g, i) => (
              <div key={i} className="fade-in-up card-hover rounded-3xl overflow-hidden min-h-[180px]"
                style={{ transitionDelay: `${i * 0.07}s`, background: g.color }}>
                {"img" in g && g.img ? (
                  <div className="relative w-full h-full min-h-[180px]">
                    <img src={g.img} alt={g.label} className="w-full h-full object-cover" style={{ minHeight: 180 }} />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                      style={{ background: "linear-gradient(to top, hsla(340,20%,15%,0.6), transparent)" }}>
                      <span className="font-handwrite text-base text-white">{g.label}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 p-6 h-full min-h-[180px]">
                    <div className="text-5xl">{g.emoji}</div>
                    <span className="font-handwrite text-base text-center" style={{ color: "hsl(340 20% 40%)" }}>
                      {g.label}
                    </span>
                    <span className="font-body text-xs text-center" style={{ color: "hsl(340 10% 60%)" }}>
                      фото скоро появятся
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm mt-6" style={{ color: "hsl(340 10% 55%)" }}>
            Больше работ — в нашем Instagram 📷
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-in-up">
            <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 60%)" }}>Отзывы</span>
            <div className="flex items-center gap-3 my-3 justify-center">
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(340 40% 70%))" }} />
              <span>💬</span>
              <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(340 40% 70%), transparent)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "hsl(340 20% 22%)" }}>
              Что говорят<br />
              <em className="italic" style={{ color: "hsl(340 40% 60%)" }}>наши клиенты</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="fade-in-up card-hover rounded-3xl p-7"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  background: "hsl(350 40% 97%)",
                  border: "1px solid hsl(340 30% 92%)"
                }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} style={{ color: "hsl(40 80% 60%)" }}>★</span>
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "hsl(340 10% 40%)" }}>
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{ background: "hsl(340 40% 88%)", color: "hsl(340 40% 45%)" }}>
                    {r.name[0]}
                  </div>
                  <span className="font-body text-sm font-medium" style={{ color: "hsl(340 20% 35%)" }}>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding"
        style={{ background: "linear-gradient(160deg, hsl(340 40% 94%), hsl(25 50% 94%), hsl(160 30% 93%))" }}>
        <div className="max-w-2xl mx-auto text-center fade-in-up">
          <span className="font-handwrite text-lg" style={{ color: "hsl(340 40% 55%)" }}>Свяжитесь с нами</span>
          <div className="flex items-center gap-3 my-3 justify-center">
            <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, hsl(340 40% 70%))" }} />
            <span>💌</span>
            <div style={{ height: 1, width: 50, background: "linear-gradient(90deg, hsl(340 40% 70%), transparent)" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-5" style={{ color: "hsl(340 20% 22%)" }}>
            Давайте создадим<br />
            <em className="italic" style={{ color: "hsl(340 40% 58%)" }}>что-то вкусное</em>
          </h2>
          <p className="font-body text-sm mb-10 leading-relaxed" style={{ color: "hsl(340 10% 45%)" }}>
            Напишите нам — обсудим ваш заказ, подберём состав и оформление. Отвечаем быстро!
          </p>
          <div className="bg-white rounded-3xl p-8 text-left"
            style={{ boxShadow: "0 20px 60px hsla(340,30%,50%,0.15)" }}>
            <div className="grid gap-4 mb-6">
              <div>
                <label className="font-body text-xs mb-1.5 block" style={{ color: "hsl(340 10% 50%)" }}>Ваше имя</label>
                <input type="text" placeholder="Как вас зовут?"
                  className="w-full rounded-2xl px-4 py-3 font-body text-sm outline-none"
                  style={{ background: "hsl(350 40% 97%)", border: "1.5px solid hsl(340 30% 90%)", color: "hsl(340 20% 25%)" }} />
              </div>
              <div>
                <label className="font-body text-xs mb-1.5 block" style={{ color: "hsl(340 10% 50%)" }}>Телефон или WhatsApp</label>
                <input type="tel" placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-2xl px-4 py-3 font-body text-sm outline-none"
                  style={{ background: "hsl(350 40% 97%)", border: "1.5px solid hsl(340 30% 90%)", color: "hsl(340 20% 25%)" }} />
              </div>
              <div>
                <label className="font-body text-xs mb-1.5 block" style={{ color: "hsl(340 10% 50%)" }}>Что вас интересует?</label>
                <textarea rows={3} placeholder="Расскажите о вашем заказе..."
                  className="w-full rounded-2xl px-4 py-3 font-body text-sm outline-none resize-none"
                  style={{ background: "hsl(350 40% 97%)", border: "1.5px solid hsl(340 30% 90%)", color: "hsl(340 20% 25%)" }} />
              </div>
            </div>
            <button className="btn-primary w-full text-center">
              Отправить заявку
            </button>
            <p className="font-body text-xs text-center mt-3" style={{ color: "hsl(340 10% 60%)" }}>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: "Phone", label: "+7 (___) ___-__-__" },
              { icon: "MessageCircle", label: "WhatsApp" },
              { icon: "Instagram", label: "@вашinstagram" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <Icon name={c.icon as "Phone"} size={16} style={{ color: "hsl(340 40% 60%)" }} />
                <span className="font-body text-sm" style={{ color: "hsl(340 15% 40%)" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{ background: "hsl(340 15% 22%)" }}>
        <div className="font-display text-xl font-semibold mb-1" style={{ color: "hsl(340 40% 75%)" }}>
          Асюша Кукинг
        </div>
        <p className="font-body text-xs" style={{ color: "hsl(340 10% 55%)" }}>
          © 2026 · Домашняя кулинария · Торты и детское питание
        </p>
      </footer>
    </div>
  );
}