<script lang=ts>
	function onSubmit(e) {
		const formData = new FormData(e.target);
		let data = {};
		for(const f of formData) {
			const [k, v] = f;
			data[k] = v			
		}
		console.log(data)
	}
</script>

<svelte:head>
	<title>Libretasks</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<form method="POST" on:submit|preventDefault={onSubmit}>
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
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
