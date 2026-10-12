// מבחן פרק 5: IF.

export default {
  title: 'מבחן פרק: IF',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'מבנה IF',
      prompt: 'מה הסדר הנכון של הארגומנטים ב-IF?',
      options: [
        { text: 'מה להחזיר אם כן, תנאי, מה להחזיר אם לא', correct: false },
        { text: 'תנאי, מה להחזיר אם כן, מה להחזיר אם לא', correct: true },
        { text: 'תנאי, מה להחזיר אם לא, מה להחזיר אם כן', correct: false },
        { text: 'טווח, תנאי, ערך', correct: false },
      ],
      explanation: 'IF(שאלה, תשובה ל"כן", תשובה ל"לא").',
    },
    {
      type: 'mc',
      topic: 'מרכאות ב-IF',
      prompt: 'איזו נוסחה כתובה נכון?',
      options: [
        { text: '<span class="ltr">=IF(B2&gt;=60,"עובר","נכשל")</span>', correct: true },
        { text: '<span class="ltr">=IF(B2&gt;="60","עובר","נכשל")</span>', correct: false },
        { text: '<span class="ltr">=IF(B2&gt;=60,עובר,נכשל)</span>', correct: false },
        { text: '<span class="ltr">=IF("B2&gt;=60","עובר","נכשל")</span>', correct: false },
      ],
      explanation: 'מספרים בלי מרכאות, טקסט שמחזירים — עם מרכאות, ותנאי — בלי.',
    },
    {
      type: 'mc',
      topic: 'ריק ולא 0',
      prompt: 'רוצים לחשב את <b>הממוצע</b> של הזמנות "אונליין" בלבד בעזרת עמודת עזר. מה ה"אחרת" הנכון?',
      options: [
        { text: '<span class="ltr">0</span>', correct: false },
        { text: '<span class="ltr">""</span>', correct: true },
        { text: '<span class="ltr">" "</span>', correct: false },
        { text: '<span class="ltr">"אין"</span>', correct: false },
      ],
      explanation: 'אפסים מורידים את הממוצע. "" הוא ריק, ו-AVERAGE מדלגת עליו. (גם "אין" לא יפגע בממוצע, אבל הוא מלכלך את העמודה — "" הוא הדרך המקובלת.)',
    },
    {
      type: 'mc',
      topic: 'עמודת 1/0',
      prompt: 'בעמודה G סימנו 1 לכל מוצר שאזל ו-0 לשאר. מה מחזירה <span class="ltr">=AVERAGE(G2:G101)</span>?',
      options: [
        { text: 'את מספר המוצרים שאזלו', correct: false },
        { text: 'את מספר כל המוצרים', correct: false },
        { text: 'שגיאה, אי אפשר לחשב ממוצע של 1 ו-0', correct: false },
        { text: 'את שיעור המוצרים שאזלו (למשל 0.12 = 12%)', correct: true },
      ],
      explanation: 'סכום עמודת 1/0 = כמות. ממוצע עמודת 1/0 = שיעור (חלק מהשלם).',
    },
    {
      type: 'mc',
      topic: 'IF מקונן',
      prompt: 'ציון 90 ומעלה "מצוין", 70 ומעלה "טוב", אחרת "לשפר". מה נכון?',
      options: [
        { text: '<span class="ltr">=IF(B2&gt;=70,"טוב",IF(B2&gt;=90,"מצוין","לשפר"))</span>', correct: false },
        { text: '<span class="ltr">=IF(B2&gt;=90,"מצוין",B2&gt;=70,"טוב","לשפר")</span>', correct: false },
        { text: '<span class="ltr">=IF(B2&gt;=90,"מצוין",IF(B2&gt;=70,"טוב"))</span>', correct: false },
        { text: '<span class="ltr">=IF(B2&gt;=90,"מצוין",IF(B2&gt;=70,"טוב","לשפר"))</span>', correct: true },
      ],
      explanation: 'עם &gt;= מתחילים מהגבוה. כשמתחילים מ-70, ציון 95 יקבל "טוב". נוסחה שבה התנאי השני כתוב בלי IF תחזיר שגיאה, ובלי "אחרת" פנימי, ציון 50 יקבל FALSE.',
    },
    {
      type: 'mc',
      topic: 'IF עם AND/OR',
      prompt: '"הנחת סטודנטים: רק למי שגילה מתחת ל-30 וגם מציגה תעודת סטודנט". גיל ב-B2, תעודה ("כן"/"לא") ב-C2.',
      options: [
        { text: '<span class="ltr">=IF(AND(B2&lt;30,C2="כן"),"הנחה","")</span>', correct: true },
        { text: '<span class="ltr">=IF(OR(B2&lt;30,C2="כן"),"הנחה","")</span>', correct: false },
        { text: '<span class="ltr">=AND(B2&lt;30,C2="כן","הנחה","")</span>', correct: false },
        { text: '<span class="ltr">=IF(B2&lt;30,C2="כן","הנחה")</span>', correct: false },
      ],
      explanation: '"רק... וגם" — שני התנאים חייבים להתקיים: AND, בתוך IF.',
    },
    {
      type: 'mc',
      topic: 'IFS',
      prompt: 'מה יקרה ב-<span class="ltr">=IFS(B2&gt;=90,"א",B2&gt;=70,"ב")</span> אם B2 הוא 50?',
      options: [
        { text: 'יחזור "ב"', correct: false },
        { text: 'התא יישאר ריק', correct: false },
        { text: 'תחזור שגיאה #N/A, כי אף תנאי לא התקיים', correct: true },
        { text: 'יחזור FALSE', correct: false },
      ],
      explanation: 'ב-IFS אין "אחרת" אוטומטי. מוסיפים בסוף <span class="ltr">TRUE,"ג"</span>.',
    },
  ],
};
