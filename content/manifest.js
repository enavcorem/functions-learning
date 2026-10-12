// ===== מקור האמת היחיד למבנה הקורס =====
// כל פרק ויחידה מוגדרים כאן פעם אחת. גם מפת המסלול וגם לוגיקת הנעילה
// קוראות מהרשימה הזאת בלבד. להוספת יחידה: אובייקט חדש ל-units + קובץ
// תוכן תחת content/chX/. אין צורך לגעת בשום קובץ אחר.

// ⚠️ מזהה הקורס. ממנו נגזרים מפתחות ה-localStorage של התלמידות
// ('func_data_v3' ו-'func_current_key_v3'). שינוי הערך כאן
// אחרי שתלמידות כבר נכנסו = התקדמות שנראית להן כאילו נמחקה.
export const COURSE_ID = 'func';

export const COURSE = {
  title: 'ארגז הכלים — פונקציות אקסל',
  icon: '🧰',
  welcome: {
    f: 'ברוכה הבאה לארגז הכלים — פונקציות אקסל! 🧰',
    m: 'ברוך הבא לארגז הכלים — פונקציות אקסל! 🧰',
  },
  finaleText: 'סיימת את כל יחידות הלומדה 🧰',
  teacherTitle: '🧰 לוח מורה — ארגז הכלים — פונקציות אקסל',

  // מצב כיתה לשיעור פרונטלי (?class=1 פותח את כל היחידות במכשיר המורה).
  // גבעול משתמשים בלומדה גם בשיעור.
  classMode: true,

  // הפרקים נפתחים לפי הסדר (11.10 — הלומדה משמשת גם תלמידות שצריכות לעבור
  // על הכול). מי שכבר יודעת: בראש כל פרק יש אתגר פטור קצר, ומעבר שלו פותח
  // את הפרק הבא. בתוך פרק — השיעורים פתוחים יחד (unordered), ומבחן הפרק
  // נפתח אחרי שעברו על כולם. להחזיר את הכול פתוח: openChapters: true.
  openChapters: false,
};

