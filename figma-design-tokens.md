# Purinta App — Design Tokens para Figma

## Colores — Green (Mascota)
| Token | Hex | Uso |
|-------|-----|-----|
| green-200 | #9ECF84 | Accents claros, borders |
| green-300 | #78BA68 | Slider fill claro, sombra botones |
| green-400 | #57A053 | Slider fill, gradientes |
| green-500 | #498746 | Gradientes oscuros, thumb stroke |
| green-600 | #39763D | Logo, iconos, bordes activos |
| green-700 | #185229 | Textos verdes, outlines mascota |
| green-800 | #144D26 | Deep accents |

## Colores — Neutrals
| Token | Hex | Uso |
|-------|-----|-----|
| gray-50 | #FAF8F5 | Fondo página, pills token |
| gray-100 | #F3F1ED | Borders cards |
| gray-200 | #E5E1DA | Borders, dividers |
| text-primary | #333333 | Todos los textos oscuros |
| text-secondary | #6B7380 | Labels secundarios |
| text-muted | #B0B0B0 | Placeholders |

## Colores — Crema/Mascota
| Token | Hex | Uso |
|-------|-----|-----|
| green-50 | #FFFDEA | Fondos claros |
| green-100 | #F1F3E7 | Fondos pasteles |
| yellow-100 | #FFFCDE | Cremas |
| yellow-200 | #F2EEC9 | Cremas medios |
| E5E1BE | #E5E1BE | Border token-select (tierra) |

## Colores — Pink/Blush (Mejillas mascota)
| Token | Hex | Uso |
|-------|-----|-----|
| pink-400 | #FEAAA4 | Accent mejillas |
| pink-200 | #F2C4C4 | Borders worried |

## Colores — Fondos especiales
| Uso | Valor |
|-----|-------|
| Homepage | linear-gradient(108deg, rgb(228,243,233) 2.38%, rgb(254,240,240) 106.36%) |
| Emoji happy | linear-gradient(108deg, rgb(228,243,233) 2.38%, rgb(254,240,240) 106.36%) |
| Emoji worried | linear-gradient(108deg, #FEECE8, #FFFAFA) |
| Emoji positive | linear-gradient(135deg, #daf0e2, #eef7f1) |
| Modal overlay | rgba(15,36,25,0.75) |
| Slider track bg | #e4f3e9 |
| Cards | white |
| Token cards (home) | rgba(255,255,255,0.75) + backdrop-blur(8px) |
| Btn secondary bg | #f7f8f4 |

## Tipografía
| Rol | Font | Weight | Size |
|-----|------|--------|------|
| Display / Títulos | Fredoka | 500 | 24px |
| Section titles (Supply/Borrow) | Fredoka | 500 | 20px |
| Token names | Fredoka | 500 | 18px |
| Token pair names | Fredoka | 500 | 16px |
| Botones | Fredoka | 500 | 14px (base), 16px (lg) |
| Body / Labels | Rubik | 400-500 | 12-14px |
| Info labels (Supplying) | Rubik | 400 | 12px |
| Info values | Rubik | 500 | 14px |
| Summary label | Rubik | 400 | 16px |
| Summary amount | Fredoka | 500 | 32px |
| Risk tags | Rubik | 600 | 10px uppercase |
| Prev label | Rubik | 400 | 9px, letter-spacing: 1px |
| Btn letter-spacing | 0.3px | | |

## Spacing / Radius
| Token | Valor |
|-------|-------|
| r-sm | 8px |
| r-md | 12px |
| r-lg | 16px |
| r-xl | 24px |
| r-full | 9999px (pills) |
| Cards border-radius | 28px |
| Emote area top | 8px 8px |
| Emote area bottom | 32px 32px |
| Slider track height | 12px |
| Slider thumb | 32x32px |
| Percentage buttons | 64x42px, r-full |
| Token icons (home) | 40px |
| Token icons (positions) | 36px |
| Mini icons (sliders) | 25px |

## Componentes clave
- **Btn Primary**: gradient(160deg, green-600, green-700), shadow hover 5px green-300, scale 1.02
- **Btn Secondary**: bg #f7f8f4, border 1px green-400, r-full, shadow hover 5px green-300
- **Slider Thumb**: estrella 4 puntas SVG, fill white, stroke #498746 (3px), paint-order: stroke fill
- **Token Select Pill**: bg green-50, border 1.5px #E5E1BE, r-full
- **Token Badge (static)**: bg gray-50, r-full, sin border
- **Risk Tag**: pill, 10px uppercase, 600 weight

## Screens (375px viewport)
1. Homepage — gradiente, mascota animada, 5 token cards
2. Borrow (disconnected) — sliders vacíos, emoji money, connect CTA
3. Borrow (connected) — sliders activos, emoji worried, borrow CTA
4. Confirmation — modal overlay verde, emoji celebration, progress bar
5. My Positions — 2 position cards, risk bars, update/repay buttons
6. Update Loan — sliders con prev markers, diagonal stripes, emoji happy
