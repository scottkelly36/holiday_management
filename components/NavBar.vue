<template>
  <nav class="TopNav">
    <div class="TopNav__container container">
        <div class="TopNav__logo-container">
            <img src="/images/logo.png" alt="" class="TopNav__logo"/>
        </div>
    
        <div class="TopNav__navigation-container">
            <ul class="TopNav__navigation">
                <li class="TopNav__link">
                    Home
                </li>
                <li class="TopNav__link">
                    contact
                </li>
                <li class="TopNav__link">
                    FAQ
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
@import "~/assets/css/settings/vars.css";

    .TopNav {
        width: 100%;
        background-color: var(--white);
        box-shadow: var(--bottom-shadow);
    }

    .TopNav__container {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .TopNav__navigation {
        display: flex;
        gap: 1.5rem;
        list-style: none;
    }

    .TopNav__logo-container {
        height: 100%;
        padding: 1rem 0;
    }
    .TopNav__logo {
        height: 100%;
    }
</style>