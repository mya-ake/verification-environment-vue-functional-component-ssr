<template>
  <div>
    <div class="row">
      <base-button>test</base-button>
    </div>
    <div class="row">
      <base-link to="/">base link</base-link>
    </div>
    <div class="row">
      <base-button-wrapper>test wrapper</base-button-wrapper>
    </div>
    <div class="row">
      <nuxt-link-wrapper to="/">nuxt-link wrapper</nuxt-link-wrapper>
    </div>
    <div class="row">
      <router-link-wrapper to="/">router-link wrapper</router-link-wrapper>
    </div>
    <div class="row">
      <base-link-wrapper to="/">base-link wrapper</base-link-wrapper>
    </div>
  </div>
</template>

<script>
import BaseButtonWrapper from '@/components/BaseButtonWrapper';
import NuxtLinkWrapper from '@/components/NuxtLinkWrapper';
import RouterLinkWrapper from '@/components/RouterLinkWrapper';
import BaseLinkWrapper from '@/components/BaseLinkWrapper';

console.log(BaseLinkWrapper);

export default {
  components: {
    BaseButtonWrapper,
    NuxtLinkWrapper,
    RouterLinkWrapper,
    BaseLinkWrapper,
  }
}
</script>
<style scoped>
.row {
  margin-bottom: 32px;
}
</style>
