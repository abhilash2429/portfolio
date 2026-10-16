/**
 * Three turbulence displacement filters with different seeds. Cycling
 * through them makes strokes wobble like hand-drawn lines (the "line boil"
 * surya.website uses on its sketches).
 */
const SEEDS = [3, 11, 27];

const BoilFilters = () => (
  <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
    {SEEDS.map((seed, i) => (
      <filter key={seed} id={`boil-${i}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed={seed} />
        <feDisplacementMap
          in="SourceGraphic"
          scale="2.2"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    ))}
  </svg>
);

export default BoilFilters;
