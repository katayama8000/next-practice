# ベースとなるイメージを指定
FROM node:latest

# 作業用ディレクトリを指定
WORKDIR /app

# ホスト側のファイルをコンテナにコピー
COPY . /app

# 必要なパッケージをインストール
RUN yarn install

# ポート番号を指定
EXPOSE 3000

# アプリケーションを起動
CMD ["yarn", "dev"]
