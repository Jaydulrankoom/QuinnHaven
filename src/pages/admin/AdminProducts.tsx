import { useState } from 'react';
import { Plus, Edit, Trash2, Tag, DollarSign, Package, Upload } from 'lucide-react';
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

export default function AdminProducts() {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');
  
  const mockProducts = [
    { id: 1, name: 'Calacatta Gold Marble Island', price: '$8,500', category: 'Countertops', stock: 'In Stock' },
    { id: 2, name: 'Matte Black Rainfall Fixtures', price: '$1,200', category: 'Fixtures', stock: 'Low Stock' },
    { id: 3, name: 'Custom Oak Cabinetry Unit', price: '$12,000', category: 'Cabinets', stock: 'Made to Order' },
  ];

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-6xl mx-auto">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-xl font-serif font-bold text-charcoal">Products Inventory</h2>
        <button 
          onClick={() => setIsEditing(true)}
          className="bg-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-charcoal transition-colors shadow-sm"
        >
          <Plus size={16} /> Add New Product
        </button>
      </div>
      
      {isEditing ? (
        <div className="p-8">
          <h3 className="font-bold text-xl mb-6">Create / Edit Product</h3>
          <div className="space-y-6 max-w-3xl">
            <div className="grid grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Product Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="e.g. Copper Sink Basin" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Price</label>
                  <div className="relative">
                     <span className="absolute left-3 top-3 text-gray-500"><DollarSign size={18} /></span>
                     <input type="text" className="w-full pl-10 p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="0.00" />
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                  <select className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none bg-white">
                     <option>Cabinets</option>
                     <option>Countertops</option>
                     <option>Fixtures</option>
                     <option>Lighting</option>
                     <option>Tile & Flooring</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Inventory Status</label>
                  <select className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none bg-white">
                     <option>In Stock</option>
                     <option>Low Stock</option>
                     <option>Out of Stock</option>
                     <option>Made to Order</option>
                  </select>
               </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Product Images</label>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal px-4 py-3 rounded cursor-pointer border border-gray-300 transition-colors shrink-0">
                  <Upload size={18} />
                  <span className="text-sm font-bold">Upload Files</span>
                  <input type="file" className="hidden" accept="image/*" multiple />
                </label>
                <span className="text-gray-400 text-sm font-bold">OR URLs:</span>
                <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-brand outline-none" placeholder="https://image1.jpg, https://image2.jpg" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Product Description & Specs (Classic Editor)</label>
              <div className="bg-white">
                <ReactQuill theme="snow" value={description} onChange={setDescription} modules={quillModules} className="h-48 mb-12" />
              </div>
            </div>
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <button 
                onClick={() => {
                   setIsEditing(false);
                }} 
                className="bg-brand text-white px-8 py-3 rounded font-bold shadow-sm"
              >
                Save Product
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
                <th className="p-4 font-bold">Product Name</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold">Price</th>
                <th className="p-4 font-bold w-32">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((prod) => (
                <tr key={prod.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-bold text-charcoal">{prod.name}</td>
                  <td className="p-4 text-sm text-gray-500 flex items-center gap-1"><Tag size={14} />{prod.category}</td>
                  <td className="p-4">
                     <span className={`px-2 py-1 text-xs rounded-full font-bold inline-flex items-center gap-1 
                        ${prod.stock === 'In Stock' ? 'bg-green-100 text-green-800' : 
                          prod.stock === 'Made to Order' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                        {prod.stock}
                     </span>
                  </td>
                  <td className="p-4 text-sm font-mono text-gray-600">{prod.price}</td>
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
          <div className="p-6 text-center text-sm font-medium text-amber-600 bg-amber-50 border-t border-amber-100">
            Pending MySQL connection: Will allow you to sync this with your live store.
          </div>
        </div>
      )}
    </div>
  );
}
