const dummyBooks = [
  {
    id: 1,
    title: "Cantik Itu Luka",
    stock: 5,
    status: "Tersedia",
    borrowStatus: "Dipinjam",
    cover: "assets/buku-cantik-itu-luka.jpg",
    description:
      "Cantik Itu Luka karya Eka Kurniawan mengisahkan perjalanan hidup Dewi Ayu dan keempat putrinya di masa kolonial hingga pasca kemerdekaan Indonesia, memadukan realisme magis, sejarah kelam, dan tragedi keluarga yang memikat."
  },
  {
    id: 2,
    title: "Bumi Manusia",
    stock: 3,
    status: "Tersedia",
    borrowStatus: "Dipinjam",
    cover: "assets/buku-bumi-manusia.jpg",
    description:
      "Bumi Manusia karya Pramoedya Ananta Toer menceritakan perjuangan Minke, seorang pemuda pribumi terpelajar di masa kolonial Hindia Belanda, bersama Annelies dan Nyai Ontosoroh dalam menghadapi ketidakadilan hukum serta sosial."
  },
  {
    id: 3,
    title: "Laskar Pelangi",
    stock: 0,
    status: "Kosong",
    borrowStatus: "Dikembalikan",
    cover: "assets/buku-laskar-pelangi.jpg",
    description:
      "Laskar Pelangi karya Andrea Hirata mengangkat kisah inspiratif sepuluh anak dari keluarga kurang mampu di Pulau Belitung yang bersekolah di SD Muhammadiyah dengan penuh semangat, persahabatan, dan mimpi besar."
  },
  {
    id: 4,
    title: "Laut Bercerita",
    stock: 4,
    status: "Tersedia",
    borrowStatus: "Dipinjam",
    cover: "assets/buku-laut-bercerita.jpg",
    description:
      "Laut Bercerita karya Leila S. Chudori berkisah tentang Biru Laut dan rekan-rekan aktivis mahasiswa di akhir dekade 1990-an yang memperjuangkan demokrasi, serta duka keluarga yang menanti kepulangan mereka."
  },
  {
    id: 5,
    title: "Filosofi Teras",
    stock: 6,
    status: "Tersedia",
    borrowStatus: "Dipinjam",
    cover: "assets/buku-filosofi-teras.jpg",
    description:
      "Filosofi Teras karya Henry Manampiring memperkenalkan filsafat Stoisisme Yunani-Romawi kuno dalam bahasa yang ringan dan relevan untuk membantu generasi modern mengatasi emosi negatif serta kecemasan sehari-hari."
  },
  {
    id: 6,
    title: "Negeri 5 Menara",
    stock: 0,
    status: "Kosong",
    borrowStatus: "Dikembalikan",
    cover: "assets/buku-negeri-5-menara.jpg",
    description:
      "Negeri 5 Menara karya Ahmad Fuadi menceritakan perjalanan Alif Fikri dan lima sahabatnya di Pondok Madani yang memegang teguh mantra Man Jadda Wajada hingga berhasil meraih impian mereka ke penjuru dunia."
  }
];

const dummyBorrowers = [
  { no: 1, nama: "Azril", kodeBuku: "BKS-2307", tanggalPinjam: "23 Agustus 2026", status: "Dipinjam" },
  { no: 2, nama: "Bayu", kodeBuku: "BKS-2307", tanggalPinjam: "23 Agustus 2026", status: "Dikembalikan" },
  { no: 3, nama: "Rizky", kodeBuku: "BKS-2307", tanggalPinjam: "23 Agustus 2026", status: "Dikembalikan" },
  { no: 4, nama: "Fahmi", kodeBuku: "BKS-2307", tanggalPinjam: "23 Agustus 2026", status: "Dipinjam" },
  { no: 5, nama: "Zidan", kodeBuku: "BKS-2307", tanggalPinjam: "23 Agustus 2026", status: "Dipinjam" }
];

