import React, { useState } from 'react';
import CustomLayout from '../dashboard/customeLayout';
import SubCategory from './Subcategorey';
import './Addcategorey.css';

const MainCategory = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [selectedPage, setSelectedPage] = useState('addCategory');

  const handleAddCategory = () => {
    if (currentCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: currentCategory }]);
      setCurrentCategory('');
    }
  };

  const handleEditCategory = (id) => {
    const categoryToEdit = categories.find((cat) => cat.id === id);
    setEditingCategory(categoryToEdit);
    setEditingText(categoryToEdit.name);
  };

  const handleSaveEdit = () => {
    setCategories(categories.map((category) =>
      category.id === editingCategory.id ? { ...category, name: editingText } : category
    ));
    setEditingCategory(null);
    setEditingText('');
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const renderAddCategoryPage = () => (
    
    <div className="add-category-container">
       <h1 className="main-heading">Add Main-Categories</h1>
      <input
        value={currentCategory}
        onChange={(e) => setCurrentCategory(e.target.value)}
        placeholder="New Category Name"
        className="input-field"
      />
      <button onClick={handleAddCategory} className="add-button">
        Add Category
      </button>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="list-item">
            {editingCategory && editingCategory.id === category.id ? (
              <>
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={handleSaveEdit} className="save-button">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="category-name">{category.name}</span>
                <span className="category-id">{category.id}</span>
                <button onClick={() => handleEditCategory(category.id)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDeleteCategory(category.id)} className="delete-button">
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <CustomLayout>
    <div className="layout">
      <div className="sider">
        <button
          className={`menu-item ${selectedPage === 'addCategory' ? 'active' : ''}`}
          onClick={() => setSelectedPage('addCategory')}
        >
          Add Main-Category
        </button>
        <button
          className={`menu-item ${selectedPage === 'addSubCategory' ? 'active' : ''}`}
          onClick={() => setSelectedPage('addSubCategory')}
        >
          Add Sub-Category
        </button>
      </div>
      <div className="content">
        {selectedPage === 'addCategory' ? renderAddCategoryPage() : <SubCategory categories={categories} />}
      </div>
    </div>
    </CustomLayout>
  );
};

export default MainCategory;
