<script lang=ts>
	import Board from '../components/Board.svelte'
</script>

<svelte:head>
	<title>Libretasks</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<form method="POST" action="?/login">
		<label>
			Email
			<input name="email" type="email" />
		</label>
		<label>
			Password
			<input name="password" type="password">
		</label>
		<button type="submit">Log in</button>
	</form>
	<Board />
</section>

<style>
</style>