// לכל פונקציה אותה תבנית: למה, מתי, איך כותבים, איך זה נראה, מוקש, שאלה.
// הסדר לוגי (כל פרק נשען על הקודמים). אתגר פטור בראש כל פרק מאפשר לדלג.
export const CHAPTERS = [
  {
    id: 'func-ch1', number: 1, title: 'יסודות', icon: '🧱', colorVar: 'chapter-1', unordered: true,
    units: [
      { id: 'func-ch1-exemption', title: 'אתגר פטור: יסודות', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch1/ch1-exemption.js' },
      { id: 'func-ch1-u1', title: 'איך נראית נוסחה', type: 'lesson', icon: '✏️', estMinutes: 6, modulePath: 'ch1/ch1-u1-formula.js' },
      { id: 'func-ch1-u2', title: 'גרירה וקיבוע — $', type: 'lesson', icon: '📌', estMinutes: 7, modulePath: 'ch1/ch1-u2-anchoring.js' },
      { id: 'func-ch1-u3', title: 'פונקציות הסיכום', type: 'lesson', icon: '➕', estMinutes: 8, modulePath: 'ch1/ch1-u3-summary.js' },
      { id: 'func-ch1-u4', title: 'LARGE, ROUND ועוד', type: 'lesson', icon: '🔢', estMinutes: 8, modulePath: 'ch1/ch1-u4-more-math.js' },
      { id: 'func-ch1-u5', title: 'קיצורים וטריקים', type: 'lesson', icon: '⚡', estMinutes: 10, modulePath: 'ch1/ch1-u5-tricks.js' },
      { id: 'func-ch1-quiz', title: 'מבחן פרק: יסודות', type: 'quiz', icon: '🏁', estMinutes: 6, modulePath: 'ch1/ch1-quiz.js' },
    ],
  },
  {
    id: 'func-ch2', number: 2, title: 'כלי נתונים וטיוב', icon: '🛠️', colorVar: 'chapter-2', unordered: true,
    units: [
      { id: 'func-ch2-exemption', title: 'אתגר פטור: כלי נתונים וטיוב', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch2/ch2-exemption.js' },
      { id: 'func-ch2-u1', title: 'מיון וסינון', type: 'lesson', icon: '↕️', estMinutes: 8, modulePath: 'ch2/ch2-u1-sort-filter.js' },
      { id: 'func-ch2-u2', title: 'SUBTOTAL — חישוב שרואה סינון', type: 'lesson', icon: '👁️', estMinutes: 6, modulePath: 'ch2/ch2-u2-subtotal.js' },
      { id: 'func-ch2-u3', title: 'עיצוב מותנה', type: 'lesson', icon: '🎨', estMinutes: 7, modulePath: 'ch2/ch2-u3-conditional-format.js' },
      { id: 'func-ch2-u4', title: 'תהליך הטיוב, צעד אחרי צעד', type: 'lesson', icon: '🧹', estMinutes: 10, modulePath: 'ch2/ch2-u4-cleaning-process.js' },
      { id: 'func-ch2-quiz', title: 'מבחן פרק: כלי נתונים וטיוב', type: 'quiz', icon: '🏁', estMinutes: 5, modulePath: 'ch2/ch2-quiz.js' },
    ],
  },
  {
    id: 'func-ch3', number: 3, title: 'פונקציות סטטיסטיות', icon: '📊', colorVar: 'chapter-3', unordered: true,
    units: [
      { id: 'func-ch3-exemption', title: 'אתגר פטור: פונקציות סטטיסטיות', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch3/ch3-exemption.js' },
      { id: 'func-ch3-u1', title: 'מדדי מרכז: AVERAGE, MEDIAN, MODE', type: 'lesson', icon: '🎯', estMinutes: 7, modulePath: 'ch3/ch3-u1-center.js' },
      { id: 'func-ch3-u2', title: 'מדדי פיזור: טווח, STDEV, VAR', type: 'lesson', icon: '↔️', estMinutes: 7, modulePath: 'ch3/ch3-u2-spread.js' },
      { id: 'func-ch3-u3', title: 'PERCENTILE ו-QUARTILE', type: 'lesson', icon: '📶', estMinutes: 6, modulePath: 'ch3/ch3-u3-percentile.js' },
      { id: 'func-ch3-quiz', title: 'מבחן פרק: סטטיסטיקה באקסל', type: 'quiz', icon: '🏁', estMinutes: 7, modulePath: 'ch3/ch3-quiz.js' },
    ],
  },
  {
    id: 'func-ch4', number: 4, title: 'מבוא ללוגיקה', icon: '⚖️', colorVar: 'chapter-4', unordered: true,
    units: [
      { id: 'func-ch4-exemption', title: 'אתגר פטור: מבוא ללוגיקה', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch4/ch4-exemption.js' },
      { id: 'func-ch4-u1', title: 'אמת או שקר', type: 'lesson', icon: '✅', estMinutes: 7, modulePath: 'ch4/ch4-u1-true-false.js' },
      { id: 'func-ch4-u2', title: 'AND, OR, NOT', type: 'lesson', icon: '🔗', estMinutes: 7, modulePath: 'ch4/ch4-u2-and-or.js' },
      { id: 'func-ch4-quiz', title: 'מבחן פרק: לוגיקה', type: 'quiz', icon: '🏁', estMinutes: 5, modulePath: 'ch4/ch4-quiz.js' },
    ],
  },
  {
    id: 'func-ch5', number: 5, title: 'פונקציית תנאי — IF', icon: '🔀', colorVar: 'chapter-5', unordered: true,
    units: [
      { id: 'func-ch5-exemption', title: 'אתגר פטור: IF', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch5/ch5-exemption.js' },
      { id: 'func-ch5-u1', title: 'IF — אם כן, אם לא', type: 'lesson', icon: '🔀', estMinutes: 7, modulePath: 'ch5/ch5-u1-if.js' },
      { id: 'func-ch5-u2', title: 'ריק או אפס? ועמודת 1/0', type: 'lesson', icon: '⭕', estMinutes: 7, modulePath: 'ch5/ch5-u2-blank-zero.js' },
      { id: 'func-ch5-u3', title: 'IF מקונן ו-IFS', type: 'lesson', icon: '🪆', estMinutes: 8, modulePath: 'ch5/ch5-u3-nested.js' },
      { id: 'func-ch5-u4', title: 'IF עם AND ו-OR', type: 'lesson', icon: '🧩', estMinutes: 6, modulePath: 'ch5/ch5-u4-if-and-or.js' },
      { id: 'func-ch5-quiz', title: 'מבחן פרק: IF', type: 'quiz', icon: '🏁', estMinutes: 7, modulePath: 'ch5/ch5-quiz.js' },
    ],
  },
  {
    id: 'func-ch6', number: 6, title: 'חישובים מותנים', icon: '🎯', colorVar: 'chapter-6', unordered: true,
    units: [
      { id: 'func-ch6-exemption', title: 'אתגר פטור: חישובים מותנים', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch6/ch6-exemption.js' },
      { id: 'func-ch6-u1', title: 'COUNTIF ואיך כותבים תנאי', type: 'lesson', icon: '🔢', estMinutes: 8, modulePath: 'ch6/ch6-u1-countif.js' },
      { id: 'func-ch6-u2', title: 'SUMIF, AVERAGEIF ואחוזים', type: 'lesson', icon: '➗', estMinutes: 7, modulePath: 'ch6/ch6-u2-sumif.js' },
      { id: 'func-ch6-u3', title: 'כמה תנאים: COUNTIFS ומשפחתה', type: 'lesson', icon: '🎛️', estMinutes: 7, modulePath: 'ch6/ch6-u3-ifs.js' },
      { id: 'func-ch6-u4', title: 'חישוב על חלק מהנתונים', type: 'lesson', icon: '🧮', estMinutes: 8, modulePath: 'ch6/ch6-u4-subgroup.js' },
      { id: 'func-ch6-b1', title: 'אתגר ⭐ סף לפי סטיית תקן', type: 'bonus', icon: '⭐', estMinutes: 6, modulePath: 'ch6/ch6-b1-threshold.js' },
      { id: 'func-ch6-quiz', title: 'מבחן פרק: חישובים מותנים', type: 'quiz', icon: '🏁', estMinutes: 7, modulePath: 'ch6/ch6-quiz.js' },
    ],
  },
  {
    id: 'func-ch7', number: 7, title: 'טבלת ציר — פיבוט', icon: '🔄', colorVar: 'chapter-7', unordered: true,
    units: [
      { id: 'func-ch7-exemption', title: 'אתגר פטור: פיבוט', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch7/ch7-exemption.js' },
      { id: 'func-ch7-u1', title: 'מה זה פיבוט ואיך בונים', type: 'lesson', icon: '🔄', estMinutes: 7, modulePath: 'ch7/ch7-u1-build.js' },
      { id: 'func-ch7-u2', title: 'סכום, ספירה, ממוצע', type: 'lesson', icon: '🧮', estMinutes: 7, modulePath: 'ch7/ch7-u2-summarize.js' },
      { id: 'func-ch7-u3', title: 'מיון, סינון ורענון', type: 'lesson', icon: '🔃', estMinutes: 6, modulePath: 'ch7/ch7-u3-sort-refresh.js' },
      { id: 'func-ch7-quiz', title: 'מבחן פרק: פיבוט', type: 'quiz', icon: '🏁', estMinutes: 6, modulePath: 'ch7/ch7-quiz.js' },
    ],
  },
  {
    id: 'func-ch8', number: 8, title: 'גרפים', icon: '📈', colorVar: 'chapter-8', unordered: true,
    units: [
      { id: 'func-ch8-exemption', title: 'אתגר פטור: גרפים', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch8/ch8-exemption.js' },
      { id: 'func-ch8-u1', title: 'איזה גרף לאיזה סיפור', type: 'lesson', icon: '🍦', estMinutes: 11, modulePath: 'ch8/ch8-u1-which-chart.js' },
      { id: 'func-ch8-u2', title: 'חוקי הברזל של גרף', type: 'lesson', icon: '📏', estMinutes: 10, modulePath: 'ch8/ch8-u2-good-chart.js' },
      { id: 'func-ch8-quiz', title: 'מבחן פרק: גרפים', type: 'quiz', icon: '🏁', estMinutes: 5, modulePath: 'ch8/ch8-quiz.js' },
    ],
  },
  {
    id: 'func-ch9', number: 9, title: 'טקסט וטיוב', icon: '🔤', colorVar: 'chapter-9', unordered: true,
    units: [
      { id: 'func-ch9-exemption', title: 'אתגר פטור: טקסט וטיוב', type: 'exemption', icon: '🎯', estMinutes: 6, modulePath: 'ch9/ch9-exemption.js' },
      { id: 'func-ch9-u1', title: 'לחתוך טקסט: LEFT, RIGHT, MID, LEN', type: 'lesson', icon: '✂️', estMinutes: 7, modulePath: 'ch9/ch9-u1-cut.js' },
      { id: 'func-ch9-u2', title: 'לנקות ולחבר: TRIM, &, CONCATENATE', type: 'lesson', icon: '🧽', estMinutes: 8, modulePath: 'ch9/ch9-u2-clean-join.js' },
      { id: 'func-ch9-u3', title: 'לחפש: FIND ו-SEARCH', type: 'lesson', icon: '🔍', estMinutes: 8, modulePath: 'ch9/ch9-u3-find.js' },
      { id: 'func-ch9-u4', title: 'מספר שהוא בעצם טקסט', type: 'lesson', icon: '🕵️', estMinutes: 7, modulePath: 'ch9/ch9-u4-text-numbers.js' },
      { id: 'func-ch9-quiz', title: 'מבחן פרק: טקסט וטיוב', type: 'quiz', icon: '🏁', estMinutes: 6, modulePath: 'ch9/ch9-quiz.js' },
    ],
  },
  {
    id: 'func-ch10', number: 10, title: 'איזו פונקציה?', icon: '🧭', colorVar: 'chapter-10', unordered: true,
    units: [
      { id: 'func-ch10-u1', title: 'מפת ההחלטה', type: 'lesson', icon: '🧭', estMinutes: 11, modulePath: 'ch10/ch10-u1-decision-map.js' },
      { id: 'func-ch10-u2', title: 'משימה: אופניים להשכרה', type: 'lesson', icon: '🚲', estMinutes: 13, modulePath: 'ch10/ch10-u2-mission.js' },
      { id: 'func-ch10-quiz', title: 'מבחן מסכם', type: 'quiz', icon: '🏆', estMinutes: 10, modulePath: 'ch10/ch10-final.js' },
    ],
  },
];

// ===== עזרי מניפסט =====
// לוגיקה גנרית שלא תלויה בקורס. המנוע מייבא את הפונקציות האלה מהמניפסט,
// ולכן הן חייבות להיות מיוצאות מכאן בכל לומדה. new-course.mjs מוסיף אותן
// אוטומטית — אין צורך לכתוב או לערוך אותן ביד.

export function getFlatUnits() {
  const flat = [];
  CHAPTERS.forEach(ch => {
    ch.units.forEach(u => {
      flat.push({ ...u, chapterId: ch.id, chapterNumber: ch.number, chapterTitle: ch.title, colorVar: ch.colorVar });
    });
  });
  return flat;
}

export function findUnit(unitId) {
  return getFlatUnits().find(u => u.id === unitId) || null;
}

export function findChapter(chapterId) {
  return CHAPTERS.find(ch => ch.id === chapterId) || null;
}

// היחידה שבאה מיד אחרי unitId ברצף הכולל (לא לפי שם, לפי הסדר במניפסט) —
// null אם זו היחידה האחרונה בקורס (המבחן המסכם).
export function getNextUnit(unitId) {
  const flat = getFlatUnits();
  const idx = flat.findIndex(u => u.id === unitId);
  if (idx === -1 || idx === flat.length - 1) return null;
  return flat[idx + 1];
}

// הפרק שבא מיד אחרי chapterId — null אם זה הפרק האחרון.
export function getNextChapter(chapterId) {
  const idx = CHAPTERS.findIndex(ch => ch.id === chapterId);
  if (idx === -1 || idx === CHAPTERS.length - 1) return null;
  return CHAPTERS[idx + 1];
}
