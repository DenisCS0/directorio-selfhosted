import rss from '@astrojs/rss';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lffmkpexmtjwtvlgvkcj.supabase.co';
const supabaseKey = 'sb_publishable_2GbOzXCVwdEOeZj62jhTPA_cuWUn2Bs';
const supabase = createClient(supabaseUrl, supabaseKey);

function toSlug(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function GET(context) {
  // select('*') garantiza que no falle si alguna columna como slug no existe en la BD
  const { data: herramientas, error } = await supabase
    .from('herramientas')
    .select('*');

  if (error) {
    console.error('Error al consultar Supabase para RSS:', error);
    return new Response(JSON.stringify(error), { status: 500 });
  }

  const items = herramientas || [];

  // Ordenamos por fecha de inserción si existe; si no, por estrellas
  items.sort((a, b) => {
    if (a.created_at && b.created_at) {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
    return (b.estrellas || 0) - (a.estrellas || 0);
  });

  return rss({
    title: 'SelfHostDeck | Alternativas Open-Source & Self-Hosted',
    description: 'Nuevas herramientas y alternativas de código abierto añadidas al catálogo.',
    site: context.site || 'https://selfhostdeck.com',
    items: items.slice(0, 25).map((h) => ({
      title: `${h.nombre} (Alternativa a ${h.saas_alternativa || 'SaaS Comercial'})`,
      pubDate: h.created_at ? new Date(h.created_at) : new Date(),
      description: h.descripcion || '',
      link: `/herramienta/${h.slug || toSlug(h.nombre)}`,
    })),
    customData: `<language>es-ES</language>`,
  });
}