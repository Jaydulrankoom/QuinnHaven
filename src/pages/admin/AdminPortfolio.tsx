import { useState, useEffect } from 'react';
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
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kitchen Remodel');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('published');
  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      if (data.success) {
        setProjects(data.items);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, location, status, content: description })
      });
      if (res.ok) {
        setIsEditing(false);
        setTitle('');
        setDescription('');
        setLocation('');
        fetchProjects();
      } else {
        alert("Failed to save project.");
      }
    } catch (e) {
      alert("Error saving project");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    try {
      await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
      fetchProjects();
    } catch (e) {
      console.error(e);
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2">Project Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border rounded outline-none focus:border-brand" placeholder="e.g. Modern Farmhouse Kitchen" />
            </div>
            <div>
               <label className="block text-sm font-bold mb-2">Category</label>
               <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 border rounded outline-none focus:border-brand">
                 <option>Kitchen Remodel</option>
                 <option>Bathroom Retreat</option>
                 <option>Custom Cabinetry</option>
                 <option>Multifamily</option>
               </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
             <div>
              <label className="block text-sm font-bold mb-2">Location</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-3 border rounded outline-none focus:border-brand" placeholder="e.g. Wallingford, CT" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Upload Hero Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                 <Upload size={24} className="mb-2" />
                 <span className="text-sm">Click to upload or drag & drop</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
             <label className="block text-sm font-bold mb-2">Project Case Study / Gallery</label>
             <div className="h-64 mb-12">
               <ReactQuill theme="snow" modules={quillModules} className="h-full" value={description} onChange={setDescription} />
             </div>
          </div>

          <div className="flex justify-end gap-4 border-t pt-6 mt-16 md:mt-8">
             <button onClick={() => setIsEditing(false)} className="px-6 py-2 border rounded font-medium hover:bg-gray-50 transition-colors">Cancel</button>
             <button onClick={handleSave} className="px-6 py-2 bg-brand text-white rounded font-medium hover:bg-charcoal transition-colors">Save Project</button>
          </div>
        </div>
      ) : (
        <div className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Project Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project: any) => (
                <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium text-charcoal">{project.title}</td>
                  <td className="p-4 text-gray-500">{project.category}</td>
                  <td className="p-4 text-gray-500">{project.location}</td>
                  <td className="p-4">
                     <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium capitalize">
                       {project.status || 'published'}
                     </span>
                  </td>
                  <td className="p-4 flex justify-end gap-3 text-gray-400">
                    <button className="hover:text-brand transition-colors"><Edit size={18} /></button>
                    <button onClick={() => handleDelete(project.id)} className="hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">No projects found. Add one above.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
