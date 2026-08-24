export type AosAnimation = "fade-up" | "fade-down" | "fade-right" | "fade-left";

/** Maps legacy animation names used in components/pages. */
export type EntranceAnimation =
  "fadeInUp" | "fadeIn" | "fadeInLeft" | "fadeInRight";

const ANIMATION_MAP: Record<EntranceAnimation, AosAnimation> = {
  fadeInUp: "fade-up",
  fadeIn: "fade-up",
  fadeInLeft: "fade-left",
  fadeInRight: "fade-right",
};

export function aosAttrs(
  animation: EntranceAnimation = "fadeInUp",
  delayIndex = 0,
): Record<string, string> {
  const delayMs = Math.min(delayIndex, 5) * 100;
  return {
    "data-aos": ANIMATION_MAP[animation],
    ...(delayMs > 0 ? { "data-aos-delay": String(delayMs) } : {}),
  };
}
