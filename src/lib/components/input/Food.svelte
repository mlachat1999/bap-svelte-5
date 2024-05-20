<script lang="ts">
	let selectedFood = $state(1);
	const foods = [
		{ id: 1, name: 'Pizza', img: '../foodpics/pizza.png' },
		{ id: 2, name: 'Spaghetti', img: '../foodpics/spaghetti.png' },
		{ id: 3, name: 'Burger', img: '../foodpics/hamburger.png' },
		{ id: 4, name: 'Curry', img: '../foodpics/kipcurry.png' },
		{ id: 5, name: 'BBQ', img: '../foodpics/bbq.png' },
		{ id: 6, name: 'Fish', img: '../foodpics/vis.png' }
	];
</script>

<div class="flex flex-col gap-4">
	<h2>Favourite Food?</h2>
	<div class="">
		<select class="mb-4" bind:value={selectedFood}>
			{#each foods as food}
				<option value={food.id}>{food.name}</option>
			{/each}
		</select>
		<img src={foods[selectedFood-1].img} alt={foods[selectedFood].name} class="w-24 h-24"/>
	</div>
</div>

