<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-primary" role="tablist">
                    <li v-on:click="LoadSach()" class="nav-item" role="presentation">
                        <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                            <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class='bx bx-home font-18 me-1'></i>
                                </div>
                                <div class="tab-title">Tất Cả</div>
                            </div>
                        </a>
                    </li>
                    <template v-for="(v, k) in list_the_loai">
                        <li v-on:click="LoadTheLoaiSach(v)" class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                aria-selected="true">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class='bx bx-home font-18 me-1'></i>
                                    </div>
                                    <div class="tab-title">{{ v.ten_the_loai }}</div>
                                </div>
                            </a>
                        </li>
                    </template>
                </ul>
                <div class="tab-content py-3">
                    <div class="row">
                        <div class="col">
                            <template v-for="(v, k) in list_sach">
                                <div class="card">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img height="426" width="426" v-bind:src="v.hinh_anh" class="card-img">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{{ v.ten_sach }}</h5>
                                                <p class="card-text">{{ v.mo_ta_ngan }}</p>
                                                <p class="card-text"><small class="text-muted">{{ v.updated_at }}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_the_loai: [],
            list_sach: [],
        }
    },
    mounted() {
        this.loadDataTheLoai();
        this.LoadSach();
    },
    methods: {
        loadDataTheLoai() {
            axios
                .get('http://127.0.0.1:8000/api/admin/the-loai/lay-du-lieu')
                .then((res) => {
                    this.list_the_loai = res.data.the_loai;
                    // console.log(this.list_the_loai);
                });
        },
        LoadSach() {
            axios
                .get('http://127.0.0.1:8000/api/admin/sach/lay-du-lieu')
                .then((res) => {
                    this.list_sach = res.data.data;
                    // console.log(this.list_sach);
                });
        },
        LoadTheLoaiSach(v) {
            console.log(v);
            axios
                .post('http://127.0.0.1:8000/api/admin/chi-tiet-sach/the-loai', v)
                .then((res) => {
                    this.list_sach = res.data.data;
                    console.log(this.list_sach);
                });
        }

    }

}
</script>
<style></style>