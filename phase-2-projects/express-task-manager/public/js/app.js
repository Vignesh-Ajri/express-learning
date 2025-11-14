document.addEventListener('DOMContentLoaded', () => {
  const API_BASE = 'http://localhost:5000';

  // Helper function for API requests
  async function apiRequest(url, method = 'GET', data = null) {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json'
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const options = {
        method,
        headers
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(`${API_BASE}${url}`, options);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Request failed');
      }

      return result;
    } catch (error) {
      console.error('API Error:', error);
      alert(error.message);
      return null;
    }
  }

  // Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      window.location.href = '/login';
    });
  }

  // Register page
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        return alert('Passwords do not match!');
      }

      const result = await apiRequest('/api/auth/register', 'POST', { name, email, password });
      
      if (result && result.success) {
        localStorage.setItem('token', result.data.token);
        window.location.href = '/dashboard';
      }
    });
  }

  // Login page
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const result = await apiRequest('/api/auth/login', 'POST', { email, password });
      
      if (result && result.success) {
        localStorage.setItem('token', result.data.token);
        window.location.href = '/dashboard';
      }
    });
  }

  // Dashboard page
  if (window.location.pathname === '/dashboard') {
    async function loadDashboard() {
      const result = await apiRequest('/api/auth/me');
      
      if (!result || !result.success) {
        return window.location.href = '/login';
      }

      document.getElementById('user-name').textContent = result.data.user.name;

      // Load tasks for stats
      const tasksResult = await apiRequest('/api/tasks');
      if (tasksResult && tasksResult.success) {
        const tasks = tasksResult.data;
        const total = tasks.length;
        const completed = tasks.filter(t => t.status === 'completed').length;
        const pending = tasks.filter(t => t.status === 'pending').length;

        document.getElementById('total-tasks').textContent = total;
        document.getElementById('completed-tasks').textContent = completed;
        document.getElementById('pending-tasks').textContent = pending;
      }
    }
    
    loadDashboard();
  }

  // Tasks page
  if (window.location.pathname === '/tasks') {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const categoryDropdown = document.getElementById('category');

    async function loadCategories() {
      const result = await apiRequest('/api/categories');
      if (result && result.success) {
        categoryDropdown.innerHTML = 'No Category';
        result.data.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat._id;
          option.textContent = cat.name;
          categoryDropdown.appendChild(option);
        });
      }
    }

    async function loadTasks() {
      const result = await apiRequest('/api/tasks');
      if (result && result.success) {
        taskList.innerHTML = '';
        result.data.forEach(task => {
          const row = document.createElement('tr');
          row.innerHTML = `
            ${task.title}
            ${task.status}
            ${task.category ? task.category.name : 'N/A'}
            
              ✓ Complete
              🗑 Delete
            
          `;
          taskList.appendChild(row);
        });
      }
    }

    if (taskForm) {
      taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const category = document.getElementById('category').value;

        const data = { title, description, dueDate };
        if (category) data.category = category;

        const result = await apiRequest('/api/tasks', 'POST', data);
        
        if (result && result.success) {
          taskForm.reset();
          loadTasks();
        }
      });
    }

    taskList.addEventListener('click', async (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const taskId = e.target.dataset.id;
        const result = await apiRequest(`/api/tasks/${taskId}`, 'DELETE');
        if (result && result.success) {
          loadTasks();
        }
      } else if (e.target.classList.contains('complete-btn')) {
        const taskId = e.target.dataset.id;
        const result = await apiRequest(`/api/tasks/${taskId}`, 'PUT', { status: 'completed' });
        if (result && result.success) {
          loadTasks();
        }
      }
    });

    loadCategories();
    loadTasks();
  }

  // Categories page
  if (window.location.pathname === '/categories') {
    const categoryForm = document.getElementById('category-form');
    const categoryList = document.getElementById('category-list');

    async function loadCategories() {
      const result = await apiRequest('/api/categories');
      if (result && result.success) {
        categoryList.innerHTML = '';
        result.data.forEach(cat => {
          const li = document.createElement('li');
          li.innerHTML = `
            ${cat.name}
            ✕ Delete
          `;
          categoryList.appendChild(li);
        });
      }
    }

    if (categoryForm) {
      categoryForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('categoryName').value;
        const result = await apiRequest('/api/categories', 'POST', { name });
        
        if (result && result.success) {
          categoryForm.reset();
          loadCategories();
        }
      });
    }

    categoryList.addEventListener('click', async (e) => {
      if (e.target.classList.contains('delete-cat')) {
        const catId = e.target.dataset.id;
        const result = await apiRequest(`/api/categories/${catId}`, 'DELETE');
        if (result && result.success) {
          loadCategories();
        }
      }
    });

    loadCategories();
  }
});