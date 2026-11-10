import { PdfSource } from './pages.mjs';
import { documentId } from './reader-state.mjs';

export async function loadFeaturedBook() {
  const response = await fetch(new URL('../assets/books/skill-la-gi-tron-bo.pdf', import.meta.url));
  if (!response.ok) throw new Error('Featured book unavailable');
  const data = new Uint8Array(await response.arrayBuffer());
  const id = await documentId(data);
  const source = await PdfSource.from(data, 'Skill là gì?.pdf');
  source.id = id;
  source.featured = true;
  source.author = 'Minh Đỗ';
  return source;
}
