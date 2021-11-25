<template>
<div>
    <h2>Index Users</h2>
    <p>{{ $route.params.id }}</p>
    <ul>
        <li>
            <nuxt-link to="/users/one">One</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/users/contact">contact</nuxt-link>
        </li>
    </ul>
    <nuxt-link to="/">home</nuxt-link>
</div>
</template>