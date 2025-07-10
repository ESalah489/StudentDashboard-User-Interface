import { useEffect, useState } from "react";
import {
  createAnnouncement,
  updateAnnouncement,
} from "../../api/announcements";
import DefultButton from "../../components/buttons/DefultButton";

const AnnouncementForm = ({ onSuccess, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    isActive: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanData = {};
    if (formData.title.trim()) cleanData.title = formData.title.trim();
    if (formData.content.trim()) cleanData.content = formData.content.trim();
    cleanData.isActive = formData.isActive;

    try {
      if (initialData?._id) {
        await updateAnnouncement(initialData._id, cleanData);
      } else {
        await createAnnouncement(cleanData);
      }

      setFormData({ title: "", content: "", isActive: true });
      onSuccess();
    } catch (error) {
      console.error("Error saving announcement:", error);
    }
  };

  return (
    <div className="mb-4 p-4 bg-gray-50 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="mb-4 w-full flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mb-3 w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="mb-3 w-full p-2 border border-gray-300 rounded"
        />
        <label className="pt-3">
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) =>
              setFormData({ ...formData, isActive: e.target.checked })
            }
          />
          {"  "} Active
        </label>
        <div className="w-1/2">
          <DefultButton
            name={initialData ? "Update" : "Add New announcement"}
          />
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;