let dummyUsers = [
  { id: 1, nama: "Aziz", email: "az@gmail.com", alamat: "Semarang", jenisKelamin: "Laki laki" },
  { id: 2, nama: "Budi Santoso", email: "budi.s@gmail.com", alamat: "Surabaya", jenisKelamin: "Laki laki" },
  { id: 3, nama: "Citra Lestari", email: "citra.l@gmail.com", alamat: "Bandung", jenisKelamin: "Perempuan" },
  { id: 4, nama: "Dimas Pratama", email: "dimas.p@gmail.com", alamat: "Yogyakarta", jenisKelamin: "Laki laki" },
  { id: 5, nama: "Eka Putri", email: "eka.putri@gmail.com", alamat: "Jakarta", jenisKelamin: "Perempuan" },
  { id: 6, nama: "Fajar Nugroho", email: "fajar.n@gmail.com", alamat: "Malang", jenisKelamin: "Laki laki" },
  { id: 7, nama: "Gita Permata", email: "gita.p@gmail.com", alamat: "Solo", jenisKelamin: "Perempuan" },
  { id: 8, nama: "Hendra Wijaya", email: "hendra.w@gmail.com", alamat: "Semarang", jenisKelamin: "Laki laki" },
  { id: 9, nama: "Indah Sari", email: "indah.s@gmail.com", alamat: "Bogor", jenisKelamin: "Perempuan" },
  { id: 10, nama: "Joko Susilo", email: "joko.s@gmail.com", alamat: "Medan", jenisKelamin: "Laki laki" }
];

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScrollNavbar();
  initSearchFilter();
  initFilterTabs();
  initPaginationUI();
  initDetailBookLoader();
  initBookModalHandlers();
  initUserTableAndModal();
  initPasswordToggles();
});

function initSmoothScrollNavbar() {
  const heroNavbar = document.getElementById("publicNavbar");
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
  const sections = document.querySelectorAll("header[id], section[id]");

  if (heroNavbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        heroNavbar.classList.add("scrolled");
      } else {
        heroNavbar.classList.remove("scrolled");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#" || this.hasAttribute("data-bs-toggle")) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        const offset = 65;
        const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: topPos, behavior: "smooth" });

        const collapseEl = document.getElementById("navbarNav");
        if (collapseEl && collapseEl.classList.contains("show") && window.bootstrap) {
          const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });

  if (sections.length > 0 && heroNavbar) {
    window.addEventListener("scroll", () => {
      let currentId = "";
      const scrollPos = window.pageYOffset;

      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = sec.getAttribute("id");
        }
      });

      if (currentId) {
        navLinks.forEach((link) => {
          if (link.hasAttribute("data-bs-toggle")) return;
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

function initSearchFilter() {
  const searchInput = document.getElementById("searchInput");
  const bookGrid = document.getElementById("bookGridContainer");
  if (!searchInput || !bookGrid) return;

  searchInput.addEventListener("input", () => {
    applyGridFilters();
  });
}

function initFilterTabs() {
  const filterButtons = document.querySelectorAll(".btn-filter-tab[data-filter]");
  if (filterButtons.length === 0) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyGridFilters();
    });
  });
}

