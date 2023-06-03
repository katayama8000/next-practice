#!/bin/bash

# ページ名を取得
PAGE_NAME=$1

# ページ名に.tsxの拡張子を付ける
PAGE_FILE="${PAGE_NAME}.tsx"

# 対象のディレクトリ名を指定する
DIR_NAME="src/pages/Sample"

# ディレクトリが存在しない場合はエラーを出力して終了
if [ ! -d "$DIR_NAME" ]
then
  echo "$DIR_NAME ディレクトリが存在しません。"
  exit 1
fi

# 対象のファイルが既に存在する場合はエラーを出力して終了
if [ -e "$DIR_NAME/$PAGE_FILE" ]
then
  echo "$PAGE_FILE は既に存在します。"
  exit 1
fi

# ファイルの中身を作成する
echo "
const $PAGE_NAME = () => {
  return (
    <div>
      <h1>$PAGE_NAME</h1>
    </div>
  );
}

export default $PAGE_NAME;" > "$DIR_NAME/$PAGE_FILE"

echo "$DIR_NAME/$PAGE_FILE を作成しました。"