<template lang="">
     <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header mt-1">
                    <h6>Thêm Mới Chuyên Mục</h6>
                </div>
                <div class="card-body">
                    <div class="mt-2">
                        <label>Tên Chuyên Mục</label>
                        <input v-model="create_chuyen_muc.ten_chuyen_muc" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Slug Chuyên Mục</label>
                        <input v-model="create_chuyen_muc.slug_chuyen_muc" type="text" class="form-control mt-1">
                    </div>
                    <div class="mt-2">
                        <label>Tình Trạng</label>
                        <select v-model="create_chuyen_muc.tinh_trang" class="form-control mt-1">
                            <option value="1">Hiển Thị</option>
                            <option value="0">Tạm Tắt</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="createChuyenMuc()" class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card border-top border-0 border-4 border-primary">
                <div class="card-header">
                    <h5>Danh Sách Chuyên Mục</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                 
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input  v-on:keyup.enter="searchChuyenMuc()"  v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary" v-on:click="searchChuyenMuc()">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </th>
                            
                                <tr>
                                    <th class="text-center align-middle text-nowrap">
                                        #
                                    </th>
                                    <th class="text-center align-middle text-nowrap">
                                        Tên Chuyên Mục
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
                                <template v-for="(v, k) in list_chuyen_muc">
                                    <tr>
                                        <th class="text-center align-middle text-nowrap">
                                            {{k + 1}}
                                        </th>
                                        <td class="align-middle text-nowrap">
                                            {{v.ten_chuyen_muc}}
                                        </td>       
                                        <td class="text-center align-middle text-nowrap">
                                            <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success"
                                                style="width: 100px;">Hiển
                                                Thị</button>
                                            <button @:click="doiTrangThai(v)" v-else class="btn btn-warning"
                                                style="width: 100px;">Tạm Dừng</button>
                                       </td>
                                       <td class="text-center align-middle text-nowrap">
                                            <button v-on:click="Object.assign(edit_chuyen_muc, v)" class="btn btn-info me-2"
                                                style="width: 100px;" data-bs-toggle="modal" data-bs-target="#capNhatModal">Cập
                                                Nhật</button>
                                            <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                                data-bs-target="#xoaModal"
                                                v-on:click="Object.assign(delete_chuyen_muc, v)">Xóa</button>
                                      </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nguyên Liệu</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="">Tên Chuyên Mục</label>
                                            <input v-model="edit_chuyen_muc.ten_chuyen_muc" type="text"
                                                class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Slug Chuyên Mục</label>
                                            <input v-model="edit_chuyen_muc.slug_chuyen_muc" type="text"
                                                class="form-control mt-2">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <label for="">Tình Trạng</label>
                                            <select v-model="edit_chuyen_muc.tinh_trang" class="form-control mt-2">
                                                <option value="1">Hiển Thị</option>
                                                <option value="0">Tạm Dừng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                    <button data-bs-dismiss="modal" @:click="updateChuyenMuc()" type="button"
                                        class="btn btn-primary">Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nguyên Liệu</h1>
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
                                                    <p>Bạn có muốn xóa sản phẩm <b> Chuyên Mục VIP</b> này không?</p>
                                                    <p>
                                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                    <button type="button" class="btn btn-danger" v-on:click="deleteChuyenMuc()"
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
            list_chuyen_muc: [],
            key_search: {},
            create_chuyen_muc: {},
            delete_chuyen_muc: {},
            edit_chuyen_muc: {},
        }
    },
    mounted() {
        this.loadDataChuyenMuc();
    },
    methods: {
        loadDataChuyenMuc() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuyen-muc/lay-du-lieu')
                .then((res) => {
                    this.list_chuyen_muc = res.data.chuyen_muc;
                });
        },
        searchChuyenMuc() {
            axios
                .post('http://127.0.0.1:8000/api/admin/chuyen-muc/tim-chuyen-muc', this.key_search)
                .then((res) => {
                    this.list_chuyen_muc = res.data.chuyen_muc;
                });
        },

        createChuyenMuc() {
            axios
                .post('http://127.0.0.1:8000/api/admin/chuyen-muc/tao-chuyen-muc', this.create_chuyen_muc)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChuyenMuc();
                    }
                });
        },

        deleteChuyenMuc() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/chuyen-muc/xoa-chuyen-muc/' + this.delete_chuyen_muc.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChuyenMuc();
                    }
                    else {
                        toaster.success('Thông báo<br>' + res.data.message);

                    }
                });
        },

        updateChuyenMuc() {
            axios
                .put('http://127.0.0.1:8000/api/admin/chuyen-muc/cap-nhat-chuyen-muc', this.edit_chuyen_muc)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChuyenMuc();
                    } else {
                        toaster.success('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/chuyen-muc/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataChuyenMuc();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style lang="">
    
</style>