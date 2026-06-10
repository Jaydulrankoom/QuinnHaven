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
          <h2 className="text-2xl font-serif text-charcoal mb-4">CMS Architecture Setup for Hostinger</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Welcome to your dedicated CMS Admin Panel. This secure interface provides the front-end architecture necessary to manage your blogs, portfolio items, and SEO meta tags directly.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-6 rounded-r">
              <h4 className="font-bold text-amber-800 text-lg mb-3">Hostinger MySQL Integration Pending</h4>
              <p className="text-amber-900/80 mb-4">To complete the integration so you can save data permanently, follow these steps later:</p>
              <ol className="list-decimal ml-5 space-y-3 text-amber-900/80">
                <li><strong>Create the MySQL Database</strong> in your Hostinger hPanel.</li>
                <li><strong>Provide Database Credentials</strong> (Host, User, Password, DB Name) once created.</li>
                <li><strong>We will configure the backend server (`server.ts`)</strong> to establish a connection pool to your MySQL instance.</li>
                <li><strong>API bridging:</strong> This React CMS will send `POST/PUT` requests to the Node backend, which will execute `INSERT/UPDATE` SQL commands into your Hostinger database, providing a full robust CMS experience.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
