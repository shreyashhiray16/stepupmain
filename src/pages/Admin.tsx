import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, LogOut, Search, Save, Trash2 } from 'lucide-react';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../data/seo';
import {
  deleteQuery,
  getChangeLog,
  getEditableServicePillars,
  getQueries,
  saveServiceEdits,
  updateQueryStatus,
  type ContactQuery,
  type ChangeLogEntry,
  type ServiceEdits,
} from '../data/contentStore';

const sessionKey = 'stepup-admin-session';
const adminUsername = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'stepup-admin';

type Tab = 'services' | 'queries' | 'changes';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username !== adminUsername || password !== adminPassword) {
      setError('Incorrect username or password.');
      return;
    }
    sessionStorage.setItem(sessionKey, 'true');
    onLogin();
  };

  return (
    <main className="min-h-screen bg-gray-bg px-4 py-16">
      <div className="mx-auto max-w-md rounded-xl border border-gray-border bg-white p-8 shadow-xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-steel hover:text-primary"><ArrowLeft size={16} /> Back to website</Link>
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">Secure area</p>
        <h1 className="font-heading mt-2 text-4xl font-bold text-dark">Admin login</h1>
        <p className="mt-3 text-sm leading-relaxed text-steel">Manage service content, contact queries, and the activity history.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block text-sm font-semibold text-dark">Username<input value={username} onChange={(event) => setUsername(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-border px-4 py-3 font-normal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10" autoComplete="username" /></label>
          <label className="block text-sm font-semibold text-dark">Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-border px-4 py-3 font-normal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10" autoComplete="current-password" /></label>
          {error && <p className="text-sm text-primary" role="alert">{error}</p>}
          <button type="submit" className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white transition-colors hover:bg-primary-dark">Sign in</button>
        </form>
        <p className="mt-6 border-t border-gray-border pt-4 text-xs leading-relaxed text-steel">This frontend-only admin is suitable for local use. Production access requires server-side authentication and a database.</p>
      </div>
    </main>
  );
}

