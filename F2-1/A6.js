'use strict'

// ======第一階段 開始======
function createPlayer (name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {
      if (this.hp > 0) {
        const mpCost = hp * 2
        if (this.mp >= mpCost) {
          this.hp += hp
          this.mp -= mpCost
          return `${this.name} HP recovered! (HP=${this.hp}, MP=${this.mp})`
        } else {
          return `${this.name} does not have enough MP.`
        }
      } else {
        return `${this.name} cannot use cure after death.`
      }
    },
    attack: function (enemy) {
      if (this.hp > 0) {
        const hitPoint = Math.floor(Math.random() * 100) + 1
        // 避免 enemy.hp 是負數的考量：一般來說，如果遊戲沒有特殊設定的話，玩家應該會預期，hp 頂多扣到 0，不會變成負數。如果畫面顯示 hp 是負數，可能會讓玩家困惑。雖然規格沒有指定 hp 不能是負數，但這麼做應該滿合理的，工作上若遇到「規格沒講，但我覺得是個好主意」的情況，可以提出來跟合作夥伴討論。
        if (enemy.hp > hitPoint) {
          enemy.hp -= hitPoint
        } else {
          enemy.hp = 0
        }

        let result = `${this.name} hit ${enemy.name}. ${enemy.name} lose ${hitPoint} HP. \n`
        // \n 可以換行

        if (enemy.hp > 0) {
          result += `${enemy.name} is still alive. (HP=${enemy.hp})`
        } else {
          result += `${enemy.name} is dead.`
        }
        return result
      } else {
        return `${this.name} cannot use attack after death.`
      }
    }
  }
}

console.log('====== CREATE PLAYERS ======')
const magician = createPlayer('Magician', 30, 100)
const warrior = createPlayer('Warrior', 100, 30)
console.log(magician) // {name: "Magician", hp: 30, mp: 100}
console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
console.log('====== START FIGHT ======')
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician))
  console.log(magician.cure(15)) // 固定補血 15 點
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log('Change sides \n')
    console.log(magician.attack(warrior))
    console.log(warrior.cure(15)) // 固定補血 15 點
  }
  console.log('======')
}
console.log('GAME OVER.')
// ======第一階段 結束======

/*
// ======第二階段 開始======
function createPlayer (name, hp, mp) {
  return {
    name: name,
    hp: hp,
    mp: mp,
    cure: function (hp) {
      if (this.hp <= 0) {
        return `${this.name} cannot use cure after death.`
        // 考量：優先判斷例外狀況，然後 return。return 是為了避免繼續執行後面的程式碼。這樣可以避免層層疊疊的 if-else，增加程式碼易讀性
      }

      const mpCost = hp * 2
      if (this.mp < mpCost) {
        return `${this.name} does not have enough MP.`
      }

      this.mp -= mpCost
      this.hp += hp
      return `${this.name} HP recovered! (HP=${this.hp}, MP=${this.mp})`
    },
    attack: function (enemy) {
      if (this.hp <= 0) {
        return `${this.name} cannot use attack after death.`
      }

      const hitPoint = Math.floor(Math.random() * 100) + 1
      let result = `${this.name} hit ${enemy.name}. ${enemy.name} lose ${hitPoint} HP.\n`

      if (enemy.hp > hitPoint) {
        enemy.hp -= hitPoint
        result += `${enemy.name} is still alive. (HP=${enemy.hp})`
      } else {
        enemy.hp = 0
        result += `${enemy.name} is dead.`
      }
      return result
    }
  }
}

console.log('====== CREATE PLAYERS ======')
const magician = createPlayer('Magician', 30, 100)
const warrior = createPlayer('Warrior', 100, 30)
console.log(magician) // {name: "Magician", hp: 30, mp: 100}
console.log(warrior) // {name: "Warrior", hp: 100, mp: 30}
console.log('====== START FIGHT ======')
while (warrior.hp > 0 && magician.hp > 0) {
  // 戰士先攻
  console.log(warrior.attack(magician))
  console.log(magician.cure(15)) // 固定補血 15 點
  // 魔法師後攻
  if (magician.hp > 0) {
    console.log('Change sides \n')
    console.log(magician.attack(warrior))
    console.log(warrior.cure(15)) // 固定補血 15 點
  }
  console.log('======')
}
console.log('GAME OVER.')
// ======第二階段 結束======
*/
