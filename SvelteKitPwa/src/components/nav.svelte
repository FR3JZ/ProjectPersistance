<script>
</script>

<style>
	header{
	background-color: #3AAFA9;
	
	}	
	header .container{
		display: flex;
		flex-direction: row;
		height: 120px;
		color:#ffff ;
	}
	header .title{
		align-self: center;
		font-size: 36px;
	}
	header a{
		color: #ffff;
		text-decoration: none;
	}
	header li {
	  text-decoration: none;
	  font-size: 17px;
	  list-style: none;
	  font-size: 20px;
	  margin: 0 30px;
	}
	header li:hover{
		color: #DEF2F1;
	}
	header i{
		align-self: center;
		margin: 0 30px;
	}
	header img{
		width: auto;
		margin: 20px;
		margin-right: 40px;
	}
	.nav-right{
		display: flex;
		width: 100%;
		float: right;
		justify-content: end;
    	align-self: center;
	}

	</style>
<header>
	<div class="container">
		<img src="../../../static/TRIMM.png" alt="logo">
		<h2 class="title">Trimm</h2>
		<div class="nav-right">
			<a href="#">
				<li class="active">Home</li>
			</a>
			<a href="#">
				<li>Categorie 1</li>
			</a>
			<a href="#">
				<li>Categorie 2</li>
			</a>
			<a href="#">
				<li>Categorie 3</li>
			</a>
			<i class="fas fa-search"></i>
		</div>
	</div>
</header>