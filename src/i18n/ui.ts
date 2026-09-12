// src/i18n/ui.ts

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.stacks': '⚡ Explorar Homelab Stacks Docker',
    'header.title': 'Directorio Open-Source Self-Hosted',
    'header.subtitle': 'Alternativas privadas y gratuitas a herramientas de pago, analizadas localmente por IA.',
    'search.placeholder': 'Buscar por herramienta, alternativa o tecnología (ej. Photos, Notion, n8n)...',
    'search.all': 'Todas',
    'counter.showing': 'Mostrando',
    'counter.of': 'de',
    'counter.tools': 'herramientas',
    'counter.page': 'Página',
    'card.replaces': 'Sustituye a:',
    'card.view': 'Ver análisis',
    'card.no_results': '🔍 No se encontraron herramientas que coincidan con tu búsqueda.',
    'pagination.prev': '←',
    'pagination.next': '→',
    'footer.about': 'Sobre el proyecto',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.rights': '© 2026 SelfHostDeck. Directorio libre de alternativas Open-Source.',
  },
  en: {
    'nav.stacks': '⚡ Explore Homelab Docker Stacks',
    'header.title': 'Self-Hosted Open-Source Directory',
    'header.subtitle': 'Privacy-first and free alternatives to commercial SaaS, analyzed locally with AI.',
    'search.placeholder': 'Search by tool, SaaS alternative, or tag (e.g. Photos, Notion, n8n)...',
    'search.all': 'All',
    'counter.showing': 'Showing',
    'counter.of': 'of',
    'counter.tools': 'tools',
    'counter.page': 'Page',
    'card.replaces': 'Alternative to:',
    'card.view': 'View analysis',
    'card.no_results': '🔍 No tools found matching your search.',
    'pagination.prev': '←',
    'pagination.next': '→',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.legal': 'Legal Notice',
    'footer.rights': '© 2026 SelfHostDeck. Open-source directory for self-hosted apps.',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}