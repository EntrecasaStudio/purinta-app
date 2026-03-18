import { useState } from "react";

// ═══════════════════════════════════════════════════════════
// PURINTA UI SYSTEM — Design Tokens + Base Components
// Ohno Softie Variable (Typekit) + Rubik (Google Fonts)
// ═══════════════════════════════════════════════════════════

// — DESIGN TOKENS —
const tokens = {
  color: {
    green: {
      50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac",
      400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d",
      800: "#166534", 900: "#14532d",
    },
    pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6" },
    lilac: { 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe" },
    yellow: { 100: "#fefce8", 200: "#fef9c3", 300: "#fde68a" },
    mint: { 100: "#ecfdf5", 200: "#d1fae5" },
    gray: {
      50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4",
      400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040",
      800: "#262626", 900: "#171717",
    },
    white: "#ffffff",
    risk: { low: "#22c55e", medium: "#fbbf24", high: "#f472b6", critical: "#ef4444" },
  },
  font: {
    display: "'ohno-softie-variable', 'Nunito', sans-serif",
    ui: "'Rubik', sans-serif",
  },
  radius: { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 },
  shadow: {
    sm: "0 1px 3px rgba(34,197,94,0.08)",
    md: "0 4px 12px rgba(34,197,94,0.1)",
    lg: "0 8px 24px rgba(34,197,94,0.12)",
    cute: "0 4px 16px rgba(244,114,182,0.15)",
    card: "0 2px 8px rgba(34,197,94,0.06), 0 8px 24px rgba(34,197,94,0.08)",
  },
};

const t = tokens;

// — GLOBAL STYLES —
const globalStyle = `
  @import url('https://use.typekit.net/rne3qwz.css');
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: ${t.color.gray[50]}; }
`;

// ═══════════════════════════════════════════════════════════
// BUTTON
// ═══════════════════════════════════════════════════════════
const buttonBase = {
  fontFamily: t.font.ui,
  fontWeight: 500,
  fontSize: 14,
  padding: "12px 24px",
  borderRadius: t.radius.full,
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  letterSpacing: 0.2,
};

const buttonVariants = {
  primary: {
    background: `linear-gradient(135deg, ${t.color.green[500]}, ${t.color.green[600]})`,
    color: t.color.white,
    boxShadow: t.shadow.md,
  },
  secondary: {
    background: t.color.white,
    color: t.color.green[700],
    border: `2px solid ${t.color.green[200]}`,
    boxShadow: t.shadow.sm,
  },
  cute: {
    background: `linear-gradient(135deg, ${t.color.pink[300]}, ${t.color.pink[400]})`,
    color: t.color.white,
    boxShadow: t.shadow.cute,
  },
  ghost: {
    background: t.color.green[50],
    color: t.color.green[700],
  },
  dark: {
    background: `linear-gradient(135deg, ${t.color.green[400]}, ${t.color.green[500]})`,
    color: t.color.gray[900],
    fontWeight: 600,
  },
};

function Button({ variant = "primary", size = "md", children, icon, ...props }) {
  const [hovered, setHovered] = useState(false);
  const sizeStyles = {
    sm: { fontSize: 13, padding: "8px 16px" },
    md: { fontSize: 14, padding: "12px 24px" },
    lg: { fontSize: 16, padding: "14px 32px" },
  };
  return (
    <button
      style={{
        ...buttonBase,
        ...buttonVariants[variant],
        ...sizeStyles[size],
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? t.shadow.lg : (buttonVariants[variant].boxShadow || "none"),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// TAG / BADGE
// ═══════════════════════════════════════════════════════════
const tagVariants = {
  green: { bg: t.color.green[100], color: t.color.green[700] },
  pink: { bg: t.color.pink[100], color: t.color.pink[400] },
  lilac: { bg: t.color.lilac[100], color: "#7c3aed" },
  yellow: { bg: t.color.yellow[200], color: "#a16207" },
  risk: { bg: t.color.pink[100], color: t.color.risk.high },
};

function Tag({ variant = "green", children }) {
  const v = tagVariants[variant];
  return (
    <span style={{
      fontFamily: t.font.ui, fontSize: 12, fontWeight: 600,
      padding: "4px 12px", borderRadius: t.radius.full,
      background: v.bg, color: v.color,
      textTransform: "uppercase", letterSpacing: 0.8,
    }}>
      {children}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// CARD
// ═══════════════════════════════════════════════════════════
function Card({ children, variant = "default", style = {} }) {
  const [hovered, setHovered] = useState(false);
  const variants = {
    default: {
      background: t.color.white,
      border: `1px solid ${t.color.green[100]}`,
      borderRadius: t.radius.lg,
      boxShadow: hovered ? t.shadow.card : t.shadow.sm,
    },
    cute: {
      background: `linear-gradient(145deg, ${t.color.white}, ${t.color.pink[50]})`,
      border: `2px solid ${t.color.pink[200]}`,
      borderRadius: t.radius.xl,
      boxShadow: hovered ? t.shadow.cute : t.shadow.sm,
    },
    dark: {
      background: t.color.gray[900],
      border: "none",
      borderRadius: t.radius.xl,
    },
  };
  return (
    <div
      style={{
        padding: 24,
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// INPUT
// ═══════════════════════════════════════════════════════════
function Input({ label, placeholder, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{ fontFamily: t.font.ui, fontSize: 13, fontWeight: 500, color: t.color.gray[500] }}>
          {label}
        </label>
      )}
      <input
        style={{
          fontFamily: t.font.ui, fontSize: 14, padding: "12px 16px",
          border: `2px solid ${focused ? t.color.green[400] : t.color.gray[200]}`,
          borderRadius: t.radius.md, outline: "none",
          transition: "all 0.2s ease", color: t.color.gray[900],
          boxShadow: focused ? `0 0 0 3px rgba(34,197,94,0.1)` : "none",
          background: t.color.white,
        }}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SLIDER (for Supply/Borrow %)
// ═══════════════════════════════════════════════════════════
function Slider({ value = 50, onChange, label, amount, token }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: t.font.ui, fontSize: 15, fontWeight: 500, color: t.color.gray[900] }}>
          {label}
        </span>
        {token && (
          <span style={{
            fontFamily: t.font.ui, fontSize: 13, fontWeight: 500,
            background: t.color.green[50], color: t.color.green[700],
            padding: "2px 10px", borderRadius: t.radius.full,
          }}>
            {token}
          </span>
        )}
      </div>

      {/* Percentage buttons */}
      <div style={{ display: "flex", gap: 8 }}>
        {[25, 50, 75, 100].map(pct => (
          <button
            key={pct}
            onClick={() => onChange?.(pct)}
            style={{
              fontFamily: t.font.ui, fontSize: 13, fontWeight: value === pct ? 600 : 400,
              padding: "8px 16px", borderRadius: t.radius.full, cursor: "pointer",
              border: value === pct ? "none" : `1.5px solid ${t.color.gray[200]}`,
              background: value === pct
                ? `linear-gradient(135deg, ${t.color.green[500]}, ${t.color.green[600]})`
                : t.color.white,
              color: value === pct ? t.color.white : t.color.gray[600],
              transition: "all 0.2s ease",
            }}
          >
            {pct}%
          </button>
        ))}
      </div>

      {/* Slider track */}
      <div style={{ position: "relative", height: 24, display: "flex", alignItems: "center" }}>
        <div style={{
          position: "absolute", left: 0, right: 0, height: 8,
          background: t.color.gray[200], borderRadius: t.radius.full,
        }} />
        <div style={{
          position: "absolute", left: 0, width: `${value}%`, height: 8,
          background: `linear-gradient(90deg, ${t.color.green[400]}, ${t.color.green[500]})`,
          borderRadius: t.radius.full, transition: "width 0.3s ease",
        }} />
        <div style={{
          position: "absolute", left: `calc(${value}% - 12px)`,
          width: 24, height: 24, borderRadius: "50%",
          background: t.color.white, border: `3px solid ${t.color.green[500]}`,
          boxShadow: t.shadow.md, transition: "left 0.3s ease",
        }} />
      </div>

      {/* Amount */}
      {amount && (
        <div style={{
          display: "flex", justifyContent: "space-between",
          fontFamily: t.font.ui, fontSize: 13, color: t.color.gray[500],
        }}>
          <span>{label}ing</span>
          <span style={{ fontWeight: 500, color: t.color.gray[700] }}>{amount}</span>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TOKEN PAIR CARD (Homepage)
// ═══════════════════════════════════════════════════════════
function TokenPairCard({ collateral, borrow, amount, action = "Borrow" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: t.color.white,
        borderRadius: t.radius.lg,
        padding: 20,
        border: `1px solid ${hovered ? t.color.green[200] : t.color.gray[200]}`,
        boxShadow: hovered ? t.shadow.card : t.shadow.sm,
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Token icons */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: `linear-gradient(135deg, ${t.color.pink[300]}, ${t.color.pink[400]})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: t.color.white, fontFamily: t.font.ui, fontSize: 16, fontWeight: 700,
          zIndex: 1,
        }}>
          {collateral?.[0] || "A"}
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: `linear-gradient(135deg, ${t.color.green[400]}, ${t.color.green[600]})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: t.color.white, fontFamily: t.font.ui, fontSize: 16, fontWeight: 700,
          marginLeft: -8,
        }}>
          {borrow?.[0] || "$"}
        </div>
      </div>

      <span style={{
        fontFamily: t.font.ui, fontSize: 14, fontWeight: 500, color: t.color.gray[700],
      }}>
        {collateral}/{borrow}
      </span>

      {amount && (
        <span style={{ fontFamily: t.font.ui, fontSize: 12, color: t.color.gray[400] }}>
          {amount}
        </span>
      )}

      <Button variant="secondary" size="sm">
        🔒 {action}
      </Button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// RISK INDICATOR (My Positions)
// ═══════════════════════════════════════════════════════════
function RiskBar({ percentage = 52, label = "Distance to LIQ" }) {
  const getRiskColor = (pct) => {
    if (pct >= 60) return t.color.risk.low;
    if (pct >= 30) return t.color.risk.medium;
    if (pct >= 15) return t.color.risk.high;
    return t.color.risk.critical;
  };
  const getRiskLabel = (pct) => {
    if (pct >= 60) return "Low";
    if (pct >= 30) return "Medium";
    if (pct >= 15) return "High";
    return "Critical";
  };
  const color = getRiskColor(percentage);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: t.font.ui, fontSize: 12, color: t.color.gray[500] }}>{label}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: t.font.ui, fontSize: 13, fontWeight: 600, color }}>
            {percentage}%
          </span>
          <Tag variant={percentage >= 60 ? "green" : percentage >= 30 ? "yellow" : "pink"}>
            {getRiskLabel(percentage)}
          </Tag>
        </div>
      </div>
      <div style={{
        height: 6, borderRadius: t.radius.full,
        background: t.color.gray[200], overflow: "hidden",
      }}>
        <div style={{
          height: "100%", width: `${percentage}%`,
          background: `linear-gradient(90deg, ${color}, ${color}dd)`,
          borderRadius: t.radius.full,
          transition: "width 0.5s ease",
        }} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// POSITION CARD (My Positions)
// ═══════════════════════════════════════════════════════════
function PositionCard({ collateral, loan, interestRate, tokenPrice, liqPrice, riskPct }) {
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: `linear-gradient(135deg, ${t.color.pink[300]}, ${t.color.pink[400]})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: t.color.white, fontFamily: t.font.ui, fontSize: 14, fontWeight: 700,
          }}>
            {collateral?.[0] || "T"}
          </div>
          <span style={{ fontFamily: t.font.ui, fontSize: 16, fontWeight: 500, color: t.color.gray[900] }}>
            {collateral}
          </span>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: t.font.display, fontSize: 24, fontWeight: 700, color: t.color.gray[900] }}>
              {loan}
            </div>
            <div style={{ fontFamily: t.font.ui, fontSize: 12, color: t.color.gray[400] }}>Loan</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: t.font.display, fontSize: 24, fontWeight: 700, color: t.color.green[600] }}>
              {interestRate}
            </div>
            <div style={{ fontFamily: t.font.ui, fontSize: 12, color: t.color.gray[400] }}>Interest Rate</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: t.color.gray[200] }} />

        {/* Details row */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: t.font.ui, fontSize: 11, color: t.color.gray[400], marginBottom: 2 }}>Token Price</div>
            <div style={{ fontFamily: t.font.ui, fontSize: 13, fontWeight: 500, color: t.color.gray[700] }}>{tokenPrice}</div>
          </div>
          <div>
            <div style={{ fontFamily: t.font.ui, fontSize: 11, color: t.color.gray[400], marginBottom: 2 }}>LIQ Price</div>
            <div style={{ fontFamily: t.font.ui, fontSize: 13, fontWeight: 500, color: t.color.gray[700] }}>{liqPrice}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: t.font.ui, fontSize: 11, color: t.color.gray[400], marginBottom: 2 }}>Risk</div>
            <Tag variant={riskPct >= 60 ? "green" : riskPct >= 30 ? "yellow" : "pink"}>
              {riskPct >= 60 ? "Low" : riskPct >= 30 ? "Med" : "High"}
            </Tag>
          </div>
        </div>

        {/* Risk bar */}
        <RiskBar percentage={riskPct} />

        {/* Actions */}
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="secondary" size="sm" style={{ flex: 1 }}>+ Update Loan</Button>
          <Button variant="ghost" size="sm" style={{ flex: 1 }}>Repay</Button>
        </div>
      </div>
    </Card>
  );
}

// ═══════════════════════════════════════════════════════════
// MASCOT AREA (Reactive Purinta-chan placeholder)
// ═══════════════════════════════════════════════════════════
function MascotArea({ mood = "happy", message }) {
  const moods = {
    happy: { bg: `linear-gradient(135deg, ${t.color.green[100]}, ${t.color.mint[200]})`, emoji: "😊", border: t.color.green[200] },
    excited: { bg: `linear-gradient(135deg, ${t.color.yellow[100]}, ${t.color.green[100]})`, emoji: "🎉", border: t.color.yellow[300] },
    worried: { bg: `linear-gradient(135deg, ${t.color.pink[100]}, ${t.color.yellow[100]})`, emoji: "😰", border: t.color.pink[200] },
    thinking: { bg: `linear-gradient(135deg, ${t.color.lilac[100]}, ${t.color.pink[100]})`, emoji: "🤔", border: t.color.lilac[200] },
  };
  const m = moods[mood] || moods.happy;

  return (
    <div style={{
      background: m.bg, borderRadius: t.radius.xl, padding: 32,
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 12, minHeight: 160,
      border: `2px solid ${m.border}`, transition: "all 0.3s ease",
    }}>
      <span style={{ fontSize: 48 }}>{m.emoji}</span>
      <span style={{
        fontFamily: t.font.ui, fontSize: 13, fontWeight: 500, color: t.color.gray[600],
        textAlign: "center",
      }}>
        {message || "Purinta-chan reacts here"}
      </span>
      <span style={{ fontFamily: t.font.ui, fontSize: 11, color: t.color.gray[400] }}>
        [ Mascot illustration goes here ]
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HEADER / NAV
// ═══════════════════════════════════════════════════════════
function Header({ connected = false, address }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 20px",
      background: t.color.white,
      borderBottom: `1px solid ${t.color.gray[200]}`,
    }}>
      <span style={{
        fontFamily: t.font.display, fontWeight: 700, fontSize: 22, color: t.color.green[600],
      }}>
        Purinta
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {connected && address && (
          <span style={{
            fontFamily: t.font.ui, fontSize: 12, fontWeight: 500,
            background: t.color.green[50], color: t.color.green[700],
            padding: "6px 12px", borderRadius: t.radius.full,
          }}>
            {address}
          </span>
        )}
        <Button variant={connected ? "ghost" : "primary"} size="sm">
          {connected ? "⏻" : "Connect"}
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN SHOWCASE
// ═══════════════════════════════════════════════════════════
export default function PurintaUISystem() {
  const [supplyPct, setSupplyPct] = useState(50);
  const [borrowPct, setBorrowPct] = useState(50);

  return (
    <div style={{ fontFamily: t.font.ui, background: t.color.gray[50], minHeight: "100vh" }}>
      <style>{globalStyle}</style>

      {/* ── HERO HEADER ── */}
      <div style={{
        background: `linear-gradient(135deg, ${t.color.green[600]}, ${t.color.green[500]})`,
        padding: "48px 24px", color: t.color.white,
      }}>
        <h1 style={{ fontFamily: t.font.display, fontWeight: 700, fontSize: 36, marginBottom: 8 }}>
          Purinta UI System
        </h1>
        <p style={{ fontFamily: t.font.ui, fontWeight: 300, fontSize: 16, opacity: 0.9 }}>
          Component library — Ohno Softie Variable + Rubik
        </p>
      </div>

      <div style={{ maxWidth: 420, margin: "0 auto", padding: "0 16px" }}>

        {/* ══ SECTION: HEADER ══ */}
        <SectionTitle>Header — Nav</SectionTitle>
        <Header connected={false} />
        <div style={{ height: 12 }} />
        <Header connected={true} address="0x23k...4534" />

        {/* ══ SECTION: BUTTONS ══ */}
        <SectionTitle>Buttons</SectionTitle>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Button variant="primary">Start Printing</Button>
          <Button variant="secondary">Learn More</Button>
          <Button variant="cute">Join Waitlist</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large CTA</Button>
        </div>

        {/* ══ SECTION: TAGS ══ */}
        <SectionTitle>Tags / Badges</SectionTitle>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Tag variant="green">Active</Tag>
          <Tag variant="pink">New</Tag>
          <Tag variant="lilac">Beta</Tag>
          <Tag variant="yellow">Trending</Tag>
        </div>

        {/* ══ SECTION: INPUT ══ */}
        <SectionTitle>Input</SectionTitle>
        <Input label="Wallet Address" placeholder="0x..." />

        {/* ══ SECTION: SLIDER ══ */}
        <SectionTitle>Supply / Borrow Slider</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Slider
            value={supplyPct} onChange={setSupplyPct}
            label="Supply" token="PEPE" amount="210,34B"
          />
          <div style={{ height: 1, background: t.color.gray[200] }} />
          <Slider
            value={borrowPct} onChange={setBorrowPct}
            label="Borrow" token="USDC" amount="$751,232.14"
          />
        </div>

        {/* ══ SECTION: MASCOT ══ */}
        <SectionTitle>Mascot Reactive Area</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <MascotArea mood="happy" message="Looking good! Safe borrow ratio" />
          <MascotArea mood="worried" message="Careful! Getting close to liquidation" />
          <MascotArea mood="excited" message="Transaction confirmed!" />
        </div>

        {/* ══ SECTION: TOKEN CARDS ══ */}
        <SectionTitle>Token Pair Cards (Homepage)</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <TokenPairCard collateral="PEPE" borrow="USDC" action="Borrow" />
          <TokenPairCard collateral="ETH" borrow="USDC" amount="420.69B" action="Borrow" />
          <TokenPairCard collateral="DOGE" borrow="USDT" action="Repay" />
          <TokenPairCard collateral="SHIB" borrow="DAI" action="Invest" />
        </div>

        {/* ══ SECTION: POSITION CARD ══ */}
        <SectionTitle>Position Card (My Positions)</SectionTitle>
        <PositionCard
          collateral="PEPE"
          loan="$25,240K"
          interestRate="12.5%"
          tokenPrice="$0.041200"
          liqPrice="$0.05714%"
          riskPct={52}
        />
        <div style={{ height: 12 }} />
        <PositionCard
          collateral="ETH"
          loan="$8,120"
          interestRate="4.2%"
          tokenPrice="$3,241.00"
          liqPrice="$2,100.00"
          riskPct={78}
        />

        {/* ══ SECTION: RISK BARS ══ */}
        <SectionTitle>Risk Indicators</SectionTitle>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <RiskBar percentage={78} label="Safe position" />
            <RiskBar percentage={52} label="Moderate risk" />
            <RiskBar percentage={22} label="High risk" />
            <RiskBar percentage={8} label="Critical!" />
          </div>
        </Card>

        {/* ══ SECTION: BORROW SUMMARY ══ */}
        <SectionTitle>Borrow Summary</SectionTitle>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontFamily: t.font.ui, fontSize: 13, color: t.color.gray[400], marginBottom: 4 }}>
              Borrowing
            </div>
            <div style={{ fontFamily: t.font.display, fontSize: 36, fontWeight: 700, color: t.color.gray[900] }}>
              $751,232.14
            </div>
            <div style={{ fontFamily: t.font.ui, fontSize: 14, color: t.color.gray[400] }}>tokens</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["You supply", "1000.00 PEPE"],
              ["You repay", "700,000 USDC"],
              ["(Token) Price", "$0.041200"],
              ["LIQ Price", "$0.05714%"],
              ["Distance to LIQ", "52.4%"],
            ].map(([label, value]) => (
              <div key={label} style={{
                display: "flex", justifyContent: "space-between",
                fontFamily: t.font.ui, fontSize: 13, padding: "6px 0",
                borderBottom: `1px solid ${t.color.gray[100]}`,
              }}>
                <span style={{ color: t.color.gray[500] }}>{label}</span>
                <span style={{ color: t.color.gray[700], fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <Button variant="primary" size="lg" style={{ width: "100%", justifyContent: "center" }}>
              🔒 Borrow Now
            </Button>
          </div>
        </Card>

        {/* ══ SECTION: DARK VARIANT ══ */}
        <SectionTitle>Dark Section</SectionTitle>
        <Card variant="dark" style={{ padding: 32 }}>
          <h2 style={{ fontFamily: t.font.display, fontWeight: 700, fontSize: 28, color: t.color.white, marginBottom: 8 }}>
            Ready to print?
          </h2>
          <p style={{ fontFamily: t.font.ui, fontSize: 14, color: t.color.gray[300], marginBottom: 20 }}>
            Join thousands earning yield the cute way.
          </p>
          <Button variant="dark">Launch App →</Button>
        </Card>

        <div style={{ height: 64 }} />
      </div>
    </div>
  );
}

// — Helper —
function SectionTitle({ children }) {
  return (
    <div style={{
      fontFamily: t.font.ui, fontWeight: 600, fontSize: 11,
      letterSpacing: 2, textTransform: "uppercase",
      color: t.color.green[600], marginTop: 40, marginBottom: 16,
      paddingBottom: 8, borderBottom: `2px solid ${t.color.green[100]}`,
    }}>
      {children}
    </div>
  );
}
