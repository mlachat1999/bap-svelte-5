<script lang="ts">
	import Header from '$lib/components/semantic/Header.svelte';
    import '../app.css';
</script>

<body class="bg-cyan-100">
    <Header />
    <slot />
</body>