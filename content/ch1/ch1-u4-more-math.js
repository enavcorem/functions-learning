// פרק 1, יחידה 4: עוד כלים מתמטיים מדף הנוסחאות — LARGE/SMALL, ROUND
// ומשפחתה, POWER ו-ROWS. המוקש של ROUND לקוח מדף הנוסחאות: עיצוב תא משנה
// רק את התצוגה, ROUND משנה את הערך.
// לפי התבנית הפדגוגית (12.10): כרטיס אחד לכל שקף, ושאלה בסוף כל שקף.
// בדיקה: ניקוד 78, 95, 88, 81, 64 → LARGE 1..3 = 95, 88, 81. SMALL(...,2) = 78.
//   ROUND(3.14159,2) = 3.14. ROUND(15.83,0) = 16. ROUNDUP(3.11,1) = 3.2. ROUNDDOWN(3.19,1) = 3.1.
//   אוטובוסים: 160/50 = 3.2 → 4. 140/50 = 2.8 → 3. 105/50 = 2.1 → 3.
//   עיצוב: 3.2 מוצג 3, ו-C2*10 = 32. POWER(B2,2) = B2^2.
//   מידות: M, S, ריק, L, ריק, M → ROWS = 6, COUNTA = 4, חסרות 2.

const BUSES_HEADER = ['שכבה', 'תלמידות', 'חלקי 50', 'להזמין'];

