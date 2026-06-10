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

export default function AdminBlog() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');
  
  // Mock data representing what will come from MySQL
  const mockPosts = [
    { id: 1, title: 'Top Kitchen Trends for 2026', date: 'Oct 12, 2026', author: 'QuinnHaven', status: 'Published' },
    { id: 2, title: 'Choosing the Right Marble', date: 'Sep 28, 2026', author: 'QuinnHaven', status: 'Draft' },
  ];

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-6xl mx-auto">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-xl font-serif font-bold text-charcoal">Blog Posts</h2>
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-charcoal transition-colors shadow-sm"
        >
          <Plus size={16} /> Add New Post
        </button>
      </div>
      
      {isEditing ? (
        <div className="p-8">
          <h3 className="font-bold text-xl mb-6">Create / Edit Post</h3>
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Title</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="Enter post title" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">URL Slug</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="e.g. top-kitchen-trends-2026" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">SEO Description / Excerpt</label>
              <textarea className="w-full p-3 border border-gray-300 rounded focus:border-brand focus:ring-1 focus:ring-brand outline-none" rows={2} placeholder="Brief summary for SEO meta tags and blog listing..." />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image / Featured Media</label>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal px-4 py-3 rounded cursor-pointer border border-gray-300 transition-colors shrink-0">
                  <Upload size={18} />
                  <span className="text-sm font-bold">Upload File</span>
                  <input type="file" className="hidden" accept="image/*,video/*" />
                </label>
                <span className="text-gray-400 text-sm font-bold">OR URL:</span>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="https://images.unsplash.com/..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Content (Classic Editor)</label>
              <div className="bg-white">
                <ReactQuill theme="snow" value={content} onChange={setContent} modules={quillModules} className="h-96 mb-12" />
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
                Save Publish
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
                <th className="p-4 font-bold">Title</th>
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold w-32">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockPosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-bold text-charcoal">{post.title}</td>
                  <td className="p-4 text-sm text-gray-500">{post.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-bold ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button className="p-2 text-brand hover:bg-brand/10 rounded transition-colors" onClick={() => setIsEditing(true)} title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 text-center text-sm font-medium text-amber-600 bg-amber-50 border-t border-amber-100">
            Pending MySQL connection: Will query <code>SELECT * FROM blog_posts ORDER BY created_at DESC</code> once Hostinger DB is active.
          </div>
        </div>
      )}
    </div>
  );
}
