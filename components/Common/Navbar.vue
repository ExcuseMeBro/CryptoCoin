<template>
  <div>
    <!-- Navbar Start -->
    <nav class='navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5'>
      <nuxt-link to='/' class='navbar-brand d-flex align-items-center'>
        <h2 class='m-0 text-primary'><img class='img-fluid me-2' src='/img/icon-1.png' alt=''
                                          style='width: 45px;'>CryptoCoin</h2>
      </nuxt-link>
      <button type='button' class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarCollapse'>
        <div class='navbar-nav ms-auto py-4 py-lg-0'>
          <nuxt-link to='/' class='nav-item nav-link active'>Home</nuxt-link>
          <nuxt-link to='/about' class='nav-item nav-link'>About</nuxt-link>
          <nuxt-link to='/downloads' class='nav-item nav-link'>Downloads</nuxt-link>
          <nuxt-link to='/news' class='nav-item nav-link'>News</nuxt-link>
          <nuxt-link to='/login' class='nav-item nav-link'>Login</nuxt-link>
        </div>
        <div class='h-100 d-lg-inline-flex align-items-center d-none'>
          <a class='btn btn-square rounded-circle bg-light text-primary me-2' href=''><i
            class='fab fa-facebook-f'></i></a>
          <a class='btn btn-square rounded-circle bg-light text-primary me-2' href=''><i
            class='fab fa-twitter'></i></a>
          <a class='btn btn-square rounded-circle bg-light text-primary me-0' href=''><i
            class='fab fa-linkedin-in'></i></a>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>

</style>