// מבחן פרק 8: גרפים.

export default {
  title: 'מבחן פרק: גרפים',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'בחירת גרף',
      prompt: 'רוצים להשוות את מספר המנויים בחמישה חוגים שונים. איזה גרף?',
      options: [
        { text: 'עמודות', correct: true },
        { text: 'קו', correct: false },
        { text: 'פיזור', correct: false },
        { text: 'היסטוגרמה', correct: false },
      ],
      explanation: 'השוואה בין קטגוריות = עמודות. קו הוא לזמן, פיזור לקשר בין שני משתנים מספריים.',
    },
    {
      type: 'mc',
      topic: 'בחירת גרף',
      prompt: 'רוצים להראות איך השתנה מספר המבקרים באתר בכל חודש בשנה האחרונה. איזה גרף?',
      options: [
        { text: 'עוגה', correct: false },
        { text: 'פיזור', correct: false },
        { text: 'קו', correct: true },
        { text: 'משפך', correct: false },
      ],
      explanation: 'מגמה לאורך זמן = קו.',
    },
    {
      type: 'mc',
      topic: 'בחירת גרף',
      prompt: 'רוצים לבדוק אם יש קשר בין מחיר דירה לגודלה במ"ר. איזה גרף?',
      options: [
        { text: 'עוגה', correct: false },
        { text: 'עמודות', correct: false },
        { text: 'קו', correct: false },
        { text: 'פיזור', correct: true },
      ],
      explanation: 'קשר בין שני משתנים מספריים = פיזור. כל דירה היא נקודה.',
    },
    {
      type: 'mc',
      topic: 'רכיבי גרף',
      prompt: 'מה <b>חובה</b> שיופיע בכל גרף?',
      options: [
        { text: 'תוויות נתונים על כל עמודה', correct: false },
        { text: 'צבע שונה לכל עמודה', correct: false },
        { text: 'כותרת ושמות צירים עם יחידות (ומקרא, אם יש כמה סדרות)', correct: true },
        { text: 'קווי רשת', correct: false },
      ],
      explanation: 'חוקי הברזל: כותרת, שמות צירים עם יחידות, ומקרא כשיש כמה צבעים.',
    },
    {
      type: 'mc',
      topic: 'כיוון הגרף',
      prompt: 'הגרף נבנה מימין לשמאל. איפה מתקנים?',
      options: [
        { text: 'מיון הטבלה', correct: false },
        { text: 'שינוי סוג הגרף', correct: false },
        { text: 'עיצוב ציר ← ביטול "קטגוריות בסדר הפוך"', correct: true },
        { text: 'כותרת הגרף', correct: false },
      ],
      explanation: 'הכיוון הוא הגדרה של הציר. בבגרות גרפים צריכים להיות משמאל לימין.',
    },
    {
      type: 'mc',
      topic: 'גרף על נתונים מסוכמים',
      prompt: 'יש טבלה של 800 עסקאות, ורוצים גרף של סך המכירות לכל סניף. מה הצעד הראשון?',
      options: [
        { text: 'לסמן את כל 800 השורות ולהוסיף גרף עמודות', correct: false },
        { text: 'למיין לפי סניף ולהוסיף גרף קו', correct: false },
        { text: 'להוסיף גרף עוגה על עמודת הסכום', correct: false },
        { text: 'לסכם לפי סניף (פיבוט או SUMIF), ואז לבנות גרף על הסיכום', correct: true },
      ],
      explanation: 'גרף על 800 שורות יציג 800 עמודות. קודם מסכמים לרמה שהשאלה מבקשת — סניף.',
    },
    {
      type: 'mc',
      topic: 'בחירת גרף: היסטוגרמה',
      prompt: 'רוצים לראות כמה תלמידות ישנות 4–5 שעות, כמה 5–6, כמה 6–7 וכן הלאה. איזה גרף?',
      options: [
        { text: 'עוגה', correct: false },
        { text: 'היסטוגרמה', correct: true },
        { text: 'פיזור', correct: false },
        { text: 'משפך', correct: false },
      ],
      explanation: 'התפלגות של משתנה מספרי אחד בטווחים = היסטוגרמה. פיזור צריך שני משתנים.',
    },
  ],
};
