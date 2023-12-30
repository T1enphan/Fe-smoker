<template>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách Admin</h5>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-outline-primary float-end" data-bs-toggle="modal"
                                data-bs-target="#themmoimodal">Tạo Admin</button>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input v-on:keyup.enter="searchAdmin()" v-model="key_search.abc" type="text" class="form-control"
                                            placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary" v-on:click="searchAdmin()">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </th>

                            </tr>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Họ và tên</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Ngày Sinh</th>
                                <th>Số Điện Thoại</th>
                                <th>Tình trạng</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center align-middle" v-for="(v, k) in list_admin">
                                <td>{{ k + 1 }}</td>
                                <td>{{ v.ho_va_ten }}</td>
                                <td>{{ v.email }}</td>
                                <td>{{ v.password }}</td>
                                <td>{{ v.ngay_sinh }}</td>
                                <td>{{ v.so_dien_thoai }}</td>
                                <td class="align-middle text-nowrap text-center">
                                    <button v-on:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success">Hoạt
                                        Động</button>
                                    <button v-on:click="doiTrangThai(v)" v-else class="btn btn-warning">Tạm Dừng</button>
                                </td>
                                <td class="align-middle text-nowrap text-center">
                                    <button v-on:click="Object.assign(edit_admin, v)" data-bs-dismiss="modal" class="btn btn-primary" style="margin-right: 4px;" data-bs-toggle="modal" data-bs-target="#capNhatmodal">CậpNhật</button>
                                    <button v-on:click="Object.assign(delete_admin, v)" data-bs-dismiss="modal" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                                        >Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-5">Thêm Mới Admin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <label class="form-label">Họ Và Tên</label>
                                <input v-model="create_admin.ho_va_ten" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Email</label>
                                <input v-model="create_admin.email" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Password</label>
                                <input v-model="create_admin.password" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Ngày Sinh</label>
                                <input v-model="create_admin.ngay_sinh" class="form-control" type="date">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Số Điện Thoại</label>
                                <input v-model="create_admin.so_dien_thoai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Tình trạng</label>
                                <select v-model="create_admin.tinh_trang" class="form-select">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm dừng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="createAdmin()" type="button" class="btn btn-primary">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-5">Cập Nhật Admin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <label class="form-label">Họ Và Tên</label>
                                <input v-model="edit_admin.ho_va_ten" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Email</label>
                                <input v-model="edit_admin.email" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Password</label>
                                <input v-model="edit_admin.password" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Ngày Sinh</label>
                                <input v-model="edit_admin.ngay_sinh" class="form-control" type="date">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Số Điện Thoại</label>
                                <input v-model="edit_admin.so_dien_thoai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Tình trạng</label>
                                <select v-model="edit_admin.tinh_trang" class="form-select">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm dừng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="updateAdmin()" data-bs-dismiss="model" type="button" class="btn btn-primary">Cập Nhật</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-5">Cập Nhật Admin</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0 text-dark">Warning</h6>
                                    <div class="text-dark">
                                        <p>Bạn có muốn xóa danh mục <b>{{ delete_admin.ho_va_ten }}</b> này không?
                                        </p>
                                        <p>
                                            <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button v-on:click="deleteAdmin()" type="button" class="btn btn-danger">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_admin: [],
            key_search: {},
            create_admin: {},
            delete_admin: {},
            edit_admin: {},
        }
    },
    mounted() {
        this.loadDataAdmin();
    },
    methods: {
        loadDataAdmin() {
            axios
                .get('http://127.0.0.1:8000/api/admin/admin/lay-du-lieu')
                .then((res) => {
                    this.list_admin = res.data.admins;
                });
        },
        searchAdmin() {
            axios
                .post('http://127.0.0.1:8000/api/admin/admin/tim-admin', this.key_search)
                .then((res) => {
                    this.list_admin = res.data.admins;
                });
        },

        createAdmin() {
            console.log(this.create_admin);
            axios
                .post('http://127.0.0.1:8000/api/admin/admin/tao-admin', this.create_admin)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_admin = "";
                        this.loadDataAdmin();
                    }
                });
        },
        deleteAdmin() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/admin/xoa-admin/' + this.delete_admin.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAdmin();
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateAdmin() {
            axios
                .put('http://127.0.0.1:8000/api/admin/admin/cap-nhat-admin', this.edit_admin)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAdmin();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/admin/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataAdmin();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }

    }
}
</script>
<style></style>