function ServiceEditor({ onSaved }: { onSaved: () => void }) {
  const services = getEditableServicePillars();
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug ?? '');
  const service = services.find((item) => item.slug === selectedSlug) ?? services[0];
  const [form, setForm] = useState(() => service ? { title: service.title, shortDescription: service.shortDescription, longDescription: service.longDescription, items: service.items.map((item) => ({ id: item.id, title: item.title, description: item.description })) } : null);

  useEffect(() => {
    if (!service) return;
    setForm({ title: service.title, shortDescription: service.shortDescription, longDescription: service.longDescription, items: service.items.map((item) => ({ id: item.id, title: item.title, description: item.description })) });
  }, [selectedSlug]);

  if (!service || !form) return null;

  const updateField = (field: 'title' | 'shortDescription' | 'longDescription', value: string) => setForm({ ...form, [field]: value });
  const updateItem = (id: number, field: 'title' | 'description', value: string) => setForm({ ...form, items: form.items.map((item) => item.id === id ? { ...item, [field]: value } : item) });
  const save = () => {
    const items: ServiceEdits['items'] = {};
    form.items.forEach((item) => { items[item.id] = { title: item.title, description: item.description }; });
    saveServiceEdits(selectedSlug, { title: form.title, shortDescription: form.shortDescription, longDescription: form.longDescription, items });
    onSaved();
  };
  const inputClass = 'mt-2 w-full rounded-lg border border-gray-border bg-white px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10';

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <div className="space-y-2">
        {services.map((item) => <button key={item.slug} type="button" onClick={() => setSelectedSlug(item.slug)} className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${item.slug === selectedSlug ? 'bg-primary text-white' : 'bg-white text-dark hover:bg-primary/10'}`}>{item.title}</button>)}
      </div>
      <div className="rounded-xl border border-gray-border bg-white p-6">
        <div className="mb-6 flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Editing entry</p><h2 className="font-heading mt-1 text-2xl font-bold text-dark">{service.title}</h2></div><button type="button" onClick={save} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"><Save size={16} /> Save changes</button></div>
        <div className="space-y-5">
          <label className="block text-sm font-semibold text-dark">Title<input value={form.title} onChange={(event) => updateField('title', event.target.value)} className={inputClass} /></label>
          <label className="block text-sm font-semibold text-dark">Short description<textarea rows={3} value={form.shortDescription} onChange={(event) => updateField('shortDescription', event.target.value)} className={inputClass} /></label>
          <label className="block text-sm font-semibold text-dark">Full description<textarea rows={5} value={form.longDescription} onChange={(event) => updateField('longDescription', event.target.value)} className={inputClass} /></label>
          <div className="border-t border-gray-border pt-5"><h3 className="font-heading text-lg font-bold text-dark">Included services</h3><div className="mt-4 space-y-4">{form.items.map((item) => <div key={item.id} className="rounded-lg bg-gray-bg p-4"><label className="block text-sm font-semibold text-dark">Service title<input value={item.title} onChange={(event) => updateItem(item.id, 'title', event.target.value)} className={inputClass} /></label><label className="mt-3 block text-sm font-semibold text-dark">Description<textarea rows={3} value={item.description} onChange={(event) => updateItem(item.id, 'description', event.target.value)} className={inputClass} /></label></div>)}</div></div>
        </div>
      </div>
    </div>
  );
}

function QueryList({ queries, refresh }: { queries: ContactQuery[]; refresh: () => void }) {
  const [search, setSearch] = useState('');
  const filtered = queries.filter((query) => `${query.name} ${query.email} ${query.phone} ${query.company} ${query.service} ${query.message}`.toLowerCase().includes(search.toLowerCase()));
  return <div><div className="relative mb-6 max-w-md"><Search size={17} className="absolute left-3 top-3.5 text-steel" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search contact queries" className="w-full rounded-lg border border-gray-border py-3 pl-10 pr-4 text-sm focus:border-primary focus:outline-none" /></div>{filtered.length === 0 ? <div className="rounded-xl border border-dashed border-gray-border bg-white p-10 text-center text-sm text-steel">No contact queries found.</div> : <div className="space-y-4">{filtered.map((query) => <article key={query.id} className="rounded-xl border border-gray-border bg-white p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex items-center gap-2"><h3 className="font-heading text-lg font-bold text-dark">{query.name}</h3><span className={`rounded-full px-2 py-1 text-xs font-semibold ${query.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-700'}`}>{query.status}</span></div><p className="mt-1 text-xs text-steel">{formatDate(query.createdAt)}{query.company ? ` - ${query.company}` : ''}</p></div><div className="flex gap-2"><button type="button" onClick={() => { updateQueryStatus(query.id, query.status === 'new' ? 'handled' : 'new'); refresh(); }} className="inline-flex items-center gap-1 rounded-lg border border-gray-border px-3 py-2 text-xs font-semibold text-dark hover:border-primary hover:text-primary"><Check size={14} /> {query.status === 'new' ? 'Mark handled' : 'Mark new'}</button><button type="button" onClick={() => { deleteQuery(query.id); refresh(); }} aria-label="Delete query" title="Delete query" className="rounded-lg border border-gray-border p-2 text-steel hover:border-primary hover:text-primary"><Trash2 size={16} /></button></div></div><div className="mt-4 grid gap-2 text-sm text-steel md:grid-cols-3"><a href={`tel:${query.phone}`} className="hover:text-primary">{query.phone}</a>{query.email && <a href={`mailto:${query.email}`} className="break-all hover:text-primary">{query.email}</a>}<span>{query.service || 'Service not specified'}</span></div><p className="mt-4 border-t border-gray-border pt-4 text-sm leading-relaxed text-dark">{query.message}</p></article>)}</div>}</div>;
}

function Changes({ changes }: { changes: ChangeLogEntry[] }) {
  return changes.length === 0 ? <div className="rounded-xl border border-dashed border-gray-border bg-white p-10 text-center text-sm text-steel">No changes recorded yet.</div> : <div className="overflow-hidden rounded-xl border border-gray-border bg-white">{changes.map((change) => <div key={change.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-border p-4 last:border-0"><div><p className="text-sm font-semibold text-dark">{change.action}</p><p className="text-sm text-steel">{change.entry}</p></div><time className="text-xs text-steel">{formatDate(change.createdAt)}</time></div>)}</div>;
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem(sessionKey) === 'true');
  const [tab, setTab] = useState<Tab>('services');
  const [queries, setQueries] = useState(getQueries());
  const [changes, setChanges] = useState(getChangeLog());
  const refresh = () => { setQueries(getQueries()); setChanges(getChangeLog()); };

  if (!authenticated) return <><SEO seo={PAGE_SEO.admin} /><Login onLogin={() => setAuthenticated(true)} /></>;

  return <><SEO seo={PAGE_SEO.admin} /><main className="min-h-screen bg-gray-bg pb-20"><header className="border-b border-gray-border bg-white"><div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-5 lg:px-8"><div><Link to="/" className="inline-flex items-center gap-2 text-sm text-steel hover:text-primary"><ArrowLeft size={16} /> Website</Link><h1 className="font-heading mt-2 text-3xl font-bold text-dark">Admin workspace</h1></div><button type="button" onClick={() => { sessionStorage.removeItem(sessionKey); setAuthenticated(false); }} className="inline-flex items-center gap-2 rounded-lg border border-gray-border px-3 py-2 text-sm font-semibold text-dark hover:border-primary hover:text-primary"><LogOut size={16} /> Sign out</button></div></header><div className="mx-auto max-w-[1280px] px-4 pt-8 lg:px-8"><div className="mb-8 flex flex-wrap gap-2">{(['services', 'queries', 'changes'] as Tab[]).map((item) => <button key={item} type="button" onClick={() => setTab(item)} className={`rounded-lg px-4 py-2.5 text-sm font-semibold capitalize ${tab === item ? 'bg-primary text-white' : 'bg-white text-dark hover:bg-primary/10'}`}>{item}</button>)}</div>{tab === 'services' && <ServiceEditor onSaved={refresh} />}{tab === 'queries' && <QueryList queries={queries} refresh={refresh} />}{tab === 'changes' && <Changes changes={changes} />}</div></main></>;
}
