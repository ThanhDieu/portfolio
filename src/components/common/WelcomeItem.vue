<template>
  <div class="item relative mb-8 flex lg:mt-0 lg:py-4 lg:pl-[calc(var(--section-gap)/2)]">
    <i
      class="flex items-center justify-center w-8 h-8 text-[var(--color-text)] lg:w-12 lg:h-12 lg:absolute lg:top-[calc(50%-25px)] lg:left-[-26px] border border-[var(--color-border)] bg-[var(--color-background)] rounded-lg">
      <slot name="icon"></slot>
    </i>
    <div class="details flex-1 ml-4">
      <h3 class="text-lg font-medium mb-1.5 text-[var(--color-heading)]">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item::before,
.item::after {
  content: ' ';
  position: absolute;
  border-left: 1px solid var(--color-border);
}

.item::before {
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item::after {
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:first-of-type::before {
  display: none;
}

.item:last-of-type::after {
  display: none;
}

@media (max-width: 1024px) {

  .item::before,
  .item::after {
    display: none;
  }
}
</style>
