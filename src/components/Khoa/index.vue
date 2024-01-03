<template>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header mt-1">
                    <h6>Thêm Mới Khoa</h6>
                </div>
                <div class="card-body">
                    <div class="mt-2">
                        <label>Tên Khoa</label>
                        <input v-model="create_khoa.ten_khoa" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Slug Khoa</label>
                        <input v-model="create_khoa.slug_khoa" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Tình Trạng</label>
                        <select v-model="create_khoa.tinh_trang" class="form-control mt-1">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Tạm Dừng</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="createKhoa()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card border-top border-0 border-4 border-primary">
                <div class="card-header">
                    <h5>Danh Sách Khoa</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input v-on:keyup.enter="searchKhoa()" v-model="key_search.abc" type="text"
                                                class="form-control" placeholder="Nhập thông tin cần tìm">
                                            <button class="btn btn-primary" v-on:click="searchKhoa()">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Khoa
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Slug Khoa
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tình Trạng
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_khoa">
                                    <tr>
                                        <th class="text-center align-middle text-nowrap">
                                            {{ k + 1 }}
                                        </th>
                                        <td class="align-middle text-nowrap">
                                            {{ v.ten_khoa }}
                                        </td>
                                        <td class="align-middle text-nowrap">
                                            {{ v.slug_khoa }}
                                        </td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1"
                                                class="btn btn-success">Hoạt Động</button>
                                            <button @:click="doiTrangThai(v)" v-else class="btn btn-warning">Tạm
                                                Dừng</button>
                                        </td>
                                        <td class="align-middle text-nowrap text-center">
                                            <button v-on:click="Object.assign(edit_khoa, v)" class="btn btn-primary"
                                                style="margin-right: 4px;" data-bs-toggle="modal"
                                                data-bs-target="#capNhatmodal">Cập Nhật</button>
                                            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                                                v-on:click="Object.assign(delete_khoa, v)">Xóa</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <!-- <div class="modal fade" id="capNhatModal" tabindex="-1"
                       aria-labelledby="exampleModalLabel" aria-hidden="true">
                       <div class="modal-dialog">
                           <div class="modal-content">
                               <div class="modal-header">
                                   <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Khoa
                                   </h1>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal"
                                       aria-label="Close"></button>
                               </div>
                               <div class="modal-body">
                                   <div class="row">
                                       <div class="col-12">
                                           <label class="form-label">Tên Khoa</label>
                                           <input v-model="edit_khoa.ten_khoa" type="text" class="form-control"
                                               placeholder="Nhập tên khoa">
                                       </div>
                                       <div class="col-12">
                                           <label class="form-label mt-3">Slug-Khoa</label>
                                           <input v-model="edit_khoa.slug_khoa" type="text" class="form-control"
                                               placeholder="Nhập slug khoa">
                                       </div>
                                       <div class="col-12">
                                           <label class="form-label mt-3">Tình Trạng</label>
                                           <select v-model="edit_khoa.tinh_trang" class="form-control">
                                               <option value="1">Hoạt Động</option>
                                               <option value="0">Tạm Dừng</option>
                                           </select>
                                       </div>
                                   </div>
                               </div>
                               <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary"
                                       data-bs-dismiss="modal">Close</button>
                                   <button v-on:click="updateKhoa()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Cập Nhật</button>
                               </div>
                           </div>
                       </div>
                   </div> -->
                    <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <label class="form-label">Tên Khoa</label>
                                            <input v-model="edit_khoa.ten_khoa" type="text" class="form-control"
                                                placeholder="Nhập tên khoa">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label mt-3">Slug-Khoa</label>
                                            <input v-model="edit_khoa.slug_khoa" type="text" class="form-control"
                                                placeholder="Nhập slug khoa">
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label mt-3">Tình Trạng</label>
                                            <select v-model="edit_khoa.tinh_trang" class="form-control">
                                                <option value="1">Hoạt Động</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="updateKhoa()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Save
                                        changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Khoa</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa Khoa <b>{{ delete_khoa.ten_khoa }}</b> này không?
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
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="deleteKhoa()" type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "top-right"
});
export default {
    data() {
        return {
            list_khoa: [],
            key_search: {},
            create_khoa: {},
            delete_khoa: {},
            edit_khoa: {},
        }
    },
    mounted() {
        this.loadDataKhoa();
    },
    methods: {
        loadDataKhoa() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khoa/lay-du-lieu')
                .then((res) => {
                    this.list_khoa = res.data.khoa;
                });
        },
        searchKhoa() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khoa/tim-khoa', this.key_search)
                .then((res) => {
                    this.list_khoa = res.data.khoa;
                });
        },

        createKhoa() {
            console.log(this.create_khoa);
            axios
                .post('http://127.0.0.1:8000/api/admin/khoa/tao-khoa', this.create_khoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_khoa = "";
                        this.loadDataKhoa();
                    }
                });
        },
        deleteKhoa() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/khoa/xoa-khoa/' + this.delete_khoa.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhoa();
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateKhoa() {
            axios
                .put('http://127.0.0.1:8000/api/admin/khoa/cap-nhat-khoa', this.edit_khoa)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhoa();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/khoa/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataKhoa();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }

    }
}
</script>
<style></style>