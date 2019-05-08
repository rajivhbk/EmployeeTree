<template>
    <div>
        <nav></nav>
        <div class="container">
            <div class="">
                <div class="sidebar">
                    <slot name="sidebar" />
                </div>
                <div class="content">
                    <main>
                        <slot name="main" />
                    </main>
                </div>
            </div>
        </div>
        <footer></footer>
    </div>
</template>
