import { Database, Server, KeyRound, CheckCircle } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-serif text-charcoal mb-6 border-b border-gray-100 pb-4">Hostinger Integration Settings</h2>
        
        <div className="grid gap-8">
           {/* Section 1 */}
           <div className="flex gap-4">
              <div className="mt-1"><Server className="text-brand" /></div>
              <div>
                 <h3 className="font-bold text-lg text-charcoal mb-2">1. Web Host Setup</h3>
                 <p className="text-gray-600 text-sm mb-4">Your application is built using Vite and Node.js. On Hostinger, you will need to host the compiled frontend build files (the `dist` folder generated via `npm run build`) in your public_html, and run the backend node application setting proxy pass.</p>
              </div>
           </div>

           {/* Section 2 */}
           <div className="flex gap-4">
              <div className="mt-1"><Database className="text-amber-500" /></div>
              <div className="w-full">
                 <h3 className="font-bold text-lg text-charcoal mb-2">2. MySQL Database Credentials</h3>
                 <p className="text-gray-600 text-sm mb-4">You will need to input these into your Hostinger `.env` file once the database is created, so the Node.js backend can connect to it. Do not hardcode them here.</p>
                 
                 <div className="bg-gray-50 border border-gray-200 rounded p-4 space-y-3 font-mono text-sm max-w-lg">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="font-bold text-gray-600">DB_HOST</span>
                       <span className="text-gray-800">localhost (or Hostinger IP)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="font-bold text-gray-600">DB_USER</span>
                       <span className="text-amber-600">u123456789_admin</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="font-bold text-gray-600">DB_PASS</span>
                       <span className="text-amber-600">********</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="font-bold text-gray-600">DB_NAME</span>
                       <span className="text-amber-600">u123456789_cms</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Section 3 */}
           <div className="flex gap-4">
              <div className="mt-1"><KeyRound className="text-gray-400" /></div>
              <div>
                 <h3 className="font-bold text-lg text-charcoal mb-2">3. Admin Authentication</h3>
                 <p className="text-gray-600 text-sm mb-4">This Admin CMS is currently accessible directly for development. Before taking the site live, we will add an authentication layer matching your MySQL admin users table to secure these routes.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
