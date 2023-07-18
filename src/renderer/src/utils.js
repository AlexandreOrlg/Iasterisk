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
  const validationErrorMessages = {
    length: 'Le code local doit être composé de 2 caractères.',
    alphabetic: 'Le code local doit être composé de caractères alphabétiques (A-Z).'
  }

  if (code.length !== 2) throw new Error(validationErrorMessages.length)

  // Perform toUpperCase() once to make it DRY (Don't Repeat Yourself)
  code = code.toUpperCase()
  const char1 = code.charCodeAt(0)
  const char2 = code.charCodeAt(1)

  if (char1 < 65 || char1 > 90 || char2 < 65 || char2 > 90)
    throw new Error(validationErrorMessages.alphabetic)

  return String.fromCodePoint(char1 - 65 + offset, char2 - 65 + offset)
}
