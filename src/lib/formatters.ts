type LocalizedValue<T = string> = {
  en?: T;
  kr?: T;
  uz?: T;
  [key: string]: any;
};

export function formatData(obj: any, lang: 'en' | 'kr' | 'uz'): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => formatData(item, lang)); // Recursively call for each item in the array
  }

  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      const value = obj[key];

      // If the value is a localized object with 'en', 'kr' and/or 'uz'
      if (
        typeof value === 'object' &&
        value !== null &&
        ('en' in value || 'kr' in value || 'uz' in value)
      ) {
        // Use the requested language, falling back to English (then Korean)
        // so a field not yet translated never renders as `undefined`.
        result[key] = value[lang] ?? value.en ?? value.kr;
      } else {
        result[key] = formatData(value, lang); // Recursively format nested objects
      }
    }
    return result;
  }

  // For non-object values, return as-is
  return obj;
}
