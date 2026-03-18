# Purinta — Brand & UI Refinement Strategy
## "Make it more cute kawaii"

---

## 1. Diagnóstico actual

### Lo que veo en las Brand Guidelines existentes:
- **Paleta**: Monocromática verde (lime → forest green) con acentos rosa/coral secundarios
- **Tipografía**: Sistema actual que usa fuentes tipo sans-serif geométricas ("Stability, Amplified" visible en las slides de typography)
- **Mascota**: Purinta-chan existe y tiene expresiones variadas — es el activo más "kawaii" que tienen
- **UI Elements**: Sección presente pero minimalista, sin identidad cute definida
- **Logo**: Múltiples variaciones (horizontal, ícono solo, sobre verde, sobre blanco)
- **Tono**: El brand guidelines se ve corporativo/fintech. La web (purinta.xyz) tiene tono "degen crypto" con emojis

### El problema:
Hay una **desconexión** entre la mascota kawaii (Purinta-chan) y el resto del sistema visual. El diseño dice "fintech seria" pero el producto quiere decir "cute meme coin printer". Las guidelines actuales no resuelven esa tensión — la mascota se siente como un add-on, no como parte integral del lenguaje visual.

---

## 2. Sistema Tipográfico Propuesto

### Decisión: Ohno Softy + Rubik

| Rol | Fuente | Weight | Uso |
|-----|--------|--------|-----|
| **Wordmark / Logo** | Ohno Softy | Bold | Exclusivo para branding. No se usa en UI. |
| **H1 / Hero titles** | Ohno Softy | Regular-Bold | Landing pages, secciones hero, títulos principales. Mantiene la personalidad cute en los momentos de impacto. |
| **H2–H4 / Subtítulos** | Rubik | Medium / SemiBold | Transición entre la personalidad cute y la funcionalidad. |
| **Body / UI / Buttons** | Rubik | Regular / Medium | Todo el texto funcional: párrafos, labels, botones, inputs, navegación. |
| **Captions / Small** | Rubik | Regular / Light | Texto secundario, disclaimers, metadata. |

### Rationale:
- **Ohno Softy** reservada para momentos de marca = se mantiene especial, no se desgasta
- **Rubik** tiene bordes sutilmente redondeados → coherencia con el mood kawaii sin competir
- El contraste tipográfico (display juguetona vs UI funcional) crea jerarquía clara
- Rubik tiene excelente soporte de weights y legibilidad en tamaños pequeños

### Descartadas:
- **Nunito**: Demasiado similar a Ohno Softy → no hay contraste tipográfico
- **Quicksand**: Demasiado ancha → problemas de densidad en UI (botones, tables, forms)
- **Noto Sans**: Demasiado neutra → no aporta personalidad al proyecto

---

## 3. Elementos para hacer el branding más "Cute Kawaii"

### 3.1 Paleta de color — ampliar el espectro emocional
El verde actual es correcto como color primario (identidad de marca), pero para "cute" necesitan:
- **Pasteles complementarios**: Rosa suave, lila, amarillo menta como colores de acento/UI
- **Gradientes suaves**: Transiciones verde→menta o verde→amarillo para fondos
- **Reducir el contraste duro**: Los bloques de verde sólido oscuro se sienten corporativos. Más verde claro/menta como base.
- **Blush tones**: El rosa/coral que ya está en la paleta (lo vi en la sección Colors) debería tener más protagonismo

### 3.2 Mascota — integrar, no decorar
- Purinta-chan no debería ser solo una ilustración que aparece al lado del contenido
- **Estados de UI**: Purinta-chan puede reaccionar a estados (loading, error, success, empty state)
- **Micro-ilustraciones**: Versiones simplificadas para íconos, badges, tooltips
- **Expresiones**: Sistema de expresiones predefinidas (feliz, pensando, celebrando, preocupada) para diferentes contextos

### 3.3 Bordes y esquinas
- **Border radius generoso**: 12-16px en cards, 8-12px en botones, full-round en avatares
- **Bordes suaves**: 1px borders en colores pastel, no grises duros
- **Sombras blandas**: box-shadow difusas con tinte de color (no grises puras)

### 3.4 Micro-interacciones
- Bounce suave en botones hover
- Transiciones spring/ease-out (no lineales)
- Emojis como parte del UI language (el sitio actual ya los usa)

### 3.5 Iconografía
- Rounded/filled icon style (no outlined/sharp)
- Considerar custom icons con el estilo de Purinta-chan para features principales

---

## 4. Plan de Trabajo

### Fase 1: Foundation (tipografía + color refinado)
- [ ] Cerrar el sistema tipográfico Ohno Softy + Rubik en Figma
- [ ] Definir la paleta extendida (pasteles, acentos cute)
- [ ] Actualizar las brand guidelines con las decisiones

### Fase 2: Component Library
- [ ] Diseñar UI components base en Figma (buttons, inputs, cards, modals)
- [ ] Definir el sistema de border-radius y sombras
- [ ] Crear los estados de Purinta-chan para UI

### Fase 3: Screen Design
- [ ] Aplicar el nuevo sistema a los wireframes existentes
- [ ] Diseñar pantallas completas con el nuevo visual language
- [ ] Review con el cliente

### Fase 4: Code Implementation
- [ ] Extraer design tokens de Figma → código
- [ ] Implementar el sistema de diseño en el stack (Cloudflare Pages)
- [ ] Testing visual contra los diseños de Figma

---

## 5. Workflow Figma ↔ Código

### Integración disponible:
Tenemos acceso directo al Figma de Entrecasa Studio (plan Pro) via MCP, lo que permite:
1. **Figma → Código**: Tomar cualquier nodo/componente de Figma, obtener screenshot + código de referencia
2. **Iterar**: Diseñar en Figma → generar código → testear → ajustar en Figma → repetir
3. **Design tokens**: Extraer variables de diseño (colores, tipografía, spacing) directamente

### Flujo recomendado:
```
Wireframe en Figma
    ↓
Diseño UI (aplicar sistema cute)
    ↓
Extraer contexto via Figma MCP → obtener código base
    ↓
Refinar código + implementar interacciones
    ↓
Comparar visualmente → iterar
```

### Para empezar:
Necesitamos que compartan el link del archivo de Figma con los **wireframes** para poder empezar a diseñar la UI sobre ellos.

---

## 6. Stack técnico

- **Hosting**: Cloudflare Pages (confirmado por dominio `pages.dev`)
- **Stack**: Por confirmar — probablemente React + Vite
- **Staging**: `main.purinta-lending.pages.dev`

**Pendiente**: Confirmar el framework exacto y el approach de CSS para definir cómo implementar los design tokens.

---

*Documento de trabajo — Entrecasa Studio × Purinta*
*Actualizado: Marzo 2026*