function applyGridFilters() {
  const searchInput = document.getElementById("searchInput");
  const bookGrid = document.getElementById("bookGridContainer");
  if (!bookGrid) return;

  const keyword = (searchInput ? searchInput.value : "").toLowerCase().trim();
  const activeTabBtn = document.querySelector(".btn-filter-tab.active[data-filter]");
  const activeFilter = activeTabBtn ? activeTabBtn.getAttribute("data-filter") : "semua";

  const items = bookGrid.querySelectorAll(".book-col-item");
  let visibleCount = 0;

  items.forEach((item) => {
    const title = (item.querySelector(".book-card-title")?.textContent || "").toLowerCase();
    const itemStatus = (item.getAttribute("data-status") || "").toLowerCase();

    const matchesKeyword = keyword === "" || title.includes(keyword);
    let matchesTab = true;

    if (activeFilter !== "semua") {
      if (activeFilter === "dipinjam") {
        matchesTab = itemStatus === "dipinjam" || itemStatus === "kosong";
      } else {
        matchesTab = itemStatus === activeFilter;
      }
    }

    if (matchesKeyword && matchesTab) {
      item.style.display = "";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  let emptyMsg = document.getElementById("emptySearchMsg");
  if (visibleCount === 0) {
    if (!emptyMsg) {
      emptyMsg = document.createElement("div");
      emptyMsg.id = "emptySearchMsg";
      emptyMsg.className = "col-12 text-center py-4 text-muted";
      emptyMsg.textContent = "Tidak ada buku yang ditemukan.";
      bookGrid.appendChild(emptyMsg);
    }
  } else if (emptyMsg) {
    emptyMsg.remove();
  }
}

function initPaginationUI() {
  const paginations = document.querySelectorAll(".pagination-custom");
  paginations.forEach((pagination) => {
    const pageItems = pagination.querySelectorAll(".page-item-custom:not(.arrow-item)");
    pageItems.forEach((item) => {
      const btn = item.querySelector(".page-link-custom");
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        pageItems.forEach((it) => it.classList.remove("active"));
        item.classList.add("active");
      });
    });
  });
}

function initDetailBookLoader() {
  const titleEl = document.getElementById("detailBookTitle");
  if (!titleEl) return;

  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get("id"), 10) || 1;
  const book = dummyBooks.find((b) => b.id === bookId) || dummyBooks[0];

  titleEl.textContent = book.title;

  const descEl = document.getElementById("detailBookDesc");
  if (descEl) descEl.textContent = book.description;

  const coverEl = document.getElementById("detailBookCover");
  if (coverEl) {
    coverEl.src = book.cover;
    coverEl.alt = book.title;
  }

  const badgeEl = document.getElementById("detailBookBadge");
  if (badgeEl) {
    badgeEl.textContent = book.status;
    badgeEl.className =
      "status-badge " + (book.status === "Tersedia" ? "status-tersedia" : "status-kosong");
  }

  const borrowBtn = document.getElementById("detailBorrowBtn");
  if (borrowBtn) {
    if (book.status !== "Tersedia") {
      borrowBtn.className = "btn-gray-disabled py-2";
      borrowBtn.disabled = true;
    }
  }
}

function handlePinjamBuku(bookId) {
  const book = dummyBooks.find((b) => b.id === bookId);
  const title = book ? book.title : "Buku";
  alert(`Buku "${title}" berhasil dipinjam! Silakan cek di menu Daftar Pinjam.`);
}

function handleKembalikanBuku(btnElement) {
  if (!btnElement || btnElement.disabled) return;
  const card = btnElement.closest(".book-card");
  const col = btnElement.closest(".book-col-item");
  if (card) {
    const badge = card.querySelector(".status-badge");
    if (badge) {
      badge.textContent = "Dikembalikan";
      badge.className = "status-badge status-dikembalikan";
    }
  }
  if (col) {
    col.setAttribute("data-status", "dikembalikan");
  }
  btnElement.className = "btn-gray-disabled";
  btnElement.disabled = true;
}

