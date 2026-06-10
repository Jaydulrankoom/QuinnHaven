import { useState } from 'react';
import { Plus, Edit, Trash2, Upload } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

export default function AdminPortfolio() {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');
  
  const mockProjects = [
    { id: 1, title: 'Wallingford Master Bath', category: 'Bathroom Retreat', location: 'Wallingford, CT' },
    { id: 2, title: 'The Avon Culinary Estate', category: 'Kitchen Remodel', location: 'Avon, CT' },
    { id: 3, title: 'Modern Farmhouse Kitchen', category: 'Custom Cabinetry', location: 'Cheshire, CT' },
  ];

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-6xl mx-auto">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-xl font-serif font-bold text-charcoal">Portfolio Projects</h2>
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-charcoal transition-colors shadow-sm"
        >
          <Plus size={16} /> Add New Project
        </button>
      </div>
      
      {isEditing ? (
        <div className="p-8">
          <h3 className="font-bold text-xl mb-6">Create / Edit Project</h3>
          <div className="space-y-6 max-w-3xl">
            <div className="grid grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Title</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="e.g. Modern Minimalist Kitchen" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                  <select className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none bg-white">
                     <option>Kitchen Remodel</option>
                     <option>Bathroom Retreat</option>
                     <option>Custom Cabinetry</option>
                     <option>Full Home</option>
                  </select>
               </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="e.g. Wallingford, CT" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Feature Image</label>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal px-4 py-3 rounded cursor-pointer border border-gray-300 transition-colors shrink-0">
                  <Upload size={18} />
                  <span className="text-sm font-bold">Upload File</span>
                  <input type="file" className="hidden" accept="image/*,video/*" />
                </label>
                <span className="text-gray-400 text-sm font-bold">OR URL:</span>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="https://..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Project Description (Classic Editor)</label>
              <div className="bg-white">
                <ReactQuill theme="snow" value={description} onChange={setDescription} modules={quillModules} className="h-48 mb-12" />
              </div>
            </div>
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <button 
                onClick={() => {
                   alert("Saving to MySQL database pending Hostinger integration.");
                   setIsEditing(false);
                }} 
                className="bg-brand text-white px-8 py-3 rounded font-bold shadow-sm"
              >
                Save Project
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-200 text-charcoal px-8 py-3 rounded font-bold">Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                <th className="p-4 font-bold">Project Title</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Location</th>
                <th className="p-4 font-bold w-32">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProjects.map((proj) => (
                <tr key={proj.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-bold text-charcoal">{proj.title}</td>
                  <td className="p-4 text-sm text-gray-500">{proj.category}</td>
                  <td className="p-4 text-sm text-gray-500">{proj.location}</td>
                  <td className="p-4 flex gap-2">
                    <button className="p-2 text-brand hover:bg-brand/10 rounded transition-colors" onClick={() => setIsEditing(true)}>
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
