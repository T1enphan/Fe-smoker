<template >
    <div class="row">
        <div class="col-12">
            <div class="card  shadow-lg p-3 mb-5 bg-body rounded">
                <div class="card-header mt-2">
                    <div class="row">
                        <div class="col-6">
                            <h5>Danh Sách Sách</h5>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-primary float-end" data-bs-toggle="modal"
                                data-bs-target="#themMoiModal"><i class="fa-solid fa-plus"></i>Tạo Sách</button>
                        </div>
                    </div>
                    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Sách</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col">
                                            <label class="form-label">Tên Sách</label>
                                            <input v-model="create_sach.ten_sach" v-on:keyup="chuyenThanhSlug()" type="text" class="form-control"
                                                placeholder="Nhập tên sách">
                                        </div>
                                        <div class="col">
                                            <label class="form-label"> Slug Sách</label>
                                            <input disabled v-model="create_sach.slug_sach" class="form-control" type="text">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label class="form-label"> Năm Xuất Bản</label>
                                            <input v-model="create_sach.nam_xuat_ban" class="form-control" type="number">
                                        </div>
                                        <div class="col">
                                            <label class="form-label">Hình Ảnh</label>
                                            <input v-model="create_sach.hinh_anh" type="text" class="form-control"
                                                placeholder="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Số Lượng</label>
                                            <input v-model="create_sach.so_luong" type="number" class="form-control"
                                                placeholder="">
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Tác Giả</label>
                                            <select v-model="create_sach.id_tac_gia" class="form-control" name="" id="">
                                                <template v-for="(value1, key1) in list_tac_gia">
                                                    <option v-bind:value="value1.id">{{ value1.ten_tac_gia }}</option>
                                                </template>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label">Chuyên Mục</label>
                                            <select class="form-control" v-model="create_sach.id_chuyen_muc">
                                                <template v-for="(value, key) in list_chuyen_muc">
                                                    <option v-bind:value="value.id">{{ value.ten_chuyen_muc }}</option>
                                                </template>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Thể Loại</label>
                                            <select class="form-control" v-model="create_sach.id_the_loai">
                                                <template v-for="(value2, key2) in list_the_loai">
                                                    <option v-bind:value="value2.id">{{ value2.ten_the_loai }}</option>
                                                </template>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label class="form-label">Tình Trạng</label>
                                            <select v-model="create_sach.tinh_trang" class="form-select"
                                                aria-label="Default select example">
                                                <option value="0">Tạm Dừng</option>
                                                <option value="1">Hoạt Động </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="form-label">Mô Tả Ngắn</label>
                                        <textarea style="height: 100px" v-model="create_sach.mo_ta_ngan" type="text"
                                            class="form-control" placeholder="Nhập Mô Tả Ngắn">
                                                </textarea>
                                    </div>
                                    <div class="row">
                                        <label class="form-label">Mô Tả Chi Tiết</label>
                                        <textarea style="height: 100px" v-model="create_sach.mo_ta_chi_tiet" type="text"
                                            class="form-control" placeholder="Nhập Mô Tả Chi Tiết"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                    <button @:click="createSach()" type="button" class="btn btn-primary"
                                        data-bs-dismiss="modal">Thêm Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th colspan="100%">
                                        <div class="input-group mb-3">
                                            <input v-on:keyup.enter="searchSach()" v-model="key_search.abc" type="text"
                                                class="form-control" placeholder="Nhập thông tin cần tìm">
                                            <button class="btn btn-primary">
                                                <i class="fa-solid fa-magnifying-glass" v-on:click="searchSach()"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                <tr class="text-center align-middle">
                                    <th>#</th>
                                    <th>Tên Sách</th>
                                    <th>Slug Sách</th>
                                    <th>Thể Loại</th>
                                    <th>Chuyên Mục</th>
                                    <th>Tác Giả</th>
                                    <th>Số Lượng</th>
                                    <th>Mô Tả Ngắn</th>
                                    <th>Mô Tả Chi Tiết</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tình Trạng</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in list_sach">
                                    <th class="align-middle text-nowrap text-center">{{ k + 1 }}</th>
                                    <td class="align-middle text-nowrap">{{ v.ten_sach }}</td>
                                    <td class="align-middle text-nowrap">{{ v.slug_sach }}</td>
                                    <td class="align-middle text-nowrap">{{ v.ten_the_loai }}</td>
                                    <td class="align-middle text-nowrap">{{ v.ten_chuyen_muc }}</td>
                                    <td class="align-middle text-nowrap">{{ v.ten_tac_gia }}</td>
                                    <td class="align-middle text-nowrap">{{ v.so_luong }}</td>
                                    <td class="align-middle text-nowrap text-center">
                                        <button type="button" v-on:click="mo_ta = v" class="btn btn-primary text-center"
                                            data-bs-toggle="modal" data-bs-target="#motangan">
                                            <i class="fa-solid fa-file"></i>
                                        </button>

                                    </td>
                                    <td class="align-middle text-nowrap text-center">
                                        <button type="button" v-on:click="mo_ta = v" class="btn btn-primary"
                                            data-bs-toggle="modal" data-bs-target="#motachitiet">
                                            <i class="fa-regular fa-file"></i>
                                        </button>

                                    </td>
                                    <td class="align-middle text-nowrap text-center"><img
                                            style="height: 100px; width: 120px;" v-bind:src="v.hinh_anh"></td>
                                    <td class="align-middle text-nowrap text-center">
                                        <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1"
                                            class="btn btn-success">Hoạt Động</button>
                                        <button @:click="doiTrangThai(v)" v-else class="btn btn-warning">Tạm Dừng</button>
                                    </td>
                                    <td class="align-middle text-nowrap text-center">
                                        <button class="btn btn-primary" style="margin-right: 4px;" data-bs-toggle="modal"
                                            v-on:click="Object.assign(edit_sach, v)" data-bs-target="#capNhatmodal">Cập
                                            Nhật</button>
                                        <button v-on:click="Object.assign(delete_sach, v)" class="btn btn-danger"
                                            data-bs-toggle="modal" data-bs-target="#xoaModal">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="capNhatmodal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Sách</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label">Tên Sách</label>
                                                <input v-model="edit_sach.ten_sach" v-on:keyup="chuyenThanhSlugEdit()" type="text" class="form-control"
                                                    placeholder="Nhập tên sách">
                                            </div>
                                            <div class="col-6">
                                                <label class="form-label"> Slug Sách</label>
                                                <input v-model="edit_sach.slug_sach" disabled class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label">Chuyên Mục</label>
                                                <input v-model="edit_sach.ten_chuyen_muc" type="text" class="form-control"
                                                    placeholder="Nhập Chuyên Mục">
                                            </div>
                                            <div class="col-6">
                                                <label class="form-label">Tác Giả</label>
                                                <input v-model="edit_sach.ten_tac_gia" type="text" class="form-control"
                                                    placeholder="Nhập Tác Giả">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label">Số Lượng</label>
                                                <input v-model="edit_sach.so_luong" type="text" class="form-control"
                                                    placeholder="">
                                            </div>
                                            
                                            <div class="col-6">
                                                <label class="form-label">Hình Ảnh</label>
                                                <input v-model="edit_sach.hinh_anh" type="text" class="form-control"
                                                    placeholder="">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label">Mô Tả Chi Tiết</label>
                                                <!-- <input v-model="edit_sach.mo_ta_chi_tiet" type="text" class="form-control"
                                                    placeholder="Nhập Mô Tả Chi Tiết"> -->
                                                <textarea v-model="edit_sach.mo_ta_chi_tiet" class="form-control" name="" id="" cols="30" rows="10"></textarea>
                                            </div>
                                            <div class="col-6">
                                                <label class="form-label">Mô Tả Ngắn</label>
                                                <textarea v-model="edit_sach.mo_ta_ngan" class="form-control" name="" id="" cols="30" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label">Tình Trạng</label>
                                                <select v-model="edit_sach.tinh_trang" class="form-select"
                                                    aria-label="Default select example">

                                                    <option value="1">Tạm Dừng</option>
                                                    <option value="0">Hoạt Động </option>

                                                </select>
                                            </div>
                                            <div class="col-6">
                                                <label class="form-label">Thể Loại</label>
                                                <input v-model="edit_sach.ten_the_loai"  type="text" class="form-control"
                                                    placeholder="Nhập Thể Loại">
                                            </div>
                                            

                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label"> Năm Xuất Bản</label>
                                                <input v-model="edit_sach.nam_xuat_ban" class="form-control" type="number">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                    <button v-on:click="updateSach()" data-bs-dismiss="modal" type="button"
                                        class="btn btn-primary">Cập Nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">xóa Sách</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-warning border-0 bg-warning">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6><b class="text-danger">Warning</b></h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa <b>{{ delete_sach.ten_sach }}</b> này không?
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
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                    <button v-on:click="deleteSach()" data-bs-dismiss="modal" type="button"
                                        class="btn btn-primary">XÓA</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="motangan" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {{ mo_ta.mo_ta_ngan }}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="motachitiet" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Mô tả chi tiết</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {{ mo_ta.mo_ta_chi_tiet }}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
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
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            list_sach: [],
            list_the_loai: [],
            list_chuyen_muc: [],
            list_tac_gia: [],
            key_search: {},
            create_sach: {},
            delete_sach: {},
            edit_sach: {},
            mo_ta: {},
        }
    },
    mounted() {
        this.loadDataSach();
        this.loadDataChuyenMuc();
        this.loadDataTacGia();
        this.loadDataTheLoai();
    },
    methods: {
        loadDataSach() {
            axios
                .get('http://127.0.0.1:8000/api/admin/sach/lay-du-lieu')
                .then((res) => {
                    this.list_sach = res.data.data;
                });
        },
        loadDataTacGia() {
            axios
                .get('http://127.0.0.1:8000/api/admin/tac-gia/lay-du-lieu')
                .then((res) => {
                    this.list_tac_gia = res.data.tac_gia;
                });
        },
        loadDataTheLoai() {
            axios
                .get('http://127.0.0.1:8000/api/admin/the-loai/lay-du-lieu')
                .then((res) => {
                    this.list_the_loai = res.data.the_loai;
                });
        },
        loadDataChuyenMuc() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuyen-muc/lay-du-lieu')
                .then((res) => {
                    this.list_chuyen_muc = res.data.chuyen_muc;
                });
        },
        searchSach() {
            axios
                .post('http://127.0.0.1:8000/api/admin/sach/tim-sach', this.key_search)
                .then((res) => {
                    this.list_sach = res.data.data;
                });
        },

        createSach() {
            console.log(this.create_sach);
            axios
                .post('http://127.0.0.1:8000/api/admin/sach/tao-sach', this.create_sach)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_sach = "";
                        this.loadDataSach();
                    }
                });
        },
        deleteSach() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/sach/xoa-sach/' + this.delete_sach.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSach();
                    }
                    else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        updateSach() {
            axios
                .put('http://127.0.0.1:8000/api/admin/sach/cap-nhat-sach', this.edit_sach)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSach();
                    } else {
                        toaster.danger('Thông báo<br>' + res.data.message);
                    }
                });
        },
        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/sach/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataSach();
                    } else {
                        toaster.error(res.data.message);
                    }
                });
        },
        toSlug(str) {
            str = str.toLowerCase();
            str = str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
            str = str.replace(/[đĐ]/g, 'd');
            str = str.replace(/([^0-9a-z-\s])/g, '');
            str = str.replace(/(\s+)/g, '-');
            str = str.replace(/-+/g, '-');
            str = str.replace(/^-+|-+$/g, '');

            return str;
        },
        chuyenThanhSlug(){
            this.create_sach.slug_sach = this.toSlug(this.create_sach.ten_sach);
        },
        chuyenThanhSlugEdit(){
            this.edit_sach.slug_sach = this.toSlug(this.edit_sach.ten_sach)
        },
    },
}
</script>
<style ></style>