function resetPage(){
	var ww=document.documentElement.clientWidth;//设备实际显示宽度
	var scale=ww/640;
	document.body.style.zoom=scale;
}
resetPage();//调取函数
window.onresize=function (){
	resetPage();
}
