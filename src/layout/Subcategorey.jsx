import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Addcategorey.css';

const SubCategory = ({ categories }) => {
  const [subcategories, setSubcategories] = useState({});
  const [editingSubcategory, setEditingSubcategory] = useState(null);

  const formik = useFormik({
    initialValues: {
      selectedCategory: '',
      subcategoryName: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (values.subcategoryName.trim() === '') return;

      setSubcategories((prevSubcategories) => {
        const currentSubcategories = prevSubcategories[values.selectedCategory] || [];
        return {
          ...prevSubcategories,
          [values.selectedCategory]: [
            ...currentSubcategories,
            {
              id: Date.now(),
              name: values.subcategoryName,
            },
          ],
        };
      });

      resetForm();
    },
  });

  const handleEditSubcategory = (categoryId, subcategoryId) => {
    const subcategory = (subcategories[categoryId] || []).find((sub) => sub.id === subcategoryId);
    setEditingSubcategory(subcategory);
  };

  const handleSaveEditSubcategory = (categoryId) => {
    setSubcategories((prevSubcategories) => {
      return {
        ...prevSubcategories,
        [categoryId]: prevSubcategories[categoryId].map((sub) =>
          sub.id === editingSubcategory.id ? editingSubcategory : sub
        ),
      };
    });
    setEditingSubcategory(null);
  };

  const handleDeleteSubcategory = (categoryId, subcategoryId) => {
    setSubcategories((prevSubcategories) => {
      return {
        ...prevSubcategories,
        [categoryId]: prevSubcategories[categoryId].filter((sub) => sub.id !== subcategoryId),
      };
    });
  };

  return (
    <div className="subcategory-container">
      <h1 className="main-heading">Add Sub-Categories</h1>
      <form className="input-container" onSubmit={formik.handleSubmit}>
        <select
          name="selectedCategory"
          onChange={formik.handleChange}
          value={formik.values.selectedCategory}
          className="input-field"
          required
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="subcategoryName"
          placeholder="Add Subcategory"
          onChange={formik.handleChange}
          value={formik.values.subcategoryName}
          className="input-field"
          required
        />
        <button type="submit" className="add-button">
          Add Subcategory
        </button>
      </form>
      <div className="table-container">
        {categories.map((category) => (
          <div key={category.id} className="category-section">
            <h2 className="category-heading">{category.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Subcategory Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {(subcategories[category.id] || []).map((subcategory) => (
                  <tr key={subcategory.id}>
                    <td>{subcategory.id}</td>
                    <td>
                      {editingSubcategory && editingSubcategory.id === subcategory.id ? (
                        <input
                          type="text"
                          value={editingSubcategory.name}
                          onChange={(e) =>
                            setEditingSubcategory({
                              ...editingSubcategory,
                              name: e.target.value,
                            })
                          }
                          className="input-field"
                        />
                      ) : (
                        subcategory.name
                      )}
                    </td>
                    <td>
                      {editingSubcategory && editingSubcategory.id === subcategory.id ? (
                        <button
                          className="save-button"
                          onClick={() => handleSaveEditSubcategory(category.id)}
                        >
                          Save
                        </button>
                      ) : (
                        <>
                          <button
                            className="edit-button"
                            onClick={() => handleEditSubcategory(category.id, subcategory.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteSubcategory(category.id, subcategory.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
