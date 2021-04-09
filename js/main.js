'use strict';

const $btn = document.getElementById('btn');
const omikuji = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

$btn.addEventListener('click', () => {
	const num = Math.floor(Math.random() * omikuji.length);
	$btn.textContent = omikuji[num];
});
