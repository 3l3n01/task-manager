// Unidades base en minutos
const MINUTES_PER = {
  W: 7 * 24 * 60, // semana
  D: 24 * 60, // día
  H: 60, // hora
  M: 1, // minuto
} as const;

type Unit = keyof typeof MINUTES_PER;

export class DateFormat {
  /** Formatea minutos a "W D H M", omitiendo unidades en 0.
   *  Si totalMinutes === 0 -> retorna "" (sin unidades).
   *  Convierte un entero de minutos a una cadena tipo "1H 10M", omitiendo unidades en 0.
   *  Soporta signo negativo con prefijo "-".
   */
  public minutesToWdhm(totalMinutes: number): string {
    if (!Number.isInteger(totalMinutes)) {
      throw new TypeError("Se requiere un entero (minutos).");
    }
    const sign = totalMinutes < 0 ? "-" : "";
    let remaining = Math.abs(totalMinutes);

    const w = Math.floor(remaining / MINUTES_PER.W);
    remaining %= MINUTES_PER.W;
    const d = Math.floor(remaining / MINUTES_PER.D);
    remaining %= MINUTES_PER.D;
    const h = Math.floor(remaining / MINUTES_PER.H);
    remaining %= MINUTES_PER.H;
    const m = remaining;

    const parts: string[] = [];
    if (w > 0) parts.push(`${w}W`);
    if (d > 0) parts.push(`${d}D`);
    if (h > 0) parts.push(`${h}H`);
    if (m > 0) parts.push(`${m}M`);

    // Si todo fue 0, devuelve cadena vacía
    return sign + parts.join(" ");
  }

  /**
   * Parsea una cadena como "3H 2M", "1w2d", "90m", etc., y la convierte a minutos (entero).
   * Acepta unidades W, D, H, M (mayúsculas o minúsculas) y en cualquier orden.
   */
  public wdhmToMinutes(input: string): number {
    if (typeof input !== "string") {
      throw new TypeError("La entrada debe ser una cadena.");
    }
    const re = /(\d+)\s*([wdhm])/gi;
    let total = 0,
      matched = false;

    for (const m of input.matchAll(re)) {
      matched = true;
      const value = parseInt(m[1], 10);
      const unit = m[2].toUpperCase() as Unit;
      total += value * MINUTES_PER[unit];
    }

    if (!matched) {
      throw new Error('Formato inválido. Ej.: "3H 2M", "1w", "2d4h30m".');
    }
    return total;
  }
}

// --- Ejemplos rápidos ---
/*
minutesToWdhm(70)        // "1H 10M"
minutesToWdhm(10080)     // "1W"
minutesToWdhm(1500)      // "1D 1H"
wdhmToMinutes("3H 2M")   // 182
wdhmToMinutes("1w2d")    // 12960 (1*10080 + 2*1440)
minutesToWdhm(60)      -> "1H"
minutesToWdhm(0)       -> ""
*/
export default new DateFormat();
