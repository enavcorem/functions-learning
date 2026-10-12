// פרק 6, יחידה 2: SUMIF ו-AVERAGEIF — הארגומנט השלישי (מה לסכם) הוא
// החידוש. ואחוז מתוך הכלל = SUMIF חלקי SUM, עם קיבוע.
// תבנית 12.10: למה (שתי עמודות) ← כרטיס + איך בטבלה ← AVERAGEIF ← טבלת סיכום עם גרירה ← אחוזים.

import { FAIR_HEADER, FAIR } from './fair.js';

export default {
  title: 'SUMIF, AVERAGEIF ואחוזים',
  slides: [
    {
      blocks: [
        {
          type: 'text',
          html: `<h1>כמה כסף הכניסו דוכני האוכל? 💰</h1>
          <p>COUNTIF סופרת <b>כמה</b>. אבל עכשיו רוצים <b>לסכם</b> את ההכנסות — רק של דוכני האוכל.
          </p>`,
        },
        {
          type: 'sheet',
          header: FAIR_HEADER,
          rows: FAIR,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'כדי לענות, באילו עמודות צריך להשתמש?',
        options: [
          { text: 'רק בעמודת ההכנסה (C)', correct: false, hint: 'אם נסתכל רק על ההכנסות, לא נדע איזו שורה היא דוכן אוכל. צריך גם את עמודת הסוג.' },
          { text: 'בעמודת הסוג (B) כדי לבדוק "אוכל", ובעמודת ההכנסה (C) כדי לסכם', correct: true },
          { text: 'רק בעמודת הסוג (B)', correct: false, hint: 'בעמודת הסוג יש מילים. אין שם כסף לסכם.' },
          { text: 'בעמודת השכבה (D)', correct: false, hint: 'השאלה לא מתעניינת בשכבה. היא שואלת על סוג הדוכן ועל הכסף.' },
        ],
      },
    },
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'SUMIF',
          why: 'כשבודקים תנאי בעמודה אחת ומסכמים מספרים מעמודה אחרת.',
          what: 'מסכמת רק את השורות שעומדות בתנאי.',
          when: ['סה"כ של...', 'כמה כסף מ...', 'סכום ה... עבור'],
          syntax: '=SUMIF(range, criteria, sum_range)',
          args: [['range', 'איפה בודקים את התנאי'], ['criteria', 'מה התנאי'], ['sum_range', 'מה מסכמים']],
          fails: ['שוכחים את הארגומנט השלישי ← 0', 'מחליפים בין הטווחים', 'גוררים בלי $ ← טווח שמחליק'],
        },
        {
          type: 'steps',
          items: [
            'לוחצות על תא ריק, למשל <b>F2</b>, ומקלידות <span class="ltr">=SUMIF(</span>.',
            'גוררות על עמודת <b>הסוג</b> (B2:B7). כאן אקסל יבדוק את התנאי. פסיק.',
            'מקלידות <span class="ltr">"אוכל"</span>. פסיק.',
            'גוררות על עמודת <b>ההכנסה</b> (C2:C7). את זה אקסל יסכם. סוגרות <span class="ltr">)</span> ו-Enter.',
          ],
        },
        {
          type: 'sheet',
          header: [...FAIR_HEADER, '', 'הכנסות אוכל'],
          rows: FAIR.map((r, i) => (i === 0 ? [...r, '', '1300'] : r)),
          formula: { cell: 'F2', text: '=SUMIF(B2:B7,"אוכל",C2:C7)' },
          marks: { 'B2:B7': 'input', 'C2:C7': 'range' },
          caption: 'כחול — איפה בודקים. ירוק — מה מסכמים. <span class="ltr">450 + 600 + 250 = 1300</span>.',
        },
      ],
      question: {
        type: 'numeric',
        prompt: 'מה תחזיר <span class="ltr">=SUMIF(B2:B7,"משחק",C2:C7)</span>?',
        answer: 650,
        hint: 'הדוכנים מסוג משחק: פינת יצירה, קליעה למטרה וגלגל מזל.',
      },
    },
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'AVERAGEIF',
          why: 'ממוצע של קבוצה אחת מתוך הטבלה, למשל רק של שכבה יא, בלי לסנן ובלי עמודת עזר.',
          what: 'ממוצע רק של השורות שעומדות בתנאי. אותו מבנה בדיוק כמו SUMIF.',
          when: ['ממוצע ה... של', 'בממוצע, עבור'],
          syntax: '=AVERAGEIF(range, criteria, average_range)',
          args: [['range', 'איפה בודקים'], ['criteria', 'מה התנאי'], ['average_range', 'על מה עושים ממוצע']],
          fails: ['שוכחים את הארגומנט השלישי', 'אין אף שורה שעומדת בתנאי ← <span class="ltr">#DIV/0!</span>'],
        },
        {
          type: 'trap',
          title: 'מוקש: שכחתי את הארגומנט השלישי',
          body: `<p><span class="ltr">=SUMIF(B2:B7,"אוכל")</span> — אקסל ינסה לסכם את עמודת <b>הסוג</b> עצמה. שם יש רק טקסט, אז התוצאה 0.
          כשהתנאי על עמודה אחת והמספרים בעמודה אחרת — <b>חייבים</b> את הארגומנט השלישי.</p>
          <p>(בלי הארגומנט השלישי זה עובד רק כשהתנאי הוא על המספרים עצמם: <span class="ltr">=SUMIF(C2:C7,"&gt;300")</span>.)</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה ממוצע ההכנסות של דוכני שכבת יא?',
        options: [
          { text: '<span class="ltr">=AVERAGEIF(D2:D7,"יא",C2:C7)</span>', correct: true },
          { text: '<span class="ltr">=AVERAGEIF(C2:C7,"יא",D2:D7)</span>', correct: false, hint: 'הסדר התהפך: קודם העמודה שבה בודקים ("יא" נמצא בעמודת השכבה, D), ובסוף העמודה שממצעים (ההכנסות, C).' },
          { text: '<span class="ltr">=AVERAGEIF(D2:D7,"יא")</span>', correct: false, hint: 'חסר על מה עושים ממוצע. בעמודת השכבה יש רק טקסט.' },
          { text: '<span class="ltr">=AVERAGE(D2:D7,"יא",C2:C7)</span>', correct: false, hint: 'AVERAGE לא יודעת לקבל תנאי. צריך AVERAGEIF.' },
        ],
      },
    },
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>טבלת סיכום: נוסחה אחת לכל הסוגים</h2>
          <p>במבחנים מבקשים הרבה פעמים טבלה קטנה: לכל סוג דוכן, סך ההכנסות. לא כותבים נוסחה נפרדת לכל סוג.
          כותבים את שם הסוג בתא (F2, F3), מפנים אליו, וגוררים.</p>`,
        },
        {
          type: 'sheet',
          header: [...FAIR_HEADER, '', 'סוג', 'הכנסות'],
          rows: FAIR.map((r, i) => (i === 0 ? [...r, '', 'משחק', '650'] : i === 1 ? [...r, '', 'אוכל', '1300'] : r)),
          formula: { cell: 'G3', text: '=SUMIF($B$2:$B$7,F3,$C$2:$C$7)' },
          marks: { F3: 'input' },
          caption: 'שני הטווחים נעוצים עם $ ולא זזים. F3 בלי $, ולכן כל שורה לוקחת את הסוג שלה.',
        },
        {
          type: 'steps',
          items: [
            'כותבות את הסוגים בעמודה: "משחק" ב-F2, "אוכל" ב-F3.',
            'ב-G2 מקלידות <span class="ltr">=SUMIF(</span>, גוררות על B2:B7 ולוחצות <b>F4</b>. נכנסים דולרים.',
            'פסיק, ולוחצות על <b>F2</b>, הסוג. בלי F4!',
            'פסיק, גוררות על C2:C7 ולוחצות <b>F4</b>. סוגרות ו-Enter.',
            'לחיצה כפולה על הריבוע הקטן בפינת G2 (ידית המילוי). הנוסחה יורדת לכל הסוגים.',
          ],
        },
        {
          type: 'trap',
          title: 'מוקש: טווח שמחליק בגרירה',
          body: `<p>בלי $, בשורה 3 הנוסחה הופכת ל-<span class="ltr">=SUMIF(B3:B8,F3,C3:C8)</span>. הטווח ירד שורה,
          והעוגות (450, בשורה 2) כבר לא בפנים. מקבלים 850 במקום 1300, <b>ואין שום הודעת שגיאה</b>.</p>
          <p>הטריק: בתוך הנוסחה, עומדות על הטווח ולוחצות <b>F4</b>, והדולרים נכנסים לבד.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'ב-G2 כתוב <span class="ltr">=SUMIF(B2:B7,F2,C2:C7)</span>, ורוצים לגרור אותה לשורות של שאר הסוגים. מה צריך לתקן קודם?',
        options: [
          { text: 'לנעוץ גם את F2: <span class="ltr">$F$2</span>', correct: false, hint: 'אז כל השורות יחשבו את הסוג של F2 בלבד. F2 צריך לזוז, כדי שכל שורה תיקח את הסוג שלה.' },
          { text: 'שום דבר, SUMIF שומרת על הטווחים לבד', correct: false, hint: 'אקסל לא יודע שהטווח צריך להישאר במקום. כל כתובת בלי $ זזה בגרירה.' },
          { text: 'לנעוץ את שני הטווחים (<span class="ltr">$B$2:$B$7</span> ו-<span class="ltr">$C$2:$C$7</span>), ולהשאיר את F2 בלי $', correct: true },
          { text: 'לנעוץ רק את <span class="ltr">C2:C7</span>, הטווח שמסכמים', correct: false, hint: 'גם טווח התנאי (B2:B7) יחליק בגרירה. צריך לנעוץ את שניהם.' },
        ],
      },
    },
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>אחוז מתוך הכלל</h2>
          <p>"איזה אחוז מההכנסות הגיע מדוכני אוכל?" — חלק חלקי שלם:</p>
          <p class="ltr" style="text-align:center"><code class="ltr formula-display">=SUMIF(B2:B7,"אוכל",C2:C7)/SUM(C2:C7)</code></p>
          <p><span class="ltr">1300 / 1950 = 0.667</span> ← מעצבות את התא כאחוז: <b>66.7%</b>.</p>
          <p>ובאותו אופן, אחוז <b>הדוכנים</b> (ולא הכסף): <span class="ltr">=COUNTIF(B2:B7,"אוכל")/COUNTA(B2:B7)</span> = 3/6 = 50%.</p>`,
        },
        {
          type: 'trap',
          title: 'מוקש: אחוז של כסף או של כמות?',
          body: `<p>"אחוז דוכני האוכל" = 50% (3 מתוך 6). "אחוז ההכנסות מאוכל" = 66.7%. קוראות את השאלה עד הסוף:
          סופרים <b>שורות</b> (COUNTIF) או מסכמים <b>ערכים</b> (SUMIF)?</p>`,
        },
        {
          type: 'example',
          title: 'גם פיבוט עושה את זה (פרק 7)',
          body: `<p>כל מה שעושים כאן עם SUMIF, COUNTIF ו-AVERAGEIF אפשר לעשות גם בטבלת ציר: "סוג" בשורות, "הכנסה" בערכים.
          פיבוט נותן את כל הקטגוריות בבת אחת. הפונקציה נותנת תא אחד שמתעדכן לבד. בחרי מה שנוח לך — שתיהן נכונות.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בשאלה: "איזה אחוז מהדוכנים היו של שכבה י?". איזו נוסחה?',
        options: [
          { text: '<span class="ltr">=SUMIF(D2:D7,"י",C2:C7)/SUM(C2:C7)</span>', correct: false, hint: 'זה אחוז <b>ההכנסות</b> של שכבה י. השאלה שואלת על אחוז <b>הדוכנים</b> — סופרים.' },
          { text: '<span class="ltr">=COUNTIF(D2:D7,"י")</span>', correct: false, hint: 'זו הכמות (3), לא האחוז. צריך לחלק בכמות הכוללת.' },
          { text: '<span class="ltr">=COUNTIF(D2:D7,"י")/COUNT(D2:D7)</span>', correct: false, hint: 'COUNT סופרת רק מספרים — בעמודת השכבה היא תחזיר 0, ונקבל שגיאת חלוקה באפס. צריך COUNTA.' },
          { text: '<span class="ltr">=COUNTIF(D2:D7,"י")/COUNTA(D2:D7)</span>', correct: true },
        ],
      },
    },
  ],
};
