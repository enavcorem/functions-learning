// מבחן פרק 6: חישובים מותנים. טבלה חדשה (לא היריד), כדי לבדוק שההבנה
// עוברת לנתונים אחרים.

const SCEN = 'בטבלת השאלות בספרייה: עמודה B = ז\'אנר, עמודה C = מספר השאלות, עמודה D = סניף (שורות 2 עד 60).';

export default {
  title: 'מבחן פרק: חישובים מותנים',
  passMark: 70,
  questions: [
    {
      type: 'mc',
      topic: 'בחירה: COUNTIF או SUMIF',
      prompt: `${SCEN} "כמה ספרי מתח יש ברשימה?"`,
      options: [
        { text: '<span class="ltr">=COUNTIF(B2:B60,"מתח")</span>', correct: true },
        { text: '<span class="ltr">=SUMIF(B2:B60,"מתח",C2:C60)</span>', correct: false },
        { text: '<span class="ltr">=COUNT(B2:B60,"מתח")</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(C2:C60,"מתח")</span>', correct: false },
      ],
      explanation: '"כמה ספרים" = סופרים שורות: COUNTIF על עמודת הז\'אנר. SUMIF הייתה מחזירה כמה פעמים הושאלו.',
    },
    {
      type: 'mc',
      topic: 'בחירה: COUNTIF או SUMIF',
      prompt: `${SCEN} "כמה פעמים בסך הכול הושאלו ספרי מתח?"`,
      options: [
        { text: '<span class="ltr">=COUNTIF(B2:B60,"מתח")</span>', correct: false },
        { text: '<span class="ltr">=SUMIF(C2:C60,"מתח",B2:B60)</span>', correct: false },
        { text: '<span class="ltr">=SUMIF(B2:B60,"מתח",C2:C60)</span>', correct: true },
        { text: '<span class="ltr">=SUM(B2:B60,"מתח")</span>', correct: false },
      ],
      explanation: 'סך ההשאלות = מסכמים את עמודת ההשאלות (C), רק בשורות שבהן הז\'אנר (B) הוא מתח.',
    },
    {
      type: 'mc',
      topic: 'כתיבת תנאי',
      prompt: 'איך סופרים ספרים שהושאלו <b>20 פעמים ומעלה</b>?',
      options: [
        { text: '<span class="ltr">=COUNTIF(C2:C60,&gt;=20)</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(C2:C60,"=&gt;20")</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(C2:C60,"&gt;=20")</span>', correct: true },
        { text: '<span class="ltr">=COUNTIF(C2:C60,"&gt;20")</span>', correct: false },
      ],
      explanation: 'התנאי כולו במרכאות, &gt;= בסדר הזה, ו"ומעלה" כולל את ה-20 עצמו.',
    },
    {
      type: 'mc',
      topic: 'כתיבת תנאי',
      prompt: 'בתא G1 יש מספר שהמורה תשנה. איך סופרים ספרים שהושאלו יותר מהמספר שב-G1?',
      options: [
        { text: '<span class="ltr">=COUNTIF(C2:C60,"&gt;G1")</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(C2:C60,"&gt;"&amp;G1)</span>', correct: true },
        { text: '<span class="ltr">=COUNTIF(C2:C60,&gt;G1)</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(C2:C60,"&gt;"G1)</span>', correct: false },
      ],
      explanation: 'הסימן במרכאות, התא מחוצה להן, ו-& מחבר ביניהם.',
    },
    {
      type: 'mc',
      topic: 'סדר הארגומנטים ב-IFS',
      prompt: `${SCEN} סך ההשאלות של ספרי מתח בסניף "מרכז":`,
      options: [
        { text: '<span class="ltr">=SUMIFS(B2:B60,"מתח",D2:D60,"מרכז",C2:C60)</span>', correct: false },
        { text: '<span class="ltr">=SUMIF(C2:C60,B2:B60,"מתח",D2:D60,"מרכז")</span>', correct: false },
        { text: '<span class="ltr">=SUMIFS(C2:C60,B2:B60,"מתח",D2:D60,"מרכז")</span>', correct: true },
        { text: '<span class="ltr">=SUMIFS(C2:C60,"מתח","מרכז")</span>', correct: false },
      ],
      explanation: 'ב-SUMIFS קודם מה מסכמים, ואז זוגות: עמודה ותנאי, עמודה ותנאי.',
    },
    {
      type: 'mc',
      topic: 'אחוז מתוך הכלל',
      prompt: `${SCEN} "איזה אחוז מכלל ההשאלות היו של ספרי מתח?"`,
      options: [
        { text: '<span class="ltr">=COUNTIF(B2:B60,"מתח")/COUNTA(B2:B60)</span>', correct: false },
        { text: '<span class="ltr">=SUMIF(B2:B60,"מתח",C2:C60)/SUM(C2:C60)</span>', correct: true },
        { text: '<span class="ltr">=SUMIF(B2:B60,"מתח",C2:C60)/COUNTA(B2:B60)</span>', correct: false },
        { text: '<span class="ltr">=SUM(C2:C60)/SUMIF(B2:B60,"מתח",C2:C60)</span>', correct: false },
      ],
      explanation: 'אחוז "מההשאלות" — חלק ההשאלות של מתח חלקי כל ההשאלות. COUNTIF חלקי COUNTA נותנת את אחוז <b>הספרים</b>, לא את אחוז ההשאלות.',
    },
    {
      type: 'mc',
      topic: '"מכיל" בתנאי',
      prompt: 'בעמודת הז\'אנר יש "מתח", "מתח פסיכולוגי" ו"מתח לנוער". איך סופרים את כולם יחד?',
      options: [
        { text: '<span class="ltr">=COUNTIF(B2:B60,"*מתח*")</span>', correct: true },
        { text: '<span class="ltr">=COUNTIF(B2:B60,"מתח")</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(B2:B60,*מתח*)</span>', correct: false },
        { text: '<span class="ltr">=COUNTIF(B2:B60,"מתח*מתח")</span>', correct: false },
      ],
      explanation: 'כוכבית = כל טקסט. "*מתח*" תופס כל תא שהמילה מופיעה בו. "מתח" לבד תופס רק התאמה מדויקת.',
    },
    {
      type: 'mc',
      topic: 'ריק ולא 0',
      prompt: 'בעמודת עזר נכתב <span class="ltr">=IF(B2="צפון",C2,0)</span>, ואז חושב ממוצע על העמודה. מה הבעיה?',
      options: [
        { text: 'אין בעיה, AVERAGE מתעלמת מאפסים', correct: false },
        { text: 'השורות שאינן "צפון" נספרות כאפסים, והממוצע יוצא נמוך מדי', correct: true },
        { text: 'הנוסחה תחזיר #VALUE!', correct: false },
        { text: 'צריך לכתוב "צפון" בלי מרכאות', correct: false },
      ],
      explanation: 'AVERAGE מתעלמת מתאים ריקים, לא מאפסים. בעמודת עזר כותבים "" במקום 0.',
    },
    {
      type: 'mc',
      topic: 'עמודת עזר לתת-קבוצה',
      prompt: 'למה צריך עמודת עזר כדי לחשב <b>חציון</b> של קבוצה אחת, ולא מספיקה פונקציה אחת?',
      options: [
        { text: 'כי MEDIAN לא עובדת על יותר מ-100 שורות', correct: false },
        { text: 'כי חציון מחשבים רק על נתונים ממוינים', correct: false },
        { text: 'כי אסור לכתוב IF בתוך MEDIAN', correct: false },
        { text: 'כי אין באקסל MEDIANIF, ולכן קודם "מסננים" את הקבוצה לעמודה נפרדת', correct: true },
      ],
      explanation: 'לממוצע יש AVERAGEIF, אבל לחציון ולסטיית תקן אין גרסה עם תנאי. עמודת עזר עם IF ו-"" פותרת את זה.',
    },
  ],
};
