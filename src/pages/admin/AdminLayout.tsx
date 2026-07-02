import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Image, Settings, LogOut, FileCode, ShoppingBag, Menu as MenuIcon } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('/api/auth/check')
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(data.loggedIn);
      })
      .catch(() => setIsAuthenticated(false));
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      navigate('/admin/login');
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Products', path: '/admin/products', icon: <ShoppingBag size={20} /> },
    { name: 'Blog Posts', path: '/admin/blog', icon: <FileText size={20} /> },
    { name: 'Portfolio', path: '/admin/portfolio', icon: <Image size={20} /> },
    { name: 'Page Content', path: '/admin/pages', icon: <FileCode size={20} /> },
    { name: 'Navigation Menu', path: '/admin/menu', icon: <MenuIcon size={20} /> },
    { name: 'Header & Footer', path: '/admin/globals', icon: <Settings size={20} /> },
    { name: 'Database & Auth', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-serif font-bold">QH Admin CMS</h2>
          <p className="text-sm text-gray-400 mt-1">Ready for MySQL</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${
                  isActive ? 'bg-brand text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-white/10 space-y-2">
           <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-sm transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-sm transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Exit to Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shrink-0">
          <h1 className="text-2xl font-serif text-charcoal">
            {navItems.find(item => item.path === location.pathname)?.name || 'Admin Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm text-gray-500">
               CMS Mode: <span className="text-brand font-bold border border-brand px-2 py-1 rounded bg-cream">Live</span>
            </div>
            <div className="h-10 w-10 bg-brand text-white rounded-full flex items-center justify-center font-bold shadow-sm">
              AD
            </div>
          </div>
        </header>
        <div className="p-8 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
