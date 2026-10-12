// מבחן פרק 4: לוגיקה.

export default {
  title: 'מבחן פרק: לוגיקה',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'ביטוי לוגי',
      prompt: 'בתא A2 כתוב 40. מה תחזיר <span class="ltr">=A2&gt;40</span>?',
      options: [
        { text: 'TRUE', correct: false },
        { text: '40', correct: false },
        { text: 'FALSE', correct: true },
        { text: '0', correct: false },
      ],
      explanation: '40 לא <b>גדול</b> מ-40, הוא שווה לו. ל"גדול או שווה" כותבים <span class="ltr">&gt;=</span>.',
    },
    {
      type: 'mc',
      topic: 'סימני השוואה',
      prompt: 'איך כותבים באקסל "שונה מ-"?',
      options: [
        { text: '<span class="ltr">&lt;&gt;</span>', correct: true },
        { text: '<span class="ltr">!=</span>', correct: false },
        { text: '<span class="ltr">=/=</span>', correct: false },
        { text: '<span class="ltr">&gt;&lt;</span>', correct: false },
      ],
      explanation: 'באקסל "שונה" נכתב <span class="ltr">&lt;&gt;</span>: גם קטן וגם גדול, כלומר לא שווה.',
    },
    {
      type: 'mc',
      topic: 'מרכאות בתנאי',
      prompt: 'איזה ביטוי כתוב נכון?',
      options: [
        { text: '<span class="ltr">C2="בוקר"</span>', correct: true },
        { text: '<span class="ltr">C2=בוקר</span>', correct: false },
        { text: '<span class="ltr">"C2"="בוקר"</span>', correct: false },
        { text: '<span class="ltr">C2="&gt;בוקר"</span>', correct: false },
      ],
      explanation: 'טקסט במרכאות, כתובת תא בלי מרכאות.',
    },
    {
      type: 'mc',
      topic: 'AND מול OR',
      prompt: 'משלוח חינם להזמנה מעל 200 ש"ח <b>או</b> ללקוחות מועדון. איזו פונקציה מתאימה?',
      options: [
        { text: 'AND', correct: false },
        { text: 'NOT', correct: false },
        { text: 'OR', correct: true },
        { text: 'אף אחת, צריך שתי עמודות', correct: false },
      ],
      explanation: 'מספיק אחד משני התנאים — OR.',
    },
    {
      type: 'mc',
      topic: 'AND מול OR',
      prompt: 'מה תחזיר <span class="ltr">=AND(5&gt;3,2&gt;4)</span>?',
      options: [
        { text: 'TRUE', correct: false },
        { text: 'FALSE', correct: true },
        { text: '5', correct: false },
        { text: '#VALUE!', correct: false },
      ],
      explanation: '5>3 נכון, אבל 2>4 לא נכון. AND דורשת ששניהם יתקיימו.',
    },
    {
      type: 'mc',
      topic: 'AND מול OR',
      prompt: '"תלמידות מכיתה יא ומכיתה יב יכולות להירשם". הכיתה ב-B2. מה נכון?',
      options: [
        { text: '<span class="ltr">=AND(B2="יא",B2="יב")</span>', correct: false },
        { text: '<span class="ltr">=OR(B2="יא","יב")</span>', correct: false },
        { text: '<span class="ltr">=B2="יא יב"</span>', correct: false },
        { text: '<span class="ltr">=OR(B2="יא",B2="יב")</span>', correct: true },
      ],
      explanation: 'תלמידה היא בכיתה אחת, אז AND תמיד FALSE. וכל תנאי ב-OR צריך להיות שלם: <span class="ltr">B2="יב"</span>, לא רק "יב".',
    },
    {
      type: 'mc',
      topic: 'NOT',
      prompt: 'בתא D2 כתוב TRUE (התלמידה קיבלה מלגה). מה תחזיר <span class="ltr">=NOT(D2)</span>?',
      options: [
        { text: 'TRUE', correct: false },
        { text: 'FALSE', correct: true },
        { text: '0', correct: false },
        { text: '#VALUE!', correct: false },
      ],
      explanation: 'NOT הופכת: TRUE נהיה FALSE. כך מקבלים עמודה של "בלי מלגה".',
    },
  ],
};