export default {
  title: 'LARGE, ROUND ועוד',
  slides: [
    // ---------- LARGE / SMALL ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'LARGE / SMALL',
          why: 'MAX נותנת רק את המקום הראשון. כשצריך את המקום השני או השלישי, צריך כלי אחר.',
          what: 'הערך ה-k בגודלו. <span class="ltr">LARGE(...,1)</span> זה כמו MAX, ו-<span class="ltr">LARGE(...,2)</span> הוא המקום השני. SMALL סופרת מלמטה.',
          when: ['המקום השני', 'השלישי הגבוה ביותר', 'הנמוך השני'],
          syntax: '=LARGE(array, k)',
          args: [['array', 'הטווח'], ['k', 'איזה מקום: 1 = הכי גדול, 2 = השני...']],
          fails: ['הסדר הפוך: קודם הטווח, ורק אחריו המקום', 'שכחת $ על הטווח, והוא זז כשגוררים'],
        },
        {
          type: 'sheet',
          header: ['מתמודדת', 'ניקוד', '', 'מקום', 'ניקוד'],
          rows: [
            ['א', '78', '', '1', '95'],
            ['ב', '95', '', '2', '88'],
            ['ג', '88', '', '3', '81'],
            ['ד', '81'],
            ['ה', '64'],
          ],
          formula: { cell: 'E3', text: '=LARGE($B$2:$B$6,D3)' },
          marks: { D3: 'input' },
          caption: 'k מגיע מהתא D3, וכך גוררים נוסחה אחת לשלושת המקומות. הטווח נעוץ ב-$.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איזו נוסחה מחזירה את הניקוד <b>הנמוך השני</b> בטבלה?',
        options: [
          { text: '<span class="ltr">=LARGE(B2:B6,2)</span>', correct: false, hint: 'LARGE סופרת מלמעלה, אז זה הגבוה השני (88). לנמוך השני צריך SMALL.' },
          { text: '<span class="ltr">=SMALL(B2:B6,2)</span>', correct: true },
          { text: '<span class="ltr">=MIN(B2:B6,2)</span>', correct: false, hint: 'MIN מחזירה תמיד את הנמוך ביותר. ה-2 פשוט ייחשב עוד מספר להשוואה.' },
          { text: '<span class="ltr">=SMALL(2,B2:B6)</span>', correct: false, hint: 'הסדר הפוך: קודם הטווח, ורק אחריו המקום.' },
        ],
      },
    },

    // ---------- ROUND ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'ROUND',
          why: 'ממוצע יוצא לפעמים 87.33333. בשאלה מבקשים "עגלי לספרה אחת", ו-ROUND עושה את זה.',
          what: 'מעגלת מספר לכמות הספרות שמבקשים, לפי כללי העיגול: 5 ומעלה למעלה, מתחת ל-5 למטה.',
          when: ['עגלי', 'בדיוק של ספרה אחת אחרי הנקודה', 'למספר שלם'],
          syntax: '=ROUND(number, num_digits)',
          args: [['number', 'המספר או התא'], ['num_digits', 'כמה ספרות אחרי הנקודה (0 = מספר שלם)']],
        },
        {
          type: 'sheet',
          header: ['מספר', 'מעוגל'],
          rows: [
            ['3.14159', '3.14'],
            ['7.5', '8'],
          ],
          formula: { cell: 'B2', text: '=ROUND(A2,2)' },
          caption: 'ב-B3 כתוב <span class="ltr">=ROUND(A3,0)</span>: אפס ספרות אחרי הנקודה, ו-0.5 מעוגל למעלה.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה תחזיר <span class="ltr">=ROUND(15.83,0)</span>?',
        options: [
          { text: '15.8', correct: false, hint: '0 אומר אפס ספרות אחרי הנקודה, כלומר מספר שלם. 15.8 זה ספרה אחת.' },
          { text: '15', correct: false, hint: 'ROUND מעגלת לפי הכללים: 0.83 זה יותר מחצי, אז למעלה. "תמיד למטה" זו ROUNDDOWN.' },
          { text: '16', correct: true },
          { text: '15.83', correct: false, hint: 'ROUND כן משנה את המספר. 0 ספרות אחרי הנקודה = מספר שלם.' },
        ],
      },
    },

    // ---------- למה: האוטובוסים ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>כמה אוטובוסים להזמין? 🚌</h2>
          <p>בכל אוטובוס יש 50 מקומות. מחלקים את מספר התלמידות ב-50, ויוצא מספר עם נקודה.
          אבל אי אפשר להזמין 3.2 אוטובוסים.</p>`,
        },
        {
          type: 'sheet',
          header: BUSES_HEADER,
          rows: [
            ['י', '160', '3.2', '?'],
            ['יא', '140', '2.8', '?'],
            ['יב', '105', '2.1', '?'],
          ],
          formula: { cell: 'C2', text: '=B2/50' },
          marks: { 'D2:D4': 'input' },
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בשכבה י יצא 3.2. איזו פונקציה תיתן את מספר האוטובוסים שצריך להזמין?',
        options: [
          { text: 'ROUND, לפי כללי העיגול', correct: false, hint: 'ROUND תיתן 3, ואז עשר תלמידות יישארו בלי מקום. כאן צריך לעגל תמיד למעלה.' },
          { text: 'ROUNDDOWN', correct: false, hint: 'עיגול למטה ייתן 3 אוטובוסים. לא מספיק לכולן.' },
          { text: 'אין צורך, מספיק להקטין מקומות עשרוניים בעיצוב', correct: false, hint: 'העיצוב יציג 3, אבל הערך יישאר 3.2. וחוץ מזה, 3 זה לא מספיק.' },
          { text: 'ROUNDUP, כי גם 0.2 אוטובוס זה עוד אוטובוס שלם', correct: true },
        ],
      },
    },

    // ---------- ROUNDUP / ROUNDDOWN ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'ROUNDUP / ROUNDDOWN',
          why: 'כשהמציאות לא מאפשרת חצי: אוטובוסים, קופסאות, שולחנות. כללי העיגול לא מתאימים שם.',
          what: 'ROUNDUP מעגלת <b>תמיד למעלה</b>, ו-ROUNDDOWN <b>תמיד למטה</b>, לא משנה מה הספרה הבאה.',
          when: ['כמה צריך להזמין', 'כמה שלמים נכנסים'],
          syntax: '=ROUNDUP(number, num_digits)',
          args: [['number', 'המספר או התא'], ['num_digits', 'כמה ספרות אחרי הנקודה (0 = מספר שלם)']],
        },
        {
          type: 'sheet',
          header: BUSES_HEADER,
          rows: [
            ['י', '160', '3.2', '4'],
            ['יא', '140', '2.8', '3'],
            ['יב', '105', '2.1', '3'],
          ],
          formula: { cell: 'D4', text: '=ROUNDUP(C4,0)' },
          marks: { D4: 'result' },
          caption: 'ב-יב יצא 2.1. ROUND הייתה נותנת 2, ו-ROUNDUP נותנת 3.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה תחזיר <span class="ltr">=ROUNDDOWN(3.19,1)</span>?',
        options: [
          { text: '3.1', correct: true },
          { text: '3.2', correct: false, hint: 'זו התוצאה של ROUND, לפי כללי העיגול. ROUNDDOWN מעגלת תמיד למטה.' },
          { text: '3', correct: false, hint: 'num_digits הוא 1, כלומר ספרה אחת נשארת אחרי הנקודה.' },
          { text: '3.19', correct: false, hint: 'ROUNDDOWN כן משנה את המספר: היא חותכת אותו לספרה אחת אחרי הנקודה.' },
        ],
      },
    },

    // ---------- כשל: עיצוב זה לא עיגול ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>רואים 3, אבל מה יש בתא?</h2>
          <p>יש עוד דרך "לעגל": הכפתור <b>הקטן מקומות עשרוניים</b> בכרטיסייה בית.</p>`,
        },
        { type: 'shot', src: 'ch1-decimal-buttons.png', alt: 'כפתורי הוסף מקומות עשרוניים והקטן מקומות עשרוניים', size: 'small' },
        {
          type: 'trap',
          title: 'מוקש: עיצוב תא זה לא עיגול',
          body: `<p>הכפתור משנה רק את <b>מה שרואים</b>. הערך בתא נשאר כמו שהיה, וחישובים ממשיכים איתו.
          רק ROUND ומשפחתה משנות את <b>הערך עצמו</b>.</p>`,
        },
      ],
      question: {
        type: 'numeric',
        prompt: 'ב-C2 כתוב 3.2. לחצת "הקטן מקומות עשרוניים", והתא מציג עכשיו 3. מה תחזיר <span class="ltr">=C2*10</span>?',
        answer: 32,
        hint: 'העיצוב שינה רק את התצוגה. הערך בתא עדיין 3.2, ו-3.2 כפול 10 הוא...',
      },
    },

    // ---------- POWER ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'POWER',
          why: 'כדי להעלות בחזקה, למשל ריבוע של הפרש. היא מופיעה בדף הנוסחאות, אבל אפשר גם בלעדיה.',
          what: 'העלאה בחזקה. <span class="ltr">=POWER(5,2)</span> זה 25, בדיוק כמו <span class="ltr">=5^2</span>.',
          when: ['בחזקה', 'בריבוע'],
          syntax: '=POWER(number, power)',
          args: [['number', 'הבסיס'], ['power', 'החזקה']],
          fails: ['הסדר הפוך: <span class="ltr">POWER(2,B2)</span> זה 2 בחזקת B2'],
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איזו נוסחה נותנת בדיוק את אותה תוצאה כמו <span class="ltr">=POWER(B2,2)</span>?',
        options: [
          { text: '<span class="ltr">=B2*2</span>', correct: false, hint: 'זה כפול 2, לא בריבוע. אם ב-B2 יש 5, יוצא 10 ולא 25.' },
          { text: '<span class="ltr">=B2^2</span>', correct: true },
          { text: '<span class="ltr">=B2*B2*B2</span>', correct: false, hint: 'זו חזקה 3. בריבוע מכפילים את המספר בעצמו פעם אחת.' },
          { text: '<span class="ltr">=POWER(2,B2)</span>', correct: false, hint: 'הסדר הפוך: זה 2 בחזקת B2. קודם הבסיס, ואחריו החזקה.' },
        ],
      },
    },

    // ---------- ROWS ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'ROWS',
          why: 'כדי לדעת כמה שורות יש בטווח, גם כשחלק מהתאים ריקים. כך מגלים כמה ערכים חסרים.',
          what: 'כמה שורות יש בטווח. לא משנה מה כתוב בהן, או אם כתוב בהן משהו בכלל.',
          when: ['כמה שורות בטווח', 'כמה חסרים'],
          syntax: '=ROWS(array)',
          args: [['array', 'הטווח']],
          note: 'ההבדל מ-COUNTA: ROWS סופרת גם שורות ריקות. לכן <span class="ltr">=ROWS(B2:B7)-COUNTA(B2:B7)</span> אומרת כמה תאים <b>חסרים</b> בעמודה. שימושי בטיוב.',
        },
        {
          type: 'sheet',
          header: ['שם', 'מידת חולצה', '', 'שורות'],
          rows: [
            ['נועה', 'M', '', '6'],
            ['מאיה', 'S'],
            ['שירה', ''],
            ['טל', 'L'],
            ['יעל', ''],
            ['אגם', 'M'],
          ],
          formula: { cell: 'D2', text: '=ROWS(B2:B7)' },
          marks: { 'B2:B7': 'range' },
          caption: 'הזמנת חולצות מחזור: ROWS סופרת 6 שורות, גם את הריקות.',
        },
      ],
      question: {
        type: 'numeric',
        prompt: 'מה תחזיר <span class="ltr">=ROWS(B2:B7)-COUNTA(B2:B7)</span>? כלומר, כמה בנות עוד לא מסרו מידה?',
        answer: 2,
        hint: 'ROWS סופרת את כל 6 השורות. COUNTA סופרת רק את התאים שכתוב בהם משהו. מה ההפרש?',
      },
    },
  ],
};
