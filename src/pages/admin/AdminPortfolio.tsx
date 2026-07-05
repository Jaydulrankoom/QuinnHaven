import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Upload, X } from "lucide-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

export default function AdminPortfolio() {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kitchen Remodel");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("published");
  const [editId, setEditId] = useState("");
  const [gallery, setGallery] = useState<string[]>([]);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(items as any);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSave = async () => {
    try {
      const projectData = {
        title,
        category,
        location,
        status,
        content: description,
        gallery,
      };
      if (editId) {
        await updateDoc(doc(db, "portfolio", editId), projectData);
      } else {
        await addDoc(collection(db, "portfolio"), projectData);
      }
      setIsEditing(false);
      setTitle("");
      setDescription("");
      setLocation("");
      setGallery([]);
      setEditId("");
      fetchProjects();
    } catch (e) {
      alert("Error saving project");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, "portfolio", id));
      fetchProjects();
    } catch (e) {
      console.error(e);
    }
  };

  const startEdit = (project: any) => {
    setTitle(project.title);
    setCategory(project.category);
    setLocation(project.location || "");
    setStatus(project.status || "published");
    setDescription(project.content || "");
    setGallery(project.gallery || []);
    setEditId(project.id);
    setIsEditing(true);
  };

  return (
    <div className="bg-white rounded shadow-sm border border-gray-100 max-w-6xl mx-auto">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-xl font-serif font-bold text-charcoal">
          Portfolio Projects
        </h2>
        <button
          onClick={() => {
            setIsEditing(true);
            setEditId("");
            setTitle("");
            setDescription("");
            setLocation("");
            setGallery([]);
          }}
          className="bg-brand text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 hover:bg-charcoal transition-colors shadow-sm"
        >
          <Plus size={16} /> Add New Project
        </button>
      </div>

      {isEditing ? (
        <div className="p-8">
          <h3 className="font-bold text-xl mb-6">
            {editId ? "Edit" : "Create"} Project
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                Project Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border rounded outline-none focus:border-brand"
                placeholder="e.g. Modern Farmhouse Kitchen"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border rounded outline-none focus:border-brand"
              >
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
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 border rounded outline-none focus:border-brand"
                placeholder="e.g. Wallingford, CT"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Upload Gallery Images
              </label>
              <label className="border-2 border-dashed border-gray-300 rounded p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors relative">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={async (e) => {
                    const files = Array.from(e.target.files || []);
                    const processImage = (file: File): Promise<string> => {
                      return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = (event) => {
                          const img = new Image();
                          img.src = event.target?.result as string;
                          img.onload = () => {
                            const canvas = document.createElement("canvas");
                            const MAX_WIDTH = 1200;
                            const MAX_HEIGHT = 1200;
                            let width = img.width;
                            let height = img.height;
                            if (width > height) {
                              if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                              }
                            } else {
                              if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                              }
                            }
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext("2d");
                            if (ctx) {
                              ctx.drawImage(img, 0, 0, width, height);
                              resolve(canvas.toDataURL("image/jpeg", 0.7));
                            } else {
                              reject(new Error("Canvas context missing"));
                            }
                          };
                          img.onerror = reject;
                        };
                        reader.onerror = reject;
                      });
                    };
                    try {
                      const processed = await Promise.all(files.map(processImage));
                      setGallery((prev) => [...prev, ...processed]);
                    } catch (err) {
                      console.error(err);
                      alert("Failed to process images");
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload size={24} className="mb-2" />
                <span className="text-sm">Click to select multiple photos</span>
              </label>
            </div>
          </div>

          {gallery.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">
                Gallery Preview
              </label>
              <div className="flex flex-wrap gap-4">
                {gallery.map((imgUrl, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={imgUrl}
                      alt={`Uploaded ${idx}`}
                      className="h-24 w-24 object-cover rounded shadow-sm border border-gray-200"
                    />
                    <button
                      onClick={() => setGallery(gallery.filter((_, i) => i !== idx))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">
              Project Case Study
            </label>
            <div className="h-64 mb-12">
              <ReactQuill
                theme="snow"
                modules={quillModules}
                className="h-full"
                value={description}
                onChange={setDescription}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 border-t pt-6 mt-16 md:mt-8">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 border rounded font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-brand text-white rounded font-medium hover:bg-charcoal transition-colors"
            >
              Save Project
            </button>
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
                <tr
                  key={project.id}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-4 font-medium text-charcoal">
                    {project.title}
                  </td>
                  <td className="p-4 text-gray-500">{project.category}</td>
                  <td className="p-4 text-gray-500">{project.location}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium capitalize">
                      {project.status || "published"}
                    </span>
                  </td>
                  <td className="p-4 flex justify-end gap-3 text-gray-400">
                    <button
                      onClick={() => startEdit(project)}
                      className="hover:text-brand transition-colors"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No projects found. Add one above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
