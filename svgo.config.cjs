// SVGO config tuned for Purinta mascot SVGs.
//
// The V2 emote SVGs are NOT static art — CSS targets internal classes
// (`m-foot-l`, `m-foot-r`, `m-cheek-l`, `m-eyes`, `m-mouth-stroke`,
// `m-body-overlay`, etc.) and the per-state animations rely on tag
// names matching (e.g. `ellipse.m-foot-r` selectors). SVGO's default
// preset removes some of these.
//
// What we disable vs preset-default:
//   - convertShapeToPath        → keeps <ellipse> as <ellipse>; otherwise
//                                  CSS selectors like `ellipse.m-foot-r`
//                                  break.
//   - mergePaths                → don't merge class-bearing paths into
//                                  unclassed ones.
//   - cleanupIds                → some IDs (mask0_*, paint0_*) are used
//                                  intra-file by url(#X) and the V2 parser
//                                  re-suffixes them at runtime; safer to
//                                  leave alone.
//   - removeViewBox             → already off by default in modern svgo,
//                                  but make explicit.
//   - inlineStyles              → JS reads class attributes, don't move
//                                  things around.
//
// Everything else (precision rounding, unused attr removal, comment
// strip, color shortening, multipass) runs as default.

// `removeViewBox` lives outside preset-default in modern svgo (it's a
// standalone plugin that's off by default). Listing only the overrides
// that ARE part of preset-default avoids the noisy warning.
// `removeViewBox` lives outside preset-default in modern svgo (it's a
// standalone plugin that's off by default). Listing only the overrides
// that ARE part of preset-default avoids the noisy warning.
//
// Critical: convertPathData is run with forceAbsolutePath: true. The V2
// emote parser at index.html:8871 reads `bodyOrigin` from path[0]'s `d`
// attribute via the regex `^M([\d.]+)…` — case-sensitive uppercase M.
// SVGO's default convertPathData rewrites `M53.5883 77.1377` → `m53.588 77.138`
// (relative moveto), which makes the regex miss → `v2BodySvg` never sets
// → every non-fullSvg emote (ultra-safe / looking-good / getting-risky /
// danger-zone) renders without its body. Forcing absolute moveto keeps
// the on-disk savings while preserving the contract the parser relies on.
// `removeViewBox` lives outside preset-default in modern svgo (it's a
// standalone plugin that's off by default). Listing only the overrides
// that ARE part of preset-default avoids the noisy warning.
//
// Critical config detail: convertPathData is run with
// `forceAbsolutePath: true`. The V2 emote parser at index.html:8871
// reads `bodyOrigin` from path[0]'s `d` via the case-sensitive regex
// `^M([\d.]+)…`. Default convertPathData rewrites `M53.5883 77.1377` →
// `m53.588 77.138` (lowercase m = relative); the regex misses,
// `bodyOrigin` is null, the guard at 8902 fails, and every non-fullSvg
// emote renders without its body. Forcing absolute moveto preserves
// the contract.
//
// `collapseGroups: false` — DO NOT merge a wrapper <g> into its parent
// or its child. Two specific failures otherwise:
//   1. basic-money — the bill animation is structured as an OUTER
//      `<g clip-path="url(#slot-mask)">` containing an inner
//      `<g><animateTransform .../>...bills</g>`. The inner <g> exists
//      so the clip-path stays static while the bills translate inside
//      it. collapseGroups merged the inner into the outer; the
//      animateTransform then moved the clip-path together with the
//      bills → bills appear outside the slot.
//   2. meltdown — `<g class="m-puddle m-puddle-2"><path/></g>` had
//      the class on the group; CSS keyframe `md-puddle-pop` animates
//      `.m-puddle-2` with a transform-origin set on the group's
//      coordinate space. collapseGroups moved the class to the inner
//      path → transform anchors at a different point → scale animation
//      reads wrong (or doesn't fire visibly).
// `floatPrecision: 1` at the global config level applies the precision
// drop across every numeric plugin (cleanupNumericValues, convertPathData,
// convertTransform, cleanupListOfValues). 1 decimal is invisible at the
// 117-150 px viewBox-rendered sizes; mascot details are >2 px so a 0.05
// position drift is sub-pixel.
module.exports = {
  multipass: true,
  floatPrecision: 1,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertShapeToPath: false,
          mergePaths: false,
          cleanupIds: false,
          inlineStyles: false,
          collapseGroups: false,
          convertPathData: { forceAbsolutePath: true, floatPrecision: 1 },
          removeUnknownsAndDefaults: {
            keepDataAttrs: true,
            keepAriaAttrs: true,
          },
        },
      },
    },
  ],
};
