// פרק 6, יחידה 3: COUNTIFS, SUMIFS, AVERAGEIFS, MINIFS, MAXIFS.
// המוקש שדף הנוסחאות עצמו מדגיש: ב-SUMIFS עמודת הסכום באה ראשונה —
// הפוך מ-SUMIF.
// תבנית 12.10: למה (תנאי אחד לא מספיק) ← COUNTIFS + איך ← SUMIFS ← MAXIFS ← המשפחה (match) ← "או".

import { FAIR_HEADER, FAIR } from './fair.js';

export default {
  title: 'כמה תנאים: COUNTIFS ומשפחתה',
  slides: [
    {
      blocks: [
        {
          type: 'text',
          html: `<h1>שני תנאים בבת אחת 🎛️</h1>
          <p>"כמה הכניסו דוכני <b>האוכל</b> של <b>שכבה י</b>?" — יש כאן שני תנאים, על שתי עמודות.
          </p>`,
        },
        {
          type: 'sheet',
          header: FAIR_HEADER,
          rows: FAIR,
          marks: { 'B2:B7': 'input', 'D2:D7': 'input' },
        },
      ],
      question: {
        type: 'mc',
        prompt: 'נועה כתבה <span class="ltr">=SUMIF(B2:B7,"אוכל",C2:C7)</span> וקיבלה 1300. למה זו לא התשובה?',
        options: [
          { text: 'SUMIF לא יודעת לסכם הכנסות', correct: false, hint: 'היא יודעת. הבעיה היא שהיא בדקה רק תנאי אחד.' },
          { text: 'היא בדקה רק "אוכל". המיצים של שכבה יא נכנסו לסכום, והם לא של שכבה י', correct: true },
          { text: 'חסרות כוכביות סביב "אוכל"', correct: false, hint: 'בעמודה כתוב בדיוק "אוכל", אז אין צורך בכוכביות. חסר התנאי השני.' },
          { text: 'זו כן התשובה', correct: false, hint: 'השאלה מבקשת אוכל <b>של שכבה י</b>. בסכום של נועה יש גם את המיצים, שהם של שכבה יא.' },
        ],
      },
    },
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'COUNTIFS',
          why: 'כשצריך לספור לפי שני תנאים או יותר, בשתי עמודות שונות.',
          what: 'סופרת שורות שעומדות ב<b>כל</b> התנאים. לכל פונקציה עם IF יש אחות עם IFS (ברבים), שמקבלת כמה תנאים.',
          when: ['כמה... שגם...', 'שני תנאים'],
          syntax: '=COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)',
          args: [['criteria_range1', 'עמודה ראשונה'], ['criteria1', 'התנאי עליה'], ['criteria_range2', 'עמודה שנייה'], ['criteria2', 'התנאי עליה']],
          fails: ['זוג חסר: תנאי בלי העמודה שלו', '"או" על אותה עמודה ← 0 (בסוף היחידה)'],
        },
        {
          type: 'steps',
          items: [
            'מקלידות <span class="ltr">=COUNTIFS(</span> בתא ריק.',
            'זוג ראשון: גוררות על עמודת הסוג (B2:B7), פסיק, <span class="ltr">"אוכל"</span>.',
            'פסיק, וזוג שני: גוררות על עמודת השכבה (D2:D7), פסיק, <span class="ltr">"י"</span>.',
            'סוגרות ו-Enter. ככה חושבים על זה: "עמודה, תנאי. עמודה, תנאי."',
          ],
        },
      ],
      question: {
        type: 'numeric',
        prompt: 'מה תחזיר <span class="ltr">=COUNTIFS(B2:B7,"אוכל",D2:D7,"י")</span>?',
        answer: 2,
        hint: 'דוכני אוכל: עוגות (י), פיצה (י), מיצים (יא). כמה מהם של שכבה י?',
      },
    },
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'SUMIFS',
          why: 'כמו SUMIF, אבל עם כמה תנאים.',
          what: 'מסכמת רק שורות שעומדות בכל התנאים.',
          when: ['סה"כ ה... של... שגם...'],
          syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)',
          args: [['sum_range', 'מה מסכמים — ראשון!'], ['criteria_range1', 'עמודה ראשונה'], ['criteria1', 'התנאי עליה'], ['criteria_range2', 'עמודה שנייה (ותנאי אחריה)']],
          fails: ['כותבים את מה שמסכמים בסוף, כמו ב-SUMIF'],
        },
        {
          type: 'sheet',
          header: [...FAIR_HEADER, '', 'אוכל של י'],
          rows: FAIR.map((r, i) => (i === 0 ? [...r, '', '1050'] : r)),
          formula: { cell: 'F2', text: '=SUMIFS(C2:C7,B2:B7,"אוכל",D2:D7,"י")' },
          marks: { 'C2:C7': 'range' },
          caption: 'עוגות (450) + פיצה (600) = 1050. המיצים הם אוכל, אבל של יא — ולכן לא נכנסו.',
        },
        {
          type: 'trap',
          title: 'מוקש: הסדר הפוך מ-SUMIF',
          body: `<p><span class="ltr">SUMIF(range, criteria, <b>sum_range</b>)</span> — מה מסכמים: <b>בסוף</b>.<br>
          <span class="ltr">SUMIFS(<b>sum_range</b>, ...)</span> — מה מסכמים: <b>בהתחלה</b>.</p>
          <p>כך גם ב-AVERAGEIFS, MINIFS ו-MAXIFS: קודם העמודה שמחשבים עליה, אחר כך זוגות של עמודה ותנאי.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה ממוצע ההכנסות של דוכני <b>משחק</b> שהכניסו <b>מעל 160</b>?',
        options: [
          { text: '<span class="ltr">=AVERAGEIFS(B2:B7,"משחק",C2:C7,"&gt;160",C2:C7)</span>', correct: false, hint: 'זה הסדר של AVERAGEIF (עם יחיד). ב-IFS העמודה שממצעים באה <b>ראשונה</b>.' },
          { text: '<span class="ltr">=AVERAGEIFS(C2:C7,B2:B7,"משחק",C2:C7,"&gt;160")</span>', correct: true },
          { text: '<span class="ltr">=AVERAGEIF(C2:C7,B2:B7,"משחק",C2:C7,"&gt;160")</span>', correct: false, hint: 'AVERAGEIF (בלי S) מקבלת תנאי אחד בלבד. לשני תנאים — AVERAGEIFS.' },
          { text: '<span class="ltr">=AVERAGEIFS(C2:C7,B2:B7,"משחק","&gt;160")</span>', correct: false, hint: 'לכל תנאי צריך עמודה משלו. לפני "&gt;160" חסרה העמודה שעליה הוא נבדק: C2:C7.' },
        ],
      },
    },
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'MAXIFS / MINIFS',
          what: 'הערך הגבוה (או הנמוך) ביותר — רק מבין השורות שעומדות בתנאים.',
          when: ['ההכנסה הגבוהה ביותר מבין...', 'המינימום של...'],
          syntax: '=MAXIFS(max_range, criteria_range1, criteria1)',
          args: [['max_range', 'מאיפה לוקחים את המקסימום — ראשון'], ['criteria_range1', 'איפה בודקים'], ['criteria1', 'מה התנאי']],
          note: 'אפשר גם כאן כמה זוגות של עמודה ותנאי.',
        },
      ],
      question: {
        type: 'numeric',
        prompt: 'מה תחזיר <span class="ltr">=MAXIFS(C2:C7,B2:B7,"משחק")</span>?',
        answer: 300,
        hint: 'ההכנסות של דוכני המשחק: 200, 150, 300.',
      },
    },
    {
      blocks: [
        {
          type: 'concept',
          title: 'המשפחה כולה, בשתי שורות',
          body: `<p><b>תנאי אחד</b> (COUNTIF, SUMIF, AVERAGEIF): מה שמחשבים — <b>בסוף</b>.</p>
          <p><b>כמה תנאים</b> (COUNTIFS, SUMIFS, AVERAGEIFS, MINIFS, MAXIFS): מה שמחשבים — <b>בהתחלה</b>.</p>
          <p>טיפ: גם עם תנאי אחד מותר להשתמש ב-SUMIFS. מי שמתבלבלת בסדר יכולה לעבוד תמיד עם IFS.</p>`,
        },
      ],
      question: {
        type: 'match',
        prompt: 'התאימי כל שאלה לפונקציה:',
        pairs: [
          { left: 'כמה דוכנים של שכבה יא?', right: 'COUNTIF' },
          { left: 'כמה הכניסו כל דוכני המשחק יחד?', right: 'SUMIF' },
          { left: 'כמה דוכני אוכל של שכבה י?', right: 'COUNTIFS' },
          { left: 'ההכנסה הנמוכה ביותר מבין דוכני האוכל', right: 'MINIFS' },
        ],
      },
    },
    {
      blocks: [
        {
          type: 'trap',
          title: 'מוקש: IFS היא תמיד "וגם"',
          body: `<p>"כמה דוכנים הם אוכל <b>או</b> משחק?" <span class="ltr">=COUNTIFS(B2:B7,"אוכל",B2:B7,"משחק")</span> מחזירה <b>0</b>.
          כל התנאים ב-IFS חייבים להתקיים באותה שורה. תא לא יכול להיות גם "אוכל" וגם "משחק".</p>
          <p>ל"או" על אותה עמודה מחברים שתי פונקציות: <span class="ltr">=COUNTIF(B2:B7,"אוכל")+COUNTIF(B2:B7,"משחק")</span>.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איך מסכמים את ההכנסות של שכבה י <b>או</b> שכבה יא?',
        options: [
          { text: '<span class="ltr">=SUMIFS(C2:C7,D2:D7,"י",D2:D7,"יא")</span>', correct: false, hint: 'IFS דורשת שכל התנאים יתקיימו יחד. אין דוכן שהוא גם של י וגם של יא, ולכן יוצא 0.' },
          { text: '<span class="ltr">=SUMIF(D2:D7,"י או יא",C2:C7)</span>', correct: false, hint: 'אקסל יחפש תא שכתוב בו בדיוק "י או יא". אין כזה.' },
          { text: '<span class="ltr">=SUMIF(D2:D7,"י",C2:C7)+SUMIF(D2:D7,"יא",C2:C7)</span>', correct: true },
          { text: '<span class="ltr">=SUM(C2:C7)</span>', correct: false, hint: 'זה כולל גם את שכבה יב (קליעה למטרה, 150).' },
        ],
      },
    },
  ],
};
