<template lang="">
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/rocker/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item dropdown">
					<a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
						<div class="parent-icon">
							<i class='bx bx-home-circle'></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
					<ul class="dropdown-menu">
						<li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<router-link to="/admin/chuyen-muc">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Chuyên Mục</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/sach">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Sách</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/thanh-vien">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Thành Viên</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/tac-gia">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Tác giả</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/the-loai">
						<a class="nav-link">
							<div class="parent-icon">
								<i class="fa-solid fa-list"></i>
							</div>
							<div class="menu-title">Thể Loại</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>