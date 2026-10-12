// ===== רישום הבלוקים הייחודיים ללומדת ארגז הכלים =====
// המנוע מייבא את הקובץ הזה תמיד, פעם אחת לפני הניתוב הראשון. אל תמחקי אותו.
// צבעים של הקורס — טוקנים על :root ב-func.css, לא inline.

import { registerBlockRenderer } from '../../js/engine/blocks.js';

import { renderSheet } from './sheet.js';
import { renderFnCard } from './fn-card.js';
import { renderSteps } from './steps.js';
import { renderShot } from './shot.js';

registerBlockRenderer('sheet', renderSheet);
registerBlockRenderer('fn-card', renderFnCard);
registerBlockRenderer('steps', renderSteps);
registerBlockRenderer('shot', renderShot);
