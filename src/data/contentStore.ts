import { servicePillars, type ServicePillar } from './services';

export interface ServiceEdits {
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  items?: Record<number, { title?: string; description?: string }>;
}

export interface ContactQuery {
  id: string;
  createdAt: string;
  status: 'new' | 'handled';
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface ChangeLogEntry {
  id: string;
  createdAt: string;
  action: string;
  entry: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  uploadedAt: string;
}

const editsKey = 'stepup-service-edits';
const queriesKey = 'stepup-contact-queries';
const changesKey = 'stepup-change-log';
const galleryKey = 'stepup-gallery-photos';

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getEditableServicePillars(): ServicePillar[] {
  const edits = read<Record<string, ServiceEdits>>(editsKey, {});
  return servicePillars.map((pillar) => {
    const pillarEdits = edits[pillar.slug];
    if (!pillarEdits) return pillar;

    return {
      ...pillar,
      title: pillarEdits.title ?? pillar.title,
      shortDescription: pillarEdits.shortDescription ?? pillar.shortDescription,
      longDescription: pillarEdits.longDescription ?? pillar.longDescription,
      items: pillar.items.map((item) => ({
        ...item,
        ...pillarEdits.items?.[item.id],
      })),
    };
  });
}

export function saveServiceEdits(slug: string, updates: ServiceEdits) {
  const edits = read<Record<string, ServiceEdits>>(editsKey, {});
  edits[slug] = {
    ...edits[slug],
    ...updates,
    items: { ...edits[slug]?.items, ...updates.items },
  };
  write(editsKey, edits);

  const changes = read<ChangeLogEntry[]>(changesKey, []);
  const service = servicePillars.find((pillar) => pillar.slug === slug);
  changes.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    action: 'Updated service content',
    entry: service?.title ?? slug,
  });
  write(changesKey, changes.slice(0, 50));
  window.dispatchEvent(new Event('stepup-content-updated'));
}

export function getQueries() {
  return read<ContactQuery[]>(queriesKey, []);
}

export function saveQuery(query: Omit<ContactQuery, 'id' | 'createdAt' | 'status'>) {
  const queries = getQueries();
  queries.unshift({
    ...query,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'new',
  });
  write(queriesKey, queries);
}

export function updateQueryStatus(id: string, status: ContactQuery['status']) {
  write(queriesKey, getQueries().map((query) => query.id === id ? { ...query, status } : query));
}

export function deleteQuery(id: string) {
  write(queriesKey, getQueries().filter((query) => query.id !== id));
}

export function getChangeLog() {
  return read<ChangeLogEntry[]>(changesKey, []);
}

export function getGalleryPhotos(): GalleryPhoto[] {
  return read<GalleryPhoto[]>(galleryKey, []);
}

export function addGalleryPhoto(url: string, caption: string) {
  const photos = getGalleryPhotos();
  photos.unshift({
    id: crypto.randomUUID(),
    url,
    caption,
    uploadedAt: new Date().toISOString(),
  });
  write(galleryKey, photos);
  window.dispatchEvent(new Event('stepup-gallery-updated'));
}

export function removeGalleryPhoto(id: string) {
  write(galleryKey, getGalleryPhotos().filter((photo) => photo.id !== id));
  window.dispatchEvent(new Event('stepup-gallery-updated'));
}
