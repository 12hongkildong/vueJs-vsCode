import Calc from './calc2.js'

Vue

.createApp({
	components:{
		Calc
	},
	template: `
	<section>
		<h1>다양한 도구들을 만나 봅시다~</h1>
		<Calc/>
		<Calc/>
	</section>`


})
.mount("#app");