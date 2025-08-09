// JavaScript テストファイル
// EditorConfigが正しく動作する場合、このファイルは2スペースインデントになります

function greetUser(name) {
  if (name) {
    console.log(`こんにちは、${name}さん！`);
  } else {
    console.log('こんにちは、ゲストさん！');
  }
}

const users = [
  {
    id: 1,
    name: '田中太郎',
    age: 30
  },
  {
    id: 2,
    name: '佐藤花子',
    age: 25
  }
];

// 配列の各要素に対して挨拶
users.forEach(user => {
  greetUser(user.name);
});