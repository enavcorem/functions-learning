// פרק 4, יחידה 2: AND, OR, NOT לבד. השילוב עם IF בפרק 5. כאן רק
// מבינים מתי התשובה TRUE. המוקש: "וגם" בשפה היומיומית שהוא בעצם OR.
// לפי התבנית הפדגוגית (12.10): כרטיס אחד לשקף (AND, OR, NOT בנפרד),
// שאלה בסוף כל שקף.
// בדיקה: נועה 92/95 ← AND TRUE · מאיה 88/80 ← AND FALSE, OR TRUE · שירה 79/98 ← AND FALSE, OR TRUE.
// בדיקה: NOT(D2) כש-D2 הוא TRUE ← FALSE.

const STUDENTS_HEADER = ['שם', 'ממוצע', 'נוכחות'];
const STUDENTS = [['נועה', '92', '95'], ['מאיה', '88', '80'], ['שירה', '79', '98']];

export default {
  title: 'AND, OR, NOT',
  slides: [
    // ---------- למה ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h1>מלגת מצוינות 🎓</h1>
          <p>מלגה מקבלת מי שהממוצע שלה 85 ומעלה <b>וגם</b> הנוכחות שלה 90% ומעלה.</p>
          <p>ביטוי לוגי אחד בודק רק תנאי אחד. כאן יש שניים.</p>`,
        },
        {
          type: 'sheet',
          header: STUDENTS_HEADER,
          rows: STUDENTS,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מי מקבלת מלגה?',
        options: [
          { text: 'נועה ומאיה', correct: false, hint: 'הנוכחות של מאיה 80, פחות מ-90. היא עומדת רק בתנאי אחד.' },
          { text: 'כל השלוש', correct: false, hint: 'צריך לעמוד בשני התנאים. לשירה הממוצע 79, ולמאיה הנוכחות 80.' },
          { text: 'רק נועה', correct: true },
          { text: 'אף אחת', correct: false, hint: 'לנועה ממוצע 92 ונוכחות 95. היא עומדת בשני התנאים.' },
        ],
      },
    },

    // ---------- AND ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'AND',
          why: 'כשצריך לבדוק כמה תנאים בבת אחת, וכולם חייבים להתקיים.',
          what: 'מחזירה TRUE רק אם <b>כל</b> התנאים מתקיימים.',
          when: ['וגם', 'שני התנאים', 'גם... וגם...', 'בתנאי ש...'],
          syntax: '=AND(logical1, logical2)',
          args: [['logical1', 'תנאי ראשון'], ['logical2', 'תנאי שני (אפשר עוד)']],
          fails: ['"וגם" במשפט שבעצם אומר "או"', 'שני תנאים על אותה עמודה ← תמיד FALSE'],
        },
        {
          type: 'steps',
          items: [
            'לוחצות על <b>D2</b>, מקלידות <span class="ltr">=AND(</span>.',
            'כותבות תנאי ראשון: <span class="ltr">B2&gt;=85</span>, פסיק, ותנאי שני: <span class="ltr">C2&gt;=90</span>. סוגרות ו-Enter.',
            'לחיצה כפולה על ידית המילוי מעתיקה לכל השורות. בודקות: רק נועה TRUE?',
          ],
        },
        {
          type: 'sheet',
          header: [...STUDENTS_HEADER, 'מלגה?'],
          rows: STUDENTS.map((r, i) => [...r, i === 0 ? 'TRUE' : 'FALSE']),
          formula: { cell: 'D2', text: '=AND(B2>=85,C2>=90)' },
          caption: 'מאיה עומדת בתנאי אחד בלבד, ו-AND דורשת את שניהם.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה תחזיר <span class="ltr">=AND(B4&gt;=85,C4&gt;=90)</span> בשורה של שירה (ממוצע 79, נוכחות 98)?',
        options: [
          { text: 'TRUE', correct: false, hint: 'הנוכחות של שירה מצוינת, אבל הממוצע 79. AND דורשת ששני התנאים יתקיימו.' },
          { text: 'FALSE', correct: true },
          { text: '79', correct: false, hint: 'AND לא מחזירה ערך מהטבלה, רק TRUE או FALSE.' },
          { text: '#VALUE!', correct: false, hint: 'הנוסחה תקינה: שני תנאים מופרדים בפסיק.' },
        ],
      },
    },

    // ---------- OR ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'OR',
          why: 'כשמספיק שתנאי אחד מתוך כמה יתקיים.',
          what: 'מחזירה TRUE אם <b>לפחות אחד</b> מהתנאים מתקיים.',
          when: ['או', 'אחד מהתנאים', 'לפחות אחד'],
          syntax: '=OR(logical1, logical2)',
          args: [['logical1', 'תנאי ראשון'], ['logical2', 'תנאי שני (אפשר עוד)']],
          fails: ['כל תנאי חייב להיות שלם: <span class="ltr">OR(B2="יא",B2="יב")</span>, לא <span class="ltr">OR(B2="יא","יב")</span>'],
        },
        {
          type: 'text',
          html: `<p>תעודת הערכה מקבלת מי שהממוצע שלה 85 ומעלה <b>או</b> שהנוכחות שלה 90% ומעלה.</p>`,
        },
        {
          type: 'sheet',
          header: [...STUDENTS_HEADER, 'תעודה?'],
          rows: STUDENTS.map((r) => [...r, 'TRUE']),
          formula: { cell: 'D2', text: '=OR(B2>=85,C2>=90)' },
          caption: 'כל אחת עומדת לפחות בתנאי אחד.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה תחזיר <span class="ltr">=OR(B3&gt;=85,C3&gt;=90)</span> בשורה של מאיה (ממוצע 88, נוכחות 80)?',
        options: [
          { text: 'FALSE', correct: false, hint: 'ל-OR מספיק תנאי אחד. הממוצע של מאיה 88, וזה כבר מספיק.' },
          { text: '88', correct: false, hint: 'OR לא מחזירה ערך מהטבלה, רק TRUE או FALSE.' },
          { text: '#VALUE!', correct: false, hint: 'הנוסחה תקינה: שני תנאים מופרדים בפסיק.' },
          { text: 'TRUE', correct: true },
        ],
      },
    },

    // ---------- NOT ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'NOT',
          why: 'כשרוצים את ההפך של תנאי שכבר כתבת: "כל מי שלא...".',
          what: 'הופכת: TRUE נהיה FALSE, ו-FALSE נהיה TRUE.',
          when: ['לא', 'כל מי שלא...', 'אף אחד מהתנאים'],
          syntax: '=NOT(logical)',
          args: [['logical', 'תנאי אחד בלבד']],
          fails: ['שני תנאים בתוך NOT ← שגיאה. NOT מקבלת תנאי אחד'],
          note: '<span class="ltr">NOT(B2="חיפה")</span> זהה ל-<span class="ltr">B2&lt;&gt;"חיפה"</span>, והשני קצר יותר. NOT שימושית בעיקר כדי להפוך תנאי שלם, למשל <span class="ltr">NOT(OR(...))</span>: "אף אחד מהתנאים".',
        },
        {
          type: 'sheet',
          header: [...STUDENTS_HEADER, 'מלגה?', 'בלי מלגה?'],
          rows: STUDENTS.map((r, i) => [...r, i === 0 ? 'TRUE' : 'FALSE', i === 0 ? 'FALSE' : 'TRUE']),
          formula: { cell: 'E2', text: '=NOT(D2)' },
          caption: 'עמודה E הופכת את עמודה D.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איזה ביטוי מחזיר בדיוק את אותה תוצאה כמו <span class="ltr">=NOT(B2="חיפה")</span>?',
        options: [
          { text: '<span class="ltr">=B2&lt;&gt;"חיפה"</span>', correct: true },
          { text: '<span class="ltr">=B2="חיפה"</span>', correct: false, hint: 'זה התנאי עצמו, לפני ההיפוך. NOT הופכת אותו.' },
          { text: '<span class="ltr">=NOT(B2,"חיפה")</span>', correct: false, hint: 'NOT מקבלת תנאי אחד שלם, לא תא ומילה בנפרד.' },
          { text: '<span class="ltr">=B2="לא חיפה"</span>', correct: false, hint: 'זה בודק אם כתוב בתא בדיוק "לא חיפה". זה לא היפוך של התנאי.' },
        ],
      },
    },

    // ---------- כשל: "וגם" שהוא "או" ----------
    {
      blocks: [
        {
          type: 'trap',
          title: 'מוקש: "וגם" שהוא בעצם "או"',
          body: `<p>"הנחה לסטודנטים <b>ול</b>חיילים". צריך להיות גם סטודנטית וגם חיילת? לא! מספיק אחד. זה <b>OR</b>, למרות שבמשפט כתוב "ו".</p>
          <p>השאלה שכדאי לשאול: <b>האם מספיק תנאי אחד?</b> אם כן, OR. אם צריך את כולם, AND.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'כניסה חינם למוזיאון לילדים מתחת לגיל 6 <b>ול</b>מבוגרים מעל 67. איזו נוסחה (גיל ב-B2)?',
        options: [
          { text: '<span class="ltr">=AND(B2&lt;6,B2&gt;67)</span>', correct: false, hint: 'אין אף אחד שהוא גם מתחת ל-6 וגם מעל 67. מספיק תנאי אחד, וזה OR.' },
          { text: '<span class="ltr">=OR(B2&lt;6;B2&gt;67)</span>', correct: false, hint: 'הרעיון נכון, אבל בין התנאים שמים פסיק, לא נקודה-פסיק.' },
          { text: '<span class="ltr">=NOT(B2&lt;6,B2&gt;67)</span>', correct: false, hint: 'NOT מקבלת תנאי אחד והופכת אותו. כאן צריך "אחד משני תנאים".' },
          { text: '<span class="ltr">=OR(B2&lt;6,B2&gt;67)</span>', correct: true },
        ],
      },
    },

    // ---------- כשל: AND על אותה עמודה ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>הכול FALSE. למה? 🔍</h2>
          <p>לסדנה נרשמות תלמידות מחיפה ומעכו. יעל כתבה נוסחה לבדוק מי מתאימה:</p>`,
        },
        {
          type: 'sheet',
          header: ['שם', 'עיר', 'מתאימה?'],
          rows: [
            ['נועה', 'חיפה', 'FALSE'],
            ['מאיה', 'עכו', 'FALSE'],
            ['שירה', 'נצרת', 'FALSE'],
          ],
          formula: { cell: 'C2', text: '=AND(B2="חיפה",B2="עכו")' },
          marks: { C2: 'bad', C3: 'bad' },
        },
      ],
      question: {
        type: 'mc',
        prompt: 'למה גם נועה מחיפה קיבלה FALSE?',
        options: [
          { text: 'כי חסרות מרכאות סביב B2', correct: false, hint: 'כתובת תא נכתבת בלי מרכאות. המרכאות רק סביב הטקסט, וכאן הן במקום.' },
          { text: 'כי בתא אחד יש רק עיר אחת, אז AND על אותה עמודה תמיד FALSE. צריך OR', correct: true },
          { text: 'כי צריך לכתוב "חיפה ועכו" בתנאי אחד', correct: false, hint: 'אז אקסל יחפש תא שכתוב בו בדיוק "חיפה ועכו". אין כזה.' },
          { text: 'כי AND עובדת רק עם מספרים', correct: false, hint: 'AND עובדת עם כל תנאי, גם של טקסט. הבעיה היא שאין עיר שהיא גם חיפה וגם עכו.' },
        ],
      },
    },
  ],
};
