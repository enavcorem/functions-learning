// ===== רישום הבלוקים הייחודיים ללומדת ארגז הכלים =====
// המנוע מייבא את הקובץ הזה תמיד, פעם אחת לפני הניתוב הראשון. אל תמחקי אותו.
// צבעים של הקורס — טוקנים על :root ב-func.css, לא inline.

import { registerBlockRenderer } from '../../js/engine/blocks.js';

import { renderSheet } from './sheet.js';
import { renderFnCard } from './fn-card.js';
import { renderSteps } from './steps.js';
import { renderShot } from './shot.js';
import { enlargeOperators } from './operators.js';

registerBlockRenderer('sheet', renderSheet);
registerBlockRenderer('fn-card', renderFnCard);
registerBlockRenderer('steps', renderSteps);
registerBlockRenderer('shot', renderShot);

// רק בדפדפן (validate-content טוען את הקובץ הזה גם ב-Node)
if (typeof document !== 'undefined') enlargeOperators();
