<template>
  <div class="shophead">
    <div class="container">
      <div class="shophead__main">
        <div class="shophead__content">
          <h1>Каталог</h1>
          <p>
            Ассортимент уютных и стильных бескаркасных кресел и пуфов помогут вам найти
            идеальное решение для комфортного отдыха и создать неповторимую атмосферу в
            вашем доме
          </p>
        </div>
        <div class="shophead_img__w">
          <div class="shophead__img">
            <img src="/img/shophead.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.shophead__main {
  @include flex-start;
  padding-left: 14.5rem;
  gap: 2rem;

  h1 {
    font-size: 5rem;
    margin-bottom: 3rem;
    font-family: $font_1;
  }
  p {
    color: $gray;
    font-size: 2.4rem;
  }
}

.shophead__content {
  max-width: 60.4rem;
  margin-right: -4rem;
  padding: 10rem 0 17.9rem 0;
}

.shophead {
  background-color: $light;
  padding-top: $header;
  position: relative;
  margin-bottom: 5rem;
}

.shophead_img__w {
  z-index: 2;
  &:before {
    position: absolute;
    bottom: 0;
    right: 0;
    content: "";
    background-color: $lbrown;
    width: 100%;
    height: 100%;
    max-width: 95rem;
    max-height: 53.2rem;
    pointer-events: none;
    z-index: -1;
  }
}

.shophead__img {
  max-width: 79.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
