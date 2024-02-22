/**
 * Generates a random alphanumeric string of a given length.
 *
 * @param {number} [length=12] - The length of the generated string.
 * (Optional, default is 12.)
 * @returns {string} The generated string of random alphanumeric characters.
 */
export const generateRandomId = (length = 12) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersArr = Array.from({ length })

  return charactersArr.map(() => characters[Math.floor(Math.random() * characters.length)]).join('')
}

/**
 * This function converts a country localization code to its corresponding
 * emoji representation using regional indicator symbols
 *
 * @param {string} code - Input country localization code
 * @throws Will throw an error if the input is not a two-letter alphabetical string
 * @return {string} - The emoji representation of the input code
 */
export const localToEmoji = (code) => {
  // Define constants at the beginning
  const offset = 0x1f1e6 // Offset for regional indicator symbols

  if (code.length !== 2) throw new Error('Le code local doit être composé de 2 caractères.')

  // Perform toUpperCase() once to make it DRY (Don't Repeat Yourself)
  code = code.toUpperCase()
  const char1 = code.charCodeAt(0)
  const char2 = code.charCodeAt(1)

  if (char1 < 65 || char1 > 90 || char2 < 65 || char2 > 90)
    throw new Error('Le code local doit être composé de caractères alphabétiques (A-Z).')

  return String.fromCodePoint(char1 - 65 + offset, char2 - 65 + offset)
}

/**
 * Calculates the time elapsed since the given date.
 *
 * @param {Date} date - The date to calculate the time since.
 * @return {string} - The human-readable representation of the elapsed time.
 *                   The format is in the largest time unit possible (eg. "2 years", "3 months", "1 day", etc.),
 *                   or in seconds if less than a minute has passed.
 */
export function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000)

  const intervals = [
    { label: 'années', seconds: 31536000 },
    { label: 'mois', seconds: 2592000 },
    { label: 'jours', seconds: 86400 },
    { label: 'heures', seconds: 3600 },
    { label: 'minutes', seconds: 60 }
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = seconds / intervals[i].seconds
    if (interval > 1) {
      return 'Il y a ' + Math.floor(interval) + ' ' + intervals[i].label + (Math.floor(interval) > 1 ? 's' : '');
    }
  }

  return null
}
