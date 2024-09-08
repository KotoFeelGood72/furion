<!-- @format -->

<template>
	<header class="header" :class="{ gray: isHome }">
		<div class="container">
			<div class="header_top">
				<div class="header_col__left">
					<div class="header_phone">
						<a target="_blank" href="tel:+78002222659">+7 (800) 222 26 59 </a>
					</div>
					<Socials />
				</div>
				<div class="header_center">
					<Logo />
				</div>
				<div class="header_col__right">
					<DefaultBtn
						name="Связаться с нами"
						type="secondary"
						color="brown"
						size="xsmall"
					/>
					<div class="header__action">
						<IconBtn @click="targetUser()" />
						<IconBtn icon="custom:cart" @click="router.push('/cart')" />
					</div>
				</div>
			</div>
			<div class="header_bottom">
				<Nav />
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import Socials from "@/components/ui/Socials.vue";
	import Logo from "../ui/Logo.vue";
	import DefaultBtn from "../ui/DefaultBtn.vue";
	import IconBtn from "../ui/IconBtn.vue";
	import Nav from "../ui/Nav.vue";
	import { useRoute, useRouter } from "vue-router";
	import { useModalStore } from "~/store/useModalStore";
	import { useUserStoreRefs } from "~/store/useUserStore";

	const route = useRoute();
	const router = useRouter();
	const { openModal, closeModal } = useModalStore();
	const { user } = useUserStoreRefs();

	const isHome = computed(() => route.name != "index");

	const targetUser = () => {
		if(!user.value || !user.value.token ) {
			openModal('auth')

		} else {
			closeModal('auth')
			router.push('profile')
		}
	}
</script>

<style scoped lang="scss">
	.header {
		padding-bottom: 4rem;
		// background-color: $light;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 101;
		height: $header;
		width: 100%;

		&.gray {
			background-color: $light;
		}
	}
	.header_top {
		@include flex-space;
		padding: 3.4rem 0 4.6rem 0;
		position: relative;
	}

	.header_center {
		position: absolute;
		left: 49.2%;
		top: 46.3%;
		transform: translate(-50%, -50%);
	}

	.header_col__left,
	.header_col__right,
	.header__action {
		@include flex-start;
		gap: 4rem;
	}

	.header_col__right {
		gap: 3.5rem;
	}
	.header__action {
		gap: 2.4rem;
	}
	.header_col__left {
		align-items: flex-end;
	}
	.header_phone {
		font-size: 1.8rem;
		font-family: $font_2;
		color: $gray;
	}
</style>
