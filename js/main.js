// Main JavaScript for Gym Admin Dashboard

class GymAdminDashboard {
    constructor() {
        this.currentSection = 'dashboard';
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.filteredData = {};
        this.editingItem = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupTheme();
        this.setupKeyboardShortcuts();
        this.initializeDashboard();
        this.loadData();
        this.setupSearchAndFilters();
        this.setupExportFunctions();
        this.handleResize();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const sidebar = document.getElementById('sidebar');

        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
            });
        }

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });
        }

        // Modal management
        this.setupModals();
        
        // Forms
        this.setupForms();
        
        // Quick actions
        this.setupQuickActions();
        
        // Theme toggle
        this.setupThemeToggle();

        // Window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    setupTheme() {
        const savedTheme = localStorage.getItem('gym-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Update theme toggle icon
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        this.navigateToSection('dashboard');
                        break;
                    case '2':
                        e.preventDefault();
                        this.navigateToSection('members');
                        break;
                    case '3':
                        e.preventDefault();
                        this.navigateToSection('trainers');
                        break;
                    case '4':
                        e.preventDefault();
                        this.navigateToSection('plans');
                        break;
                    case '5':
                        e.preventDefault();
                        this.navigateToSection('payments');
                        break;
                    case '6':
                        e.preventDefault();
                        this.navigateToSection('notifications');
                        break;
                    case '7':
                        e.preventDefault();
                        this.navigateToSection('settings');
                        break;
                }
            }
            
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.closeModal(openModal.id);
                }
            }
        });
    }

    setupSearchAndFilters() {
        // Member search
        const memberSearch = document.getElementById('memberSearch');
        if (memberSearch) {
            memberSearch.addEventListener('input', this.debounce((e) => {
                this.handleSearch(e.target.value, 'members');
            }, 300));
        }

        // Trainer search
        const trainerSearch = document.getElementById('trainerSearch');
        if (trainerSearch) {
            trainerSearch.addEventListener('input', this.debounce((e) => {
                this.handleSearch(e.target.value, 'trainers');
            }, 300));
        }

        // Member filters
        const planFilter = document.getElementById('planFilter');
        if (planFilter) {
            planFilter.addEventListener('change', (e) => {
                this.handleFilter(e.target.value, 'members', 'plan');
            });
        }

        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.handleFilter(e.target.value, 'members', 'status');
            });
        }

        const dateFilter = document.getElementById('dateFilter');
        if (dateFilter) {
            dateFilter.addEventListener('change', (e) => {
                this.handleFilter(e.target.value, 'members', 'date');
            });
        }

        // Trainer filters
        const specializationFilter = document.getElementById('specializationFilter');
        if (specializationFilter) {
            specializationFilter.addEventListener('change', (e) => {
                this.handleFilter(e.target.value, 'trainers', 'specialization');
            });
        }

        const trainerStatusFilter = document.getElementById('trainerStatusFilter');
        if (trainerStatusFilter) {
            trainerStatusFilter.addEventListener('change', (e) => {
                this.handleFilter(e.target.value, 'trainers', 'status');
            });
        }
    }

    setupExportFunctions() {
        const exportMembersBtn = document.getElementById('exportMembersBtn');
        if (exportMembersBtn) {
            exportMembersBtn.addEventListener('click', () => {
                this.exportData('members');
            });
        }
    }

    handleResize() {
        if (window.innerWidth <= 992) {
            document.getElementById('sidebar')?.classList.remove('collapsed');
        }
    }

    setupModals() {
        // Modal triggers
        const addMemberBtn = document.getElementById('addMemberBtn');
        const addTrainerBtn = document.getElementById('addTrainerBtn');
        const addPlanBtn = document.getElementById('addPlanBtn');
        const createNotificationBtn = document.getElementById('createNotificationBtn');

        if (addMemberBtn) addMemberBtn.addEventListener('click', () => this.openModal('memberModal'));
        if (addTrainerBtn) addTrainerBtn.addEventListener('click', () => this.openModal('trainerModal'));
        if (addPlanBtn) addPlanBtn.addEventListener('click', () => this.openModal('planModal'));
        if (createNotificationBtn) createNotificationBtn.addEventListener('click', () => this.openModal('notificationModal'));

        // Modal close
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeModal(btn.closest('.modal').id);
            });
        });

        // Modal backdrop
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal(modal.id);
            });
        });
    }

    setupForms() {
        // Member form
        const memberForm = document.getElementById('memberForm');
        if (memberForm) {
            memberForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleMemberSubmit();
            });
        }

        // Trainer form
        const trainerForm = document.getElementById('trainerForm');
        if (trainerForm) {
            trainerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleTrainerSubmit();
            });
        }

        // Plan form
        const planForm = document.getElementById('planForm');
        if (planForm) {
            planForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handlePlanSubmit();
            });
        }

        // Notification form
        const notificationForm = document.getElementById('notificationForm');
        if (notificationForm) {
            notificationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNotificationSubmit();
            });
        }
    }

    setupQuickActions() {
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleQuickAction(action);
            });
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    navigateToSection(section) {
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${section}"]`).classList.add('active');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(sectionEl => {
            sectionEl.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = section;
        }

        // Update breadcrumb
        this.updateBreadcrumb(section);

        // Load section data
        this.loadSectionData(section);

        // Close mobile sidebar
        if (window.innerWidth <= 992) {
            document.getElementById('sidebar').classList.remove('show');
        }
    }

    loadSectionData(section) {
        switch (section) {
            case 'members':
                this.renderMembersTable();
                break;
            case 'trainers':
                this.renderTrainersTable();
                break;
            case 'plans':
                this.renderPlansGrid();
                break;
            case 'payments':
                this.renderPaymentsTable();
                break;
        }
    }

    updateBreadcrumb(section) {
        const breadcrumb = document.getElementById('breadcrumb');
        const sectionNames = {
            dashboard: 'Dashboard',
            members: 'Members Management',
            trainers: 'Trainers Management',
            plans: 'Membership Plans',
            payments: 'Payments & Transactions',
            notifications: 'Notifications & Announcements',
            settings: 'Settings'
        };
        
        breadcrumb.innerHTML = `<span>${sectionNames[section] || 'Dashboard'}</span>`;
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Clear form if editing
            if (this.editingItem) {
                this.clearForm(modalId);
            }
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
            this.editingItem = null;
            this.clearForm(modalId);
        }
    }

    clearForm(modalId) {
        const form = document.querySelector(`#${modalId} form`);
        if (form) {
            form.reset();
        }
    }

    handleQuickAction(action) {
        switch (action) {
            case 'add-member':
                this.openModal('memberModal');
                break;
            case 'add-trainer':
                this.openModal('trainerModal');
                break;
            case 'create-plan':
                this.openModal('planModal');
                break;
            case 'send-notification':
                this.openModal('notificationModal');
                break;
        }
    }

    handleMemberSubmit() {
        const form = document.getElementById('memberForm');
        const formData = new FormData(form);
        
        if (!this.validateForm(form)) return;

        const memberData = {
            id: this.editingItem ? this.editingItem.id : Date.now(),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            plan: formData.get('plan'),
            status: formData.get('status') || 'active',
            joinDate: formData.get('joinDate') || new Date().toISOString().split('T')[0],
            address: formData.get('address'),
            emergencyContact: formData.get('emergencyContact'),
            healthInfo: formData.get('healthInfo'),
            photo: formData.get('photo') ? URL.createObjectURL(formData.get('photo')) : 'https://via.placeholder.com/50x50/4a90e2/ffffff?text=' + formData.get('firstName').charAt(0) + formData.get('lastName').charAt(0)
        };

        if (this.editingItem) {
            // Update existing member
            const index = window.gymData.members.findIndex(m => m.id === this.editingItem.id);
            if (index !== -1) {
                window.gymData.members[index] = { ...this.editingItem, ...memberData };
            }
        } else {
            // Add new member
            window.gymData.members.push(memberData);
        }

        this.closeModal('memberModal');
        this.showToast(this.editingItem ? 'Member updated successfully!' : 'Member added successfully!', 'success');
        this.updateDashboardStats();
        this.renderMembersTable();
    }

    handleTrainerSubmit() {
        const form = document.getElementById('trainerForm');
        const formData = new FormData(form);
        
        if (!this.validateForm(form)) return;

        const trainerData = {
            id: this.editingItem ? this.editingItem.id : Date.now(),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            specializations: formData.getAll('specializations'),
            experience: formData.get('experience'),
            status: formData.get('status') || 'active',
            assignedMembers: this.editingItem ? this.editingItem.assignedMembers : 0,
            certifications: formData.get('certifications'),
            availability: formData.get('availability'),
            photo: formData.get('photo') ? URL.createObjectURL(formData.get('photo')) : 'https://via.placeholder.com/50x50/ff6b35/ffffff?text=' + formData.get('firstName').charAt(0) + formData.get('lastName').charAt(0)
        };

        if (this.editingItem) {
            // Update existing trainer
            const index = window.gymData.trainers.findIndex(t => t.id === this.editingItem.id);
            if (index !== -1) {
                window.gymData.trainers[index] = { ...this.editingItem, ...trainerData };
            }
        } else {
            // Add new trainer
            window.gymData.trainers.push(trainerData);
        }

        this.closeModal('trainerModal');
        this.showToast(this.editingItem ? 'Trainer updated successfully!' : 'Trainer added successfully!', 'success');
        this.updateDashboardStats();
        this.renderTrainersTable();
    }

    handlePlanSubmit() {
        const form = document.getElementById('planForm');
        const formData = new FormData(form);
        
        if (!this.validateForm(form)) return;

        const planData = {
            id: this.editingItem ? this.editingItem.id : Date.now(),
            name: formData.get('planName'),
            description: formData.get('description'),
            duration: formData.get('duration'),
            price: parseFloat(formData.get('price')),
            accessLevel: formData.get('accessLevel'),
            features: formData.get('features').split('\n').filter(f => f.trim()),
            status: formData.get('status') || 'active',
            memberCount: this.editingItem ? this.editingItem.memberCount : 0
        };

        if (this.editingItem) {
            // Update existing plan
            const index = window.gymData.plans.findIndex(p => p.id === this.editingItem.id);
            if (index !== -1) {
                window.gymData.plans[index] = { ...this.editingItem, ...planData };
            }
        } else {
            // Add new plan
            window.gymData.plans.push(planData);
        }

        this.closeModal('planModal');
        this.showToast(this.editingItem ? 'Plan updated successfully!' : 'Plan created successfully!', 'success');
        this.renderPlansGrid();
    }

    handleNotificationSubmit() {
        const form = document.getElementById('notificationForm');
        const formData = new FormData(form);
        
        if (!this.validateForm(form)) return;
        
        const notificationData = {
            id: Date.now(),
            title: formData.get('title'),
            message: formData.get('message'),
            targetAudience: formData.get('targetAudience'),
            type: formData.get('type'),
            sentAt: new Date().toISOString(),
            status: 'sent'
        };

        window.gymData.notifications.unshift(notificationData);
        
        this.closeModal('notificationModal');
        this.showToast('Notification sent successfully!', 'success');
        this.renderNotificationsList();
    }

    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        return isValid;
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('gym-theme', newTheme);
        
        // Update theme toggle icon
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }

        // Update charts theme
        if (window.gymCharts) {
            window.gymCharts.updateTheme(newTheme);
        }
    }

    initializeDashboard() {
        this.updateDashboardStats();
        this.renderRecentActivities();
        this.renderNotificationsList();
    }

    loadData() {
        this.filteredData = {
            members: [...window.gymData.members],
            trainers: [...window.gymData.trainers],
            payments: [...window.gymData.payments]
        };
    }

    updateDashboardStats() {
        const stats = window.gymData.dashboardStats;
        
        const totalMembersEl = document.getElementById('totalMembers');
        const activePlansEl = document.getElementById('activePlans');
        const totalTrainersEl = document.getElementById('totalTrainers');
        const monthlyRevenueEl = document.getElementById('monthlyRevenue');

        if (totalMembersEl) totalMembersEl.textContent = stats.totalMembers;
        if (activePlansEl) activePlansEl.textContent = stats.activePlans;
        if (totalTrainersEl) totalTrainersEl.textContent = stats.totalTrainers;
        if (monthlyRevenueEl) monthlyRevenueEl.textContent = `$${stats.monthlyRevenue.toLocaleString()}`;
    }

    renderMembersTable() {
        const tbody = document.getElementById('membersTableBody');
        if (!tbody) return;

        const members = this.filteredData.members;
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedMembers = members.slice(startIndex, endIndex);

        tbody.innerHTML = paginatedMembers.map(member => `
            <tr>
                <td>
                    <img src="${member.photo}" alt="${member.firstName}" class="member-photo">
                </td>
                <td>${member.firstName} ${member.lastName}</td>
                <td>${member.email}</td>
                <td>${member.phone}</td>
                <td>${member.plan}</td>
                <td><span class="status-badge ${member.status}">${member.status}</span></td>
                <td>${this.formatDate(member.joinDate)}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="window.gymDashboard.editMember(${member.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="window.gymDashboard.deleteMember(${member.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        this.renderPagination(members.length, 'members');
    }

    renderTrainersTable() {
        const tbody = document.getElementById('trainersTableBody');
        if (!tbody) return;

        const trainers = this.filteredData.trainers;
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedTrainers = trainers.slice(startIndex, endIndex);

        tbody.innerHTML = paginatedTrainers.map(trainer => `
            <tr>
                <td>
                    <img src="${trainer.photo}" alt="${trainer.firstName}" class="trainer-photo">
                </td>
                <td>${trainer.firstName} ${trainer.lastName}</td>
                <td>${trainer.email}</td>
                <td>${trainer.specializations.join(', ')}</td>
                <td>${trainer.experience}</td>
                <td>${trainer.assignedMembers}</td>
                <td><span class="status-badge ${trainer.status}">${trainer.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="window.gymDashboard.editTrainer(${trainer.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="window.gymDashboard.deleteTrainer(${trainer.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        this.renderPagination(trainers.length, 'trainers');
    }

    renderPlansGrid() {
        const container = document.getElementById('plansGrid');
        if (!container) return;

        const plans = window.gymData.plans;
        container.innerHTML = plans.map(plan => `
            <div class="plan-card">
                <div class="plan-header">
                    <h3>${plan.name}</h3>
                    <span class="plan-price">$${plan.price}</span>
                </div>
                <div class="plan-duration">${plan.duration}</div>
                <p class="plan-description">${plan.description}</p>
                <div class="plan-features">
                    ${plan.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="plan-footer">
                    <span class="plan-status ${plan.status}">${plan.status}</span>
                    <div class="plan-actions">
                        <button class="btn btn-sm btn-primary" onclick="window.gymDashboard.editPlan(${plan.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="window.gymDashboard.deletePlan(${plan.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderPaymentsTable() {
        const tbody = document.getElementById('paymentsTableBody');
        if (!tbody) return;

        const payments = this.filteredData.payments;
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedPayments = payments.slice(startIndex, endIndex);

        tbody.innerHTML = paginatedPayments.map(payment => `
            <tr>
                <td>${payment.memberName}</td>
                <td>${payment.plan}</td>
                <td>$${payment.amount}</td>
                <td>${this.formatDate(payment.date)}</td>
                <td><span class="status-badge ${payment.status}">${payment.status}</span></td>
                <td>${this.formatPaymentMethod(payment.paymentMethod)}</td>
                <td>
                    <button class="btn btn-sm btn-info" onclick="window.gymDashboard.viewPayment(${payment.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        this.renderPagination(payments.length, 'payments');
    }

    renderPagination(totalItems, section) {
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        const paginationContainer = document.querySelector(`#${section} .pagination`);
        
        if (!paginationContainer || totalPages <= 1) return;

        let paginationHTML = '<div class="pagination-controls">';
        
        // Previous button
        paginationHTML += `
            <button class="btn btn-sm" ${this.currentPage === 1 ? 'disabled' : ''} 
                    onclick="window.gymDashboard.goToPage(${this.currentPage - 1}, '${section}')">
                <i class="fas fa-chevron-left"></i>
            </button>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                    <button class="btn btn-sm ${i === this.currentPage ? 'btn-primary' : ''}" 
                            onclick="window.gymDashboard.goToPage(${i}, '${section}')">
                        ${i}
                    </button>
                `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<span class="pagination-ellipsis">...</span>';
            }
        }

        // Next button
        paginationHTML += `
            <button class="btn btn-sm" ${this.currentPage === totalPages ? 'disabled' : ''} 
                    onclick="window.gymDashboard.goToPage(${this.currentPage + 1}, '${section}')">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>`;

        paginationContainer.innerHTML = paginationHTML;
    }

    goToPage(page, section) {
        this.currentPage = page;
        this.loadSectionData(section);
    }

    editMember(id) {
        const member = window.gymData.members.find(m => m.id === id);
        if (member) {
            this.editingItem = member;
            this.populateMemberForm(member);
            this.openModal('memberModal');
        }
    }

    editTrainer(id) {
        const trainer = window.gymData.trainers.find(t => t.id === id);
        if (trainer) {
            this.editingItem = trainer;
            this.populateTrainerForm(trainer);
            this.openModal('trainerModal');
        }
    }

    editPlan(id) {
        const plan = window.gymData.plans.find(p => p.id === id);
        if (plan) {
            this.editingItem = plan;
            this.populatePlanForm(plan);
            this.openModal('planModal');
        }
    }

    populateMemberForm(member) {
        const form = document.getElementById('memberForm');
        if (!form) return;

        form.querySelector('[name="firstName"]').value = member.firstName || '';
        form.querySelector('[name="lastName"]').value = member.lastName || '';
        form.querySelector('[name="email"]').value = member.email || '';
        form.querySelector('[name="phone"]').value = member.phone || '';
        form.querySelector('[name="plan"]').value = member.plan || '';
        form.querySelector('[name="status"]').value = member.status || 'active';
        form.querySelector('[name="joinDate"]').value = member.joinDate || '';
        form.querySelector('[name="address"]').value = member.address || '';
        form.querySelector('[name="emergencyContact"]').value = member.emergencyContact || '';
        form.querySelector('[name="healthInfo"]').value = member.healthInfo || '';
    }

    populateTrainerForm(trainer) {
        const form = document.getElementById('trainerForm');
        if (!form) return;

        form.querySelector('[name="firstName"]').value = trainer.firstName || '';
        form.querySelector('[name="lastName"]').value = trainer.lastName || '';
        form.querySelector('[name="email"]').value = trainer.email || '';
        form.querySelector('[name="phone"]').value = trainer.phone || '';
        form.querySelector('[name="experience"]').value = trainer.experience || '';
        form.querySelector('[name="status"]').value = trainer.status || 'active';
        form.querySelector('[name="certifications"]').value = trainer.certifications || '';
        form.querySelector('[name="availability"]').value = trainer.availability || '';

        // Handle specializations checkboxes
        const specializationCheckboxes = form.querySelectorAll('[name="specializations"]');
        specializationCheckboxes.forEach(checkbox => {
            checkbox.checked = trainer.specializations.includes(checkbox.value);
        });
    }

    populatePlanForm(plan) {
        const form = document.getElementById('planForm');
        if (!form) return;

        form.querySelector('[name="planName"]').value = plan.name || '';
        form.querySelector('[name="description"]').value = plan.description || '';
        form.querySelector('[name="duration"]').value = plan.duration || '';
        form.querySelector('[name="price"]').value = plan.price || '';
        form.querySelector('[name="accessLevel"]').value = plan.accessLevel || '';
        form.querySelector('[name="status"]').value = plan.status || 'active';
        form.querySelector('[name="features"]').value = plan.features.join('\n') || '';
    }

    deleteMember(id) {
        this.showDeleteConfirmation('member', id);
    }

    deleteTrainer(id) {
        this.showDeleteConfirmation('trainer', id);
    }

    deletePlan(id) {
        this.showDeleteConfirmation('plan', id);
    }

    showDeleteConfirmation(type, id) {
        const modal = document.getElementById('deleteModal');
        if (!modal) return;

        const title = modal.querySelector('.modal-title');
        const message = modal.querySelector('.modal-message');
        const confirmBtn = modal.querySelector('.confirm-delete');

        title.textContent = `Delete ${type.charAt(0).toUpperCase() + type.slice(1)}`;
        message.textContent = `Are you sure you want to delete this ${type}? This action cannot be undone.`;
        confirmBtn.onclick = () => this.confirmDelete(type, id);

        this.openModal('deleteModal');
    }

    confirmDelete(type, id) {
        let dataArray, index;
        
        switch (type) {
            case 'member':
                dataArray = window.gymData.members;
                break;
            case 'trainer':
                dataArray = window.gymData.trainers;
                break;
            case 'plan':
                dataArray = window.gymData.plans;
                break;
        }

        if (dataArray) {
            index = dataArray.findIndex(item => item.id === id);
            if (index !== -1) {
                dataArray.splice(index, 1);
                this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`, 'success');
                this.closeModal('deleteModal');
                this.loadSectionData(this.currentSection);
                this.updateDashboardStats();
            }
        }
    }

    viewPayment(id) {
        const payment = window.gymData.payments.find(p => p.id === id);
        if (payment) {
            this.showToast(`Payment Details: ${payment.memberName} - $${payment.amount}`, 'info');
        }
    }

    formatPaymentMethod(method) {
        const methods = {
            'credit_card': 'Credit Card',
            'debit_card': 'Debit Card',
            'bank_transfer': 'Bank Transfer',
            'cash': 'Cash',
            'paypal': 'PayPal'
        };
        return methods[method] || method;
    }

    handleSearch(query, type) {
        if (!query.trim()) {
            this.filteredData[type] = [...window.gymData[type]];
        } else {
            this.filteredData[type] = window.gymData[type].filter(item => {
                const searchableFields = this.getSearchableFields(item, type);
                return searchableFields.some(field => 
                    field.toLowerCase().includes(query.toLowerCase())
                );
            });
        }
        
        this.currentPage = 1;
        this.loadSectionData(type);
    }

    handleFilter(filterValue, type, filterType) {
        if (!filterValue || filterValue === '') {
            this.filteredData[type] = [...window.gymData[type]];
        } else {
            this.filteredData[type] = window.gymData[type].filter(item => {
                switch (filterType) {
                    case 'status':
                        return item.status === filterValue;
                    case 'plan':
                        return item.plan === filterValue;
                    case 'specialization':
                        return item.specializations && item.specializations.includes(filterValue);
                    case 'date':
                        if (!item.joinDate) return false;
                        const itemDate = new Date(item.joinDate).toDateString();
                        const filterDate = new Date(filterValue).toDateString();
                        return itemDate === filterDate;
                    default:
                        return false;
                }
            });
        }
        
        this.currentPage = 1;
        this.loadSectionData(type);
    }

    getSearchableFields(item, type) {
        switch (type) {
            case 'members':
                return [item.firstName, item.lastName, item.email, item.phone, item.plan];
            case 'trainers':
                return [item.firstName, item.lastName, item.email, item.phone, item.specializations.join(' ')];
            case 'payments':
                return [item.memberName, item.plan, item.paymentMethod];
            default:
                return Object.values(item).filter(v => typeof v === 'string');
        }
    }

    exportData(type) {
        const data = this.filteredData[type] || window.gymData[type];
        if (!data || data.length === 0) {
            this.showToast('No data to export', 'warning');
            return;
        }

        const headers = this.getExportHeaders(type);
        const csvContent = this.convertToCSV(data, headers);
        this.downloadCSV(csvContent, `${type}_export.csv`);
        this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} exported successfully!`, 'success');
    }

    getExportHeaders(type) {
        switch (type) {
            case 'members':
                return ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Plan', 'Status', 'Join Date'];
            case 'trainers':
                return ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Specializations', 'Experience', 'Status'];
            case 'payments':
                return ['ID', 'Member Name', 'Plan', 'Amount', 'Date', 'Status', 'Payment Method'];
            default:
                return [];
        }
    }

    convertToCSV(data, headers) {
        const rows = [headers.join(',')];
        
        data.forEach(item => {
            const row = headers.map(header => {
                const value = this.getExportValue(item, header);
                return `"${value}"`;
            });
            rows.push(row.join(','));
        });
        
        return rows.join('\n');
    }

    getExportValue(item, header) {
        const mapping = {
            'ID': item.id,
            'First Name': item.firstName,
            'Last Name': item.lastName,
            'Email': item.email,
            'Phone': item.phone,
            'Plan': item.plan,
            'Status': item.status,
            'Join Date': item.joinDate,
            'Specializations': Array.isArray(item.specializations) ? item.specializations.join('; ') : item.specializations,
            'Experience': item.experience,
            'Member Name': item.memberName,
            'Amount': item.amount,
            'Date': item.date,
            'Payment Method': item.paymentMethod
        };
        
        return mapping[header] || '';
    }

    downloadCSV(content, filename) {
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    renderRecentActivities() {
        const container = document.getElementById('recentActivities');
        if (!container) return;

        const activities = window.gymData.recentActivities;
        container.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon ${activity.type}">
                    <i class="fas fa-${this.getActivityIcon(activity.type)}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `).join('');
    }

    getActivityIcon(type) {
        const icons = {
            member: 'user',
            payment: 'credit-card',
            trainer: 'user-tie',
            notification: 'bell'
        };
        return icons[type] || 'info-circle';
    }

    renderNotificationsList() {
        const container = document.getElementById('notificationsList');
        if (!container) return;

        const notifications = window.gymData.notifications;
        container.innerHTML = notifications.map(notification => `
            <div class="notification-item">
                <div class="notification-icon ${notification.type}">
                    <i class="fas fa-${this.getNotificationIcon(notification.type)}"></i>
                </div>
                <div class="notification-content">
                    <h4>${notification.title}</h4>
                    <p>${notification.message}</p>
                    <div class="notification-meta">
                        <span>${this.formatDate(notification.sentAt)}</span>
                        <span>${notification.targetAudience}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    getNotificationIcon(type) {
        const icons = {
            info: 'info-circle',
            warning: 'exclamation-triangle',
            success: 'check-circle',
            promotion: 'gift'
        };
        return icons[type] || 'info-circle';
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-header">
                <span class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                <button class="toast-close">&times;</button>
            </div>
            <div class="toast-body">${message}</div>
        `;

        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);

        // Close button functionality
        const closeBtn = toast.querySelector('.toast-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            });
        }
    }

    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString();
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.gymData) {
        window.gymDashboard = new GymAdminDashboard();
    } else {
        const checkData = setInterval(() => {
            if (window.gymData) {
                window.gymDashboard = new GymAdminDashboard();
                clearInterval(checkData);
            }
        }, 100);
    }
});
