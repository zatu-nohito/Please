'use strict';
// ゲームを終わらせるときの関数↓
function finGame(){
  document.getElementById("atk").disabled = true;
  document.getElementById("recovery").disabled = true;
}

function updateOutHp(){
  document.getElementById('outMonsterHp').textContent = `HP:${MonsterHp}`;
  document.getElementById('outPlayerHp').textContent =`HP:${PlayerHp}`;
  console.log(`playerのHPは${PlayerHp}です`);
  console.log(`monsterのHPは${MonsterHp}です`);

};
updateOutHp();


//Monster 実行をMonsterAttackdevで一括管理
function  MonsterAttackDev(){
if (MonsterHp > 50) {

  let Mattack = Number(Math.floor(Math.random() * 15));
  PlayerHp -= Mattack;
  if (PlayerHp > 0) {
    document.getElementById('outPoint').textContent = `敵から${Mattack}point,ダメージを受けた`;
    updateOutHp()
    updateHpBars();

  } else {
    //Playerの体力が0以下になったとき
    PlayerHp = 0;
    updateHpBars();
    document.getElementById('outPoint').textContent = `!LOSE!`;
    updateOutHp();
    finGame();
  }


} else if (MonsterHp > 15) {


  let forCPUjudge = Number(Math.floor(Math.random() * 2));
  if (forCPUjudge === 1) {
    let MonsterRE = Number((Math.floor(Math.random() * 5)) + 3);
    MonsterHp += MonsterRE;
    document.getElementById('outPoint').textContent = `敵は${MonsterRE}point回復した`;
    updateOutHp();
  } else {
    let Mattack = Number(Math.floor(Math.random() * 15));
    PlayerHp -= Mattack;
    updateOutHp();

    if (PlayerHp > 0) {
      document.getElementById('outPoint').textContent = `敵から${Mattack}point,ダメージを受けた`;
      updateHpBars();
      updateOutHp();

    } else {
      //Playerの体力が0以下になったとき
      PlayerHp = 0;
      updateHpBars();
      document.getElementById('outPoint').textContent = `!LOSE!`;
      updateOutHp();
      finGame();
    }
  }
} else {


  let MonsterRE = Number((Math.floor(Math.random() * 5)) + 3);
  MonsterHp += MonsterRE;
  document.getElementById('outPoint').textContent = `敵は${MonsterRE}point回復した`;
  updateOutHp();
};
};







// atk
document.getElementById('atk').addEventListener('click', () => {
  let Pattack = Number(Math.floor(Math.random() * 10));
  MonsterHp -= Pattack;
  // 1を下回った時の挙動強制変更
  // 通常時
  if (MonsterHp > 0) {
    console.log('normalAtk');
    document.getElementById('outPoin').textContent = `敵に${Pattack}point,ダメージを与えた`;
    document.getElementById('outMonsterHp').textContent = `HP:${MonsterHp}`;
    document.getElementById('outPlayerHp').textContent =`HP:${PlayerHp}`;
    updateHpBars();
    updateOutHp();
    //Monsterからの攻撃or回復
    MonsterAttackDev();
  } else {
    // 1 >
    console.log('ab.finished Atk');
    MonsterHp = 0
    document.getElementById('outPoin').textContent = `!WIN!`;
    document.getElementById('outMonsterHp').textContent = `HP:${MonsterHp}`;
    updateHpBars();
    updateOutHp();
    finGame();
  }


// sheild
  document.getElementById('recovery').addEventListener('click', () => {
    let Precovery = Number(Math.floor(Math.random() * 10));
    PlayerHp += Precovery;
    // HPが100を上回った時の強制挙動変更
    // 通常時
    if (PlayerHp < 100) {
      console.log('normalRV');
      document.getElementById('outPoin').textContent = `私は${Precovery}point回復した`;
      document.getElementById('outPlayerHp').textContent = `HP:${PlayerHp}`;
      MonsterAttackDev();
      updateHpBars();
      updateOutHp();
      //Monsterからの攻撃or回復
    } else {
      // 1 >
      console.log('ab.finished sheild');
      PlayerHp = 100;
      document.getElementById('outPoin').textContent = `HPを最大まで回復しました`;
      document.getElementById('outPlayerHp').textContent = `HP:${PlayerHp}`;
      document.getElementById('outMonsterHp').textContent = `HP:${MonsterHp}`;
      MonsterAttackDev();
      updateHpBars();
      updateOutHp();
    }

});
});
