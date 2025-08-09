# Python テストファイル
# EditorConfigが正しく動作する場合、このファイルは4スペースインデントになります

def greet_user(name):
    """ユーザーに挨拶する関数"""
    if name:
        print(f"こんにちは、{name}さん！")
    else:
        print("こんにちは、ゲストさん！")


class User:
    """ユーザークラス"""
    
    def __init__(self, user_id, name, age):
        self.id = user_id
        self.name = name
        self.age = age
    
    def introduce(self):
        """自己紹介"""
        print(f"私は{self.name}です。{self.age}歳です。")


# テストデータ
users = [
    User(1, "田中太郎", 30),
    User(2, "佐藤花子", 25)
]

# 各ユーザーに挨拶と自己紹介
for user in users:
    greet_user(user.name)
    user.introduce()
    print()  # 空行