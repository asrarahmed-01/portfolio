export function formatDateRange(start: string, end: string | 'Present'): string {
  return `${start} – ${end}`
}

export function getYearsOfExperience(startYear: number): number {
  return new Date().getFullYear() - startYear
}
