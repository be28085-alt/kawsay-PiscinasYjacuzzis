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
              "linear-gradient(180deg, hsl(210 60% 10% / 0.6) 0%, hsl(210 50% 15% / 0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-16 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-body text-pool-glow text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {subtitle}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-4">
            {title}
          </h1>
          {description && (
            <p className="font-body text-primary-foreground/75 text-sm md:text-base leading-relaxed max-w-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;