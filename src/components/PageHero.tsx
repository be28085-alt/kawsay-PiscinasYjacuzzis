import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  subtitle: string;
  title: string;
  description?: string;
}

const PageHero = ({ image, subtitle, title, description }: PageHeroProps) => {
  return (
    <section className="page-hero flex items-end">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(210 60% 8% / 0.65) 0%, hsl(210 50% 12% / 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-16 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="line-accent mb-4" />
          <p className="font-body text-pool-glow text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            {subtitle}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.08] mb-3">
            {title}
          </h1>
          {description && (
            <p className="font-body text-primary-foreground/70 text-sm md:text-base leading-relaxed max-w-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
