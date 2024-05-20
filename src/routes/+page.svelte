<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
	import Start from '$lib/components/input/Start.svelte';
	import Name from '$lib/components/input/Name.svelte';
	import Food from '$lib/components/input/Food.svelte';
	import Color from '$lib/components/input/Color.svelte';
	import Next from '$lib/components/navigation/Next.svelte';
	import Previous from '$lib/components/navigation/Previous.svelte';
    import Yes from '$lib/components/navigation/Yes.svelte';
    import No from '$lib/components/navigation/No.svelte';
    import createCurrentFormInput from '$lib/stores/store.svelte';

    let currentFormInput = createCurrentFormInput();
</script>

<main class="w-full">
	<div class="flex flex-row items-start justify-center">
		<div class="my-[10rem] mx-[5rem] w-full">
			<div class="flex flex-col bg-cyan-50 w-full rounded-t-md p-4 text-xl">
				<Food />
				<!-- 
				<Start />
				<Color />
				<Name />
				 -->
			</div>
			<div class="flex flex-row items-center justify-evenly bg-cyan-50 w-full  rounded-b-md p-2 text-xl">
				<No />
                <Yes />
			</div>
		</div>
		<div class="flex flex-col bg-cyan-50 my-[10rem] mx-[5rem] w-full rounded-md p-4">
			<Profile />
		</div>
	</div>
</main>
