// פרק 3, יחידה 3: אחוזונים ורבעונים באקסל. המוקש המרכזי: האחוז נכתב
// כשבר (0.9) ולא כמספר שלם (90).
// לפי התבנית הפדגוגית (12.10): כרטיס אחד לשקף, שאלה בסוף כל שקף.
// בדיקה (PERCENTILE.INC, שזה מה ש-PERCENTILE ו-QUARTILE הרגילות עושות):
//   2,4,4,5,6,7,8,9,10,15 (n=10), מיקום = 1 + k·9.
//   k=0.25 ← 3.25 ← 4.25 · k=0.5 ← 5.5 ← 6.5 · k=0.75 ← 7.75 ← 8.75 · k=0.9 ← 9.1 ← 10.5.
//   QUARTILE(...,0) = 2, QUARTILE(...,4) = 15.

const SCORES = [['2'], ['4'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['10'], ['15']];

export default {
  title: 'PERCENTILE ו-QUARTILE',
  slides: [
    // ---------- למה ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h1>מי בעשירון העליון? 📶</h1>
          <p>בחידון הטריוויה 10 משתתפות קיבלו ציון מתוך 15.</p>
          <p>פרס מקבלות רק ה-10% הגבוהות. מאיזה ציון זוכים?</p>
          <p>את הציון הזה קוראים <b>אחוזון 90</b>: 90% מהציונים נמצאים מתחתיו.</p>`,
        },
        {
          type: 'sheet',
          header: ['ציון בחידון'],
          rows: SCORES,
          marks: { 'A2:A11': 'range' },
          caption: 'הציונים כבר ממוינים, כדי שיהיה קל לראות. אקסל לא צריך את זה.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'נחשי: בין אילו שני ציונים ייפול אחוזון 90?',
        options: [
          { text: 'בין 2 ל-4', correct: false, hint: 'אלה הציונים הנמוכים. כמעט כל הציונים נמצאים <b>מעליהם</b>, לא מתחתם.' },
          { text: 'בין 6 ל-7', correct: false, hint: 'זה האמצע: חצי מהציונים מתחת וחצי מעל. זה החציון, אחוזון 50.' },
          { text: 'בין 10 ל-15', correct: true },
          { text: 'מעל 15', correct: false, hint: 'אף ציון לא מעל 15. מעל 15 נמצאים 0% מהציונים.' },
        ],
      },
    },

    // ---------- PERCENTILE ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'PERCENTILE',
          why: 'כדי למצוא את הסף של "ה-X% הגבוהים" או "הנמוכים", בלי למיין ולספור.',
          what: 'מחזירה את הערך שמתחתיו נמצא אחוז מסוים מהנתונים.',
          when: ['אחוזון', 'העשירון העליון', '10% הגבוהים'],
          syntax: '=PERCENTILE(array, k)',
          args: [['array', 'הטווח עם המספרים'], ['k', 'האחוז כשבר: 0.9 לאחוזון 90, 0.25 לאחוזון 25']],
          fails: ['90 במקום 0.9 ← <span class="ltr">#NUM!</span>', 'התוצאה לא חייבת להיות ערך מהטבלה'],
        },
        {
          type: 'steps',
          items: [
            'לוחצות על תא ריק, מקלידות <span class="ltr">=PERCENTILE(</span>.',
            'גוררות על <span class="ltr">A2:A11</span>, ואחרי פסיק כותבות את האחוז כשבר: <span class="ltr">0.9</span>.',
            'סוגרות <span class="ltr">)</span> ו-Enter. בודקות שהתוצאה בין 10 ל-15, כמו שניחשנו.',
          ],
        },
        {
          type: 'sheet',
          header: ['ציון בחידון', '', 'מה מחפשים', 'תוצאה'],
          rows: SCORES.map((r, i) => (i === 0 ? [...r, '', 'אחוזון 90', '10.5'] : r)),
          formula: { cell: 'D2', text: '=PERCENTILE(A2:A11,0.9)' },
          marks: { 'A2:A11': 'range' },
          caption: '10.5 לא מופיע בטבלה. אקסל מחשב ערך "בין" שני ציונים.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איזו נוסחה מחזירה את <b>אחוזון 25</b> של הציונים?',
        options: [
          { text: '<span class="ltr">=PERCENTILE(A2:A11,0.25)</span>', correct: true },
          { text: '<span class="ltr">=PERCENTILE(A2:A11,25)</span>', correct: false, hint: 'k נכתב כשבר בין 0 ל-1. עם 25 תקבלי שגיאה.' },
          { text: '<span class="ltr">=PERCENTILE(0.25,A2:A11)</span>', correct: false, hint: 'הסדר הפוך. קודם הטווח, אחר כך האחוז.' },
          { text: '<span class="ltr">=PERCENTILE(A2:A11)</span>', correct: false, hint: 'חסר הארגומנט השני: איזה אחוזון רוצים.' },
        ],
      },
    },

    // ---------- כשל: #NUM! ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>יצא <span class="ltr">#NUM!</span>. למה? 🔍</h2>
          <p>שירה רצתה את אחוזון 90 וכתבה כך:</p>`,
        },
        {
          type: 'sheet',
          header: ['ציון בחידון', '', 'מה מחפשים', 'תוצאה'],
          rows: SCORES.map((r, i) => (i === 0 ? [...r, '', 'אחוזון 90', '#NUM!'] : r)),
          formula: { cell: 'D2', text: '=PERCENTILE(A2:A11,90)' },
          marks: { D2: 'bad' },
        },
        {
          type: 'trap',
          title: 'מוקש: 90 במקום 0.9',
          body: `<p>k חייב להיות בין 0 ל-1. אחוזון 90 נכתב <span class="ltr">0.9</span> (או <span class="ltr">90%</span>).</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'למה שירה קיבלה <span class="ltr">#NUM!</span>?',
        options: [
          { text: 'כי אין 90 ציונים בטבלה', correct: false, hint: 'מספר הציונים לא קשור. הבעיה היא איך כתוב האחוז.' },
          { text: 'כי הטווח צריך להיות ממוין', correct: false, hint: 'PERCENTILE ממיינת לבד. לא צריך למיין לפני.' },
          { text: 'כי צריך QUARTILE ולא PERCENTILE', correct: false, hint: 'PERCENTILE היא הפונקציה הנכונה לאחוזון 90. רק הארגומנט השני שגוי.' },
          { text: 'כי k חייב להיות בין 0 ל-1, כלומר 0.9 ולא 90', correct: true },
        ],
      },
    },

    // ---------- QUARTILE ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'QUARTILE',
          why: 'קיצור לשלוש הנקודות שחוצות את הנתונים לארבעה רבעים שווים.',
          what: 'מחזירה רבעון. מקבלת את <b>מספר</b> הרבעון, לא אחוז.',
          when: ['רבעון', 'רבעון עליון', 'רבעון תחתון'],
          syntax: '=QUARTILE(array, quart)',
          args: [['array', 'הטווח עם המספרים'], ['quart', '1 לרבעון ראשון, 2 לחציון, 3 לרבעון שלישי (0 = מינימום, 4 = מקסימום)']],
          fails: ['0.75 במקום 3 ← הערך הנמוך ביותר, בלי הודעת שגיאה', '75 במקום 3 ← <span class="ltr">#NUM!</span>'],
        },
        {
          type: 'sheet',
          header: ['ציון בחידון', '', 'מה מחפשים', 'תוצאה'],
          rows: SCORES.map((r, i) => (
            i === 0 ? [...r, '', 'רבעון 1', '4.25']
              : i === 1 ? [...r, '', 'חציון (רבעון 2)', '6.5']
                : i === 2 ? [...r, '', 'רבעון 3', '8.75'] : r)),
          formula: { cell: 'D4', text: '=QUARTILE(A2:A11,3)' },
          marks: { 'A2:A11': 'range' },
          caption: 'רבעון 1 = אחוזון 25, רבעון 2 = החציון, רבעון 3 = אחוזון 75.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איזו נוסחה מחזירה את הרבעון השלישי של הציונים?',
        options: [
          { text: '<span class="ltr">=QUARTILE(A2:A11,75)</span>', correct: false, hint: 'QUARTILE מקבלת את <b>מספר</b> הרבעון (1, 2 או 3), לא את האחוז.' },
          { text: '<span class="ltr">=QUARTILE(A2:A11,3)</span>', correct: true },
          { text: '<span class="ltr">=QUARTILE(A2:A11,0.75)</span>', correct: false, hint: 'כאן ערבבת בין השתיים. שבר כמו 0.75 שייך ל-PERCENTILE. QUARTILE מקבלת 3.' },
          { text: '<span class="ltr">=PERCENTILE(A2:A11,75)</span>', correct: false, hint: 'הרעיון נכון (רבעון 3 = אחוזון 75), אבל k נכתב כשבר: 0.75. עם 75 תקבלי שגיאה.' },
        ],
      },
    },

    // ---------- בקיצור ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>בקיצור: רבעונים ואחוזונים</h2>
          <p>כל רבעון הוא גם אחוזון. אפשר לקבל אותו בשתי הדרכים, והתוצאה זהה.</p>`,
        },
      ],
      question: {
        type: 'match',
        prompt: 'התאימי כל נוסחה למה שהיא מחזירה:',
        pairs: [
          { left: '<span class="ltr">=QUARTILE(A2:A11,1)</span>', right: 'אחוזון 25' },
          { left: '<span class="ltr">=QUARTILE(A2:A11,2)</span>', right: 'החציון' },
          { left: '<span class="ltr">=PERCENTILE(A2:A11,0.75)</span>', right: 'רבעון 3' },
          { left: '<span class="ltr">=QUARTILE(A2:A11,4)</span>', right: 'הציון הגבוה ביותר' },
        ],
      },
    },
  ],
};
