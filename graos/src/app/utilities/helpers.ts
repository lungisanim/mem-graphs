
/**
 * @param timestamp - milliseconds
 * @returns string formatted date
 */

export function formatTimestampToDate(timestamp: number): string
{
    const date = new Date(timestamp);
    const year = date.getFullYear(), month = String(date.getMonth() + 1).padStart(2, '0'), day = String(date.getDay()).padStart(2, '0');

    return `${year} - ${month} - ${day}`;
}

/**
 * Capitalizes the first letter of a given string.
 * @param text - The input string.
 * @returns The input string with the first letter capitalized.
 */
export function capitalizeFirstLetter(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  /**
   * Checks if a given value is null or undefined.
   * @param value - The value to check.
   * @returns True if the value is null or undefined; otherwise, false.
   */
  export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }

  /**
   * Gets current year
   * @param none
   * @returns year - the current year
   */

  export function currentYear(): string{
      const date = new Date();
      const year = String(date.getFullYear());
      return `${year}`;
  }

  