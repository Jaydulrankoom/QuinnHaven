import { useState } from 'react';
import { Save, GripVertical, Plus, Trash2 } from 'lucide-react';

export default function AdminMenu() {
  const [links, setLinks] = useState([
    { id: 1, label: 'Home', url: '/' },
    { id: 2, label: 'About Us', url: '/about' },
    { id: 3, label: 'Services', url: '/services' },
    { id: 4, label: 'Portfolio', url: '/portfolio' },
    { id: 5, label: 'Showroom', url: '/showroom' },
    { id: 6, label: 'Products', url: '/products' },
  ]);

  const addLink = () => {
    setLinks([...links, { id: Date.now(), label: 'New Link', url: '/new-page' }]);
  };

  const removeLink = (id: number) => {
    setLinks(links.filter(l => l.id !== id));
  };

  const saveMenu = () => {
     // alert("Saving menu order and links to MySQL database pending Hostinger integration.");
  };

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div>
           <h2 className="text-xl font-serif font-bold text-charcoal">Navigation Menu</h2>
           <p className="text-sm text-gray-500 mt-1">Manage links shown in your website header and footer.</p>
        </div>
        <button 
          onClick={saveMenu}
          className="bg-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-charcoal transition-colors shadow-sm"
        >
          <Save size={16} /> Save Menu Layout
        </button>
      </div>

      <div className="p-8">
         <div className="space-y-3 mb-6 relative">
            {links.map((link) => (
               <div key={link.id} className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 rounded group hover:border-brand/30 transition-colors">
                  <div className="cursor-move text-gray-400 hover:text-charcoal p-1">
                     <GripVertical size={20} />
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                     <div>
                        <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Link Label</label>
                        <input type="text" defaultValue={link.label} className="w-full p-2 text-sm border border-gray-300 rounded focus:border-brand outline-none" />
                     </div>
                     <div>
                        <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">URL / Path</label>
                        <input type="text" defaultValue={link.url} className="w-full p-2 text-sm border border-gray-300 rounded focus:border-brand outline-none font-mono" />
                     </div>
                  </div>
                  <button onClick={() => removeLink(link.id)} className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded ml-2 transition-colors">
                     <Trash2 size={18} />
                  </button>
               </div>
            ))}
         </div>

         <button onClick={addLink} className="border-2 border-dashed border-gray-300 w-full py-4 rounded text-gray-500 font-bold hover:bg-gray-50 hover:text-brand hover:border-brand/30 transition-all flex items-center justify-center gap-2">
            <Plus size={18} /> Add New Navigation Item
         </button>
         
         <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 text-sm text-amber-800">
            <strong>Note on Customization:</strong> In the final MySQL integration, this structure will dictate your main navigation dynamically. Changes here will immediately reflect on the user-facing site.
         </div>
      </div>
    </div>
  );
}
