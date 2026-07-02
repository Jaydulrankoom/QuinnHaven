import { FileText, Image, Eye, Database, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const stats = [
    { title: 'Products', value: '45', icon: <ShoppingBag size={24} className="text-brand" />, path: '/admin/products' },
    { title: 'Global Pages', value: '13', icon: <Eye size={24} className="text-brand" />, path: '/admin/pages' },
    { title: 'Blog Posts', value: '12', icon: <FileText size={24} className="text-brand" />, path: '/admin/blog' },
    { title: 'Portfolio Projects', value: '8', icon: <Image size={24} className="text-brand" />, path: '/admin/portfolio' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Link key={idx} to={stat.path} className="bg-white p-6 rounded shadow-sm border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
                <h3 className={`text-3xl font-bold ${stat.value === 'Offline' ? 'text-amber-500' : 'text-charcoal'}`}>{stat.value}</h3>
              </div>
              <div className="p-3 bg-cream rounded-full">
                {stat.icon}
              </div>
            </div>
            <div className="text-sm text-brand font-medium">Manage &rarr;</div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-serif text-charcoal mb-4">Content Management System</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Welcome to the QuinnHaven Design CMS. Manage your portfolio, blogs, pages, and products dynamically.
              All changes made here are instantly reflected on the live website.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6 rounded-r">
              <h4 className="font-bold text-blue-800 text-lg mb-2">System Status: Active</h4>
              <p className="text-blue-900/80 mb-2">The database connection is established and the system is ready.</p>
              <ul className="list-disc ml-5 space-y-1 text-blue-900/80">
                <li>Create and update portfolio case studies.</li>
                <li>Write and publish blog posts.</li>
                <li>Manage product catalog.</li>
                <li>Update SEO metadata dynamically.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
