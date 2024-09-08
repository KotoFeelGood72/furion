<template>
  <div class="recomended">
    <div class="container">
      <div class="recomended_main p10">
        <h3>Рекомендуем сегодня</h3>
        <ul class="recomended_list">
          <li class="recomended_item">
            <NuxtLink to="/">
              <img src="/img/recomended-0.jpg" alt="" />
              <div class="item__sale">до <span>-40 %</span></div>
            </NuxtLink>
          </li>
          <li class="recomended_item">
            <NuxtLink to="/">
              <div class="recomended_item__content">
                <span>23 апреля - 18 мая</span>
                <h3>Уже тепло</h3>
                <p>Новая коллекция 2024 для вашей мансарды</p>
                <DefaultBtn
                  name="Подробнее"
                  type="secondary"
                  color="white"
                  size="xnormal"
                />
              </div>
              <div class="recomended_item__img">
                <img src="/img/recomended-1.jpg" alt="" />
                <div class="item__sale">до <span>-40 %</span></div>
              </div>
            </NuxtLink>
          </li>
          <li class="recomended_item">
            <NuxtLink to="/">
              <img src="/img/recomended-2.jpg" alt="" />
              <div class="item__sale">до <span>-40 %</span></div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultBtn from "../ui/DefaultBtn.vue";
</script>

<style scoped lang="scss">
.recomended_main {
  h3 {
    font-size: 5rem;
    margin-bottom: 4.5rem;
  }
}

.recomended_list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33.3%, 1fr));
}

.recomended_item {
  @include flex-center;
  width: 100%;
  height: 100%;
  position: relative;
  max-height: 94.7rem;
  background-color: $black;
  img {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
  }

  &:nth-child(1) {
    .item__sale {
      right: 2.8rem;
      bottom: 3.5rem;
    }
  }
  &:nth-child(2) {
    .item__sale {
      left: 1.9rem;
      top: 1.9rem;
    }
  }
  &:nth-child(3) {
    .item__sale {
      left: 3.4rem;
      top: 2.4rem;
    }
  }
  a {
    @include flex-center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.recomended_item__img {
  position: relative;
}

.item__sale {
  position: absolute;
  z-index: 2;
  font-size: 1.4rem;
  background-image: url("../../assets/icons/sale-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 0.5rem 0.8rem 0.6rem 3rem;

  font-family: $font_2;
  font-weight: 500;
  font-size: 1.2rem;

  span {
    font-size: 1.4rem;
    font-family: $font_4;
  }
}

.recomended_item__content {
  flex-grow: 1;
  background-color: $lbrown;
  width: 100%;
  padding: 5.1rem 3rem;
  color: $white;

  :deep(.button) {
    display: inline-flex;
  }

  span {
    font-family: $font_2;
    display: block;
    margin-bottom: 1.6rem;
  }

  h3 {
    font-size: 4rem;
    margin-bottom: 1.8rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 5rem;
  }
}

.recomended_item__img {
  max-height: 556.3rem;
  width: 100%;
  @include flex-center;
}
</style>
