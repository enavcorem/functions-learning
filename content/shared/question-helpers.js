// ===== עזרי בניית שאלות לאתגרי הפטור =====
// אותו מבנה כמו בלומדת הסטטיסטיקה. explanation אופציונלי — מוצג בדוח הטעויות.
export function mc(topic, prompt, opts, correctIndex, explanation) {
  return { type: 'mc', topic, prompt, explanation, options: opts.map((text, i) => ({ text, correct: i === correctIndex })) };
}

// נוסחה בתוך אפשרות או שאלה — עטופה ב-LTR כדי שלא תתהפך בעמוד RTL.
export function L(formulaText) {
  return `<span class="ltr">${formulaText}</span>`;
}
