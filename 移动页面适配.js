function resetPage(){
	var ww=document.documentElement.clientWidth;//设备实际显示宽度
	var scale=ww/640;
	document.body.style.zoom=scale;
}
resetPage();
window.onresize=function (){
	resetPage();
}