function initBookModalHandlers() {
  const bookForm = document.getElementById("bookModalForm");
  const thumbDropzone = document.getElementById("thumbnailDropzone");
  const thumbInput = document.getElementById("bookThumbnailInput");
  const thumbLabel = document.getElementById("thumbnailFilename");

  if (thumbDropzone && thumbInput) {
    thumbDropzone.addEventListener("click", () => thumbInput.click());
    thumbInput.addEventListener("change", () => {
      if (thumbInput.files && thumbInput.files[0] && thumbLabel) {
        thumbLabel.textContent = thumbInput.files[0].name;
      }
    });
  }

  if (bookForm) {
    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameVal = document.getElementById("bookNameInput")?.value.trim() || "Buku Baru";
      const stockVal = parseInt(document.getElementById("bookStockInput")?.value, 10) || 0;
      const editId = bookForm.getAttribute("data-edit-id");

      if (editId) {
        const cardCol = document.querySelector(`.book-col-item[data-book-id="${editId}"]`);
        if (cardCol) {
          const titleEl = cardCol.querySelector(".book-card-title");
          if (titleEl) titleEl.textContent = nameVal;
          const badgeEl = cardCol.querySelector(".status-badge");
          const isTersedia = stockVal > 0;
          if (badgeEl) {
            badgeEl.textContent = isTersedia ? "Tersedia" : "Kosong";
            badgeEl.className =
              "status-badge " + (isTersedia ? "status-tersedia" : "status-kosong");
          }
          cardCol.setAttribute("data-status", isTersedia ? "tersedia" : "kosong");
        }
      } else {
        const bookGrid = document.getElementById("bookGridContainer");
        if (bookGrid) {
          const newId = Date.now();
          const isTersedia = stockVal > 0;
          const col = document.createElement("div");
          col.className = "col-12 col-sm-6 col-lg-4 book-col-item";
          col.setAttribute("data-book-id", String(newId));
          col.setAttribute("data-status", isTersedia ? "tersedia" : "kosong");
          col.innerHTML = `
            <div class="book-card">
              <div>
                <div class="book-card-top-bar">
                  <span class="status-badge ${isTersedia ? "status-tersedia" : "status-kosong"}">
                    ${isTersedia ? "Tersedia" : "Kosong"}
                  </span>
                  <div class="dropdown">
                    <button class="btn-card-menu dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Menu aksi buku">
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow-sm">
                      <li><a class="dropdown-item small" href="#" onclick="openEditBookModal(${newId}, '${escapeHtml(nameVal)}', ${stockVal}); return false;"><i class="bi bi-pencil me-2"></i>Edit</a></li>
                      <li><a class="dropdown-item small text-danger" href="#" onclick="deleteBookCard(${newId}); return false;"><i class="bi bi-trash me-2"></i>Hapus</a></li>
                    </ul>
                  </div>
                </div>
                <div class="book-card-img-wrapper">
                  <img src="assets/buku-cantik-itu-luka.jpg" alt="${escapeHtml(nameVal)}" class="book-card-img">
                </div>
                <h3 class="book-card-title">${escapeHtml(nameVal)}</h3>
              </div>
              <div class="book-card-actions">
                <a href="admin-detail-buku.html?id=1" class="btn-brown">Detail</a>
              </div>
            </div>
          `;
          bookGrid.appendChild(col);
        }
      }

      const modalEl = document.getElementById("bookFormModal");
      if (modalEl && window.bootstrap) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
      }
    });
  }
}

