@charset 'UTF-8';

/*quando o tamanho da tela for menor do que 400 pixels esconda os links*/
	@media screen and (max-width: 685px){
		/*estilo para esconder os links do topo do site*/
		.hide-menu{
			display: none;
		}		
	}

	/*só mostra quando o tamanho da tela for maior do que 400 pixels*/
	@media screen and (min-width: 685px) {
		.hide-menunav{
			display: none;
		}
	}