// Las fechas del blog están escritas como "28 MAR 2025". Los buscadores necesitan formato ISO.
const MONTHS: Record<string, string> = {
    ENE: "01",
    FEB: "02",
    MAR: "03",
    ABR: "04",
    MAY: "05",
    JUN: "06",
    JUL: "07",
    AGO: "08",
    SEP: "09",
    SEPT: "09",
    OCT: "10",
    NOV: "11",
    DIC: "12",
};

export function blogDateToISO(date: string): string | undefined {
    const match = date.trim().toUpperCase().match(/^(\d{1,2})\s+([A-Z]+)\s+(\d{4})$/);
    if (!match) return undefined;
    const month = MONTHS[match[2]];
    if (!month) return undefined;
    return `${match[3]}-${month}-${match[1].padStart(2, "0")}`;
}
