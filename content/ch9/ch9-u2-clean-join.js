// פרק 9, יחידה 2: TRIM ו-UPPER/LOWER לניקוי, & ו-CONCATENATE לחיבור,
// אפס מוביל בטלפון (מסעיף הטיוב בדף הנוסחאות), ובסוף "הדבק מיוחד ← ערכים",
// שבלעדיו מוחקים את עמודת המקור והנוסחאות נשברות.
// לפי התבנית הפדגוגית (12.10): כרטיס אחד לכל שקף, שאלה בסוף כל שקף.
// תיקון בטיוב (נוהל 12.10): עמודת עזר ← הדבק ערכים על העמודה המקורית ב"בתהליך טיוב"
// ← מוחקים את עמודת העזר ← צהוב + הסבר.
// בדיקה: COUNTIF(B2:B5,"חיפה") כששניים עם רווח = 2 · UPPER("hfa-12")=HFA-12
// · CONCATENATE("נועה","לוי")=נועהלוי · אחרי מחיקת עמודת המקור: =TRIM(#REF!)

export default {
  title: 'לנקות ולחבר: TRIM, &, CONCATENATE',
  slides: [
    // ---------- למה ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h1>רווחים שלא רואים 🧽</h1>
          <p>ברשימת נרשמות לחוג, ארבע בנות מחיפה. ספרנו עם COUNTIF, ויצא 2.</p>`,
        },
        {
          type: 'sheet',
          header: ['נרשמת', 'עיר', '', 'כמה מחיפה'],
          rows: [
            ['נועה', 'חיפה', '', '2'],
            ['מאיה', ' חיפה', '', ''],
            ['טל', 'חיפה ', '', ''],
            ['רוני', 'חיפה', '', ''],
          ],
          formula: { cell: 'D2', text: '=COUNTIF(B2:B5,"חיפה")' },
          marks: { 'B2:B5': 'range' },
        },
      ],
      question: {
        type: 'mc',
        prompt: 'למה יצא 2, כשבעין רואים ארבע פעמים "חיפה"?',
        options: [
          { text: 'כי COUNTIF לא עובדת על עברית', correct: false, hint: 'COUNTIF עובדת על עברית. שתי חיפה כן נספרו.' },
          { text: 'בשני תאים יש רווח לפני או אחרי המילה. לאקסל זה טקסט אחר', correct: true },
          { text: 'כי הטווח B2:B5 לא נכון', correct: false, hint: 'הטווח נכון: ארבעת התאים של העיר.' },
          { text: 'כי שני תאים ריקים', correct: false, hint: 'אין תאים ריקים. בכל ארבעת התאים רואים "חיפה".' },
        ],
      },
    },

    // ---------- TRIM ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'TRIM',
          why: 'כדי שאותה מילה תיכתב תמיד אותו דבר, ו-COUNTIF והפיבוט יספרו אותה נכון.',
          what: 'מסירה רווחים מיותרים: בהתחלה, בסוף, ורווחים כפולים באמצע. בין מילים נשאר רווח אחד.',
          when: ['רווחים מיותרים', 'נקי', 'טייבי את העמודה'],
          syntax: '=TRIM(text)',
          args: [['text', 'התא']],
          fails: ['מוחקות את עמודת המקור לפני הדבקת ערכים ← #REF!'],
        },
        {
          type: 'steps',
          items: [
            'בגיליון "בתהליך טיוב" מוסיפות עמודה ריקה ליד העיר. זו עמודת עזר.',
            'ב-C2 מקלידות <span class="ltr">=TRIM(B2)</span>, Enter, ולחיצה כפולה על ידית המילוי.',
            'בודקות עם <span class="ltr">=LEN(C2)</span>: "חיפה" צריכה להיות 4 בכל השורות.',
          ],
        },
        {
          type: 'sheet',
          header: ['נרשמת', 'עיר', 'עיר נקייה'],
          rows: [
            ['נועה', 'חיפה', 'חיפה'],
            ['מאיה', ' חיפה', 'חיפה'],
            ['טל', 'חיפה ', 'חיפה'],
            ['רוני', 'חיפה', 'חיפה'],
          ],
          formula: { cell: 'C3', text: '=TRIM(B3)' },
          caption: 'איך מחזירים את העמודה הנקייה למקום של המקורית? בשקף האחרון.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בעמודת עיר יש "חיפה", " חיפה" ו"חיפה " (עם רווחים). מה הדרך הנכונה לאחד אותן?',
        options: [
          { text: '<span class="ltr">=LEFT(B2,4)</span>', correct: false, hint: 'ב" חיפה" הרווח הוא התו הראשון, ו-LEFT תחזיר " חיפ".' },
          { text: '<span class="ltr">=LEN(B2)</span>', correct: false, hint: 'LEN רק <b>מודדת</b> את האורך. היא עוזרת לגלות את הרווחים (4 מול 5), אבל לא מתקנת.' },
          { text: 'עמודת עזר עם <span class="ltr">=TRIM(B2)</span>', correct: true },
          { text: 'אין צורך, אקסל מתעלם מרווחים', correct: false, hint: 'אקסל לא מתעלם מרווחים. "חיפה " ו"חיפה" הם שני טקסטים שונים.' },
        ],
      },
    },

    // ---------- UPPER / LOWER ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'UPPER / LOWER',
          why: 'כדי שקוד באנגלית ייכתב תמיד באותה צורה: לא פעם "tlv" ופעם "TLV".',
          what: 'UPPER הופכת אותיות באנגלית לגדולות. LOWER הופכת לקטנות. ספרות, סימנים ועברית לא משתנים.',
          when: ['אחידות', 'אותיות גדולות', 'אותיות קטנות'],
          syntax: '=UPPER(text)',
          args: [['text', 'התא']],
          fails: ['על עברית אין לה השפעה', 'לא מסירה רווחים. בשביל זה יש TRIM'],
        },
        {
          type: 'sheet',
          header: ['קוד סניף', 'קוד אחיד'],
          rows: [
            ['tlv-05', 'TLV-05'],
            ['TLV-05', 'TLV-05'],
            ['Tlv-07', 'TLV-07'],
          ],
          formula: { cell: 'B2', text: '=UPPER(A2)' },
          caption: 'עובדים כמו עם TRIM: עמודת עזר, ידית המילוי, ואז הדבקת ערכים.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'מה תחזיר <span class="ltr">=UPPER("hfa-12")</span>?',
        options: [
          { text: '<span class="ltr">HFA-12</span>', correct: true },
          { text: '<span class="ltr">hfa-12</span>', correct: false, hint: 'זה בדיוק מה שהיה. UPPER הופכת את האותיות לגדולות.' },
          { text: '<span class="ltr">HFA</span>', correct: false, hint: 'UPPER לא מוחקת כלום. הספרות והמקף נשארים כמו שהם.' },
          { text: '<span class="ltr">#VALUE!</span>', correct: false, hint: 'אין כאן שגיאה. ספרות וסימנים פשוט לא משתנים.' },
        ],
      },
    },

    // ---------- & ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>לחבר טקסטים עם &amp;</h2>
          <p>השם הפרטי בעמודה A, ושם המשפחה בעמודה B. רוצים "שם מלא" בעמודה C.</p>`,
        },
        {
          type: 'steps',
          items: [
            'לוחצות על C2 ומקלידות <span class="ltr">=</span>.',
            'לוחצות על A2, ומקלידות <span class="ltr">&amp;" "&amp;</span>. בין המרכאות יש רווח.',
            'לוחצות על B2, Enter, ולחיצה כפולה על ידית המילוי.',
          ],
        },
        {
          type: 'sheet',
          header: ['פרטי', 'משפחה', 'שם מלא'],
          rows: [
            ['נועה', 'לוי', 'נועה לוי'],
            ['מאיה', 'כהן', 'מאיה כהן'],
          ],
          formula: { cell: 'C2', text: '=A2&" "&B2' },
          caption: 'בלי <span class="ltr">" "</span> באמצע יוצא "נועהלוי".',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'איך מקבלים "כהן, מאיה" (משפחה, פסיק, רווח, פרטי)?',
        options: [
          { text: '<span class="ltr">=B2&amp;","&amp;A2</span>', correct: false, hint: 'חסר הרווח אחרי הפסיק. תקבלי "כהן,מאיה".' },
          { text: '<span class="ltr">=B2+", "+A2</span>', correct: false, hint: '+ הוא חיבור של מספרים. לחיבור טקסט משתמשים ב-&.' },
          { text: '<span class="ltr">=B2&amp;, &amp;A2</span>', correct: false, hint: 'הפסיק והרווח הם טקסט, ולכן הם חייבים להיות בתוך מרכאות.' },
          { text: '<span class="ltr">=B2&amp;", "&amp;A2</span>', correct: true },
        ],
      },
    },

    // ---------- CONCATENATE ----------
    {
      blocks: [
        {
          type: 'fn-card',
          name: 'CONCATENATE',
          why: 'אותו דבר כמו &, בצורה של פונקציה. יש מי שקל לה יותר לקרוא כך.',
          what: 'מחברת את כל הארגומנטים לטקסט אחד, לפי הסדר. בגרסאות חדשות יש גם CONCAT, שעושה אותו דבר.',
          when: ['חברי', 'שם מלא', 'צרפי'],
          syntax: '=CONCATENATE(text1, text2, text3)',
          args: [['text1', 'החלק הראשון'], ['text2', 'החלק השני (למשל " ")'], ['text3', 'וכן הלאה']],
          fails: ['רווח לא נוסף לבד. צריך " " כארגומנט'],
          note: '<span class="ltr">=CONCATENATE(A2," ",B2)</span> נותן בדיוק את מה שנותן <span class="ltr">=A2&amp;" "&amp;B2</span>.',
        },
      ],
      question: {
        type: 'mc',
        prompt: 'ב-A2 כתוב "נועה", וב-B2 "לוי". מה תחזיר <span class="ltr">=CONCATENATE(A2,B2)</span>?',
        options: [
          { text: 'נועהלוי', correct: true },
          { text: 'נועה לוי', correct: false, hint: 'הרווח לא נוסף לבד. צריך להוסיף אותו כארגומנט: <span class="ltr">" "</span>.' },
          { text: 'לוי נועה', correct: false, hint: 'CONCATENATE מחברת לפי סדר הארגומנטים: קודם A2, ואחריו B2.' },
          { text: '<span class="ltr">#VALUE!</span>', correct: false, hint: 'חיבור של שני טקסטים הוא חוקי לגמרי. אין כאן שגיאה.' },
        ],
      },
    },

    // ---------- האפס שנעלם ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>בטיוב: האפס שנעלם</h2>
          <p>אקסל מוחק אפס בתחילת מספר. הטלפון 0521234567 הופך ל-521234567.</p>
          <p>כדי להחזיר את האפס, מחברים אותו כטקסט:</p>
          <p class="ltr" style="text-align:center"><code class="ltr formula-display">="0"&amp;A2</code></p>
          <p>התוצאה היא טקסט, וזה בדיוק מה שרוצים. עם טלפונים לא עושים חשבון.</p>`,
        },
      ],
      question: {
        type: 'mc',
        prompt: 'בעמודה A מספרי טלפון בלי האפס בהתחלה (למשל 541234567). מה הנוסחה לעמודת העזר?',
        options: [
          { text: '<span class="ltr">=0+A2</span>', correct: false, hint: 'הוספת 0 למספר לא משנה אותו: 0 + 541234567 = 541234567. צריך לחבר כטקסט, עם &.' },
          { text: '<span class="ltr">=A2&amp;"0"</span>', correct: false, hint: 'זה מוסיף את האפס בסוף: 5412345670.' },
          { text: '<span class="ltr">="0"&amp;A2</span>', correct: true },
          { text: '<span class="ltr">=TRIM(A2)</span>', correct: false, hint: 'TRIM מסירה רווחים. היא לא מוסיפה אפס.' },
        ],
      },
    },

    // ---------- כשל: למחוק את המקור ----------
    {
      blocks: [
        {
          type: 'text',
          html: `<h2>כל התאים הפכו ל-<span class="ltr">#REF!</span> 🔍</h2>
          <p>נועה בנתה עמודת עזר עם TRIM, ומחקה את עמודת העיר המקורית. זה מה שקיבלה.</p>`,
        },
        {
          type: 'sheet',
          header: ['נרשמת', 'עיר נקייה'],
          rows: [
            ['נועה', '#REF!'],
            ['מאיה', '#REF!'],
            ['טל', '#REF!'],
          ],
          formula: { cell: 'B2', text: '=TRIM(#REF!)' },
          marks: { 'B2:B4': 'bad' },
        },
        {
          type: 'steps',
          title: '🖱️ הדרך הנכונה: הדבק מיוחד ← ערכים',
          items: [
            'מסמנות את עמודת העזר ולוחצות <span class="ltr">Ctrl+C</span>.',
            { text: 'לוחצות על התא הראשון בעמודה המקורית ← לחיצה ימנית ← תחת <b>אפשרויות הדבקה</b> ← <b>ערכים</b> (123).', shot: 'ch1-paste-values.png', alt: 'אפשרויות הדבקה בתפריט הלחיצה הימנית, עם הסמל 123 של ערכים' },
            'מוחקות את עמודת העזר. צובעות בצהוב את התאים שהשתנו, וכותבות בעמודת ההסבר מה תוקן.',
          ],
        },
      ],
      question: {
        type: 'mc',
        prompt: 'למה התאים של נועה הפכו ל-<span class="ltr">#REF!</span>?',
        options: [
          { text: 'כי TRIM לא עובדת על עברית', correct: false, hint: 'TRIM עובדת על כל טקסט. לפני המחיקה הכול עבד.' },
          { text: 'הנוסחה מפנה לעמודה שנמחקה. היה צריך קודם להדביק את התוצאות כערכים', correct: true },
          { text: 'צריך לגרור שוב את ידית המילוי', correct: false, hint: 'גרירה תעתיק את אותה נוסחה שבורה. אין לה עמודה להפנות אליה.' },
          { text: 'יש רווחים בשמות', correct: false, hint: 'רווחים לא גורמים ל-#REF!. השגיאה הזו אומרת "התא שהנוסחה מפנה אליו לא קיים".' },
        ],
      },
    },
  ],
};
