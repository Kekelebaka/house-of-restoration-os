// ============================================
// HOUSE OF RESTORATION - SERVICES INDEX
// Export all service modules
// ============================================

import api from './api';

export * from './api';

// Module 02: WhatsApp Concierge
export * as whatsappService from './whatsappService';
export { default as whatsappService } from './whatsappService';

// Re-export API instance
export { api };
export default api;
