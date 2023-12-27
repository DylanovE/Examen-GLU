<template>
    <div class="dashboard">
        <h1>User dashboard</h1>
        <button class="btn" @click="showAddForm">Add User</button>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th class="hide">Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td class="hide">{{ user.password }}</td>
                    <td>
                        <button class="btn" @click="editUser(user)">Edit</button>
                        <button class="btn btn-delete" @click="deleteUser(user)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="showForm" class="form-popup">
            <div class="form-container">
                <h3>{{ formTitle }}</h3>
                <form @submit.prevent="submitForm">
                    <div class="fields">
                        <label for="name">Name</label>
                        <input id="name" v-model="formData.name" type="text" required>

                        <label for="email">Email</label>
                        <input id="email" v-model="formData.email" type="email" required>

                        <label for="password">Password</label>
                        <input id="password" v-model="formData.password" type="password" required>
                    </div>
                    <button type="submit" class="btn">{{ formAction }}</button>
                    <button type="button" class="btn" @click="cancelForm">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            showForm: false,
            formTitle: '',
            formAction: '',
            formData: {
                id: '',
                name: '',
                email: '',
                password: '',
            },
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers() {
            axios
                .get('http://localhost:3001/users')
                .then(response => {
                    this.users = response.data;
                })
                .catch(error => {
                    console.error('Failed to fetch users:', error);
                });
        },
        addUser() {
            axios
                .post('http://localhost:3001/users', this.formData)
                .then(response => {
                    console.log('User added:', response.data);
                    this.fetchUsers();
                    this.closeForm();
                })
                .catch(error => {
                    console.error('Failed to add user:', error);
                });
        },
        editUser(user) {
            this.formTitle = 'Edit User';
            this.formAction = 'Update';

            this.formData.id = user.id;
            this.formData.name = user.name;
            this.formData.email = user.email;
            this.formData.password = user.password;

            this.showForm = true;
        },
        updateUser() {
            const {id, name, email, password} = this.formData;

            axios
                .put(`http://localhost:3001/users/${id}`, {name, email, password})
                .then(response => {
                    console.log('User updated:', response.data);
                    this.fetchUsers();
                    this.closeForm();
                })
                .catch(error => {
                    console.error('Failed to update user:', error);
                });
        },
        deleteUser(user) {
            axios
                .delete(`http://localhost:3001/users/${user.id}`)
                .then(response => {
                    console.log('User deleted:', response.data);
                    this.fetchUsers();
                })
                .catch(error => {
                    console.error('Failed to delete user:', error);
                });
        },
        showAddForm() {
            this.formTitle = 'Add User';
            this.formAction = 'Add';

            this.formData.id = '';
            this.formData.name = '';
            this.formData.email = '';

            this.showForm = true;
        },
        closeForm() {
            this.showForm = false;
        },
        submitForm() {
            if (this.formAction === 'Add') {
                this.addUser();
            } else if (this.formAction === 'Update') {
                this.updateUser();
            }
        },
        cancelForm() {
            this.closeForm();
        },
    },
};
</script>

<style scoped>
.dashboard {
  text-align: center;
  width: 100%;
}

table {
  margin: 20px auto;
  border-collapse: collapse;
}

table th,
table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.btn {
  padding: 8px 16px;
  margin: 4px;
}

.btn-delete {
  background-color: #ff3333;
  color: #fff;
}

.form-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.form-container {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 16px;
}

.form-container h3 {
  margin-top: 0;
}

.fields {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  padding-bottom: 10px;
}

.fields input {
    margin-bottom: 20px;
}

/* Media query for smaller screens */
@media (max-width: 400px) {
  .hide {
    display: none;
  }
}
</style>
