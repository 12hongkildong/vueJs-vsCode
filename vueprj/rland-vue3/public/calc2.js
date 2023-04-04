export default{
	data(){
		let x = 30;
		let y = 50;
		let z = 0;
		
		return {x, y, z};
	},
	methods:{
		calcHandler(e){
			this.z = this.x+this.y;
						
		},
		resetHandler(e){			
			console.log("reset");
		}			
	},

	template:`
		<section id="calc">
		    <h1>덧셈 계산기</h1>
		    <form>
		        <fieldset>
		            <legend>계산기 입력폼</legend>
		            <div>
		                <label>x:</label>
		                <input dir="rtl" v-model.trim.number="x" @input="calcHandler">
		                <label>y:</label>
		                <input dir="rtl" v-model="y">
		                <span>=</span>
		                <span v-text="z"></span>
		            </div>
		            <hr>
		            <div>
		                <input type="submit" value="초기화" @click.prevent="resetHandler">
		                <input type="submit" value="계산하기" v-on:click.prevent="calcHandler">
		            </div>
		        </fieldset>
		    </form>
		</section>`
}