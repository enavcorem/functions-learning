// פרק 4, יחידה 1: ביטוי לוגי לבד, לפני IF. מי שמבינה ש-B2>=55 הוא
// "שאלה שהתשובה עליה TRUE או FALSE" מבינה את חצי מ-IF ואת כל
// התנאים של COUNTIF.
// לפי התבנית הפדגוגית (12.10): טבלת ששת הסימנים פוצלה לשקפים (שווה/שונה,
// גדול/קטן), ובסוף שאלת match שמסכמת. שאלה בסוף כל שקף.
// בדיקה: באקסל, בהשוואה בין מספר לטקסט, טקסט תמיד "גדול" ממספר.
//   לכן 150>"100" מחזיר FALSE, וכך גם 80>"100" ו-220>"100".
// בדיקה: השוואת טקסט לא רגישה לאותיות גדולות/קטנות: "Yes"="yes" ← TRUE.

export default {
  title: 'אמת או שקר',
  slides: [
    // ---------- למה ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h1>אקסל עונה על שאלות כן/לא ✅</h1>
          <p>אפשר לשאול את אקסל שאלה. הוא עונה <span class="ltr"><b>TRUE</b></span> (אמת) או <span class="ltr"><b>FALSE</b></span> (שקר).</p>
          <p>השאלה נקראת <b>ביטוי לוגי</b>. כל IF וכל COUNTIF בנויים עליה.</p>`,
        },
        {
          type: 'sheet',
          header: ['שם', 'ציון', 'עברה?'],
          rows: [
            ['נועה', '82', 'TRUE'],
            ['מאיה', '47', 'FALSE'],
            ['שירה', '55', 'TRUE'],
          ],
          formula: { cell: 'C2', text: '=B2>=55' },
          caption: 'אין כאן אף פונקציה, רק שאלה: "האם B2 גדול או שווה ל-55?"',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בשורה של נועה (ציון 82), מה יחזיר <span class="ltr">=B2&gt;90</span>?',
        options: [
          { text: 'TRUE', correct: false, hint: '82 לא גדול מ-90. התשובה לשאלה "האם 82 גדול מ-90?" היא לא.' },
          { text: 'FALSE', correct: true },
          { text: '82', correct: false, hint: 'ביטוי לוגי לא מחזיר את הערך שבתא, רק TRUE או FALSE.' },
          { text: '"עברה"', correct: false, hint: 'אקסל לא כותב מילים משלו. ביטוי לוגי עונה רק TRUE או FALSE.' },
        ],
      },
    },

    // ---------- שווה ושונה ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>שווה, ושונה מ-</h2>
          <p>🔹 <span class="ltr"><b>=</b></span> שווה: <span class="ltr">B2="ערב"</span><br>
          🔹 <span class="ltr"><b>&lt;&gt;</b></span> שונה מ-: <span class="ltr">B2&lt;&gt;"ערב"</span></p>
          <p>במקלדת אין ≠. כותבים "קטן" ו"גדול" צמודים: <span class="ltr">&lt;&gt;</span>.</p>`,
        },
        {
          type: 'sheet',
          header: ['שם', 'עיר', 'לא מחיפה?'],
          rows: [
            ['נועה', 'חיפה', 'FALSE'],
            ['מאיה', 'עכו', 'TRUE'],
            ['שירה', 'נצרת', 'TRUE'],
          ],
          formula: { cell: 'C2', text: '=B2<>"חיפה"' },
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בעמודה B כתובה עיר. איזה ביטוי בודק שהעיר <b>אינה</b> חיפה?',
        options: [
          { text: '<span class="ltr">B2&lt;&gt;חיפה</span>', correct: false, hint: 'חיפה היא טקסט, ולכן היא חייבת להיות בתוך מרכאות. בלי מרכאות אקסל יחפש משהו בשם הזה ויחזיר שגיאה.' },
          { text: '<span class="ltr">B2!="חיפה"</span>', correct: false, hint: '<span class="ltr">!=</span> הוא "שונה" בשפות תכנות, אבל לא באקסל. באקסל כותבים <span class="ltr">&lt;&gt;</span>.' },
          { text: '<span class="ltr">B2="לא חיפה"</span>', correct: false, hint: 'זה בודק אם כתוב בתא בדיוק "לא חיפה". צריך את הסימן "שונה מ-".' },
          { text: '<span class="ltr">B2&lt;&gt;"חיפה"</span>', correct: true },
        ],
      },
    },

    // ---------- גדול וקטן ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>גדול, קטן, ו"או שווה"</h2>
          <p>🔹 <span class="ltr"><b>&gt;</b></span> ו-<span class="ltr"><b>&lt;</b></span>: גדול מ-, קטן מ-. <b>בלי</b> הערך עצמו.<br>
          🔹 <span class="ltr"><b>&gt;=</b></span> ו-<span class="ltr"><b>&lt;=</b></span>: גדול או שווה, קטן או שווה. <b>כולל</b> הערך עצמו.</p>
          <p>הסדר קבוע: קודם הגדול/קטן, אחר כך השווה. <span class="ltr">=&gt;</span> הוא שגיאה.</p>`,
        },
        {
          type: 'sheet',
          header: ['ציון', '', 'ביטוי', 'תוצאה'],
          rows: [
            ['55', '', 'A2>55', 'FALSE'],
            ['', '', 'A2>=55', 'TRUE'],
            ['', '', 'A2<55', 'FALSE'],
            ['', '', 'A2<=55', 'TRUE'],
          ],
          marks: { A2: 'input' },
          caption: 'ציון 55 בדיוק: רק הסימנים עם "או שווה" מחזירים TRUE.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בתא B2 כתוב 70. מה תחזיר <span class="ltr">=B2&lt;=70</span>?',
        options: [
          { text: 'TRUE', correct: true },
          { text: 'FALSE', correct: false, hint: '<span class="ltr">&lt;=</span> פירושו "קטן <b>או שווה</b>". 70 שווה ל-70, ולכן התשובה אמת.' },
          { text: '70', correct: false, hint: 'ביטוי לוגי לא מחזיר מספר, רק TRUE או FALSE.' },
          { text: '#VALUE!', correct: false, hint: 'הביטוי תקין לגמרי. אקסל משווה שני מספרים ועונה.' },
        ],
      },
    },

    // ---------- בקיצור: ששת הסימנים ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>בקיצור: הסימנים</h2>
          <p>אותם סימנים בדיוק משמשים ב-IF, ב-COUNTIF וב-SUMIF.</p>`,
        },
      ],
      question: {
        type: 'match',
        prompt: 'התאימי כל סימן למשמעות שלו:',
        pairs: [
          { left: '<span class="ltr">&lt;&gt;</span>', right: 'שונה מ-' },
          { left: '<span class="ltr">&gt;=</span>', right: 'גדול או שווה' },
          { left: '<span class="ltr">&lt;</span>', right: 'קטן מ- (בלי השווה)' },
          { left: '<span class="ltr">&lt;=</span>', right: 'קטן או שווה' },
          { left: '<span class="ltr">=</span>', right: 'שווה' },
        ],
      },
    },

    // ---------- כשל: מספר במרכאות ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>הכול FALSE. למה? 🔍</h2>
          <p>מאיה בדקה אילו הזמנות גדולות מ-100. גם 150 וגם 220 יצאו FALSE.</p>`,
        },
        {
          type: 'sheet',
          header: ['הזמנה', 'סכום', 'מעל 100?'],
          rows: [
            ['301', '150', 'FALSE'],
            ['302', '80', 'FALSE'],
            ['303', '220', 'FALSE'],
          ],
          formula: { cell: 'C2', text: '=B2>"100"' },
          marks: { C2: 'bad', C4: 'bad' },
        },
        {
          type: 'trap',
          title: 'מוקש: טקסט במרכאות, מספר בלי',
          body: `<p><span class="ltr">B2="ערב"</span>: טקסט תמיד בתוך מרכאות.<br>
          <span class="ltr">B2&gt;100</span>: מספר בלי מרכאות.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'למה הנוסחה של מאיה מחזירה FALSE גם ל-150?',
        options: [
          { text: 'כי הסימן צריך להיות <span class="ltr">&gt;=</span>', correct: false, hint: '150 גדול מ-100 גם בלי "או שווה". הבעיה במקום אחר.' },
          { text: 'כי עמודת הסכום שמורה כטקסט', correct: false, hint: 'הסכומים הם מספרים רגילים. תסתכלי על מה שכתוב <b>בנוסחה</b>.' },
          { text: 'כי <span class="ltr">"100"</span> במרכאות הוא טקסט, ואקסל לא משווה מספר לטקסט כמו מספרים. צריך <span class="ltr">B2&gt;100</span>', correct: true },
          { text: 'כי חסרה פונקציה, למשל IF', correct: false, hint: 'ביטוי לוגי עובד גם בלי פונקציה, כמו <span class="ltr">=B2&gt;=55</span> בשקף הראשון.' },
        ],
      },
    },

    // ---------- רווחים ואותיות ----------
    {
      blocks: [
        {
          type: 'example',
          title: 'השוואת טקסט: מה משנה ומה לא',
          body: `<p>🔹 אותיות גדולות וקטנות <b>לא</b> משנות: <span class="ltr">"Yes"="yes"</span> נותן TRUE.<br>
          🔹 <b>רווח מיותר</b> כן משנה: <span class="ltr">"ערב "</span> (עם רווח) שונה מ-<span class="ltr">"ערב"</span>.</p>
          <p>לכן בטיוב מנקים רווחים עם TRIM (פרק 9).</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בתא B2 כתוב "ערב " עם רווח בסוף. מה תחזיר <span class="ltr">=B2="ערב"</span>?',
        options: [
          { text: 'TRUE', correct: false, hint: 'לאקסל הרווח הוא תו לכל דבר. "ערב " ו-"ערב" הם שני טקסטים שונים.' },
          { text: 'FALSE', correct: true },
          { text: '#VALUE!', correct: false, hint: 'אין כאן שגיאה. אקסל משווה שני טקסטים, והם פשוט לא זהים.' },
          { text: '"ערב"', correct: false, hint: 'ביטוי לוגי מחזיר רק TRUE או FALSE, לא את הטקסט.' },
        ],
      },
    },
  ],
};
