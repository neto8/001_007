function buscaParejas (arreglo){
	var arregloPar=[];

	for(var i=0; i<arreglo.length; i++){
		
		for(j=i; j<arreglo.length; j++){
            if(arreglo[i] + arreglo[j]==0){
            	arregloPar.push(i+ " , "+j);
            }
		}
	}
return arregloPar;
}

console.log(buscaParejas([2,-5,10,5,4,-10,0,-5]));