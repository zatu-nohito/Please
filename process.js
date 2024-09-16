'use strict';

// HPの初期値を設定（例）
console.log('Please 2HPset');
window.PlayerHp = 100;
window.MonsterHp = 80;
console.log('2HPsetFin');

// HPバーの要素を取得
console.log('Please GE OH');
const playerHpBarFill = document.getElementById('playerHpBar');
const monsterHpBarFill = document.getElementById('monsterHpBar');
console.log('GE OH fin');
// HPバーを更新する関数
function updateHpBars() {
  // HPの割合を計算
  const playerHpPercentage = (PlayerHp / 100) * 100;
  const monsterHpPercentage = (MonsterHp / 100) * 100;

  // HPバーの幅を更新
  playerHpBarFill.style.width = playerHpPercentage + '%';
  monsterHpBarFill.style.width = monsterHpPercentage + '%';
}

// 初期状態でHPバーを表示
updateHpBars();
