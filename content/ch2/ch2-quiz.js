// מבחן פרק 2: כלי נתונים.

export default {
  title: 'מבחן פרק: כלי נתונים וטיוב',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'מיון',
      prompt: 'סימנת רק את עמודת הגיל ומיינת, ובחרת "להמשיך עם הבחירה הנוכחית". מה קרה?',
      options: [
        { text: 'כל הטבלה מוינה לפי גיל', correct: false },
        { text: 'אקסל ביטל את המיון', correct: false },
        { text: 'הגילים זזו, ושאר העמודות נשארו במקום — כל גיל עבר לאדם אחר', correct: true },
        { text: 'שום דבר לא השתנה', correct: false },
      ],
      explanation: 'זו בדיוק הסכנה. עומדות על תא אחד בטבלה (בלי לסמן עמודה), או בוחרות "להרחיב את הבחירה".',
    },
    {
      type: 'mc',
      topic: 'SUBTOTAL',
      prompt: 'טבלה מסוננת לפי "צפון". מה מחזיר רק את סכום השורות המוצגות?',
      options: [
        { text: '<span class="ltr">=SUM(D2:D90)</span>', correct: false },
        { text: '<span class="ltr">=SUBTOTAL(9,D2:D90)</span>', correct: true },
        { text: '<span class="ltr">=SUBTOTAL(1,D2:D90)</span>', correct: false },
        { text: '<span class="ltr">=COUNT(D2:D90)</span>', correct: false },
      ],
      explanation: '9 = סכום, ו-SUBTOTAL מתעלמת משורות שהסינון הסתיר. (גם 109 נכונה כאן.) 1 הוא ממוצע.',
    },
    {
      type: 'mc',
      topic: 'SUBTOTAL',
      prompt: 'מה ההבדל בין <span class="ltr">SUBTOTAL(9,...)</span> ל-<span class="ltr">SUBTOTAL(109,...)</span>?',
      options: [
        { text: '109 מתעלמת גם משורות שהוסתרו ידנית; 9 סופרת אותן', correct: true },
        { text: '9 היא סכום ו-109 היא ממוצע', correct: false },
        { text: '109 מתעלמת מסינון ו-9 לא', correct: false },
        { text: 'אין הבדל', correct: false },
      ],
      explanation: 'משורות שהסינון הסתיר שתיהן מתעלמות. ההבדל הוא רק בהסתרה ידנית.',
    },
    {
      type: 'mc',
      topic: 'סינון',
      prompt: 'איך מוצאים מהר ערכים שונים שנכתבו לאותה עיר ("ת"א", "תל אביב", "תל-אביב")?',
      options: [
        { text: 'ממיינים לפי עמודה אחרת', correct: false },
        { text: 'SUM על עמודת העיר', correct: false },
        { text: 'עיצוב מותנה ← 10 העליונים', correct: false },
        { text: 'פותחים את חץ הסינון של עמודת העיר ומסתכלים על רשימת הערכים', correct: true },
      ],
      explanation: 'רשימת הערכים בסינון מציגה כל ערך שונה פעם אחת, ממוין — הכתיבים השונים מופיעים זה ליד זה.',
    },
    {
      type: 'mc',
      topic: 'עיצוב מותנה',
      prompt: 'בעמודת קורסים רוצים לצבוע רק את "אקסל" ולא את "אקסל מתקדם". מה בוחרים?',
      options: [
        { text: 'טקסט שמכיל "אקסל"', correct: false },
        { text: 'ערכים כפולים', correct: false },
        { text: 'פסי נתונים', correct: false },
        { text: 'כללי סימון תאים ← שווה ל-"אקסל"', correct: true },
      ],
      explanation: '"מכיל" יצבע גם את "אקסל מתקדם". "שווה ל-" צובע רק התאמה מדויקת.',
    },
    {
      type: 'mc',
      topic: 'עיצוב מותנה',
      prompt: 'בטבלה 300 שורות. "10% העליונים" על עמודת המחיר — כמה תאים ייצבעו?',
      options: [
        { text: '10', correct: false },
        { text: '30', correct: true },
        { text: '3', correct: false },
        { text: '100', correct: false },
      ],
      explanation: '10% מ-300 = 30. "10 העליונים" (בלי אחוז) היה צובע 10.',
    },
    {
      type: 'mc',
      topic: 'טיוב: איפה מתקנים',
      prompt: 'לפי הנוהל, איפה מתקנים תא שגוי?',
      options: [
        { text: 'בגיליון המקורי, כדי לא לבזבז זמן', correct: false },
        { text: 'רק ב"נתונים מטויבים"', correct: false },
        { text: 'ב"בתהליך טיוב": צובעים בצהוב, מתקנים שם, וכותבים בעמודת ההסבר מה היה ואיך תוקן', correct: true },
        { text: 'לא מתקנים, רק מסמנים', correct: false },
      ],
      explanation: 'מסמנים, מתקנים ומסבירים באותו גיליון. אחר כך משכפלים ל"נתונים מטויבים" ומוחקים שם את עמודת ההסבר.',
    },
    {
      type: 'numeric',
      topic: 'טיוב: כמה נמחקו',
      prompt: 'בגיליון היו 180 שורות נתונים. "הסר כפילויות" הסירה 4, ומחקת עוד שורת סה"כ אחת. כמה שורות נשארו?',
      answer: 175,
      explanation: '180 − 4 − 1 = 175. את המספרים האלה כותבים בשורה הראשונה של עמודת ההסבר.',
    },
    {
      type: 'mc',
      topic: 'טיוב: נתונים מטויבים',
      prompt: 'מה ההבדל בין "בתהליך טיוב" ל"נתונים מטויבים"?',
      options: [
        { text: 'אין הבדל, אלה שני עותקים זהים', correct: false },
        { text: 'ב"נתונים מטויבים" נמחקה עמודת ההסבר, ושם מחשבים ובונים פיבוט', correct: true },
        { text: 'ב"נתונים מטויבים" עוד לא תיקנו כלום', correct: false },
        { text: 'ב"בתהליך טיוב" עושים את הפיבוט', correct: false },
      ],
      explanation: '"בתהליך טיוב" מראה מה מצאת ואיך תיקנת. "נתונים מטויבים" הוא אותו דבר בלי עמודת ההסבר, ועליו עובדים.',
    },
  ],
};
