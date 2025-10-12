// GSAP Animation Hooks - Quick Reference
// Import examples and usage patterns

import {
  useCountUp,
  useFadeInUp,
  useParallax,
  useProgressAnimation,
  useRotateOnScroll,
  useScaleIn,
  useScrollAnimation,
  useStaggerAnimation,
  useTextReveal,
} from "@/hooks/use-gsap-animations";

/* ============================================
   1. FADE IN FROM BOTTOM
   ============================================ */
function ExampleFadeIn() {
  const elementRef = useFadeInUp(0.2); // delay in seconds

  return <div ref={elementRef}>This will fade in from bottom after 0.2s</div>;
}

/* ============================================
   2. SCALE IN WITH BOUNCE
   ============================================ */
function ExampleScaleIn() {
  const cardRef = useScaleIn(0.5);

  return (
    <div ref={cardRef} className="card">
      This will scale in with a bounce effect
    </div>
  );
}

/* ============================================
   3. STAGGER CHILDREN ANIMATION
   ============================================ */
function ExampleStagger() {
  const containerRef = useStaggerAnimation(".item", 0.1);

  return (
    <div ref={containerRef}>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
      {/* Each .item will animate with 0.1s delay between them */}
    </div>
  );
}

/* ============================================
   4. SCROLL-TRIGGERED ANIMATION
   ============================================ */
function ExampleScrollTrigger() {
  const sectionRef = useScrollAnimation({
    duration: 1,
    y: 100, // start from 100px below
  });

  return <section ref={sectionRef}>Animates when scrolled into view</section>;
}

/* ============================================
   5. PARALLAX EFFECT
   ============================================ */
function ExampleParallax() {
  const bgRef = useParallax(0.5); // speed multiplier

  return (
    <div ref={bgRef} className="parallax-bg">
      Background moves at 50% scroll speed
    </div>
  );
}

/* ============================================
   6. ANIMATED COUNTER
   ============================================ */
function ExampleCounter() {
  const counterRef = useCountUp(1000, 2, 0.5); // target, duration, delay

  return (
    <div>
      <span ref={counterRef}>0</span>
      {/* Will count from 0 to 1000 in 2 seconds */}
    </div>
  );
}

/* ============================================
   7. PROGRESS BAR ANIMATION
   ============================================ */
function ExampleProgress() {
  const progressRef = useProgressAnimation(85, 0.2);

  return (
    <div className="progress-container">
      <div ref={progressRef} className="progress-bar" />
      {/* Width animates to 85% on scroll */}
    </div>
  );
}

/* ============================================
   8. TEXT REVEAL (Word by Word)
   ============================================ */
function ExampleTextReveal() {
  const textRef = useTextReveal(0.3);

  return (
    <div ref={textRef}>
      <span className="word">This</span>
      <span className="word">reveals</span>
      <span className="word">word</span>
      <span className="word">by</span>
      <span className="word">word</span>
    </div>
  );
}

/* ============================================
   9. ROTATE ON SCROLL
   ============================================ */
function ExampleRotate() {
  const iconRef = useRotateOnScroll(360);

  return (
    <div ref={iconRef} className="rotating-icon">
      🌟
    </div>
  );
}

/* ============================================
   COMBINING MULTIPLE ANIMATIONS
   ============================================ */
function CombinedExample() {
  const headerRef = useFadeInUp(0);
  const cardsRef = useStaggerAnimation(".card", 0.1);
  const bgRef = useParallax(0.3);

  return (
    <section>
      <div ref={bgRef} className="background" />
      <h2 ref={headerRef}>Section Title</h2>
      <div ref={cardsRef}>
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </section>
  );
}

/* ============================================
   BEST PRACTICES
   ============================================ */

// ✅ DO: Use delays for sequential animations
const ref1 = useFadeInUp(0);
const ref2 = useFadeInUp(0.2);
const ref3 = useFadeInUp(0.4);

// ✅ DO: Combine hooks for complex effects
function ComplexAnimation() {
  const containerRef = useScrollAnimation();
  const childrenRef = useStaggerAnimation(".child", 0.1);

  return (
    <div ref={containerRef}>
      <div ref={childrenRef}>
        <div className="child">1</div>
        <div className="child">2</div>
      </div>
    </div>
  );
}

// ❌ DON'T: Use the same ref for multiple hooks
// This will cause conflicts!
function WrongExample() {
  const ref = useFadeInUp(0);
  // ❌ DON'T DO THIS:
  // const ref = useScaleIn(0);
}

// ✅ DO: Use different refs or combine in a custom hook
function CorrectExample() {
  const fadeRef = useFadeInUp(0);
  const scaleRef = useScaleIn(0);

  return (
    <>
      <div ref={fadeRef}>Fades in</div>
      <div ref={scaleRef}>Scales in</div>
    </>
  );
}

/* ============================================
   PERFORMANCE TIPS
   ============================================ */

// 1. Limit ScrollTrigger instances - they can impact performance
// 2. Use stagger instead of multiple individual animations
// 3. Prefer CSS transforms (x, y, scale, rotate) over layout properties
// 4. Clean up is automatic - hooks handle unmount cleanup

/* ============================================
   ACCESSIBILITY
   ============================================ */

// Respect user preferences for reduced motion:
// The hooks automatically use 'prefers-reduced-motion' when available
// GSAP respects this media query by default

export {};
