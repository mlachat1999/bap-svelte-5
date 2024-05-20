<script lang="ts">
	let values = {
		red: '#FF0000',
		blue: '#0000FF',
		green: '#00FF00',
		yellow: '#FFFF00',
		purple: '#800080',
		orange: '#FFA500',
		pink: '#FFC0CB',
		brown: '#A52A2A'
	};
	const colorList = $state(Object.entries(values));
	let picked = $state("");
</script>

<div class="flex flex-col gap-4">
	<div>
		<h2>Favourite color?</h2>
	<p>Huidige kleur: {picked}</p>
	</div>
	<form>
		{#each colorList as color, index}
			<div class="flex flex-row flex-wrap items-center justify-start gap-8">
				<input
					name="color"
					type="radio"
					bind:group={picked}
					value={color[0]}
					class="h-5 w-5 text-blue-600"
				/>
				<p class="px-16 py-2" style="background-color: {color[1]}"></p>
				<p>{color[0]}</p>
			</div>
		{/each}
	</form>
</div>

<!-- bind:group only works with name="" attribute -->
<!-- this works in the REPL, not here 
https://svelte-5-preview.vercel.app/#H4sIAAAAAAAACk2S0WrrMAyGX8VoB7ZBaExhMNKkkA0KBw7sAeZduIna-cy1je10KyHvPmQnW29C9PmX9Ev2CAelMUD1OoKRJ4QKWueggHhxFIQz6ohQQLCD74jUofPKRaalOTYCYhCwFUZEjZGdpR4wsIaNRET02Ffs9ma345zz2yLDvR6QKLHdbqFHj2gyJvmCL6i1_cxFrrkbvNOpzCPn_PGHWy_NEbO-fbjSK_OR6TN_fvqx4u1nato-rNt1m_G0oW9nTYiss9r6fypE1rA_IcqIdy_7_9jFFZroFYa7PPL9_WbZQWf1X9Pj128Gp8O6zHujXZm6V2fWaRlCI-Cg8Wve4XiDsnu_6ipDDgqmqOZEIkreZv-1Mm6I-V9Eur9GQEoQsFC6yEaAl72yv3SvTF8dvR1cMy6Op-UwzdSM6gqWS0e3HVODV_421aVLuC6zpbEk-xMNO3s0sz7Xn_WmDvGiMaWuaPrlufQqOC0vFSO4md-FdBVbezylONXO2VDAyfbqoLCHKvoBp7fpG5idA_TOAgAA-->
