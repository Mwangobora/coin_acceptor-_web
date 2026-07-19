import { motionTransition } from "./motion-config";

export const fadeInUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: motionTransition },
} as const;
