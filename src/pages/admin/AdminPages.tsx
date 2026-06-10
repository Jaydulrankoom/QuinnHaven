import { useState } from 'react';
import { Edit, Save, ImageIcon, AlignLeft, Upload } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

export default function AdminPages() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [pageContent, setPageContent] = useState('');

  const pages = [
    { id: 1, name: 'Home', slug: '/', title: 'QuinnHaven Design | Luxury Kitchen & Bathroom', active: true },
    { id: 2, name: 'About Us', slug: '/about', title: 'About Us | QuinnHaven Design', active: true },
    { id: 3, name: 'Meet Our Designer', slug: '/meet-our-designer', title: 'Meet Our Designer | QuinnHaven Design', active: true },
    { id: 4, name: 'Services Overview', slug: '/services', title: 'Our Services | QuinnHaven Design', active: true },
    { id: 14, name: '└ Kitchen Design', slug: '/services/kitchen-design', title: 'Kitchen Design Services', active: true },
    { id: 15, name: '└ Bathroom Design', slug: '/services/bathroom-design', title: 'Bathroom Design Services', active: true },
    { id: 16, name: '└ Custom Cabinetry', slug: '/services/custom-cabinets', title: 'Custom Kitchen Cabinets', active: true },
    { id: 17, name: '└ Closet Design', slug: '/services/closet-design', title: 'Closet Design', active: true },
    { id: 18, name: '└ Basement Bar', slug: '/services/basement-bar', title: 'Basement Bar', active: true },
    { id: 5, name: 'Products Overview', slug: '/products', title: 'Products | QuinnHaven Design', active: true },
    { id: 6, name: 'Portfolio', slug: '/portfolio', title: 'Portfolio | QuinnHaven Design', active: true },
    { id: 7, name: 'Showroom', slug: '/showroom', title: 'Wallingford Showroom | QuinnHaven Design', active: true },
    { id: 19, name: 'Locations Served', slug: '/locations', title: 'Areas We Serve in Connecticut', active: true },
    { id: 20, name: '└ Wallingford', slug: '/locations/wallingford', title: 'Wallingford Kitchen Design', active: true },
    { id: 21, name: '└ New Haven', slug: '/locations/new-haven', title: 'New Haven Kitchen Design', active: true },
    { id: 22, name: '└ Hartford', slug: '/locations/hartford', title: 'Hartford Kitchen Design', active: true },
    { id: 8, name: 'Blog', slug: '/blog', title: 'Design Insights & Blog | QuinnHaven Design', active: true },
    { id: 23, name: 'Case Studies', slug: '/case-studies', title: 'Case Studies', active: true },
    { id: 9, name: 'Project Management', slug: '/project-management', title: 'Project Management | QuinnHaven Design', active: true },
    { id: 10, name: 'Builder Supply', slug: '/builder-supply', title: 'Builder Supply | QuinnHaven Design', active: true },
    { id: 24, name: 'Multifamily Projects', slug: '/multifamily-projects', title: 'Multifamily Projects', active: true },
    { id: 11, name: 'Process', slug: '/process', title: 'Our Process | QuinnHaven Design', active: true },
    { id: 12, name: 'FAQ', slug: '/faq', title: 'FAQ | QuinnHaven Design', active: true },
    { id: 13, name: 'Contact', slug: '/contact', title: 'Contact Us | QuinnHaven Design', active: true },
  ];

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-6xl mx-auto">
      <div className="p-6 border-b border-gray-100 bg-gray-50/50">
        <h2 className="text-xl font-serif font-bold text-charcoal">Page Content & SEO Management</h2>
        <p className="text-sm text-gray-500 mt-1">Customize text, images, and meta tags for every page dynamically.</p>
      </div>

      <div className="p-6">
         <div className="space-y-6">
            {pages.map((page) => (
               <div key={page.id} className="border border-gray-200 rounded-lg p-6 hover:border-brand/30 transition-colors bg-white shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                     <div>
                        <h3 className="font-bold text-xl text-charcoal flex items-center gap-2">
                           {page.name}
                           <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">{page.slug}</span>
                        </h3>
                     </div>
                     {editingId === page.id ? (
                        <button onClick={() => setEditingId(null)} className="flex items-center gap-2 text-sm bg-brand text-white px-4 py-2 rounded font-bold shadow-sm">
                           <Save size={16} /> Save Active Changes
                        </button>
                     ) : (
                        <button onClick={() => setEditingId(page.id)} className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 text-charcoal px-4 py-2 rounded font-bold">
                           <Edit size={16} /> Customize Page
                        </button>
                     )}
                  </div>

                  {editingId === page.id ? (
                     <div className="space-y-8 bg-gray-50/50 p-6 rounded-md border border-gray-100">
                        {/* SEO Section */}
                        <div className="space-y-4">
                           <h4 className="font-bold text-gray-800 border-b border-gray-200 pb-2">1. SEO & Meta Information</h4>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">SEO Page Title</label>
                              <input type="text" defaultValue={page.title} className="w-full p-3 text-sm border border-gray-300 rounded focus:border-brand outline-none" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Meta Description</label>
                              <textarea rows={2} className="w-full p-3 text-sm border border-gray-300 rounded focus:border-brand outline-none" placeholder="Description for Google Search Results..."></textarea>
                           </div>
                        </div>

                        {/* Visual & Content Section */}
                        <div className="space-y-4">
                           <h4 className="font-bold text-gray-800 border-b border-gray-200 pb-2">2. Page Visuals & Text</h4>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    <ImageIcon size={14} className="text-brand" /> Hero Image URL
                                 </label>
                                 <input type="text" className="w-full p-3 text-sm border border-gray-300 rounded focus:border-brand outline-none" placeholder="https://images.unsplash.com/..." />
                              </div>
                              <div>
                                 <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    <AlignLeft size={14} className="text-brand" /> Hero Headline
                                 </label>
                                 <input type="text" className="w-full p-3 text-sm border border-gray-300 rounded focus:border-brand outline-none" placeholder="Main header text on this page" />
                              </div>
                           </div>

                           <div>
                              <label className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                 <AlignLeft size={14} className="text-brand" /> Primary Body Content (Classic Editor)
                              </label>
                              <div className="bg-white">
                                 <ReactQuill theme="snow" value={pageContent} onChange={setPageContent} modules={quillModules} className="h-64 mb-12" />
                              </div>
                           </div>
                           
                           <div className="bg-amber-50 p-4 rounded text-sm text-amber-800 border-l-4 border-amber-500">
                             <strong>Dynamic Structure:</strong> Once MySQL is linked, these fields will be injected directly into the React components, allowing you to update imagery and text across the entire site instantly without touching code.
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded inline-block">
                        <span className="font-semibold text-gray-800">Current Title:</span> {page.title}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
