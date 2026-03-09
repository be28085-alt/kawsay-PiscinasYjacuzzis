const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg
      viewBox="0 0 1440 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-8 md:h-14"
      preserveAspectRatio="none"
    >
      <path
        d="M0 28C180 8 360 48 540 28C720 8 900 48 1080 28C1260 8 1380 38 1440 28V56H0V28Z"
        fill="hsl(var(--background))"
      />
    </svg>
  </div>
);

export default SectionDivider;