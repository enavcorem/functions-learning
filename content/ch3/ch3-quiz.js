// מבחן פרק 3. topic מנוסח כמו נושא שהמורה תרצה לראות בלוח ("ריק ולא 0").
// הסף לפי סטיית תקן לא נבדק כאן — הוא אתגר רשות.

export default {
  title: 'מבחן פרק: סטטיסטיקה באקסל',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'בחירת הפונקציה הסטטיסטית',
      prompt: 'בשאלה כתוב: "מהו הערך האמצעי של מחירי הדירות?". איזו פונקציה?',
      options: [
        { text: 'AVERAGE', correct: false },
        { text: 'MODE', correct: false },
        { text: 'MEDIAN', correct: true },
        { text: 'QUARTILE', correct: false },
      ],
      explanation: 'הערך האמצעי = חציון = MEDIAN. AVERAGE היא ממוצע ו-MODE היא שכיח.',
    },
    {
      type: 'numeric',
      topic: 'טווח',
      prompt: 'בעמודה A מספרים בין 14 ל-62 (הקטן ביותר 14, הגדול ביותר 62). מה יחזיר <span class="ltr">=MAX(A2:A40)-MIN(A2:A40)</span>?',
      answer: 48,
      explanation: 'טווח = מקסימום פחות מינימום: 62 − 14 = 48. אין פונקציה בשם RANGE.',
    },
    {
      type: 'numeric',
      topic: 'מדדי מרכז',
      prompt: 'ציונים: 70, 80, 80, 90, 100. מה תחזיר <span class="ltr">=MODE(A2:A6)</span>?',
      answer: 80,
      explanation: 'השכיח הוא הערך שחוזר הכי הרבה פעמים: 80 מופיע פעמיים.',
    },
    {
      type: 'mc',
      topic: 'פיזור',
      prompt: 'לשתי כיתות אותו ממוצע. סטיית התקן בכיתה א׳ היא 3, ובכיתה ב׳ היא 14. מה נכון?',
      options: [
        { text: 'בכיתה ב׳ הציונים גבוהים יותר', correct: false },
        { text: 'בכיתה א׳ יש יותר תלמידות', correct: false },
        { text: 'בכיתה ב׳ הציונים מפוזרים יותר, רחוק יותר מהממוצע', correct: true },
        { text: 'אי אפשר לדעת בלי הנתונים', correct: false },
      ],
      explanation: 'סטיית תקן מודדת פיזור סביב הממוצע. היא לא אומרת כלום על גובה הציונים או על מספר התלמידות.',
    },
    {
      type: 'mc',
      topic: 'אחוזונים ורבעונים',
      prompt: 'איזו נוסחה מחזירה את אחוזון 80 של הטווח <span class="ltr">B2:B30</span>?',
      options: [
        { text: '<span class="ltr">=PERCENTILE(B2:B30,80)</span>', correct: false },
        { text: '<span class="ltr">=QUARTILE(B2:B30,0.8)</span>', correct: false },
        { text: '<span class="ltr">=PERCENTILE(B2:B30,0.8)</span>', correct: true },
        { text: '<span class="ltr">=QUARTILE(B2:B30,80)</span>', correct: false },
      ],
      explanation: 'ב-PERCENTILE האחוז נכתב כשבר בין 0 ל-1. QUARTILE מקבלת רק 0 עד 4.',
    },
    {
      type: 'mc',
      topic: 'מדגם או אוכלוסייה',
      prompt: 'מה ההבדל בין STDEV.S ל-STDEV.P?',
      options: [
        { text: 'S לסטיית תקן, P לשונות', correct: false },
        { text: 'S למדגם, P לאוכלוסייה שלמה', correct: true },
        { text: 'S לטקסט, P למספרים', correct: false },
        { text: 'אין הבדל, אלה שני שמות לאותה פונקציה', correct: false },
      ],
      explanation: 'S = Sample (מדגם), P = Population (אוכלוסייה). STDEV הרגילה היא כמו STDEV.S. שונות היא VAR.',
    },
    {
      type: 'numeric',
      topic: 'שונות (VAR)',
      prompt: 'בעמודה A סטיית התקן היא 4. מה תחזיר <span class="ltr">=VAR(A2:A30)</span> על אותה עמודה?',
      answer: 16,
      explanation: 'השונות היא סטיית התקן בריבוע: 4 × 4 = 16.',
    },
    {
      type: 'mc',
      topic: 'מספר שהוא טקסט',
      prompt: 'בעמודת זמנים, תא אחד כתוב "45 דק\'". מה יעשה AVERAGE עם התא הזה?',
      options: [
        { text: 'יחשב אותו כ-45', correct: false },
        { text: 'ידלג עליו בשקט, כי הוא טקסט — והממוצע יחושב בלעדיו', correct: true },
        { text: 'יחזיר #VALUE!', correct: false },
        { text: 'יחשב אותו כ-0', correct: false },
      ],
      explanation: 'פונקציות סטטיסטיות מתעלמות מטקסט בלי הודעה. לכן בטיוב הופכים "45 דק\'" למספר 45.',
    },
  ],
};
