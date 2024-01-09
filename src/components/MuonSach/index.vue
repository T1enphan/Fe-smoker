<template lang="">
     <div class="row">
       <div class="col-4">
           <div class="card">
               <div class="card-header mt-1">
                   <h6>Thêm Mới Thông Tin Mượn Sách</h6>
               </div>
               <div class="card-body">
                   <div class="mt-2">
                       <label>Thành Viên</label>
                       <select v-model="create_thong_tin.id_thanh_vien" class="form-control" name="" id="">
                            <template v-for="(value1, key1) in list_thanh_vien">
                                <option v-bind:value="value1.id">{{ value1.ho_va_ten }}</option>
                            </template>
                        </select>
                   </div>
                   <div class="mt-2">
                       <label>Sách</label>
                       <select v-model="create_thong_tin.id_sach" class="form-control" name="" id="">
                            <template v-for="(value2, key2) in list_sach">
                                <option v-bind:value="value2.id">{{ value2.ten_sach }}</option>
                            </template>
                        </select>
                   </div>
                   <div class="mt-2">
                       <label>Ngày Mượn</label>
                       <input v-model="create_thong_tin.ngay_muon" type="date" class="form-control mt-1">
                   </div>
                   <div class="mt-2">
                       <label>Ngày Trả</label>
                       <input v-model="create_thong_tin.ngay_tra" type="date" class="form-control mt-1">
                   </div>
                   <div class="mt-2">
                       <label>Tình Trạng</label>
                       <select v-model="create_thong_tin.tinh_trang" class="form-control mt-1">
                           <option value="1">Đang Mượn</option>
                           <option value="0">Trễ Hạn</option>
                       </select>
                   </div>
               </div>
               <div class="card-footer text-end">
                   <button v-on:click="createThongTin()" class="btn btn-primary">Thêm Mới</button>
               </div>
           </div>
       </div>
       <div class="col-8">
           <div class="card border-top border-0 border-4 border-primary">
               <div class="card-header">
                   <h5>Danh Sách Mượn Sách</h5>
               </div>
               <div class="card-body">
                   <div class="table-responsive">
                       <table class="table table-bordered">
                           <thead>
                             <th colspan="100%">
                                   <div class="input-group mb-3">
                                       <input  type="text" class="form-control" placeholder="Nhập thông tin cần tìm">
                                       <button class="btn btn-primary">
                                           <i class="fa-solid fa-magnifying-glass"></i>
                                       </button>
                                   </div>
                               </th>                         
                               <tr>
                                   <th class="text-center align-middle text-nowrap">
                                       #
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                       Tên Thành Viên
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                        Sách
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                        Ngày Mượn
                                   </th>
                                   <th class="text-center align-middle text-nowrap">
                                        Ngày Trả
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
                               <template v-for="(v, k) in list_muon_sach">
                                   <tr>
                                       <th class="text-center align-middle text-nowrap">
                                           {{k + 1}}
                                       </th>
                                       <td class="align-middle text-nowrap">
                                           {{v.ho_va_ten}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.ten_sach}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.ngay_muon}}
                                       </td>  
                                       <td class="align-middle text-nowrap">
                                           {{v.ngay_tra}}
                                       </td>       
                                       <td class="text-center align-middle text-nowrap">
                                           <button @:click="doiTrangThai(v)" v-if="v.tinh_trang == 0" class="btn btn-success"
                                               style="width: 100px;">Đang mượn</button>
                                           <button @:click="doiTrangThai(v)" v-else class="btn btn-warning"
                                               style="width: 100px;">Trễ hạn</button>
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
                   <!-- <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                   </div> -->
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
            list_muon_sach : [],
            create_thong_tin : {},
            list_sach: [],
            list_thanh_vien : [],
        }
    },
    mounted(){
        this.loadDataMuonSach();
        this.loadDataSach();
        this.loadDataThanhVien();
    },
    methods: {
        createThongTin() {
            axios
                .post('http://127.0.0.1:8000/api/admin/chi-tiet-muon-sach/tao-muon-sach', this.create_thong_tin)
                .then((res) => {
                    if (res.data.status == true) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.create_thong_tin={};
                        this.loadDataMuonSach();
                    }
                });
        },
        loadDataMuonSach() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chi-tiet-muon-sach/lay-du-lieu')
                .then((res) => {
                    this.list_muon_sach = res.data.data;
                    console.log(this.list_muon_sach);
                });
        },
        loadDataSach() {
            axios
                .get('http://127.0.0.1:8000/api/admin/sach/lay-du-lieu')
                .then((res) => {
                    this.list_sach = res.data.data;
                });
        },
        loadDataThanhVien()   {
                axios
                    .get('http://127.0.0.1:8000/api/admin/thanh-vien/lay-du-lieu')
                    .then((res) =>  {
                        this.list_thanh_vien = res.data.thanh_vien;
                    });
            },
    }
}
</script>
<style>
    
</style>