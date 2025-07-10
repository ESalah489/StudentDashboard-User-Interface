import React, { useState, useEffect } from "react";
import { createQuizzes, updateQuizzes } from "../../api/quizzes";
import DefultButton from "../../components/buttons/DefultButton";

const QuizForm = ({ onSuccess, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    discription: "",
    date: "",
    duration: "",
    totalMarks: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanData = {};
    if (formData.name.trim()) cleanData.name = formData.name.trim();
    if (formData.subject.trim()) cleanData.subject = formData.subject.trim();
    if (formData.discription.trim())
      cleanData.discription = formData.discription.trim();
    if (formData.date) cleanData.date = formData.date;
    if (formData.duration) cleanData.duration = formData.duration;
    if (formData.totalMarks) cleanData.totalMarks = formData.totalMarks;

    try {
      if (initialData?._id) {
        await updateQuizzes(initialData._id, cleanData);
      } else {
        await createQuizzes(cleanData);
      }

      setFormData({
        name: "",
        subject: "",
        discription: "",
        date: "",
        duration: "",
        totalMarks: "",
      });

      onSuccess && onSuccess();
    } catch (err) {
      console.error("Failed to save quiz:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 bg-gray-50 rounded-lg shadow-md"
    >
      <input
        name="name"
        placeholder="Quiz Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mb-3 w-full p-2 border border-gray-300 rounded"
      />
      <input
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="mb-3 w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        name="discription"
        placeholder="Description"
        value={formData.discription}
        onChange={handleChange}
        className="mb-3 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="mb-3 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration (minutes)"
        required
        className="mb-3 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="number"
        name="totalMarks"
        value={formData.totalMarks}
        onChange={handleChange}
        placeholder="Total Marks"
        required
        className="mb-3 w-full p-2 border border-gray-300 rounded"
      />

      <DefultButton name={initialData ? "Update Quiz" : "Create New Quiz"} />
    </form>
  );
};

export default QuizForm;