function openAddBookModal() {
  const modalTitle = document.getElementById("bookModalLabel");
  const bookForm = document.getElementById("bookModalForm");
  const thumbLabel = document.getElementById("thumbnailFilename");

  if (modalTitle) modalTitle.textContent = "Tambah Data Buku";
  if (bookForm) {
    bookForm.reset();
    bookForm.removeAttribute("data-edit-id");
  }
  if (thumbLabel) thumbLabel.textContent = "";

  const modalEl = document.getElementById("bookFormModal");
  if (modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function openEditBookModal(bookId, bookTitle, bookStock) {
  const modalTitle = document.getElementById("bookModalLabel");
  const bookForm = document.getElementById("bookModalForm");
  const nameInput = document.getElementById("bookNameInput");
  const stockInput = document.getElementById("bookStockInput");
  const descInput = document.getElementById("bookDescInput");
  const thumbLabel = document.getElementById("thumbnailFilename");

  const found = dummyBooks.find((b) => b.id === Number(bookId));

  if (modalTitle) modalTitle.textContent = "Tambah Data Buku";
  if (bookForm) bookForm.setAttribute("data-edit-id", String(bookId));
  if (nameInput) nameInput.value = bookTitle || (found ? found.title : "");
  if (stockInput) stockInput.value = bookStock !== undefined ? bookStock : found ? found.stock : 1;
  if (descInput) descInput.value = found ? found.description : "";
  if (thumbLabel) thumbLabel.textContent = found ? found.cover.replace("assets/", "") : "";

  const modalEl = document.getElementById("bookFormModal");
  if (modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function deleteBookCard(bookId) {
  const cardCol = document.querySelector(`.book-col-item[data-book-id="${bookId}"]`);
  if (cardCol) {
    cardCol.remove();
  }
}

function initUserTableAndModal() {
  const tbody = document.getElementById("userTableBody");
  const userForm = document.getElementById("userModalForm");
  if (!tbody) return;

  renderUserTable();

  if (userForm) {
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("userNameInput")?.value.trim() || "Aziz";
      const email = document.getElementById("userEmailInput")?.value.trim() || "az@gmail.com";
      const alamat = document.getElementById("userAddressInput")?.value.trim() || "Semarang";
      const genderRadio = document.querySelector('input[name="jenisKelamin"]:checked');
      const jenisKelamin = genderRadio ? genderRadio.value : "Laki laki";
      const editId = userForm.getAttribute("data-edit-id");

      if (editId) {
        const idx = dummyUsers.findIndex((u) => String(u.id) === String(editId));
        if (idx !== -1) {
          dummyUsers[idx] = { ...dummyUsers[idx], nama, email, alamat, jenisKelamin };
        }
      } else {
        const newId = dummyUsers.length > 0 ? Math.max(...dummyUsers.map((u) => u.id)) + 1 : 1;
        dummyUsers.push({ id: newId, nama, email, alamat, jenisKelamin });
      }

      renderUserTable();

      const modalEl = document.getElementById("userFormModal");
      if (modalEl && window.bootstrap) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
      }
    });
  }
}

function renderUserTable() {
  const tbody = document.getElementById("userTableBody");
  if (!tbody) return;

  tbody.innerHTML = dummyUsers
    .map(
      (user, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(user.nama)}</td>
      <td>${escapeHtml(user.email)}</td>
      <td>${escapeHtml(user.alamat)}</td>
      <td>${escapeHtml(user.jenisKelamin)}</td>
      <td>
        <button type="button" class="btn-table-action btn-table-edit" title="Edit User" onclick="openEditUserModal(${user.id})">
          <i class="bi bi-pencil-fill"></i>
        </button>
        <button type="button" class="btn-table-action btn-table-delete" title="Hapus User" onclick="deleteUserRow(${user.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `
    )
    .join("");
}

function openAddUserModal() {
  const userForm = document.getElementById("userModalForm");
  if (userForm) {
    userForm.reset();
    userForm.removeAttribute("data-edit-id");
  }
  const modalEl = document.getElementById("userFormModal");
  if (modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function openEditUserModal(userId) {
  const user = dummyUsers.find((u) => u.id === userId);
  if (!user) return;

  const userForm = document.getElementById("userModalForm");
  const nameInput = document.getElementById("userNameInput");
  const emailInput = document.getElementById("userEmailInput");
  const addressInput = document.getElementById("userAddressInput");

  if (userForm) userForm.setAttribute("data-edit-id", String(user.id));
  if (nameInput) nameInput.value = user.nama;
  if (emailInput) emailInput.value = user.email;
  if (addressInput) addressInput.value = user.alamat;

  const genderMale = document.getElementById("genderLaki");
  const genderFemale = document.getElementById("genderPerempuan");
  if (user.jenisKelamin.toLowerCase() === "perempuan" && genderFemale) {
    genderFemale.checked = true;
  } else if (genderMale) {
    genderMale.checked = true;
  }

  const modalEl = document.getElementById("userFormModal");
  if (modalEl && window.bootstrap) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function deleteUserRow(userId) {
  dummyUsers = dummyUsers.filter((u) => u.id !== userId);
  renderUserTable();
}

function initPasswordToggles() {
  const toggleBtns = document.querySelectorAll(".password-toggle-btn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      const icon = btn.querySelector("i");
      if (!input) return;

      if (input.type === "password") {
        input.type = "text";
        if (icon) {
          icon.classList.remove("bi-eye");
          icon.classList.add("bi-eye-slash");
        }
      } else {
        input.type = "password";
        if (icon) {
          icon.classList.remove("bi-eye-slash");
          icon.classList.add("bi-eye");
        }
      }
    });
  });
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}
