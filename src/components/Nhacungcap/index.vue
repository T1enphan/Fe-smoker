<template>
    <div class="row">
        <div class="col-12">
            <div class="card  shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách Nhà Cung Cấp</h5>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-outline-primary float-end" data-bs-toggle="modal"
                                data-bs-target="#themmoimodal">Tạo Nhà Cung Cấp</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th colspan="100%">
                                    <div class="input-group mb-3">
                                        <input v-on:keyup.enter="searchNhaCungCap()" v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                        <button class="btn btn-primary" v-on:click="searchNhaCungCap()">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                            <tr class="text-center align-middle">
                                <th>#</th>
                                <th>Tên Công Ty</th>
                                <th>Người Đại Diện</th>
                                <th>Mã Số Thuế</th>
                                <th>Số Điện Thoại</th>
                                <th>Email</th>       
                                <th>Địa Chỉ</th>
                                <th>Tình trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v, k) in list_nha_cung_cap">
                                <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                <td class="align-middle text-nowrap">{{ v.ten_cong_ty }}</td>
                                <td class="align-middle text-nowrap">{{ v.nguoi_dai_dien }}</td>
                                <td class="align-middle text-nowrap">{{ v.ma_so_thue }}</td>
                                <td class="align-middle text-nowrap">{{ v.so_dien_thoai }}</td>
                                <td class="align-middle text-nowrap">{{ v.email }}</td>
                                <td class="align-middle text-nowrap">{{ v.dia_chi }}</td>
                                <td class="align-middle text-nowrap text-center">
                                    <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success">Hoạt Động</button>
                                    <button @:click="doiTrangThai(v)" v-else class="btn btn-warning">Tạm Dừng</button>
                                </td>
                                <td class="align-middle text-nowrap text-center">
                                    <button v-on:click="Object.assign(edit_nha_cung_cap , v)" class="btn btn-primary" style="margin-right: 4px;" data-bs-toggle="modal"
                                        data-bs-target="#capNhatmodal">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal" v-on:click="Object.assign(delete_nha_cung_cap,v)">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="themmoimodal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <label class="form-label">Tên Công Ty</label>
                                <input v-model="create_nha_cung_cap.ten_cong_ty" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Người Đại Diện</label>
                                <input v-model="create_nha_cung_cap.nguoi_dai_dien" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Mã Số Thuế</label>
                                <input v-model="create_nha_cung_cap.ma_so_thue" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Số Điện Thoại</label>
                                <input v-model="create_nha_cung_cap.so_dien_thoai" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Email</label>
                                <input v-model="create_nha_cung_cap.email" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Địa Chỉ</label>
                                <input v-model="create_nha_cung_cap.dia_chi" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Tình trạng</label>
                                <select v-model="create_nha_cung_cap.tinh_trang" class="form-select">
                                    <option value="1">Hoạt Động</option>
                                    <option value="0">Tạm dừng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button @:click="createNhaCungCap()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Thành Viên</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <label class="form-label">Tên Nhà Cung Cấp</label>
                                <input v-model="edit_nha_cung_cap.ho_va_ten" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Người Đại Diện</label>
                                <input v-model="edit_nha_cung_cap.dia_chi" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Mã Số Thuế</label>
                                <input v-model="edit_nha_cung_cap.so_dien_thoai" type="text" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Số Điện Thoại</label>
                                <input v-model="edit_nha_cung_cap.ngay_sinh" type="number" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Email</label>
                                <input v-model="edit_nha_cung_cap.id_khoa" class="form-control">
                            </div>
                            <div class="col-6 mb-2">
                                <label class="form-label">Địa Chỉ</label>
                                <input v-model="edit_nha_cung_cap.ngay_dang_ky" class="form-control">
                            </div>               
                            <div class="col-6 mb-2">
                                <label class="form-label">Tình trạng</label>
                                <select v-model="edit_nha_cung_cap.tinh_trang" class="form-select">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Tạm dừng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button v-on:click="updateNhaCungCap()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                            nhận</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Nhà Cung Cấp</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div
                            class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                            <div class="d-flex align-items-center">
                                <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                </div>
                                <div class="ms-3">
                                    <h6 class="mb-0 text-dark">Warning</h6>
                                    <div class="text-dark">
                                        <p>Bạn có muốn xóa danh mục <b>{{ delete_nha_cung_cap.ho_va_ten }}</b> này không?
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
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="deleteNhaCungCap()">Xóa</button>
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
                list_nha_cung_cap    :   [],
                key_search         :   {},
                create_nha_cung_cap  :   {},
                delete_nha_cung_cap  :   {},
                edit_nha_cung_cap    :   {},
            }
        },
        mounted() {
            this.loadDataNhaCungCap();
        },
        methods: {
            loadDataNhaCungCap()   {
                axios
                    .get('http://127.0.0.1:8000/api/admin/nha-cung-cap/lay-du-lieu')
                    .then((res) =>  {
                        this.list_nha_cung_cap = res.data.nha_cung_cap;
                    });
            },
            searchNhaCungCap(){
                axios
                    .post('http://127.0.0.1:8000/api/admin/nha-cung-cap/tim-nha-cung-cap', this.key_search)
                    .then((res) =>  {
                        this.list_nha_cung_cap = res.data.nha_cung_cap;
                    });
            },
    
            createNhaCungCap() {
                console.log(this.create_nha_cung_cap);
                axios
                    .post('http://127.0.0.1:8000/api/admin/nha-cung-cap/tao-nha-cung-cap', this.create_nha_cung_cap)
                    .then((res) =>  {
                        if(res.data.status == true) {
                            toaster.success('Thông báo<br>' + res.data.message);
                            this.create_nha_cung_cap = "";
                            this.loadDataNhaCungCap();
                        }
                    });
            },
            deleteNhaCungCap() {
                axios
                    .delete('http://127.0.0.1:8000/api/admin/nha-cung-cap/xoa-nha-cung-cap/'+ this.delete_nha_cung_cap.id)
                    .then((res) =>  {
                        if(res.data.status == true) {
                            toaster.success('Thông báo<br>' + res.data.message);
                            this.loadDataNhaCungCap();
                        }
                        else{
                            toaster.danger('Thông báo<br>' + res.data.message);
                        }
                    });
            },
            updateNhaCungCap() {
                axios
                    .put('http://127.0.0.1:8000/api/admin/nha-cung-cap/cap-nhat-nha-cung-cap', this.edit_nha_cung_cap)
                    .then((res) =>  {
                        if(res.data.status == true) {
                            toaster.success('Thông báo<br>' + res.data.message);
                            this.loadDataNhaCungCap();
                        } else {
                            toaster.danger('Thông báo<br>' + res.data.message);
                        }
                    });
            },
    
            doiTrangThai(xyz) {
                axios
                    .put('http://127.0.0.1:8000/api/admin/nha-cung-cap/doi-trang-thai', xyz)
                    .then((res) =>  {
                        if(res.data.status == true) {
                            toaster.success('Thông báo<br>' + res.data.message);
                            this.loadDataNhaCungCap();
                        } else {
                            toaster.error(res.data.message);
                        }
                    });
            }
    
        }
    }
    </script>
    <style>
        
    </style>