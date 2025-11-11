document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      window.location.href = "/login";
    });
  }

  // Helper
  async function apiRequest(url, method = "GET", data = null) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const res = await fetch(url, {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    });
    return res.json();
  }

  // Login
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const res = await apiRequest("/api/auth/login", "POST", { email, password });
      if (res.token) {
        localStorage.setItem("token", res.token);
        window.location.href = "/dashboard";
      } else alert(res.message || "Login failed");
    });
  }

  // Register
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      if (password !== confirmPassword) return alert("Passwords do not match!");
      const res = await apiRequest("/api/auth/register", "POST", { name, email, password });
      if (res.token) {
        localStorage.setItem("token", res.token);
        window.location.href = "/dashboard";
      } else alert(res.message || "Registration failed");
    });
  }

  // Dashboard
  if (window.location.pathname === "/dashboard") {
    apiRequest("/api/auth/me").then((res) => {
      if (!res.name) return (window.location.href = "/login");
      document.getElementById("user-name").textContent = res.name;
      document.getElementById("total-tasks").textContent = res.stats?.total || 0;
      document.getElementById("completed-tasks").textContent = res.stats?.completed || 0;
      document.getElementById("pending-tasks").textContent = res.stats?.pending || 0;
    });
  }

  // Tasks
  if (window.location.pathname === "/tasks") {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const categoryDropdown = document.getElementById("category");

    async function loadTasks() {
      const tasks = await apiRequest("/api/tasks");
      taskList.innerHTML = "";
      tasks.forEach((t) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${t.title}</td>
          <td>${t.status}</td>
          <td>${t.category?.name || "N/A"}</td>
          <td>
            <button class="complete-btn" data-id="${t._id}">✔</button>
            <button class="delete-btn" data-id="${t._id}">🗑</button>
          </td>`;
        taskList.appendChild(row);
      });
    }

    async function loadCategories() {
      const cats = await apiRequest("/api/categories");
      cats.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c._id;
        opt.textContent = c.name;
        categoryDropdown.appendChild(opt);
      });
    }

    if (taskForm) {
      taskForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = {
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
          dueDate: document.getElementById("dueDate").value,
          category: document.getElementById("category").value,
        };
        await apiRequest("/api/tasks", "POST", data);
        taskForm.reset();
        loadTasks();
      });
    }

    taskList.addEventListener("click", async (e) => {
      if (e.target.classList.contains("delete-btn")) {
        await apiRequest(`/api/tasks/${e.target.dataset.id}`, "DELETE");
        loadTasks();
      } else if (e.target.classList.contains("complete-btn")) {
        await apiRequest(`/api/tasks/${e.target.dataset.id}`, "PATCH", { status: "completed" });
        loadTasks();
      }
    });

    loadCategories();
    loadTasks();
  }

  // Categories
  if (window.location.pathname === "/categories") {
    const catForm = document.getElementById("category-form");
    const catList = document.getElementById("category-list");

    async function loadCategories() {
      const cats = await apiRequest("/api/categories");
      catList.innerHTML = "";
      cats.forEach((c) => {
        const li = document.createElement("li");
        li.innerHTML = `${c.name} <button data-id="${c._id}" class="delete-cat">❌</button>`;
        catList.appendChild(li);
      });
    }

    if (catForm) {
      catForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("categoryName").value;
        await apiRequest("/api/categories", "POST", { name });
        catForm.reset();
        loadCategories();
      });
    }

    catList.addEventListener("click", async (e) => {
      if (e.target.classList.contains("delete-cat")) {
        await apiRequest(`/api/categories/${e.target.dataset.id}`, "DELETE");
        loadCategories();
      }
    });

    loadCategories();
  }
});
