const state1 = { username: 'john', point: 100, loading: true };
const b = {loading : false, point : 75, success:true}
// let state2 = {};

const state2 = Object.assign({},state1,{loading : false, point : 75, success:true});
console.log(state2);
