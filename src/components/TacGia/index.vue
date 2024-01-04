<template>
    <div class="row">
       <div class="col-4">
           <div class="card">
               <div class="card-header mt-1">
                   <h6>Thêm Mới Tác Giả</h6>
               </div>
               <div class="card-body">
                   <div class="mt-2">
                       <label>Tên Tác Giả</label>
                       <input v-model="create_tac_gia.ten_tac_gia" type="text" class="form-control mt-1">
                   </div>
                   <div class="mt-2">
                       <label>Bút Danh</label>
                       <input v-model="create_tac_gia.but_danh" type="text" class="form-control mt-1">
                   </div>
                   <div class="mt-2">
                       <label>Ngày Sinh</label>
                       <input v-model="create_tac_gia.ngay_sinh" type="date" class="form-control mt-1">
                   </div>
                   <div class="mt-2">
                       <label>Giai Đoạn Sáng Tác</label>
                       <input v-model="create_tac_gia.giai_doan_sang_tac" type="text" class="form-control mt-1">
                   </div>
                   <div class="mt-2">
                       <label>Tác Phẩm Tiêu Biểu</label>
                       <input v-model="create_tac_gia.tac_pham" type="text" class="form-control mt-1">
                   </div>

                   <div class="mt-2">
                       <label>Tình Trạng</label>
                       <select v-model="create_tac_gia.tinh_trang" class="form-control mt-1">
                           <option value="1">Hiển Thị</option>
                           <option value="0">Tạm Tắt</option>
                       </select>
                   </div>
               </div>
               <div class="card-footer text-end">
                   <button v-on:click="createTacGia()" class="btn btn-primary">Thêm Mới</button>
               </div>
           </div>
       </div>
       <div class="col-8">
           <div class="card border-top border-0 border-4 border-primary">
               <div class="card-header">
                   <h5>Danh Sách Tác Giả</h5>
               </div>
               <div class="card-body">
                   <div class="table-responsive">
                       <table class="table table-bordered">
                           <thead>
                             <th colspan="100%">
                                   <div class="input-group mb-3">
                                       <input  v-on:keyup.enter="searchTacGia()"  v-model="key_search.abc" type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                       <button class="btn btn-primary" v-on:click="searchTacGia()">
                                           <i class="fa-solid fa-magnifying-glass"></i>
                                       </button>
                                   </div>
                               </th>                         
                               <tr>
                                   <th class="text-center align-middle text-nowrap">
                                       #
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                       Tên Tác Giả
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                         Bút Danh
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                         Ngày Sinh
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                         Giai Đoạn Sáng Tác
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                         Tác Phẩm
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
                               <template v-for="(v, k) in list_tac_gia">
                                   <tr>
                                       <th class="text-center align-middle text-nowrap">
                                           {{k + 1}}
                                       </th>
                                       <td class="align-middle text-nowrap">
                                           {{v.ten_tac_gia}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.but_danh}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.ngay_sinh}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.giai_doan_sang_tac}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.tac_pham}}
                                       </td>       
                                       <td class="text-center align-middle text-nowrap">
                                           <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 1" class="btn btn-success"
                                               style="width: 100px;">Hiển
                                               Thị</button>
                                           <button @:click="doiTrangThai(v)" v-else class="btn btn-warning"
                                               style="width: 100px;">Tạm Dừng</button>
                                      </td>
                                      <td class="text-center align-middle text-nowrap">
                                           <button v-on:click="Object.assign(edit_tac_gia, v)" class="btn btn-info me-2"
                                               style="width: 100px;" data-bs-toggle="modal" data-bs-target="#capNhatModal">Cập
                                               Nhật</button>
                                           <button class="btn btn-danger" style="width: 100px;" data-bs-toggle="modal"
                                               data-bs-target="#xoaModal"
                                               
                                               v-on:click="Object.assign(delete_tac_gia, v)">Xóa</button>
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
                                   <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tác Giả</h1>
                                   <button type="button" class="btn-close" data-bs-dismiss="modal"
                                       aria-label="Close"></button>
                               </div>
                               <div class="modal-body">
                                   <div class="row">
                                       <div class="col-12">
                                           <label for="">Tên Tác Giả</label>
                                           <input v-model="edit_tac_gia.ten_tac_gia" type="text"
                                               class="form-control mt-2">
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-12">
                                           <label for="">Bút Danh</label>
                                           <input v-model="edit_tac_gia.but_danh" type="text"
                                               class="form-control mt-2">
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-12">
                                           <label for="">Ngày Sinh</label>
                                           <input v-model="edit_tac_gia.ngay_sinh" type="text"
                                               class="form-control mt-2">
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-12">
                                           <label for="">Giai Đoạn Sáng Tác</label>
                                           <input v-model="edit_tac_gia.giai_doan_sang_tac" type="text"
                                               class="form-control mt-2">
                                       </div>
                                   </div>
                                   <div class="row mt-2">
                                       <div class="col-12">
                                           <label for="">Tác Phẩm</label>
                                           <input v-model="edit_tac_gia.tac_pham" type="text"
                                               class="form-control mt-2">
                                       </div>
                                   </div>
                                   <div class="row mt-2">
                                       <div class="col-12">
                                           <label for="">Tình Trạng</label>
                                           <select v-model="edit_tac_gia.tinh_trang" class="form-control mt-2">
                                               <option value="1">Hiển Thị</option>
                                               <option value="0">Tạm Dừng</option>
                                           </select>
                                       </div>
                                   </div>
                               </div>
                               <div class="modal-footer">
                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                                   <button data-bs-dismiss="modal" @:click="updateTacGia()" type="button"
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
                                   <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa tác giả</h1>
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
                                                   <p>Bạn có muốn xóa <b class="text-danger">{{ delete_tac_gia.ten_tac_gia }}</b> này không?</p>
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
                                   <button type="button" class="btn btn-danger" v-on:click="deleteTacGia()"
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
            list_tac_gia: [],
            key_search: {},
            create_tac_gia: {},
            delete_tac_gia: {},
            edit_tac_gia: {},
        }
    },
    mounted() {
        this.loadDataTacGia();
    },
    methods: {
        loadDataTacGia() {
            axios
                .get('http://127.0.0.1:8000/api/admin/tac-gia/lay-du-lieu')
                .then((res) => {
                    this.list_tac_gia = res.data.tac_gia;
                });
        },
        searchTacGia() {
            axios
                .post('http://127.0.0.1:8000/api/admin/tac-gia/tim-tac-gia', this.key_search)
                .then((res) => {
                    this.list_tac_gia = res.data.tac_gia;
                });
        },

        createTacGia() {
            axios
                .post('http://127.0.0.1:8000/api/admin/tac-gia/tao-tac-gia', this.create_tac_gia)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_tac_gia={};
                        this.loadDataTacGia();
                    }
                });
        },

        deleteTacGia() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/tac-gia/xoa-tac-gia/' + this.delete_tac_gia.id)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataTacGia();
                    }
                    else {
                        toaster.success('Thông báo<br>' + res.data.message);

                    }
                });
        },

        updateTacGia() {
            axios
                .put('http://127.0.0.1:8000/api/admin/tac-gia/cap-nhat-tac-gia', this.edit_tac_gia)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataTacGia();
                    } else {
                        toaster.success('Thông báo<br>' + res.data.message);
                    }
                });
        },

        doiTrangThai(xyz) {
            axios
                .put('http://127.0.0.1:8000/api/admin/tac-gia/doi-trang-thai', xyz)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.loadDataTacGia();
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