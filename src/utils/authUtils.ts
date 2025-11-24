export type PasswordStrength = "Weak" | "Medium" | "Strong";

export const getPasswordStrength = (password: string): PasswordStrength => {
  if (!password || password.length === 0) {
    return "Weak";
  }

  const length = password.length;

  // Character type checks
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  // Count unique character types
  const characterTypesCount = [
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  // Check for common Weak patterns
  const hasSequentialChars =
    /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(
      password
    );
  const hasRepeatedChars = /(.)\1{2,}/.test(password);
  const hasCommonPattern =
    /(password|12345|qwerty|admin|welcome|letmein)/i.test(password);

  // Scoring system
  let score = 0;

  // Length scoring
  if (length >= 12) score += 3;
  else if (length >= 8) score += 2;
  else if (length >= 6) score += 1;

  // Character variety scoring
  if (characterTypesCount >= 4) score += 3;
  else if (characterTypesCount >= 3) score += 2;
  else if (characterTypesCount >= 2) score += 1;

  // Penalties for Weak patterns
  if (hasSequentialChars) score -= 1;
  if (hasRepeatedChars) score -= 1;
  if (hasCommonPattern) score -= 2;

  // Strong: 12+ chars with all 4 character types
  if (
    length >= 12 &&
    characterTypesCount === 4 &&
    !hasCommonPattern &&
    score >= 5
  ) {
    return "Strong";
  }

  // Strong: 10+ chars with 3+ types and good score
  if (length >= 10 && characterTypesCount >= 3 && score >= 4) {
    return "Strong";
  }

  // Medium: 8+ chars with decent variety
  if (length >= 8 && characterTypesCount >= 2 && score >= 2) {
    return "Medium";
  }

  // Weak: everything else
  return "Weak";
};
