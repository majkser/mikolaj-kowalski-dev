import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background m-auto flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-6">
          ADMIN DASHBOARD
        </h1>
        <p className="text-lg text-center mb-8">
          Manage your website settings and content from this dashboard.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/admin/articles"
            className="block bg-chart-4 text-primary-foreground text-center py-4 rounded-lg shadow-md hover:bg-chart-4/75 transition"
          >
            Manage Articles
          </Link>
          <Link
            href="/admin/projects"
            className="block bg-chart-1 text-primary-foreground text-center py-4 rounded-lg shadow-md hover:bg-chart-1/75 transition"
          >
            Manage Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
