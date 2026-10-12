// מבחן פרק 9: טקסט וטיוב.

export default {
  title: 'מבחן פרק: טקסט וטיוב',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'LEFT, RIGHT, MID',
      prompt: 'בתא A2 כתוב <span class="ltr">IL-2026-077</span>. איזו נוסחה מחזירה 2026?',
      options: [
        { text: '<span class="ltr">=MID(A2,4,4)</span>', correct: true },
        { text: '<span class="ltr">=MID(A2,3,4)</span>', correct: false },
        { text: '<span class="ltr">=LEFT(A2,4)</span>', correct: false },
        { text: '<span class="ltr">=MID(A2,4,7)</span>', correct: false },
      ],
      explanation: 'I-L-מקף הם שלושת התווים הראשונים, ולכן 2026 מתחיל בתו הרביעי, ואורכו 4.',
    },
    {
      type: 'numeric',
      topic: 'LEN',
      prompt: 'מה תחזיר <span class="ltr">=LEN("תל אביב")</span>?',
      answer: 7,
      explanation: 'ת-ל, רווח, א-ב-י-ב: 2 + 1 + 4 = 7. גם הרווח נספר.',
    },
    {
      type: 'mc',
      topic: 'TRIM',
      prompt: 'COUNTIF של "ירושלים" מחזירה 8, אבל בסינון רואים 10 שורות של ירושלים. מה הסיבה הסבירה?',
      options: [
        { text: 'בשני תאים יש רווח מיותר ("ירושלים "), וצריך TRIM', correct: true },
        { text: 'COUNTIF לא סופרת יותר מ-8', correct: false },
        { text: 'צריך לכתוב את התנאי בלי מרכאות', correct: false },
        { text: 'הסינון טועה', correct: false },
      ],
      explanation: 'בסינון רווח בסוף כמעט לא נראה לעין, אבל COUNTIF מחפשת התאמה מדויקת. TRIM מנקה את הרווחים.',
    },
    {
      type: 'mc',
      topic: 'חיבור טקסט',
      prompt: 'איזו נוסחה תיתן "לוי נועה" כשהפרטי ב-A2 והמשפחה ב-B2?',
      options: [
        { text: '<span class="ltr">=B2&amp;A2</span>', correct: false },
        { text: '<span class="ltr">=B2&amp;" "&amp;A2</span>', correct: true },
        { text: '<span class="ltr">=B2+" "+A2</span>', correct: false },
        { text: '<span class="ltr">=A2&amp;" "&amp;B2</span>', correct: false },
      ],
      explanation: 'קודם משפחה (B2), רווח במרכאות, ואז פרטי. מחברים עם &, לא עם +.',
    },
    {
      type: 'mc',
      topic: 'מספר שהוא טקסט',
      prompt: 'איך מזהים בעמודה מספר ששמור כטקסט?',
      options: [
        { text: 'הוא מודגש', correct: false },
        { text: 'הוא מיושר לשמאל', correct: false },
        { text: 'הוא מיושר לימין, ולפעמים יש משולש ירוק בפינה', correct: true },
        { text: 'אי אפשר לזהות אותו', correct: false },
      ],
      explanation: 'באקסל מספרים מיושרים לשמאל וטקסט לימין. גם COUNT שקטנה מ-COUNTA היא סימן.',
    },
    {
      type: 'mc',
      topic: 'טיוב: ריק ולא 0',
      prompt: 'בעמודת גיל מופיע 230. אין דרך לדעת את הגיל האמיתי. מה עושים?',
      options: [
        { text: 'כותבים 0', correct: false },
        { text: 'משנים ל-23', correct: false },
        { text: 'משאירים — אולי זה נכון', correct: false },
        { text: 'מוחקים ומשאירים ריק, ומתעדים בעמודת ההסבר', correct: true },
      ],
      explanation: '0 ייכנס לחישובים. 23 הוא ניחוש. ריק אומר "אין מידע", ו-AVERAGE מדלגת עליו.',
    },
    {
      type: 'mc',
      topic: 'אפס מוביל',
      prompt: 'תעודת הזהות 012345678 מופיעה כ-12345678. איך מתקנים?',
      options: [
        { text: '<span class="ltr">="0"&amp;A2</span>', correct: true },
        { text: '<span class="ltr">=A2*10</span>', correct: false },
        { text: '<span class="ltr">=0+A2</span>', correct: false },
        { text: '<span class="ltr">=VALUE(A2)</span>', correct: false },
      ],
      explanation: 'מחברים "0" כטקסט בהתחלה. חישוב מספרי לעולם לא ישמור אפס מוביל.',
    },
    {
      type: 'mc',
      topic: 'FIND ו-SEARCH',
      prompt: 'בתא A2 כתוב <span class="ltr">Tel Aviv</span>. מה תחזיר <span class="ltr">=SEARCH("a",A2)</span>?',
      options: [
        { text: '<span class="ltr">#VALUE!</span>', correct: false },
        { text: '4', correct: false },
        { text: '5', correct: true },
        { text: '0', correct: false },
      ],
      explanation: 'SEARCH לא מבחינה בין a ל-A, ולכן מוצאת את ה-A בתו 5 (T, e, l, רווח, A). FIND הייתה מחזירה #VALUE!, כי אין בתא a קטנה.',
    },
    {
      type: 'mc',
      topic: 'UPPER',
      prompt: 'מה תחזיר <span class="ltr">=UPPER("jlm-3")</span>?',
      options: [
        { text: '<span class="ltr">JLM</span>', correct: false },
        { text: '<span class="ltr">JLM-3</span>', correct: true },
        { text: '<span class="ltr">jlm-3</span>', correct: false },
        { text: '<span class="ltr">#VALUE!</span>', correct: false },
      ],
      explanation: 'UPPER הופכת אותיות באנגלית לגדולות. ספרות וסימנים נשארים כמו שהם.',
    },
  ],
};
