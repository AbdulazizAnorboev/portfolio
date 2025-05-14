type LocalizedValue<T = string> = {
  en?: T;
  kr?: T;
  [key: string]: any;
};

export function formatData(obj: any, lang: 'en' | 'kr'): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => formatData(item, lang)); // Recursively call for each item in the array
  }

  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      const value = obj[key];

      // If the value is a localized object with 'en' and/or 'kr'
      if (
        typeof value === 'object' &&
        value !== null &&
        ('en' in value || 'kr' in value)
      ) {
        result[key] = value[lang]; // Access the localized value based on the language
      } else {
        result[key] = formatData(value, lang); // Recursively format nested objects
      }
    }
    return result;
  }

  // For non-object values, return as-is
  return obj;
}
