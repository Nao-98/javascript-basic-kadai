// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const changeText = document.getElementById('text');

// ボタンをクリックしたときに文字列を変更する処理
addBtn.addEventListener ('click', () => {
  changeText.textContent = 'ボタンをクリックしました';
});