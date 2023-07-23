// 配列の宣言と値の代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// for文で配列に代入された全ての祝日をコンソールに出力する
for (i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}

// while文で配列に代入された全ての祝日をコンソールに出力する
// i にすると for文と重複するため、index と定義する
let index = 0;

while (index < holidays.length) {
  console.log(holidays[index]);
  // 無限ループしないようにする
  index++;
}

/*
while文で「const index = 0;」とするとエラーが発生する

↓ 詳細 ↓

「Assignment to constant variable」
→ JavaScriptの変数定義で発生するエラー

このエラーが発生する理由
→ constなど変更できない定数で定義された変数を新たな値に書き換えようとされた場合に発生する

主な対処方法
→ ・予定とは別の変数名を使おうとしてないか調べる
  ・その変数名で良い場合は定義をletやvarなどに変更する
*/