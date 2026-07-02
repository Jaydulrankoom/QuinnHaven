import { useState } from 'react';
import { Save, Upload } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    ['link'],
    ['clean']
  ],
};

export default function AdminGlobals() {
  const [footerText, setFooterText] = useState('© 2026 QuinnHaven Design. All rights reserved. Luxury Coastal Kitchens & Bathrooms.');
  const [headerAnnouncement, setHeaderAnnouncement] = useState('Visit our new Wallingford showroom today! Open Mon-Sat.');

  const saveSettings = () => {
    // alert("Saving Global Header & Footer settings to MySQL database.");
  };

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-6xl mx-auto">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div>
          <h2 className="text-xl font-serif font-bold text-charcoal">Global Settings (Header & Footer)</h2>
          <p className="text-sm text-gray-500 mt-1">Manage logo, contact details, and global sections.</p>
        </div>
        <button 
          onClick={saveSettings}
          className="bg-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-charcoal transition-colors shadow-sm"
        >
          <Save size={16} /> Save Global Settings
        </button>
      </div>

      <div className="p-8 space-y-8">
        
        {/* Header Settings */}
        <section className="space-y-4">
          <h3 className="font-bold text-lg text-gray-800 border-b border-gray-200 pb-2">Header Configuration</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Site Logo</label>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal px-4 py-3 rounded cursor-pointer border border-gray-300 transition-colors shrink-0">
                <Upload size={18} />
                <span className="text-sm font-bold">Upload Logo</span>
                <input type="file" className="hidden" accept="image/*" />
              </label>
              <span className="text-gray-400 text-sm font-bold">OR URL:</span>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="/logo.svg" defaultValue="/logo.svg" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Recommended size: 200px x 60px transparent PNG or SVG.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Top Announcement Bar Text</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" 
              value={headerAnnouncement}
              onChange={(e) => setHeaderAnnouncement(e.target.value)}
            />
          </div>
        </section>

        {/* Contact info for Header/Footer */}
        <section className="space-y-4">
          <h3 className="font-bold text-lg text-gray-800 border-b border-gray-200 pb-2">Global Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" defaultValue="+1 (555) 123-4567" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" defaultValue="hello@quinnhaven.com" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Physical Address</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" defaultValue="120 Main Street, Wallingford, CT 06492" />
            </div>
          </div>
        </section>

        {/* Footer Settings */}
        <section className="space-y-6">
          <h3 className="font-bold text-lg text-gray-800 border-b border-gray-200 pb-2">Footer Configuration</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Footer Copyright & Biography Text</label>
            <div className="bg-white">
              <ReactQuill theme="snow" value={footerText} onChange={setFooterText} modules={quillModules} className="h-32 mb-12" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Social Media Links (Facebook, Instagram, Houzz)</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                 <label className="block text-xs font-bold text-gray-500 mb-1">Instagram URL</label>
                 <input type="text" className="w-full p-2 text-sm border border-gray-300 rounded focus:border-brand outline-none" defaultValue="https://instagram.com/quinnhaven" />
              </div>
              <div>
                 <label className="block text-xs font-bold text-gray-500 mb-1">Facebook URL</label>
                 <input type="text" className="w-full p-2 text-sm border border-gray-300 rounded focus:border-brand outline-none" defaultValue="https://facebook.com/quinnhaven" />
              </div>
              <div>
                 <label className="block text-xs font-bold text-gray-500 mb-1">Houzz URL</label>
                 <input type="text" className="w-full p-2 text-sm border border-gray-300 rounded focus:border-brand outline-none" defaultValue="https://houzz.com/pro/quinnhaven" />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-amber-50 p-4 rounded text-sm text-amber-800 border-l-4 border-amber-500">
           <strong>Hostinger Database Sync:</strong> Changes saved here will dynamically update the Header, Navigation Bar, and Footer components across all pages on your live website.
        </div>
      </div>
    </div>
  );
}
